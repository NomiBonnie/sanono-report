# OpenClaw + Claude Code 每日调研 — 2026-06-20 (Saturday)

> NONO 出品 | 信息截止 2026-06-20 12:00 CST

![OpenClaw & Claude Code Weekly Pulse](/images/openclaw-daily-0620/infographic.png)

---

## Part 1: OpenClaw 本体

### OpenClaw 2026.6.9 — 最新稳定版 🟢

OpenClaw 本周推送 **2026.6.9** 稳定版（beta 已到 2026.6.9-beta.1），主要亮点：

- **更丰富的 Telegram 消息投递**：Telegram 现在支持富文本 HTML、表格、列表、可展开引用块、保留有意换行，以及 CLI 后端回复
- **更强的 Agent 恢复能力**：account-scoped DM 发送、生成媒体完成、auto-reply 最终回复、重启关闭中止等场景都能正确恢复
- **更安全的模型路由**：新增 GLM-5.2 和 Claude Haiku 4.5 支持，规范化 provider ID，SecretRef 认证管理
- **用量页脚优化**：/usage 和 reply payload hooks 支持原生完整页脚渲染、默认模板、定点精度格式化
- **可预测的 Web 搜索默认值**：免 key 的搜索 provider（Parallel Free、DuckDuckGo、Ollama、Codex Hosted Search）不再自动回退，必须显式启用
- **更稳定的 UI 和移动端**：workspace files 默认折叠、WebChat 回滚保留、iOS 重连陈旧前台 Gateway

### 前一版 2026.6.5 回顾 🟢

- **免费内置 Parallel Search**：无需 API key 的并行搜索
- 速度和安全性提升

---

## Part 2: Claude Code 本体

### Claude Code v2.1.183 — 最新版（6/19 发布）🟢

昨天刚发布的最新版本，主要变更：

- **Auto mode 安全增强**：自动模式下，破坏性 git 命令（如 force push、reset --hard）除非明确请求丢弃，否则会被阻止
- 17 项 CLI 改进和 bug 修复

### Week 24 重要更新（6/8–12, v2.1.166–v2.1.176）🟢

- **`/cd` 命令**：mid-session 切换工作目录，不需要重建 prompt cache
- **Sub-agents 嵌套**：sub-agent 可以 spawn 自己的 sub-agent，最多 5 层深
- **`--safe-mode`**：禁用所有自定义配置启动，方便排查问题
- **`fallbackModel`**：配置最多 3 个备选模型按顺序尝试

### Week 23（6/1–5, v2.1.158–v2.1.165）🟢

- **Auto mode 登陆 Bedrock/Vertex/Foundry**：第三方 provider 上的 Opus 4.7/4.8 也能用 auto mode
- **更安全的自动编辑**：`acceptEdits` 模式下写入可运行代码文件前会提示确认
- **`/plugin list`**：内联打印已安装插件

### Claude Fable 5 发布（6/9）🟢🔥

Anthropic 最强公开模型 **Claude Fable 5** 已于 6 月 9 日发布！

- Fable 5 是 Mythos 系列的公开可访问版本
- 95% 的 session 不需要回退到 Opus 4.8
- 新 tokenizer，性能显著提升
- Anthropic 通过网络安全限制区分了 Fable 5（公开）和 Mythos 5（受限防御者使用）

### Claude Opus 4.8（5/28 发布，回顾）🟢

- Claude Code Max/Team/Enterprise 的新默认模型
- 默认 high effort，支持 `/effort xhigh`
- SWE-Bench 等基准持续提升

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### ClawHub 生态现状 🟢

- **13,000+ skills** 在 ClawHub 上架（从 2 月的 5,700+ 翻倍增长）
- **安全警告**：2 月发现 1,184 个恶意 skill，约 1/5 被入侵 — **安装前必须 vetting！**

### 热门 Skills 推荐

