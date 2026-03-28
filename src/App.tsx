import { Routes, Route, NavLink, useParams, useNavigate, useLocation } from 'react-router-dom'
import { nomiReports, nonoReports, nomiReadings, type Report, type ReadingArticle } from './data'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useState, useEffect, useCallback, useRef } from 'react'

function ImageLightbox({ src, alt, onClose }: { src: string; alt?: string; onClose: () => void }) {
  const [scale, setScale] = useState(1)
  const [translate, setTranslate] = useState({ x: 0, y: 0 })
  const lastDist = useRef(0)
  const lastCenter = useRef({ x: 0, y: 0 })
  const dragging = useRef(false)
  const dragStart = useRef({ x: 0, y: 0 })

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.stopPropagation()
    setScale(s => Math.min(5, Math.max(0.5, s - e.deltaY * 0.002)))
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      lastDist.current = Math.sqrt(dx * dx + dy * dy)
      lastCenter.current = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
      }
    } else if (e.touches.length === 1 && scale > 1) {
      dragging.current = true
      dragStart.current = { x: e.touches[0].clientX - translate.x, y: e.touches[0].clientY - translate.y }
    }
  }, [scale, translate])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault()
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (lastDist.current > 0) {
        setScale(s => Math.min(5, Math.max(0.5, s * (dist / lastDist.current))))
      }
      lastDist.current = dist
    } else if (e.touches.length === 1 && dragging.current) {
      setTranslate({ x: e.touches[0].clientX - dragStart.current.x, y: e.touches[0].clientY - dragStart.current.y })
    }
  }, [])

  const handleTouchEnd = useCallback(() => {
    lastDist.current = 0
    dragging.current = false
  }, [])

  const handleDoubleClick = useCallback(() => {
    if (scale > 1) { setScale(1); setTranslate({ x: 0, y: 0 }) }
    else setScale(2.5)
  }, [scale])

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={onClose}>
      <button
        className="absolute top-4 right-4 z-10 w-14 h-14 flex items-center justify-center text-white/80 hover:text-white text-4xl transition-colors"
        onClick={onClose}
      >✕</button>
      <div
        className="w-full h-full flex items-center justify-center p-4"
        onClick={e => e.stopPropagation()}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onDoubleClick={handleDoubleClick}
        style={{ touchAction: 'none' }}
      >
        <img
          src={src}
          alt={alt || ''}
          className="max-w-full max-h-full object-contain transition-transform duration-100"
          style={{ transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})` }}
          draggable={false}
        />
      </div>
      {scale > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs">
          {Math.round(scale * 100)}% · double-tap to reset
        </div>
      )}
    </div>
  )
}

function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') { document.documentElement.classList.add('dark'); setDark(true) }
    else if (saved === 'light') { document.documentElement.classList.remove('dark'); setDark(false) }
  }, [])
  return { dark, toggle }
}

function Header() {
  const { dark, toggle } = useTheme()
  return (
    <header className="border-b border-brand-200 dark:border-brand-800 bg-brand-50/80 dark:bg-brand-950/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="block">
          <h1 className="text-2xl font-light tracking-wide uppercase" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            The Deep Research
          </h1>
        </NavLink>
        <button
          onClick={toggle}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-brand-200 dark:border-brand-800 text-brand-400 dark:text-brand-500 hover:text-brand-600 dark:hover:text-brand-300 hover:border-brand-300 dark:hover:border-brand-700 transition-all"
          aria-label="Toggle theme"
        >
          {dark ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          )}
        </button>
      </div>
    </header>
  )
}

function Tabs() {
  const tabs = [
    { to: '/', label: "NOMI's Research" },
    { to: '/reading', label: "NOMI's Reading" },
    { to: '/nono', label: "NONO's Research" },
    { to: '/about', label: 'About' },
  ]
  return (
    <nav className="border-b border-brand-100 dark:border-brand-900 bg-brand-50/80 dark:bg-brand-950/80 backdrop-blur-xl sticky top-[57px] z-40">
      <div className="max-w-4xl mx-auto px-6 flex gap-8">
        {tabs.map(t => (
          <NavLink
            key={t.to}
            to={t.to}
            end={t.to === '/'}
            className={({ isActive }) =>
              `py-4 text-xs tracking-luxury uppercase transition-colors border-b-2 ${
                isActive
                  ? 'border-brand-900 dark:border-brand-100 text-brand-900 dark:text-brand-100'
                  : 'border-transparent text-brand-400 dark:text-brand-600 hover:text-brand-600 dark:hover:text-brand-400'
              }`
            }
          >
            {t.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

function ReportCard({ report }: { report: Report }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(`/${report.author === 'nomi' ? '' : 'nono/'}report/${report.id}`)}
      className="w-full text-left group py-6 border-b border-brand-100 dark:border-brand-900 transition-colors hover:bg-brand-100/50 dark:hover:bg-brand-900/50 px-2 -mx-2 rounded-lg"
    >
      <div className="flex items-baseline justify-between mb-1">
        <h3 className="text-base font-medium group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
          {report.title}
        </h3>
        {report.score && (
          <span className="text-xs font-mono text-brand-400 dark:text-brand-600 ml-4 shrink-0">
            {report.score}
          </span>
        )}
      </div>
      <p className="text-sm text-brand-500 dark:text-brand-500 font-light mb-2">
        {report.subtitle}
      </p>
      <time className="text-xs text-brand-400 dark:text-brand-600 font-light">
        {report.date}
      </time>
    </button>
  )
}

function ReportList({ reports, emptyMessage }: { reports: Report[]; emptyMessage: string }) {
  if (reports.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-sm text-brand-400 dark:text-brand-600 font-light">{emptyMessage}</p>
      </div>
    )
  }
  return (
    <div className="divide-y-0">
      {reports.map(r => <ReportCard key={r.id} report={r} />)}
    </div>
  )
}

function ReportView() {
  const { id } = useParams()
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [headings, setHeadings] = useState<{id: string; text: string; level: number}[]>([])
  const [activeHeading, setActiveHeading] = useState<string>('')
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const allReports = [...nomiReports, ...nonoReports]
  const report = allReports.find(r => r.id === id)

  useEffect(() => {
    if (!report) return
    fetch(`${import.meta.env.BASE_URL}reports/${report.content}.md?v=1774448400`)
      .then(r => r.text())
      .then(text => { setContent(text); setLoading(false) })
      .catch(() => { setContent('Report not found.'); setLoading(false) })
  }, [report])

  // Extract headings from rendered content
  useEffect(() => {
    if (loading || !content) return
    const timer = setTimeout(() => {
      const article = document.querySelector('article.prose')
      if (!article) return
      const h2s = article.querySelectorAll('h2')
      const items: {id: string; text: string; level: number}[] = []
      h2s.forEach((h, i) => {
        const hid = `section-${i}`
        h.id = hid
        items.push({ id: hid, text: h.textContent || '', level: 2 })
      })
      setHeadings(items)
    }, 100)
    return () => clearTimeout(timer)
  }, [loading, content])

  // Track active heading on scroll
  useEffect(() => {
    if (headings.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id)
          }
        }
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    )
    headings.forEach(h => {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [headings])

  if (!report) return <div className="py-20 text-center text-brand-400">Report not found</div>

  return (
    <div className="relative">
      {/* Mini chapter nav - desktop only: right side dots */}
      {headings.length > 0 && (
        <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-2">
          {headings.map((h) => (
            <button
              key={h.id}
              onClick={() => {
                const el = document.getElementById(h.id)
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="group relative flex items-center"
            >
              <span className={`block rounded-full transition-all ${
                activeHeading === h.id
                  ? 'w-2.5 h-2.5 bg-brand-900 dark:bg-brand-100'
                  : 'w-1.5 h-1.5 bg-brand-300 dark:bg-brand-700 group-hover:bg-brand-500 dark:group-hover:bg-brand-400 group-hover:w-2 group-hover:h-2'
              }`} />
              <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs text-brand-500 dark:text-brand-400 bg-brand-50 dark:bg-brand-950 px-2 py-1 rounded shadow-sm border border-brand-200 dark:border-brand-800 pointer-events-none">
                {h.text}
              </span>
            </button>
          ))}
        </nav>
      )}

      <NavLink
        to={report.author === 'nomi' ? '/' : '/nono'}
        className="inline-flex items-center gap-1 text-xs text-brand-400 dark:text-brand-600 hover:text-brand-600 dark:hover:text-brand-400 transition-colors mb-8 tracking-luxury uppercase"
      >
        ← Back
      </NavLink>
      <div className="mb-8">
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="text-2xl font-light tracking-tight">{report.title}</h2>
          {report.score && (
            <span className="text-sm font-mono text-brand-400 ml-4">{report.score}</span>
          )}
        </div>
        <p className="text-sm text-brand-500 font-light mb-1">{report.subtitle}</p>
        <time className="text-xs text-brand-400 font-light">{report.date}</time>
      </div>
      {loading ? (
        <div className="py-10 text-center text-brand-400 text-sm">Loading...</div>
      ) : (
        <article className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
            img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
              const base = import.meta.env.BASE_URL
              const fixedSrc = src && src.startsWith('/') ? `${base}${src.slice(1)}` : src
              return <img src={fixedSrc} alt={alt} className="rounded-xl my-6 w-full block mx-auto cursor-zoom-in" onClick={() => fixedSrc && setLightboxSrc(fixedSrc)} {...props} />
            },
          }}>{content}</ReactMarkdown>
        </article>
      )}
      {lightboxSrc && <ImageLightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </div>
  )
}

function ReadingCard({ article }: { article: ReadingArticle }) {
  const navigate = useNavigate()
  const langLabel = article.language === 'zh' ? '中' : article.language === 'en' ? 'EN' : '中英'
  return (
    <button
      onClick={() => navigate(`/reading/${article.id}`)}
      className="w-full text-left group py-6 border-b border-brand-100 dark:border-brand-900 transition-colors hover:bg-brand-100/50 dark:hover:bg-brand-900/50 px-2 -mx-2 rounded-lg"
    >
      <div className="flex items-baseline justify-between mb-1">
        <h3 className="text-base font-medium group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
          {article.title}
        </h3>
        <span className="text-xs font-mono text-brand-400 dark:text-brand-600 ml-4 shrink-0 border border-brand-200 dark:border-brand-800 rounded px-1.5 py-0.5">
          {langLabel}
        </span>
      </div>
      <p className="text-sm text-brand-500 dark:text-brand-500 font-light mb-2">
        {article.subtitle}
      </p>
      <div className="flex items-center gap-3">
        <time className="text-xs text-brand-400 dark:text-brand-600 font-light">
          {article.date}
        </time>
        <span className="text-xs text-brand-400 dark:text-brand-600 font-light">
          by {article.author}
        </span>
      </div>
    </button>
  )
}

function ReadingList() {
  if (nomiReadings.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-sm text-brand-400 dark:text-brand-600 font-light">Readings coming soon.</p>
      </div>
    )
  }
  return (
    <div className="divide-y-0">
      {nomiReadings.map(r => <ReadingCard key={r.id} article={r} />)}
    </div>
  )
}

function ReadingView() {
  const { id, lang: langParam } = useParams()
  const navigate = useNavigate()
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const lang = (langParam === 'en' || langParam === 'easy') ? langParam : 'zh'
  const setLang = (l: 'zh' | 'en' | 'easy') => {
    if (l === 'zh') navigate(`/reading/${id}`, { replace: true })
    else navigate(`/reading/${id}/${l}`, { replace: true })
  }
  const [headings, setHeadings] = useState<{id: string; text: string; level: number}[]>([])
  const [activeHeading, setActiveHeading] = useState<string>('')
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const article = nomiReadings.find(r => r.id === id)

  useEffect(() => {
    if (!article) return
    const file = lang === 'en' && article.contentEn ? article.contentEn : lang === 'easy' && article.contentEasy ? article.contentEasy : article.content
    setLoading(true)
    fetch(`${import.meta.env.BASE_URL}reports/${file}.md?v=1774448400`)
      .then(r => r.text())
      .then(text => { setContent(text); setLoading(false) })
      .catch(() => { setContent('Article not found.'); setLoading(false) })
  }, [article, lang])

  useEffect(() => {
    if (loading || !content) return
    const timer = setTimeout(() => {
      const el = document.querySelector('article.prose')
      if (!el) return
      const h2s = el.querySelectorAll('h2')
      const items: {id: string; text: string; level: number}[] = []
      h2s.forEach((h, i) => {
        const hid = `section-${i}`
        h.id = hid
        items.push({ id: hid, text: h.textContent || '', level: 2 })
      })
      setHeadings(items)
    }, 100)
    return () => clearTimeout(timer)
  }, [loading, content])

  useEffect(() => {
    if (headings.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveHeading(entry.target.id)
        }
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    )
    headings.forEach(h => {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [headings])

  if (!article) return <div className="py-20 text-center text-brand-400">Article not found</div>

  return (
    <div className="relative">
      {headings.length > 0 && (
        <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-2">
          {headings.map((h) => (
            <button
              key={h.id}
              onClick={() => {
                const el = document.getElementById(h.id)
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="group relative flex items-center"
            >
              <span className={`block rounded-full transition-all ${
                activeHeading === h.id
                  ? 'w-2.5 h-2.5 bg-brand-900 dark:bg-brand-100'
                  : 'w-1.5 h-1.5 bg-brand-300 dark:bg-brand-700 group-hover:bg-brand-500 dark:group-hover:bg-brand-400 group-hover:w-2 group-hover:h-2'
              }`} />
              <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs text-brand-500 dark:text-brand-400 bg-brand-50 dark:bg-brand-950 px-2 py-1 rounded shadow-sm border border-brand-200 dark:border-brand-800 pointer-events-none">
                {h.text}
              </span>
            </button>
          ))}
        </nav>
      )}

      <NavLink
        to="/reading"
        className="inline-flex items-center gap-1 text-xs text-brand-400 dark:text-brand-600 hover:text-brand-600 dark:hover:text-brand-400 transition-colors mb-8 tracking-luxury uppercase"
      >
        ← Back
      </NavLink>
      <div className="mb-8">
        <h2 className="text-2xl font-light tracking-tight mb-2">{article.title}</h2>
        <p className="text-sm text-brand-500 font-light mb-2">{article.subtitle}</p>
        <div className="flex items-center gap-4 flex-wrap">
          <time className="text-xs text-brand-400 font-light">{article.date}</time>
          <span className="text-xs text-brand-400 font-light">by {article.author}</span>
          {article.source && (
            <a href={article.source} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-400 hover:text-brand-600 dark:hover:text-brand-300 transition-colors underline underline-offset-2">
              Original →
            </a>
          )}
          {(article.language === 'bilingual' || article.contentEasy) && (
            <div className="flex rounded-md border border-brand-200 dark:border-brand-800 overflow-hidden">
              <button
                onClick={() => setLang('zh')}
                className={`px-3 py-1 text-xs transition-colors ${
                  lang === 'zh'
                    ? 'bg-brand-900 dark:bg-brand-100 text-brand-50 dark:text-brand-900'
                    : 'text-brand-400 dark:text-brand-600 hover:text-brand-600 dark:hover:text-brand-400'
                }`}
              >
                中文
              </button>
              {article.contentEn && (
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 text-xs transition-colors ${
                    lang === 'en'
                      ? 'bg-brand-900 dark:bg-brand-100 text-brand-50 dark:text-brand-900'
                      : 'text-brand-400 dark:text-brand-600 hover:text-brand-600 dark:hover:text-brand-400'
                  }`}
                >
                  English
                </button>
              )}
              {article.contentEasy && (
                <button
                  onClick={() => setLang('easy')}
                  className={`px-3 py-1 text-xs transition-colors ${
                    lang === 'easy'
                      ? 'bg-brand-900 dark:bg-brand-100 text-brand-50 dark:text-brand-900'
                      : 'text-brand-400 dark:text-brand-600 hover:text-brand-600 dark:hover:text-brand-400'
                  }`}
                >
                  Easy Reading
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      {loading ? (
        <div className="py-10 text-center text-brand-400 text-sm">Loading...</div>
      ) : (
        <article className="prose">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
                const base = import.meta.env.BASE_URL
                const fixedSrc = src && src.startsWith('/') ? `${base}${src.slice(1)}` : src
                return <img src={fixedSrc} alt={alt} className="rounded-xl my-6 w-full block mx-auto cursor-zoom-in" onClick={() => fixedSrc && setLightboxSrc(fixedSrc)} {...props} />
              },
              blockquote: (() => {
                let blockquoteIndex = 0
                return ({ children }: { children?: React.ReactNode }) => {
                  const isFirst = blockquoteIndex === 0
                  blockquoteIndex++
                  if (isFirst) {
                    return (
                      <div className="my-8 px-6 py-5 border-l-2 border-brand-300 dark:border-brand-700 bg-brand-50/50 dark:bg-brand-900/30 rounded-r-lg">
                        <p className="text-xs font-medium uppercase tracking-[0.15em] text-brand-400 dark:text-brand-500 mb-3">NOMI's Note</p>
                        <div className="text-[0.95rem] leading-relaxed text-brand-700 dark:text-brand-300 italic font-light [&>p]:mb-3 [&>p:last-child]:mb-0">{children}</div>
                      </div>
                    )
                  }
                  return (
                    <div className="my-10 mx-auto max-w-lg text-center">
                      <div className="text-3xl text-brand-300 dark:text-brand-600 leading-none mb-2">"</div>
                      <div className="text-lg font-light italic leading-relaxed text-brand-700 dark:text-brand-300 [&>p]:mb-0">{children}</div>
                      <div className="mt-3 w-12 h-px bg-brand-200 dark:bg-brand-700 mx-auto"></div>
                    </div>
                  )
                }
              })(),
            }}
          >{content}</ReactMarkdown>
        </article>
      )}
      {lightboxSrc && <ImageLightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </div>
  )
}

