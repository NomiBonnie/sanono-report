![OpenClaw Daily Intel Infographic](/images/openclaw-daily-0719/infographic.png)

# OpenClaw + Claude Code 每日调研 — 2026-07-19

## Part 1: OpenClaw 本体

### 🟢 v2026.7.1 正式发布（2026-07-14 Stable）

OpenClaw v2026.7.1 从 Beta Stream 转为 Stable，这是一次**大版本更新**，核心亮点：

1. **Control UI 全面重构** — 会话侧边栏重新设计，支持多面板可拖拽布局、会话 pin/分组/重命名/fork/归档、实时 Tasks 视图。用量页面展示每个 provider/model/agent/channel 的花费占比，支持 7/30/90 天图表。
2. **Onboarding 优化** — 从安装到首次对话流程简化，移动端配对可直接从 Control UI 扫码。
3. **模型支持扩展** — 新增 GPT-5.6 兼容、Tencent Hy3、Meta Muse Spark 1.1。
4. **官方 App 大更新** — iOS/Android/macOS 全面更新：设置、导航、聊天、语音、Apple Watch、权限、本地化、文件管理、定时任务、原生 session 控制、Gateway 恢复。
5. **Codex/编码 Agent 增强** — macOS paired-node 终端支持 Codex/Claude 双向终端恢复；Control UI 可直接在 CLI 中打开 Codex/Claude Code sessions。
6. **ClickClack 集成** — 新增 ClickClack 引导设置（`openclaw onboard` 或 `openclaw channels add clickclack`）。
7. **Crash Loop 自动停止修复** — Gateway crash loop 现在会自动停止等待修复，而非无限重启。
8. **远程浏览器控制 & 工作区终端** — 调度任务、远程浏览器控制、工作区终端均有改进。

**🟢 可靠度：高** — 官方 Release Notes + Reddit 社区确认 + Facebook 用户实测反馈

### 近期修复（Beta 6 → Stable）
- 修复 compaction 期间 transcript rotation 保留 re-sent user prompt
- 修复 session takeover 后 retained locks 释放
- Skill Workshop proposals 作用域限定到选中 agent
- Gemini parallel tool responses 保持顺序
- WebChat visible messages 跨 session 切换保留

---

## Part 2: Claude Code 本体

### 🟢 Claude Code 最新更新：/fork → 后台 Session 化

Claude Code 最新版本引入多项重要改进：

1. **`/fork` 变为后台 Session** — `/fork` 不再启动 in-session subagent，而是将对话复制到新的后台 session（在 `claude agents` 中独立显示）。原来的 in-session 功能移至 `/subtask`。
2. **MCP 工具自动后台化** — MCP tool 调用超过 2 分钟自动移入后台，保持 session 可用。可通过 `CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS` 配置阈值。
3. **`/resume` 增强** — 在 agent 视图中输入 `/resume` 打开历史 session 选择器，包括已删除的 session，可恢复为后台 session。
4. **`claude auto-mode reset`** — 新命令恢复默认 auto-mode 配置。
5. **WebSearch/Subagent/Bash 安全加固** — 更强的执行安全防护。

**🟢 可靠度：高** — releasebot.io 官方跟踪

### 🟡 Claude Tag（Slack 团队版 Claude Code）

Anthropic 于 2026-06-23 推出 **Claude Tag**，面向 Enterprise/Team 客户：
- 在 Slack channel 中以 `@Claude` 共享一个 AI 实例，**多人协作**
- 持久记忆、异步工作、ambient 模式（主动监控 channel）
- 运行 Claude Opus 4.8
- 替代旧版 "Claude in Slack" 应用，30 天迁移期
- Anthropic 自己的产品团队 65% 代码来自 Claude Tag

**🟢 可靠度：高** — Reuters、TechCrunch、Anthropic 官方确认

### 🟡 Claude 4 系列稳定性问题

Reddit 社区报告（6/29-7/13）：
- Anthropic 状态页 5 次部分宕机（7/7-7/12），影响 Opus 4 & Sonnet 4
- 付费用户配额大幅缩减（部分 Max/Pro 用户 Opus 仅 1-4 条消息）
- 社区情绪约 80% 负面
- 变通方案：切 Sonnet、debug mode、Cloudflare AI Gateway 代理

