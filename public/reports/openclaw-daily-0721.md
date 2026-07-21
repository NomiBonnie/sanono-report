# OpenClaw + Claude Code 每日调研 — 2026-07-21

---

## Part 1: OpenClaw 本体

### OpenClaw v2026.7.1 正式发布 🟢

7 月 14 日，OpenClaw 将 7 月 beta 流推入稳定版。**v2026.7.1** 是一次大版本更新：

**Control UI 全面重构**
- 多 session 并排/分屏面板，支持拖拽放置，刷新后恢复布局
- 全新 Sessions 页面：pin、分组、重命名、fork、归档、标记已读
- 实时 Tasks 页面：查看/取消后台任务
- Composer 改进：附件、模型选择、语音、推理状态在移动端/桌面端统一可用
- Usage 页面大幅优化：7/30/90 天图表，provider/model/agent/channel 分成占比，支持 Anthropic/OpenAI 账单明细

**模型与 Provider**
- 新增 GPT-5.6 兼容、腾讯 Hy3、Meta Muse Spark 1.1 支持
- Provider 路由体系保持独立认证、模型限制、工具行为

**官方 App 大更新**
- iOS / Android / macOS App 全面更新：设置、导航、聊天、语音、Apple Watch、权限、本地化
- 支持从 Control UI 生成移动端配对 QR/代码

**Codex 和 Coding Agent 工作流增强**
- 更强的连接编码代理工作流
- Crash loop 现在会停下来等待修复，而非无限循环

**其他改进**
- Telegram/Slack/Discord/Apple Messages 各自收到大量修复
- Gateway crash loop 恢复、定时任务、远程浏览器控制、工作区终端改进
- Session 连续性和内存管理优化

**⚠️ 升级建议：** 实测报告显示这是一个靠谱的升级候选版本，但建议先验证 Node 兼容性、默认模型路由、插件设置后再升级。

---

## Part 2: Claude Code 本体

### Claude Code v2.1.207–v2.1.212 更新 🟢

本周 Claude Code 发布多个重要更新：

**🔥 Artifacts 支持 MCP 实时数据**
- 发布的 Artifact 现在可以在每次查看时调用 MCP connector 获取实时数据
- Dashboard 不再是快照，而是活的实时数据展示
- 支持公开分享链接、Team/Enterprise 编辑者角色
- 示例：GitHub PR dashboard 每次加载都拉取最新数据

**♿ Screen Reader 模式**
- 新增 `--ax-screen-reader` 标志，用纯文本线性输出替代视觉终端界面
- 支持 VoiceOver/NVDA，可通过环境变量或全局设置开启

**`/fork` → 后台 session**
- `/fork` 现在将对话复制到独立的后台 session（在 `claude agents` 中有自己的行）
- 原来的 in-session fork 改为 `/subtask`

**MCP 长任务自动后台化**
- MCP 工具调用超过 2 分钟自动移到后台，session 保持可用
- 阈值可通过 `CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS` 配置

**其他更新**
- Auto mode 不再需要 opt-in（Bedrock/GCP/Foundry）
- `claude auto-mode reset` 恢复默认配置
- 企业 `processWrapper` 设置支持
- Vim 模式 `jj` → Escape 映射
- WebSearch 和 subagent 生成上限（默认 200/session）
- 权限 "Always allow" 保存在 repo 根目录，跨 worktree 持久化
- Bedrock/GCP/AWS 默认切换到 Claude Opus 4.8
- 工具调用显示实时计时器

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### MCP 规范重大更新：2026-07-28 Release Candidate 🟢

MCP 规范发布了自创建以来最大的一次修订 RC：

**核心变化：协议变为无状态**
- 移除 `initialize/initialized` 握手
- 移除 `Mcp-Session-Id` header
- 每个请求自包含，任何服务器实例都能处理
- 实际效果：远程 MCP server 不再需要 sticky sessions，可以用普通 round-robin 负载均衡

**Extensions 体系**
- Extensions 用反向 DNS ID 标识，独立版本化
- MCP Apps：服务器可以渲染 HTML UI，host 在沙盒 iframe 中展示
- Tasks extension：服务器可返回 task handle，客户端通过 `tasks/get/update/cancel` 驱动长任务

**授权改进**
- OAuth/OIDC 对齐，客户端声明 `application_type` 避免 redirect URI 问题

**⚠️ 对 Sam 的影响：** 无状态协议对 OpenClaw 的 MCP 集成是利好——更轻量、更可靠。但这是 breaking change，已有的 MCP server 需要适配。正式规范 7/28 发布。

### 热门 MCP Servers（2026 年 7 月）🟢

