# OpenClaw + Claude Code 每日调研 — 2026-07-04

![OpenClaw + Claude Code Daily Intel](/images/openclaw-daily-0704/infographic.png)


## Part 1: OpenClaw 本体

### OpenClaw 2026.7.1-beta.1 发布 🟢
Released Jul 2, 2026. 重大更新：

- **GPT-5.6 支持**：OpenClaw 识别 GPT-5.6 模型家族（#98333）
- **`openclaw attach` 工作流**：可对已有 Gateway session 启动外部 harness，方便恢复和检查 Codex 风格工作流（#96454）
- **Telegram Codex 工作流增强**：Telegram 可通过 `/login` 启动 Codex pairing，操控活跃 Codex 运行，跨 API 故障恢复回复（#98006, #98126, #98786）
- **Event-driven cron**：新 `on-exit` schedule 类型，监听命令退出即唤醒 agent（#92037, #98755）
- **iOS 原生应用刷新**：采用 iOS 26 视觉系统，更清晰的导航、设置、Chat、Talk 和 onboarding 流程（#98452 等）
- **iMessage 投票**：原生投票创建、阅读和投票功能（#98421）
- **Scoped conversations**：Capability profiles 为每个对话准备工具和访问边界（#98536）
- **Nemotron Super 1M 上下文窗口**支持（#98726）

### 其他修复
- Channel runs 显示进行中状态
- Gateway 保持 provider-owned CLI sessions 跨每日重置
- Cron 在 isolated-run 超时行保留 provider/model
- Media tools 跳过 env-key provider plugins 的自动选择

## Part 2: Claude Code 本体

### Claude Code v2.1.201 (Jul 4) 🟢
- Claude Sonnet 5 sessions 不再在对话中途使用 system role 发送 harness reminders

### Claude Code v2.1.200 (Jul 3) 🟢 重大版本
- **Manual 成为默认权限模式**：CLI、VS Code、JetBrains 统一改为 "Manual"
- **AskUserQuestion 对话不再自动继续**：需通过 /config 开启 idle timeout
- **Background agent 大量修复**：
  - 睡眠/唤醒后 session 不再静默停止
  - Esc 取消后不再重跑 turn
  - 崩溃留下的 stale daemon.lock 不再阻止新启动
  - Daemon handover 防止旧 build 接管
  - Roster corruption 修复
- **Subagents 限流处理改善**：被 rate limit 切断时返回错误而非空结果
- Background agent 输出的 control bytes 修复

### Claude Code 50% 限额提升 🟢
- 通过 7 月 13 日，所有用户周限额提升 50%，无需操作
- 但 Max 20x 用户不满：连续两次被跳过

### Claude Opus 4.8 发布 🟢
- 编码、agentic skills、推理能力全面提升

### Claude Sonnet 4 支持 100 万 tokens 上下文 🟢
- API 端从 ~250k 提升到 1M tokens（5x 增长）

## Part 3: 🔥 生态

### OpenClaw MCP 生态现状
- **347,000+ GitHub stars**，200+ 社区 MCP servers
- 热门插件：@anthropic/mcp-filesystem、@anthropic/mcp-github、@anthropic/mcp-postgres
- **免费 MCP servers**（NosytLabs/openclaw-free-mcp-servers）：本地免费图片生成 + TTS，无需 API key
- **X (Twitter) Automation Skill**：33 个命令，完整 X 平台交互，适合社交媒体自动化

### Claude Code Skills 生态
- **Skills 现支持组织级管理**（Team/Enterprise plans）
- **Agent Skills 开放标准**（agentskills.io）：跨 AI 平台通用
- **MCP Market**（mcpmarket.com）：浏览和同步 skills 到 Claude Cowork、Claude Code、Codex 等
- **Claude Managed Agents (Public Beta)**：支持定时运行 + CLI 工具 + 认证服务

### 值得关注的新项目
- **Claude Apps Gateway**：Anthropic 官方 apps 网关
- **Enterprise-managed authorization**：身份提供者 + MCP 提供者 + Claude 客户三方协同
- **Workload Identity Federation**：Claude 新增工作负载身份联邦

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter 热门技巧 (@claude_code 社区)
1. **"Plan with Opus, Execute with Sonnet"** — 现已作为 model setting 内置
2. **Opus 4.1 规划 + Sonnet subagents 并行** — 在 plan 中让 Opus 指定哪些任务可并行
3. **`ccusage` 追踪用量** — daily/monthly/repository 级别
4. **后台 dev server** — Ctrl+B 在 Claude Code 中后台运行
5. **Claude Code 不止写代码** — Anthropic 团队内部用它做通用 agent

### Workflow 最佳实践 (2026 版)
- **Plan-first 纪律**：有想法立刻 `/ce:plan`，80% 时间规划 + 20% 执行
- **Voice dictation 集成**：语音 → 截图 → 直接粘贴到 Claude Code
- **并行 autonomous sessions**：多个 subagent 同时工作
- **Harness > Model**：2026 年的增益主要来自 harness（plan mode、并行探索、持久记忆、长 session 续航）

### 社区争议 ⚠️
- **Anthropic 封禁 OpenClaw 用户争议**：HN 热帖讨论 Claude Code 是否针对 OpenClaw 用户（commits 提及 OpenClaw 可能触发限制）
- **第三方 harness 限制收紧**：社区担忧 claude -p 等用法是否会被视为违规
- **Reasoning effort 降低争议**：用户报告同任务 Claude vs Codex 花费差 21x
- **OpenClaw 6 月 15 日定价变更**：从 $100/月到可能 $100/天，社区讨论替代方案

---

**信息可靠度：**
- 🟢 来源确认：Releasebot、GitHub CHANGELOG、Reddit 官方帖
- 🟡 间接来源：Twitter 社区、HN 讨论（细节可能不完全准确）
- 注：定价争议为社区讨论，非官方确认

**调研时间：** 2026-07-04 12:00 CST  
**搜索轮次：** 6 轮（OpenClaw updates / Claude Code updates / MCP ecosystem / Twitter tips / Community discussion / Claude Code changelog）
