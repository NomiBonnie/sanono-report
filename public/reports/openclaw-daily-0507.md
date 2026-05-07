# OpenClaw + Claude Code 每日调研 — 2026-05-07 (Wed)

🏠 By NONO | 搜索轮次: 8

![OpenClaw & Claude Code Weekly Intelligence Brief](/images/openclaw-daily-0507/infographic.png)


---

## Part 1: OpenClaw 本体

### 🔄 v2026.5.6 (May 6) — 热修复
🟢 可靠

- **Doctor/Codex OAuth 路由回滚**：2026.5.5 的 doctor --fix 误把合法的 `openai-codex/*` OAuth 路由改写成 `openai/*`，可能导致 OAuth-only GPT-5.5 设置失效。5.6 已修复，受影响用户需手动运行 `openclaw models set openai-codex/gpt-5.5 && openclaw config validate`。(#78407)
- **Plugin runtime fetch 修复**：第三方 symbol metadata 导致 SDK/proxy fetch 拒绝合法请求，已修复。(#77846)
- **Web fetch 超时清理**：超时的 fetch 不再阻塞 Gateway tool lanes，改为返回 tool error。(#78439)
- **Debug proxy 修复**：header 字典归一化，避免 symbol metadata 导致 replay 失败。

### 🔄 v2026.5.5 (May 6) — 多平台修复
🟢 可靠

- **飞书 (Feishu)**：修复 topic starter thread ID 缺失导致的 session routing 错乱。(#78262)
- **LINE**：dmPolicy: "open" 配置若无 wildcard allowFrom，直接拒绝验证。(#78316)
- **Telegram/Codex**：tool progress 不再重复渲染。

### 🔄 v2026.5.4 — 语音/实时音频升级
🟢 可靠

- Google Meet/Voice Call: Twilio dial-in 通过 Gemini 实时语音桥接，支持背压缓冲、barge-in 队列清理。

### 📊 趋势观察
- OpenClaw 本周连发 3 个版本（5.4→5.5→5.6），修复节奏很快
- 5.6 紧急回滚说明 doctor 自动修复功能需要更谨慎
- 飞书/LINE 等亚洲平台持续获得修复支持，对 Sam 有一定参考价值

---

## Part 2: Claude Code 本体

### 🔥 最新 Week 17 (Apr 20-24) — 当前最新版 v2.1.114-v2.1.119
🟢 可靠 (官方文档)

1. **`/ultrareview` 公开研究预览**：云端多 agent 并行代码审查，自动发现 bug 并将结果推回 CLI/Desktop。适合在合并关键变更前跑一轮。
2. **Session Recap**：切换回终端时自动显示离开期间发生了什么，不用翻日志。
3. **Custom Themes**：从 `/theme` 或 plugin 构建和分发自定义配色方案。
4. **Claude Code Web 改版**：新增 sessions sidebar + drag-and-drop 布局。

### Week 16 (Apr 13-17) 回顾
- **Claude Opus 4.7** 成为 Max/Team Premium 新默认模型
- 新增 `xhigh` effort level（推荐日常编码使用）
- **Routines**：Web 端可从计划任务、GitHub 事件或 API 调用触发模板化云 agent
- `/usage` 展示限额消耗明细
- CLI 迁移到原生二进制

### Week 15 (Apr 6-10) 回顾
- **Ultraplan** 早期预览：CLI 起草计划 → web 编辑器评审评论 → 远程或本地执行
- **Monitor** 工具：后台事件流实时进入对话，Claude 可以 tail 日志并即时反应

### ⏳ Week 18 (Apr 28 - May 2) — 尚未发布
- 官方 What's New 页面尚未更新 Week 18 内容
- 预计本周内发布

### 📊 趋势观察
- Claude Code 持续强化"云端化"能力（ultrareview、ultraplan、routines）
- 从单机 CLI 工具向分布式多 agent 平台演进
- `/ultrareview` 对代码质量控制是大利好，值得 Sam 关注

---

## Part 3: 🔥 生态 (OpenClaw + Claude Code)

### 热门 Skills & MCP Servers
🟡 综合多源

1. **TranscriptAPI** — 视频转写 skill，支持 YouTube 等平台。开发者推荐 top 5 必装。
2. **mcporter** — MCP 集成桥接 skill，让 OpenClaw 直接调用 MCP servers。
3. **Firecrawl MCP** — 网页抓取和搜索，OpenClaw 平台级集成中（尚未正式发布）。
4. **Claude Security** — 公开 Beta，Enterprise 客户可用，Opus 4.7 驱动的代码漏洞扫描+修复建议，可直接在 Claude Code Web 中打开修复。

### GitHub Trending 相关
🟡 综合多源

- Claude Code 替代 OpenClaw 的讨论持续升温（Medium 文章引发热议），但社区共识是两者互补而非替代
- OpenClaw CVE-2026-25253（RCE 漏洞）在安全社区引起关注，已修复但提醒用户及时升级

### 生态趋势
- MCP 生态持续爆发，Best MCP Servers 榜单涵盖搜索、浏览器自动化、数据库、设计工具
- OpenClaw + Claude Code 组合使用成为主流——OpenClaw 做调度/自动化，Claude Code 做深度编码
- Plugin SDK 和 guarded fetch 的改进说明 OpenClaw 在认真对待第三方生态安全

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 精选
🟡 社交媒体

1. **@GradonLi** — "2026 AI agent workflow 两大 CLI 工具：Claude Code 和 OpenClaw"，对比两者定位和使用场景。
2. **@every** — "Voice → Research → Plan → Website → Automated Reminders，在足球场完成全流程"。语音驱动的全链路自动化 workflow 演示。
3. **@rileybrown** — "2026 is the year of Agents: OpenClaw, Claude Code, Codex, Cursor"，对比分析视频获得大量关注。
4. **@KSimback** — OpenClaw 邮件自动化实战：分类、自动退订垃圾、起草回复待人工审批。即时价值。
5. **Karpathy (Jan 2026 经典)** — "从命令式转向声明式，让 agent 循环更久获得更大杠杆"，至今仍是 Claude Code 使用的金科玉律。

### 实用技巧
- **Effort Level 调节**：Claude Code `/effort` slider，日常编码用 `xhigh`，快速问答用 `low`
- **Session Recap**：不用盯终端，回来自动看摘要
- **双 Agent 架构**：OpenClaw 做 24/7 自动化监控，Claude Code 做深度编码，两者通过 MCP 打通

---

## 📋 Sam 行动建议

1. **⚡ 立即**：确认 OpenClaw 已升级到 v2026.5.6（OAuth 路由修复）
2. **📌 关注**：Claude Code `/ultrareview` 进入公开预览，适合关键 PR 前跑一轮自动审查
3. **🔍 调研**：mcporter skill 可能简化 MCP server 在 OpenClaw 中的集成
4. **🛡️ 安全**：CVE-2026-25253 已修复，确认系统已 patch

---

*调研完成时间：2026-05-07 12:00 CST*
*信息可靠度：🟢 官方源 | 🟡 综合多源 | 🔴 未验证*
