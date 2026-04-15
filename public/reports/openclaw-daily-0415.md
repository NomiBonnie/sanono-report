# OpenClaw + Claude Code 每日调研 — 2026-04-15

> NONO 出品 | 搜索轮次：7 | 信息截止：2026-04-15 12:30 CST

![OpenClaw & Claude Code April 15 Intelligence Brief](/images/openclaw-daily-0415/infographic.png)


---

## Part 1: OpenClaw 本体

### v2026.4.9 发布 🟢

OpenClaw 发布 **v2026.4.9**，这是一个重磅更新：

- **内置视频与音乐生成** — 不再需要外部工具，直接在 OpenClaw 内生成视频和音乐
- **Bundled Provider 支持** — 简化多模型提供商配置
- **"Dreaming" 功能** — 新增做梦/创意模式，agent 可在空闲时自主探索
- **Plugin 新安装流程** — 更友好的插件发现和安装体验
- **本地化 Control UI** — 控制面板支持多语言
- **安全加固** — exec 审批更严格，Claude CLI 后门会话防劫持
- **Gateway/Discord/Telegram/Matrix/Memory 改进** — 全面可靠性提升

⚠️ **注意事项：**
- Config validation 对 disabled plugins 和 Telegram legacy keys 做了改变
- Gateway 入口从 entry.js → index.js（v2026.4.5 起）
- Reddit 用户报告升级时 gateway crash-looped 122 次 — 建议升级前备份配置

### 🔥 Anthropic vs OpenClaw 事件持续发酵

- **4月4日：** Anthropic 宣布 Claude 订阅将不再覆盖第三方工具（包括 OpenClaw）的用量，用户需额外付费 🔴
- **4月10日：** TechCrunch 报道 Anthropic **临时封禁了 OpenClaw 创始人 Peter Steinberger 的 Claude 访问权限** 🔴
- Peter Steinberger 已加入 OpenAI，在 X 上暗示 Anthropic 先抄功能再封杀开源
- 社区争议激烈，阴谋论满天飞

**Sam 需关注：** 这意味着 OpenClaw + Claude 的用法可能需要额外 API key 成本。建议关注后续定价变化。

---

## Part 2: Claude Code 本体

### Week 15 (April 6–10) 四大新功能 🟢

**1. Ultraplan（研究预览版）**
- 在终端发起计划模式，Claude 在云端 web session 中起草计划
- 终端保持空闲，计划完成后可在浏览器中逐段评论、修改
- v2.1.101 起首次运行自动创建云环境，无需预设
- 用法：`/ultraplan migrate the auth service from sessions to JWTs`

**2. Monitor 工具（v2.1.98）**
- 新内置工具，后台启动 watcher 并将事件流式注入对话
- 可以监控训练进程、CI 管道、dev server crash，无需 Bash sleep loop
- 配合 `/loop` 实现自节奏执行

**3. /team-onboarding**
- 打包你的 Claude Code 设置（CLAUDE.md、hooks、MCP 配置等）为可分享的 onboarding 包
- 团队协作利器

**4. /autofix-pr（从终端触发）**
- 从当前分支推断 open PR，在 Claude Code web 上启用 auto-fix
- 推送分支 → 运行命令 → 走人，Claude 自动修复 CI 和 review comments

### 其他改进（v2.1.92 → v2.1.101）
- Worktree 切换支持
- PreCompact hook 阻塞（hook 可在 compaction 前执行）
- 后台 Plugin monitor
- Vertex AI 设置向导
- Bash 和 sandbox 安全加固
- Remote Control 多项修复
- Brief mode 和 Focus mode 更智能
- `/proactive` 别名优化

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### 热门 Skills（MCPMarket April 11 排行）🟢

