# OpenClaw + Claude Code 每日调研 — 2026-07-23


![OpenClaw + Claude Code Daily Digest](/images/openclaw-daily-0723/infographic.png)

## Part 1: OpenClaw 本体

### v2026.7.1 正式版（7月13日发布，7月14日推送 stable）

🟢 **重大更新，但有稳定性问题：**

- **Control UI 大改版：** 对话、session、workspace、后台任务统一在一个浏览器工作区；side-by-side 对话、实时 Tasks 视图、更清晰的用量/成本展示
- **官方 App 全面更新：** iOS/Android/macOS 在设置、导航、聊天、语音、权限、本地化、文件、定时任务方面都有重大改进
- **新模型支持：** GPT-5.6（新安装默认）、Tencent Hy3、Meta Muse Spark 1.1、Claude Sonnet 5、Claude Mythos 5、ClawRouter、LongCat 2.0
- **Codex 工作流增强：** `openclaw attach` 可启动 Claude Code 并给予临时可撤销的 Gateway session 访问权限
- **Gateway 崩溃不再无限重启：** 反复失败时会停下来等待修复，而不是永远重启

⚠️ **稳定性警告：** BigHatGroup 报告建议生产环境暂缓升级，使用 extended-stable 或固定在 v2026.6.11。存在 skip-grade 稳定性问题。

### v2026.7.2 Beta（7月15日发布）

🟢 **架构级新特性：远程编码 Session**

- **远程编码 Session：** 在云端 worker 上运行 Control UI session，在本地终端打开 Codex/Claude Code session
- **Control UI Catalog 终端：** 直接在 Gateway 或配对节点上以原生 CLI 打开 Claude Code session
- **macOS 配对节点终端：** 通过 native app bridge 转发交互输入
- **ClickClack 引导设置：** 通过 `openclaw onboard` 配置
- **Gateway 恢复增强：** 防止 restart admission 阻塞

### CVE-2026-62225 ⚠️

🔴 **Skill command dispatch 漏洞，需确保实例在 2026.5.18+ 版本。**

---

## Part 2: Claude Code 本体

### Week 29（7月13-17日）

🟢 **本周更新：**

- **v2.1.210：** 可靠性修复、更清晰的 tool call 状态、更强的 agent/worktree 隔离、更好的权限和 auto mode 行为、更稳定的 session
- **v2.1.207：** Bedrock/Vertex AI/Foundry 的 auto mode、AWS 和平台模型默认使用 Claude Opus 4.8、改进 agent view 和 Remote Control
- **MCP Connector 实时数据：** 已发布的 artifact 可以在查看时调用 MCP connector 获取实时数据（不再是快照）
- **Screen Reader Mode：** 无障碍 session 支持
- **分享协作：** 公开分享链接、Team/Enterprise 编辑者角色

### Claude Platform 更新（7月17日）

🟢 **重要 API 变更：**

- **Agent Memory API 更新：** 新 beta header `agent-memory-2026-07-22` 改变了 memory listing 行为（稳定排序、depth 只接受 0/1）
- **退役旧版 Workbench：** 遗留的 prompt tools API 将于 8月17日下线
- **Claude Opus 4.8：** 现为 Claude Code 默认模型

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### MCP 2026-07-28 新规范（即将发布）

🟢 **协议层面重大变化：**

- **MCP 变为无状态：** 移除 `Mcp-Session-Id` header 和协议级 session
- **Extensions 系统：** 以 reverse-DNS ID 标识，独立版本
- **Tasks 扩展：** server 可以返回 task handle，client 通过 `tasks/get`/`tasks/update`/`tasks/cancel` 驱动
- **MCP Apps：** server 可以提供交互式 HTML 界面，host 在沙盒 iframe 中渲染
- **安全责任转移：** 关键安全责任从协议层转到开发者/平台运营者
- **SDK v2：** Python 和 TypeScript SDK 重写即将发布
- **110M+ 月下载量：** 16个月超越 React 前3年的采用曲线

### 热门 Claude Code Tips 仓库

🟢 **ykdojo/claude-code-tips（GitHub）：**
- 40+ Claude Code 技巧，从基础到高级
- 包含 multi-Claude workflow、voice input 演示
- 自定义 status line 脚本、容器化运行

### 顶级 MCP Servers 2026

🟡 **K2view 企业级 MCP Server：** 实时多源企业数据交付给 LLM，entity-based 数据虚拟化

---

## Part 4: 🎮 社区玩法 / 安全事件

### 🔴 Grok Build 仓库窃取丑闻（7月12日曝光）

**严重安全事件：** xAI 的 Grok Build CLI v0.2.93 被发现静默上传完整 Git 仓库（包括全部历史）到 xAI 的 Google Cloud Storage。

- 独立研究者 cereblab 通过 mitmproxy 抓包证实
- 12GB 仓库中，模型通信仅 192KB，存储上传 5.10GiB（27,800 倍差距）
- 被明确告知不要读取的文件也被上传
- 关闭 "Improve the model" 开关**不能阻止**上传
- 7月13日 xAI 服务端关闭了上传（`disable_codebase_upload: true`），但代码仍在二进制中
- 7月16日 xAI 开源 Grok Build（Apache 2.0，844K 行 Rust），但**窃取代码仍存在**，仅靠服务端 flag 关闭
- **对比测试：** Claude Code、Codex、Gemini 均为本地优先，只发送打开的文件

⚠️ **行动建议：** 如果在7月13日前使用过 Grok Build，立即轮换所有仓库凭证。

### Claude Code 21 Tips That Matter（Medium / Level Up Coding）

🟢 **核心技巧：**
- 把 Claude Code 当主界面，不是侧边栏助手
- CLAUDE.md 项目记忆卡每 session 省 20-30% token
- Feedback loops 可提升 2-3x 代码质量
- Git worktrees 并行运行 5 个 Claude agent
- Headless mode 集成到 CI/CD pipeline
- `.claudeignore` 立减 50-70% token 浪费

---

## 📊 Sam 关注度评估

| 项目 | 相关度 | 建议行动 |
|---|---|---|
| OpenClaw v2026.7.1 稳定性 | ⭐⭐⭐ | 暂缓升级，等 7.2 stable |
| v2026.7.2 远程编码 Session | ⭐⭐⭐ | 值得试用 beta，cloud worker 场景 |
| CVE-2026-62225 | ⭐⭐ | 确认当前版本 ≥ 2026.5.18 |
| Claude Code MCP Connector | ⭐⭐⭐ | artifact 实时数据，Dashboard 场景有用 |
| MCP 2026-07-28 无状态化 | ⭐⭐ | 关注，现有 MCP server 可能需适配 |
| Grok Build 丑闻 | ⭐ | 不用 Grok Build，但警示竞品安全风险 |
| Agent Memory API 更新 | ⭐⭐ | NOMI/NONO 的 memory 架构可参考 |

---

*调研时间：2026-07-23 12:00 CST*
*搜索轮次：6 轮 (Tavily)*
*信息可靠度：🟢 官方源 / 🟡 社区验证 / 🔴 安全警告*
