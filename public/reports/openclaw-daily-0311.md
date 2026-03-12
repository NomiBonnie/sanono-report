# OpenClaw 每日调研 - 2026-03-11

## 1. OpenClaw 最新版本更新

### 🟢 v2026.3.8（2026-03-09 正式发布）

**核心更新：**

#### CLI/Backup 系统 ⭐ 可立即用
- 新增 `openclaw backup create` 和 `openclaw backup verify`
- 支持 `--only-config` 和 `--no-include-workspace` 选项
- 本地状态归档、manifest/payload 验证
- 为破坏性操作提供备份指导
- **实用价值：** 日常管理 OpenClaw 实例必备，防止配置丢失

#### Talk Mode 增强 ⭐ 可立即用
- 新增 `talk.silenceTimeoutMs` 配置
- 可自定义语音转文字的静音超时时间
- 每个平台保留默认暂停窗口
- **实用价值：** 提升语音交互体验，减少误触发

#### Web Search 改进 ⭐ 可立即用
- Brave Search 新增 `tools.web.search.brave.mode: "llm-context"` 模式
- 返回提取的 grounding snippets 和源元数据
- Perplexity 兼容性恢复（支持 OpenRouter/Sonar）
- 搜索提供商排序优化（Grok 优先于 Kimi）
- **实用价值：** 提升 agent 搜索质量，减少幻觉

#### macOS 特性
- 远程 gateway token 字段（remote mode onboarding）
- 浏览器代理通过本地 node browser service
- 权限状态刷新优化
- **实用价值：** macOS 用户体验优化

#### ACP/Provenance 🟡 需评估
- 新增可选 ACP 入口溯源元数据
- `openclaw acp --provenance off|meta|meta+receipt`
- OpenClaw agents 可保留并报告 ACP 来源上下文
- **评估点：** 如果我们使用 ACP（Anthropic Computer Use Protocol），这是追踪溯源的关键

#### TUI 改进
- 从当前工作区推断 active agent
- 支持亮色终端背景检测（COLORFGBG）
- `OPENCLAW_THEME=light|dark` 覆盖
- **实用价值：** 终端使用体验更好

#### 多渠道修复
- **Telegram DM 路由：** 修复重复 DM 问题
- **Cron/Telegram announce：** 修复 delivered: true 但未实际发送的问题
- **Matrix DM 路由：** 更安全的 m.direct homeserver 检测
- **Feishu plugin：** 安装后不再重复提示下载
- **Android Play 分布：** 移除自更新、后台定位、屏幕录制、后台麦克风
- **实用价值：** 多渠道 agent 更稳定可靠

#### 浏览器/CDP 改进
- 新增 `browser.relayBindHost`（WSL2/跨命名空间支持）
- 规范化 loopback CDP WebSocket URLs
- 重写 `ws://0.0.0.0` 和 `ws://[::]` 到实际 CDP host/port
- Chrome tab 重连等待逻辑（减少 flakes）
- **实用价值：** 浏览器自动化更稳定，WSL2 用户友好

#### 模型支持
- GPT-5.4 forward-compat（1,050,000 token context）
- Amazon Bedrock quota 错误检测改进
- **实用价值：** 大上下文场景更好支持

#### 安全/配置
- 保留 secrets-runtime-resolved config 完整性
- Gateway Control UI 资源解析改进（symlink 支持）
- Podman/setup chdir 权限修复
- **实用价值：** 生产部署更稳定

---

### 🟡 v2026.3.2（2026 年 2 月）

**核心亮点：**
- **Secrets 系统成熟：** SecretRef 支持覆盖 64 个凭证目标
- QoL 升级（日常使用质量提升）

---

### 🟡 v2026.2.21/2026.2.23（2 月重大更新）

**核心特性：**
- **Gemini 2.5 集成** ⭐
- **Discord 支持** ⭐
- **安全加固：** 多项漏洞修复
- **ContextEngine 架构改进：** 多 engine 切换，对话上下文管理优化

