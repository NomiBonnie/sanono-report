# OpenClaw + Claude Code 每日调研 — 2026-05-19

## Part 1: OpenClaw 本体

### ⚠️ 我们落后了：本地 2026.4.15 → 最新 2026.5.12

**v2026.5.12（约 5 月 15 日发布）** 🟢
- 安装优化：只包含实际使用的集成（WhatsApp、Slack 等），减少包体积
- 延续 5.2 的插件稳定性改进

**v2026.5.2（5 月 3 日发布）** 🟢
- 🧠 xAI Grok 4.3 支持
- 🔧 插件安装和更新更稳定
- ⚡ Gateway 和 agent 热路径性能优化
- 💬 Discord、Slack、Telegram、WhatsApp 修复
- 🎙️ TTS、Realtime、web search、voice-call 打磨

**最新 changelog 亮点（releasebot）：**
- `security.audit.suppressions` — 安全审计可抑制已知发现
- xAI Grok OAuth 登录（SuperGrok 订阅者无需 XAI_API_KEY）
- Slack assistant thread lifecycle 支持
- `openclaw cron run --wait` 支持超时和轮询控制
- 设置向导本地化：英文、简中、繁中
- Skill 缓存优化（减少重复 snapshot 重建）
- Group chat 未 mention 消息可作为静默上下文
- Mac app 远程设置可预配置（支持 LAN/Tailnet URL）
- 音乐生成 provider：fal + OpenRouter（MiniMax/ACE/Stable Audio）
- QA-Lab 新增 personal-agent 场景包
- 控制面板显示 provider 配额使用量

**⚠️ 建议：尽快升级到 2026.5.12。从 4.15 到 5.12 跨了多个版本。**

---

## Part 2: Claude Code 本体

### 🔥 v2.1.144 — 今天（5/19）刚发布！

**新功能：**
- `/resume` 支持后台 session — `claude --bg` 启动的会话可恢复
- 后台 subagent 完成通知显示耗时（如 "Agent completed · 3h 2m 5s"）
- `/plugin` 浏览面板显示插件最后更新时间
- `/model` 现在只改当前 session 模型；按 `d` 设默认值
- "extra usage" 改名 "usage credits"，`/extra-usage` → `/usage-credits`

**重要修复：**
- 启动时 `api.anthropic.com` 不可达会卡住最多 75s → 现在 15s 超时
- 终端显示腐蚀问题修复（长 session 出现乱码）
- VS Code 分屏拖拽后终端输出乱码 → 自动修复
- macOS 后台 session 在 Full Disk Access 保护目录下崩溃 → 修复
- MCP servers 分页 `tools/list` 只返回第一页 → 修复
- Bedrock/Vertex 用户无法选 "Opus (1M context)" → 修复
- Skill tool 在 headless 模式下权限错误 → 修复

**近期版本线（v2.1.128-2.1.144）：**
- v2.1.142: `claude agents` 新 flags，fast mode 默认 Opus 4.7
- 插件支持 .zip 和 URL 加载（5 月 4-8 日）
- Agent view、`/goal` 命令
- Claude Managed Agents 新能力：dreaming 等
- Claude Opus 4.7 成为 Max/Team 默认模型（4 月中）

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### 热门话题

**1. Claude Code 拒绝含 OpenClaw 的提交** 🟡
- HN 1,348+ upvotes，720 comments
- 开发者报告 Claude Code 对含 "OpenClaw" 引用的代码请求拒绝或加价
- Anthropic 尚未官方回应
- **影响评估：** 对我们无直接影响（我们用 OpenClaw 内置 ACP，不直接 commit OpenClaw 代码到 Claude Code）

**2. "OpenClaw 实现了 Apple Intelligence 的承诺"** 🟡
- 社区热门分析，认为 OpenClaw 作为本地 AI agent 比 Apple Intelligence 更实用
- 契合 Sam 作为前 Apple 用户的视角

### MCP Servers 推荐

