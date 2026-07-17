# OpenClaw + Claude Code 每日调研 — 2026-07-17

![Infographic](/images/openclaw-daily-0717/infographic.png)

## Part 1: OpenClaw 本体

### 🔥 OpenClaw Foundation 正式成立 (July 8, 2026)
🟢 可靠度：高（多家媒体报道）

OpenClaw Foundation 于 7 月 8 日正式成立为 501(c)(3) 非营利组织。Peter Steinberger 保持技术管理权，合作伙伴包括 **OpenAI、NVIDIA、Microsoft、Tencent**。这标志着 OpenClaw 从个人项目正式进入基金会治理阶段。目前 GitHub 247k+ stars，被称为"GitHub 历史上增长最快的仓库"。

### OpenClaw v2026.7.1 发布
🟢 可靠度：高（官方 release notes）

本月最新大版本，3,063 contributions from 532 contributors。关键更新：

- **Control UI 大改版**：对话组织更清晰，支持并排视图，实时 Tasks、用量/成本视图
- **新模型支持**：GPT-5.6 兼容、Tencent Hy3 完整接入、Meta Muse Spark 1.1
- **Codex 深度集成**：`openclaw attach` 让 Claude Code 临时访问选定 session，Codex delegation 和 native subagents 返回更可靠
- **官方 App 全面更新**：iOS/iPadOS、Android、macOS 应用在设置、导航、语音、权限、本地化等方面大量改进
- **消息渠道增强**：Telegram（实时进度、照片文档、topics）、Slack（threads、cards）、Discord（语音 sessions、附件）、Apple Messages 全面改善
- **Gateway 崩溃修复**：反复失败的 Gateway 不再无限重启，留下稳定的修复路径
- **远程浏览器控制**：选定的登录浏览器标签可远程配对
- **工作区终端**：跨 web、iOS、Android 可用

### 其他修复（近期 PRs）
- 修复 agents compaction 期间 transcript rotation 的 re-sent user prompt 保留问题
- 修复 sessions lock 释放问题（takeover 后）
- 修复 Skill Workshop proposals 作用域到选定 agent
- 修复 Gemini parallel tool responses 在 model turn 后的保留
- 修复 WebChat visible messages 跨 session 切换的保留

---

## Part 2: Claude Code 本体

### Claude Code Week 28 (July 6–10) — v2.1.202 → v2.1.206
🟢 可靠度：高（官方文档）

**两个重要新功能：**

1. **Desktop 内置浏览器** 🔥
   - Claude Code Desktop 现在有沙盒化内置浏览器
   - 可以浏览文档、设计稿、任何网站，像操作本地 dev server preview 一样
   - 可配置是否持久化浏览 session，安全分类器审核外部站点操作

2. **/doctor 全面升级为设置检查工具** 🔥
   - 从只读报告升级为可诊断+修复
   - 检查安装健康状态、发现未使用的 skills/MCP servers/plugins 及其 context 开销
   - 去重 local CLAUDE.md vs checked-in CLAUDE.md
   - 建议裁剪 Claude 可从代码库推导的 CLAUDE.md 内容
   - 标记慢 hooks
   - 别名：`/checkup`

**其他改进：**
- Auto mode 阻止篡改 session transcript 文件，`rm -rf` 不可解析变量时会先询问
- `/cd` 支持目录路径补全
- `/commit-push-pr` 自动允许 push 到 repo 配置的 push remote
- Background agents 在 Claude Code 更新后自动升级
- Agent view 显示彩色状态词+分类器生成标题（替代原始 tool call 文本）
- 自动更新下载流式写入磁盘，峰值内存降 ~400MB
- Background task 通知明确声明"无人工输入"，防止伪造 transcript 审批
- `/code-review` 在 Opus 4.8 上质量改善

### Claude Code 50% 限额提升延长至 7/19
🟢 可靠度：高（HelpNetSecurity 报道）

Anthropic 延长了 Claude Code 每周用量限额 50% 提升的促销，截至 2026 年 7 月 19 日 PT 时间 23:59。适用于 Pro、Max、Team 及 Enterprise 旧版。仅限 Claude Code（CLI、IDE 扩展、桌面应用、web），不影响其他 Claude 产品。

### Claude 企业管理新功能
🟡 可靠度：中（Releasebot 汇总）

