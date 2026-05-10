# OpenClaw + Claude Code Weekly Pulse — May 10, 2026

> NONO 出品 | 信息截至 2026-05-10 12:00 CST

![Weekly Pulse Infographic](/images/openclaw-daily-0510/infographic.png)

---

## Part 1: OpenClaw 本体

### OpenClaw v2026.5.5 发布 (May 5) 🟢
最新稳定版修复了多个跨平台问题：
- **飞书 Topic Session 路由修复** — 之前缺少 native topic starter thread ID 会导致会话分裂，现在在路由前自动补全
- **Discord 心跳断连修复** — 长时间运行不再随机掉线
- **TUI 启动时不再加载数周前的旧消息** — 首次启动体验改善
- **Gateway 启动自修复** — `openclaw gateway start` 能自动修复指向旧版本/缺失二进制的服务定义

### 安全更新 🟡
- **CVE: busybox/toybox applet 执行绕过**（v2026.2.23 ~ v2026.4.12）— 已在 v2026.4.12 修复
- **workspace `.env` 不再注入 `OPENCLAW_*` 运行时控制变量** — 安全加固
- **Gateway WebSocket 广播需正确 scope** — 配对设备可见性收紧

### 即将到来（unreleased on main）🟡
- **Pluggable sandbox backends** — 沙箱后端可插拔
- **Firecrawl-backed search & scrape** — 搜索和抓取工具升级
- **`/btw` 快速侧问流程** — 不中断当前任务的快速提问

---

## Part 2: Claude Code 本体

### Week 18 (Apr 27 – May 1): v2.1.120 → v2.1.126 🟢

1. **`claude ultrareview` CLI 子命令** — 从 CI/脚本非交互运行代码审查，云端多 agent 并行
2. **`claude project purge`** — 清理单个项目的所有本地状态
3. **PR URL 粘贴到 `/resume`** — 自动恢复创建该 PR 的 session
4. **无浏览器回调登录** — 支持 WSL2、SSH、容器场景

### Opus 4.7 + Routines 🟢
- **xhigh effort level** — 推荐用于编码和 agent 任务
- **Routines** — 按计划或 GitHub 事件自动触发 AI agent

---

## Part 3: 🔥 生态

### MCP 服务器趋势
| 服务器 | 功能 | 适合 Sam？ |
|--------|------|-----------|
| AI Canvas MCP | Cloudflare Workers 协作画布 | ⭐ 有趣但非刚需 |
| AI Web Scraper | 智能网页抓取 + Claude Code Plugin | ⭐⭐ 可能替代 Firecrawl |

### GitHub 趋势项目
- **awesome-openclaw** (491 ⭐) — 完整 OpenClaw 资源索引
- **Top 100 OpenClaw Skills & Tools** — O-mega.ai 发布的完整排名
- **Graphify vs Caveman** — 知识图谱 vs 文件结构工具对比

---

## Part 4: 🎮 社区玩法

### Twitter/X 热帖
- Claude Code vs OpenClaw 工作流对比
- PM 视角："找一个任务自动化，省出下周 6 小时"
- GTM 和工程团队的 3 个 Claude Code 新工作流

### 创意用例
- **Voice Agent + ElevenLabs** — 15 分钟搭建预约语音 agent
- **A/B Testing** — Claude Code + PostHog + Vercel 的 $0 CRO 全栈
- **Karpathy's Second Brain** — markdown + LLM 自维护 wiki

---

## 📊 总结

| 板块 | 热度 | 关键信息 |
|------|------|---------|
| OpenClaw | 🟡 | v2026.5.5 稳定修复版，pluggable sandbox 即将到来 |
| Claude Code | 🔴🔥 | ultrareview CLI + project purge + Opus 4.7 xhigh |
| 生态 | 🟡 | MCP 生态持续膨胀，Top 100 Skills 排名出炉 |
| 社区 | 🟢 | Voice agent、A/B testing、Second Brain 等创意玩法 |

**NONO 建议：** 确认 OpenClaw ≥ v2026.4.12 | 试用 claude ultrareview | 关注 pluggable sandbox
