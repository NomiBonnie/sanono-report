# OpenClaw + Claude Code 每日调研 — 2026-05-15

![infographic](/images/openclaw-daily-0515/infographic.png)

## Part 1: OpenClaw 本体

### 版本动态
- **v5.7 系列持续迭代中**，聚焦运营稳定性而非新功能 🟢
- **May 12 更新流**：heartbeat 节奏优化、语音可靠性、scoped approvals、auth 持久化、provider stream drains、确定性更新恢复 🟢
- **创始人 @steipete 已加入 OpenAI**，项目继续由团队维护 🟢
- **GitHub Stars 372K+**，Fork 77K+ 🟢

### 关键 Issue 趋势
- Active Memory 超时、Session lane 卡住、Cold-start gateway 握手、Discord 重连、Model alias 冷却时间、Plugin update 同步失败 🟡
- 趋势：用户长时间运行 OpenClaw，运营边界 case 开始暴露

### 即将到来的功能
- 可插拔沙盒后端、GitHub main 分支安装支持、Firecrawl 搜索工具、/btw 快速侧问、更严格健康监控 🟢
- Codex 迁移和 auth 路径更清晰 🟢

### 社区反馈的信任问题
- LINE 送达恢复可能发错人 🔴 | WebSocket 多账户只对首账户有效 🟡 | Signal 绕过 hook 🟡 | 附件 >4MB 栈溢出 🟡

---

## Part 2: Claude Code 本体

### Week 19 (May 4-8) — v2.1.128→v2.1.136 🟢
- **Plugin 从 .zip/URL 加载**：`--plugin-url` 直接从 URL 加载插件包
- **跨项目历史搜索**：Ctrl+R 默认搜索所有项目，Ctrl+S 缩小范围
- **Worktree 分支**：从 local HEAD 或远程默认分支创建
- **Auto mode hard deny 规则**：无条件阻止特定操作

### Week 18 (Apr 27-May 1) — v2.1.120→v2.1.126 🟢
- **无浏览器回调登录**：支持在终端粘贴 OAuth code（WSL2/SSH/容器）
- **claude project purge**：删除项目所有状态，支持 --dry-run
- **Windows 不再需要 Git Bash**
- **/resume 支持粘贴 PR URL** 自动找到 session

### 重要新产品
- **Claude Design** (Anthropic Labs)：协作创建设计/原型/幻灯片，基于 Opus 4.7 🟢
- **Managed Agents "Dreaming"**：agent 回顾 session 自我改进 🟢
- **/ultrareview 公开预览**：云端 bug-hunting agent 舰队 🟢

### 质量透明度
- Anthropic 发布质量问题事后分析：3月4日 reasoning effort high→medium 导致质量下降 🟢

---

## Part 3: 🔥 生态

### ClawHub 生态规模
- **60K+ skills** | 56K+ certified | **39M+ 总下载量**

### 热门 Skills
| Skill | 安装量 | Sam 匹配度 |
|-------|--------|-----------|
| web-browsing | 180K+ | ⭐⭐⭐ 已有 |
| felo-search | 高 | ⭐⭐ |
| self-improving-agent | 热门 | ⭐⭐⭐ 值得研究 |
| ontology (新) | 新上架 | ⭐⭐ |

### MCP 生态
- MCP 一周年后生态爆发，安全/企业功能增强 🟢
- Pomerium MCP 安全方案 | K2view 企业级 MCP | Terraform Registry MCP

---

## Part 4: 🎮 社区玩法

### Twitter/X
- "7天 = 10人团队6-9个月工作量" (@kavinbm) 🟡
- 2025 vs 2026 对比：从 weeks to ship → afternoon with agent fleet (@ericosiu) 🟢
- OpenClaw 自动找工作投递 (@dctanner) 🟢

### Reddit & HN
- r/openclaw: "Claude Code vs OpenClaw/Codex 什么做得更好？"（2天前）
- HN: "OpenClaw is a security nightmare" (397 points) — 安全模型讨论 🟡

### 实用技巧
1. `claude --plugin-url https://...` 快速测试插件
2. `/ultrareview` 云端 bug-hunting
3. 跨项目 Ctrl+R 找命令
4. `claude project purge --dry-run` 清理前预览
5. Session recap 失焦也不错过进度

---

*报告时间：2026-05-15 12:00 CST | 搜索：6轮 | 🟢官方 🟡社区 🔴未确认*