**重要安全修复（Penligent 报告）：**
- 🔴 Log Poisoning（WebSocket headers 间接 prompt injection）已修复
- 🔴 ClawHub 技能投毒攻击路径已知（需谨慎安装 skill）
- 🔴 多黑客组织利用 OpenClaw 窃取 API keys 和部署恶意软件
- **实用价值：** 必须升级到最新版本，启用安全审计

**多 Agent 模式：** v2026.2.17 引入确定性 sub-agent spawning（slash 命令触发）

---

## 2. ClawHub Skills 新动态

### 🟢 当前规模
- **3,200+ skills**（2026 年 3 月数据，另有来源称 5,700+）
- 官方市场：https://clawhub.com

### 🟢 主要分类
- Web Search（如 tavily-web-search，最广泛安装）
- Productivity
- Coding（如 github，最下载之一）
- Automation
- Social Media
- Communication
- Developer Tools
- Entertainment
- Smart Home
- Finance

### ⚠️ 安全警示 🔴 必须了解
**ClawHub 技能投毒事件（2026 年初）：**
- 攻击者发布伪装技能（如 "gmail-enhanced", "slack-pro-connector"）
- 混淆 JavaScript 盗取 AWS 凭证、数据库连接字符串、API tokens
- **防护措施：**
  - 使用 `clawhub audit --local` 扫描已安装技能（VirusTotal + GitHub Advisory Database）
  - 优先安装知名/高下载量技能
  - 审查技能代码（开源透明）
  - 限制环境变量暴露（sandboxed execution）

### 🟢 安装方式
1. **OpenClaw 内推荐：** Agent 自动搜索并推荐
2. **ClawHub.io 浏览：** 按分类查找
3. **CLI 安装：** `clawhub install <skill-name>`
4. **OpenClaw Launch：** 统一基础设施安装（避免个人 rate limit）

### 🟡 技能管理最佳实践
- **每个 skill 增加上下文开销**
- **重叠技能会混淆 agent 选择**
- **技能与主系统权限等同**（`.env`, SSH keys, browser sessions）
- 建议：精选必需技能，定期审计

---

## 3. GitHub Issues/PRs 动态

### 🟢 社区活跃度
- **开放 issues 数量：** 数百个（持续增长）
- **PR 管理：** 新政策限制每个作者最多 10 个 open PRs（#38283）
- **新手友好：** #12785 整理了 `good first issue` / `help wanted` 标签
- **自动化实践：** 一条 prompt 处理 10 个 PRs + 监控 CI（YouTube 演示）

### 🟡 社区最关注的问题（Top 20）

**连接 & 渠道：**
1. WhatsApp 链接卡在 "logging in"（16 reactions, #4686）
2. 无多用户访问控制（11 reactions, #8081）
3. 默认配置暴露实例到公网

**模型 & 提供商：**
4. 模型兼容性问题
5. Feishu 图片分析不工作（#42257）
6. Feishu AxiosError timeout（升级到 2026.3.8 后，#42255）

**工作流：**
7. 缺少中断/停止命令（如 `..` 立即杀掉任务，#42262）
8. Probe sessions 可能在成功回复后超时（#42XXX）

**其他：**
9. Agent 协同问题
10. Context 管理挑战

**实用价值：**
- 如果使用 Feishu，注意 #42255/#42257
- 如果需要多用户，等待 #8081 或自行实现
- 如果暴露到公网，务必加固安全（参考 healthcheck skill）

---

## 4. 竞品动态（AI Agent 框架 2026）

### 🟢 主流框架对比

| 框架 | 定位 | 特点 | 适用场景 |
|------|------|------|----------|
| **LangChain** | 通用 | 生态最完整（21,000+ stars），企业采用广泛 | 数据密集型、企业级应用 |
| **LangGraph** | 有状态多 agent | 支持循环图、复杂 agent runtime | 多步骤工作流、状态管理 |
| **CrewAI** | 多 agent 协作 | 角色分工、团队协作 | 多 agent 协同任务 |
| **AutoGen (Microsoft)** | 多 agent 对话 | 简化协作复杂度 | 对话式多 agent 系统 |
| **Semantic Kernel (Microsoft)** | 企业集成 | 轻量 SDK，无缝集成企业系统 | 已有企业架构的 AI 集成 |
| **LlamaIndex** | RAG 优化 | 数据索引和检索 | 知识库问答、文档理解 |
| **MetaGPT** | 软件开发 | 模拟软件团队 | 代码生成、软件工程 |
| **Mastra** | 轻量通用 | 简单易用 | 学习和实验 |
| **Smolagents** | 轻量级 | 最小化开销 | 简单任务 |

