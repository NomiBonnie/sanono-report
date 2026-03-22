# OpenClaw 生态调研日报 — 2026-03-22

> NONO 每日调研 | 搜索轮次：6 | 数据截止：2026-03-22

![OpenClaw Ecosystem Brief](/images/openclaw-daily-0322/infographic.png)

---

## 1. 版本更新

### v2026.3.11（当前最新稳定版）🟢

**核心亮点：**
- **Local-first Ollama 集成**：从 onboarding 流程直接引导本地模型配置，支持零云端引导本地编程助手
- **Cron 任务修复**：修复 cron 通知（ad hoc agent sends / fallback summaries）的关键 bug
- **控制令牌泄漏修复**：GLM-5 和 DeepSeek 控制令牌不再泄漏到用户输出流
- **WebSocket 安全加固**：浏览器连接的 origin 验证增强
- **macOS Gateway 重启**：修复 macOS 特定的 Gateway 重启问题
- **Discord 长消息**：不再意外分割/截断

**UX 改善：**
- iOS Home Canvas 新增 welcome 界面 + 实时 agent 概览，浮动控件改为 dock 工具栏
- macOS chat model picker 优化，thinking-level 选择跨 session 持久化
- Dashboard 认证 token 改用 session-scoped 浏览器存储

**OpenCode 简化：**
- Zen 和 Go 共享单一 API key 配置

### v2026.3.1 🟢

- **Anthropic Claude 4.6 默认 thinking level 改为 "adaptive"**——按任务复杂度动态调整
- **容器健康检查**：新增 `/health`, `/healthz`, `/ready`, `/readyz` 端点
- **Cron 轻量模式**：`--light-context` / `agents.*.heartbeat.lightContext`，跳过重文件注入
- **Android 节点大幅扩展**：camera.list, device.permissions, device.health, notifications.actions
- **Telegram DM topics**：支持 per-DM 配置（allowlists, skills, systemPrompt）
- **Discord 线程生命周期**：改为 inactivity-based（idleHours 默认 24h）
- **Feishu 大修**：Docx 表格、图片上传、reaction、权限管理全面修复

**⚡ 对我们的影响：**
- `lightContext` 可以优化我们的 cron 任务启动速度
- Telegram DM topics 可以为不同对话设置独立 systemPrompt
- macOS Gateway 重启修复直接相关我们的部署

---

## 2. ClawHub 生态

### 热门新 Skill 🟢

- **CoinFello**：开源 onchain 交易 skill，支持 ERC-20 swap、跨链 bridge、NFT 交互（基于委托智能钱包权限）
- **ontology**（@oswalpalash，⭐359）：类型化知识图谱，结构化 agent 记忆 + 可组合 skills
- **Self-Improving Agent**（@ivangdavila，⭐566）：自反思 + 自批评 + 自学习 + 自组织记忆
- **Mcporter**（@steipete，⭐126）：MCP server/tool CLI 直接调用（HTTP/stdio），配置编辑 + 类型生成
- **Agent Browser**（@MaTriXy，⭐126）：无头浏览器自动化 CLI，accessibility tree 快照 + ref-based 元素选择
- **Polymarket**（@joelchance）：预测市场查询——赔率、趋势、价格追踪

### 生态规模 🟢
- ClawHub 现已托管 **13,000+** 社区构建工具
- ⚠️ Cisco AI 安全研究发现部分未审查 skill 存在数据外泄和 prompt 注入风险——再次验证我们 skill-vetter 流程的必要性

---

## 3. GitHub Issues 值得关注 🟡

最近（3/21-22）活跃 issues：
- **#51774** — Google provider: streaming flag 导致 400 + 空 required arrays 被 schema validator 拒绝
- **#51773** — Slack inbound attachments 被 path security policy 拦截，图片分析失败
- **#51743** — Google provider: usageMetadata 未映射到 usage.input/output，所有 Gemini 调用记录 0 tokens
- **#51742** — 工具定义未传递给 Nemotron
- **#51736** — Mattermost markdown 格式在 thread 回复被分块时丢失
- **#34990** — 7 小时服务中断事故报告（v2026.3.2 环境恢复）
- **#24386** — Feature Request: GitHub 作为 native channel（双向 webhook）

**⚡ 对我们的影响：**
- #51773 Slack 附件安全策略问题可能影响我们的 Slack 集成
- #24386 GitHub native channel 如果实现会对我们的 gh-issues skill 工作流有大影响

---

## 4. 社区动态

### Discord / Reddit 🟡
- Reddit r/openclaw 活跃讨论 v2026.3.11 release notes，社区反馈正面
- r/OpenClawUseCases 子版块持续收集真实配置和部署模式
- 用户报告 OpenClaw 自动化平均节省 **10-15 小时/周**
- 多篇教程涌现：VPS 部署、Discord bot、智能家居自动化

### 安全提醒 🔴
- **CVE-2026-25253** 仍被频繁提及，确保我们已打补丁
- "Lethal Trifecta" 安全分析被广泛引用——恶意 ClawHub skills + prompt 注入 + 系统权限滥用

---

## 5. 竞品动态 🟡

| 竞品 | 定位 | 动态 |
|------|------|------|
| **NanoClaw** | 轻量替代 | 持续增长，适合简单单 agent 场景 |
| **Moltis/Moltbot** | 云端嵌入式 workflow agent | 无需本地服务器，通过消息平台交互 |
| **Adept** | UI 级交互自动化 | 专注 UI 操作而非系统集成 |
| **CrewAI** | 多 agent 协作 | 角色分工模式受欢迎 |
| **Knolli** | 无代码 copilot | 强调结构化和安全边界 |
| **n8n** | 工作流自动化 | 与 OpenClaw 定位不同但用户重叠 |

**趋势判断：** OpenClaw 以 280K+ GitHub stars 保持绝对领先。竞品主要在"无需自托管"和"企业安全"方向分化。OpenClaw 的护城河在于生态（13K+ skills）和灵活性。

---

## 6. 可应用到我们系统的优化建议

1. **✅ 升级到 v2026.3.11**——如果还没有，cron 修复和 macOS Gateway 修复直接解决我们遇到的问题
2. **📋 启用 lightContext**——对我们的 cron 任务（如本调研任务）可以显著减少启动开销
3. **🔍 检查 CVE-2026-25253 补丁状态**——安全优先
4. **🧩 评估 ontology skill**——结构化知识图谱可能对我们的 memory 系统有帮助
5. **🔒 继续执行 skill-vetter**——Cisco 发现的安全风险证明我们的审查流程是对的

---

*调研完成。信息来源：Tavily API、GitHub、Reddit、CompareClaw、CyberSecurityPath、ClawHub.ai*
