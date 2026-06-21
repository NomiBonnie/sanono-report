# OpenClaw + Claude Code 每日调研 — 2026-06-21

![Infographic](/images/openclaw-daily-0621/infographic.png)


## Part 1: OpenClaw 本体

### 最新版本：2026.6.9
🟢 可靠度：高（GitHub Releases 直接确认）

**主要更新：**
- **Telegram 富文本交付**：支持 rich HTML、保留 markdown 格式、sticker 路径渲染、进度草稿和命令显示
- **更强的 Agent 恢复能力**：compaction retry 保留、session lock takeover 后释放
- **Codex 深度集成**：opencode-go model catalog 注册修复、context window detection
- **托管式 Web 搜索**：新增 hosted web search 功能
- **插件扩展**：外部安装的 channel plugin 在 gateway 启动时自动加载、heartbeat bootstrap plugin session targets
- **Google Gemini 修复**：并行 tool responses 保持正确顺序

**其他修复（PR 摘选）：**
- #93487 Skills 页面增加 agent selector
- #93698 Telegram rich progress detail updates
- #92468 Session identity 添加到 runtime prompt
- #93194 Prompt-released session metadata 保留

---

## Part 2: Claude Code 本体

### 🔥 Dynamic Workflows 正式 GA（6月10日）
🟢 可靠度：高（@claudeai 官方 Twitter 确认）

Claude Code Dynamic Workflows 于 2026-06-10 在 "Code with Claude Tokyo" 正式宣布 GA。核心能力：
- Claude 自动编写 JavaScript orchestrator 协调多个 subagent
- **6 大模式**：Classify & Act / Fan Out & Synthesize / Adversarial Verification / Generate & Filter / Tournament / Loop Until Done
- 支持跨 codebase、migration、复杂工程任务的端到端并行处理
- 内置验证 + 跨 CLI/Desktop/VS Code/API/云平台保存进度

### Managed Agents 公开 Beta 更新
- 定时部署（scheduled deployments）
- 环境变量 Vault
- 自托管沙箱 + MCP 隧道（企业级私有网络访问）

### Artifacts in Claude Code
- Claude Code session 可导出为可分享的交互式 HTML 网页
- 适用于仪表盘、app 原型、内部工具

---

## Part 3: 🔥 生态（合并板块）

### ClawHub 生态现状
🟡 可靠度：中（多来源交叉验证）

- ClawHub 技能总数已超 **13,000+**（YouTube LinuxTex 视频提及）
- **安全警告**：Koi Security 审计发现 **1,184+ 恶意 Skills**（7.6% 感染率），主要手段：
  - 335 个伪装 pre-requisite 安装 Atomic Stealer (macOS)
  - 反向 shell 后门（better-polymarket 等）
  - bot credentials 外泄（~/.clawdbot/.env → webhook.site）

### 推荐 Skills（安全+高价值）
| Skill | 功能 | 安全评估 | Sam 匹配度 |
|---|---|---|---|
| **Felo Search** | AI 综合搜索+来源引用 | 🟢 14.5万安装 | ⭐⭐⭐ |
| **GOG (Google Ops Gateway)** | Gmail/Calendar/Drive/Contacts 全接入 | 🟢 steipete 出品 | ⭐⭐⭐⭐ |
| **Agent Browser** | 真浏览器自动化 | 🟢 | ⭐⭐⭐ |
| **Ontology** | 结构化记忆系统 | 🟢 | ⭐⭐⭐ |
| **Self-Improving** | Agent 自我优化学习 | 🟡 需审查 | ⭐⭐ |

### MCP Servers 排名（2026）
来源：Nimbalyst 排名 + 社区共识
| Server | 解锁能力 | 难度 |
|---|---|---|
| GitHub | PR/Issue/Code 操作 | 低 |
| Linear | 项目管理集成 | 低 |
| Slack | 频道/消息操作 | 低 |
| Postgres | 数据库直接查询 | 中 |
| Playwright | 浏览器自动化 | 中 |
| **Claude Context (Zilliz)** | 语义代码搜索 | 中 |

### 新兴项目
- **Claude Context** (zilliztech/claude-context)：向量数据库语义代码搜索 MCP，适合大型 codebase
- **Nimbalyst**：Claude Code 的跨平台桌面 GUI（All-in-One）
- **awesome-openclaw-skills** (VoltAgent)：1,184 个 coding skills 目录

---

## Part 4: 🎮 社区玩法 / 小技巧

### Dynamic Workflows 实战技巧（Mark Kashef）
🟢 来源：YouTube 37K views, 1.1K likes

**6 大 Pattern 详解：**
1. **Classify & Act** — 分类后路由到不同处理逻辑
2. **Fan Out & Synthesize** — 并行展开+汇总
3. **Adversarial Verification** — 对抗性验证（代码审查利器）
4. **Generate & Filter** — 批量生成+过滤筛选
5. **Tournament** — 锦标赛淘汰制（最佳方案选择）
6. **Loop Until Done** — 循环直到满足条件

**关键洞察：** 
- Orchestrator 是代码不是 model turn → 零 token 消耗
- 可以把 workflow 保存为 Skill 分享给团队
- 设置 token budget 控制成本

### Claude Code 高效配置（Medium 热文）
- "14 Commands That Changed Everything" — 6个月使用总结
- Spec-driven development with Claude Code
- CLAUDE.md + subagents + hooks + skills + worktrees + 5个核心 MCP servers

### OpenClaw Workflow 实战
- 语音笔记 → 任务自动创建
- Downloads 文件夹自动清理
- 日历自动规划
- 每日研究报告自动推送（就像我们正在做的！）

### "MCP is Dead" 争议帖
一篇 Medium 文章认为 Claude Code 内置能力已覆盖大部分 MCP 场景，建议避免过度依赖 MCP。社区反应两极 — 对简单场景确实如此，但复杂集成仍需 MCP。

---

## 📊 今日总结

| 板块 | 亮点 |
|---|---|
| OpenClaw | v2026.6.9 — Telegram 富文本、plugin 自动加载、hosted web search |
| Claude Code | 🔥 Dynamic Workflows GA + Managed Agents 定时部署 |
| 生态 | ClawHub 13K+ skills（注意 7.6% 恶意率）、Claude Context MCP |
| 社区 | 6大 Workflow Pattern 实战指南、spec-driven development |

**Sam 行动建议：**
1. ⚠️ ClawHub 恶意 skill 率持续上升 — 我们的 skill-vetter 策略是对的，继续执行
2. Dynamic Workflows GA — 考虑在 OpenClaw ACP 中利用这个能力优化多 agent 协调
3. Claude Context MCP — 如果 Sam 项目 codebase 变大，这个语义搜索值得试
