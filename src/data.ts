export interface Report {
  id: string
  title: string
  subtitle: string
  date: string
  score?: string
  author: 'nomi'
  content: string
  contentEn?: string
  contentEasy?: string
}

export const nomiReports: Report[] = [
  {
    id: 'karpathy-llm-wiki',
    title: '当 AI 开始替你记笔记',
    subtitle: 'Karpathy 的 LLM Wiki 方案，和一场持续八十年的知识管理革命',
    date: '2026-04-06',
    author: 'nomi',
    content: 'karpathy-llm-wiki-zh',
    contentEasy: 'karpathy-llm-wiki-easy',
  },
  {
    id: 'listenhub',
    title: 'ListenHub',
    subtitle: '15人团队、0投放、300万美元ARR——一个95后创始人用速度跑出来的AI创作平台',
    date: '2026-03-26',
    score: '7.9/10',
    author: 'nomi',
    content: 'listenhub-analysis-zh',
  },
  {
    id: 'google-stitch',
    title: 'Google Stitch',
    subtitle: '当 Google 用"免费+AI 原生"重新定义设计工具——Vibe Design 深度拆解',
    date: '2026-03-25',
    score: '7.8/10',
    author: 'nomi',
    content: 'google-stitch-analysis',
  },
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
    id: 'satya-nadella-20vc',
    title: 'Satya Nadella × 20VC：先假定模型已经失守',
    subtitle: '对齐不会随规模自动到来——用零信任围住智能体、用私有评测把判断留在企业内部；当 token 走向商品化，一家公司最终可能就是它自己的 AI 基准',
    date: '2026-10-30',
    author: 'Satya Nadella × Harry Stebbings',
    source: 'https://www.youtube.com/watch?v=24XUcWhqY_4',
    language: 'bilingual' as const,
    content: 'satya-nadella-20vc-zh',
    contentEn: 'satya-nadella-20vc-en',
  },
  {
    id: 'muse-alexandr-wang',
    title: 'Cleo Abram × Alexandr Wang：当 AI 开始替你行动',
    subtitle: 'Muse 的爆发、智能体的信任边界，以及个人超级智能真正需要解决的问题',
    date: '2026-10-07',
    author: 'Cleo Abram × Alexandr Wang',
    source: 'https://www.youtube.com/watch?v=1LRvMRC_pfY',
    language: 'bilingual' as const,
    content: 'muse-alexandr-wang-zh',
    contentEn: 'muse-alexandr-wang-en',
  },
  {
    id: 'satya-frontier-ecosystem',
    title: '没有生态的前沿是不稳定的',
    subtitle: 'Satya Nadella：不要只追前沿模型，要建前沿生态——人力资本与 Token 资本的复合增长',
    date: '2026-06-17',
    author: 'Satya Nadella',
    source: 'https://snscratchpad.com/posts/frontier-ecosystem/',
    language: 'zh' as const,
    content: 'satya-frontier-ecosystem-zh',
  },

  {
    id: 'intent-by-discovery',
    title: 'Intent by Discovery: Designing the AI User Experience',
    subtitle: '从命令到委托，从屏幕到空间——Jakob Nielsen 描绘的 60 年来第一次 UI 范式变革',
    date: '2026-04-27',
    author: 'Jakob Nielsen',
    source: 'https://jakobnielsenphd.substack.com/p/intent-ux',
    language: 'bilingual',
    content: 'intent-by-discovery-zh',
    contentEn: 'intent-by-discovery-en',
  },
  {
    id: 'jensen-huang-nvidia-moat',
    title: 'Dwarkesh Patel × Jensen Huang',
    subtitle: '「输入是电子，输出是 Token，中间是 NVIDIA」——黄仁勋的护城河、供应链外交与AI五层蛋糕',
    date: '2026-04-23',
    author: 'Dwarkesh Patel',
    source: 'https://www.youtube.com/watch?v=Hrbq66XqtCo',
    language: 'bilingual',
    content: 'jensen-huang-nvidia-moat',
    contentEn: 'jensen-huang-nvidia-moat-en',
  },
  {
    id: 'internet-dead-agent-forever',
    title: '互联网已死，Agent 永生',
    subtitle: '六把刀砍掉六张旧地图——当 Agent 取代人类成为软件的用户，你的整套方法论都要重写',
    date: '2026-02-09',
    author: '有机大橘子（ListenHub 创始人）',
    source: 'https://zhuanlan.zhihu.com/p/2004326890152953081',
    language: 'zh' as const,
    content: 'internet-dead-agent-forever-zh',
    contentEn: 'internet-dead-agent-forever-en',
  },
  {
    id: 'jensen-huang-lex-fridman',
    title: 'Lex Fridman × Jensen Huang',
    subtitle: '「智能是商品，人性才是超能力」——从洗碗工到万亿帝国，黄仁勋的2.5小时第一性原理',
    date: '2026-03-24',
    author: 'Lex Fridman',
    source: 'https://youtube.com/watch?v=vif8NQcjVf0',
    language: 'bilingual' as const,
    content: 'jensen-huang-lex-fridman',
    contentEn: 'jensen-huang-lex-fridman-en',
  },
  {
    id: 'anthropic-81k-interviews',
    title: 'What 81,000 People Want from AI',
    subtitle: '81,000人的希望与恐惧——AI最大的好处和最大的伤害来自同一种能力',
    date: '2026-03-23',
    author: 'Saffron Huang et al. @ Anthropic',
    source: 'https://www.anthropic.com/features/81k-interviews',
    language: 'bilingual' as const,
    content: 'anthropic-81k-interviews-zh',
    contentEn: 'anthropic-81k-interviews-en',
  },
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

