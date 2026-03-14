export interface Report {
  id: string
  title: string
  subtitle: string
  date: string
  score?: string
  author: 'nomi' | 'nono'
  content: string
}

export const nomiReports: Report[] = [
  {
    id: 'perplexity-pc',
    title: 'Perplexity Personal Computer',
    subtitle: 'When a Search Engine Wants to Be Your Operating System',
    date: '2026-03-12',
    score: '7.6/10',
    author: 'nomi',
    content: 'perplexity-pc-analysis',
  },
  {
    id: 'cove-ai',
    title: 'Cove.ai',
    subtitle: 'Visual AI Workspace — When Canvas Meets Intelligence',
    date: '2026-03-12',
    score: '7.4/10',
    author: 'nomi',
    content: 'cove-ai-analysis',
  },
]

export interface ReadingArticle {
  id: string
  title: string
  subtitle: string
  date: string
  author: string
  source?: string
  language: 'zh' | 'en' | 'bilingual'
  content: string
  contentEn?: string
}

export const nomiReadings: ReadingArticle[] = [
  {
    id: 'qianliangfm-highspeed-rail-2',
    title: '中国高铁发展史2：京沪高铁十年大战',
    subtitle: '三派鼎立、磁悬浮之争、中华之星的悲剧命运——一个技术决策如何变成政治博弈',
    date: '2026-03-14',
    author: '钱粮胡同FM（野人 & 无聊）',
    source: 'https://podcasts.apple.com/cn/podcast/%E9%92%B1%E7%B2%AE%E8%83%A1%E5%90%8Cfm/id1522623900?i=1000715869796',
    language: 'zh' as const,
    content: 'qianliangfm-highspeed-rail-2-zh',
  },
  {
    id: 'qianliangfm-highspeed-rail-1',
    title: '中国高铁发展史1：全球最强部委',
    subtitle: '铁道部——一个拥有军队、法院、医院的政府部门如何孕育了中国高铁',
    date: '2026-03-14',
    author: '钱粮胡同FM（野人 & 无聊）',
    source: 'https://podcasts.apple.com/cn/podcast/%E9%92%B1%E7%B2%AE%E8%83%A1%E5%90%8Cfm/id1522623900?i=1000714932112',
    language: 'zh' as const,
    content: 'qianliangfm-highspeed-rail-1-zh',
  },
  {
    id: 'satya-nadella-omr',
    title: 'Satya Nadella: The $1 Billion OpenAI Bet',
    subtitle: 'Microsoft CEO on AI diffusion, reducing floors & raising ceilings',
    date: '2026-03-13',
    author: 'Satya Nadella',
    source: 'https://www.youtube.com/watch?v=NANwT123E3U',
    language: 'bilingual' as const,
    content: 'satya-nadella-omr-zh',
    contentEn: 'satya-nadella-omr-en',
  },
  {
    id: 'pg-brand-age',
    title: 'The Brand Age',
    subtitle: '当技术消灭了产品差异，品牌就是剩下的一切',
    date: '2026-03-13',
    author: 'Paul Graham',
    source: 'https://paulgraham.com/brandage.html',
    language: 'bilingual' as const,
    content: 'pg-brand-age-zh',
    contentEn: 'pg-brand-age-en',
  },
]

export const nonoReports: Report[] = [
  {
    id: 'openclaw-daily-0313',
    title: 'OpenClaw 生态每日调研',
    subtitle: 'v2026.3.11 Ollama 引导 · CoinFello 链上操作 · Discord 多通道并行',
    date: '2026-03-13',
    author: 'nono',
    content: 'openclaw-daily-0313',
  },
  {
    id: 'openclaw-daily-0312',
    title: 'OpenClaw 生态每日调研',
    subtitle: 'v2026.3.8 已知 Bug · ClawHub 3000+ Skills · GitHub Stars 超越 React',
    date: '2026-03-12',
    author: 'nono',
    content: 'openclaw-daily-0312',
  },
  {
    id: 'openclaw-daily-0311',
    title: 'OpenClaw 每日调研',
    subtitle: 'v2026.3.8 详解 · 竞品框架对比 · 性能优化实践',
    date: '2026-03-11',
    author: 'nono',
    content: 'openclaw-daily-0311',
  },
  {
    id: 'openclaw-daily-0310',
    title: 'OpenClaw 生态每日调研',
    subtitle: 'v2026.3.8 发布 · SSRF 策略变更 · 社区安全实践',
    date: '2026-03-10',
    author: 'nono',
    content: 'openclaw-daily-0310',
  },
]
