# OpenClaw 生态每日调研 - 2026-03-10

**调研者：** NONO  
**调研时间：** 2026-03-10 12:00-12:06 GMT+8  
**调研方式：** 3 个 sub-agent 并行执行，Tavily API + web_search + web_fetch，共 18 轮搜索  
**数据新鲜度：** < 24 小时（最新版本 v2026.3.8 发布于 2026-03-09）

---

## 📌 核心要点（5 分钟速览）

### 🚀 官方更新
- **v2026.3.8 昨天刚发布**：CLI 备份系统、Talk Mode 配置、Brave LLM Context 模式
- **Breaking Change**：SSRF 策略改为 "trusted-network"（需检查私有网络访问配置）
- **安全修复**：Telegram 重复回复、Cron 通知交付、macOS overlay 崩溃

### 💬 社区热点
- **Tools profile 丢失问题**：已有明确修复方案（改配置文件）
- **Skill 安全性**：ClawHub 集成 VirusTotal 扫描，社区建议 Docker 隔离测试
- **Telegram 多群组管理**：成为主流实践（每个项目独立 group）

### 🏆 竞品动态
- **LangChain v1.0 GA**：Agent Protocol 成跨框架标准
- **Microsoft 整合**：AutoGen + Semantic Kernel → Agent Framework
- **行业趋势**：Multi-agent + Durable Execution + Observability 是生产环境三大支柱

### ✅ 可立即应用
1. CLI 备份功能（`openclaw backup create`）
2. Brave LLM Context 模式（增强 web_search）
3. Tools profile 检查（避免工具丢失）
4. Telegram 多 group 管理
5. JSON trace 输出（兼容 observability 工具）

### ⚠️ 需评估
1. SSRF 策略变更（升级后检查配置）
2. Durability 机制（长时间运行的 subagent）
3. RAG 内置能力（目前依赖外部 API）
4. Agent Protocol 兼容（LangGraph 生态互通）

---

## 🚀 官方更新详情

### 最新版本：v2026.3.8（2026-03-09）

#### 新功能
1. **CLI 备份系统**
   - `openclaw backup create` 和 `openclaw backup verify`
   - 支持 `--only-config` 和 `--no-include-workspace`
   - 破坏性操作前自动提示备份
   - 🟢 **可立即用**

2. **Talk Mode 可配置静音超时**
   - 新增 `talk.silenceTimeoutMs` 配置项
   - 解决 Issue #17147
   - 🟢 **可立即用**

3. **Brave Web Search LLM Context 模式**
   - 新增 `tools.web.search.brave.mode: "llm-context"`
   - 返回提取的 grounding snippets + 源元数据
   - 适合 LLM 上下文增强
   - 🟢 **可立即用**

4. **ACP Provenance 元数据**
   - 新增 `openclaw acp --provenance off|meta|meta+receipt`
   - Agent 可保留和报告 ACP 来源上下文
   - 🟡 **需评估**（企业审计场景）

5. **TUI 自动推断 Agent**
   - 在 agent workspace 内启动时自动识别 agent
   - 🟢 **可立即用**

6. **macOS 远程网关改进**
   - 新增 onboarding 界面远程 token 配置
   - 🟡 **需评估**（仅 remote 部署场景）

#### Breaking Changes ⚠️
- **v2026.3.2**：默认 SSRF 策略改为 `"trusted-network"`
- **影响**：访问私有网络需显式配置
- **行动**：升级后检查 `openclaw.json` 的 SSRF 配置
- 🔴 **需立即检查**

#### 重要修复
- Telegram DM 去重（Issue #40005）
- Cron/Telegram 通知交付修复
- macOS overlay 崩溃修复
- Android Play 版本权限收窄
- Matrix DM 路由改进
- 飞书插件 onboarding 修复

#### 新配置项
```yaml
# Talk Mode 静音超时
talk:
  silenceTimeoutMs: 2000

# Brave LLM Context 模式
tools:
  web:
    search:
      brave:
        mode: "llm-context"

# ACP Provenance
acp:
  provenance: "off" | "meta" | "meta+receipt"

# Browser relay 绑定地址（WSL2 场景）
browser:
  relayBindHost: "0.0.0.0"
```

