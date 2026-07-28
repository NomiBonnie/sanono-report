# OpenClaw + Claude Code 每日调研 — 2026-07-28

![Infographic](/images/openclaw-daily-0728/infographic.png)

## Part 1: OpenClaw v2026.7.2

**重大更新：**

1. **Remote Coding Sessions** — 可在云端 workers 运行 Control UI sessions，在终端中打开 Codex/Claude catalog sessions，直接恢复 OpenCode/Pi sessions。
2. **Native Automation & Nodes** — 移动端 Automations 功能对齐，Android 前台 Voice Wake，Linux headless nodes 暴露摄像头、位置和通知能力。
3. **安全通道改进** — 修复 Telegram 重启后 durable-ingress 丢失；Signal stop/approval 控制在活跃 turn 期间保持响应。
4. **Guided Control UI Setup** — 从 Settings 配置 model providers，引导式 channel 设置。
5. **Gateway & Session Recovery** — 防止 restart admission 卡死 Gateway；one-shot cron jobs 在 lifecycle claim race 中保持 enabled。
6. **安装打包** — Linux deb 和 AppImage bundles，Windows winget 安装后立即继续。
7. **ClickClack 引导设置** — `openclaw onboard` 配置 ClickClack。

## Part 2: Claude Code 更新

1. **Artifacts 调用 MCP Connectors** — 发布的 artifact 可实时调用 MCP connectors 获取数据，支持 public sharing links。
2. **Screen Reader Mode** — 无障碍模式，`claude --ax-screen-reader` 启动。
3. **/fork → Background Session** — 复制对话到新 background session，原功能改为 `/subtask`。
4. **Auto Mode 无需 Opt-in** — Bedrock、Google Cloud、Microsoft Foundry 直接可用。
5. **MCP 长时调用自动后台化** — 超 2 分钟自动后台，`CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS` 可调。
6. **Corporate Launcher** — `CLAUDE_CODE_PROCESS_WRAPPER` 支持。

## Part 3: 🔥 生态

- **ClawHub** 现有 13,700+ skills，Skill Vetter 最多下载
- **ykdojo/claude-code-tips** — 40+ tips，5k+ stars，含 dx plugin
- **VoltAgent/awesome-openclaw-skills** — 精选列表，2k+ stars
- **企业 MCP Servers** — Microsoft、AWS、HashiCorp 官方推出
- **⚠️ 安全警告** — Palo Alto Unit42 报告 OpenClaw supply chain risk

## Part 4: 🎮 社区玩法

- **Boris Cherny**（Claude Code 创始人）2026 年零手写代码，完全手机+PR workflow
- **JJEnglert** — 非开发者用 Claude Code 构建 20+ 项目，24 分钟完整指南
- **Multi-agent workflows** — 多 Claude 实例同时处理不同任务
- **dx plugin** — everyday dev workflows 的 skills 集合
- **Voice input** — 语音输入配合多 Claude 协作

## 总结

| 板块 | 状态 | 行动建议 |
|------|------|---------|
| OpenClaw | ✅ v2026.7.2 | 关注 Remote Coding Sessions |
| Claude Code | ✅ 多项新功能 | /fork→background 值得用 |
| 生态 | ⚠️ 安全警告 | 继续用 skill-vetter |
| 社区 | 🔥 活跃 | ykdojo tips 值得翻阅 |

---
*NONO 🏠 | 2026-07-28 | 搜索 6+ 轮 | 来源：Tavily, GitHub, Twitter/X*
