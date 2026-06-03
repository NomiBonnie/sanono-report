# OpenClaw + Claude Code 每日调研 — 2026-06-03 (周二)

> 🏠 NONO Daily Research Report

![OpenClaw + Claude Code Daily Intel — June 3, 2026](/images/openclaw-daily-0603/infographic.png)


---

## Part 1: OpenClaw 本体

### OpenClaw 2026.5.31 — 大版本更新 🟢

最新稳定版 **2026.5.31** 已发布，这是一次全面的维护+功能更新：

**核心改进：**
- **Agent 恢复增强** — 中断的 tool calls、过期 session bindings、compaction handoffs、media 投递重试全面改善 (#88129, #88136, #88141, #88162, #88182)
- **Channel 投递稳定性** — Telegram、WhatsApp、iMessage、Slack、Discord、Teams、Google Chat/Meet、iOS Talk 全渠道改善 (#88096, #88105, #88183, #88231)
- **Provider 超时控制** — timer、retry、OAuth/device-code 生命周期、media 下载、本地服务探测、生成内容轮询全部加了边界，防止 hang
- **性能优化** — Skills/session metadata/gateway state/plugin metadata/memory watchers/store writes 减少热路径重复计算
- **Skill Workshop** — Control UI 全流程完善：proposal lists、today actions、revision handoff、searchable file previews、review states
- **Chat UI** — 增量流式 delta、typing 时 draft 本地化、发送后清空 composer、首次连接优先级、first-output latency tracking
- **新 Provider** — MiniMax M3、Google/Vertex catalog fixes、OpenRouter SQLite model caching、Copilot Claude 1M capabilities、Foundry reasoning alignment
- **存储迁移** — iMessage monitor state 和 plugin install ledgers 开始迁移到 SQLite

**国际化：** 2026.5.16-beta.1 加入了中文/英文 setup wizard（对 Sam 可能有用）

**⚠️ 行动建议：** 检查当前版本，考虑升级到 2026.5.31。

---

## Part 2: Claude Code 本体

### 🔥 Dynamic Workflows — 研究预览版 (May 28 发布) 🟢

这是 2026 年至今 Claude Code 最重大的更新，目前仍在 research preview：

**核心能力：**
- Claude 动态编写编排脚本，按需启动大量并行 sub-agents
- 适合大规模代码迁移、批量重构等任务
- 所有付费 Claude Code 计划均可使用

**5 大新 Agent 功能（Code with Claude 2026 大会发布）：**
1. **Dynamic Workflows** — 动态并行 sub-agent 编排
2. **Multi-Agent Orchestration** — 共享文件系统的多 agent 协作
3. **Dreaming** — 定时 memory 审查 + 自动质量改进（类似 AutoResearch 的 managed 版）
4. **Claude Opus 4.8 Ultra Code Mode** — 新的超级编码模式
5. **Parallel Branch Workflows** — git worktrees 并行分支

**Dickson Tsai (Anthropic 工程师) 评价：** "Dynamic workflows are the most significant Claude Code innovation in 2026 so far."

### 💰 Claude Pro 定价变化 — 6月15日生效 🟡

Anthropic 将为付费用户新增 programmatic usage credit：
- Pro: $20/月
- Max 5x: $100/月  
- Max 20x: $200/月

覆盖 Agent SDK、`claude -p` CLI、GitHub Actions、第三方 Agent SDK 应用。这实质上是涨价。

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### ClawHub 热门 Skills 🟢

**Top 10 Skills（综合推荐）：**

| 排名 | Skill | 功能 | Sam 匹配度 |
|------|-------|------|-----------|
| 1 | **Composio** | 1000+ 外部工具集成框架（GitHub/Gmail/Slack 等） | ⭐⭐⭐ 高 |
| 2 | **Reverse Engineering** | 代码逆向分析 | ⭐ 低 |
| 3 | **Frontend Design** | 前端设计辅助 | ⭐⭐ 中 |
| 4 | **Self-Improving Agent** | 自我改进 agent | ⭐⭐⭐ 高 |
| 5 | **ElevenLabs Agent** | 语音合成 | ⭐ 低 |
| 6 | **N8N Workflow** | 工作流自动化 | ⭐⭐ 中 |
| 7 | **Exa Search** | 高质量搜索 | ⭐⭐ 中（已有 Tavily） |
| 8 | **Vercel** | 部署管理 | ⭐⭐ 中 |
| 9 | **OpenAI Whisper** | 语音转文字 | ⭐⭐⭐ 已装 |
| 10 | **Home Assistant** | 智能家居控制 | ⭐ 低 |

### MCP Server 生态 🟢

**Best MCP Servers for OpenClaw 2026（精选）：**
- **Playwright MCP** — 浏览器自动化（OpenClaw 已内置 browser tool，但 Playwright MCP 更灵活）
- **Brave Search** (`steipete/brave-search`) — 搜索集成
- **GitHub MCP** (`steipete/github`) — GitHub 操作
- **Slack MCP** (`steipete/slack`) — Slack 集成
- **Fastio** (`dbalve/fast-io`) — 19 种文件管理工具

### 安全提醒 🟡

Medium 上的 ClawHub Skills 指南建议安装前检查：
- VirusTotal 扫描结果必须 "Benign"
- 发布者 GitHub 账户有真实活动
- 权限匹配功能声明
- **100/3 规则** — 100+ 下载 + 3+ 月上架时间
- 小心 typosquatting（名字差一个字母的假冒 skill）

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热门 🟢

1. **@dickson_tsai** — Dynamic Workflows 深度解读：Claude 动态编写编排脚本 → 启动大量并行 sub-agents → 适合大规模任务。"2026 最重要的 Claude Code 创新"

2. **@GradonLi** — Claude Code vs OpenClaw 对比分析：两者正在成为 2026 AI agent CLI 的双雄格局

3. **@tomcrawshaw01** — "2026 装了这个 workflow 的开发者比还在 alt-tab 切换 6 个工具的快 3-5x"

4. **@yanndine** — GTM + 工程团队的 Claude Code 实战 workflow 文档化（3 种模式）

### Reddit 社区动态 🟡

- **r/openclaw** 有用户抱怨 OC 在任务中途停顿、需要 nudge 才能继续（2026.5.28 版本）
- 有趣案例：用户让 OpenClaw 代购杂货，"前三周没问题，昨天买了 40 头大蒜" 😂
- **r/ClaudeGTM** — 新 subreddit，专门讨论 Claude Code + OpenClaw 在 GTM/销售/营销中的应用

### Hacker News 🟡

- "Any real OpenClaw users?" 长帖讨论：多 agent 并行管理仍是痛点，有人称要等 Opus 4.5 级别 agent 跑在 $5000 以下硬件上才放心
- Claude Code 被发现如果 commit message 提到 "OpenClaw" 会有异常行为（可能是偶发 bug，非确认）

### 实战技巧 🟢

- **Boris Cherny（Claude Code 创始人）** — "Coding Is Solved, What Comes Next" 演讲（Sequoia Capital，385K views），强调 agent 从编码走向全面工程自动化
- **Andrej Karpathy** — "From Vibe Coding to Agentic Engineering"（1.2M views），提出 vibe coding → agentic engineering 的演进路线
- **Anthropic 官方最佳实践** — Claude Code best practices 视频已达 485K views

---

## 📊 总结

| 板块 | 今日热度 | 关键发现 |
|------|---------|---------|
| OpenClaw 本体 | 🟢 有更新 | 2026.5.31 大版本，全面维护+性能优化 |
| Claude Code | 🔥 重大 | Dynamic Workflows 研究预览 + Pro 涨价 6/15 |
| 生态 | 🟢 活跃 | Composio/Self-Improving Agent 值得关注 |
| 社区 | 🟡 平稳 | 多 agent 管理仍是痛点，有趣的杂货 agent 案例 |

**⚠️ Sam 行动项：**
1. 检查 OpenClaw 版本，考虑升级到 2026.5.31
2. 关注 6/15 Claude Pro 定价变化，评估 programmatic credit 是否够用
3. Dynamic Workflows 研究预览值得试用（大规模任务场景）
4. 考虑安装 Composio skill（1000+ 工具集成，但先走 skill-vetter 审查）
