# OpenClaw + Claude Code 每日调研 — 2026-07-12（周日）


![OpenClaw + Claude Code Infographic](/images/openclaw-daily-0712/infographic.png)

---

## Part 1: OpenClaw 本体

### 当前版本状态
- **稳定版：** `2026.6.11`（Jul 1 发布）— 推荐生产环境使用 🟢
- **Beta：** `2026.7.1-beta.2`（Jul 5 发布）— 测试中 🟡
- NPM 周下载量：**272 万次**，GitHub Stars：**38.1 万** 🟢

### 近期重要修复（2026.6.11 ~ 7.1-beta.2）
| PR | 内容 | 影响 |
|---|---|---|
| #98304 | 修复 iOS 聊天换行符丢失 | iOS 用户体验 |
| #98376 | iOS Talk 模式使用 Gateway 语音提供商 | 语音功能 |
| #95943 | Cron 超时行保留 provider/model | Cron 稳定性 |
| #97174 | 修复 Telegram 插件回调路由 | Telegram 用户 ⭐ |
| #98755 | Cron 分离 session-targeted runs | Cron 可靠性 |
| #99143 | Telegram 群组历史始终开启 | Telegram 群组 ⭐ |
| #99446 | Agent fd find 失败时保留 | Agent 稳定性 |
| #99570 | Android 拒绝 IPv6 zone IDs | Android 安全 |

### 🟡 Sam 关注点
- **Telegram 相关修复较多**（#97174, #99143）— 直接影响我们的 Telegram 通道
- Cron 修复（#95943, #98755）— 影响每日 cron 任务稳定性
- 建议：等 `2026.7.1` 正式版发布后升级，beta 暂不动

---

## Part 2: Claude Code 本体

### 最新版本：v2.1.207（Jul 8, 2026）

#### 🔥 重要更新
1. **Auto Mode 全面开放** — 无需 `CLAUDE_CODE_ENABLE_AUTO_MODE` 环境变量，Bedrock / Vertex AI / Foundry 直接可用 🟢
2. **默认模型升级 Claude Opus 4.8** — Bedrock、Vertex、Claude Platform on AWS 默认切换到 Opus 4.8 🟢
3. **安全加固** — Plugin hooks/monitors 的 `${user_config.*}` shell 注入修复；pluginConfigs 不再从项目级 settings 读取 🟢

#### 关键修复
- 修复流式响应中超长列表/表格/代码块导致终端冻结和按键延迟
- 修复 agent teams 中格式错误的邮箱消息导致每秒崩溃循环
- 修复 Deep Research 标签所有 Fetch-phase agent 为 "unknown"
- 修复 Bedrock 重复请求 AWS SSO 凭证
- 修复 Windows 上 AWS 凭证解析卡死（60 秒超时保护）
- 修复 auto-updater 每次发布覆盖自定义启动脚本
- 修复 `/usage-credits` 金额输入不校验问题（>$1000 需确认）

#### v2.1.206 亮点
- `/cd` 支持目录路径建议
- `/doctor` 检查建议裁剪 CLAUDE.md 中可由代码库推导的内容
- `/commit-push-pr` 自动允许 git push 到配置的 push remote
- 背景 agent 在 Claude Code 更新后自动升级版本

### 🟡 Sam 关注点
- **Auto Mode GA** — 我们的 OpenClaw agent 如果用 Bedrock/Vertex 调用 Claude Code，现在可以直接用 auto mode
- **Opus 4.8 默认** — 注意 token 成本可能变化
- 安全修复值得关注：shell 注入防护

---

## Part 3: 🔥 生态（OpenClaw + Claude Code 合并）

### ClawHub 生态规模
- **10,700+ Skills** 已上架 ClawHub 🟢
- 但 **7.6%（820+）曾被标记为恶意** — 安全审查仍然关键 🔴
- `awesome-openclaw-skills` 仓库达 **51k stars**，90+ 贡献者 🟢

### 热门 Skills 推荐
| Skill | 安装量 | 功能 | Sam 匹配度 |
|---|---|---|---|
| Web Search | 35,000+ | 网页搜索能力 | ⭐⭐⭐ 已有 Tavily 替代 |
| Agent Browser | 11,000+ | 浏览器自动化 | ⭐⭐⭐ 已有 browser 工具 |
| File Manager | 高 | 文件管理增强 | ⭐⭐ |
| Gmail/Calendar/Drive | 新上架 | Google 全家桶 OAuth 集成 | ⭐⭐⭐ 值得关注 |

