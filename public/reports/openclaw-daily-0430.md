# OpenClaw + Claude Code 每日调研 — 2026-04-30

![Infographic](/images/openclaw-daily-0430/infographic.png)

## Part 1: OpenClaw 本体

### OpenClaw 2026.4.26（发布于 Apr 28）🟢

**核心更新：语音 & Talk 全面升级**
- **Google Live 浏览器 Talk 会话**：新增通用浏览器 realtime transport 合约 + Google Live 支持，Gateway 中继后端 realtime voice 插件
- **TTS 全面重构**（从 4.25 延续）：`/tts latest` 朗读、chat 级 auto-TTS 开关、per-agent 声音覆盖、6 个新 provider（Azure Speech / 小米 / Local CLI / Inworld / Volcengine / ElevenLabs v3）
- **Control UI 改进**：raw config pending-changes diff 面板（JSON5 解析 + 敏感值脱敏）；quick settings dashboard 响应式网格优化

**插件 & Provider**
- **Cerebras** 作为内置插件上线（onboarding + 静态模型目录 + manifest）
- 插件配置迁移到 runtime snapshot + transactional mutation，弃用直接 load/write
- `OPENCLAW_PLUGIN_STAGE_DIR` 支持分层 runtime-dependency roots（只读预装 + 可写安装）
- pre-runtime model-id normalization 移入插件 manifest，core 不再承载 bundled-provider 路由表

**Memory / 嵌入**
- 新增 `memorySearch.inputType` / `queryInputType` / `documentInputType` 配置，支持非对称嵌入
- Ollama 嵌入模型（nomic-embed-text / qwen3-embedding / mxbai-embed-large）支持检索查询前缀

**迁移工具**
- `openclaw migrate`：支持从 Claude Code / Claude Desktop / Hermes 导入配置、MCP servers、skills、credentials
- 自带 plan / dry-run / JSON / pre-migration backup

**Agent**
- compaction 新增 `maxActiveTranscriptBytes` 预检触发（transcript rotation 机制）
- `sessions_spawn` 修复 bare model alias 解析

**Matrix E2EE**：一键 Matrix 加密设置 + recovery bootstrap + verification 状态

### 与 Sam 的关联度
- TTS 升级对 NOMI/NONO 语音交互有直接价值（per-agent 声音）⭐
- Claude 迁移工具可帮助统一 Sam 的 Claude Code 和 OpenClaw 配置
- Cerebras provider 对高速推理场景有用

---

## Part 2: Claude Code 本体

### Week 17（Apr 20–24）— v2.1.114 → v2.1.119 🟢

**1. `/ultrareview` 公开研究预览** ⭐⭐
- 云端 bug 猎手 agent 集群自动审查你的分支/PR
- 发现的问题自动回到 CLI 或 Desktop
- 命令：`/ultrareview` 或 `/ultrareview 1234`（指定 PR）
- 适合在合并 auth/数据迁移等关键变更前使用

**2. Session Recap**
- 离开终端再回来时自动显示一行摘要（发生了什么）
- `/recap` 手动触发，`/config` 可关闭
- 多 session 并行工作时很有用

**3. Custom Themes（v2.1.118）**
- `/theme` 打开主题选择器，可自建颜色主题
- JSON 文件存 `~/.claude/themes/`，插件也可附带主题

**4. Claude Code Web 重新设计**
- 新 sessions sidebar、drag-and-drop layout、刷新后的 routines 视图
- 性能和可靠性优化

### Week 16（Apr 13–17）— v2.1.105 → v2.1.113 🟢

- **Effort levels 模型配置**：low / medium / high / xhigh / max
- **Routines**：Web 端支持 schedule / GitHub event / API 触发的自动化
- **Auto mode** 对 Max 订阅用户 + Opus 4.7 开放（不再需要 `--enable-auto-mode`）
- **Session recap**（首次引入）
- `/usage` 命令显示额度使用明细

### Claude Opus 4.7 🟢
- SWE-Bench Pro +10.9、OSWorld-Verified +5.3、Graphwalks +19.9
- xhigh 成为 Claude Code 默认 effort level
- **注意**：MRCR at 1M tokens 从 78.3% 降至 32.2%（长上下文召回能力下降）

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### MCP Servers 值得关注

| Server | 功能 | 适合 Sam？ |
|--------|------|-----------|
| **LLM Wiki Kit** | LLM-agent 驱动的知识库，自增量进化 | ⭐ 适合研究知识沉淀 |
| **macOS Automation MCP** | 自动化 macOS 应用，比截图方式快 | ⭐⭐ 直接相关 |
| **Logseq MCP** | Logseq ↔ CLI，Unix-composable | 中等 |
| **Modbus TCP MCP** | PLC 硬件寄存器 → LLM 工具 | 不相关 |
| **n8n MCP** | AI agent 触发 n8n workflow | ⭐ 自动化场景 |

### MCP 生态趋势 🟡
- 社区有人提出"MCP 是否还有必要"的讨论（Nate Meyvis）：CLI 工具 + Skills 能替代大多数 MCP 场景
- 安全问题加剧：r/cybersecurity 出现 MCP 实际 CVE 模式和利用链分析
- **建议**：继续用 Skills 优先，MCP 仅在需要实时桥接时使用

### Multi-Agent Coding Stack 趋势（Twitter 热帖）🟡
- @eng_khairallah1（740 views, Apr 28）：「How to Build a Multi-Agent Coding Stack in 2026」完整课程
- 核心观点：不要争论哪个 agent 最好，而是组合使用

### Claude Code Context 管理技巧（Twitter）🟡
- @cryptogoos：Claude Code session "dumbing down" 问题，团队早期 2026 报告 conventions 遗忘、错误重复
- 解法：SECRET 方式给 Claude Code 更好的 context（帖子未展开，值得追踪）

---

## Part 4: 🎮 社区玩法 / 小技巧

### 1. 50 个 OpenClaw Tips（@aiedge_）
- 硬件优先级：**RAM > CPU**
- 完整可视化指南，适合新手到进阶

### 2. OpenClaw vs Codex vs Claude Code 定位（@aakashgupta）
- 观点：OpenClaw 的优势是业务上下文（Codex 和 Claude Code 上下文太少）
- 适合 Sam：用 OpenClaw 做全局编排，Claude Code 做精准编码

### 3. Claude Code 实战 18 功能指南（Cash & Cache）
- 按 6 大工作类型分组，每个功能 60 秒上手
- 涵盖：Conversation / Claude Code / Cowork / Routines / Auto mode

### 4. Claude Code 迁移到 OpenClaw
- OpenClaw 4.26 新增 Claude Code 配置导入器
- 一键迁移：instructions / MCP servers / skills / command prompts
- **Sam 可以考虑整合**

---

*报告生成时间：2026-04-30 12:00 CST*
*搜索轮数：6 轮（Tavily）+ 2 轮（web_fetch）*
*可靠度标注：🟢 官方/一手源 | 🟡 社区/二手源 | 🔴 未验证*
