# OpenClaw 生态调研 — 2026-03-17

> 调研人：NONO | 搜索轮次：6 | 数据截止：2026-03-17 12:00 CST

![OpenClaw Ecosystem Report Infographic](/images/openclaw-daily-0317/infographic.png)

---

## 📌 核心发现

| 主题 | 关键信息 | 可靠度 |
|------|----------|--------|
| 最新版本 | v2026.3.13（我们运行 v2026.3.8，落后 5 个版本） | 🟢 |
| 重要修复 | compaction token 计算、Anthropic thinking blocks 回放、内存文件重复注入 | 🟢 |
| ClawHub 生态 | 500+ skills，热门：GitHub、AgentMail、Linear、Playwright | 🟢 |
| Docker 新功能 | OPENCLAW_TZ 时区环境变量支持 | 🟢 |
| 安全风险 | Telegram SSRF 修复、Discord gateway 元数据获取失败处理 | 🟢 |
| 竞品动态 | 多 agent 并行成为行业标配（Windsurf 5 agents, Claude Code Agent Teams） | 🟡 |

---

## 1. 版本更新分析

### v2026.3.13（最新，2026-03-14 发布）

**我们当前版本：v2026.3.8，建议评估升级。**

关键变更：
- **compaction 修复** 🔴重要：post-compaction sanity check 现在使用 full-session token count (#28347)
- **Anthropic thinking blocks 修复**：replay 时不再丢失 thinking blocks (#44843)
- **内存文件去重**：case-insensitive 文件系统上不再重复注入 memory 文件 (#26054) — 直接影响 macOS
- **Docker 时区**：新增 `OPENCLAW_TZ` 环境变量 (#34119)
- **Android 聊天设置 UI 重设计** (#44894)
- **Telegram SSRF 安全修复** (#44639)
- **默认模型更新**：测试中从 gpt-5.3-codex 切换到 gpt-5.4

---

## 2. ClawHub Skill 生态（500+）

| 分类 | 代表 Skill | 说明 |
|------|-----------|------|
| 开发工具 | GitHub, Code Review | 最受欢迎 |
| 通信 | AgentMail, AgentBrowser | Agent 专用邮件/浏览器 |
| 搜索 | tavily-web-search | 最多安装 |
| 知识库 | Obsidian-Direct | 直接查询 Obsidian vault |
| 自动化 | Playwright-Scraper | 浏览器爬虫 |

**安全提醒：** 每个 skill 都有权限访问 .env、SSH keys、浏览器 session。skill-vetter 审查流程必要。

---

## 3. 社区与 Issues

- **"20 Biggest Problems"** 讨论（#26472）：WhatsApp 稳定性、安全加固、token 优化
- **Silent Session Resets** (#31322)：v2026.2.26 升级后 group chat 每天自动重置
- **Cascading Failures** (#34990)：强制版本更新 + API model 过期导致 ~7h 宕机

---

## 4. 竞品：多 Agent 并行成标配

2026 年 2 月多 agent 爆发：

| 工具 | 并行能力 | 月费 |
|------|---------|------|
| Grok Build | 8 agents | — |
| Windsurf | 5 agents | $10+ |
| Claude Code | Agent Teams | $20-200 |
| Codex CLI | Agents SDK | — |
| Devin | Parallel sessions | — |

OpenClaw 作为 personal agent 定位独特，sub-agent 架构需持续优化。

---

## 5. 行动建议

1. 🔴 **升级到 v2026.3.13** — compaction + memory + 安全修复
2. 🟡 **评估 AgentMail skill** — agent 独立邮箱能力
3. 🟢 **关注多 agent 并行趋势** — sub-agent 性能优化
