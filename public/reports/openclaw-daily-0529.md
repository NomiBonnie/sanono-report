# OpenClaw + Claude Code 每日调研 — 2026-05-29

![OpenClaw & Claude Code Weekly Pulse Infographic](/images/openclaw-daily-0529/infographic.png)


## Part 1: OpenClaw 本体

### OpenClaw 2026.5.27 发布（最新稳定版）
🟢 可靠度：高（GitHub Releases 官方源）

**安全加固：**
- Group prompt text 隔离出 system prompt，防止注入
- 重复点号域名标准化，阻断 side-effect 命令包装器
- 无认证 Tailscale 暴露被拒绝，node/device-role 审批需要 admin 权限

**性能优化：**
- Gateway 回复路径更快：session 读取、plugin metadata 指纹、auth env 快照、tool-search catalog 减少热路径重新发现
- 可见回复不再继承隐藏的 cleanup timeout

**模型与提供商：**
- OpenAI-compatible embedding providers 成为核心支持
- DeepInfra 目录浏览加载完整凭证感知模型集
- Pixverse 添加视频生成和 API 区域选择
- VLLM thinking params 接线，Claude CLI OAuth overlay 支持 PI auth profiles

**Codex 运行时改进：**
- Codex runtime 模型优先解析，workspace memory 通过 tools 路由
- 共享 app-server 客户端在启动和 spawned-helper 失败后存活

**Sam 相关度：** ⭐⭐⭐ 安全加固和 Gateway 性能优化直接影响日常使用

---

## Part 2: Claude Code 本体

### 🔥 Claude Opus 4.8 发布（5月28日）
🟢 可靠度：高（Anthropic 官方公告）

Anthropic 发布 Claude Opus 4.8，替代 Opus 4.7：
- **编码、代理任务、专业工作** 全面提升
- **Dynamic Workflows**：Claude Code 新功能，处理超大规模问题
- **Fast Mode**：Opus 4.8 快速模式比之前模型便宜 3 倍（2.5× 速度）
- **Effort Control**：claude.ai 用户可控制 Claude 投入的精力级别
- CursorBench 上超越所有先前 Opus 模型，tool calling 更高效
- Legal Agent Benchmark 最高分，首个突破 10% all-pass 标准的模型
- **价格不变**，同日可用

**Sam 相关度：** ⭐⭐⭐⭐⭐ 我们的主力模型，直接升级

### Claude Code Week 20（5月11-15）— v2.1.139 → v2.1.142
🟢 可靠度：高（code.claude.com 官方文档）

三大新功能：

1. **Agent View（研究预览）**
   - `claude agents` 命令打开一个面板管理所有 Claude Code session
   - 显示运行中、等待输入、已完成的任务
   - 可同时分发 bug fix、PR review、flaky test 调查作为三行任务
   - 按 `←` 返回列表，后台 session 持续运行

2. **/goal 命令（v2.1.139）**
   - 设置完成条件，Claude 跨多轮自动工作
   - 每轮后快速模型检查条件是否满足
   - 不满足则自动开始下一轮，无需手动 prompting

3. **Fast Mode 默认 Opus 4.7**
   - Fast mode 现在默认使用 Opus 4.7

### Code with Claude SF 2026 大会回顾（5月6日）
🟢 可靠度：高（多源交叉验证）

- **Rate Limit 翻倍**：Claude Code 五小时限额在 Pro/Max/Team/Enterprise 全部翻倍
- **Peak-hours 限制取消**：Pro 和 Max 不再有高峰期降速
- **SpaceX 合作**：300+ MW 新算力，220,000+ NVIDIA GPU，一个月内上线
- **Managed Agents 新功能**：
  - **Dreaming（研究预览）**：Agent 空闲时后台自我改进，审视记忆和质量
  - **Outcomes（公测）**：衡量 Agent 结果
  - **Multiagent Orchestration（公测）**：多 Agent 协调
  - Webhooks 通知 Agent 完成
- **Anthropic 收购 Vercept** 推进 computer-use 能力
- **Claude Code v2.1.126-v2.1.131**：
  - `--plugin-url` 会话级插件 zip
  - `claude project purge` 完整项目状态清除
  - `skillOverrides` 设置生效
  - `/mcp` 显示每个 server 的 tool 数量

