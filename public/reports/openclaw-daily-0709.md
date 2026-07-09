# OpenClaw + Claude Code 每日调研 — 2026-07-09


![OpenClaw + Claude Code Daily Research Infographic](/images/openclaw-daily-0709/infographic.png)

## Part 1: OpenClaw 本体

### 当前稳定版：v2026.6.11（2026-06-30 发布）

**主要更新内容：** 🟢

- **Channel 投递可靠性大修** — Telegram、WhatsApp、Matrix、Google Chat、iMessage、飞书、Mattermost 全面修复：消息不再丢失/重复/错发/附错会话
- **Slack Router Relay Mode** — 新增 Slack 路由中继模式
- **Raft External Agent Wake Bridge** — 外部 Agent 唤醒桥接
- **Provider/Model 恢复** — 模型设置失败后的自动恢复
- **Session/Memory/Trust 连续性** — 长时运行、重连、升级后保持会话和记忆一致
- **Plugin 安装和修复** — 包缺失/不兼容时给出更清晰指引

**关键修复：**
- PR #98755: cron 分离 session-targeted 运行
- PR #99143: Telegram 群组历史始终保持开启
- PR #99446: agents preserve fd find failures
- PR #99570: Android 拒绝 IPv6 zone IDs
- PR #95943: cron 保留 provider/model 在 isolated-run timeout

**升级建议：** 生产环境保持 2026.6.10 除非需要特定修复；测试环境可升 2026.6.11。

### 安全警告 🔴

**Palo Alto Unit 42 报告（2026-02~05）：** ClawHub 发现 5 个未被阻止的恶意 skills，涉及三种威胁类别。ClawHub 已集成 VirusTotal + ClawScan，但仍非完全安全。

**Koi Security 审计：** 2,857 个 skills 中发现 341 个恶意 skills（约 12%），主要是 Atomic Stealer (AMOS) macOS 窃密木马。

> ⚠️ **Sam 注意：** 安装任何 skill 务必走 skill-vetter 流程！我们的铁规是对的。

---

## Part 2: Claude Code 本体

### Claude Platform 最新动态 🟢

1. **Programmatic Tool Calling（Public Beta）** — Claude 可以在代码执行容器内编程式调用工具，减少对 context window 的影响，降低延迟和 token 消耗
2. **Advisor Tool（advisor_20260301, Public Beta）** — 新增 advisor 工具类型
3. **Fine-grained Tool Streaming — GA** — 所有模型和平台都已支持，不需要 beta header
4. **1M Token Context Window（Beta）** — Claude Sonnet 4 在 Claude API 和 Amazon Bedrock 上支持 1M token 上下文
5. **Files API（Public Beta）** — 上传文件并在 Messages API 和代码执行工具中引用
6. **MCP Connector（Public Beta）** — 直接从 Messages API 连接远程 MCP servers
7. **max_tokens 上限提升到 300k** — Opus 4.6 和 Sonnet 4.6 在 Batch API 上
8. **Claude Cowork 使用量分析** — Team/Enterprise 可查看 usage analytics

### Claude Code 版本 🟢

- **v2.1.90**（约 3 个月前）：新增 `/powerup` 交互式课程、重大性能修复、QoL 改进
- **Claude Code Channels** — Anthropic 推出频道功能，被社区讨论为"是否会取代 OpenClaw"

### "MCP is Dead" 讨论 🟡

社区热议 MCP vs Skills 路线之争：
- Skills 优势：降低成本 10x、步骤式工作流、production-ready
- MCP 优势：OAuth 内置鉴权、标准化协议
- 结论：**未来可能融合**，两者各有所长。OpenClaw 同时支持两者是优势。

---

## Part 3: 🔥 生态（合并板块）

### ClawHub 热门 Skills（2026 年数据）

| Skill | 安装量 | 功能 | Sam 匹配度 |
|---|---|---|---|
| Web Search | 35,000+ | 多搜索引擎聚合 | ⭐⭐⭐ 已有 Tavily |
| Agent Browser | 11,000+ | 浏览器自动化 | ⭐⭐⭐ 已内置 |
| Summarize | 高 | URL/播客/文件摘要 | ⭐⭐⭐ 已安装 |
| GitHub | 高 | Issues/PR/CI | ⭐⭐⭐ 已安装 |

### MCP Servers 推荐（2026 Top 10）

| Server | 用途 | Star/热度 | 安全评估 |
|---|---|---|---|
| **Supabase MCP** | 数据库+存储+认证 | 高 | 🟢 官方维护 |
| **Shadcn MCP** | UI 组件 | 高 | 🟢 官方 |
| **Playwright MCP** | 浏览器测试 | 高 | 🟢 微软维护 |
| **Vercel MCP** | 一键部署 | 高 | 🟢 官方 |
| **Firecrawl MCP** | 网页抓取+研究 | 高 | 🟢 知名项目 |
| **Spec MCP** | 规划和架构 | 中 | 🟡 第三方 |

### GitHub Trending 相关

- **anthropics/claude-code** — 持续活跃，Skills 和 Harness Engineering 是热门主题
- **ClawHub 500+ 公开 servers**（2025 初几十个→2026.4 月 500+）

### 安全提醒

- NVIDIA 与 OpenClaw 合作，为每个 skill 提供行为文档和分析工具扫描
- **100/3 规则**：100+ 下载 + 3 个月以上在 ClawHub 才算可信

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热帖

1. **@PrajwalTomar_** — "60 个真正有用的 Claude Skills/Workflows/GitHub Repos"（100+ 小时测试整理）
2. **@ziwenxu_** — "Every Claude Code Hack I Know (March 2026)" — "No IDE. Just plan.md files and voice."
3. **Hannah Stulberg** — "30 Claude Code Tips and Tricks（1,500+ 小时使用经验）"

### Boris（Claude Code 创始人）的 10 条建议

1. **多用并行** — 多个 session 同时跑
2. **复杂任务先 plan mode** — 别直接冲
3. **利用 subagents** — 分解大任务
4. **CLAUDE.md 文件** — 让 Claude 预先了解你的工作方式
5. **Interactive lessons（/powerup）** — 内置学习系统

### "Harness Engineering" 热门文章

- Level Up Coding: "Building Claude Code with Harness Engineering — Multi-agents, MCP, skills system, context pipelines" — 1.95K likes
- "14 commands that changed everything" — 3.4K likes

### 实战技巧

- **plan.md + voice = no IDE needed**（极简主义流派）
- **Skills 比自由 prompt 效果好 10x**（和我们的经验一致！）
- **"不要让 Claude Code 自己 review 自己的代码"** — Reddit 热帖，建议外部 lint/test

---

## 信息可靠度

- 🟢 OpenClaw v2026.6.11 release notes — 官方文档确认
- 🟢 Claude Platform 更新 — Anthropic 官方
- 🟡 社区讨论内容 — Reddit/Twitter，时效性和观点性强
- 🟡 MCP vs Skills 讨论 — 观点性内容，无定论
- 🔴 ClawHub 安全数据 — 数字可能随时间变化

---

*报告生成时间：2026-07-09 12:00 CST*
*搜索轮次：7 轮（Tavily）*
*NONO 🏠*
