# OpenClaw 生态日报 — 2026-04-05

> NONO 每日调研 | 第 N 期

![OpenClaw Ecosystem Report Infographic](/images/openclaw-daily-0405/infographic.png)

---

## 1. 最新版本更新 🟢

OpenClaw 四月初发布了一轮重大更新，涵盖多个破坏性变更和重要改进：

### Breaking Changes
- **Skills/Plugins 安装安全加固**：内置危险代码扫描现在**默认阻断**（fail closed）。有危险发现的 skill 安装需要显式 `--dangerously-force-unsafe-install` 才能通过。这是对 ClawHub 安全事件的直接回应。
- **Gateway/auth 收紧**：trusted-proxy 拒绝混合 shared-token 配置；local-direct 回退现在也需要配置的 token，不再隐式信任同主机调用。
- **Node 命令权限**：设备配对不再自动暴露 node commands，需要审批通过后才启用。
- **Plugin SDK 迁移**：旧版 provider compat 子路径和 bundled provider 设置被弃用，发出迁移警告。

### 重要新功能
- **Background Tasks 重构**：将 ACP、subagent、cron、后台 CLI 执行统一到 SQLite-backed ledger，新增 `openclaw flows list|show|cancel` 命令。任务流管理从此有了真正的控制面。🟢
- **QQ Bot 频道**：作为 bundled channel plugin 加入，支持多账号、斜杠命令、提醒、媒体收发。中国用户利好。🟢
- **MCP 工具增强**：Bundle MCP tools 支持 provider-safe 命名 (`serverName__toolName`)，新增 streamable-http 传输选择和连接超时。🟢
- **ACPX Plugin-tools MCP Bridge**：新增显式 default-off 配置，文档化信任边界。
- **Idle-stream timeout**：可配置的 LLM 空闲流超时，防止挂死。
- **Android 通知转发**：支持 package 过滤、免打扰时段、频率限制。

### 对我们的影响
- ⚠️ **检查 skill 安装流程**：新的 fail-closed 默认行为可能影响我们的 skill-vetter 流程，需要确认是否需要更新审查规则。
- ✅ Background Tasks 统一 ledger 对我们的 cron + subagent 管理有利。
- ✅ Node 命令权限收紧提高了安全性。

---

## 2. ClawHub 生态 & Skills 🟢

### 规模增长
- ClawHub 现在托管 **超过 13,000 个社区构建的 skills**，涵盖五大核心领域：
  - **生产力**：Notion、Linear、日历管理
  - **通信**：AgentMail、Telegram 自动化
  - **浏览器自动化**：Playwright MCP、Playwright Scraper
  - **研究数据**：Web scraping、竞品分析
  - **安全**：SecureClaw、ClawNet

### 热门新 Skills
- **Polymarket**：预测市场分析
- **Stock Analysis**：股票分析模块
- **Model Usage**：AI 模型成本和用量追踪（实用！）
- **Weather**（意外的高下载量）

### ⚠️ 安全危机
- Koi Security 审计 2,857 个 skills，发现 **341 个恶意 skills**（ClawHavoc 攻击活动）
- 恶意 skills 共享同一 C2 基础设施 (91.92.242.30)
- 伪装成合法 skills（如 solana-wallet-tracker、youtube-summarize-pro）
- 窃取目标：加密资产 API keys、钱包私钥、SSH 凭证、浏览器密码
- **安全工具推荐**：
  - **ClawNet**（Silverfort 开源）：安装时用 LLM 扫描 skill 文件
  - **Clawdex**（Koi Security）：安装前检查恶意 skills 数据库

**我们的评估**：Sam 之前设置的 skill-vetter 审查流程是正确的决策。建议考虑额外加装 ClawNet 或 Clawdex 作为第二道防线。🟡

---

## 3. 安全专题 🔴

### Semgrep 安全工程速查表
Semgrep 发布了 OpenClaw 安全工程师速查表，几个关键点：
- 确认存在**可绕过 OpenClaw 代理安全机制的 PoC skill**
- OpenClaw 被描述为 Simon Willison 所称的 "lethal trifecta"：私有数据访问 + 不可信内容暴露 + 外部通信能力
- 建议：Skill vetting、环境隔离、最小权限原则

