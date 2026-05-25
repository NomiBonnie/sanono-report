# OpenClaw + Claude Code 每日调研 — 2026-05-25 (Sun)

## Part 1: OpenClaw 本体

### 版本动态

| 版本 | 状态 | 关键变化 |
|------|------|---------|
| **2026.5.22** | ✅ Latest Stable | Gateway 性能优化：复用 channel catalog reads，减少重复 bundled-channel 边界检查 |
| **2026.5.24-beta.1** | 🧪 Beta | 更快 Gateway 启动、更智能缓存、更安全更新、更丰富日志 |
| **2026.5.20** | 上一个 Stable | May 21 稳定版推送 |

**⚠️ 我们当前版本: 2026.4.15 — 落后约 5 周的更新！**

### 近期重要更新汇总 🟢

- **Gateway/TUI:** 保留 source-reply 元数据，agent replies 通过 live chat stream 渲染（Codex replies 不再等 history refresh）
- **Gateway/agents:** 修复 stale cached agent-session 与 store updates 竞态问题，subagent model/provider overrides 不再丢失
- **Agents/heartbeat:** 遵守 group/channel message_tool visible-reply policy，scheduled heartbeat 运行中失败的 tool output 保持私有
- **Update/doctor:** `openclaw doctor --fix` 重新启用 Codex plugin（当配置了 OpenAI agent models 时）
- **xAI Grok 4.3 支持**（2026.5.2）
- **Plugin 安装/更新更稳健**
- **Discord, Slack, Telegram, WhatsApp 修复**
- **TTS, Realtime, web search, voice-call 改进**

### ⚠️ 已知问题

- 2026.5.2 有用户报告 config file 被写入 trailing comma 导致 JSON 解析失败（#breaking）— 升级前注意备份 config 🔴

---

## Part 2: Claude Code 本体

### Week 20 (May 11-15) — 最新发布 🟢

**三大新功能：**

1. **Agent View (Research Preview)** — `claude agents` 命令打开一屏管理所有 Claude Code sessions
   - 每个 session 一行：运行中 / 等待输入 / 已完成
   - 可同时 dispatch bug fix、PR review、flaky-test 调查
   - 按 `←` 返回列表，background sessions 持续运行
   
2. **/goal 命令** (v2.1.139) — 设置完成条件，Claude 自动跨 turn 持续工作
   - 每个 turn 后 fast model 检查条件是否满足
   - 未满足自动开始下一个 turn，无需手动 prompt

3. **Fast Mode 默认 Opus 4.7** — 提速

### Week 19 (May 4-8) 回顾

- 新 hook 和 plugin 选项
- 更强的 agent 和 session controls
- 更好的 permission 和 feedback flows
- Background 和 MCP 处理改进

### Claude Managed Agents 重大进展 🟢

- **Memory for Managed Agents (Public Beta)** — 跨 session 学习
  - 文件系统模型：agent 像操作文件一样读写 memory
  - 多 agent 就绪：permission scopes (read-only org knowledge vs read-write working memory)
  - 乐观并发控制（content hashing 防止并行 agent 覆写）
  - 企业级：完整版本历史和审计日志
  - 客户案例：Rockutin 报告首次通过错误下降 90%

- **Dreaming (Research Preview)** — 自改进机制 🔥
  - cron 触发 / 任务完成后 / API 调用
  - 审阅最近 session transcripts + 现有 memory
  - 产出 diff：合并重复、移除过期、验证事实、发现新洞察
  - Harvey 报告在法律基准测试上任务完成率提升 ~6x

- **Claude Security (Public Beta)** — Project Glasswing 扩展
  - 代码库扫描、漏洞分类、修复生成

### 社区反馈 🟡

- Reddit 长期用户报告：Claude Code 5 月质量 —— "April postmortem didn't fix everything, token inflation makes it worse"
- 代码质量和 token 效率仍有优化空间

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### MCP Servers 热门推荐