**🟢 可靠度：高** — Reddit 社区 + status.anthropic.com 多方验证

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### MCP 协议重大更新：2026-07-28 Release Candidate

**MCP 史上最大修订**，7/28 正式发布，核心变化：

1. **无状态核心** — 取消 handshake 和 `Mcp-Session-Id`，任何请求可命中任何 server 实例。大幅简化部署和扩展。
2. **Extensions 框架** — 扩展使用 reverse-DNS ID 标识，独立版本管理，支持第三方维护者。
3. **MCP Apps** — Server 可提供交互式 HTML 界面，host 在沙箱 iframe 中渲染。
4. **Tasks 扩展** — `tools/call` 返回 task handle，客户端通过 `tasks/get`、`tasks/update`、`tasks/cancel` 驱动长时间任务。
5. **Auth 增强** — Dynamic Client Registration 支持 `application_type` 声明，解决桌面/CLI 客户端 localhost redirect 被拒问题。
6. **正式弃用策略** — 3 个核心功能进入弃用周期。

**🟢 可靠度：高** — 官方博客 + MCP 维护者 Twitter 确认

### ClawHub 生态安全警告

- ClawHub 已有 **10,700+** skills，但 **820+（7.6%）被标记为恶意**
- Palo Alto Unit 42 发现 5 个未被拦截的恶意 skill（2-5 月）
- ClawHub 已集成 VirusTotal + ClawScan 扫描
- OpenClaw 与 NVIDIA 合作对所有 skill 运行分析工具

**🟢 可靠度：高** — Palo Alto Unit 42 安全报告

### 热门 MCP Server（2026 年度）

| Server | 亮点 | Sam 匹配度 |
|--------|------|-----------|
| **Playwright MCP** | #1 最热门，浏览器自动化 E2E 测试 | ⭐⭐⭐ |
| **Notion MCP** | Notion API 集成 | ⭐⭐⭐⭐ |
| **Slack MCP** | 支持 Dynamic Client Registration | ⭐⭐⭐ |
| **GitHub MCP** | PR/Issue/CI 集成 | ⭐⭐⭐⭐ |
| **HubSpot MCP** | CRM 集成 | ⭐ |

### 热门 OpenClaw Skills（社区推荐 Top 5）

1. **telegram-notify** — Telegram 通知，#1 最常用 ⭐⭐⭐⭐⭐（Sam 已在用）
2. **browser-control** — 浏览器控制 ⭐⭐⭐⭐
3. **file-manager** — 文件管理 ⭐⭐⭐
4. **github** — GitHub 集成 ⭐⭐⭐⭐（Sam 已在用）
5. **notion** — Notion 集成 ⭐⭐⭐⭐（Sam 已在用）

---

## Part 4: 🎮 社区玩法 / 小技巧

### Claude Code 多 Agent 工作流

GitHub 上 `ykdojo/claude-code-tips`（40+ 技巧）持续更新：
- 多 Claude 实例并行工作 + 语音输入
- 自定义 status line 脚本监控用量
- 用 `Tab` + `Shift+Tab` 刷新用量面板

### Claude Routines（自动化工作流）

- **Local Routines** — 本地定时任务，零代码，5 分钟搭建
- **Remote Routines** — GitHub 仓库支持，3 种触发器：定时/API/GitHub Events
- 实战案例：Gmail 早间分拣 + Slack 集成

### Claude Code Skills 生态

- Skills 是文件夹级指令包，按需加载
- 全局共享目录 `~/.claude/skills/` 或 repo 级 `.claude/skills/`
- sym-linked `thoughts/` 目录跨 repo 共享 context（HumanLayer 推荐模式）

### Figma MCP + Claude Code 设计工作流

- 设计师用 Claude Code + Figma MCP + Code Connect UI
- 线框图 → 生产代码原型，保持设计系统一致性
- 适合产品设计场景

### OpenClaw GitHub Stars 里程碑

OpenClaw 成为首个同时打破 GitHub star 增速和总量记录的实际运行软件项目，超越 React。（🟢 Peter Steinberger 推文确认）

---

*调研完成于 2026-07-19 12:00 CST*
*搜索轮次：8 轮（Tavily API）*
*下次调研：2026-07-20*
