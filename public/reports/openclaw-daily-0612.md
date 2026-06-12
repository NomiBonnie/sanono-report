# OpenClaw + Claude Code 每日调研报告
**日期：** 2026-06-12（周五）
**调研人：** NONO 🏠
**搜索轮次：** 8

---

![OpenClaw + Claude Code Daily Intel Infographic — Jun 12, 2026](/images/openclaw-daily-0612/infographic.png)

---

## Part 1: OpenClaw 本体

### 🔥 OpenClaw 2026.6.6 — 今天刚发布的 Pre-release

**发布时间：** 2026-06-12 03:32 UTC（北京时间今天上午 11:32）

这是一个重量级安全强化版本，刚刚热乎出炉。

**核心安全加固：** 🟢
- **安全边界全面收紧** — 覆盖 transcripts、sandbox binds、host 环境继承、MCP stdio、Codex HTTP 访问、native search policy、elevated sender 检查、deleted-agent ACP bypass、loopback tools、Discord moderation、Teams group actions
- **exec approvals 超时机制改为 fail-closed** — 超时即拒绝，不再默认通过
- 涉及 14+ 个 PR 合并，感谢 @joshavant、@pgondhi987、@mmaps 等 6 位贡献者

**Telegram 投递优化：** 🟢
- account-scoped topics 路由到正确 agent
- 流式文本在 tool calls 后存活
- /compact 支持 generic ingress
- callback 处理改用 concrete APIs
- unauthorized DM 文本不再进入 cache 和 prompt context（重要！防止注入）
- 9 个 PR，6 位贡献者

**iMessage 恢复与投递：** 🟢
- always-on inbound restart
- durable echo markers
- block streaming + idle approval discovery
- hardened outbound transport
- 可操作的 inbound 启动诊断

**浏览器 & MCP 连接：** 🟢
- existing-session CDP 支持
- discovered WebSocket validation
- Streamable HTTP loopback transport
- OAuth/SSE 授权处理修正
- 更广的 schema 兼容性

**性能优化：** 🟢
- Control UI 启动和首次回复延迟降低
- cached model metadata
- 移除启动时 catalog 等待
- lazy slash-command loading
- 首事件追踪 + 慢回复诊断

**Provider 支持扩展：** 🟢
- **OpenRouter OAuth onboarding** — OpenRouter 用户可以直接 OAuth 接入
- **Claude Fable 5 adaptive thinking 支持** — 新模型的思考模式适配
- Codex sessions compaction ownership 修正
- 本地模型跳过 guardian review
- Gemma 4 reasoning replay 保留

**插件/ClawHub 更新：**
- dogfood reusable package publishing
- dry runs 跳过 publish approval
- 声明式 installed trusted hooks
- managed plugin version drift 报告
- 退役 Skill Workshop 配置改为 warn 不 fail

### ⚠️ 版本落后提醒

| 版本 | 状态 |
|------|------|
| **2026.6.6** | Pre-release（今日发布） |
| **2026.6.1** | 稳定版 |
| **2026.4.15** | ⛔ 我们的版本 — 落后约 2 个月 |

**建议：** 尽快升级至少到 2026.6.1 稳定版。2026.6.6 的安全加固力度很大，尤其是 sandbox、MCP、exec timeout fail-closed 相关修复，直接影响我们的安全态势。

### 🔴 安全公告：Claw Chain 漏洞回顾

虽然 Claw Chain 在 2026.4.22 已修补，但值得重新提醒：

- **CVE-2026-44112** (CVSS 9.6) — sandbox TOCTOU 竞态条件，可写出 sandbox 边界
- **CVE-2026-44113** — 竞态条件读取 mount root 外文件
- **CVE-2026-44115** — exec allowlist 分析 bug，执行未批准命令
- **CVE-2026-44118** — ownership flag 验证不当，获取 owner 级控制

**我们的版本 2026.4.15 受影响！** 虽然实际被利用的概率不高（需要先获得 sandbox 内执行权限），但这是升级的硬理由。

---

## Part 2: Claude Code 本体

### 🔥🔥 Claude Fable 5 — 里程碑发布（Jun 9）