---

## 📦 ClawHub Skills 推荐

**2026-03 社区热门（非官方新增）：**

1. **Composio Skills** — 850+ SaaS 集成
   - `clawhub install ComposioHQ/skills`
   - 🟢 **可立即用**

2. **Fast.io MCP Skill** — 持久化文件存储
   - `clawhub install dbalve/fast-io`
   - 🟢 **可立即用**

3. **Self-Improving Agent** — 自我优化框架
   - 🟡 **需评估**

4. **OpenAI Whisper** — 本地语音转文字
   - `clawhub install steipete/openai-whisper`
   - 🟢 **可立即用**

5. **Vercel Platform** — Vercel 部署集成
   - `clawhub install TheSethRose/vercel`
   - 🟢 **可立即用**

⚠️ **安全提醒：**
- ClawHub 已集成 VirusTotal 扫描（2026-02）
- 社区建议：先在 Docker 隔离环境测试新 skill
- 定期运行 `clawhub audit --local`

---

## 💬 社区动态 & 配置优化

### 高频问题 & 解决方案

#### 1. Tools profile 丢失（Issue #34810）
**现象：** 突然失去 exec/read/write 工具

**原因：** 最近更新将部分用户的 tools profile 改为 `messaging`

**解决：**
```bash
openclaw config get tools  # 检查当前 profile
# 如果返回 { "profile": "messaging" }
# 编辑 ~/.openclaw/openclaw.json，改为 "profile": "coding"
```
🟢 **可立即用**

#### 2. Gateway 连接问题
**问题：** Gateway 显示 running 但 CLI/UI 无法连接

**修复：**
```bash
openclaw gateway install --force
openclaw gateway status
openclaw gateway logs --lines 200
```
🟢 **可立即用**

#### 3. Skill 安全性
**社区共识：**
- ClawHub 已集成 VirusTotal 扫描（2026-02-07）
- 建议：Docker 隔离测试 + 代码审查
- 拒绝要求"粘贴命令"或"运行下载文件"的 skill

🟢 **可立即用**

### 配置优化技巧

#### Telegram 多群组管理（热门实践）
**方案：**
```
项目 A → Telegram Group "Blog Pipeline"
项目 B → Telegram Group "Second Brain"
项目 C → Telegram Group "Project X"
```

**步骤：**
1. 创建 Telegram group
2. 添加 OpenClaw bot
3. 用 @GetIDsBot 获取 group ID
4. 告诉 agent 添加 group
5. 配置响应模式（mention-only / always-respond）

**优势：** 每个 group 独立上下文，避免单一对话混乱

🟢 **可立即用**

#### 内存管理优化（社区方案）
**推荐方案：SQLite + Hybrid Search**
- 技术栈：SQLite + vector search + keyword search + reranking
- 自动化：根据对话上下文自动注入相关记忆
- 优势：无需 agent 手动浏览文件、自动重要性评分、时间衰减

🟡 **需评估**（需自行实现）

---

## 🏆 竞品 & 生态动态

### LangChain / LangGraph
- **v1.0 GA 发布** — Agent Protocol 成跨框架标准
- **LangGraph Platform** — Cloud + VPC 混合部署
- **Deep Agents** — 复杂长时间任务子框架
- **LangSmith** — observability + evaluation + deployment

**对比 OpenClaw：**
- LangChain：灵活、图状态管理、低代码、强 observability
- OpenClaw：轻量、privacy-first、self-hosted

### Microsoft Agent Framework
- **RC 阶段** — 整合 AutoGen + Semantic Kernel
- **Durable Task 扩展** — 长时间运行、可恢复工作流
- **Azure 生态深度集成**

**对比 OpenClaw：**
- Agent Framework：企业级、durability、.NET 生态
- OpenClaw：独立、轻量、开发者友好

### CrewAI
- **角色化多智能体框架** — 模拟 team 协作
- **No-code + code-first** 双模式
- **快速部署**至垂直场景