**Sam 相关度：** ⭐⭐⭐⭐⭐ Rate limit 翻倍 + Dreaming 功能对我们的 agent 架构有重大影响

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### ClawHub 生态现状
🟡 可靠度：中（第三方汇总）

- ClawHub 现有 **13,000+** 社区构建的 Skills
- 五大类别：生产力（Notion/Linear/日历）、通信（AgentMail/Telegram）、浏览器自动化（Playwright）、研究数据、安全（SecureClaw）
- ⚠️ 安全研究人员发现数百个恶意 Skills，供应链攻击面是真实威胁

### MCP Server 生态
🟢 可靠度：高（多源验证）

**核心推荐（2026排名）：**
| MCP Server | 功能 | 适合 Sam |
|---|---|---|
| GitHub MCP | PR/Issues/Actions/安全扫描 | ⭐⭐⭐⭐ |
| Playwright MCP | 浏览器自动化 | ⭐⭐⭐ |
| Postgres MCP | 数据库查询 | ⭐⭐ |
| Linear MCP | 项目管理 | ⭐⭐ |
| Slack MCP | Slack 集成 | ⭐⭐⭐ |

**新趋势：**
- **Claude Code 可作为 MCP Server**：`claude mcp serve` 让其他 AI 工具（Cursor/Windsurf）远程调用 Claude Code
- **MCP Tool Search**：懒加载 MCP servers，上下文使用减少 95%
- **50+ curated MCP servers** 涵盖开发、浏览器、数据库等

### Agent Skills 开放标准
🟢 可靠度：高（Anthropic 官方）

- Anthropic 推出 **Agent Skills** 开放标准（agentskills.io）
- Skills 跨 AI 平台通用
- Claude.com 新增 Skills **目录**（claude.com/connectors）
- 企业/团队级 Skills 管理

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热门帖子

1. **Marco Lancini — "My Claude Code Setup (2026 Edition)"** 🔥
   - 全局设置、安全护栏、context/plan/code 工作流
   - Subagent 和插件配置
   - 实用配置参考

2. **Every — "Every Claude Code Hack I Know (March 2026)"**
   - Claude Code 直接访问 GitHub 代码和公司策略文件夹
   - 跨系统集成技巧

3. **Google Stitch 2.0 + Claude Code via MCP** 🆕
   - 通过 MCP 把 Google Stitch 2.0 接入 Claude Code
   - 建议：明确告诉 Claude Code 哪些功能已实现，哪些跳过

4. **"3 workflows for GTM and engineering teams"**
   - 模仿 Anthropic 团队内部使用方式的系统化文档
   - GTM 和工程团队的具体工作流

### Reddit 精选

- **r/ClaudeCode** — "10 best MCP servers for Claude Code"（热门排名帖）
- 用户用 Claude Code 重建 home lab、管理求职、组织笔记系统
- **r/claude** — Anthropic 5月25日公告讨论：AI 安全工程 vs 桥梁/飞机工程的对比

### 实用技巧

- **Sub-Agent 分离策略**：用 sub-agent 处理探索/研究，主 session 只做编辑（保持上下文干净）
- **模块化 Skill 系统**：跨多个客户端复用 Skill 的架构模式
- **定时自动化**：用 cron + Claude Code 构建无人值守的 AI Agent
- **`/goal` 新玩法**：设定条件后 Claude 自动循环工作，适合大规模重构

---

## 📊 今日总结

| 板块 | 热度 | 关键词 |
|---|---|---|
| OpenClaw | 🟡 常规更新 | v2026.5.27 安全加固 |
| Claude Code | 🔴 重大更新 | Opus 4.8、Agent View、/goal |
| 生态 | 🟡 稳步增长 | 13K+ Skills、MCP 成熟 |
| 社区 | 🟢 活跃 | Multi-agent、Dreaming 讨论 |

**最重要的事：** Claude Opus 4.8 昨天发布，性能全面提升，Dynamic Workflows + Fast Mode 降价。建议关注我们当前模型配置是否需要更新。
