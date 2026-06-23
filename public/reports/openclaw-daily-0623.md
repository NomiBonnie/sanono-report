# OpenClaw + Claude Code — Daily Pulse / June 23, 2026

![Infographic](/images/openclaw-daily-0623/infographic.png)

## Part 1: OpenClaw 本体

### 最新版本：v2026.6.8

**v2026.6.8 更新亮点** 🟢
- **Telegram 富文本升级：** 支持表格、列表、可展开 blockquote、保留换行、CLI 后端回复
- **WhatsApp ACP 绑定：** 新增 WhatsApp 配置的 ACP binding 支持
- **新模型支持：** GLM-5.2 和 Claude Haiku 4.5 加入模型目录
- **Usage Footer 渲染：** /usage 和 reply payload hook 原生全 footer 渲染
- **Web 搜索安全：** 免 key 提供商（DuckDuckGo 等）改为显式 opt-in
- **Mobile 优化：** workspace 文件默认折叠、iOS 重连过期 Gateway
- **内存弹性：** OpenAI embedding 批次过大自动拆分、SQLite NFS WAL 修复

⚠️ **安全提醒：** ClawHub 13,000+ skills 中约 7.6%（~820+）被标记为恶意。

---

## Part 2: Claude Code 本体

### Claude Code v2.1.158–163（W23, 6/21 更新）🟢

1. **Auto Mode → Bedrock/Vertex/Foundry** — 设置 `CLAUDE_CODE_ENABLE_AUTO_MODE=1`
2. **敏感文件写入保护** — .zshenv、git config、.npmrc 等
3. **`/plugin list`** — 内联显示插件，支持 `--enabled`/`--disabled`
4. **企业版本管控** — `requiredMinimumVersion`/`requiredMaximumVersion`
5. **并行 Bash 失败隔离** — 单个失败不取消其他
6. **Dynamic Workflows → ultracode**
7. **Windsurf → Devin Desktop**
8. **`/btw c`** — 复制 markdown 到剪贴板

### Artifacts 进入 Claude Code
Session 工作可转化为实时可分享网页。

### Managed Agents
- **Self-Hosted Sandboxes（公测）** — 工具执行在客户基础设施内
- **MCP Tunnels（研究预览）** — 安全访问企业内网服务

---

## Part 3: 🔥 生态

### ClawHub 热门 Skills
| Skill | 安装量 | 推荐度 |
|---|---|---|
| Felo Search | 145,000+ | ⭐⭐⭐⭐⭐ |
| browser-control | — | ⭐⭐⭐⭐⭐ |
| file-manager | — | ⭐⭐⭐⭐ |

### MCP Server 推荐
| Server | 用途 | 适合度 |
|---|---|---|
| Supabase | 数据库/存储/认证 | 🟡 |
| Spec | 规划和架构 | 🟢 |
| Playwright | 自动化测试 | 🟢 |
| Vercel | 一键部署 | 🟢 |

---

## Part 4: 🎮 社区玩法

### X/Twitter 热帖
1. **@rubenhassid** — 非程序员指南：CLAUDE.md + loop = 不需要会写代码
2. **@lennysan** — 50 种非技术使用场景：PM、设计师、创始人、家长
3. **Boris（Claude Code 创始人）** — 2026 年一行代码都没写
4. **Claude Fable 5** — 视频创作自动化

### 实用技巧
- `/effort` 设置持久化为新 session 默认值
- Grep 查看后直接编辑，无需额外 Read
- OTEL_RESOURCE_ATTRIBUTES 可按 team/repo 切片 metrics
- 自动补全点击填入 prompt 而非直接执行

---

*调研时间：2026-06-23 | 搜索 8 轮 | 🟢官方 🟡社区 🔴未验证*
