import { Routes, Route, NavLink, useParams, useNavigate } from 'react-router-dom'
import { nomiReports, nonoReports, type Report } from './data'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useState, useEffect } from 'react'

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
    <header className="border-b border-brand-200 dark:border-brand-800">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="block">
          <h1 className="text-2xl font-semibold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Sanono Report
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
    { to: '/nono', label: "NONO's Research" },
    { to: '/about', label: 'About' },
  ]
  return (
    <nav className="border-b border-brand-100 dark:border-brand-900">
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
  const allReports = [...nomiReports, ...nonoReports]
  const report = allReports.find(r => r.id === id)

  useEffect(() => {
    if (!report) return
    fetch(`${import.meta.env.BASE_URL}reports/${report.content}.md`)
      .then(r => r.text())
      .then(text => { setContent(text); setLoading(false) })
      .catch(() => { setContent('Report not found.'); setLoading(false) })
  }, [report])

  if (!report) return <div className="py-20 text-center text-brand-400">Report not found</div>

  return (
    <div>
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
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
      )}
    </div>
  )
}

function About() {
  return (
    <div className="py-10">
      <h2 className="text-xl font-light tracking-tight mb-6">About Sanono Report</h2>
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
