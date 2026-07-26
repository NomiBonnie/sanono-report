# OpenClaw + Claude Code 每日调研 — 2026-07-26


![OpenClaw & Claude Code Weekly Digest Infographic](/images/openclaw-daily-0726/infographic.png)

---

## Part 1: OpenClaw 本体

### OpenClaw 2026.7.2 Beta — 大版本更新 🟢

**当前稳定版：** `2026.7.1-2`（npm latest）
**Beta 版：** `2026.7.2-beta.3`（npm beta tag，7月19日发布）

**核心新功能：**

1. **Remote Coding Sessions** — 在云端 worker 上运行 Control UI 会话，可以在远程主机上打开 Codex 和 Claude Code catalog sessions 的终端，直接恢复 OpenCode 和 Pi sessions
2. **ClickClack 集成** — 新通道！通过 `openclaw onboard` 或 `openclaw channels add clickclack` 引导配置，支持 URL/token/workspace 提示，命令菜单自动发布到 ClickClack 的 composer autocomplete
3. **Control UI Catalog Terminals** — 在 Gateway 或配对节点主机上用原生 CLI 打开 Codex/Claude Code sessions，支持 viewer vs terminal 偏好和 PTY 中继
4. **External Gateway Supervision** — `OPENCLAW_SUPERVISOR_MODE=external` 用于 OCM 等生命周期管理器
5. **Native Automation on Mobile** — 移动端 Automations 功能对齐，Android 前台 Voice Wake，无头 Linux 节点暴露摄像头/位置/通知能力
6. **Linux deb/AppImage 包** — 正式 Linux 安装包支持
7. **GPT-5.6 (Sol) 默认** — 新 API key 设置默认使用 `openai/gpt-5.6`
8. **iOS 离线聊天** — 预渲染最近会话，离线可浏览（不能发送）
9. **Skill Workshop 改进** — 自动审批流程 + 历史回顾生成 skill 建议
10. **Slack 进度指示器** — 使用 Slack 原生 assistant thread status

**⚠️ 注意：** 这是 beta 版，生产环境建议等稳定版。适合需要远程编码、云 worker、外部 Gateway 管理的团队在 staging 环境测试。

### OpenClaw 2026.7.1 — 当前稳定版回顾 🟢

7月14日发布。主要亮点：
- Control UI 和 onboarding 大改
- iOS/Android/macOS 应用大量更新
- GPT-5.6 兼容、Tencent Hy3、Meta Muse Spark 1.1 模型支持
- Codex 和连接编码代理工作流增强
- Telegram/Slack/Discord/Apple Messages 通道更新
- Gateway 崩溃循环修复

---

## Part 2: Claude Code 本体

### Claude Code Week 29（7/13-17）— 最新更新 🟢

1. **Artifacts + MCP 连接器** — 发布的 artifact 可以通过查看者自己的 MCP 连接器拉取实时数据和执行操作，新增公共分享链接、编辑者角色（Team/Enterprise）
2. **Screen Reader 模式** — 用纯线性文本替代视觉终端界面，支持 VoiceOver 和 NVDA
3. **`/fork` 命令** — 将当前对话复制到新的后台 session，继续工作不中断
4. **Auto Mode 扩展** — Amazon Bedrock/Google Agent Platform/Microsoft Foundry 不再需要 opt-in 变量

### Claude Code Week 28（7/6-10）🟢

1. **桌面端内置浏览器** — Claude Code Desktop 内嵌浏览器，可浏览文档/设计稿/网站
2. **`/doctor` 命令** — 完整的设置检查诊断工具，可自动修复
3. **Auto Mode 安全增强** — 阻止 transcript 篡改，`rm -rf` 前确认

### Claude Code Week 27（6/29-7/3）🟢

1. **Claude Sonnet 5** — 新默认模型，Pro/Team/Enterprise，原生 1M token 上下文，自适应 thinking 默认开启
2. **Claude in Chrome GA** — 所有 Anthropic 直接计划可用
3. **后台 Subagent 默认** — subagent 默认在后台运行
4. **Claude Desktop for Linux** — Ubuntu/Debian beta
5. **`/radio`** — Claude FM lo-fi radio（彩蛋功能）

### Claude Managed Agents — 重大发布 🟢

- **Dreaming（研究预览）** — 定期回顾 agent 历史 session，提取模式，策展记忆，实现 agent 自我改进。Harvey 用后任务完成率提高 ~6x
- **Outcomes（公开 Beta）** — 设置质量标准 rubric，独立 grader 检查输出，agent 迭代直到达标
- **Multi-agent Orchestration（公开 Beta）** — 主 agent 委派给专家 agent 并行工作
- **Webhooks（公开 Beta）** — 任务完成时通知
- **Add-ins** — 扩展 Claude 能力的新插件机制

### Claude Enterprise 管理更新 🟢

