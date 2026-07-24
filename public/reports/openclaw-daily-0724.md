# OpenClaw + Claude Code 每日调研 — 2026-07-24

![OpenClaw Daily Research Infographic](/images/openclaw-daily-0724/infographic.png)


## Part 1: OpenClaw 本体

### v2026.7.1 正式发布 🟢
OpenClaw v2026.7.1 已正式发布，3,063 contributions from 532 contributors。主要更新：

- **Control UI 大改版**：对话、sessions、workspaces、后台任务统一到一个浏览器工作区
- **移动端/桌面端全面升级**：iOS/Android/macOS apps 大更新，覆盖 setup、导航、聊天、语音、Apple Watch、权限、本地化
- **新模型支持**：GPT-5.6 兼容、Tencent Hy3、Meta Muse Spark 1.1、Claude Sonnet 5/Mythos 5、LongCat 2.0
- **Codex 增强**：`openclaw attach` 可启动 Claude Code 临时访问 Gateway session；Codex app-server sessions 支持 resume 和原生 subagent
- **消息平台**：Telegram/Slack/Discord/Apple Messages 各收到大量更新
- **Gateway 崩溃恢复**：反复失败的 Gateway 不再无限重启，留出稳定恢复路径
- **远程浏览器控制**：可配对 Chrome tabs 到远程 Gateway
- **工作区终端**：Control UI、iOS、Android 都可用 guarded workspace terminals

### v2026.7.2-beta.3 预览 🟡
Beta 已发布到 npm `beta` tag，正式版待定。新功能：

- **远程编码 sessions**：在 cloud workers 上运行 Control UI sessions
- **Catalog terminals**：在 Gateway 或 paired-node host 打开 Codex/Claude Code sessions
- **Guided Control UI setup**：从 Settings 配置 model providers，引导式 channel setup
- **macOS paired-node terminals**：原生 app bridge 转发交互输入
- **ClickClack guided setup**：新 channel 集成

⚠️ 生产环境建议留在 2026.7.1-2，beta 仅限测试环境。

---

## Part 2: Claude Code 本体

### Code with Claude 2026 大会 5 大新功能 🟢
Anthropic 在 SF/London/Tokyo 举办 Code with Claude 2026 开发者活动，发布 5 大功能：

1. **Dreaming（研究预览）**：跨 session 的 out-of-band 记忆整合。Agent 在非工作时段"做梦"，自动总结经验、纠错、分享知识。适合多 agent 系统。
2. **Outcomes（公测）**：基于 rubric 的 agent 输出评分。定义"完成"标准，独立 grader 推动 agent 修改直到达标。
3. **Multi-agent Orchestration（公测）**：lead agent 委派工作给 specialist agents，各有独立 context、tools、prompts、models。
4. **Claude Finance**：10 个预建金融 agent 模板 + Moody's MCP app（覆盖 6 亿+公司数据）。Opus 4.7 在 Vals AI Finance Agent benchmark 达 64.37%。
5. **Add-ins**：Claude 直接在 Microsoft Excel/PowerPoint/Word 内工作（Outlook 稍后），不再通过 MCP/connector 间接访问。

### Claude Code 近期修复 🟢
- 修复 transcript 写入失败时的静默丢失（现在有 warning）
- 修复 MCP tool outputs 截断后的内存泄漏
- 修复 screen reader mode 启动公告被截断
- 修复 Remote Control sessions 权限提示不可见
- 修复 background shells 在 session 退出后无法停止

### 80% 代码由 Claude 编写 🟢
Anthropic CEO Dario Amodei 确认：2026 年 5 月 Anthropic 生产代码库中超过 80% 的合并代码由 Claude 编写（非人类），展示了 recursive self-improvement 的早期迹象。

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### MCP 2026-07-28 新规范发布候选 🟢
Model Context Protocol 发布最大一次规范修订：

- **协议层变为无状态**：移除 `Mcp-Session-Id` header 和协议级 session
- **Extensions 机制**：反向 DNS ID 标识，独立版本演进
- **MCP Apps**：服务器可提供交互式 HTML 界面，host 在沙箱 iframe 渲染
- **Tasks extension**：`tools/call` 返回 task handle，客户端通过 `tasks/get/update/cancel` 驱动
- **OIDC 改进**：客户端声明 `application_type`，避免 CLI 被误判为 web app
- **3 个核心功能 deprecated**（12 个月过渡期）

⚠️ 安全提醒：协议本身没变脆弱，但基于新规范构建的 MCP servers 攻击面扩大。

### 2026 年热门 MCP Servers 🟢
- **GitHub MCP**：PR/issues/Actions 管理
- **Filesystem**：本地文件操作
- **Playwright**：浏览器自动化
- **Supabase / Postgres MCP Pro**：数据库
- **Cloudflare**：边缘基础设施
- **Stripe**：支付
- **Sentry**：错误监控
- **Notion**：文档管理
- **Context7**：实时库文档

### OpenClaw Skills/生态动态 🟡
- ClawHub 持续有新 skills 上架
- OpenClaw 2026.7.2 beta 新增 ClickClack channel 集成
- Codex CLI 已 bump 到 0.144.6，对齐 GPT-5.6 上下文 272k limit

---

## Part 4: 🎮 社区玩法 / 小技巧

### 6 个 Claude Code agents 并行语音工作流 🟡
Reddit r/ycombinator 热帖：开发者通过语音指令同时管理 6 个 Claude Code agents 并行工作，自称编码效率提升 5x。核心思路：用语音替代键盘输入，每个 agent 负责不同模块。

### HN: "如何自动化编码工作" 🟢
Hacker News 热门讨论，社区共识：
- 给 agent 写好 `skill.md` 比直接 prompt 效果好得多
- 让模型生成验证脚本（shebang script），agent 可随时 self-check
- Senior Developer 当"指导者"而非"替代品"效果最佳
- 模块化任务拆分 + 背景文档 = 高质量输出

### Claude Code 实战技巧精选 🟢
来自 HN "Getting good results from Claude Code"（490 points）：
- 写 12 步实现文档再让 agent 执行 → 输出高质量模块化代码
- 不需要过度规划，但需要知道自己要什么
- 对于不熟悉的领域直接让 agent 做 = 灾难
- agent 最适合你能 review 的工作

---

## 信息可靠度总结

| 信息 | 可靠度 | 来源 |
|------|--------|------|
| OpenClaw v2026.7.1 | 🟢 | 官方 docs + Reddit + GitHub |
| OpenClaw v2026.7.2 beta | 🟡 | Releasebot + GitHub releases |
| Code with Claude 5 大功能 | 🟢 | MindStudio + VentureBeat + Lenny's Newsletter |
| 80% 代码 AI 编写 | 🟢 | VentureBeat |
| MCP 2026-07-28 RC | 🟢 | 官方 blog.modelcontextprotocol.io |
| 社区玩法 | 🟡 | Reddit + HN（个人经验） |
