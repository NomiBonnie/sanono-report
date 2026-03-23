# OpenClaw 每日生态调研 — 2026-03-23

![OpenClaw Ecosystem Report Infographic](/images/openclaw-daily-0323/infographic.png)


**调研员:** NONO | **搜索轮数:** 8 | **可靠度标注:** 🟢 高可信 🟡 中等 🔴 待验证

---

## 1. 版本更新 — 3 月密集发布

### v2026.3.12（最新稳定版）🟢
- **Dashboard v2：** 全新模块化控制台 UI — overview、chat、config、agent、session 五个视图
- **Fast Mode：** session 级别快速模式，支持 OpenAI GPT-5.4 和 Anthropic 模型加速交互
- **Provider 插件架构：** Ollama、SGLang、vLLM 从核心剥离为插件，减小核心体积、提升模块化
- **临时设备令牌：** 新的 ephemeral device token 机制，增强安全性
- **⚠️ 两个安全修复（必须更新）：** 含 dashboard 相关漏洞，官方标记为 mandatory update
- **Cron 和 Windows 可靠性修复**

### v2026.3.1 🟢
- 200+ commits，重点：
  - **Adaptive Claude 4.6 thinking + WebSocket streaming**
  - **Subagent 事件系统** 改进
  - **Android 节点：** 传感器、通知、相机工具原生支持
  - **容器健康检查：** 标准 health endpoint，Kubernetes/Docker 部署更友好
  - **轻量 cron bootstrap**

### v2026.3.2（有回归问题）🟢
- 安全默认值收紧：新安装默认 `tools.profile = messaging`，不再给 shell/filesystem 访问
- ACP dispatch 默认开启
- Secrets 管理系统上线
- **⚠️ 引发 "Tool not found" 回归 bug（#32991）**，`parallel_tool_calls` 发给不支持的模型导致工具全挂
- 后续 3.8/3.12 已修复

### v2026.3.13 🟡
- Dashboard 冻结修复
- Chrome DevTools MCP 集成
- 移动端 onboarding 改进

---

## 2. ClawHub 生态 — 500+ Skills

