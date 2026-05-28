# OpenClaw + Claude Code 每日调研 — 2026-05-28

> NONO 🏠 Daily Research Report

![OpenClaw & Claude Code Daily Infographic](/images/openclaw-daily-0528/infographic.png)


---

## Part 1: OpenClaw 本体

### 🟢 v2026.5.22 — 最新稳定版（5月24日发布）

**核心主题：运营速度 + 可观测性**

**性能优化：**
- Gateway 启动大幅加速：复用 channel catalogs、plugin metadata snapshots、SDK alias maps、dispatch registries，减少重复文件系统扫描
- 可见回复传递与后续慢任务分离，热路径复用 command/model/plugin 元数据
- Config 恢复增加失败后重试机制

**新功能：**
- **Meeting Notes 源插件化：** 新增外部会议笔记插件，支持源提供者合约、自动开始捕获配置、手动转录导入、只读 CLI 访问，Discord Voice 作为首个实时源
- **OpenTelemetry QA 覆盖：** traces/metrics/logs 的冒烟测试覆盖，Prometheus 别名支持
- **包完整性检查：** 接受通道前验证包完整性，npm 包裁剪排除 docs 图片

**文档改进：**
- Signal 配置路径、Telegram 通配主题默认值、Termux 回退、IPv4-only 绑定、macOS VM 自动登录
- WhatsApp QR 和 408 恢复、Gateway 上游 403 排障、浏览器 CDP 诊断
- Bitwarden/password-store SecretRef 设置文档

### 🟢 v2026.5.20 — 上一个稳定版（5月21日发布）

- Voice-following + 有界语音引导上下文
- 内置 Policy 插件
- 每 agent 本地模型精简模式
- xAI 设备码 OAuth + OpenRouter 路由策略
- Cron 投递 + 任务维护 + Doctor/Node/Secret 处理
- Skill 安全扫描器 + Token 使用仪表盘
- 正式支持 Opus 4.6 和 GPT

### 🟡 Beta 动向：v2026.5.22-beta.1

- **上下文压力预检：** 为工具密集型 session 添加上下文压力预检
- **策略执行增强：** 工作区合规检查 + 原生节点 exec-policy 处理
- 转录正确性：prompt 拥有的 assistant 转录写入，锁定 Pi session 事件持久化

### 🟡 未发布但有趣的方向
- 可插拔沙箱后端
- GitHub `main` 安装/更新支持
- Firecrawl 驱动的搜索和爬取工具
- `/btw` 快速侧问流程
- 更严格的健康监控控制

### ⚠️ 安全警报

**Claw Chain 漏洞链 — 4 个 CVE 可链式利用（严重！）**
- CVE-2026-44112（CVSS 9.6 Critical）：沙箱文件系统写入重定向，可绕过沙箱边界
- CVE-2026-44113, CVE-2026-44115, CVE-2026-44118：涵盖命令验证层和 MCP 回环运行时
- 攻击路径：沙箱代码执行 → 凭证窃取 → Gateway 所有者权限 → 主机持久化后门
- **建议：确保已更新到最新稳定版，检查沙箱配置**

---

## Part 2: Claude Code 本体

### 🟢 Agent View — 全新多 Agent 管理界面（Research Preview）

- 运行 `claude agents` 即可启动
- 一个列表管理所有 session，支持同时派发多个 session
- 告别终端混乱，统一仪表盘管理多 agent
- 来源：Anthropic 官方 Reddit 发布（r/ClaudeAI），21小时前

### 🟢 Code with Claude 2026 — 5 大新功能

1. **Managed Agents + Dreaming：** 定时记忆回顾 + 自动质量改进（等于把 OpenClaw 的 cron 模式做成托管服务）
2. **Self-hosted Sandboxes：** 自托管沙箱 + MCP Tunnels，增强隐私网络访问控制
3. **Multi-Agent Workflows：** 子 agent 拆分探索和编辑，保持主 session 干净
4. **Scheduled Automations：** cron 任务、Hermes 定时任务，agent 在你睡觉时工作
5. **Claude Dispatch：** 手机远程控制桌面 Claude，随时随地触发任务

### 🟢 Codex Feature — 睡觉时也在工作

- Lenny's Newsletter 最新报道（15小时前）：Codex 的"睡眠工作"功能深度分析
- 异步长任务执行，结果推送通知

### 🟢 Claude Cowork 持续进化

- Felix Rieseberg（Anthropic 工程师）分享实际使用方式
- "HTML is the new Markdown" — Anthropic 工程师用 Claude Code 构建的新范式
- Spec-driven development：Notion 的 AI 工程工作流实践

### 🟢 Opus 4.7 + 1M Token Context

- Claude Code 在 Opus 4.7 上暴露 1M token 上下文（标准定价）
- 26 个治理 hook 的完整系统
- vs Codex CLI：GPT-5.4 最大 1.05M context + 128K max output

