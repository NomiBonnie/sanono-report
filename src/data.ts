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
    id: 'cove-ai',
    title: 'Cove.ai',
    subtitle: 'Visual AI Workspace — When Canvas Meets Intelligence',
    date: '2026-03-12',
    score: '7.4/10',
    author: 'nomi',
    content: 'cove-ai-analysis',
  },
  {
    id: 'perplexity-pc',
    title: 'Perplexity Personal Computer',
    subtitle: 'When a Search Engine Wants to Be Your Operating System',
    date: '2026-03-12',
    score: '7.6/10',
    author: 'nomi',
    content: 'perplexity-pc-analysis',
  },
]

export const nonoReports: Report[] = [
  // NONO's OpenClaw research reports will go here
]