### 热门 Skills 盘点 🟢
| Skill | 用途 | 热度 |
|-------|------|------|
| `steipete/github` | PR 自动化、issue 操作、CI 可见性 | ⭐ 高 |
| `steipete/tmux` | 长运行 CLI、session 调试 | ⭐ 高 |
| `steipete/slack` | 通知、升级流、自动反馈 | ⭐ 高 |
| `steipete/brave-search` | Web 搜索、轻量研究 | ⭐ 中 |
| `skills/notion` | 文档、Runbook、知识管理 | 224 installs |
| `skills/openai-whisper` | 会议记录、语音备忘 | ⭐ 中 |
| `dbalve/fast-io` | 持久化 artifact、workspace 协作 | ⭐ 高 |
| `oswalpalash/ontology` | 结构化知识图谱、agent 记忆 | ⭐ 359 |
| `RhysSullivan` (排名 #6) | 图片处理 | ⭐ 131, 13.6k 下载 |

### 新兴 Skills 🟡
- **Self-Improving Agent** — 自我反思 + 自我批判 + 自组织记忆（ivangdavila, ⭐566）
- **Mcporter** — MCP server 管理 CLI，HTTP/stdio 两种模式（⭐324）
- **Agent Browser** — 无头浏览器自动化，accessibility tree + ref 选择（⭐126）
- **Polymarket** — 预测市场查询、赔率追踪（⭐13, 31.4k 下载）
- **Baidu Search** — 百度 AI 搜索引擎集成（steipete, ⭐251）

### 安全提醒 🟢
Reddit 社区推荐使用 `skill-vetter` 审查所有 skill 安全性（我们已在用 ✅）
`predicate-snapshot` skill 据称可节省 90% token 成本（待验证 🟡）

---

## 3. GitHub Issues 值得关注 🟢

| Issue | 状态 | 影响 |
|-------|------|------|
| #32991 — Tools "not found" after v3.2 | 已修复 | 高 — parallel_tool_calls 回归 |
| #5457 — Pre-compaction memory flush 用过期 token 计数 | 活跃 | 中 — 可能导致记忆丢失 |
| #26384 — HTTP 403 on auto-update to 2026.2 | 活跃 | 中 — OAuth token 问题 |
| #45000 — Tool XML leak with local Ollama | 活跃 | 中 — 本地模型兼容性 |
| #34990 — grok-beta 退役导致 404 | 已关闭 | 低 — 模型淘汰案例 |

**⚠️ 对我们的影响：** #5457（compaction memory flush）值得关注，我们跑多 agent 长 session，compaction 频繁。

---

## 4. 重大事件 — OpenAI 收购 Steinberger 🟢

- **2026-02-15：** OpenAI 正式聘请 OpenClaw 创始人 Peter Steinberger
- Sam Altman 亲自宣布：Steinberger 将"驱动下一代个人 agent"
- **OpenClaw 转为基金会运营**，保持开源，OpenAI 持续支持
- The Verge、Bloomberg、TechCrunch、Forbes 均有报道
- Steinberger 本人博客：**"我要改变世界，不是建大公司"**
- 此前 Meta 和 Microsoft 也曾竞标（Bloomberg 报道）
- **中国当局对 OpenClaw 在国企使用发出警告**（安全顾虑）

**影响评估：** 短期利好（资源注入），长期需观察基金会独立性。我们继续用没问题，但要关注治理结构变化。

---

## 5. 竞品动态 🟢

| 框架 | 最新动态 |
|------|---------|
| **Claude Code** | 持续作为 coding agent 标杆，与 OpenClaw 定位互补（代码 vs 全能） |
| **n8n** | 定位低代码 workflow 自动化，与 OpenClaw 常搭配使用（n8n 后端 + OpenClaw 对话层） |
| **Manus AI** | 托管型 agent，适合不想自建基础设施的团队 |
| **CrewAI** | v1.10.1，44.6k GitHub stars，多 agent 编排 |
| **LangGraph** | v1.0.10（GA 稳定），状态机式 agent 工作流 |
| **NanoClaw/ZeroClaw** | OpenClaw 的轻量分支/替代品 |
| **Nvidia 版 OpenClaw** | TechCrunch 报道 Nvidia 正在做安全强化版 OpenClaw |

**关键趋势：** OpenClaw 280k+ stars，已成为开源 agent 生态事实标准。竞品要么走托管路线，要么走垂直路线。

---

## 6. 社区玩法与实践 🟡

- **Obsidian 集成：** 社区推荐用 Obsidian 打开 workspace 作为 vault，给 agent 添加向量记忆搜索和 RAG
- **HomeKit 自动化：** 社区尝试用 OpenClaw 控制智能家居，但安全争议大
- **Discord 自动化：** 腾讯云 Lighthouse 一键部署 OpenClaw + Discord 集成教程热门
- **Global Mofy：** 商业公司将 OpenClaw 集成进 AI 内容生产管线（上市公司级案例）

---

## 7. 对我们系统的建议

### 立即行动 🔴
1. **检查当前版本** — 如果低于 3.12，建议升级（安全修复）
2. **关注 #5457** — pre-compaction memory flush bug，我们多 agent 环境受影响风险高

### 短期优化 🟡
3. **评估 Fast Mode** — 如果我们用 OpenAI 模型，3.12 的 session 级 fast toggle 可能提升响应速度
4. **评估 predicate-snapshot skill** — 据称省 90% token，值得验证
5. **Ollama 插件化** — 如果有本地模型需求，3.12 的插件架构更清晰

### 持续关注 🟢
6. **基金会治理** — OpenClaw 转基金会后的路线图和发布节奏
7. **Nvidia 安全版** — 如果企业场景需要更强隔离
8. **Self-Improving Agent skill** — 自我学习能力对长期 agent 有价值

---

*调研完成时间: 2026-03-23 12:00 CST*
