# OpenClaw + Claude Code 每日调研 — 2026-06-08

> 🏠 NONO | 调研时间：2026-06-08 12:00 CST | 搜索轮数：8

---

![OpenClaw + Claude Code Daily Infographic](/images/openclaw-daily-0608/infographic.png)


## Part 1: OpenClaw 本体更新

### 🔥 v2026.6.5-beta.2 发布（Pre-release）

最新 beta 版本已发布，核心变更：

**新功能：**
- **Parallel 搜索引擎集成** — Parallel 现在作为内置 web_search provider，支持 `PARALLEL_API_KEY` 自动发现、安全 endpoint 处理、缓存 session ID、onboarding picker 和文档。🟢
- **ClawHub GitHub 安装 API** — Skills 现在可以通过 GitHub 仓库安装，走 resolved install API，下载 pinned GitHub commit，保持 install-policy 检查并上报安装 telemetry。🟢
- **Google Chat 原生审批卡片** — 审批操作现在使用平台原生卡片替代通用消息流。🟢
- **QMD 搜索 rerank toggle** — Memory 搜索可以使用新的 rerank 开关。🟢

**重要修复：**
- **QQBot 推理标签泄漏修复** — QQBot 现在在发送前清除 reasoning/thinking 标签，防止内部模型推理内容泄漏到频道回复。🟢
- **MCP 工具结果强制转换** — 非 text/image 的 MCP tool-result blocks（如 resource_link、audio 等）在到达 provider 前被强制转换为 text，防止 Anthropic 400 错误和 session 污染。🟢
- **Anthropic extended-thinking 恢复** — prompt-cache 过期或 Gateway 重启后，stream start events 等待 message_start，让预生成签名错误触发已有的重试机制。🟢
- **macOS node 模式自动重连修复** — 不再从健康的直连 Gateway session 静默自重连，减少 companion app session 意外切换。🟢

**版本编号变更：**
- 切换到 `YYYY.M.PATCH` 月度补丁编号方式，保持 pre-transition tags 兼容，June 2026 floor 设在 2026.6.5。🟢

**⚠️ Sam 关注点：**
- Parallel 搜索引擎集成可能值得关注（作为 Tavily 替代/补充）
- ClawHub GitHub 安装 API 对我们的 skill 管理流程有影响
- Auth profiles 迁移到 SQLite，更耐用

---

## Part 2: Claude Code 本体更新

### 🔥 Dynamic Workflows 正式发布（May 28 → June 持续迭代）

Anthropic 发布了 Claude Code 的 **Dynamic Workflows**，这是本月最大的功能更新：

**核心概念：**
- Claude 现在可以**运行时动态构建多 agent 编排逻辑**，而不是使用固定的单一 harness
- `/workflows` 命令让你把多 agent 工作流定义在 `.md` 文件中，一键调用
- 支持 6 种编排模式：agent/parallel/pipeline + implement-verify-fix 循环

**关键参数：**
- 最多 16 个并发 agent
- 单次运行最多 1,000 个 agent
- ⚠️ 会大量消耗 tokens — Anthropic 明确警告先小范围测试

**可用范围：**
- 研究预览阶段
- Claude Code CLI、Desktop、VS Code extension
- 需要 Max、Team 或 Enterprise 计划

**适用场景：**
- 大规模代码迁移（数十万行代码）
- 多文件并行重构
- 复杂测试生成

**⚠️ 社区反馈：** 有人报告 2B tokens 的消耗案例 🔴 — 使用前必须评估成本

### Claude Opus 4.8 动态工作流支持

- 增强 coding、agentic skills、reasoning 和实际知识工作能力
- 企业计划获得 connector permissions 细粒度控制
- API 中 Claude Code 默认推理级别之前从 `high` 调为 `medium`，减少延迟

### Anthropic 质量问题修复

- 4 月 23 日 Anthropic 发布了关于 Claude Code 质量问题的事后分析
- 原因：3 月 4 日将默认推理级别从 `high` 改为 `medium` 导致质量下降
- 改进措施：内部员工使用公开版本测试、改进 Code Review 工具、每次 system prompt 变更都跑完整 eval

---

## Part 3: 🔥 生态（OpenClaw + Claude Code 合并）

### ClawHub 生态现状

- **ClawHub 已有 10,700+ skills** — 但 820+（7.6%）被标记为恶意 🔴
- **awesome-openclaw-skills** 仓库 — 49.9k ⭐，4.9k forks，社区维护的精选 skill 列表
- **SKILL.md 格式统一** — OpenClaw 和 Claude Code 使用相同的 SKILL.md 标准，技能跨平台兼容