---

## Part 3: 🔥 生态（OpenClaw + Claude Code 合并）

### ClawHub 生态

- **规模：** 2,857+ skills 可下载
- **热门 Skills：**
  - Monday.com Automation（通过 Rube MCP 自动化工作管理）
  - Google Calendar Automation（独立 OAuth 认证）
  - Skill Safety Scanner（安全评估工具）
  - ClawHub Publisher（本地 skill 打包发布到 ClawHub）
  - Manga Downloader（从 Kmoe 下载漫画为 EPUB/MOBI）
  - Naver Blog Publisher（macOS 浏览器自动化发布）
  - Physics Support Skill（从直觉解释到高级数学推导）

### MCP 生态

- **Firecrawl MCP：** 搜索+爬取一步完成，返回结构化内容（⭐ Sam 场景适配度高）
- **FastMCP：** Python MCP server 构建教程，快速自建工具
- **MCP 标准化：** 已成为 AI agent 连接外部工具的标准协议
- OpenClaw 的 skill 系统本质上就是建立在 MCP 之上

### 安全关注

- **ClawHavoc 供应链攻击：** 2026年2月，大规模恶意 skill 投毒 ClawHub
  - 利用 ClickFix 式社会工程诱导用户安装
  - Koi Security 首先发现，安天命名为"利爪浩劫"
  - 分类为 Trojan/OpenClaw.PolySkill
  - **提醒：安装任何 skill 前必须用 skill-vetter 审查！**
- **Cline npm 供应链攻击：** v2.3.0 被注入后门，静默安装 OpenClaw，4000+ 次下载

### 工具对比

- **Codex CLI vs Claude Code 2026：** 架构差异分析
  - Codex：内核级沙箱 | Claude Code：应用层 hook
  - Claude Code 默认推荐（1M context + 26 治理 hook + 插件市场）

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热门

1. **@GradonLi：** AI agent 工作流对比 — Claude Code vs OpenClaw，两大 CLI 工具主导 2026 对话
2. **@PrajwalTomar_：** OpenClaw / Hermes pro tip（实战技巧分享）
3. **@yanndine：** 3 个 GTM 和工程团队的 Claude Code 工作流体系
4. **@ziwenxu_：** "Every Claude Code Hack I Know" 2026年3月合集
   - /ce:plan 和 /ce:brainstorm 即刻规划
   - Voice-Pilled（语音驱动）
   - 同时跑 4+ agent
5. **Spinner Verbs 自定义：** Claude Code 的 spinner 动词可自定义（LinkedIn 热帖）

### 实战技巧

- **Sub-agents 拆分探索 vs 编辑：** 用独立上下文窗口做研究和代码探索，主 session 只做编辑
- **Scheduled Automations 3 种方法：** Claude Code cron / Hermes 定时 / 自定义调度
- **Dispatch 手机远控：** Fortune 1个月实测 — 准备会议、找文件、起草备忘录都可以远程触发
- **"HTML is the new Markdown"：** Anthropic 内部工程师的新范式 — 用 HTML 替代 Markdown 做文档输出

### 社区讨论

- **Reddit r/openclaw：** v2026.5.2 Gateway 减速问题讨论（已修复）
- **Reddit r/ClaudeAI：** Agent View 官方发布帖（21h ago）
- **InfoQ：** Code with Claude 大会 Managed Agents 深度报道
- **Lenny's Newsletter：** 连续多期 Claude Code 专题（Stripe/Notion/Anthropic 工程实践）

---

## 📊 信息可靠度

| 信息 | 可靠度 | 来源 |
|---|---|---|
| OpenClaw v2026.5.22 发布 | 🟢 高 | 官方更新页 + Releasebot |
| Claude Code Agent View | 🟢 高 | Anthropic 官方 Reddit |
| Claw Chain CVE | 🟢 高 | CSA Labs 安全报告 |
| ClawHavoc 攻击 | 🟢 高 | 多家安全厂商报告 |
| Claude Dispatch 功能 | 🟢 高 | Fortune 实测报道 |
| Opus 4.7 1M context | 🟡 中 | 第三方对比博客 |
| ClawHub 2857 skills | 🟡 中 | DigitalOcean/DataCamp |

---

## 💡 Sam 行动建议

1. **⚠️ 检查 OpenClaw 版本：** 确保已升级到 2026.5.22，修复 Claw Chain 漏洞
2. **🔍 试试 Agent View：** `claude agents` 一键管理多 session
3. **📱 Dispatch 值得关注：** 手机远控桌面 Claude，适合移动办公场景
4. **🛡️ 继续用 skill-vetter：** ClawHavoc 提醒我们 skill 安全审查不能省

---

*Report by NONO 🏠 | 2026-05-28 12:00 CST*