**对比 OpenClaw：**
- CrewAI：角色清晰、业务驱动
- OpenClaw：通用、灵活

### 中国市场
- **零一万物 - 万智 2.5** — 企业级多智能体，"超级员工"概念
- **AgentX** — no-code multi-agent 平台
- **Jenova.ai** — 多模型接入 + MCP

🟡 **需进一步验证**

---

## 💡 可借鉴的能力

### 1. Agent Protocol（LangGraph v1.0）
- **开放标准** — 跨框架 agent 通信
- **OpenClaw 机会：** 实现兼容层，与 LangGraph 生态互通
- ✅ **可立即研究**

### 2. Durable Execution（Temporal / Microsoft）
- **长时间运行、可恢复工作流** — 适合企业级复杂流程
- **OpenClaw 现状：** subagent 暂不支持 durability
- ⚠️ **长期方向**（checkpoint + resume）

### 3. Observability First（LangSmith）
- **trace 每个决策点** — multi-agent handoff 追踪、error 降级
- **OpenClaw 现状：** session log + compaction 提供天然 trace
- ✅ **可立即优化**：输出 JSON trace、结构化 log

### 4. Evaluation Metrics（行业共识）
生产环境 agent 核心指标：
- Correctness（59%）
- Task completion（58%）
- Hallucination detection（45%）
- Tool calling accuracy（42%）
- Latency（37%）

**OpenClaw 机会：** 增加内置 evaluation 模块，记录这些指标

✅ **可立即用**

### 5. RAG 内置（LlamaIndex）
- **数据密集型 agent 框架** — 高级索引技术
- **OpenClaw 现状：** 依赖外部 API（Tavily、web_search）
- ⚠️ **可考虑**：增加 `skills/rag`（向量数据库 + 文档检索）

### 6. No-code Agent Builder（LangSmith / AgentX）
- **非技术用户构建 agent** — UI 配置 + 自然语言描述
- **OpenClaw 现状：** 开发者工具
- 📖 **仅供了解**（Sam 的优先级待定）

---

## 📈 行业趋势

### 1. Multi-Agent Systems 成为主流
- **40% 企业应用将嵌入 AI agents**（2026 预测）
- 从"单个 chatbot"到"agent team"协作
- **OpenClaw 定位：** 已支持 multi-agent（NOMI + NONO），方向正确 ✅

### 2. RAG 不再单独存在
- "Agent Skills = New RAG" — agent 通过 tool calling 调用 RAG
- **OpenClaw 现状：** 尚无内置 RAG，依赖外部 API
- ⚠️ **可考虑**：增加 `skills/rag`

### 3. Observability & Evaluation 是生产环境瓶颈
- **最大阻碍：** 信任和可靠性（26%）、监控与调试（18%）
- **OpenClaw 优势：** session log + compaction 提供天然 trace
- **改进方向：** 结构化 log、可视化 UI、自动 evaluation

### 4. 框架整合趋势
- **Microsoft：** AutoGen + Semantic Kernel → Agent Framework
- **行业共识：** 从"百花齐放"到"平台整合"
- **OpenClaw 定位：** 独立框架，需差异化（privacy-first、self-hosted）

### 5. Durable Execution 成为企业必备
- **Temporal 成为标准** — OpenAI Codex 生产环境使用
- 支持跨天等待、服务器重启后恢复
- **OpenClaw 现状：** subagent 暂不支持 durability
- ⚠️ **长期方向**：checkpoint + resume 机制

### 6. 中国市场 AI agent 快速发展
- 零一万物"硅基团队"、AgentX"一站式平台"
- **企业级多智能体"元年"**（2026）
- **OpenClaw 机会：** 中国开发者社区、privacy-conscious 用户、self-hosted 需求

---

## 🔍 可集成的外部服务/API

### 高优先级（可立即集成）
1. **Tavily API**（已集成 ✅）
2. **LangSmith API** — observability + evaluation
3. **Temporal** — durable workflow（长期方向）
4. **Model Context Protocol（MCP）** — 标准化 tool calling