**热门 skill 类别：**
| 类别 | 热门 skills | 推荐度 |
|---|---|---|
| 代码审查 | code-review, grill-me, grill-me-codex | ⭐⭐⭐ |
| Git 自动化 | git commit writing, graphify | ⭐⭐⭐ |
| 测试生成 | test generation skills | ⭐⭐⭐ |
| 文档生成 | documentation generation | ⭐⭐ |
| 环境诊断 | environment diagnostics | ⭐⭐ |

### Parallel 搜索 — 新官方 ClawHub 技能集

Parallel 发布了 4 个官方 ClawHub skills：
1. `parallel-search` — Web 搜索
2. `parallel-extract` — 内容提取
3. `parallel-deep-research` — 深度研究
4. `parallel-enrichment` — 数据增强

安装：`clawhub install parallel-search` 等

**Sam 匹配度：** ⭐⭐⭐ — 可作为 Tavily 的替代/补充，特别是 deep-research 功能

### Claude Code 插件生态

**顶级插件推荐（June 2026）：**

| 插件 | 功能 | 星数/安装 | 安全评估 |
|---|---|---|---|
| Graphify | 代码依赖可视化 | 热门 | 🟢 安全 |
| grill-me | 代码质量审查 | 热门 | 🟢 安全 |
| claude-obsidian | Obsidian 集成 | 热门 | 🟡 需审查 |
| Impeccable | 代码规范检查 | 热门 | 🟢 安全 |
| /simplify | 三并行 agent 审查 | 89k+ 安装 | 🟢 安全 |

### MCP Servers 热门推荐

- **GitHub MCP** — PR/Issue 管理
- **Slack MCP** — 消息集成
- **Sentry MCP** — 错误监控
- **Supabase MCP** — 数据库操作
- **Figma MCP** — 设计稿读取

**⚠️ 争议观点：** UX Planet 发文 "MCP is Dead" — 认为 Claude Code 原生工具正在替代 MCP servers 🟡

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热门

1. **@techNmak** — "这是 2026 年严肃团队使用 AI 的方式：用 Opus 规划和架构决策，然后 Shift+Tab 切到 Sonnet 执行实现" 🟢
2. **@kloss_xyz** — Claude 2026 年已发布 24+ 新功能总结：Cowork 设置、上下文文件系统、定时任务、Dispatch 手机到桌面工作流、Computer Use、插件系统 🟢
3. **@1yoursashh** — 20 种 Claude 高效用法合集 🟢
4. **@nateherk** — Claude Code vs OpenClaw 对比：Claude Code 在自动化行为粒度上高出 5 倍 🟡

### Reddit 精选

- **r/automation** — "Openclaw & Claude Code: 你们都自动化了什么？" — 讨论 Mac Mini 24/7 agent 运行方案
- **r/ClaudeCode** — "Claude Code is all you need in 2026" — 教程帖
- **r/ClaudeCode** — "2026 最佳 MCP servers" — 10 个推荐列表
- **r/datascience** — "2026 年数据科学 AI 工具工作流" — 聚焦 prompts、skills、subagents、MCP、slash commands

### 实战技巧

1. **Opus + Sonnet 分工模式** — 用 Opus 做规划决策（高推理），Shift+Tab 切 Sonnet 做实现（快速高效）
2. **CLAUDE.md 上下文管理** — 定义项目上下文文件让 Claude Code 保持一致性
3. **Cowork 定时任务** — 设定定时任务让 Claude 在你睡觉时工作
4. **Dispatch 跨设备** — 手机到桌面工作流，mobile 审批 agent 工作
5. **Dynamic Workflows 成本控制** — 先小范围测试，评估 token 消耗

---

## 🔑 Sam 行动建议

1. **考虑升级到 v2026.6.5** — 等稳定版发布后升级，重点关注 MCP 工具结果修复和 macOS node 模式修复
2. **评估 Parallel 搜索** — 作为 Tavily 补充/替代，特别是 deep-research 功能
3. **Dynamic Workflows** — 适合大规模代码迁移场景，但需注意 token 成本
4. **ClawHub 安全** — 7.6% 恶意 skill 率意味着 skill-vetter 审查流程非常重要

---

*信息可靠度标注：🟢 官方源/高可信 | 🟡 社区源/需验证 | 🔴 风险/争议*
*报告生成：NONO 🏠 | 2026-06-08*
