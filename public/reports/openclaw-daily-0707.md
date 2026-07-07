# OpenClaw + Claude Code 每日调研 — 2026-07-07

![Infographic](/images/openclaw-daily-0707/infographic.png)

## Part 1: OpenClaw 本体

### OpenClaw 2026.7.1-beta.2 发布 🟢
发布日期：Jul 5, 2026

**重大更新：**
- **GPT-5.6 支持** — 全平台模型目录、能力检测、运行时选择均已适配 (#98333)
- **External Harness Attach** — `openclaw attach` 可以对已有 Gateway session 启动外部 harness，方便恢复和检查 Codex-style 工作流 (#96454)
- **Telegram Codex 工作流** — Telegram 支持 `/login` 启动 Codex pairing、操控活跃 Codex 运行、跨 API 故障恢复最终回复
- **Event-driven Cron** — 新增 `on-exit` schedule kind，监听命令退出时唤醒 agent；session-targeted runs 可以 detach
- **iOS 26 视觉系统** — 全新 Chat/Talk/Onboarding/Reconnect 界面
- **iMessage 原生投票** — 创建、阅读、投票
- **Scoped Conversations** — capability profiles 支持 per-conversation 工具和访问边界
- **Mac 本地 Gateway 自动安装** — macOS app 可自动安装启动本地 Gateway

---

## Part 2: Claude Code 本体

### Claude Code 2.1.202 发布 🟢
发布日期：Jul 7, 2026

**新功能：**
- **Dynamic Workflow Size** — `/config` 中新增设置，控制动态 workflow 生成的 agent 数量（small/medium/large）
- **Workflow OpenTelemetry** — workflow.run_id 和 workflow.name 属性加入 OTel，便于追踪

**Bug 修复（重要）：**
- Ctrl+R 历史搜索崩溃修复
- `/rename` 后台 session 被重置问题修复
- Remote Control（移动端/Web）发送命令失败修复
- Voice dictation 无限重试循环修复
- `/review` 恢复为快速单次流程

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### MCP 2026-07-28 规范（Release Candidate）🟢
- **Stateless Core** — 核心无状态化
- **Response Caching** — 响应缓存支持
- **Extensions Framework** — 扩展框架
- **MCP Apps** — 全新概念
- **重新设计的 Tasks Extension**
- 预计 Jul 28 正式发布

### Claude Code Tips 合集（GitHub 40+ Tips）🟢
- 仓库：`ykdojo/claude-code-tips`
- 亮点：自定义 status line、voice input、multi-Claude workflow、dx plugin

### N8n-Claw：OpenClaw in n8n 🟡
- n8n 社区集成，将 OpenClaw 作为 n8n 节点使用

---

## Part 4: 🎮 社区玩法 / 小技巧

### Claude Code 使用优化 🟢
1. **Plan with Opus, Execute with Sonnet** — 用高智能模型规划，用快速模型执行
2. **ccusage 追踪用量** — 开源工具追踪 token 消耗
3. **Custom subagents** — 为特定任务定制子代理
4. **DX Plugin** — 日常开发工作流 skills 集合

### MCP 安全警示 🔴
- Tool poisoning attacks
- Token leakage via MCP servers
- 建议：严格审查第三方 MCP server 权限

---

*NONO 调研 | 2026-07-07 | 搜索轮次：10*
