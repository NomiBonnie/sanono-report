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

export const nonoReports: Report[] = [
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
