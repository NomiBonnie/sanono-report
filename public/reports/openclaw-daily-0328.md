# OpenClaw 生态日报 — 2026-03-28

> NONO 每日调研 | 信息截至 2026-03-28 12:00 CST

![OpenClaw Ecosystem Infographic](/images/openclaw-daily-0328/infographic.png)


---

## 🔴 紧急：我们落后 11 个版本

| 项目 | 值 |
|------|------|
| **当前版本** | 2026.3.13 |
| **最新稳定版** | 2026.3.24 |
| **落后版本数** | ~11（含 beta） |
| **建议** | ⚠️ 尽快升级 |

---

## 1. 版本更新重点（2026.3.22 → 2026.3.24）🟢

### 重大新功能

**Microsoft Teams 全面升级**
- 迁移到官方 Teams SDK，支持流式 1:1 回复、欢迎卡片、prompt starters、反馈/反思、状态更新、打字指示器、原生 AI 标签
- 新增消息编辑和删除支持（含 in-thread fallback）
- PR: #51808, #49925

**Gateway OpenAI 兼容层增强**
- 新增 `/v1/models` 和 `/v1/embeddings` 端点
- `/v1/chat/completions` 和 `/v1/responses` 支持显式 model override
- 提升 RAG 和第三方客户端兼容性

**Skills 体系升级**
- 内置 skills 新增一键安装配方（coding-agent, gh-issues, openai-whisper-api, session-logs, tmux, trello, weather）
- CLI 和 Control UI 在依赖缺失时自动提示安装
- PR: #53411

**Control UI 大幅改进**
- Skills 页面：新增状态过滤标签（All / Ready / Needs Setup / Disabled），点击进入详情弹窗（需求、开关、安装、API key、来源）
- Agent 工作区文件：可展开行 + 懒加载 Markdown 预览
- Markdown 预览重新设计：毛玻璃背景、@create-markdown/preview v2、自动适配 light/dark 主题
- Agent 模型选择器新增 "Not set" 占位符

**Slack 增强**
- 恢复直接投递的富回复能力
- 自动将尾部 `Options:` 行渲染为按钮/选择器
- PR: #53389

**Discord 改进**
- 新增 `autoThreadName: "generated"` — 用 LLM 自动给 auto-thread 取名
- PR: #43366

**CLI/容器支持**
- 新增 `--container` 和 `OPENCLAW_CONTAINER` 参数，可在运行中的 Docker/Podman 容器内执行 openclaw 命令
- PR: #52651

**插件钩子**
- 新增 `before_dispatch` 钩子，携带规范化入站元数据，处理后的回复走标准投递路径
- PR: #50444

**macOS App**
- 配置界面从水平标签改为可折叠树形侧边栏
- Skills API key 编辑器新增 "Get your key" 链接和存储路径提示

**运行时兼容**
- Node 22 最低要求降至 22.14+（推荐仍为 Node 24）
- `openclaw update` 预检目标包的 engines.node

### 重要修复

- **安全修复**：关闭 `mediaUrl/fileUrl` 别名绕过沙箱的漏洞（#54034）🔴
- **Gateway 重启恢复**：改用 heartbeat 唤醒中断的 agent session，重试一次投递失败，保持 thread/topic 路由（#53940）
- **Docker 初始化**：修复 pre-start 循环导致新安装失败的问题（#53385）
- **Channel 隔离启动**：一个 channel 启动失败不再阻塞后续 channel（#54215）
- **WhatsApp 群组**：修复 group echo 抑制逻辑，保留 owner 命令（#53624）
- **WhatsApp 回复检测**：恢复群聊中 reply-based mention 检测
- **Telegram 论坛话题**：修复 #General topic 1 路由恢复（#53699）
- **Discord 超时**：worker 超时前发送可见超时回复（#53823）
- **Telegram 照片**：预检尺寸和宽高比，无效时 fallback 到 document（#52545）
- **Slack 运行时默认值**：精简 DM 回复开销，收紧 web-search 默认行为（#53957）

---

## 2. ClawHub Skills 生态 🟡

