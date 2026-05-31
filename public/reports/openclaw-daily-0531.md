# OpenClaw + Claude Code 每日调研 — 2026-05-31（周六）

![OpenClaw + Claude Code Weekly Digest Infographic](/images/openclaw-daily-0531/infographic.png)

## Part 1: OpenClaw 本体更新

### v2026.5.27 Stable 已发布 🟢
- **安全与内容边界收紧**：group prompt metadata 不再进入 system prompt，拒绝高风险 runtime/exposure 设置
- **Codex app-server 恢复改进**：helper failure 不再摧毁共享 runtime state
- **Gateway 和回复路径加速**
- **Provider 覆盖扩展**：embeddings、DeepInfra、Pixverse、VLLM、Claude CLI OAuth、Anthropic direct model IDs
- GitHub Stars: **374,000** ⭐

### v2026.5.28-beta.4 预览 🟡
- Sub-agent workspace/cwd 状态隔离（重要！防止 agent 间状态污染）
- Hook context 保持 prompt-local
- Session lock 在 timeout abort 后正确释放
- 新增：**Workboard 协调工具**、**GitHub Copilot agent runtime 支持**、**Codex Supervisor 插件路径**
- 加密 PDF 提取、iOS Pro 增强、provider-backed 语音目录
- 更严格的插件信任元数据

### v2026.5.22 亮点回顾（上周发布，仍值得关注）
- **Meeting Notes 插件**：Discord 语音频道实时会议记录 → 结构化笔记
- **/models 端点性能提升 4,100×**：从 ~20s 降到 ~5ms
- **Grok/xAI 完整 web search 支持**：复用 OAuth 配置
- **剪贴板 base64 图片自动转换**：粘贴 data:image 字符串自动变附件
- Chat session 搜索 + 分页

### 社区痛点 🔴
- WhatsApp typing/delivery 延迟仍有报告
- 飞书 DM dispatch 回归 bug
- Cron agent-turn idle timeout 问题
- 浏览器 existing-session attach 超时

---

## Part 2: Claude Code 本体更新

### Week 22（May 25–29）— 重磅更新 🟢

#### 1. Claude Opus 4.8 正式上线
- **默认模型**（Max、Team Premium、Enterprise pay-as-you-go、API）
- 默认 high effort，硬任务用 `/effort xhigh`
- 需要 v2.1.154+
- **Fast mode 研究预览**：更低价格的快速模式

#### 2. Dynamic Workflows（研究预览）⭐
- Claude 自动编写编排脚本，跨多个 sub-agent 后台运行
- 适用：codebase-wide audit、大规模迁移、需要交叉验证的研究
- 用法：描述任务 + 包含 "workflow" 关键词
- `/workflows` 管理运行中的 workflow
- **上限 1,000 个 sub-agent**

#### 3. Security Guidance 插件
- 自动审查代码安全问题
- 作为插件形式发布

#### 4. Worktrees 功能
- 管理独立的 Git 分支隔离工作
- 并行开发不冲突

### 近期版本线 v2.1.150 → v2.1.157
- CJK 历史边界修复（中文用户相关！）
- MCP multi-block 错误截断修复
- macOS Apple Silicon 语音权限修复
- PowerShell stderr progress 误报修复
- 潜在 >1GiB Edit OOM 修复

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### MCP Servers 热门推荐

| 名称 | 功能 | 适合 Sam 场景 |
|---|---|---|
| **openclaw-mcp-server** (Helms-AI) | 将 OpenClaw Gateway 工具暴露给 Claude Code | ⭐⭐⭐ 直接打通两个工具 |
| **Totalum MCP** | 数据库/CRM 集成 | ⭐ 一般 |
| **GitHub MCP** | GitHub 深度集成 | ⭐⭐ 开发场景有用 |
| **Nimbalyst Tracker** | 规划和 bug 追踪 | ⭐⭐ 项目管理 |

### ClawHub 热门 Skills（2026 年 5 月）

| Skill | 功能 | 推荐度 |
|---|---|---|
| **web-browsing** | 基础浏览能力 | 已内置 |
| **felo-search** | AI 增强搜索 | ⭐⭐ |
| **felo-superAgent** | 增强 agent 能力 | ⭐⭐ |
| **GitHub skill** | GitHub 操作自动化 | ⭐⭐⭐ 已有 |

### 值得关注的新项目
- **Firecrawl-backed search/scrape**：OpenClaw beta 中集成，替代传统爬虫（🟡 未正式发布）
- **Claude Code Worktrees**：并行分支开发，适合多任务同时进行
- **`/btw` side-question flow**：快速插入旁路问题（🟡 未正式发布）
- **pluggable sandbox backends**：可插拔沙箱后端（🟡 未正式发布）

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 精选

1. **@PrajwalTomar_ — OpenClaw + Hermes Pro Tip** 🟢
   - OpenClaw 配合 Hermes 模型的使用技巧
   - [链接](https://x.com/PrajwalTomar_/status/2054856251759325222)

2. **@iamlukethedev — v2026.5.22 速度评测** 🟢
   - "This release is all about speed" — 实测 /models 端点性能提升
   - [链接](https://x.com/iamlukethedev/status/2058400670730903901)

3. **@NickSpisak_ — 多工具整合建议** 🟢
   - 对比 Claude Code、OpenClaw、Codex、Cursor 的使用场景
   - [链接](https://x.com/NickSpisak_/status/2033650261240303673)

### Reddit 精选

4. **r/automation — 你用 OpenClaw + Claude Code 自动化了什么？** 🟢
   - 社区分享：PyCharm 插件配合 Claude Code 做代码审查
   - 轻量编辑用 OpenClaw，重度开发用 Claude Code

5. **r/openclaw — 真实使用场景汇总** 🟢
   - AGENTS.md 和 config 快速编辑
   - Cron 任务自动化（日报、监控）
   - 多 agent 协作（类似我们的 NOMI + NONO 模式）

### 实用技巧

6. **Claude Code Dynamic Workflows 实战** 🟢
   - 一句话触发：任务描述 + "workflow" 关键词
   - 适合大规模代码迁移、全仓库审计
   - 最多 1,000 个 sub-agent 并行

7. **Git Worktrees 并行开发** 🟢
   - Claude Code 原生深度支持 worktrees
   - 每个 worktree 独立 agent session
   - 避免分支切换的上下文丢失

---

## 💡 Sam 行动建议

1. **考虑升级 OpenClaw 到 v2026.5.27**：安全性和稳定性改进显著
2. **试试 Claude Code Dynamic Workflows**：适合你的多项目管理场景
3. **关注 openclaw-mcp-server**：可以打通 OpenClaw 和 Claude Code
4. **Opus 4.8 已是默认模型**：如果感觉响应变化，可以调整 effort 级别

---

*调研时间：2026-05-31 12:00 CST*
*搜索轮次：7 轮（Tavily API）*
*信息来源：Blink、OpenClaw 官方、Claude Code Docs、Reddit、Twitter/X、MindStudio、Releasebot*
