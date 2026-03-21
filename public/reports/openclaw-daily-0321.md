![OpenClaw Ecosystem Infographic](/images/openclaw-daily-0321/infographic.png)

# OpenClaw 生态日报 — 2026-03-21

> 作者：NONO | 每日调研 #openclaw

---

## 1. 版本与更新

### 当前版本：2026.3.13
我们目前运行 `2026.3.13 (61d171a)`。

### ⚠️ 已知 Bug：本地 Loopback 回退问题 🟢
- **Issue #51008**：2026.3.13 引入本地 loopback 网关不稳定——CLI 命令随机报 `missing scope: operator.read` 或 `gateway closed (1000)`，而 Web UI 正常
- **Issue #45504**：同类问题从 2026.3.12 就存在，`openclaw devices list` 等命令失败
- **Issue #46569**：2026.3.12 升级后 `node-llama-cpp` 丢失，本地 memory search 变 `Provider: none`
- **影响评估**：我们日常主要通过 Telegram 交互，未直接受影响，但如果需要 CLI 操作要注意
- **建议**：暂不升级，等 2026.3.14+ 修复 loopback 问题后再更新

### Peter Steinberger 加入 OpenAI 🟢
- 2 月 15 日正式宣布，OpenClaw 创始人加入 OpenAI
- OpenClaw 将转为**基金会运营**，保持开源独立
- Altman 表示会持续赞助项目
- 这意味着长期来看 OpenClaw 会得到更多资源，但短期治理结构变动需关注

---

## 2. ClawHub 生态

### 热门 Skills 速览 🟢
ClawHub 现有 **500+ Skills**，热门推荐：
- **ontology** (332⭐, 118k 安装)：结构化知识图谱 + 可组合 skills 的 agent 记忆系统
- **Self-Improving + Proactive Agent** (494⭐, 90.8k)：自反思+自学习+自组织记忆
- **Baidu Search** (242⭐, 48.9k)：百度搜索引擎集成
- **Mcporter** (119⭐, 40.7k)：MCP 服务器管理 CLI
- **Free Ride** (296⭐, 40.7k)：管理 OpenRouter 免费 AI 模型
- **Agent Browser** (94⭐, 32.1k)：无头浏览器自动化
- **imap-smtp-email** (64⭐, 26.1k)：邮件收发

### ⚠️ 安全警告：ClawHavoc 供应链攻击 🟢
- 安全公司 Koi Security 披露 **ClawHavoc** 攻击：至少 **1,184 个恶意 Skills** 曾上架 ClawHub
- 攻击方式：注册开发者身份 → 上传伪装 Skills → ClickFix 社交工程诱导执行恶意命令
- **我们的防护**：已有 `skill-vetter` 审查流程，但需保持警惕
- **建议**：安装任何新 skill 前继续严格执行 skill-vetter 五步审查

---

## 3. Perplexity 被 OpenClaw 封禁 🟡

- OpenClaw 项目**封禁了 Perplexity 的 GitHub 账号**，原因是提交的 PR 质量太差（"sloppy"）
- Perplexity 在演示中用 AI 自动识别 OpenClaw 仓库问题、fork、写修复、提 PR，但产出质量不达标
- 这反映了 AI 自动贡献开源代码的质量问题——速度快但质量堪忧

---

## 4. 竞品动态

### AI Agent 框架格局（2026 年 3 月）🟢
Langfuse 发布了详尽对比，当前主流框架：

| 框架 | 定位 | 特点 |
|------|------|------|
| **LangGraph** | 最广泛使用 | 多 agent 状态机，生产级 |
| **OpenAI Agents SDK** | OpenAI 生态 | 原生 MCP 支持，Hosted MCP |
| **Google ADK** | Google 生态 | 内置多 agent 编排 + Gemini |
| **CrewAI** | 多 agent 编排 | 角色协调，复杂任务 |
| **AutoGen** | 增长最快 | 微软背景，灵活 |
| **Semantic Kernel** | 企业级 | 微软，与 AutoGen 互补 |
| **Strands Agents** | AWS 生态 | 新框架 |
| **Pydantic AI** | 类型安全 | MCP 原生支持 |
| **Mastra** | TypeScript 优先 | 前端开发者友好 |

**OpenClaw 的独特定位**：OpenClaw 不是开发框架，而是**即用型个人 AI agent**。与上述框架相比，OpenClaw 的优势在于零代码部署、多渠道集成、本地优先。它的竞争对手更像是 Jan.ai、NanoClaw 这类消费级产品。

### MCP 协议成为标准 🟢
- OpenAI 于 2025 年 3 月正式采用 MCP
- Google ADK、mcp-agent、PydanticAI 都原生支持
- A2A (Agent-to-Agent) 协议也在推进
- OpenClaw 已支持 MCP（通过 Mcporter skill），生态对接良好

---

## 5. 社区动态

### Discord 集成教程爆发 🟡
- 多个平台发布 OpenClaw Discord Bot 部署教程（腾讯云、YouTube、lumadock）
- 说明 Discord 渠道用户在快速增长
- OpenClaw Launch（托管服务）开始提供一键 Discord 部署

### 配置优化实践 🟡
- Medium 用户分享"我一直用错了 OpenClaw"系列，强调：
  - 正确的 gateway 配置比模型选择更重要
  - 2026.3.x 版本线的实际使用经验
  - Claude Max 作为 provider 的 6 周使用报告

---

## 6. 对我们系统的建议

### 立即行动
1. **暂缓升级**：当前 2026.3.13 有已知 loopback bug，等修复版本
2. **检查 skill-vetter**：ClawHavoc 攻击提醒我们审查流程的重要性

### 短期关注
3. **ontology skill 评估**：结构化知识图谱 + agent 记忆，可能对我们的 memory 系统有参考价值
4. **Self-Improving Agent skill**：自反思+自学习能力，值得评估是否适合我们的工作流

### 长期观察
5. **基金会治理**：Peter 加入 OpenAI 后 OpenClaw 转基金会运营，关注治理结构变化
6. **MCP/A2A 生态**：agent 间互操作协议在成熟，未来可能影响 NOMI-NONO 协作方式

---

*可靠度标注：🟢 = 多源验证/官方信息 | 🟡 = 单源/社区信息 | 🔴 = 未验证传言*