### 🟡 2026 年趋势（Google Cloud AI Agent Trends 2026）

**五大转变：**

1. **从工具到伙伴：** 每位员工成为 AI Agent 的"人类管理者"
   - 52% 企业高管已在生产环境部署 AI Agent
   - TELUS: 57,000 员工使用，每次交互节省 40 分钟

2. **数字化流水线：** 多 Agent 协同的端到端业务流程
   - 88% 早期采用者实现正向 ROI
   - **A2A (Agent2Agent) 协议：** 跨框架/跨组织 Agent 协作
   - **MCP (Model Context Protocol)：** 解决 LLM 知识时效性和外部交互

3. **客户服务革命：** 从脚本到智能礼宾式服务
   - Home Depot Magic Apron：24 小时家装指导
   - Danfoss: 响应时间 42 小时 → 近乎实时

4. **安全运营 Agent 化：** 从告警到行动
   - 46% 已部署 Agent 企业用于安全运营
   - Torq Socrates: 90% 一级分析自动化，响应速度 10x
   - CodeMender: 自动发现零日漏洞

5. **人才升级：** "Agent 协调者"成为核心竞争力
   - 技能半衰期缩短至 4 年（技术领域 2 年）
   - 82% 决策者认为技术学习资源是竞争关键

### 🟢 OpenClaw vs 竞品

**OpenClaw 优势：**
- **最灵活的框架：** 自定义 agent 逻辑
- **多渠道集成：** Telegram、Slack、Discord、Matrix、Feishu 等
- **技能生态：** ClawHub 3,200+ skills
- **本地部署友好：** 24/7 自托管（Tencent Cloud Lighthouse 模板）
- **浏览器自动化：** Chrome extension relay、CDP 支持
- **多 agent 原生支持：** sub-agent spawning

**竞品优势：**
- **LangChain/LangGraph：** 企业生态最成熟
- **CrewAI：** 多 agent 协作最直观
- **Semantic Kernel：** Microsoft 生态集成最好
- **LlamaIndex：** RAG 场景最优

**OpenClaw 定位：**
个人/小团队的全栈 AI agent 平台，强调灵活性、自托管、多渠道、技能扩展。

---

## 5. 可应用到我们系统的新能力

### ⭐ 可以立即用

#### 1. **Backup 系统**
```bash
openclaw backup create --only-config
openclaw backup verify
```
- **场景：** 定期备份 NOMI/NONO 配置，防止意外丢失
- **建议：** 每周 cron job 自动备份

#### 2. **Brave LLM Context Mode**
```yaml
tools:
  web:
    search:
      brave:
        mode: "llm-context"
```
- **场景：** 提升 web_search 质量，减少幻觉
- **建议：** 实验对比 Tavily vs Brave LLM Context

#### 3. **Talk Mode 静音超时自定义**
```yaml
talk:
  silenceTimeoutMs: 2000  # 2 秒
```
- **场景：** 如果用语音交互，优化触发灵敏度
- **建议：** 根据 Sam 偏好调整

#### 4. **TUI 亮色主题**
```bash
export OPENCLAW_THEME=light
openclaw tui
```
- **场景：** 如果 Sam 用亮色终端
- **建议：** 测试终端体验

#### 5. **浏览器 WSL2 支持**
```yaml
browser:
  relayBindHost: "192.168.x.x"
```
- **场景：** 如果在 WSL2 环境
- **建议：** 暂时不需要（macOS 环境）

### 🟡 需要评估

#### 1. **ACP Provenance**
- **场景：** 如果使用 Anthropic Computer Use Protocol，追踪 agent 行为溯源
- **评估：** 我们是否需要 ACP？是否需要溯源审计？
- **建议：** 先研究 ACP 协议，再决定是否启用

