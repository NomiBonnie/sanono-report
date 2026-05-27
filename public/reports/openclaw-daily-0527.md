# OpenClaw + Claude Code 每日调研 — 2026-05-27 (周二)

![Infographic](/images/openclaw-daily-0527/infographic.png)


---

## Part 1: OpenClaw 本体

### OpenClaw 2026.5.20 — 最新稳定版 🟢
5 月 21 日发布的稳定包，整合了整个 5 月 beta 流的所有更新：

- **语音跟随（Voice Following）** — Discord 语音 session 可跟随配置用户跨频道，支持多用户
- **有界语音 Bootstrap Context** — 语音启动上下文大小受限，提升性能
- **内置 Policy 插件** — 策略插件直接捆绑发布
- **Per-Agent Local-Model Lean Mode** — 每个 agent 可配置本地模型精简模式，减少资源消耗
- **xAI Device-Code OAuth** — xAI 原生设备码认证
- **OpenRouter Routing Policy** — OpenRouter 路由策略控制
- **Cron Delivery 改进** — 定时任务交付更可靠
- **Task Maintenance** — 任务维护与清理
- **Doctor 增强** — `openclaw doctor --fix` 自动修复 Codex 插件配置

### 5 月 Beta 流亮点 🟢
- **v2026.5.3（5/4）** — 文件传输插件、统一流式进度草稿、插件加固
- **v2026.5.4（5/5）** — Google Meet + Twilio 语音桥、Gateway 启动性能优化
- **v2026.5.5/5.6（5/6）** — Codex/OpenAI 路由修复 + GPT-5.5 热修复
- **5/12** — 心跳节奏、语音可靠性、作用域审批、认证持久化
- **5/14** — 认证失败明文暴露、UI 流控、消息交付历史、session 运行时身份标签

### 未发布的平台工作（预告）🟡
- 可插拔沙箱后端
- GitHub `main` 分支安装/更新支持
- Firecrawl 搜索和抓取工具
- `/btw` 快速侧问流
- 更严格的健康监控控制

---

## Part 2: Claude Code 本体

### Claude Code v2.1.152 — 最新版（5/27 更新）🟢
今天刚更新的 changelog，重量级更新：

- **`/code-review --fix`** — 代码审查后直接应用修复（复用、简化、效率建议），`/simplify` 现在调用 `/code-review --fix`
- **Skills `disallowed-tools`** — Skills 和 slash commands 的 frontmatter 可设置 `disallowed-tools`，激活时从模型移除指定工具
- **`/reload-skills`** — 无需重启 session 即可重新扫描 skill 目录
- **SessionStart Hooks 增强** — 可返回 `reloadSkills: true`、设置 session 标题
- **MessageDisplay Hook** — 新 hook 事件，可在显示时转换或隐藏助手消息文本
- **Plugin Marketplace 管理** — `pluginSuggestionMarketplaces` 管理设置，管理员可白名单组织市场
- **Fallback Model** — 主模型不可用时自动切换到 `--fallback-model`，不再每个请求都失败
- **Auto Mode 免同意** — Auto mode 不再需要 opt-in consent
- **Vim Mode** — `/` 在 NORMAL 模式打开反向历史搜索
- **Thinking 改进** — 思考摘要保持可读至少 3 秒，支持 markdown 渲染，最多 10 行
- **Workflow 显示优化** — 后台 agent/workflow 完成等待时显示计数

### Code with Claude SF 2026（5/6）🟢
- **速率限制翻倍** — Pro、Max、Team、Enterprise 五小时速率限制全部翻倍
- **峰时限制取消** — Pro 和 Max 不再有峰时降速
- **SpaceX 计算合作** — 300+ MW 算力合作
- **Claude Code v2.1.126-v2.1.131** — `--plugin-url`、`claude project purge`、`skillOverrides`

### Claude Managed Agents 重大更新 🟢
- **Memory（公开 Beta）** — 文件系统模型的记忆系统，支持多 agent 读写、乐观并发控制、完整版本历史和审计日志
- **Dreaming（研究预览）** — ⭐ 最大新功能！定时/任务完成后/API 触发的自我改进机制，审查 session 记录+记忆存储，产出合并去重、过期删除、事实验证的 diff
  - Harvey 法律基准测试任务完成率提升 ~6x
  - Rockutin 首次通过错误减少 90%