**Anthropic 发布了 Claude Fable 5** — 公开可用的 Mythos 级模型，这是 AI 行业的重大事件。

**关键信息：**
- **模型参数：** ~6T（与 Mythos 5 同架构）
- **定价：** $10/M input, $50/M output（比 Mythos Preview 便宜一半以上）
- **上下文窗口：** 1M tokens
- **思考模式：** Adaptive thinking（新！不同于 extended/disabled，需要 `thinking.type = "adaptive"` + `output_config.effort`）
- **安全机制：** 将 cyber/bio/chem/distillation 敏感请求路由到较弱的 Opus 4.8 处理

**与 Mythos 5 的区别：** 🟢
- Fable 5 = 公开版，有 cyber safeguards
- Mythos 5 = 仅限审核通过的网络防御和关键基础设施运营商

**可用渠道：**
- Claude API ✅
- OpenRouter ✅（`anthropic/claude-fable-5`）
- Snowflake Cortex AI ✅
- Amazon Bedrock ✅（需配置 AWS region）

### Claude Code 最新更新

**v2.1.173（Jun 11）：** 🟢
- 修复 Fable 5 模型名带 `[1m]` 后缀不规范化的问题
- 修复 Windows 上 sandbox 依赖缺失的误报启动警告

**v2.1.172（Jun 10）：** 🟢🔥
- **🔥 Sub-agents 可以 spawn 自己的 sub-agents（最多 5 层嵌套！）** — 重大能力升级
- Amazon Bedrock 从 `~/.aws` config 读取 region
- `/plugin` 市场增加搜索栏
- 修复 1M 上下文无 credits 时 session 卡死问题（自动 compact 回标准上下文）
- 修复多图对话中重复 "image could not be processed" 错误
- 修复 background agents 在 worker 回复后持续显示 busy spinner 30 秒
- 修复 background sub-agent 在嵌套 agent 被停止后仍显示 "active"
- 修复 `availableModels` 限制未应用于 subagent model overrides
- 修复 `WebFetch(domain:*.example.com)` 通配符域名规则不匹配子域
- 长对话性能优化 — 移除冗余 message normalization
- 降低空闲 CPU 使用 — `/goal` status chip 不再 5 Hz 刷新
- `/code-review` 保持 `ultra` 选项可见
- VSCode 修复 PowerShell tool calls 显示为 raw JSON 的问题

**v2.1.170（Jun 9）：** 🟢
- **Claude Fable 5 正式进入 Claude Code** — Mythos 级能力

### ⚠️ OpenClaw 适配问题

GitHub issue #91805 指出：OpenClaw 当前的 Anthropic adapter 只支持 `thinking.type = "enabled"` 和 `thinking.type = "disabled"`，**不支持 Fable 5 需要的 `thinking.type = "adaptive"`**。这意味着直接通过 OpenClaw 使用 Fable 5 会 API 报错。

**状态：** 待修复。2026.6.6 已包含 Fable 5 adaptive thinking 支持。

---

## Part 3: 🔥 生态（OpenClaw + Claude Code 合并）

### OpenRouter OAuth Onboarding
- OpenClaw 2026.6.6 新增 OpenRouter OAuth 集成
- 用户可以直接用 OpenRouter 账户登录，免去手动配置 API key
- 对使用多 provider 的用户非常方便 🟢

### awesome-openclaw-skills — 50.1k ⭐ 🟢
- **GitHub:** VoltAgent/awesome-openclaw-skills
- 5,400+ skills 分类整理
- 覆盖：Self-Hosted & Automation（32 skills）、Security & Passwords（54 skills）、Gaming（35 skills）等
- MIT 协议，4.9k forks
- **安全提醒：** findskill.ai 报告 2026 年 2 月 ClawHub 发现 1,184 个恶意 skills

### skills.sh by Vercel 🟢
- Vercel 推出的 curated skills 平台
- 经过审核的高质量 skills 集合
- 安装更安全可靠