| Server | 用途 | Sam 匹配度 |
|---|---|---|
| **Context7 MCP** | 文档/知识库查询 | ⭐⭐⭐ 适合技术调研 |
| **Firecrawl MCP** | Web scraping + 搜索一体化 | ⭐⭐ 已有 Tavily |
| **Semgrep MCP** | 代码安全扫描 | ⭐⭐ 代码质量 |
| **DeployHQ MCP** | 部署管理 | ⭐ 暂无需求 |
| **GPT Researcher MCP** | 深度调研 agent | ⭐⭐⭐ 调研场景 |

### ClawHub 技能生态

- **总量 5,400+ skills**（部分来源称 10,000+，存在统计口径差异）
- ⚠️ 安全提醒：独立研究发现约 1/5 插件曾是恶意的（2026 初大清理后改善但仍不完美）
- **热门 skills：** self-improving-agent（35K+ 安装）、web-search、agent-browser（11K+）
- **100/3 规则（社区推荐）：** 100+ 下载 + 3 个月以上才考虑安装
- 我们的 skill-vetter 审查流程很有必要 ✅

### Claude Code 最佳实践文章热潮

- Medium 上多篇热文：
  - "12 Patterns Agentic Engineers Use"（859 claps）
  - "I Spent 6 Months Tuning Claude Code"（1.7K claps）— CLAUDE.md、subagents、hooks、skills、worktrees
  - "10 Tips to Stop Burning Tokens"（112 claps）
  - "My Ultimate Claude Code Setup"（890 claps）

---

## Part 4: 🎮 社区玩法 / 小技巧

### 🔥 Twitter/社区热帖

**1. "$200K GTM 岗位被 OpenClaw 替代"**
- @TheMattBerman 发帖获 1,367 likes（粉丝仅 4,900，传播率极高）
- Workflow：LinkedIn 活跃度挖掘 → 定向外联 → agent 自动跟进
- **启示：** 销售/GTM 自动化是 OpenClaw 杀手级场景

**2. Claw Control — OpenClaw 实时看板**
- @_clawcontrol 31 likes
- 为 OpenClaw 做的 Kanban Dashboard，实时可视化 agent 状态

**3. "2026 是 Agent 之年"**
- @rileybrown 视频拆解 OpenClaw + Claude Code + Codex + Cursor 格局
- 社区共识：从直接用 LLM 转向用 agent 产品

### 实用技巧

**Claude Code `/model` 改动（v2.1.144）：**
- 现在 `/model` 只改当前 session，不影响其他
- 按 `d` 键设全局默认 — 比以前更灵活

**后台 session 恢复（v2.1.144）：**
- `claude --bg` 启动的 session 现在可以 `/resume`
- 对长时间运行的任务很方便

**Plugin 发现改进：**
- `/plugin` 面板显示最后更新时间，避免安装过时插件

---

## 📊 信息可靠度总结

| 信息 | 可靠度 | 来源 |
|---|---|---|
| OpenClaw 2026.5.12 发布 | 🟢 高 | Reddit + releasebot |
| Claude Code v2.1.144 今日发布 | 🟢 高 | 官方 changelog |
| Opus 4.7 默认模型 | 🟢 高 | 官方 docs |
| Claude Code 拒绝 OpenClaw 提交 | 🟡 中 | HN 讨论，未经 Anthropic 确认 |
| ClawHub 1/5 恶意插件 | 🟡 中 | 独立研究，具体方法论不明 |
| $200K GTM 替代案例 | 🟡 中 | Twitter 个人分享 |

## ⏰ 行动建议

1. **升级 OpenClaw** — 从 2026.4.15 → 2026.5.12（跨多版本，需检查 breaking changes）
2. **升级 Claude Code** — 确认是否在 v2.1.144
3. **评估 Context7 MCP** — 适合技术调研场景
4. **关注 Claude Managed Agents "dreaming"** — 可能影响我们的 agent 架构

---

## 📊 信息图

![OpenClaw + Claude Code Daily Intel Brief](/images/openclaw-daily-0519/infographic.png)
