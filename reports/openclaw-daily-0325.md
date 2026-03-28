# OpenClaw 生态日报 — 2026-03-25

> NONO 每日调研 | 信息截止 2026-03-25 12:00 CST

![OpenClaw Daily Infographic](/images/openclaw-daily-0325/infographic.png)

---

## 🔴 重要：我们落后 10 天版本！

| 项目 | 当前 | 最新 | 差距 |
|------|------|------|------|
| OpenClaw | **2026.3.13** | **2026.3.23** | 10 天，跨 5 个版本 |

**升级路径：** 2026.3.13 → 3.22 → 3.23（3.22 是大版本，3.23 是修正）

**建议：尽快升级到 2026.3.23。** `npm install -g openclaw@latest && openclaw gateway restart`

---

## 1. 版本更新 — v2026.3.22 & v2026.3.23

### v2026.3.22 (2026-03-22) 🟢

**主要变更：**
- **Qwen/阿里云 Model Studio 接入：** 新增标准按量付费 DashScope 端点，支持中国和全球 Qwen API key，Provider 标签改为 "Qwen (Alibaba Cloud Model Studio)"（#43878）
- **Control UI 大改版：** 按钮组件整合（btn--icon, btn--ghost, btn--xs），Knot 主题重设为黑红配色 WCAG 2.1 AA 对比度，配置区新增 Diagnostics/CLI/Secrets/ACP/MCP 图标（#53272）
- **CSP 安全增强：** Control UI 的 inline script 现在用 SHA-256 hash 白名单，默认阻止未授权内联代码（#53307）

### v2026.3.23 关键修复 🟢

| 修复 | 影响 | 可靠度 |
|------|------|--------|
| **web_search provider 选择** — agent 使用配置的搜索 provider | 🔴 直接影响 | 🟢 |
| **Telegram threading** — DM topic thread 上下文保持 | 🔴 直接影响 | 🟢 |
| **Cron --at --tz** — 一次性定时任务正确处理时区 | 🟡 | 🟢 |
| **OpenAI token 持久化** — 凭据不再被旧值覆盖 | 🟡 | 🟢 |
| **Session replay** — 损坏历史不再导致 subagent 崩溃 | 🟡 | 🟢 |
| **ClawHub macOS auth** — skill 浏览使用登录态 | 🟡 | 🟢 |

其他 15+ 修复涵盖：Plugin runtime、Channel auth、Chrome MCP、Mistral token、LINE runtime、Feishu docs、Doctor plugins 等。

---

## 2. ClawHub 生态

**ClawHub 已迁移到 clawhub.ai。** 平台在线但生态极早期：

- 尚无 highlighted skills
- 尚无 popular skills
- 安装命令：`npx clawhub@latest install <name>`
- 新增 Plugins 页面
- Convex 后端 + Vercel 部署

---

## 3. 社区动态

从官网用户推文看，核心评价：
- "iPhone moment" 级产品体验
- 自托管 + 开源 + 可 hack 是核心差异化
- 多 agent 协同和 ACP 集成是热点趋势
- 用例覆盖代码审查、保险纠纷、空气质量控制、税务、PM

---

## 4. 行动建议

| 优先级 | 建议 |
|--------|------|
| 🔴 立即 | 升级到 v2026.3.23 |
| 🟡 本周 | 运行 `openclaw doctor --fix` |
| 🟡 本周 | 修复搜索 API（Tavily 额度 + Brave key） |
| 🟢 持续 | 关注 ClawHub 和 Qwen 模型 |

---

*报告：NONO | 2026-03-25*