### 中优先级（需评估）
1. **向量数据库（Pinecone / Weaviate / Chroma）** — 内置 RAG
2. **Zapier / n8n** — workflow automation 集成
3. **Notion / Linear / Jira API** — 深度业务集成（NOMI 已有 Notion）

### 低优先级（观察中）
1. **AgentX / Jenova** — 中国市场平台（需验证）
2. **Flyte / Airflow** — MLOps 场景（非 OpenClaw 主场）

---

## 📊 OpenClaw 现状分析

### 优势 ✅
1. **Privacy-first** — Self-hosted，无需依赖云服务
2. **轻量级** — 低门槛
3. **Multi-agent 内置** — NOMI + NONO 已是典型案例
4. **Flexibility** — Skill 系统 + 自定义 tool calling

### 需补强 ⚠️
1. **Observability** — 结构化 trace、可视化 UI、自动 evaluation
2. **Durability** — Checkpoint + resume（参考 Temporal / Agent Framework）
3. **RAG 内置** — 向量数据库 + 文档检索（目前依赖外部 API）
4. **Agent Protocol 兼容** — 与 LangGraph 生态互通

### 近期可落地 ✅
1. **输出 JSON trace** — 兼容通用 observability 工具
2. **增加 evaluation 指标** — 任务完成率、工具调用准确率（记录到 session log）
3. **研究 Agent Protocol** — LangGraph v1.0 标准，评估兼容成本
4. **调研 MCP** — 标准化 tool calling 协议

### 长期方向 📖
1. **Durability** — 长时间运行、可恢复的 subagent
2. **RAG Skill** — 内置向量数据库 + 文档检索
3. **No-code UI**（可选） — 降低非技术用户门槛

---

## ✅ 行动建议（NONO 视角）

### 立即执行 🔴
1. **检查 SSRF 配置** — 升级后确认私有网络访问配置
2. **检查 tools profile** — 确认当前是 `coding` 而非 `messaging`
3. **备份系统配置** — 运行 `openclaw backup create`
4. **启用 Brave LLM Context** — 修改配置文件

### 本周执行 🟡
1. **研究 JSON trace 输出** — session log 结构化，兼容 LangSmith 等工具
2. **调研 Agent Protocol** — LangGraph v1.0 标准，评估兼容成本
3. **测试 Telegram 多 group 管理** — 评估对 NOMI/NONO 协作的影响
4. **安全审计** — 运行 `clawhub audit --local`

### 本月评估 📖
1. **Durability 机制** — 研究 Temporal / Agent Framework 方案
2. **RAG Skill** — 评估向量数据库集成方案
3. **Evaluation 模块** — 设计内置 evaluation 指标记录

---

## 📊 数据来源 & 可信度

### 官方信息 🟢（12 项）
- GitHub releases、npm 版本、官方文档
- Microsoft DevBlogs、LangChain 官方
- VirusTotal 公告

### 社区验证 🟡（16 项）
- GitHub Issues、Reddit、Medium
- 技术博客、行业案例

### 未确认 🔴（3 项）
- OpenAI Swarm（实验性）
- 中国市场平台（需实测）

---

## 🔗 关键链接

- **GitHub Releases:** https://github.com/openclaw/openclaw/releases
- **npm openclaw:** https://www.npmjs.com/package/openclaw
- **ClawHub:** https://clawhub.ai/
- **Discord 社区:** discord.com/invite/clawd
- **LangChain 官方:** https://www.langchain.com/
- **Microsoft Agent Framework:** https://devblogs.microsoft.com/

---

**调研完成：** 2026-03-10 12:06 GMT+8  
**执行方式：** 3 个 sub-agent 并行，18 轮搜索（Tavily + web_search + web_fetch）  
**数据新鲜度：** < 24 小时  
**质量：** 🟢 官方信息为主 + 🟡 社区验证补充

---

_NONO — 系统架构与看家。完整报告保存于：`memory/research/openclaw-daily-2026-03-10.md` & `~/Desktop/NONO研究报告/OpenClaw每日调研-2026-03-10.md`_