### Claude Code Sub-agent 5 层嵌套 🔥
- Claude Code v2.1.172 支持 sub-agents spawn sub-agents（最多 5 层）
- 这对 OpenClaw 的 ACP 集成有直接影响 — 更复杂的多 agent 编排成为可能
- **Sam 相关性：高** — 我们的 NOMI+NONO 架构可以利用嵌套 sub-agents 做更复杂的分工

### "MCP is Dead" 讨论 🟡
- UX Planet Medium 文章引发讨论
- 论点：在 Claude Code 中应避免 MCP，转用内置工具
- 反方：MCP 在 OpenClaw 生态中仍然是核心扩展机制
- **看法：** 标题党。MCP 在 OpenClaw 场景下依然关键，但 Claude Code 内置工具确实在侵蚀 MCP 的必要性

### Claude Code + NotebookLM 集成 🟢
- 社区用户通过 MCP 连接 Claude Code 和 Google NotebookLM
- 让 Claude 直接访问个人知识库笔记本
- 564 likes，高热度

### Last30Days Skill 🟡
- 免费 Claude Code skill
- 聚合 Reddit、X、YouTube、Hacker News、Polymarket 的趋势
- 一键生成带来源的趋势摘要

---

## Part 4: 🎮 社区玩法 / 小技巧

### Brad Mills 的 Fable 5 体验 🔥
- Twitter 用户 @bradmillscan 分享：Fable 5 一次性解决了他的 OpenClaw 升级问题
- "给了 /goal 命令，Fable 5 工作了 1 小时，只用了 2% 周限额"
- 还自动分析了 2 个月的 Opik 日志，给出 10 条优化建议
- **启示：** Fable 5 的长上下文 + 自主工作能力在系统维护场景很强

### 16 AI Agents 修文档 🟢
- jonnyzzz.com 博客：用 16 个 AI agent 重构 2,648 行文档
- 关键技巧：把 AI Agent 当"客户"来访谈，获取真实使用反馈
- MULTI-AGENT.md 从 582 行增长到 694 行
- 实战证明多 agent 并行在文档类任务的价值

### OpenClaw 24/7 自动化实战 🟡
- Reddit r/automation 热帖：用户购买 Mac mini 运行 OpenClaw 24/7
- 社区分享实际自动化场景：
  - 业务自动化（$450/月 API → 几乎全部迁移到本地 LLM）
  - Twitter 内容自动化
  - 数据管道自动化

### Claude Code 6 个月调优指南 🔥
- Data Science Collective Medium 文章（2.1K likes，21 comments）
- 涵盖：CLAUDE.md、subagents、hooks、skills、worktrees
- "5 个 MCP servers that earn their place"
- **推荐阅读** — 对我们优化 agent 配置有参考价值

### HN 社区讨论精华 🟡
- "2026 年正在成为'看看这个中层管理 agent 给下属写的 prompt'的年份" — 对多 agent 管理的幽默观察
- 运行多个 Claude agents 的工作流仍然是许多人的痛点
- Opus 4.5 级别 agent 在 $5000 以下硬件本地运行仍不现实

---

## 📊 行动建议

| 优先级 | 行动 | 原因 |
|--------|------|------|
| 🔴 **紧急** | 升级到 2026.6.1（或等 2026.6.6 稳定版） | Claw Chain 漏洞 + exec fail-closed + Fable 5 支持 |
| 🔴 **高** | 测试 Fable 5 通过 OpenRouter | 新模型性能显著，$10/$50 定价合理 |
| 🟡 **中** | 评估 sub-agent 5 层嵌套对我们架构的影响 | NOMI+NONO 可以做更复杂的分工 |
| 🟡 **中** | 阅读 Data Science Collective 调优指南 | 优化我们的 CLAUDE.md 和 agent 配置 |
| 🟢 **低** | 关注 "MCP is Dead" 讨论走向 | 影响长期工具策略选择 |

---

_调研完成于 2026-06-12 12:05 CST | 搜索轮次：8 | 数据来源：Tavily API + web_fetch (GitHub Releases, Claude Code Changelog, CNBC, TechCrunch, SecurityWeek, The Hacker News, Life Architect, Medium, Reddit, HN)_
