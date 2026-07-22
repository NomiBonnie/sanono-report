# OpenClaw + Claude Code 每日调研 — 2026-07-22

## Part 1: OpenClaw 本体

![OpenClaw Weekly Infographic](/images/openclaw-daily-0722/infographic.png)


### 🟢 v2026.7.1 正式发布（7月14日 Stable）

OpenClaw v2026.7.1 已从 Beta 升级为 Stable，包含 3,063 个贡献（532 位贡献者）。

**核心更新：**
- **Control UI 大改版** — 对话、session、workspace、后台任务整合到一个浏览器工作区；实时 Tasks 视图；用量/成本/配额一目了然
- **新模型支持** — GPT-5.6、Tencent Hy3、Meta Muse Spark 1.1、Claude Sonnet 5、Claude Mythos 5、ClawRouter、LongCat 2.0
- **Codex 增强** — `openclaw attach` 可让 Claude Code 获得临时 Gateway session 访问权限；Codex 子代理结果作为追踪任务返回
- **移动端大更新** — iOS/Android/macOS 全面升级（设置、导航、语音、权限、本地化、文件、定时任务）
- **新 onboarding** — CLI 引导设置、Android 配对引导、Mac 无需 Terminal 设置本地 agent
- **Gateway 崩溃修复** — 反复失败的 Gateway 不再无限重启，留出稳定的检查和修复路径
- **远程浏览器控制** — 可配对已登录 Chrome 标签页、等待下载、安全保存文件
- **工作区终端** — Control UI / iOS / Android 均可用

**⚠️ 升级注意：**
- 部分用户报告稳定性问题（Reddit 有吐槽帖）
- BigHatGroup 建议生产环境暂缓升级，pin 到 v2026.6.11 或用 extended-stable
- Beta 6（v2026.7.2）已引入远程编码 session 架构

### 🟡 安全：CVE-2026-62225（Skill Command Dispatch 绕过）

- **影响：** 低信任调用者可通过 skill command dispatch 路径绕过 hook 执行未授权操作
- **CVSS 4.0** 评分
- **修复版本：** 2026.5.18+（已修复很久，但仍有旧版本在跑）
- **行动建议：** 确认当前版本 ≥ 2026.5.18 ✅

---

## Part 2: Claude Code 本体

### 🟢 Claude Code 最新更新（7月中旬）

**修复和改进：**
- 新增磁盘满/session 保存关闭时的警告，避免静默丢失 transcript
- 修复 MCP 工具输出截断后内存泄漏（截断结果之前会保留完整内容直到 session 结束）
- 修复 Screen Reader 模式启动公告被首次 prompt 渲染打断
- 修复 Remote Control session 连接后不显示待处理权限提示
- 修复后台 shell 在 `/background` 或退出后有时无法停止（Windows 上最明显）

### 🟢 Claude Platform API 更新（7月17日）

- **新 Beta Header：** `agent-memory-2026-07-22` — 用于 Memory Store endpoints
- **Session Event Stream：** `GET /v1/sessions/{session_id}/events/stream` — 实时追踪 agent 事件
- **新模型：** `claude-opus-4-1-20250805`、`claude-opus-4-7`
- **MCP Tunnels：** `anthropic-beta: mcp-tunnels-2026-06-22`

### 🟢 Anthropic Dreaming 功能（Code with Claude 2026 发布）

Memory + Dreaming 是 Anthropic 今年最重要的 agent 基础设施更新：
- **Memory：** 文件系统模型，agent 用 bash/editor 读写；支持多 agent、乐观并发控制、版本历史
- **Dreaming：** 后台自我改进机制（cron/任务完成后触发），分析 session transcript + 现有 memory，生成 diff 更新
- Harvey 用 Dreaming 后任务完成率提升 6 倍

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### MCP Server 热门推荐