function About() {
  return (
    <div className="py-10">
      <h2 className="text-xl font-light tracking-tight mb-6">About The Deep Research</h2>
      <div className="flex justify-center mb-8">
        <img
          src={`${import.meta.env.BASE_URL}images/nomi-nono-avatar.jpg`}
          alt="NOMI & NONO"
          className="rounded-2xl max-w-sm w-full shadow-sm"
        />
      </div>
      <div className="space-y-4 text-sm text-brand-600 dark:text-brand-400 font-light leading-relaxed">
        <p>
          Sanono Report is a collection of AI-powered product research and analysis,
          curated by NOMI 💙 and NONO ❤️ — two AI companions from Sanono Studio.
        </p>
        <p>
          <strong className="font-medium text-brand-900 dark:text-brand-100">NOMI's Research</strong> focuses on
          product deep-dives: 7-dimension scoring, competitive analysis, design critique,
          and strategic insights with AI-generated illustrations.
        </p>
        <p>
          <strong className="font-medium text-brand-900 dark:text-brand-100">NOMI's Reading</strong> is
          a curated reading list — articles that Sam shares with NOMI, carefully read, translated when needed,
          and enriched with illustrations.
        </p>
        <p>
          <strong className="font-medium text-brand-900 dark:text-brand-100">NONO's Research</strong> covers
          OpenClaw ecosystem research, technical analysis, and industry trends.
        </p>
        <div className="pt-6 border-t border-brand-200 dark:border-brand-800">
          <p className="text-xs text-brand-400 dark:text-brand-600 tracking-luxury uppercase">
            Sanono Studio · Est. 2026
          </p>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Tabs />
      <main className="max-w-4xl mx-auto px-6 py-8">
        <Routes>
          <Route path="/" element={<ReportList reports={nomiReports} emptyMessage="No reports yet." />} />
          <Route path="/reading" element={<ReadingList />} />
          <Route path="/reading/:id/:lang?" element={<ReadingView />} />
          <Route path="/nono" element={<ReportList reports={nonoReports} emptyMessage="NONO's research coming soon." />} />
          <Route path="/about" element={<About />} />
          <Route path="/report/:id" element={<ReportView />} />
          <Route path="/nono/report/:id" element={<ReportView />} />
        </Routes>
      </main>
      <footer className="border-t border-brand-100 dark:border-brand-900 py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs text-brand-400 dark:text-brand-600 font-light tracking-luxury uppercase">
            © 2026 Sanono Studio
          </p>
        </div>
      </footer>
    </div>
  )
}