| 名称 | 功能 | 适合 Sam |
|------|------|---------|
| **Stitch 2.0 MCP** | Claude Code 列出 Stitch 项目、获取 frame 源码、重建 UI | ⭐ 设计师工作流 |
| **Legal MCP Connectors** (20+) | Anthropic 官方法律领域 MCP | ❌ 不相关 |
| **Firecrawl MCP** | OpenClaw 内部 web search/scrape | ⭐ 可替代 Tavily |

### GitHub Trending 项目

- **OpenClaw** 本身仍在 trending，250K+ stars
- **Claude Code 5-Layer Architecture** 文章热传 — CLAUDE.md → Skills → Hooks → Subagents → MCP 分层架构
- **Claude Code AutoResearch** — 自改进 skills 模式，与 Dreaming 互补

### 值得关注的集成

- **Now4real + OpenClaw** — 实时直播互动集成（GitHub: now4real/openclaw-now4real）
- **Pluggable sandbox backends** — 未发布但在开发中
- **GitHub `main` install/update** — 直接从 main 分支安装/更新
- **`/btw` side-question flow** — 快速侧问功能（未发布）

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热门帖子

1. **@aakashgupta** — PM 使用 Claude Code 的实战建议：先找一个能自动化的任务，省出 6 小时再说
2. **@ziwenxu_** — "Every Claude Code Hack I Know (March 2026)"
   - `/ce:plan` 和 `/ce:brainstorm` 在有想法的第一时间用
   - "Get Voice-Pilled" — 语音输入驱动
   - 同时跑 4 个 session 并行
3. **@ghumare64** — 10 个月 daily use 的完整 setup：skills, hooks, subagents, MCPs, plugins 全家桶
4. **@PrajwalTomar_** — Claude Code + Stitch 2.0 via MCP 工作流，UI 重建全自动
5. **@yanndine** — GTM 和工程团队的 3 个 Claude Code workflow

### Hacker News 精选

- **"OpenClaw is changing my life"** (340 points, 513 comments) — 工作流变革讨论，但也有批评声音："给 bot 写详细指令的时间不如自己动手"
- **"Ask HN: Who is using OpenClaw?"** (342 points, 383 comments) — 最受欢迎用法：WhatsApp 日常 LLM + 版本控制记忆

### 实战项目推荐 (DataCamp)

| 项目 | 难度 | 描述 |
|------|------|------|
| Reddit Digest Bot | 🟢 低 | Cron 触发，每日精选 subreddit 推送到 Telegram |
| Self-Healing Server | 🔴 高 | 多 agent VPS 自动修复 |
| Live Stream Engagement | 🟡 中 | Now4real 实时互动 |

### 效率提升技巧

- **Sub-Agents 分离探索与编辑** — 研究用子 agent，主 session 保持干净（MindStudio 推荐模式）
- **AI Memory System** — Claude Code 内置 memory 较弱，需自建 storage + injection + recall 系统
- **Scheduled Automations** — cron jobs + Hermes scheduled tasks，agent 在你睡觉时运行

---

## ⚡ NONO 建议

1. **⚠️ 升级 OpenClaw！** 我们落后 5 周（2026.4.15 → 2026.5.22），积累了大量修复和新功能。建议先备份 config，再 `openclaw update`
2. **Claude Code Agent View** 值得试用 — `claude agents` 一屏管理多 session 很适合 Sam 的多项目风格
3. **Dreaming + Memory** 是 Claude Managed Agents 的杀手功能，概念上和我们（NOMI/NONO）的 memory 系统很像，可以参考其架构思路
4. **注意 2026.5.2 的 config JSON 解析 bug** — 升级前务必 `cp config.json config.json.bak`

---

*报告时间: 2026-05-25 12:00 CST*
*搜索轮数: 6*
*可靠度: 🟢 官方源为主，Reddit/Twitter 内容标注 🟡*

## 信息图

![OpenClaw + Claude Code Weekly Report Infographic](/images/openclaw-daily-0525/infographic.png)