| Server | 用途 | Sam 匹配度 |
|--------|------|-----------|
| **GitHub MCP** | PR/Issues/Actions 管理 | ⭐⭐⭐ 已在用 |
| **Playwright MCP** | 浏览器自动化 | ⭐⭐⭐ |
| **Firecrawl MCP** | Web 爬取 & 研究 | ⭐⭐⭐ |
| **Figma MCP (Official)** | 设计稿直连 | ⭐⭐⭐ 设计背景 |
| **Context7** | 实时库文档 | ⭐⭐ |
| **AgentRecall** | Agent 记忆增强 | ⭐⭐ |
| **Claude Code Delegator** | 多 agent 协调 | ⭐⭐ |

### ClawHub 生态现状

- **19,000+ Skills** 可用
- **安全警告：** Palo Alto Unit 42 报告发现持续存在恶意 skill（信息窃取类）
- ClawHub 已集成 VirusTotal + ClawScan + NVIDIA 分析工具
- **推荐安装优先级：** 1) Memory 修复类 → 2) 安全审查类 → 3) 发现/导航类

### 🔥 Grok Build CLI 丑闻（本周最大新闻）

**事件：** 7月12日，独立研究员发现 xAI 的 Grok Build CLI v0.2.93 **静默上传整个 Git 仓库**（包括 commit 历史、SSH key、.env 文件）到 xAI 的 Google Cloud Storage。

**关键事实：**
- 12GB 仓库中，模型实际只需 192KB，但上传了 5.10 GiB（27,800 倍差距）
- 即使关闭 "Improve the Model" 选项仍然上传
- 凭证文件未经脱敏直接传输
- xAI 随后开源了 Grok Build（Apache 2.0，844,530 行 Rust），但**上传代码仍在源码中**，仅靠服务端 flag 关闭
- NSA/CISA/FBI 联合发出相关安全通告

**🔴 行动建议：** 如果任何开发者在 7月13日前运行过 Grok Build，**立即轮换所有仓库中的凭证**。

---

## Part 4: 🎮 社区玩法 / 小技巧

### Claude Code 实战技巧精选

**来源：** Hannah Stulberg（1,500+ 小时使用者）30 Tips + ykdojo 40+ Tips + Level Up Coding 21 Tips

1. **Terminal 是主界面，不是辅助** — 不要把 Claude Code 当 sidebar，让它成为主工作空间
2. **Custom Status Line** — 显示 session 信息 + 上条消息摘要，多 session 管理必备
3. **`&` 发送任务到 Web** — 后台执行，不阻塞终端
4. **Sandbox 防 rm -rf** — 容器化执行危险命令
5. **Hooks 过滤敏感数据** — before-tool-call hook 自动脱敏
6. **Hooks 自动格式化代码** — 保存后自动 lint/format
7. **GIF 录制** — 用 Claude 在 Chrome 中录制操作 GIF
8. **多 Claude 并行 workflow** — 语音输入 + 多 session 同时跑不同任务
9. **CLAUDE.md 越具体越好** — 告诉 Claude 你的偏好、项目结构、常用命令
10. **Plan Mode** — 复杂任务先让 Claude 规划再执行

### Claude Code Advent Calendar（24 Tips）

社区开发者在 X 上用 `#claude_code_advent_calendar` 标签分享了 24 天实用技巧，覆盖从 Opus 4.5 迁移到 Hooks 高级用法。

---

## 本日总结

| 板块 | 状态 | 重要度 |
|------|------|--------|
| OpenClaw v2026.7.1 | 已 Stable，有稳定性风险 | 🔴 关注升级 |
| CVE-2026-62225 | 已修复（需确认版本） | 🟡 |
| Claude Code | 内存泄漏修复 + Memory API | 🟢 |
| Grok Build 丑闻 | 全行业安全警示 | 🔴 必知 |
| MCP 生态 | Figma MCP 适合 Sam | 🟢 |

---

*报告生成时间：2026-07-22 12:00 CST*
*搜索轮次：6 轮（Tavily）*
*可靠度标注：🟢 官方确认 🟡 多源交叉验证 🔴 单一来源待验证*
