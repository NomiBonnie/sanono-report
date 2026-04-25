# OpenClaw + Claude Code 每日调研 — 2026-04-25


![OpenClaw & Claude Code Daily Intel Brief](/images/openclaw-daily-0425/infographic.png)

---

## Part 1: OpenClaw 本体

### v2026.4.22 发布（4月22日）🟢

最新版本 2026.4.22 是一次功能大更新：

- **xAI 多模态支持：** 新增 xAI 图片生成（grok-imagine-image/pro）、TTS（6种声音，MP3/WAV/PCM）、STT（grok-stt）、以及 Voice Call 实时转写。(#68694)
- **STT 流式转写扩展：** Deepgram、ElevenLabs、Mistral 新增 Voice Call 实时转写；ElevenLabs 还支持 Scribe v2 批量音频转写。
- **TUI 本地嵌入模式：** 可在无 Gateway 情况下运行终端聊天，插件审批门仍有效。(#66767)
- **Onboarding 改进：** 首次配置时自动安装缺失的 provider 和 channel 插件。
- **OpenAI Web Search 原生支持：** OpenAI Responses 模型自动使用原生 web_search 工具。
- **`/models add` 命令：** 直接在聊天中注册新模型，无需重启 gateway。(#70211)
- **WhatsApp 增强：** 可配置原生回复引用（replyToMode）；支持 per-group/per-direct systemPrompt。
- **sessions_list 增强：** 新增 label、agent、search 过滤器。(#69839)
- **腾讯云 Provider：** 内置腾讯云插件，支持 hy3-preview 模型。(#68460)
- **Amazon Bedrock Mantle：** 新增 Claude Opus 4.7 via Mantle route。
- **GPT-5 Prompt Overlay：** 共享 provider runtime，所有 GPT-5 兼容模型统一行为。
- **Gateway 诊断导出：** 支持 sanitized 日志/状态/健康/配置快照导出。(#70324)
- **Control UI 个人身份：** 本地头像+名称设置。(#70362)

### v2026.4.21（4月21日）— 安全修复 🟢

- **GPT-image-2 默认升级：** 图片生成默认模型升级
- **特权提升漏洞修复：** #69774 强制权限检查
- **插件依赖恢复：** 插件 npm 依赖问题可自动恢复
- **Slack thread 修复：** 消息不再跑到错误 thread
- **浏览器自动化加速：** 无效 ref 立即报错，不再等超时
- **npm 安装警告清理：** node-domexception 废弃警告消除

### v2026.4.20 — Kimi K2.6 + 安全强化 🟢

- Kimi K2.6 支持 + provider-aware /think
- BlueBubbles iMessage 修复
- Cron 状态清理
- Gateway pairing 和插件启动强化

### 安全关注 🟡

- **Gateway 工具安全：** config mutation guard 现在阻止 model-driven 重写受信任路径（sandbox、plugin trust、auth/TLS、SSRF policy、MCP servers 等）
- **Codex CLI Auth 隔离：** 不再从 ~/.codex 复制 OAuth 材料
- **workspace .env 限制：** 不能再注入 OPENCLAW_* 运行时控制 key

---

## Part 2: Claude Code 本体

### Anthropic 4月23日 Post-Mortem — 三重 Bug 导致质量下降 🔴

Anthropic 正式发布事后分析，确认过去一个月 Claude Code 质量下降由三个独立问题导致：

1. **Reasoning Effort 降级（3月4日）：** 默认从 `high` 改为 `medium` 以减少延迟。4月7日恢复。影响 Sonnet 4.6 + Opus 4.6。
2. **Thinking 清除 Bug（3月26日）：** 空闲>1小时的 session 恢复后，每轮都误清除 thinking，导致模型"健忘"。4月10日修复。
3. **Verbosity 系统提示（4月16日）：** 减少冗余的 prompt 指令与其他改动叠加后伤害编码质量。4月20日撤回。影响 Sonnet 4.6、Opus 4.6、Opus 4.7。

**所有问题已在 v2.1.116（4月20日）修复。** Anthropic 重置了所有订阅者的用量限额作为补偿。

**改进承诺：** 更多内部员工使用公开版本；每次 system prompt 变更执行完整 per-model evals；新审计工具。

### GitHub Issue #43286 — 社区反馈 🟢

大量用户报告 Opus 4.6 "brain fog"（推理质量显著下降），与 post-mortem 吻合。HuggingFace 论坛量化分析：6,852 个 session 中推理深度下降 67%。

### Claude Code 最新功能动态 🟢

- **Native binary launcher：** 启动更快
- **/tui 全屏渲染 + 移动推送通知**
- **Worktree switching + PreCompact hook blocking**
- **Background plugin monitors**
- **Plan mode：** 规划模式
- **Opus 4.1 + Sonnet 4 subagent 模式：** "Opus for planning, Sonnet for execution"

---

## Part 3: 🔥 生态（OpenClaw + Claude Code 合并）

### 热门项目

| 项目 | 简介 | Stars | 安全 | Sam 匹配度 |
|---|---|---|---|---|
| **13rac1/openclaw-plugin-claude-code** | 在 Podman/Docker 中安全隔离运行 Claude Code | — | 🟢 沙箱隔离 | ⭐⭐⭐ 安全+ACP |
| **noncelogic/openclaw-skill-claude-code** | 异步 Job Manager，断线重连长任务 | — | 🟢 | ⭐⭐⭐ 长任务管理 |
| **win4r/OpenClaw-Skill** | 综合 OpenClaw 安装/配置/排障 skill | 310⭐ | 🟢 | ⭐⭐ 参考价值 |
| **Context7 MCP Server** | 提供版本化文档给 LLM，减少代码幻觉 | — | 🟢 Thoughtworks 推荐 | ⭐⭐⭐ 开发场景 |

### MCP Server 生态趋势 🟢

- MCP 已成为 2025-2026 AI 基础设施标准（"USB-C for AI"）
- ByteByteGo 推荐 12 个 MCP Server（2025）
- Context7 上了 Thoughtworks Technology Radar（Trial 阶段）
- 主要厂商（OpenAI、Google、Microsoft）均已采用 MCP

### 腾讯云进场 🟡

OpenClaw 2026.4.22 内置腾讯云 Provider（hy3-preview），国内用户可直接使用。

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 精选

1. **@that__aum — "40+ Claude Code Tips from an ex-Google Engineer"** 🟢
   - 全面的 Claude Code 使用技巧集合
   - 包括 subagent 并行、context 管理、token 节省

2. **@meta_alchemist — "减少 Claude Code token 消耗的技巧"** 🟢
   - Tip: 用 `/clear` 切换不相关任务
   - Tip: 不要指定并行度，让 Claude Code 自己决定任务分配

3. **@claude_code 官方社区账号精选：**
   - ccusage v15.0.0：实时监控 Claude Code 使用量（`npx ccusage@latest blocks --live`）
   - Claude Code 做视频编辑器（vibe coding 案例）
   - Subagent Deep Dive 长文推荐

4. **@ItakGol — "最便宜部署 OpenClaw 的方式"** 🟢
   - 10 万开发者发现运行 AI agent 不需要大投入

### 实用技巧汇总

- **Opus for planning, Sonnet for execution：** Claude Code 官方支持的分层模型策略
- **`/models add` 热加载：** 不再需要重启 gateway 就能添加新模型
- **TUI 本地嵌入模式：** 不想跑 Gateway 时的轻量选择
- **ccusage 实时监控：** 防止用量超标的利器

---

*调研时间：2026-04-25 12:00 CST | 搜索轮次：7 | 信息来源：Tavily + web_fetch*
