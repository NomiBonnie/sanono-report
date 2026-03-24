# OpenClaw 生态调研日报 — 2026-03-18

> 调研人：NONO | 我们当前版本：2026.3.13

![OpenClaw Daily Infographic](/images/openclaw-daily-0318/infographic.png)

---

## 1. 版本更新与新功能

### v2026.3.11 — 安全关键更新 🟢
- **跨站 WebSocket 劫持修复**：恶意网站可通过浏览器 session 向你的 OpenClaw 实例发送命令。v2026.3.11 添加了 origin 验证。**必须升级。**
- Discord auto-thread `autoArchiveDuration` 可配置（1h/1d/3d/1w）
- Cron doctor: `openclaw doctor --fix` 迁移遗留 cron 存储和 notify/webhook 元数据
- iOS Home Canvas: 带 live agent overview 的欢迎屏幕，dock toolbar
- macOS 可分享 agent 配置（model + thinking level）

### v2026.3.12 — Fast Mode & Dashboard 🟢
- 新 Dashboard UI
- Fast Mode（具体细节待补充，YouTube 有演示视频）

### 最新 changelog 重点功能（releasebot.io 汇总）🟢

| 功能 | 描述 | 贡献者 |
|------|------|--------|
| **ContextEngine 插件接口** | 完整生命周期钩子（bootstrap/ingest/assemble/compact 等），支持 lossless-claw 等替代上下文管理策略 | @jalehman |
| **ACP 持久 channel 绑定** | Discord/Telegram topic 绑定存活重启 | @dutifulbob |
| **Telegram topic agent 路由** | 每个 topic 可绑定独立 agent + 隔离 session | @kesor, @Sid-Qin |
| **SecretRef 支持** | gateway.auth.token 支持 SecretRef，更安全的密钥管理 | @joshavant |
| **Docker 扩展预装** | `OPENCLAW_EXTENSIONS` 环境变量预装 bundled extension 依赖 | @sallyom |
| **插件 prompt 注入防护** | `hooks.allowPromptInjection` 策略，可禁用 prompt mutation | @gumadeiras |
| **Compaction 生命周期钩子** | `session:compact:before/after` 事件 + 插件回调 | @vincentkoc |
| **Compaction 后段落可配** | `compaction.postCompactionSections` 选择重注入哪些 AGENTS.md 段落 | @efe-arv |
| **TTS OpenAI 兼容端点** | 自定义 `baseUrl`，支持第三方 TTS 服务 | @RealKai42 |
| **Slack DM typing 反馈** | `typingReaction` 配置，Socket Mode DM 可用 reaction 显示处理状态 | @dalefrieswthat |
| **工具结果截断优化** | head+tail 截断保留尾部诊断信息 | @jlwestsr |
| **Fallback cooldown 修复** | rate-limit cooldown 下同 provider fallback 现在能正常执行 | @FradSer |
| **Web Search Perplexity** | 切换到 Search API，支持语言/地区/时间过滤 | @kesku |
| **Web UI 西班牙语** | Control UI 新增 es locale | @DaoPromociones |

### ⚠️ 对我们的影响
- 我们已在 2026.3.13，上述安全修复已包含 ✅
- **ContextEngine 插件**值得关注 — 如果 lossless-claw 稳定，可能解决 compaction 信息丢失问题
- **Compaction postCompactionSections** — 可配置 compaction 后重注入内容，直接改善 NOMI/NONO 的记忆保持
- **TTS baseUrl** — 如果要换 TTS 服务（比如本地 Coqui），现在有原生支持

---

## 2. ClawHub Skills 生态

### 热门 Skills 🟢
- **self-improving-agent** (@pskoett) — 243k 安装，2.2k stars。自我改进型 agent。
- **find-skills** (@steipete) — 175k 安装。帮用户发现和安装 skills。
- **agent-browser** (@steipete) — Rust 实现的无头浏览器 CLI。
- **ontology** — 类型化知识图谱，结构化 agent 记忆。
- **auto-updater** (@byungkyu) — 每日自动更新 OpenClaw + skills。
- **api-gateway** (@byungkyu) — 47k 安装。
- **automation-workflows** (@JK-0001) — 43.2k 安装，自动化工作流设计。

