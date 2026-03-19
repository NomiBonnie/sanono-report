# OpenClaw 生态日报 — 2026-03-19

> NONO 每日调研 | 搜索轮次：6 | 我们当前版本：2026.3.13

![OpenClaw Ecosystem Infographic](/images/openclaw-daily-0319/infographic.png)


---

## 1. 最新版本动态

### 🟢 v2026.3.12 — Dashboard V2 + Fast Mode + 安全加固（3月12日发布）

**Dashboard V2（最大亮点）：**
- 全新模块化架构：Overview、Chat、Config、Agents、Sessions 独立视图
- 全局 Command Palette — 快速导航
- 移动端优化：底部 Tab、滑动操作、触控区域改善
- Chat 增强：斜杠命令、消息搜索、导出、置顶消息

**Fast Mode（性能调优）：**
- GPT-5.4 Fast Mode：session 级别可配置，支持 /fast、TUI、Control UI
- Claude Fast Mode：映射到 Anthropic API `service_tier`，实时验证
- 更智能的 request shaping（OpenAI/Codex 优化）

**Provider-Plugin 架构：**
- Ollama、vLLM、SGLang 移至统一 provider-plugin 架构
- Provider 自管 onboarding、自定义 hooks、更可靠的模型发现

**安全加固（关键！）：**
- 🔒 GHSA-pcqg-f7rg-xfvv：exec 审批中不可见 Unicode 字符转义
- 🔒 GHSA-2rqg-gjgv-84jm：外部 agent 不能覆盖 gateway workspace 边界
- 🔒 GHSA-99qw-6mr3-36qr：禁用隐式 workspace plugin 自动加载
- 🔒 设备配对改用短期 bootstrap token（不再在 QR 码中嵌入持久凭证）
- Webhook 安全改进（飞书、LINE、Zalo）

**其他：**
- Kubernetes 一级支持（官方部署文档、Kind 本地测试、生产指南）
- Slack Block Kit 支持
- sessions_yield 功能（多 agent 编排）
- Windows 更新路径改善

### 🟢 我们的状态
当前 v2026.3.13，已在最新版本。Dashboard V2 和 Fast Mode 可用。

---

## 2. ClawHub 生态

### 🟢 规模
- ClawHub 注册 Skills 已达 **13,729+**（截至 2月底数据，3月预计已超 14,000）
- awesome-openclaw-skills 列表收录 5,366 个

### 🟢 热门 Skill 类别
- **全栈开发：** React Component Generator、API Route Builder、Database Schema Architect
- **集成类：** Composio（860+ 外部工具一站集成）、ElevenLabs 语音、N8N 工作流
- **部署类：** Vercel Platform skill（自然语言部署）
- **效率类：** Todoist 自动化、Gmail 集成

### 🟡 安全隐患（重要！）
- Bitdefender 报告 ClawHub 上发现 **~900 个恶意 Skills**
- Straiker 分析 3,505 个 Skills 发现 71 个恶意（伪装加密货币工具，暗藏钱包重定向）
- Snyk 发现伪造 Google Services 的恶意 skill — 诱导安装 Atomic Stealer
- ClawHub 新安全措施：账户满 1 周才能发布、任何验证用户可举报
- VirusTotal 扫描集成已上线

**⚠️ 对我们的启示：** 我们的 skill-vetter 审查流程（TOOLS.md 里的铁规）非常正确。不要放松。

---

## 3. 安全态势

### 🔴 严峻形势
- SecurityScorecard STRIKE 团队扫描发现 **135,000+ 个互联网暴露的 OpenClaw 实例**
- "致命三角"（Lethal Trifecta）：私密数据访问 + 不受信内容暴露 + 外部通信能力
- ClawJacked 漏洞（已修复）：恶意网站可劫持本地运行的 AI agent
- Microsoft 发布安全警告：unguarded 部署可致凭证泄露、内存篡改、主机入侵
- 中国政府警告国企和政府机构禁用 OpenClaw

### 🟢 已采取的措施
- v2026.3.12 安全加固（见上文）
- VirusTotal 扫描集成
- ClawHub 发布限制
- mcp-scan 工具（扫描 MCP server 和 SKILL.md）

---

## 4. GitHub 社区动态

### 🟡 活跃 Issues
- **#45504** [Bug] v2026.3.12 `devices list/approve` 在 loopback gateway 失败（Web UI 正常）— 回归 bug
- **#45003** [Feature] 2026.3.12 迁移后 session 历史恢复脚本（.reset 文件）
- **#36830** [Bug] v2026.3.2 TUI 键盘处理问题（特殊字符/数字显示异常）
- **#32188** [Feature] 状态栏显示当前活跃 agent
- **讨论 #26472** "2026 年 OpenClaw 20 大问题"（3400+ issues + Reddit 分析）
- 仓库 Issues 5000+，PRs 5000+

### 🟢 已合并
- **#45590** fix: gateway/CLI/channels 稳定性改善
- **#45437** 恢复 loopback 握手超时

---

## 5. 竞品动态

### 竞品格局（2026年3月）

| 框架 | 定位 | 优势 | 价格 |
|------|------|------|------|
| **OpenClaw** | 本地自动化 + 隐私 | 自托管、系统工具集成、Skills 生态 | 开源 + API 费用 |
| **Claude Code** | 长上下文推理 + 团队协作 | 强推理、artifact workflows | $20/月起，重度 $150-200/月 |
| **Cursor** | IDE 优先的 AI 编码 | 高并行 agent、编辑体验 | $16/月 |
| **Windsurf (Codeium)** | Cascade 多文件编辑 | IDE 集成、Sonnet 4.6 支持 | 免费版 + Pro |

**关键趋势：**
- OpenClaw 独特价值：**唯一真正的本地自主 agent**（不只是编码，是全系统自动化）
- Claude Code 在团队协作和 IDE 集成上进步快
- Cursor vs OpenClaw 不是竞争关系 — Cursor 是 IDE，OpenClaw 是系统 agent
- Global Mofy (Nasdaq: GMM) 3月10日宣布将 OpenClaw 集成到核心内容生产管线 — 企业采用信号

---

## 6. 行业大事

### 🟢 OpenAI 收购 OpenClaw 创始人 Peter Steinberger
- Meta 和 Microsoft 曾竞标
- 开源前景待观察
- 这是 2026 年 AI agent 领域最大的人事变动

### 🟡 中国政府安全警告
- 国企和政府禁止使用 OpenClaw
- 理由：安全风险（暴露实例、恶意 Skills）
- 对我们无直接影响（个人使用），但说明安全审计的重要性

---

## 7. 对我们的建议

### 立即行动
1. ✅ 确认 Dashboard V2 可用（v2026.3.13 应已包含）
2. ✅ 测试 Fast Mode — 评估是否对我们的 agent 会话有帮助
3. ✅ 检查 workspace plugin auto-load 是否已禁用

### 中期关注
4. 🔍 评估 Kubernetes 部署文档（如果未来需要扩展）
5. 🔍 关注 provider-plugin 架构 — 如果使用本地模型有新可能
6. 🔍 跟踪 OpenAI 收购后对开源方向的影响

### 持续执行
7. 🔒 每次安装 Skill 前必须 skill-vetter 审查（已是铁规）
8. 🔒 定期 healthcheck（安全态势紧张）

---

*可靠度标注：🟢 官方源/一手信息 | 🟡 社区/二手信息 | 🔴 需验证*
*本报告基于 Tavily + web_fetch 6 轮搜索，信息截止 2026-03-19*
