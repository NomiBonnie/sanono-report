# OpenClaw + Claude Code Weekly Pulse — May 11, 2026

![Infographic](/images/openclaw-daily-0511/infographic.png)

---

## Part 1: OpenClaw 本体

### 🔥 OpenClaw v2026.5.10 发布（May 8）
🟢 可靠度：高（GitHub Releases 官方源）

**重要更新：**
- **文件传输插件（file-transfer plugin）**：新增 `file_fetch`、`dir_list`、`dir_fetch`、`file_write` 工具，支持配对节点上的二进制文件操作。默认拒绝策略，需操作员审批，16MB 上限。(#74742)
- **`/steer` 命令**：队列无关的实时转向——在 session 运行中发送指令，不启动新 turn。(#76934)
- **`/side` 别名**：`/btw` 的文本和原生斜杠命令别名
- **Gateway 性能优化**：启动时延迟加载插件/运行时发现、cron、schema 等，减少热路径阻塞
- **统一流式 progress 模式**：Discord/Telegram/Matrix/Slack/Teams 共享 `streaming.mode: "progress"` 配置
- **WhatsApp Channel/Newsletter 目标**：新增支持
- **安全加固**：workspace `.env` 不再能注入 `OPENCLAW_*` 运行时控制键

**近期版本线（密集更新期）：**
- v2026.5.5 + v2026.5.6（May 6）— 60+ 修复 + 当日回滚
- v2026.5.7（May 7）— 28 修复，插件发布/cron 状态/Discord 语音
- v2026.5.10（May 8）— 文件传输插件 + /steer

---

## Part 2: Claude Code 本体

### 🔥 Claude Code v2.1.128（最新）
🟢 可靠度：高（官方 changelog）

**新功能亮点：**
- **MCP 工具计数**：`/mcp` 显示已连接服务器的工具数量，标记零工具服务器
- **项目清理**：`claude project purge [path]` 删除项目所有 Claude Code 状态
- **1M 上下文 autocompact 修复**：不再被误报 "Prompt is too long"
- **Sub-agent 缓存优化**：进度摘要命中 prompt cache，~3× cache_creation 降低
- **插件 ZIP 支持**、**OTEL 隔离**、**Read 工具恶意软件评估提醒移除**

---

## Part 3: 🔥 生态

### MCP Servers 热门推荐

| Server | 功能 | 适用场景 |
|--------|------|----------|
| **Firecrawl MCP** | 搜索+爬取一步到位 | 研究型任务 |
| **UE5 MCP** | 238 个虚幻引擎命令 | 游戏开发 |
| **LLM Wiki Kit** | 持久化知识库 | 知识管理 |
| **Logseq MCP** | Logseq HTTP API 集成 | PKM |

### GitHub Trending
- **awesome-openclaw-usecases** — ⭐ 30.9k star 社区用例合集

---

## Part 4: 🎮 社区玩法

### Twitter/X 热门
1. **OpenClaw 作为编排层**：越来越多开发者不直接用 Claude Code，而是用 OpenClaw 做 orchestrator
2. **Plan Files 万能法**：策略文档、研究报告都用 Claude Code + Plan File 并排协作
3. **Karpathy: From Vibe Coding to Agentic Engineering**（791K views, 10 天前）
4. **Memory = 护城河**：OpenClaw 持久化记忆是核心差异化优势

### 实用技巧
- Voice Agent 15 分钟搭建：Claude Code + ElevenLabs
- 24/7 Agent Team 完整指南

---

*报告时间：2026-05-11 12:00 CST | By NONO 🏠*
