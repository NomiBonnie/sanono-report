# OpenClaw + Claude Code 每日调研 — 2026-05-12

![OpenClaw + Claude Code Daily Infographic](/images/openclaw-daily-0512/infographic.png)

---

## Part 1: OpenClaw 本体

### 🔄 版本更新：v2026.5.10 已发布（你当前：v2026.4.15）

**⚠️ 建议更新！** 落后多个版本。

**v2026.5.10 主要更新：** 🟢
- **QA/Mantis**: Telegram 实时 PR 证据自动化，Crabbox 录屏捕获，运动 GIF 预览，内联 PR 评论
- **Discord 语音**: 实时语音诊断（说话者轮次、播放重置、打断检测、音频截断分析）
- **Talk**: 新增 `talk.realtime.instructions` 配置项，支持运营者追加实时语音风格指令
- **Gateway/Skills**: 新增 opt-in 私有 skill 归档上传安装路径，通过 `skills.install.allowUploadedArchives` 门控
- **依赖更新**: ACPX 0.33.1, Codex ACP 0.14.0, OpenAI SDK 6.37.0, Google GenAI 2.0.1

**v2026.5.11-pre（未发布流最新）：** 🟡
- **Agent 间通信**: `session.agentToAgent.maxPingPongTurns` 支持设到 20（默认仍为 5）
- **跨 Agent 工具限制**: 新增 `tools.message.crossContext` 沙箱/公共 Agent 限制
- **Fly.io 容器检测**: 自动识别 Fly Machines 容器环境
- **GPT Image 2 / Nano Banana 2**: Fal 路由支持 reference-image 编辑，最多 10/14 输入图
- **Control UI 恢复面板**: 仪表盘空白时显示 HTML 恢复面板

**安全相关：** 🟢
- workspace `.env` 文件不再允许注入 `OPENCLAW_*` 运行时控制键
- Gateway WebSocket 广播需要正确作用域
- 配对设备可见性更严格
- Agent 端 `gateway` 工具对可信运营者路径有更强防护

### 📊 未发布平台工作
- 可插拔沙箱后端
- GitHub `main` 分支直接安装/更新支持
- Firecrawl 支持的搜索和爬取工具
- `/btw` 快速侧问流程
- 更紧的健康监控控制

---

## Part 2: Claude Code 本体

### 🔥 Code w/ Claude 2026 大会（5月6日）— 重磅更新

Anthropic 于 5 月 6 日举办 **Code w/ Claude 2026** 开发者大会。Simon Willison 全程直播记录。核心发布：

**1. Claude Managed Agents 三大新功能** 🟢
- **Multi-Agent Orchestration（公测）**: 创建 Agent 舰队协作解决复杂任务（Commander / Detector / Navigator 模式）
- **Outcomes（公测）**: 定义成功标准，Claude 自动迭代直到达标（rubric-based grading，最多 20 轮）
- **Dreaming（研究预览）**: Agent 在夜间检查历史 session，自动发现遗漏并自我改进，生成新记忆文件

**2. Claude Code Routines** 🟢
- 定时自动化任务（cron 式）
- 示例：每周一 6am 自动生成 changelog newsletter
- 支持本地运行或云端执行

**3. 速率限制翻倍** 🟢
- Pro/Max/Enterprise 用户 5 小时限制翻倍
- Anthropic 与 SpaceX 合作使用 Colossus 数据中心扩容

**4. Claude Code Hooks** 🟢
- 18+ hook 类型，包括 pre-session 注入和 post-compaction hooks
- compaction 后自动重新注入 Agent 身份

**5. CI Auto-Fix** 🟡
- 自动对 PR 提出修复（文档较少，刚发布）

**6. Advisor Strategy** 🟢
- Sonnet 按需调用 Opus 做顾问 → 更高基准 + 更低成本
- 客户 Eve 实现"前沿模型质量，5x 更低成本"

**7. Claude Security Reviews** 🟡
- 自动安全审查功能

**8. Memory for Managed Agents（公测）** 🟢
- 跨 session 学习，文件系统式记忆
- API 控制、审计日志、可移植存储

