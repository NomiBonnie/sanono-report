# OpenClaw + Claude Code 每日调研 — 2026-07-16

![Daily Intel Report Infographic](/images/openclaw-daily-0716/infographic.png)

## Part 1: OpenClaw 本体

### OpenClaw v2026.7.1 发布 (2026-07-13) 🟢
最新大版本更新，亮点如下：

**Control UI 大改版**
- 全新会话侧边栏：支持 pin、分组、重命名、fork、归档、标记已读
- 多会话分屏：可拖拽放置、可调整大小、刷新后保持布局
- 全新 Tasks 页面：实时查看后台任务，支持取消
- 全新 Usage 页面：按 provider/model/agent/channel 分解费用，支持 7/30/90 天图表
- Composer 升级：附件、模型选择、语音、reasoning 控制更清晰
- 移动端适配：手机/平板/横屏/大屏全面优化

**新模型支持**
- GPT-5.6 兼容
- Tencent Hy3
- Meta Muse Spark 1.1

**移动端 App 大更新**
- iOS / Android / macOS 全面更新：设置、导航、聊天、语音、Apple Watch、权限、本地化
- 支持从 Control UI 生成移动端配对 QR 码

**Codex 与编码 Agent 增强**
- 更强的 Codex 和 connected coding-agent workflow
- 修复 compaction 期间 transcript rotation 丢失用户 prompt 的 bug (#93732)
- Skill Workshop 提案现在限定于选中的 agent (#93773)

**其他修复**
- Gateway crash loop 检测与自动停止修复
- 远程浏览器控制、workspace terminal 改进
- Telegram / Slack / Discord / Apple Messages 各有大量更新

> 📌 **Sam 关注点：** Control UI 分屏和 Tasks 页面对多 agent 管理很有用。v2026.7.1 是值得升级的版本。

---

## Part 2: Claude Code 本体

### Claude Code v2.1.209 (2026-07-14) 🟢
最新版本，Week 28 更新要点：

**🔥 内置浏览器 (Desktop)**
- Claude Code 桌面版现在有内置浏览器！Claude 可以直接打开文档、设计稿或任何网站，像本地 dev server 预览一样交互
- 浏览器沙箱化，可配置是否持久化会话
- 外部站点有安全分类器审查操作

**🔥 /doctor 升级为完整诊断工具**
- 不再只是只读报告，现在能诊断+修复问题
- 检查安装健康、找到未使用的 skills/MCP servers/plugins 及其 context cost
- 去重本地 CLAUDE.md 与 repo 中的版本
- 建议精简 Claude 可从代码库推断的 CLAUDE.md 内容
- 标记慢 hooks
- 别名：`/checkup`

**Auto Mode 安全增强**
- 阻止篡改 session transcript 文件
- `rm -rf` 变量无法解析时会先询问确认
- 后台任务通知现在明确声明"无人工输入"，防止伪造 transcript 中的 approval

**其他改进**
- `/cd` 支持目录路径补全
- `/commit-push-pr` 自动允许 push 到 repo 配置的 push remote
- Agent view 显示彩色状态词和分类器生成的标题，而非原始 tool call 文本
- 自动更新下载改为流式写入磁盘，peak memory 降低约 400MB
- `/code-review` 在 Opus 4.8 上质量提升

**Anthropic "Code with Claude 2026" 大会新功能**
- **Dreaming** — 解决跨 session 记忆退化
- **Outcomes** — 无需人工审查的输出质量执行
- **Multi-agent orchestration** — 复杂任务的多 agent 协调
- **Claude Finance** — 10 个预构建金融 agent
- **Add-ins** — 新的扩展机制

> 📌 **Sam 关注点：** /doctor 对我们的 OpenClaw 系统维护很有价值。内置浏览器是大功能。

---

## Part 3: 🔥 生态 (OpenClaw + Claude Code)

### MCP 生态

**MCP 规范 Release Candidate 发布 (2026-07-28 预告)** 🟡
- 移除 `Mcp-Session-Id` header 和协议级 session (SEP-2567)
- Server-initiated requests 现在只能在处理 client request 时发起 (SEP-2260)
- MCP 已由 Linux Foundation 的 AI & Data Foundation 治理
- Playwright MCP 仍是最热门的 MCP server

**Top MCP Servers 趋势**
- Playwright MCP — 浏览器自动化，开发者首选
- 科研 workflow MCP — 从原始数据到论文的自动化
- 更多 MCP 服务器涌现，生态加速中

### ClawHub Skills

**值得关注的 Skills** 🟡
- **Skill-vetter / SkillScan** — 安全审查 skill，ClawHub 现在要求每个新 skill 必须通过 SkillScan
- **Headless browser skill** — 无头浏览器自动化
- **nano-pdf** — PDF 编辑
- **PollyReach** — 电话号码集成
- **Knowledge graph skill** — 结构化 agent 记忆

**⚠️ 安全警告：clawdhub 恶意 campaign**
- Snyk 安全团队发现 ClawHub 上的恶意 skill campaign（伪装成 "clawdhub"）
- 恶意 skill 内嵌反向 shell
- **提醒：** 安装任何 skill 前必须用 skill-vetter 审查！

### Claude Code 生态

**热门 workflow 模式 (July 2026)**
- Plan-then-build — 超过 1 小时的任务先做计划
- TDD loop — 测试驱动开发循环
- Codebase audit — 代码库审计
- Multi-repo refactor — 跨仓库重构
- Agent swarm — 多 agent 蜂群模式

---

## Part 4: 🎮 社区玩法 / 小技巧

### Claude Code 实用技巧

**10 个 Claude Code Workflow Tips (StayHypd, July 3)** 🟢
- 完整的命令、文件路径和设置步骤
- 包含 5 个文章未展示的额外技巧
- 核心理念：小改进会复合增长

**Claude AI 2026 隐藏功能指南** 🟡
- 10 个加速编码 10x 的隐藏功能
- Opus 4.7 作为核心引擎的 AI-First 开发时代

**社区发现的 Pro Tips**
- "Sonnet 4.6 作为日常驱动，质量、tool use、智能、编码全面提升" — Twitter 热帖
- Claude Routines 自动化 workflow — 本地 vs 远程 routines，API trigger
- 重点从"模型本身"转移到"模型的 harness"— 2025 playbook 的过时内容需要抛弃

### OpenClaw 社区

**OpenClaw Twitter 集成热门玩法**
- 用 OpenClaw agent 自动发推/管理 Twitter 账号
- OpenTweet 作为桥接工具，3 分钟设置
- 安全配置注意事项（账号安全和隐私保护）

---

## 📊 信息可靠度总结

| 信息 | 可靠度 | 来源 |
|---|---|---|
| OpenClaw v2026.7.1 | 🟢 高 | 官方文档 docs.openclaw.ai |
| Claude Code v2.1.209 | 🟢 高 | GitHub releases + releasebot.io |
| Code with Claude 大会功能 | 🟢 高 | Anthropic 官方 + MindStudio 报道 |
| MCP RC 发布 | 🟡 中 | 官方博客预告 |
| ClawHub Skills 趋势 | 🟡 中 | clawhub.ai + DataCamp + Medium |
| clawdhub 恶意 campaign | 🟢 高 | Snyk 安全研究团队 |
| 社区 workflow tips | 🟡 中 | 第三方博客 |