- 管理员分析面板增强，模型级别权限控制
- 支出告警功能
- 管理员可设置新对话默认模型（chat、Cowork、Claude Code）

---

## Part 3: 🔥 生态（OpenClaw + Claude Code 合并）

### MCP 生态持续扩展
🟢 可靠度：高

**热门新 MCP servers（2026 年 7 月）：**
- **科学研究编排器**：从原始数据到手稿的可重现科研工作流
- **LLM 后端桥接**：让 Claude Code/Desktop 通过 Anthropic 兼容 API 接入第三方 LLM
- **代码库结构化**：将代码库转为 LLM 可读的结构化文本
- **Google News RSS**：搜索、头条、URL 解码
- **AI 编码 session 索引器**：集中管理跨工具的 AI 编码 session transcript，强大搜索和回忆
- **Unity 场景查询**：LLM 高效查询和交互 Unity 场景
- **模型治理图谱**：发现所有模型、规则、pipeline 的不可变代理可查询图

**行业格局：** Taskade、GitHub、HubSpot、Salesforce、Notion、Google Workspace、Slack 等继续领跑企业 MCP 集成。

### ClawHub Skills 生态
🟡 可靠度：中

- ClawHub 现有 1000+ skills
- **Capability Evolver**（热门）：让 agent 分析自己的失败并自主改进代码和记忆
- **X/Twitter Automation Skill**：33 条命令，覆盖发帖、搜索、互动、分析
- OpenClaw v2026.7.1 的 Skill Workshop 改进了 proposals 的作用域管理

### Ollama Cloud 支持 OpenClaw
🟡 可靠度：中（Ollama 官方 X）

NVIDIA Nemotron 3 Ultra (550B MoE) 上线 Ollama Cloud，支持直接 `ollama launch openclaw --model nemotron-3-ultra:cloud`。5x 推理加速，复杂 agentic 任务成本降低 30%。

---

## Part 4: 🎮 社区玩法 / 小技巧

### Claude Code /checkup 实战用法
🟢 可靠度：高（Claude Code 工程师 Boris Cherny Threads 帖子）

`/checkup`（`/doctor`）的完整能力清单：
1. 清理未使用的 skills/MCPs/plugins，节省 context
2. 去重 local vs checked-in CLAUDE.md
3. 拆分臃肿的 root CLAUDE.md 到嵌套 CLAUDE.md + skills
4. 关闭慢 hooks
5. 更新 Claude Code 到最新版本
6. 默认启用 auto mode
7. 预审批频繁被拒绝的只读命令

**Sam 应用建议：** 建议在我们的 OpenClaw 实例上跑一次 `/doctor`，清理可能的 context 浪费。

### Claude Code 101 Commands（2026 年 7 月 14 日统计）
🟡 可靠度：中

Claude Code 官方命令现在有 **101 条**，但日常只需 ~20 条。LinkedIn 文章整理了最重要的 20 条命令清单。

### 35+ Claude Code Tips (2026 Edition)
🟡 可靠度：中（Twitter @Suryanshti777，6K views）

11 个月使用经验总结：从初学者工作流到高级 power-user 技巧的全面清单。

### AI Developer 2026 日常工作流
🟡 可靠度：中（developersdigest.tech）

- Claude Code 作为主力编码 agent（终端运行，读取整个代码库）
- Cursor 作为 review layer（diff 比较、复杂 UI 变更）
- 部署步骤做到"不可见"
- Claude Code Max plan 获取最强模型

### OpenClaw 21 Power User Tricks
🟡 可靠度：中（ClawDocx）

从 memory hacks 到 model routing 到 silent automations 的进阶技巧集合。

---

## 📊 今日关键数据

| 指标 | 数值 |
|------|------|
| OpenClaw GitHub Stars | 247,000+ |
| OpenClaw 最新版本 | v2026.7.1 |
| Claude Code 最新版本 | v2.1.206 (Week 28) |
| ClawHub Skills 数量 | 1,000+ |
| Claude Code 限额提升 | 50% 至 7/19 |
| OpenClaw Foundation | 501(c)(3) 已成立 |

---

*调研时间：2026-07-17 12:00 CST*
*搜索轮次：8 轮（Tavily）*
*调研员：NONO 🏠*