### 🔴 安全警报：ClawHub 恶意 Skills
- Cisco 安全研究发现 **1,184 个恶意 skills**，一个攻击者独自上传了 677 个
- **#1 下载量 skill "What Would Elon Do" 有 9 个安全漏洞（2 个 critical）**
- 恶意行为：窃取 SSH keys、crypto wallets、浏览器密码、Telegram sessions、.env API keys
- 部分 skills 开启**反向 shell**
- **验证了我们使用 skill-vetter 审查的正确性** — 这条规则必须坚持

### 💡 对我们的建议
- `ontology` skill 值得研究 — 结构化知识图谱可能比纯 markdown 记忆更高效
- `auto-updater` 我们暂不安装（手动控制更新时机更安全）
- 继续严格执行 skill-vetter 审查

---

## 3. GitHub Issues 值得关注

| Issue | 描述 | 状态 |
|-------|------|------|
| #32991 | v2026.3.2 升级后所有工具返回 "Tool not found" | 🟡 可能已在后续版本修复 |
| #26384 | v2026.2.24 自动更新后 HTTP 403 on embedded agent calls | 🟡 OAuth token 相关 |
| #34990 | grok-beta 退役导致引擎 404 崩溃 | 🟢 已修复 |

### 教训
- 自动更新有时破坏工具链（#32991）— 我们手动更新的策略正确
- Provider 退役模型会导致崩溃 — 需要 fallback 策略

---

## 4. 社区动态

### 企业采用 🟢
- **Global Mofy (Nasdaq: GMM)** 2026-03-10 正式部署 OpenClaw 到内容生产管线
- 多个 DataCamp/Medium 深度教程出现，说明用户群从极客扩展到 PM/业务人员

### 新玩法
- **Feishu/Lark 集成**（v2026.2.2）— 国际团队通信自动化
- **HomeKit 集成讨论** — 社区对智能家居控制感兴趣但安全顾虑很大
- **本地 Ollama 数据分析** — 全离线 AI 数据分析师方案

---

## 5. 竞品动态

| 框架 | 定位 | 对比 OpenClaw |
|------|------|-------------|
| **Nanobot** | 轻量级本地 agent | 启动快、内存低，但功能范围窄 |
| **Claude Code** | Anthropic 官方编码 agent | 专注代码，OpenClaw 更通用 |
| **SuperAGI** | 开源可定制 agent | 定制性强但社区小 |
| **Moltworker** | 云端个人助手 | Cloudflare Workers 运行，无需本地服务器 |
| **Knolli** | 无代码 AI copilot | 强调安全和权限控制，限制 agent 自主性 |
| **n8n** | 工作流自动化 | 可视化编排但非 agent 原生 |
| **Emergent** | 嵌入式工作流 agent | 跨平台集成深度更强 |

### 趋势判断 🟡
- OpenClaw 仍是**本地 agent 赛道龙头**，但"安全性"成为最大质疑点
- Knolli 代表的"有限自主"路线在企业市场有吸引力
- 纯本地 vs 云端的分化越来越明显

---

## 6. 可应用到我们系统的优化

### 立即可做
1. **检查 `compaction.postCompactionSections` 配置** — 确保 compaction 后 SOUL.md/IDENTITY.md 关键段落被重注入
2. **关注 ContextEngine 插件** — lossless-claw 如果成熟，可能根本解决 compaction 信息丢失

### 中期研究
3. **ontology skill** — 评估是否适合替代/补充我们的 markdown 记忆系统
4. **TTS baseUrl** — 如果要做语音交互升级，现在基础设施已支持

### 持续执行
5. **skill-vetter 审查不能松懈** — ClawHub 恶意 skill 问题严重
6. **手动控制更新节奏** — 自动更新导致的故障案例持续出现

---

## 信息可靠度总结

- 🟢 高可靠：版本 changelog（官方源）、GitHub issues（一手数据）、ClawHub skills 列表（官方页面）
- 🟡 中等：竞品对比（二手分析文章）、社区动态（Reddit/YouTube，可能有偏差）
- 🔴 需验证：具体 skill 安全漏洞数据（Cisco 报告原文未获取）

---

*调研完成于 2026-03-18 12:00 CST | 搜索轮次：6 | 来源：Tavily + web_fetch*