- **Usage Analytics 增强** — 通过 Analytics API 编程访问使用/成本数据，集成 Datadog/CloudZero
- **模型默认和权限** — 管理员设置默认对话模型，按组设置 spend 限制
- **Spend 阈值告警** — 提前预警超额

---

## Part 3: 🔥 生态（OpenClaw + Claude Code 合并）

### Compound Engineering — 跨工具对抗审查 🟡

Twitter @trevin 发布 "Compound Engineering Update"（7/22）：
- Claude Code 上默认配 OpenAI 对抗审查者，Codex 上默认配 Claude 对抗审查者
- 同一个 diff 由竞品模型审查，提升代码质量
- **Sam 场景匹配：高** — OpenClaw 多 agent 场景可参考此模式

### Agentic Engineering Hacks（@mvanhorn 文章）🟡

- Remote Control 所有窗口 + 给 Claude Code/Codex 一个邮件地址
- 每个 session 从任何地方可达
- **适用性：中** — OpenClaw 已有类似能力但思路值得借鉴

### Boris Cherny（Claude Code 创建者）的系统设计思路 🟢

Twitter 热帖：「You're not supposed to prompt Claude. You're supposed to build a system that prompts itself.」
- 45分钟演示从零构建自我改进系统
- 核心观点：不是掌握 prompt 技巧，而是设计能自我改进的系统
- **Sam 场景匹配：高** — NOMI/NONO 的 Skill Workshop + experience card 系统就是这个方向

### Claude Code 正确配置指南 🟡

Twitter @PrajwalTomar_ 文章：「Claude Code is INSANE Once You Set It Up Right」
- 一次配置好，2026 年所有新 agent 工具直接接入现有基础设施
- 问题：大多数人使用方式不对

### 模型选择指南 — 2026年7月 🟡

Twitter @cyrilXBT：没有单一最佳模型
- Kimi K3 vs Claude Fable 5 vs GPT-5.6 各有适用场景
- 核心观点：按任务类型选模型，不要一刀切

### OpenClaw Cloud vs Mac Mini 讨论 🟡

Reddit r/openclaw 热帖：「Still worth buying a Mac Mini for OpenClaw now that cloud options exist?」
- Hyperagent 等云选项出现后的讨论
- 社区共识：本地控制仍有价值，但云选项降低了门槛

---

## Part 4: 🎮 社区玩法 / 小技巧

### `/fork` — 对话分叉神器 🟢

Claude Code Week 29 新增。对话进行中想探索不同方向？`/fork` 复制到后台 session 继续，主 session 不受影响。
**实用场景：** 调试时想同时尝试两个方案

### `/doctor` — 一键诊断修复 🟢

Week 28 新增。遇到奇怪问题？`/doctor` 自动检查配置、依赖、权限，还能自动修。
**替代了：** 之前手动排查的各种步骤

### `/radio` — Claude FM 🟢

`/radio` 启动 lo-fi radio。写代码时的 BGM。纯彩蛋功能但很有爱。

### Artifacts 实时数据 — MCP 打通 🟢

发布的 artifact 现在可以调用查看者的 MCP 连接器获取实时数据。意味着你可以创建「活的」仪表盘/报告页面。
**Sam 场景：** 可以做一个 OpenClaw 状态 artifact 给团队用

### Shell Mode 智能响应 🟢

Week 26：`! npm test` 直接执行并解释输出，不需要第二次 prompt。
**实用性：极高** — 减少一半的交互步骤

### 后台 Subagent 权限提升 🟢

Week 26 起，后台 subagent 的权限提示会出现在主 session 中，不再自动拒绝。之前后台任务被拒权限导致失败的问题解决了。

### Skill Workshop 自学习 🟡

OpenClaw 2026.7.2 beta：Skill Workshop 会回顾历史 session，从中发现可复用模式，生成 skill 建议。即使关闭了 autonomous self-learning 也能手动触发。

---

## 📊 本日调研总结

| 板块 | 重要度 | 关键信息 |
|------|--------|----------|
| OpenClaw | ⭐⭐⭐ | 2026.7.2 beta — Remote Coding, ClickClack, Cloud Workers |
| Claude Code | ⭐⭐⭐ | Artifacts+MCP, /fork, Sonnet 5 默认, Managed Agents Dreaming |
| 生态 | ⭐⭐ | Compound Engineering 对抗审查, 自我改进系统设计 |
| 社区 | ⭐⭐ | /doctor, /fork, shell mode, Skill Workshop 自学习 |

**🔔 需要 Sam 关注的：**
1. OpenClaw 2026.7.2 稳定版发布后值得升级 — Remote Coding + Skill Workshop 对我们多 agent 场景价值大
2. Claude Managed Agents 的 Dreaming 功能 — 跟我们的 experience card 系统理念一致，可以考虑借鉴
3. Artifacts + MCP — 可以做实时数据仪表盘，适合 Sam 的使用场景