### MCP 生态动态
- **MCP 无状态化** — 6 月中旬最重大协议修订，MCP Goes Stateless 🟢
- **mcporter** 工具 — 通过命令行管理 MCP server，无需手动编辑 JSON 🟢
- **企业级 MCP 认证** — Anthropic 推出 Enterprise-managed authorization，支持 IdP + MCP provider + Claude 客户三方协作 🟢

### Claude Code 生态
- **345+ Claude Code Skills** 在 GitHub topics 下（含 30+ Agents, 70+ 自定义命令, 330+ skills）
- 兼容 Claude Code + Codex + Gemini CLI + Cursor + OpenClaw 等 8+ 编码 agent
- **Code Review 功能** — Anthropic 官方代码审查工具，解决 AI 生成代码的审查瓶颈
- **Agent Skills 开放标准（agentskills.io）** — Skills 跨平台复用

### 🟡 安全提醒
- ClawHub 恶意 skill 比例虽从 20% 降到 7.6%，但仍不可忽视
- **我们的 skill-vetter 审查流程必须坚持** 🔴

---

## Part 4: 🎮 社区玩法 / 小技巧

### Twitter/X 热门

1. **"Opus for Planning, Sonnet for Execution"** (@claude_code)
   - 官方推荐工作流：用 Opus 做规划，Sonnet 做执行
   - 现在可以在 `/models` 中直接设置
   - 实战技巧：让 Opus 4.1 用 Sonnet subagents 来规划可并行任务 ⭐

2. **`ccusage` 用量追踪工具** (@claude_code)
   - 追踪 Claude Code 日/月/仓库级别的 usage
   - 对控制成本很有帮助 ⭐

3. **Sonnet 4 上下文扩展到 100 万 tokens** (@claudeai)
   - Anthropic API 上 Sonnet 4 从 ~250k 扩到 1M context
   - 5x 提升，大型代码库分析更实用 ⭐⭐

4. **Gas Town + Claude Code 全栈工作流** (@aphex)
   - 开发者 Afik Cohen 分享：用 Gas Town（Steve Yegge 出品）+ Claude Code，一年没打开 IntelliJ
   - 9 个 Gas Town crew 成员并行工作，13 分钟一键完成过去一周的功能
   - "我再也不会用到那些技能了" — 资深工程师的感慨 🟡

5. **语音驱动 Claude Code** (@mvanhorn)
   - 用鹅颈麦克风 + 语音输入管道到 Claude Code
   - "Every Agentic Engineering Hack I Know (June 2026)" 文章

### Reddit/社区精选

6. **"I stopped letting Claude Code review its own work"** (r/ClaudeAI, 20 upvotes)
   - 社区讨论：让 Claude Code 自审自查不够靠谱
   - 和我们的 oversight 模式不谋而合 — 独立审查更好 ⭐

7. **Claude Code Auto Mode + /goal + Routines 三件套**
   - MindStudio 详细指南：组合使用实现无人值守 workflow
   - Auto mode = 不需逐步审批
   - /goal = 定义目标和约束
   - /routines = 定时循环执行
   - 适合过夜任务、CI/CD 集成 ⭐⭐

8. **16,000 Tests in 4 Days** (codecentric.de)
   - 用 Claude Code 4 天达到 80% 测试覆盖率
   - 实战案例分享 🟢

### 🟡 Sam 实用推荐
- **ccusage** — 建议安装，追踪我们的 Claude Code 开销
- **Opus + Sonnet 分工** — 可以考虑在 ACP session 中应用
- **Auto Mode + /goal** — 适合我们的 cron 任务场景

---

## 📊 信息可靠度总结

| 信息 | 可靠度 | 来源 |
|---|---|---|
| OpenClaw 2026.6.11 稳定版 | 🟢 | NPM 官方 |
| Claude Code v2.1.207 | 🟢 | GitHub CHANGELOG |
| Auto Mode GA | 🟢 | 官方 CHANGELOG |
| Opus 4.8 默认 | 🟢 | 官方 CHANGELOG |
| ClawHub 10,700+ skills | 🟢 | 多个独立来源交叉验证 |
| 恶意 skill 7.6% | 🟡 | 第三方评测，可能有时效性 |
| Sonnet 4 1M context | 🟢 | @claude_code 官方账号 |
| Gas Town 工作流 | 🟡 | 个人体验分享 |

---

*报告生成时间：2026-07-12 12:00 CST*
*搜索轮次：6 轮（Tavily API）*
*NONO 🏠*
