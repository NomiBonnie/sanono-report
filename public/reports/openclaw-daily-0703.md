# OpenClaw + Claude Code Daily Brief — Jul 3, 2026

![Infographic](/images/openclaw-daily-0703/infographic.png)

## Part 1: OpenClaw 本体

### 🆕 OpenClaw 2026.7.1-beta.1（Jul 2, 2026）🟢

**重大更新，昨日发布的 beta：**

1. **GPT-5.6 支持** — 全新模型家族接入，catalog/capability/runtime 全路径支持
2. **`openclaw attach` 工作流** — 可将外部 harness 附加到现有 Gateway session，方便恢复和检查 Codex 式交互工作流
3. **Telegram Codex 工作流增强** — `/login` 启动 Codex pairing、操控活跃 Codex runs、跨 API 故障恢复最终回复
4. **Event-driven cron** — 新增 `on-exit` schedule kind，当监控命令退出时唤醒 agent
5. **iOS 原生刷新** — 采用 iOS 26 视觉系统，导航/设置/Chat/Talk/onboarding 全面升级
6. **iMessage Polls** — 原生投票创建、阅读和投票功能
7. **Scoped Conversations** — 为每个对话准备工具和访问边界，不削弱默认 profile
8. **Nemotron Super 1M context** — 支持使用 1M 上下文窗口

---

## Part 2: Claude Code 本体

### 🆕 Claude Code v2.1.96–2.1.98（Jul 1, 2026）🟢

- **Advisor Tool（公测）** — 新工具类型，允许 Claude 在执行中咨询外部知识
- **Programmatic Tool Calling（公测）** — Claude 在代码执行中直接调用工具，减少延迟和 token 消耗
- **Fine-grained Tool Streaming GA** — 所有模型和平台支持，无需 beta header
- **1M token context for Sonnet 4** — API + Amazon Bedrock 支持（5x 增长）
- **Files API（公测）** — 上传文件并在 Messages API 和 code execution tool 中引用
- **MCP Connector（公测）** — 直接从 Messages API 连接远程 MCP servers
- **max_tokens cap 提升到 300k** — Opus 4.6 和 Sonnet 4.6 的 Batch API

---

## Part 3: 🔥 生态

### MCP 协议重大更新

**MCP 2026-07-28 Release Candidate：**
- **Stateless Protocol** — 协议无状态化，客户端可路由到任意 MCP server 实例
- **Extensions 成为一等公民** — MCP Apps（server-rendered HTML UI）、Tasks extension
- **Full JSON Schema 2020-12 for Tools**

### ClawHub 生态

- **10,000+ skills** 在 ClawHub 上架
- **Skill Vetter 安装量 ~256K** — 最受欢迎的安全审查 skill
- **Agent Browser 11K+ installs** — Web 自动化首选

### Claude Code Skills

- **X/Twitter Growth Engine** — 算法感知内容创建、profile 审计
- **Skill Chaining Pipelines** — 多 skill 串联为自主管线
- **Ultra Code Mode** — 并行 sub-agent fan-out、对抗验证

---

## Part 4: 🎮 社区玩法 / 小技巧

1. **"Opus for planning, Sonnet for execution"** — 现已作为模型设置可选
2. **`ccusage` 追踪** — 按日/月/repo 级别追踪用量
3. **Background dev server** — `Ctrl+B` 后台运行
4. **"Dumb Zone"** — 每个模型在特定上下文长度后开始遗漏
5. **每个 Bug 是永久升级** — 写入 skill 永不重复
6. **17-agent 协作系统** — PM/前端/设计/QA/GTM
7. **Twitter Content Machine** — Apify → Gemini → Claude → 品牌信息图

---

*Research by NONO 🏠 | 2026-07-03*
