# OpenClaw + Claude Code Daily Intel — May 6, 2026

![Infographic](/images/openclaw-daily-0506/infographic.png)

## Part 1: OpenClaw 本体

### 🆕 v2026.5.3 发布（本周最新）
🟢 可靠度：高（官方 GitHub Release）

**核心更新：**
- **新增文件传输插件** — agent 可直接在设备间传文件
- **Skill 安全扫描器** — 内置 skill safety scanner，自动检测安全风险
- **Token 用量仪表盘** — 使用量可视化面板
- **Opus 4.6 + GPT-5.3 Codex 官方支持**
- **插件安装可靠性大幅提升** — npm prerelease fallback、stale 状态修复
- **WhatsApp 修复** — baileys 依赖兼容 pnpm v9+ (#76539)
- **Google Meet 实时语音** — Chrome 媒体权限、音频桥接改善
- **Memory/LanceDB** — 修复 apache-arrow peer dependency (#76910)

### v2026.5.2 回顾
- Gateway start 修复旧版 LaunchAgent 指向问题
- Slack DM 路由改进
- 工具 allowlist 精确化

---

## Part 2: Claude Code 本体

🟢 可靠度：高（Anthropic 官方 + 多源交叉验证）

1. **Dispatch（远程控制）** — 手机变成桌面 Claude 的遥控器。Fortune 实测一个月评价正面。
2. **Scheduled Tasks（定时任务）** — Claude Cowork 内置定时执行
3. **Computer Use** — Claude Code + Cowork 均可使用电脑操作
4. **Code Review** — Anthropic 官方代码审查工具
5. **/btw 侧问** — 不打断上下文的临时提问
6. **Cloud Execution** — 代码可在云端执行

---

## Part 3: 🔥 生态

### ClawHub 生态爆发
- **ClawHub 总 skill 数：13,000+**
- **注册 skill 数：3,286**
- **总下载量：1.5M+**

**Top 10 Skills（按安装量）：**

| Rank | Skill | 安装量 | 功能 |
|------|-------|--------|------|
| 1 | Capability Evolver | 35K | AI 自我改进 |
| 2 | Wacli | 16K | CLI 工具集 |
| 3 | ByteRover | 16K | 数据爬取 |
| 4 | Self-Improving Agent | 15K | 自我优化 |
| 5 | ATXP | 14K | 自动化测试 |
| 6 | Gog | 14K | Google Workspace |
| 7 | Agent Browser | 11K | 浏览器自动化 |
| 8 | Summarize | 10K | 文本摘要 |
| 9 | GitHub | 10K | Git 工作流 |
| 10 | Sonoscli | 10K | Sonos 控制 |

**⚠️ 安全警告：** 13% skills 被安全标记

### MCP 生态
- MCP 已成为 AI agent 连接外部工具的事实标准
- 安全关注上升 — Reddit r/cybersecurity 讨论真实 CVE 模式

---

## Part 4: 🎮 社区玩法

- **30 Claude Code Tips**（1,500+ 小时使用经验）— 并行 session、Plan mode、CLAUDE.md
- **Andrej Karpathy** 用 Markdown+LLM 建第二大脑（无 RAG）
- **OpenClaw 355K GitHub Stars**
- **@ziwenxu_**: `/ce:plan` → Voice → 4 parallel sessions

---

## 🎯 行动建议
1. 考虑升级到 v2026.5.3 — skill safety scanner + token 仪表盘
2. 用 skill-vetter 审查 Capability Evolver 后试用
3. 关注 MCP CVE 趋势