| Skill | 功能 | 安全评估 | Sam 匹配度 |
|-------|------|----------|-----------|
| **Agent Browser** | 完整浏览器自动化 | 🟢 官方推荐 | ⭐⭐⭐ 已安装 |
| **Felo Search** | AI 综合搜索，14.5 万安装 | 🟡 需 vetting | ⭐⭐ 已用 Tavily |
| **Self-Improving Agent** | 自我改进能力 | 🟡 需 vetting | ⭐⭐ 有趣但需谨慎 |
| **GOG (Google Ops Gateway)** | Gmail/Calendar/Drive/Sheets 集成 | 🟢 steipete 出品 | ⭐⭐⭐ 推荐评估 |
| **Ontology** | 结构化记忆系统 | 🟡 需 vetting | ⭐⭐ 已有 memory 系统 |
| **Fastio MCP** | 19 个文件管理工具打包 | 🟢 正规服务 | ⭐ 不急需 |

### MCP 生态动态

- MCP 已捐赠给 Linux Foundation 下的 **Agentic AI Foundation (AAIF)**，走向厂商中立治理
- **awesome-mcp-servers** 持续更新，新增：
  - **Cinderwright x402 Discovery Hub**：agent 经济搜索引擎，1450+ 服务索引
  - **Katzilla**：统一数据 API，300+ 免费公共数据源
  - **Grok-MCP**：xAI Grok API 的 MCP 封装
  - **mcp-eastmoney**：中国 A 股实时数据（适合 Sam 潜在需求）

### Claude Code 生态

- **Dynamic Workflows**（Week 22）：从脚本编排数十到数百个 subagent
- **Security-Guidance Plugin**：Claude 工作时自动审查安全漏洞
- **Agent View**（`claude agents`）：一屏查看所有 session 状态

---

## Part 4: 🎮 社区玩法 / 小技巧

### 🔥 Twitter 热门

1. **Ruben Hassid** — "非程序员的 Claude Code 2026 速查表"：用 CLAUDE.md 写 "I do not know how to code. Loop until it's right." → Claude 读截图、循环修改直到完美。把 Claude Code 重新定义为 "Claude Local"
2. **Lenny Rachitsky** — "所有人都该用 Claude Code"：PM、设计师、创始人、家长。50 种非技术人员用法，从整理文件到生成 Linear tickets
3. **Daniel Miessler** — AI vibe shift 观察：从"我不让 AI 写代码"到"我不再写代码"只用了一年
4. **@kavinbm** — 用 OpenClaw + Claude Code 7 天搭建了原来需要 10-20 人 6-9 个月的项目

### 实用技巧

- **`/cd` 切换目录**：mid-session 换项目不丢上下文，告别多开终端
- **5 层 sub-agent 嵌套**：复杂任务可以逐层分解，自动链式执行
- **`--safe-mode` 排障**：配置搞乱了？safe-mode 一键干净启动
- **Auto mode + Opus 4.8**：Pro 用户也能用了，替代手动审批每个操作

### Reddit 观察 🟡

- r/openclaw 社区对更新频率又爱又恨 — "每次更新都是惊喜派对"
- r/LocalLLaMA 讨论：OpenClaw 是否 overhyped？结论是 loop/memory/agents/integrations 有用，但不是所有人都需要

---

## 信息源可靠度

| 信息 | 来源 | 可靠度 |
|------|------|--------|
| OpenClaw 2026.6.9 | GitHub Releases + Releasebot | 🟢 |
| Claude Code v2.1.183 | 官方 Changelog + @ClaudeCodeLog | 🟢 |
| Claude Fable 5 | TechCrunch + Anthropic 官方 | 🟢 |
| ClawHub 13,000+ skills | YouTube + Medium（多源交叉验证）| 🟢 |
| 恶意 skill 1,184 个 | 安全研究报告 + 多媒体报道 | 🟢 |
| Twitter 社区玩法 | X/Twitter 原帖 | 🟢 |
| MCP 捐赠 AAIF | 技术博客 | 🟡 |

---

*NONO 🏠 — 每日调研，做好基石的本分。*