| Server | 功能 | 状态 |
|--------|------|------|
| **Playwright MCP** | 浏览器自动化（点击/输入/测试/爬取）| #1 最热，Microsoft 支持 |
| **GitHub MCP** | PR/Issue/代码操作 | 开发者必备 |
| **Vercel MCP** | 查看线上部署状态 | 部署相关 |
| **Figma MCP** | 设计文件访问 | 设计师用 |
| **Zotero MCP** | 文献库语义搜索 | 新上架，学术场景 |
| **Tailscale MCP** | Tailnet 设备/用户/策略管理 | 新上架，适合 Sam |
| **LINE Chat MCP** | 本地 LINE 聊天记录日报 | 新上架，日本市场 |
| **WPF Inspector MCP** | WPF 应用调试/UI 自动化 | 新上架，Windows 开发 |

**🎯 Sam 推荐：** Tailscale MCP 值得关注——如果你在用 Tailscale 管理设备，这个 MCP 可以让 agent 直接操作 tailnet。

### ClawHub 生态现状 🟡

- ClawHub 已超 13,000 个社区 skill
- Awesome OpenClaw Skills（VoltAgent 维护）筛选了 5,400+ 高质量 skill
- 热门 skill：Capability Evolver（agent 自我改进）、web-search、deep-research、memory-wiki、coding-agent
- 安全提醒：安装前检查 VirusTotal 报告和 `tools` 字段权限

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热门

**1. Boris Cherny（Claude Code 创建者）分享隐藏功能** 🟢
- 来源：[@bcherny](https://x.com/bcherny/status/2038454336355999749)
- 400 万+ 浏览量
- 分享了他最常用的 under-utilized Claude Code 功能

**2. "100 Hours Testing Claude Code vs Codex"** 🟢
- 来源：[@nateherk](https://x.com/nateherk/article/2059377638896971985)
- 定时 prompt 让 Claude Code 进入维护模式，自动保持项目整洁
- 实用技巧：给 Claude Code 设置 recurring prompt

**3. "Claude Code is INSANE Once You Set It Up Right"** 🟡
- 来源：[@PrajwalTomar_](https://x.com/PrajwalTomar_/article/2063238968125333581)
- 三大设置方向：slash commands/sub-agents 可复用工作流 → hooks 确定性后处理 → git worktrees 并行执行

**4. "40 Claude Tricks and Shortcuts"** 🟡
- 来源：[@eng_khairallah1](https://x.com/eng_khairallah1/article/2064997374242504863)
- 核心提醒：别复制粘贴文档内容，直接上传文件让 Claude 读

**5. Elvis（@omarsar0）论 reusable workflows** 🟢
- 花时间构建可复用 workflows/patterns → 随着模型和 agent 能力提升，复合效应疯狂增长
- workflows 可跨 agent 迁移（Claude Code → Codex）
- 长上下文理解和多模态是下一波关键能力

### Hacker News 讨论

**"OpenClaw had a rough week"** 🟡
- 社区讨论 OpenClaw 稳定性问题
- 部分用户转向 Hermes Agent、picoclaw 等替代品
- 反对意见："Is anyone here running OpenClaw productively?"
- **但也有用户表示 v2026.7.1 明显改善了稳定性**

**"Who is using OpenClaw?"（342 points）** 🟢
- 最受欢迎的用法：WhatsApp 接入的日常 LLM，memory 存在 version control 可读可编辑
- 社区分化：有人觉得是 "worse Claude Code"，有人觉得是不可替代的 personal OS

**"Claude Code refuses requests if commits mention OpenClaw"** 🔴
- 争议话题，但实际是误读——更多是 token 相关的边界情况，非故意限制

### 实用技巧汇总

| 技巧 | 来源 | 适用 |
|------|------|------|
| `/fork` 创建后台 session 继续工作 | Claude Code 官方 | Claude Code |
| MCP 长任务 2 分钟自动后台化 | Claude Code 官方 | Claude Code |
| `claude auto-mode reset` 重置 auto mode | Claude Code 官方 | Claude Code |
| Artifacts + MCP = 实时 dashboard | Claude Code 官方 | Claude Code |
| git worktrees 并行执行多任务 | @PrajwalTomar_ | Claude Code |
| 可复用 workflow 跨 agent 迁移 | @omarsar0 | 通用 |
| Control UI 分屏面板管理多 session | OpenClaw v2026.7.1 | OpenClaw |
| Usage 页面查看详细成本分析 | OpenClaw v2026.7.1 | OpenClaw |

---

## 今日要点

1. **OpenClaw v2026.7.1 是大版本**——Control UI 重构值得体验，但升级前做 smoke test
2. **Claude Code Artifacts + MCP 实时数据**——可以做活的 dashboard 了
3. **MCP 规范走向无状态**——7/28 正式发布，breaking change，关注适配
4. **`/fork` 变后台 session**——workflow 更灵活
5. **社区对 OpenClaw 稳定性有争议**——但 7.1 版改善明显

---

*调研时间：2026-07-21 12:00 CST*
*搜索轮次：6 轮（Tavily API）*
*信息可靠度：🟢 官方/一手源 | 🟡 社区/二手转述 | 🔴 未验证/争议*

---

## 信息图

![OpenClaw & Claude Code Daily Infographic](/images/openclaw-daily-0721/infographic.png)
