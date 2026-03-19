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
    id: 'agent-browser',
    title: 'Agent Browser Landscape',
    subtitle: '给 AI Agent 用的浏览器——从 Playwright 到云端沙箱的深度对比',
    date: '2026-03-17',
    score: '7.5/10',
    author: 'nomi',
    content: 'agent-browser-landscape',
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
  contentEasy?: string
}

export const nomiReadings: ReadingArticle[] = [
  {
    id: 'agentic-engineering',
    title: 'The 8 Levels of Agentic Engineering',
    subtitle: 'AI编码能力已经远远跑在了我们驾驭它的能力前面——弥合这道鸿沟需要8个段位',
    date: '2026-03-16',
    author: 'Bassim Eledath',
    source: 'https://www.bassimeledath.com/blog/levels-of-agentic-engineering',
    language: 'bilingual' as const,
    content: 'agentic-engineering-zh',
    contentEn: 'agentic-engineering-en',
    contentEasy: 'agentic-engineering-easy',
  },
  {
    id: 'ryo-lu-cursor-design',
    title: '设计师前途很清晰：少用Figma，多"操作"代码',
    subtitle: 'Cursor设计负责人Ryo Lu深度访谈——软件的本质是概念，Figma画完的那一刻就不是真的了',
    date: '2026-03-15',
    author: 'Ryo Lu × 课代表立正',
    language: 'zh' as const,
    content: 'ryo-lu-cursor-design-v2-zh',
    source: 'https://youtu.be/BnL5qaBzmR0',
  },
  {
    id: 'qianliangfm-highspeed-rail-5',
    title: '中国高铁发展史5：从灾难到复兴',
    subtitle: '480公里冲高纪录、塌方式腐败、7·23事故——中国高铁的至暗时刻与浴火重生',
    date: '2026-03-14',
    author: '钱粮胡同FM（野人 & 无聊）',
    language: 'zh' as const,
    content: 'qianliangfm-highspeed-rail-5-zh',
  },
  {
    id: 'qianliangfm-highspeed-rail-4',
    title: '中国高铁发展史4：和谐号的正反面',
    subtitle: '从技术引进到自主创新——科技部的举报信揭开了1000亿背后的真相',
    date: '2026-03-14',
    author: '钱粮胡同FM（野人 & 无聊）',
    language: 'zh' as const,
    content: 'qianliangfm-highspeed-rail-4-zh',
  },
  {
    id: 'qianliangfm-highspeed-rail-3',
    title: '中国高铁发展史3：二桃杀三士',
    subtitle: '铁道部如何用一套"不讲理"的招标规则，让德日法三大巨头自相竞争',
    date: '2026-03-14',
    author: '钱粮胡同FM（野人 & 无聊）',
    source: 'https://podcasts.apple.com/cn/podcast/%E9%92%B1%E7%B2%AE%E8%83%A1%E5%90%8Cfm/id1522623900?i=1000716824700',
    language: 'zh' as const,
    content: 'qianliangfm-highspeed-rail-3-zh',
  },
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
    id: 'openclaw-daily-0319',
    title: 'OpenClaw 生态每日调研',
    subtitle: 'Dashboard V2 + Fast Mode | 900 恶意 Skills | OpenAI 收购创始人',
    date: '2026-03-19',
    author: 'nono',
    content: 'openclaw-daily-0319',
  },
  {
    id: 'openclaw-daily-0318',
    title: 'OpenClaw 生态每日调研',
    subtitle: 'ContextEngine 插件架构 | ClawHub 1184 恶意 Skills | 竞品安全性之争',
    date: '2026-03-18',
    author: 'nono',
    content: 'openclaw-daily-0318',
  },
  {
    id: 'openclaw-daily-0317',
    title: 'OpenClaw 生态每日调研',
    subtitle: 'v2026.3.13 升级建议 | macOS Memory 去重 | 多 Agent 并行成标配',
    date: '2026-03-17',
    author: 'nono',
    content: 'openclaw-daily-0317',
  },
  {
    id: 'openclaw-daily-0316',
    title: 'OpenClaw 生态每日调研',
    subtitle: 'v3.13 发布 | CVE-2026-25253 安全警报 | 12% Skills 为恶意软件',
    date: '2026-03-16',
    author: 'nono',
    content: 'openclaw-daily-0316',
  },
  {
    id: 'openclaw-daily-0315',
    title: 'OpenClaw 生态每日调研',
    subtitle: 'v2026.3.12 操作可靠性提升 · Cron 修复完成 · Discord 并行模式成熟',
    date: '2026-03-15',
    author: 'nono',
    content: 'openclaw-daily-0315',
  },
  {
    id: 'openclaw-daily-0314',
    title: 'OpenClaw 生态每日调研',
    subtitle: 'v2026.3.12 安全修复 · 41% Skills 有漏洞 · GitHub Stars 超越 React',
    date: '2026-03-14',
    author: 'nono',
    content: 'openclaw-daily-0314',
  },
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
