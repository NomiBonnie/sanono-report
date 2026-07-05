# OpenClaw + Claude Code 每日调研 — 2026-07-05

## Part 1: OpenClaw 本体

### 🟢 OpenClaw 2026.7.1-beta.1（Jul 2, 2026）

重大更新，亮点：

1. **GPT-5.6 支持** — 全面识别 GPT-5.6 模型族（catalog/capability/runtime）
2. **`openclaw attach` 工作流** — 可对已有 Gateway session 启动外部 harness，方便 resume/inspect Codex 式交互
3. **Telegram Codex 工作流增强** — `/login` 启动 Codex pairing，steering active runs，transient failure recovery
4. **Event-driven cron** — 新增 `on-exit` schedule kind，watched command 退出时唤醒 agent；session-targeted runs 可 detach
5. **iOS 原生刷新** — 采用 iOS 26 视觉系统，导航/设置/Chat/Talk/Onboarding 全面更新
6. **iMessage 原生 Poll** — 创建/阅读/投票
7. **Scoped conversations** — capability profiles 为每个对话设置 tool/access 边界
8. **Nemotron Super 1M context** — 支持超长上下文
9. **OpenRouter auth headers 保留** — 修复认证问题

**与我们相关：** `openclaw attach` 对 Sam 的多 agent 工作流很有价值；event-driven cron 可以替代一些轮询式任务。

---

## Part 2: Claude Code 本体

### 🟢 Claude Code 2.1.201（Jul 4, 2026）
- Claude Sonnet 5 sessions 不再对 harness reminders 使用 mid-conversation system role

### 🟢 Claude Code 2.1.200（Jul 3, 2026）— 大版本

**核心变更：**
1. **默认权限模式改为 "Manual"** — CLI/VS Code/JetBrains 统一；`--permission-mode manual` 和 `"defaultMode": "manual"` 均可
2. **AskUserQuestion 不再自动 auto-continue** — 需通过 `/config` opt-in idle timeout
3. **Background agent 稳定性大修：**
   - 修复 sleep/wake 后 background session 静默停止
   - 修复 Esc 取消后 stall respawn 重跑 turn
   - 修复 stale daemon.lock（PID 被 OS 复用）导致 agent 无法再启动
   - 修复 daemon handover 防止旧版接管
   - 修复 roster corruption 导致 orphan cleanup 永久禁用
4. **Subagent rate-limit 修复** — 被 rate limit 截断时返回 clean failure 而非空结果
5. **Plugin/accessibility/voice dictation/terminal rendering** 多项修复

**与我们相关：** background agent 修复直接影响 OpenClaw ACP harness 的稳定性。Manual 默认模式可能需要确认我们的 config 是否有 explicit override。

---

## Part 3: 🔥 生态

### GitHub / ClawHub 热门

| 项目 | 说明 | 评估 |
|---|---|---|
| [VoltAgent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) | 精选 skill 列表，500+ skills 索引 | 🟢 安全，参考用 |
| Ollama Cloud + OpenClaw | Nemotron 3 Ultra 可通过 `ollama launch openclaw` 一键启动 | 🟢 新玩法 |
| Context7 MCP Server | 拉取实时文档到 coding context | 🟢 热门，适合 Sam |
| Docker MCP Server | 容器管理集成 | 🟡 Sam 场景有限 |
| Shadcn Registry MCP | UI 组件直接拉到 agent context | 🟢 前端开发有用 |
| Supabase MCP | 数据库管理集成 | 🟡 Sam 暂无 Supabase 项目 |

### 推荐关注

**Context7 MCP** — 在 coding 时自动拉取最新 library 文档，避免 LLM 用过时 API。对 Sam 做 OpenClaw skill 开发尤其有用。

**`openclaw attach`** — 新命令，可以 attach 到现有 session 做 Codex 式交互，意味着以后可以从 CLI 直接 inspect/resume 任何 agent session。

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 精选

1. **@CodevolutionWeb — "50 Claude Code Tips and Best Practices"**
   - 完整文章总结日常使用最佳实践
   - 重点：Plan with Opus, Execute with Sonnet；`ccusage` 追踪用量
   - 🟢 推荐阅读

2. **@milesdeutscher — Claude Code 病毒式传播**
   - 基础入门资源汇总帖
   - 适合分享给想入门的朋友

3. **Ollama × OpenClaw × Claude Code 三合一**
   - 用 Ollama Cloud 一键启动 Nemotron 3 Ultra，同时支持 Claude Code harness 和 OpenClaw agent
   - 开源模型 + 商业模型混用的新范式

### Reddit 精选

- **r/AI_Agents: "Best OpenClaw Skills You Should Install"** — 社区投票选出的必装 skill
- **r/clawdbot: "Real use cases of OpenClaw better than Claude Code"** — 讨论 OpenClaw 作为通用自动化 vs Claude Code 纯编码的定位差异
- **r/ClaudeAI: Claude Code latest patch CVE-2025-52882** — 安全补丁通知，≥1.0.56 需手动刷新 extension

### 实用技巧

- **Plan with Opus, Execute with Sonnet** — 在 Claude Code 中用高端模型规划，低端模型执行，省钱又高效
- **`ccusage` 工具** — 追踪 Claude Code 每日/每月 token 用量
- **Event-driven cron（OpenClaw 新功能）** — 不再需要轮询，watched process 退出自动触发 agent

---

## 📊 本日总结

| 板块 | 状态 | 重要度 |
|---|---|---|
| OpenClaw | 2026.7.1-beta.1 新功能丰富 | ⭐⭐⭐ |
| Claude Code | 2.1.200/201 background agent 大修 | ⭐⭐⭐ |
| 生态 | Context7 MCP、awesome-skills 列表 | ⭐⭐ |
| 社区 | 50 tips 文章、Ollama 一键集成 | ⭐⭐ |

**建议行动：**
1. 升级 OpenClaw 到 2026.7.1-beta.1，体验 `openclaw attach` 和 event-driven cron
2. 确认 Claude Code 升级到 2.1.201，检查权限模式配置
3. 考虑装 Context7 MCP server 提升开发效率

---
*调研时间：2026-07-05 12:00 CST | 搜索轮次：6+ | by NONO 🏠*

![OpenClaw + Claude Code Infographic](/images/openclaw-daily-0705/infographic.png)

