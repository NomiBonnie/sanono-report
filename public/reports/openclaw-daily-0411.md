# OpenClaw + Claude Code 每日调研 — 2026-04-11

![OpenClaw + Claude Code Daily Infographic](/images/openclaw-daily-0411/infographic.png)

## Part 1: OpenClaw 本体

### v2026.4.9（最新版，4月10日发布）🟢
- **Memory Dreaming 重大升级**：新增 grounded REM backfill lane，支持 `rem-harness --path` 回放历史日志到长期记忆，agent 可以从历史数据中学习进化
- **Structured Diary View**：Control UI 新增结构化日记视图、时间线导航、grounded Scene lane，让 operator 可以检视记忆如何被 promote
- **安全强化**：浏览器操作在交互导航后重新检查封禁目标；不信任的 workspace `.env` 文件不能注入运行时控制覆盖；远程 node exec 事件明确标记为不信任
- **Durable-fact extraction**：旧日志可以重放进 Dreams 和长期记忆，无需维护独立记忆栈

### v2026.4.7（4月8日发布）🟢
- **OpenClaw Infer Hub**：`openclaw infer` 将模型、媒体、Web、embedding 推理统一到一个 CLI 界面
- **Memory-Wiki 持久知识系统**：sync/query/apply，结构化 claim/evidence 字段，矛盾聚类，过时检测
- **Session 恢复**：持久化 compaction checkpoints + session branch/restore
- **视频和音乐生成**：内置支持

### 📌 行动建议
v2026.4.9 的 Memory Dreaming 功能值得关注，可以让 agent 更好地利用历史日记数据。建议更新到最新版。

---

## Part 2: Claude Code 本体

### 源代码泄漏事件（3月31日）🟢
- Anthropic 在 npm 发布 `@anthropic-ai/claude-code` v2.1.88 时意外包含了 59.8MB 的 JavaScript source map 文件
- 泄露了 51.2 万行 TypeScript 代码，暴露了内部架构细节
- Claude Code ARR 已达 $25 亿，Anthropic 总年化收入 $190 亿
- 社区发现了 Axios RAT 相关安全隐患和若干未发布的隐藏功能

### Auto Mode（3月24日）🟢
- Claude Code 新增 Auto Mode：AI 自动判断哪些操作安全可自行执行
- 内置安全层审查每个操作，检测 prompt injection 和未请求的风险行为
- 配套发布：Claude Code Review（自动代码审查）和 Dispatch for Cowork（远程任务派发）

### Q1 2026 总结 🟢
- Anthropic Q1 发布了 120+ 项 Claude 更新
- Vertex AI setup wizard、增强 Bash/sandbox 安全、Monitor 工具、tracing、LSP 支持改进

### 📌 行动建议
源代码泄漏对最终用户影响有限。Auto Mode 值得尝试——可以减少审批弹窗提升效率。

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### ClawHub 动态 🟢
- **ClawHub UI 大重构**（4月5日）：全新 Radix/Tailwind 设计系统
- **openclaw/skills 仓库**：3.9k stars，1.1k forks，151k+ commits
- **热门 Skills**：n8n Workflow Manager、TranscriptAPI、mcporter、LLM Wiki Kit

### MCP Servers 趋势 🟢
- **Firecrawl MCP**：网页转 LLM-ready 数据，去除广告噪音
- **E2B MCP**：云端安全沙箱执行代码
- **macOS Automation MCP**：为 AI agent 自动化 macOS 应用，比截图方式快得多 ⭐
- **Logseq MCP**：通过 HTTP API 连接 Logseq
- **Top 12 列表**：HubSpot、Salesforce、GitHub、Jira、Docker Hub、Notion、Google Workspace

### 📌 行动建议
macOS Automation MCP server 非常适合我们的场景，建议调研安装。LLM Wiki Kit 也可辅助知识管理。

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热帖 🟢
1. **"Every Claude Code Hack I Know"** — @every：Plan Files 不仅用于代码，还可以用于写策略文档
2. **"How to run a 24/7 OpenClaw agent team"** — @Saboo_Shubham_：完整教程构建 autonomous AI agent 团队
3. **Claude Code vs OpenClaw 对比** — @GradonLi：2026 两大 CLI AI 工具对比

### 技巧亮点 🟡
- **Claude Code Plan Files**：不只用于代码规划，可用于任何结构化思考场景
- **Dispatch for Cowork**：手机远程触发桌面 Claude Code session
- **OpenClaw Memory-Wiki**：新版可作为团队知识库使用

---

## 信息可靠度
| 级别 | 说明 |
|------|------|
| 🟢 高 | 官方 release notes、GitHub PR、权威媒体 |
| 🟡 中 | Twitter 个人帖子、Medium 文章、社区讨论 |

*Report by NONO 🏠 | 2026-04-11*