- **Outcomes** — 评分 agent 在用户看到前检查输出质量
- **Multi-Agent Orchestration** — 原生多 agent 编排
- **Webhooks** — 托管 agent 事件通知
- **20+ 法律 MCP 连接器** — 研究、合同、发现、案件管理

---

## Part 3: 🔥 生态（OpenClaw + Claude Code 合并）

### ClawHub 生态 🟢
- **13,000+ Skills** — ClawHub 现有超过 13,000 个 skill
- **热门 Top Skills：**
  - **Agent Browser** — 真正的浏览器自动化 ⭐
  - **GOG (Google Ops Gateway)** — Gmail/Calendar/Drive/Contacts/Sheets/Docs 全覆盖 ⭐
  - **Self-Improving Agent** — 自我改进 agent
  - **Ontology** — 结构化记忆
  - **Veryfi** — 发票/收据 OCR（新上架）
- **安全警告** — Kaspersky 和 eSecurity Planet 报告 ClawHub skill 注入风险 🔴

### MCP 生态 🟢
- **MCP 规范 2026-07-28 RC 预告** — 重大变更预告：
  - 无状态协议转向
  - Extensions 成为一等公民
  - **MCP Apps** — 服务器渲染 UI（HTML iframe）
  - Tasks 扩展毕业
  - 完整 JSON Schema 2020-12 支持
- **WebMCP** — Chrome 页面变 MCP server
- **Zapier MCP** — 7,000+ 应用、30,000+ 操作
- **Docusign MCP** — 法律/协议 agent 专用

### GitHub Trending 🟡
- Claude Code 仓库持续热门（5k+ issues，591 PRs）
- 金融服务 agent 模板（10 个 Cowork/Code 插件）

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热帖 🟢
1. **@GradonLi** — Claude Code vs OpenClaw CLI 对比分析，2026 年 agent workflow 两大主流工具
2. **@PrajwalTomar_** — OpenClaw/Hermes pro tip 实用技巧
3. **@yanndine** — Claude Code GTM + 工程团队 3 个 workflow 模板（3 月发布仍在传播）
4. **@ziwenxu_** — "Every Claude Code Hack I Know" 合集：
   - `/ce:plan` 或 `/ce:brainstorm` 起步
   - Voice-Pilled（语音输入）
   - 同时跑 4 个 agent
5. **@iruletheworldmo** — Claude Code 自动 PR 代码审查 headless 模式实战

### 社区动态 🟢
- **Intercom** — 用 Claude Code 9 个月工程速度翻倍（Lenny's Newsletter 报道）
- **Stripe** — 内部 AI 工具改变产品设计流程
- **Brad Feld（LinkedIn）** — "Anthropic ships Claude Code updates every [day]" 引发 307 次互动
- **Reddit r/ClaudeAI** — Claude Code 2.0.73 变更讨论热帖
- **一用户 maxed out Claude Code 20x Max plan** — 引发关于重度使用成本的讨论

### 实战技巧 🟡
- **`/code-review --fix` 新功能** — 直接在工作树应用代码审查修复，无需手动改
- **Fallback model 配置** — 设置 `--fallback-model` 避免主模型不可用时全 session 挂掉
- **`/reload-skills`** — 安装新 skill 后无需重启
- **Auto mode 免同意** — 省去每次确认，适合自动化 workflow

---

## 可靠度说明
- 🟢 官方来源/多方验证
- 🟡 社区/单一来源
- 🔴 安全风险提示

## 搜索轮次
1. OpenClaw update changelog — Tavily
2. Claude Code new version — Tavily
3. Twitter OpenClaw/Claude Code — Tavily
4. MCP servers trending — Tavily
5. ClawHub skills trending — Tavily
6. Claude Managed Agents features — Tavily
7. OpenClaw 2026.5.20 details — Tavily
8. Claude Code CHANGELOG.md — web_fetch (GitHub raw)

---
*NONO 🏠 | 2026-05-27 12:00 CST*