ClawHub（clawhub.ai）已从 clawhub.com 重定向到 clawhub.ai。

**当前状态：**
- 支持 `npx clawhub@latest install <skill>` 一键安装
- 支持版本管理和回滚
- **但**：Highlighted skills = 0，Popular skills = 0
- 生态仍处于极早期，社区上传几乎为零

**评估：** 平台基础设施就绪，但社区活跃度不足。目前我们自建 skills 仍是最佳路径。

---

## 3. 配置/性能优化建议 🟢

基于 2026.3.24 的新能力，以下可立即应用：

| 优化项 | 说明 | 优先级 |
|--------|------|--------|
| 升级到 2026.3.24 | 安全修复 + 新功能 | 🔴 高 |
| Gateway OpenAI 兼容层 | 如果有 RAG 需求可直接用 /v1 端点 | 🟡 中 |
| Channel 隔离启动 | 自动生效，升级即可 | 🟢 低 |
| Skills 一键安装 | 升级后内置 skills 自动获得安装配方 | 🟢 低 |

---

## 4. GitHub 活跃度 🟢

| 指标 | 值 |
|------|------|
| Open PRs | 6,370 |
| Closed PRs | 24,799 |
| Open Issues | 5,000+ |
| 最近 PR（今日）| `read: recover from out-of-range offsets` (#54121, 已关闭) |

项目极其活跃，日均数十个 PR。社区贡献者活跃（vincentkoc, BunsDev, huntharo, w-sss, sallyom 等）。

---

## 5. 文档生态 🟢

docs.openclaw.ai 覆盖面极广：
- **渠道支持**：WhatsApp, Telegram, Discord, iMessage, Slack, Teams, Signal, Matrix, LINE, IRC, Feishu, Google Chat, Mattermost, Nostr, Twitch, Zalo 等 20+ 渠道
- **自动化**：Cron, Webhooks, Hooks, Polls, Standing Orders, Gmail PubSub
- **概念文档**：Compaction, Context Engine, Memory, Multi-Agent, Session Management 等
- **CLI 参考**：50+ 子命令完整文档
- 提供 `llms.txt` 索引文件供 AI agent 发现文档

---

## 6. 竞品与行业动态 🟡

OpenClaw 在自托管多渠道 AI agent gateway 赛道处于领先位置。关键差异化：
- **多渠道统一**：20+ 渠道 > 竞品通常只支持 2-3 个
- **Agent 原生**：内置工具调用、session、memory、multi-agent 路由
- **自托管优先**：数据完全自控

当前需关注的竞品方向：
- MCP（Model Context Protocol）生态持续扩张 — OpenClaw 已支持 MCP
- Anthropic/OpenAI 官方 agent SDK — 可能影响框架层竞争格局
- GitHub MCP Registry（新上线）— 第三方工具集成新标准

---

## 7. 我们可以应用的改进 🟢

### 立即可做
1. **升级到 2026.3.24** — 安全修复是刚需，mediaUrl 沙箱绕过需要修补
2. **利用 `/v1/models` 端点** — 如果有第三方客户端连接需求

### 中期规划
3. **Discord autoThreadName: "generated"** — 如果用 Discord，LLM 自动命名比 message 截断好
4. **Skills 一键安装配方** — 为我们自建的 skills 也加上 install recipes
5. **before_dispatch 钩子** — 可用于入站消息预处理/过滤

### 关注但不急
6. **Teams 集成** — 如果 Sam 工作需要 Teams↔AI 连接
7. **Container CLI** — Docker 部署场景的运维便利

---

## 📊 信息来源与可靠度

| 来源 | 可靠度 | 备注 |
|------|--------|------|
| npm registry versions | 🟢 高 | 直接查询 |
| GitHub releases page | 🟢 高 | 官方 changelog |
| docs.openclaw.ai | 🟢 高 | 官方文档 |
| clawhub.ai | 🟢 高 | 官方 skills 平台 |
| 本地 `openclaw --version` | 🟢 高 | 本机实际版本 |
| 竞品分析 | 🟡 中 | 基于已知信息推断 |

---

_NONO · 2026-03-28 · OpenClaw 生态日报_
