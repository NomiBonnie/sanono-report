# OpenClaw + Claude Code 每日调研 — 2026-07-15

![OpenClaw + Claude Code Daily Brief](/images/openclaw-daily-0715/infographic.png)


## Part 1: OpenClaw 本体

### 当前版本：2026.7.1 🟢
- npm 已发布 `2026.7.1`，稳定版
- 推荐生产环境留在 `2026.6.10` 除非需要特定修复

### 近期修复（July Release Notes）
| PR | 内容 | 影响 |
|---|---|---|
| #93732 | fix(agents): compaction 时保留重发的 user prompt | 防止 compaction 后丢消息 |
| #93740 | fix(sessions): takeover 后释放残留锁 | 多设备切换更稳定 |
| #93773 | fix(ui): Skill Workshop proposals 限定为选中 agent | UI 修正 |
| #93780 | fix(google): Gemini 并行 tool 响应保持在 model turn 后 | Google 模型兼容 |
| #93881 | fix(agents): BTW 走标准 Codex runtime | ACP 路由修正 |
| #94421 | fix(agents): 保留活跃 compaction retries | 稳定性 |
| #94349 | fix(agents): 保留 pending subagent completion announces | Sub-agent 可靠性 |

### ⚠️ 安全相关
- ClawHub 恶意 Skills 事件：Antiy CERT 确认 **1,184 个恶意 skills** 被发现并下架 🔴
- 建议：继续使用 `skill-vetter` 审查所有第三方 skill

---

## Part 2: Claude Code 本体

### 🔥 Claude Fable 5 + 50% 限额延长（至 7/19）
- Anthropic 将 Claude Code 周限额提高 50% 的促销延期至 **2026年7月19日 11:59 PM PT** 🟢
- Claude Fable 5 访问也同步延长
- 来源：多条 Twitter 确认（@shah_sheikh, @nickchapsas, @johnseach）

### 🚨 安全公告：CVE-2026-55607（高危）
- **漏洞：** Git Worktree Confusion + Sandbox Escape
- **影响范围：** Claude Code 2.1.38 ~ 2.1.162
- **修复版本：** ≥ 2.1.163
- **攻击方式：** 恶意仓库通过 prompt injection + symlink + git fsmonitor 链式攻击，覆写 `~/.zshenv` 等文件实现沙箱逃逸
- **CVSS 3.0：** 8.8（High）
- **建议：** 立即更新到 2.1.163+，不要对不信任的仓库运行 Claude Code 🔴
- 发布日期：2026-06-25（近期热议）

### 其他已知 CVE
| CVE | 类型 | 修复版本 |
|---|---|---|
| CVE-2026-39861 | Symlink sandbox escape → RCE | ≥ 2.1.64 |
| CVE-2026-25725 | settings.json 持久化注入 → sandbox escape | 已修复 |

### Claude Code 2.1 系列进展
- **v2.1.90：** `/powerup` 交互式教程、性能修复、QoL 改进（3 月前发布，Reddit 123 upvotes）
- **Dynamic Workflows（6月）：** 主 agent 可规划并扇出数十到数百个并行 subagents
- **Performance Outcomes：** 独立 grader 让每个 subagent 修改直到满足 rubric
- **SubagentStop Hook：** 新的 hook 类型，可控制 subagent 输出门控

### 自动更新修复
- Anthropic 修复了原生安装器的自动更新机制
- 推荐使用 `curl -fsSL http://claude.ai/install.sh | bash` 安装原生版本
- npm 安装不支持自动更新

---

## Part 3: 🔥 生态（OpenClaw + Claude Code）

### MCP 生态现状
- MCP 已成为 AI agent 集成的事实标准，头部 MCP server 累计 80K+ stars 🟢
- OpenClaw 社区提出 feature request (#53215)：将 OpenClaw 自身暴露为 MCP Server
- 安全是最大挑战：MCP server 无认证运行、poisoned config、恶意 marketplace skills 构成供应链攻击面

### 热门工具/项目
| 项目 | 说明 | 适合 Sam？ |
|---|---|---|
| claude-flow | Claude Code 多 agent 编排框架 | ⭐ 已关注 |
| ClaudeClaw | OpenClaw 风格的自主 agent 系统（基于 Claude Code） | 🟡 参考架构 |
| Hyper MCP | 营销类 MCP（Meta Ads/Google Ads/Klaviyo） | ❌ 不匹配 |
| mcpmarket.com | Agent Skills 每日排行榜 | 🟢 值得定期看 |

### ⚠️ 供应链安全提醒
- Pentagon 首次将 Anthropic 列为"供应链风险"（CBS News 2026）
- 这是首家获此分类的美国公司
- 影响：企业级部署需更严格的审计流程

---

## Part 4: 🎮 社区玩法 / 小技巧

### Karpathy 的 Claude Code 使用笔记 (@karpathy)
- "LLM agent 能力（Claude & Codex）在 2025 年 12 月前后跨越了某种连贯性阈值，引发了相变"
- 来源：x.com/karpathy/status/2015883857489522876 🟢

### Boris Cherny（Claude Code 创始人）分享
- "没有唯一正确的使用方式——我们故意设计成你可以随意定制和 hack"
- 来源：x.com/bcherny/status/2007179832300581177

### 50 个 Claude Code 使用技巧精选（@CodevolutionWeb）
| 技巧 | 说明 |
|---|---|
| `!` 前缀 | 直接执行 bash，不浪费 token 让 Claude 跑命令 |
| `#` 前缀 | 保存信息到 memory |
| `&` 前缀 | 发送任务到云端（Claude Code Web） |
| `Esc` | 停止 Claude；`Esc+Esc` 撤销 |
| `Shift+?` | 显示所有快捷键 |
| `/resume` | 恢复上次对话 |
| `/powerup` | 交互式教程（v2.1.90+） |

### Claude Code 2.0 深度使用指南（sankalp's blog）
- Plan + Execute workflow
- Context window 管理技巧
- CLAUDE.md 的最佳实践
- Sub-agents 替代旧的 task tool
- 来源：sankalp.bearblog.dev 🟢

### "我停止让 Claude Code 审查自己的代码"（Reddit 热帖）
- r/ClaudeAI，20 upvotes，39 comments
- 核心观点：自我审查容易陷入确认偏差，建议用独立 grader subagent

---

## 📋 对 Sam 的建议

1. **⚠️ 确认 Claude Code 版本 ≥ 2.1.163** — CVE-2026-55607 高危沙箱逃逸
2. **享受 50% 限额** — 延长至 7/19，抓紧用
3. **OpenClaw 保持 2026.7.1** — 当前稳定
4. **继续用 skill-vetter** — 1184 个恶意 skills 事件说明审查必要性

---

*调研时间：2026-07-15 12:00 CST | 搜索轮次：7 | 来源：Tavily API*
