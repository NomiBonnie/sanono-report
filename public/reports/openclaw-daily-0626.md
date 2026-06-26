# OpenClaw + Claude Code 每日调研 — 2026-06-26  
  

![OpenClaw + Claude Code Daily Intel Infographic](/images/openclaw-daily-0626/infographic.png)

## Part 1: OpenClaw 本体  
  
### 当前版本：2026.6.10（稳定）/ 2026.6.11-beta.1  
  
**本周更新要点：**  
  
- **2026.6.11 广泛更新**：更强的 channel 控制、更丰富的 agent workflow、更安全的 plugin 分发、改进的移动端设置 🟢  
- **2026.6.10 亮点**：Automatic fast mode for talks — 短对话自动启用 fast mode，长对话恢复正常 🟢  
- **2026.6.5**：新增 Skill Safety Scanner（技能安全扫描器）、Token Usage Dashboard、正式支持 Opus 4.6 和 GPT 🟢  
- **2026.6.1**：Skill Workshop 发布 — 完整的技能提案生命周期（创建→审核→部署）；NVIDIA Skill Cards 🟢  
  
**架构方向：** OpenClaw 正把 agent 运维变成显式基础设施 — 可配置的 compaction 等待、有证据的 channel 修复、更安全的 cron 默认值、通过 MCP bridge 暴露 skills。  
  
**建议：** 保持 2026.6.10 稳定版，除非需要 6.11-beta.1 的特定修复。  
  
---  
  
## Part 2: Claude Code 本体  
  
### 重大更新  
  
| 功能 | 状态 | 详情 |  
|------|------|------|  
| **Auto Mode (Pro)** | ✅ 已上线 | Pro 账户支持 auto mode，使用 Sonnet 4.6 + Opus，后台安全检查替代权限提示 🟢 |  
| **/ultrareview** | 公开研究预览 | 云端 bug 猎手军团，findings 自动返回 CLI/Desktop 🟢 |  
| **/code-review** | Week 21 新增 | 报告正确性 bug（不只是风格问题） 🟢 |  
| **/usage** | Week 21 新增 | 按 skill/subagent/plugin/MCP server 拆分用量 🟢 |  
| **Background Sessions** | 已上线 | 出现在 /resume，pin 后保持存活 🟢 |  
| **Session Recap** | 已上线 | 终端失焦时自动记录发生了什么 🟢 |  
| **Custom Themes** | 已上线 | /theme 或 plugin 构建和发布配色方案 🟡 |  
| **Ultra Code Mode** | 已上线 | 最高 effort 设置，extended thinking + 自动并行 sub-agent 编排 🟢 |  
| **Ultraplan** | v2.1.92 | 云端草拟计划 → 浏览器审核 → 任何地方执行 🟢 |  
  
### Agent SDK 计费变更 — 已暂停！  
  
Anthropic 原计划 6/15 将 Agent SDK / `claude -p` 用量从订阅池分离。**现已确认暂停，不生效。** 对 Sam 来说好消息 — 自动化 workflow 无影响。🟢  
  
### 安全关注  
  
CyberScoop 报道：Backslash Security 发现 Claude Code 在 4-6 月间修补了数十个安全漏洞。Anthropic 在持续修补中。🟡  
  
---  
  
## Part 3: 🔥 生态（OpenClaw + Claude Code）  
  
### MCP 协议重大进展  
  
- **2026-07-28 RC（即将发布）**：MCP 协议将变为 **无状态**！客户端可路由到任何服务器实例，无需 session store 🟢  
- **MCP Apps**：服务端渲染 HTML UI，宿主在沙盒 iframe 中展示 — server 可以有界面了 🟢  
- **Extensions 一等公民**：新能力作为 opt-in extension 发布，稳定后再考虑进规范 🟢  
- **Full JSON Schema 2020-12 for Tools**：工具定义更精确 🟢  
- **WebMCP**：任何 Chrome 页面变成 MCP server（The New Stack 报道）🟡  
  
### 生态亮点  
  
| 项目/工具 | 说明 | Sam 匹配度 |  
|-----------|------|-----------|  
| **OpenClaw Skill Workshop** | 完整技能提案生命周期 | ⭐⭐⭐ 可用来发布自定义 skill |  
| **Skill Safety Scanner** | 内置安全扫描 | ⭐⭐⭐ 补充 skill-vetter |  
| **Hermes Agent** | 持久化 agent 跑在服务器上，记住一切，overnight 执行 | ⭐⭐ 类似 OpenClaw 但更轻量 |  
| **Wonda + Claude Code** | 自动化 X/Twitter 研究和回复 | ⭐ 有趣但非刚需 |  
| **Docusign MCP Server** | 文档签署 agentic 体验 | ⭐ 企业场景 |  
  
### OpenClaw 生态规模  
  
官方显示 ~70 个开源项目组成联邦生态 — hosted agents、local-first crawlers、SDKs、skill registries、native tooling，共享 runtime。  
  
---  
  
## Part 4: 🎮 社区玩法 / 小技巧  
  
### 🔥 热门帖子和技巧  
  
1. **"Every Claude Code Hack I Know"（3月，持续流行）**  
   - Planning-first discipline + voice dictation + 并行自主 sessions = 高速 AI 开发  
   - 核心：先写计划再写代码，不是反过来 🟢  
  
2. **"How to Extract 92x Performance from Claude Code"（本周热帖）**  
   - 极致优化 token 用量的方法论（标题夸张但内容实在）🟡  
  
3. **15 个值得留下的 Claude Skills（@VaibhavSisinty）**  
   - 测试 100+ skills 后筛选，强调 skill 串联比单独用更强 🟢  
  
4. **Claude Code Routines（无代码自动化）**  
   - 非技术人员也能用的自动化方式 🟢  
  
5. **Persistent Agent 模式（Prajwal Tomar）**  
   - 不要每天重开 session 重新解释一切 → 持久化 agent 记住所有上下文  
   - "他们醒来时工作已完成" — 这就是我们用 OpenClaw 在做的事 🟢  
  
6. **AI Coding Workshop（Eclipse Foundation，6/23 布鲁塞尔）**  
   - Cursor + Copilot + Claude Code 实战 workflow live demo 🟢  
  
### 趋势观察  
  
- **Agentic coding 工具趋同**：Claude Code、Cursor、Codex、Antigravity 走向同一 blueprint，Grok Build 加入战局  
- **MCP 安全成为焦点**：CVE 模式、exploit chains、policy-as-code 防御  
- **社区从"能用"转向"高效用"**：token 优化、workflow 串联、overnight 执行  
  
---  
  
## 📊 信息可靠度说明  
  
- 🟢 官方源/可验证：OpenClaw releases、Claude Code docs、Anthropic 公告  
- 🟡 二手源/社区：Twitter 帖子、YouTube 视频、Substack  
- 🔴 未验证：无  
  
---  
  
*报告生成时间：2026-06-26 12:00 CST*  
*搜索轮次：6*  