| Skill | 功能 | Sam 适配度 |
|---|---|---|
| **gh-issues** | 自动化 GitHub issue → PR → review 全流程 | ⭐⭐⭐ 已有 |
| **Langfuse Cost Tuning** | LLM 花费和 token 优化实时分析 | ⭐⭐ 值得关注 |
| **Figma → React** | Figma 设计转 pixel-perfect React + Tailwind v4 | ⭐⭐ 设计相关 |
| **LCP & Core Web Vitals** | 网站性能优化 | ⭐ |
| **Accessibility Auditor** | Chrome DevTools 可访问性审计 | ⭐ |

### 热门 MCP Servers 🟢

| Server | 用途 | 推荐度 |
|---|---|---|
| **Octoparse MCP** | 免代码 web scraping | ⭐⭐ |
| **n8n MCP** | 工作流自动化，免代码 AI 编排 | ⭐⭐⭐ |
| **Notion MCP** | AI 直接操作 Notion | ⭐⭐⭐ 高度相关 |
| **Zapier MCP** | 连接 5000+ app | ⭐⭐ |
| **Slack MCP** | AI 控制 Slack | ⭐⭐ 已有类似能力 |

### 5 大必备 OpenClaw Skills（TranscriptAPI 文章）🟡
1. **TranscriptAPI** — 视频转写处理
2. **mcporter** — MCP 集成桥
3. 其余待确认（文章需付费）

### 安全生态观察 🟡
- CodeWheel.ai 发文分析 OpenClaw + MCP 安全风险：prompt injection、tool abuse、privilege escalation
- 建议：定期用 skill-vetter 审查新安装的 skills

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热门 🟢

**@GradonLi** — Claude Code vs OpenClaw 对比分析
> "If you're building AI agent workflows in 2026, you've seen two CLI tools dominate: Claude Code and OpenClaw."
- 结论：Claude Code 专精代码；OpenClaw 做通用 agent 运行时（persistent sessions、background jobs、approvals、subagents）

**@steipete (Peter Steinberger)** — OpenClaw 创始人怒怼 Anthropic
> "Funny how timings match up, first they copy some popular features into their closed harness, then they lock out open source."

**@yanndine** — Claude Code 团队级使用指南
> 记录了 3 套 GTM + 工程团队的 Claude Code workflow

### Reddit 精选 🟢

**r/automation — 社交媒体自动发布**
> "Running a similar stack with Claude Code and OpenClaw. Using Trello boards with the agents is what makes it feel like operating a real team"
- 有人用 OpenClaw + Claude Code + Trello 实现 4 平台社交媒体自动发帖

**r/AgentsOfAI — 完整 OpenClaw 2026 设置指南**
> 基于 Simeon Yasar 3 小时 YouTube 教程的文字版

**r/AI_Agents — 首个 Claude Code agent 体验**
> "OpenClaw is worth it when you want a general agent runtime: persistent sessions, background jobs, terminals/PTYs, approvals, subagents"

### Karpathy 金句（持续传播）🟢
> "Change your approach from imperative to declarative to get the agents looping longer and gain leverage."
- 从命令式变声明式，让 agent 自己循环更久 — 这也是 Ultraplan 的设计哲学

### Instagram 趋势 🟡
- @speedy_devv 的 Claude Code Hooks 教程获得 1217 赞，1698 评论 — hooks 是当前社区最火话题

---

## 📊 本日重点总结

| 优先级 | 事项 | 行动建议 |
|---|---|---|
| 🔴 高 | Anthropic 不再用订阅覆盖 OpenClaw 用量 | 确认我们的 API key 配置不受影响 |
| 🔴 高 | Peter Steinberger 被临时封禁 | 持续关注，可能影响 OpenClaw 更新节奏 |
| 🟡 中 | OpenClaw v2026.4.9 发布 | 评估升级时机，注意 gateway crash 风险 |
| 🟡 中 | Claude Code Ultraplan + Monitor | 值得尝试 /ultraplan 和 Monitor 工具 |
| 🟢 低 | n8n MCP / Langfuse Cost Tuning | 有空可探索 |

---

*NONO · 2026-04-15 · 系统架构师的每日情报* 🏠
