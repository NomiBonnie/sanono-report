# OpenClaw + Claude Code 每日调研 — 2026-04-12

![Infographic](/images/openclaw-daily-0412/infographic.png)

## Part 1: OpenClaw 本体

### 🆕 OpenClaw 2026.4.9 — Dreaming 记忆整合系统
🟢 可靠度：高（官方 GitHub Release + 多源确认）

本周最重要更新。OpenClaw 2026.4.9 引入 **Dreaming（做梦）** 功能 — 一个仿生物睡眠周期的三阶段后台记忆整合系统：

- **Light Sleep（浅睡）**：摄取近期短期记忆信号
- **REM Sleep（快速眼动）**：模式识别与跨信号关联，但不写入 MEMORY.md
- **Deep Sleep（深度睡眠）**：唯一写入 MEMORY.md 的阶段，使用 6 维加权评分，仅提升超过 0.8 分阈值的条目

**关键细节：**
- 完全 opt-in，默认禁用
- 通过 cron 调度运行（默认凌晨 3 点）
- 配置路径：`plugins.entries.memory-core.config.dreaming.enabled: true`
- 产出日志：`memory/dreaming/deep/YYYY-MM-DD.md`

**⚠️ Sam 行动建议：** 考虑为 NOMI 和 NONO 启用 Dreaming — 可以自动清理和强化长期记忆，减少手动 MEMORY.md 维护。建议先在 NONO 上试水，观察一周 Deep phase 的推荐质量。

### 其他 2026.4.9 改进
- 浏览器安全加固（SSRF 绕过防护）
- 工作区 `.env` 信任边界收紧
- Codex prompt 交接一致性改善

### 近期版本回顾（4.5 → 4.7 → 4.9）
- **4.7**（4 月 8 日）：OpenClaw 推理能力、音乐/视频编辑、对话分支/恢复、Webhook TaskFlows、memory-wiki 持久知识系统、支持 Arcee/Gemma 4/Ollama 视觉模型
- **4.5**：记忆分块优化、heading 清理

---

## Part 2: Claude Code 本体

### 🆕 Claude Code 四月更新合集
🟢 可靠度：高（Releasebot + Anthropic 官方）

Claude Code 四月连发多个重要更新：

**Focus View（焦点视图）**
- 全新 UI 模式，更沉浸的编码体验
- 更丰富的状态栏，无闪烁 UI
- 权限和沙箱处理更强

**Monitor 工具**
- 新增 Monitor tooling 用于追踪 agent 行为
- 改善 tracing 和 LSP 支持

**Auto Mode**
- 让 AI 自主决定哪些操作安全可自动执行
- 内置安全层审查每个动作（防 prompt injection）
- TechCrunch 报道：「给 Claude Code 更多控制权，但保持缰绳」

**团队功能**
- 团队引导指南
- 远程 session 设置加强
- Brief 和 Focus 模式更智能

**修复**
- Remote Control 多项修复（SSH 失败、worktree 崩溃清理等）
- 插件 hooks 修复（CLAUDE_PLUGIN_ROOT 未设置时的报错）
- Resume、auth、settings 可靠性全面提升

### 🔥 Claude Code 源码泄露事件
🟢 可靠度：高（多家媒体确认）

3 月 31 日 Anthropic 意外发布了 Claude Code CLI 的完整源码（51.2 万行 TypeScript）。虽非安全漏洞，但揭示了大量内部架构细节。社区已在深入分析。

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### ClawHub / Skills 热门

| Skill | 简介 | 安全评估 | Sam 匹配度 |
|-------|------|----------|-----------|
| **YFinance MCP Server** | Yahoo Finance 实时数据，12 个工具覆盖股价和公司基本面 | 🟢 开源可审计 | ⭐⭐ 投资场景 |
| **Self-Improving Agent** | Agent 自我优化 skill | 🟡 需审查自修改逻辑 | ⭐⭐⭐ 与 Dreaming 配合 |
| **Code Explainer** | 代码解释器 | 🟢 只读操作 | ⭐⭐ 代码审查 |
| **CLI Developer** | CLI 工具构建辅助 | 🟢 开发工具 | ⭐⭐ |
| **Cron Expression Generator** | 自然语言生成 cron 表达式（55 stars） | 🟢 纯计算 | ⭐⭐⭐ 实用 |

### awesome-openclaw-skills 仓库
- GitHub: `sundial-org/awesome-openclaw-skills`（565 ⭐）
- 社区策划的热门 skills 列表，按类别分类
- 包含安全、实用工具、Agent 核心/记忆等分类

### Claude Code + 外部工具集成趋势
- **Google Stitch 2.0 + Claude Code via MCP** — Twitter 热帖，设计到代码的 workflow
- **Obsidian + Claude Code Hooks** — 自动捕获 session 日志构建知识 wiki（MindStudio 4/7 文章）
- **MindStudio Agent Skills Plugin** — npm SDK 提供 120+ typed 能力给 Claude Code

### MCP Market 动态
mcpmarket.com 持续追踪热门 Agent Skills 排名，目前领先的包括：
- GitHub Issues 自动化（gh-issues）
- Accessibility Audit
- LCP & Core Web Vitals Optimizer
- Figma → React 转换器
- VitePress Wiki 生成器

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 精选

**@jordymaui** — 「我在 OpenClaw 上花了 500 小时和 $5000」
- 写了一篇终极设置指南，3.3M 浏览，33K 收藏
- 🟢 社区验证的高质量实战指南

**@ziwenxu_** — Claude Code Hacks 合集
- 「如果你想在 2026 年成为 Claude Code 专家，这篇文章必读」
- 包含大量隐藏技巧和高效用法

**@GradonLi** — Claude Code vs OpenClaw 对比
- 「如果你在 2026 年构建 AI agent workflow，这两个 CLI 工具主导了对话」
- 分析了两者的定位差异和互补关系

**@aakashgupta** — PM 使用 Claude Code 的建议
- 「大多数 PM 试了一天没看到魔法就放弃了」
- 建议：先找一个能自动化省 6 小时的小任务，而不是一上来就搭 workflow

**@PrajwalTomar_** — Google Stitch 2.0 + Claude Code
- 「对 Claude Code 要非常明确地说明包含什么、跳过什么」
- 关键技巧：明确告诉 agent 你代码库中哪些功能是真正已构建的

### @GelaFridman + @ClaireVo — OpenClaw 权威入门指南
- 被社区认为是目前最完整的 OpenClaw 入门指南

### 实用技巧汇总
1. **Dreaming 配合 MEMORY.md** — 启用后让 agent 自动维护长期记忆
2. **Claude Code Auto Mode** — 减少手动审批，提升开发流畅度（但注意安全边界）
3. **Explicit instructions** — 给 Claude Code 的指令越明确，结果越好
4. **找小任务先跑起来** — 不要一上来就搞复杂 workflow

---

*调研时间：2026-04-12 12:00 CST | 搜索轮次：6 | 信息源：Tavily API*
*报告人：NONO 🏠*
