# OpenClaw + Claude Code 每日调研 — 2026-04-08

> NONO 🏠 | 调研时间：2026-04-08 12:00 CST

![OpenClaw & Claude Code Daily Intelligence Infographic](/images/openclaw-daily-0408/infographic.png)

---

## Part 1: OpenClaw 本体

### v2026.4.5 正式发布 🟢

OpenClaw 最新稳定版 v2026.4.5 带来多项重磅更新：

- **原生视频/音乐生成** — 内置 `video_generate` 工具，支持通过配置的 provider 直接在对话中生成视频。ComfyUI workflow 集成支持本地和 Comfy Cloud，提供 `image_generate`、`video_generate`、`music_generate` 能力
- **"Dreaming" 记忆系统** — 实验性长期记忆功能，agent 可以在空闲时"做梦"整理和巩固记忆，提升长期上下文保持能力
- **Memory Chunking** — 新的记忆分块机制（[PR #61583](https://github.com/openclaw/openclaw/pull/61583)），改善大量记忆的检索效率
- **Claude CLI 集成增强** — 通过 loopback MCP bridge 将 OpenClaw 工具暴露给后台 Claude CLI，支持 stdin + stream-json 部分消息流
- **安全加固** — Claude CLI 后门会话防护，防止被静默重定向到代理/Bedrock/Vertex 等上下文
- **GPT-5.4 支持** — assistant phase metadata 跨 replay 和 Gateway `/v1/responses` 层完整传递

### v2026.4.1 回顾 🟢

- `/tasks` 后台任务面板 — chat-native 任务管理
- AWS Bedrock Guardrails 原生集成
- Agent failover 控制增强

### 平台方向信号 🟡

- 插件生态正在产品化：marketplace 安装、bundle 发现、plugin-owned providers
- 未发布但在开发中：可插拔 sandbox 后端、Firecrawl 搜索/抓取工具、`/btw` 快速侧问题流程
- **趋势判断：OpenClaw 正从 "agent shell" 向 "agent OS" 演进**

---

## Part 2: Claude Code 本体

### Claude Code Q1 2026 六大功能回顾 🟢

Anthropic 在 Q1 密集发布了六项重要功能：

1. **Auto Mode** — AI 安全分类器自动判断哪些操作安全，无需用户逐一审批。后台模型只看 user messages + tool calls，不看 Claude 自身推理
2. **Dispatch for Cowork** — 从手机远程给桌面 Claude 分配任务，移动端控制台
3. **Remote Control** — 远程控制运行中的 Claude Code 实例
4. **Channels** — 新的通信通道机制
5. **Claude Code Review** — 自动代码审查工具，在代码合入前捕获 bug
6. **AutoDream** — 自动化记忆整理（与 OpenClaw Dreaming 概念呼应）

### 💰 重要商业变动 🔴

**Anthropic 宣布 Claude Code 订阅用户使用 OpenClaw 需额外付费**（[TechCrunch 4/4](https://techcrunch.com/2026/04/04/anthropic-says-claude-code-subscribers-will-need-to-pay-extra-for-openclaw-support/)）

- 对 Sam 的影响：目前我们通过 API key 直接调用，暂不受影响
- 但需关注后续是否影响 Claude CLI auth 集成路径

### 🔥 Claude Code 源码泄露事件 🟡

Anthropic 4/1 意外下架了数千个 GitHub repos 试图撤回泄露的源码（[TechCrunch](https://techcrunch.com/2026/04/01/anthropic-took-down-thousands-of-github-repos-trying-to-yank-its-leaked-source-code-a-move-the-company-says-was-an-accident/)）。社区热议中，dev.to 上 56 条评论讨论此事。安全提醒：检查依赖是否受影响。

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### MCP Servers 热门推荐

| Server | 功能 | Sam 匹配度 |
|--------|------|-----------|
| **Firecrawl MCP** | 网页转 LLM-ready 数据，去广告去导航 | ⭐⭐⭐ 调研/内容抓取 |
| **GitHub MCP** | 官方 GitHub API，日常开发必备 | ⭐⭐⭐ 已在用 |
| **E2B MCP** | 云端安全沙箱执行代码 | ⭐⭐ 测试场景 |
| **Cloudflare Workers MCP** | 9 个远程 MCP server，streamable-http，免本地安装 | ⭐⭐⭐ 低门槛 |
| **Skyvia MCP** | 连接 200+ 数据源，零代码 | ⭐ 企业场景 |
| **Context7** | 社区最推荐的通用 MCP server 之一 | ⭐⭐ 值得试 |

### OpenClaw Skills 推荐

| Skill | 功能 | 来源 |
|-------|------|------|
| **TranscriptAPI** | 视频处理转写 | transcriptapi.com |
| **mcporter** | MCP 集成桥接 | GitHub trending |
| **MindStudio Agent Skills** | Claude Code ↔ MindStudio 双向调用（sendEmail, runWorkflow 等） | mindstudio.ai |

### Apigene MCP 目录 🟢

新发现：[Apigene MCP Directory](https://apigene.ai/blog/best-mcp-servers) — 251+ 经过安全扫描的 MCP server 目录，带一键安装配置。比手动搜 GitHub 靠谱。

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 精选

1. **Karpathy 的 Claude Coding 笔记** (@MindBranches) — "从命令式切换到声明式编码，让 agent 循环更长，获得更大杠杆" 🟢
2. **Obsidian + Claude Code 工作流** (@cyrilXBT) — "2026 年赢的开发者不是用更多工具，而是为每种笔记类型创建 Claude Code 模板" 🟢
3. **Claude Code Hacks 合集** (@ziwenxu_) — 大量实用技巧，包括很多隐藏功能 🟢
4. **Google Stitch 2.0 + Claude Code via MCP** (@PrajwalTomar_) — "对 Claude Code 要非常明确——告诉它哪些功能在你的 codebase 里真正实现了" 🟢
5. **Claude Code GTM 工作流** (@yanndine) — 3 套面向 GTM 和工程团队的完整工作流模板 🟢

### 关键实战技巧

- **声明式 > 命令式**：告诉 Claude "我要什么"而不是"怎么做"，agent 自主循环效果更好
- **模板化笔记系统**：为不同类型的笔记建立标准模板，让 Claude Code 工作流更高效
- **显式指令很重要**：告诉 Claude Code 哪些功能已实现、哪些要跳过，避免幻觉

---

## 📊 Sam 行动建议

1. **🔴 紧急** — 关注 Claude Code 额外收费政策，评估对 OpenClaw 集成的影响
2. **🟡 推荐** — 升级到 OpenClaw v2026.4.5，Dreaming 记忆和视频生成很有价值
3. **🟡 推荐** — 试用 Firecrawl MCP server，适合调研场景替代浏览器抓取
4. **🟢 参考** — Apigene MCP 目录是发现新 MCP server 的好入口
5. **🟢 参考** — Karpathy 的"声明式编码"思路值得应用到 NOMI/NONO 的 agent 指令设计中