#### 2. **Multi-Agent A2A 协议**
- **场景：** NOMI ↔ NONO 跨 agent 通信标准化
- **评估：** 当前 Slack thread 模式 vs A2A 协议
- **建议：** 关注 A2A 生态成熟度，考虑未来迁移

#### 3. **MCP (Model Context Protocol)**
- **场景：** Agent 实时连接企业数据库、业务系统
- **评估：** 我们是否需要连接外部系统？（Notion API 算一种）
- **建议：** 研究 MCP 与现有 Notion/Slack API 的关系

#### 4. **ClawHub Enterprise Registry**
- **场景：** 私有技能仓库（GitOps 流程）
- **评估：** 是否需要自建技能？是否需要内部审计流程？
- **建议：** 短期用公共 ClawHub，中期考虑私有 fork

#### 5. **Agent Payments Protocol (AP2)**
- **场景：** Agent 代理支付时的授权验证
- **评估：** 我们是否需要 agent 发起支付？
- **建议：** 仅供了解，暂无场景

### 📚 仅供了解

#### 1. **Gemini 2.5 集成**
- 已在 v2026.2.21 支持
- 如果想尝试 Google 模型可以配置

#### 2. **Discord 支持**
- 已在 v2026.2.21 支持
- 如果需要 Discord 渠道可以配置

#### 3. **Android 精简版**
- 移除了自更新、后台定位、屏幕录制
- 如果用 Android 节点可关注

#### 4. **GPT-5.4 支持**
- 1,050,000 token context（极大上下文）
- 如果用 OpenAI Codex 可关注

#### 5. **安全加固框架（Penligent）**
- OpenClaw Sovereign AI Security Manifest
- 如果自托管到公网，必读文档

---

## 6. 安全建议 🔴 重要

### 立即行动
1. **升级到 v2026.3.8**（修复 Telegram/Cron/Matrix 等关键 bug）
2. **审计已安装 skills：** `clawhub audit --local`
3. **不要暴露 Gateway 到公网**（如果必须，参考 healthcheck skill）
4. **限制 API key 权限**（最小权限原则）
5. **定期备份配置：** `openclaw backup create`

### 持续关注
- GitHub issues #40005, #42255, #42257（Telegram/Feishu 问题）
- Penligent 安全报告（OpenClaw 漏洞跟踪）
- ClawHub 技能审计（恶意技能监测）

---

## 7. 信息来源可靠度

### 🟢 确认
- OpenClaw v2026.3.8 changelog（GitHub releases）
- ClawHub 3,200+ skills（官方网站 + 多来源验证）
- Google Cloud AI Agent Trends 2026（官方报告）
- Penligent 安全报告（专业安全研究机构）

### 🟡 待验证
- ClawHub 5,700+ skills（部分来源称，可能包含非官方 registry）
- 具体 issue 数量（GitHub 动态变化）
- 竞品具体采用率数据（来自各自官方宣传）

### 🔴 传闻
- 无

---

## 8. 推荐行动清单

### 本周可做
1. ✅ **升级 OpenClaw 到 v2026.3.8**
2. ✅ **设置 weekly backup cron job**
3. ✅ **测试 Brave LLM Context mode**
4. ✅ **运行 `clawhub audit --local`**

### 本月评估
1. 🔍 **研究 A2A 协议**（NOMI ↔ NONO 通信优化）
2. 🔍 **研究 MCP 协议**（外部系统集成）
3. 🔍 **测试 Talk Mode**（如果 Sam 有兴趣用语音）
4. 🔍 **关注 GitHub issues**（Feishu/Telegram 修复进展）

### 长期跟踪
1. 📊 **竞品动态**（LangChain/CrewAI 主要版本更新）
2. 📊 **ClawHub 生态**（新技能、安全事件）
3. 📊 **OpenClaw 重大更新**（每 2 周检查 GitHub releases）
4. 📊 **安全态势**（Penligent 报告、CVE 通告）

---

**报告生成时间：** 2026-03-11 12:46 CST  
**搜索轮次：** 6+ 轮（Tavily API + web_fetch）  
**主要来源：** GitHub, ClawHub, Google Cloud, Penligent, Tencent Cloud, 多家技术媒体  
**调研执行：** NONO sub-agent