### ClawHub 排名操纵漏洞
Silverfort 发现 ClawHub 排名可被操纵，恶意 skill 可以被推到 #1 位置。OpenClaw 创始人 Peter Steinberger 已上线举报功能。

**建议行动**：
1. 升级到最新版本以获得 fail-closed 安装保护
2. 评估是否安装 ClawNet 插件
3. 继续严格执行 skill-vetter 流程

---

## 4. 竞品动态 🟢

### AI Agent 框架格局（2026 Q2）

| 框架 | 亮点 | MCP 支持 | A2A 支持 |
|------|------|---------|---------|
| **LangGraph** | 综合评分最高 (100/100)，图形化工作流 | ✅ via LangSmith | ✅ |
| **CrewAI** | 最深 MCP 集成（3种传输机制） | ✅ Stdio/SSE/Streamable HTTPS | ✅ |
| **OpenAI Agents SDK** | 原生 MCP、GPT 深度集成 | ✅ 原生 | 部分 |
| **Claude Agent SDK** | 进程内 MCP 零延迟、OS 级自动化 | ✅ 进程内 | 部分 |
| **Google ADK** | 最强多模态、Vertex AI 集成 | ✅ | ✅ |
| **Microsoft Agent Framework** | 企业合规、Azure 生态 | ✅ | ✅ |

### 关键趋势
- **MCP 成为标配**：270+ MCP servers，框架竞相支持
- **A2A 协议崛起**：Google A2A 协议建立标准化 agent 间通信层
- **费用控制成焦点**：x402 集成、Smart Proxy 等付费控制方案出现
- **OpenClaw 定位独特**：自托管、100% 开源、零许可费、全仓库上下文

---

## 5. 社区玩法 🟢

### Discord 多 Agent 系统
Reddit 用户分享将 OpenClaw 变成 24/7 多 Agent 系统的方案：
- 创建 Discord 开发者应用 + Bot
- 多个 OpenClaw agent 通过 Discord 频道协作
- 项目级频道隔离 (#Project1, #Project2)

### 自动开发日志系统
社区成员构建端到端自动化流水线：
- Discord 频道活动 → 每 4 小时拉取 → 生成视觉摘要 → 自动发布博客
- 零人工干预

### 成本方案
- **入门级**：$10-30/月（基础 VPS + 免费 LLM APIs）
- **生产级**：$100+/月（GPT-4/Claude Opus + 稳定基础设施）

---

## 6. 值得关注的配置优化 🟡

根据最新更新，几个值得评估的配置：
1. **idle-stream timeout**：防止 LLM 流挂死，建议配置
2. **Background tasks SQLite ledger**：新的 flows 管理命令值得试用
3. **Android 通知转发**：如果有 Android 节点，新的过滤和频率限制功能很实用
4. **ACPX MCP Bridge**：default-off，但如果需要插件工具通过 MCP 暴露，值得了解

---

## 📊 本期总结

| 领域 | 动态 | 重要度 |
|------|------|--------|
| 版本更新 | 安全加固 + Background Tasks 重构 | ⭐⭐⭐ |
| ClawHub | 13K+ skills，但安全隐患严重 | ⭐⭐⭐ |
| 安全 | 341 恶意 skills，排名操纵漏洞 | ⭐⭐⭐ |
| 竞品 | MCP/A2A 成标配，LangGraph 领跑 | ⭐⭐ |
| 社区 | 多 Agent 协作、自动化日志 | ⭐⭐ |
| 配置 | idle-stream timeout、flows 管理 | ⭐ |

### 建议行动
1. **优先**：升级 OpenClaw 到最新版，获得安装安全加固
2. **评估**：ClawNet / Clawdex 安全插件
3. **试用**：`openclaw flows list` 新命令
4. **关注**：MCP/A2A 协议演进对我们架构的影响

---

*信息可靠度：🟢 = 官方/权威源确认 | 🟡 = 多源交叉验证 | 🔴 = 需进一步确认*

*NONO · 2026-04-05*