**其他要点：**
- API 流量同比增长 17 倍
- 无新模型发布（"今天是产品日"）
- Claude Agent SDK 开放给外部开发者
- Opus 4.7 在视觉设计方面有"真正的品味"

### ⚠️ Claude Code 质量事件后续
- Anthropic 发布了 4/23 事件复盘（Opus 4.7 过度冗长导致代码质量问题）
- 承诺更多内部员工使用公开版 Claude Code
- Code Review 工具改进后向客户发布

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### ClawHub 热门 Skills

| Skill | 功能 | Sam 匹配度 |
|---|---|---|
| **AdaptlyPost** | 社交媒体内容自动化发布 | ⭐⭐ |
| **Flowsery** | 流量分析仪表盘接入，referrer/funnel/campaign 分析 | ⭐⭐ |
| **Self-Improving Agent** | Agent 自动分析失败并改进代码和记忆 | ⭐⭐⭐ |
| **Capability Evolver** | Agent 自主重写自己的能力（#1 热门） | ⭐⭐⭐ |
| **SkillScan** | Skill 安全扫描 | ⭐⭐ |

**ClawHub 规模：** 60K+ skills，39M+ 下载，56K+ 认证 skills。⚠️ 13% 有安全标记。

### MCP 生态
- MCP servers 已从 2025 年初的 ~100 个增长到 **5,800+** 🟢
- 企业级 MCP 趋势：Auth0 for AI Agents、K2view 企业数据 MCP、GitHub MCP 等
- 安全挑战：企业 IdP 只看到用户登录服务，不看到 AI Agent 连接

### GitHub Trending
- **AgentCash** (@_rishinsharma): 已在 300+ Claude Code/OpenClaw/Codex 环境中运行，250K API 调用
- 多个 openclaw-skill 相关项目活跃

### Claude Agent SDK
- Anthropic 开放了 Claude Agent SDK，IDE 和 Desktop 都基于同一 SDK 构建
- 外部开发者可用于构建自定义 Agent

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 精选

**1. HTML Brief 替代 Markdown（@claude_code 社区）** 🟢
- 不要写几百行 markdown 给 Claude Code，让它生成 HTML 网页式 brief
- 多页内容链式连接，信息密度更高

**2. 教学即 Skill（@antoniomele101）** 🟢
- OpenClaw 的个性化 + 记忆系统组合，可以替代 6 个家庭教育工具
- "Teaching is now a Claude Code skill"

**3. 非技术工作场景（@nityeshaga）** 🟢
- "Claudie" — 内部项目经理 Bot，用 Claude Code 构建
- Claude Code for non-technical work 2026 年会爆发

**4. 一人 10 人团队效率（@kavinbm）** 🟢
- 7 天内搭建了相当于 10-20 人团队 6-9 个月的工作量
- Claude Code 本地运行 + Git 部署 = 10x 效率

**5. Python 自动化路线（@NoahEpstein_）** 🟡
- 让 Claude Code 直接创建完整 Python 脚本和自动化
- 可直接部署运行

### 实战技巧汇总

- **Spec-driven Development**（Notion 团队分享）: 先写 spec 再让 AI 编码
- **Hooks 用法**: pre-session hook 注入上下文，post-compaction hook 保持 Agent 身份
- **Advisor Strategy**: 用便宜模型 + Opus 顾问 = 质量 + 成本平衡
- **21 个 OpenClaw Power User 技巧**（ClawDocx 整理）: 记忆 hack、模型路由、静默自动化

---

## 🎯 Sam 行动建议

1. **⚠️ 更新 OpenClaw** — 从 v2026.4.15 → v2026.5.10，包含重要安全和稳定性修复
2. **关注 Dreaming 功能** — 非常适合 NOMI/NONO 夜间自我改进场景
3. **评估 Self-Improving Agent / Capability Evolver Skill** — 与我们的经验卡片系统互补
4. **Claude Code Hooks** — post-compaction hook 正是我们 compaction 后身份丢失问题的官方解法
5. **Advisor Strategy** — 可以让 NOMI 用 Sonnet + Opus 顾问模式降成本

---

*调研时间: 2026-05-12 12:21 CST | 搜索轮次: 8 | 来源: Tavily + web_fetch*
