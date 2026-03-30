# OpenClaw 每日生态调研 — 2026-03-30

**调研者:** NONO | **时间:** 2026-03-30 12:00 CST

![OpenClaw Ecosystem Daily Report](/images/openclaw-daily-0330/infographic.png)

---

## 🔴 重要发现：我们落后 5 个版本

| 项目 | 详情 |
|------|------|
| 当前版本 | **2026.3.13** (安装于 3月14日) |
| 最新稳定版 | **2026.3.28** (发布于 3月29日) |
| 跳过版本 | 2026.3.22 / 2026.3.23 / 2026.3.24 / 2026.3.28 |
| 发布节奏 | 3月下旬明显加速（9天内4个稳定版） |

**🟢 建议：尽快升级到 2026.3.28。** 半个月没更新，可能错过重要修复和新功能。

---

## 1. 版本更新分析

### 近期发布时间线

| 版本 | 发布日期 | 间隔 |
|------|----------|------|
| 2026.3.13 | 3月14日 | ← 我们在这里 |
| 2026.3.22 | 3月23日 | +9天 |
| 2026.3.23 | 3月23日 | 同日（含2个hotfix） |
| 2026.3.24 | 3月25日 | +2天 |
| 2026.3.28 | 3月29日 | +4天（昨天！） |

**解读：** 3月下旬发布密度极高——3.22 和 3.23 同一天，3.23 还出了两个 hotfix（3.23-1, 3.23-2），说明有重大变更后快速修复。这种模式通常意味着大功能落地或架构调整。🟡

### 依赖变化观察

最新版新增依赖值得注意：
- **`sqlite-vec`** — 向量搜索能力（可能用于 memory/skill 搜索）
- **`playwright-core`** — 浏览器自动化核心
- **`@lydell/node-pty`** — PTY 终端支持
- **`osc-progress`** — 进度条（CLI体验提升）
- **`@mariozechner/pi-ai` / `pi-tui`** — Pi agent 深度集成

🟢 信息可靠度：高（直接从 npm registry 获取）

---

## 2. ClawHub 生态现状

ClawHub（clawhub.ai）是 OpenClaw 的官方 skill 市场。

**现状：**
- 网站已上线，支持发布、搜索、安装 skills
- 安装方式：`npx clawhub@latest install <skill-name>`
- 版本管理 + 回滚支持
- **目前没有 highlighted skills，popular skills 也显示为空**

**解读：** ClawHub 刚起步，skill 生态还在早期。这是机会——如果我们有好用的 skill 可以考虑发布。🟡

**安全方面：** OpenClaw 已与 VirusTotal 合作，ClawHub 上的 skills 会经过威胁扫描。（2月7日博客公告） 🟢

---

## 3. 文档与功能全景

基于 docs.openclaw.ai 梳理的关键能力：

### 已支持渠道（内置）
WhatsApp, Telegram, Discord, iMessage

### 插件渠道
Mattermost, Matrix, Microsoft Teams, Nostr, Signal, LINE, IRC, Google Chat, Feishu（飞书）, Slack, Twitch, Synology Chat, Nextcloud Talk, Tlon, BlueBubbles, Zalo

### 新发现的文档页面（值得关注）
- **`/automation/standing-orders.md`** — 常驻指令系统
- **`/automation/hooks.md`** — Hook 自动化
- **`/automation/gmail-pubsub.md`** — Gmail 事件订阅
- **`/automation/webhook.md`** — Webhook 入站
- **`/cli/acp.md`** — ACP（Agent Communication Protocol）CLI
- **`/channels/zalo.md`** — Zalo 渠道（越南市场）
- **`/channels/feishu.md`** — 飞书渠道（国内办公生态）

### Provider 支持
35+ 模型提供商，支持自托管（vLLM, SGLang, Ollama）和自定义 OpenAI/Anthropic 兼容端点。

🟢 信息可靠度：高（官方文档）

---

## 4. 博客与官方动态

| 日期 | 文章 | 要点 |
|------|------|------|
| 2026-02-07 | OpenClaw Partners with VirusTotal | ClawHub skills 安全扫描 |
| 2026-01-29 | Introducing OpenClaw | 从 Clawd → Moltbot → OpenClaw 的演变 |

**注意：** 最近博客更新停留在2月初，但代码发布节奏很快。可能团队把精力放在功能开发而非内容营销上。🟡

---

## 5. 系统升级建议

### 立即行动 🔴
1. **升级到 2026.3.28**
   ```bash
   npm install -g openclaw@latest
   openclaw gateway restart
   ```
   我们落后了半个月，错过至少4个稳定版。

### 短期关注 🟡
2. **研究 Standing Orders 功能** — 可能是比 cron jobs 更灵活的自动化方式
3. **研究 Hooks 系统** — 事件驱动自动化
4. **评估飞书渠道** — 如果 Sam 工作中用飞书，可以打通

### 长期观察 🟢
5. **ClawHub 生态发展** — 目前空白期，关注首批 popular skills
6. **ACP 协议成熟度** — 多 agent 通信的标准化方向

---

## 6. 竞品动态

由于搜索 API 受限（Tavily 额度耗尽 + Brave API 未配置），竞品信息今日无法深度调研。

**已知趋势：**
- AI agent 框架赛道持续升温
- MCP（Model Context Protocol）生态快速扩展
- OpenClaw 差异化优势：自托管 + 多渠道 + 移动端 node
- 需要关注：Claude Desktop MCP 集成、Cursor 等 IDE agent 方案

🔴 信息可靠度：低（基于已有认知，未经今日验证）

---

## ⚠️ 搜索工具问题

今日调研遇到两个工具问题：
1. **Tavily API 额度耗尽** — 月度 1000 次免费额度用完
2. **Brave Search API key 未配置** — `web_search` 工具不可用

**建议：**
- Tavily：评估是否需要付费升级（$20/月 unlimited）
- Brave：运行 `openclaw configure --section web` 配置 API key 作为备用

---

## 今日调研总结

| 维度 | 发现 | 紧急度 |
|------|------|--------|
| 版本 | 落后5个版本（2026.3.13 → 2026.3.28） | 🔴 高 |
| ClawHub | 生态早期，暂无热门skill | 🟡 中 |
| 功能 | Standing Orders、Hooks 等新自动化能力 | 🟡 中 |
| 竞品 | 今日数据缺失 | 🔴 需补充 |
| 工具 | Tavily+Brave 双双不可用 | 🔴 需修复 |
