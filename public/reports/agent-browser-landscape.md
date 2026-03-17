# Agent Browser Landscape: 给 AI Agent 用的浏览器

*NOMI Research | 2026-03-17*

---

## 一、市场快照

AI Browser 市场 2024 年规模约 45 亿美元，预计 2034 年达 768 亿美元（CAGR 32.8%）🟢。79% 的企业已在使用某种形式的 AI Agent 技术（PwC 2025 调查）🟢。McKinsey 2025 报告显示 88% 的组织常规性使用 AI，62% 在试验或使用 AI Agent 🟢。

GitHub 上，Browser Use 拿到 78,000+ star，Firecrawl 82,000+，Stagehand 21,000+，Steel 6,700+ 🟢。Adobe Analytics 报告 2025 年 7 月 AI Agent 对零售网站的流量同比增长 4,700% 🟢。

2025 年是 Agentic Browser 的元年。OpenAI 发布 Operator（1月），Google 推出 Project Mariner / Gemini in Chrome，Anthropic 发布 Computer Use，Perplexity 推出 Comet，The Browser Co. 发布 Dia，Opera 推出 Neon。每家巨头都在押注"让 AI 操作浏览器"。

但这个赛道有一个根本矛盾：Agent 越自主、访问权限越高，安全风险越大。Gartner 2025 年 12 月直接建议 CISO 暂时封禁 AI Browser 🟡。OpenAI CISO Dane Stuckey 公开承认 prompt injection 仍是"未解决的前沿安全问题"🟢。

---

## 二、传统浏览器 vs Agent Browser

传统浏览器是给人用的。人看到页面，理解内容，做出决策，点击操作。浏览器只负责渲染和导航。

Agent Browser 的核心区别：

1. **输入解析方式不同**。传统浏览器渲染 HTML/CSS 给人的视觉系统。Agent Browser 需要把页面转换成 LLM 能理解的格式：DOM tree、accessibility tree、截图、markdown。这个"翻译层"是整个赛道的技术核心。

2. **操作发起方式不同**。人通过鼠标/键盘操作。Agent 通过 CDP（Chrome DevTools Protocol）、Playwright API、或者直接的坐标点击来操作。前者精准但脆弱（依赖 selector），后者灵活但容易误操作。

3. **状态管理不同**。人类在多个标签页之间切换时，大脑天然维护上下文。Agent 需要显式的 session 管理、cookie 持久化、以及跨页面的状态追踪。

4. **安全模型不同**。传统浏览器的安全模型假设操作者是人，能识别钓鱼和欺诈。Agent 没有这个"常识"——Guardio Labs 的 "Scamlexity" 测试证明 AI Browser 会在假冒网站上完成购买 🟢。

| 维度 | 传统浏览器 | Agent Browser |
|------|-----------|--------------|
| 用户 | 人 | LLM / AI Agent |
| 输入 | 视觉渲染 | DOM/a11y tree/截图 |
| 操作 | 鼠标键盘 | CDP/API/坐标 |
| 认证 | 人手动登录 | session 复用 / cookie 注入 |
| 安全 | 人的判断力 | HITL + classifier |
| 适应性 | 人脑随机应变 | LLM 推理 |

**反面证据**：(1) 有观点认为 Agent Browser 并非新物种，只是 Selenium/Playwright 加了个 LLM 外壳。从架构看确实如此——绝大多数 Agent Browser 底层就是 Playwright/Puppeteer。真正的区别在推理层，不在浏览器本身。(2) 部分场景下传统自动化脚本比 Agent 更可靠、更快。在确定性流程（如每天抓取同一个页面的同一个数据）中，硬编码脚本的成功率和速度都优于 LLM 驱动的 Agent。

---

## 三、产品深度对比

### 3.1 Browserbase / Stagehand / Director

**定位**：云端浏览器基础设施 + 开源 SDK + 可视化工作流

**技术架构**：Browserbase 提供 serverless 的 headless Chrome 实例，运行在云端，通过 CDP 暴露给客户端。Stagehand 是 Browserbase 旗下的开源 TypeScript SDK，在 Playwright 之上封装了三个核心 API：`act()`（执行操作）、`extract()`（提取数据）、`observe()`（分析页面）。Director 是 2025 年推出的可视化工作流编辑器。🟢

**定价**：Free tier 1 browser hour，Developer $0.12/hour，Startup $0.10/hour，Scale 定制。按 session 时长计费，包含空闲时间。🟢

**优势**：
- 产品矩阵完整：infra（Browserbase）+ SDK（Stagehand）+ no-code（Director）+ MCP server
- 21,000+ star（Stagehand），社区活跃
- 支持 Playwright/Puppeteer，迁移成本低
- 内置反检测和代理轮换
- SOC 2 Type 2 合规

**劣势**：
- 闲置时间也收费，成本可能超预期
- Stagehand 强依赖 TypeScript，Python 生态支持弱
- 冷启动延迟存在
- 反检测不如专业的 GoLogin 等指纹浏览器 🟡

**适用场景**：需要规模化 browser session 的 SaaS 产品，TypeScript 技术栈的团队

**反面证据**：(1) GoLogin 在反检测/指纹管理上明显优于 Browserbase（Browserbase 的指纹控制有限）🟢。(2) Skyvern 指出 Stagehand 需要多个供应商（LLM、browser infra、proxy）分别付费，总成本难以预测 🟡。

---

### 3.2 Steel (steel.dev)

**定位**：开源 browser API，专为 AI Agent 设计

**技术架构**：Docker 化的 Chrome 实例，通过 REST API 暴露 session 管理、页面操作、内容转换（markdown/截图/PDF）等能力。部署在 Fly.io 上，支持多区域扩展。Apache 2.0 开源。🟢

**定价**：开源自部署免费。云服务定价未公开。

**优势**：
- 完全开源（Apache 2.0），可自部署
- Session 管理设计良好：cookie、local storage 跨请求持久化
- 内置页面转 markdown/readability 工具
- 支持 Playwright + Selenium
- 6,700+ star，924 fork

**劣势**：
- 自部署需要运维能力
- 缺少高级视觉理解能力 🟡
- 社区规模比 Browser Use 小很多
- 云服务成熟度不如 Browserbase

**适用场景**：想要自控 browser 基础设施的团队，对开源和数据主权有要求

**反面证据**：(1) 和 Browserbase 相比，Steel 的反检测和企业级功能（SOC 2）不足 🟡。(2) 自部署虽然灵活，但 Docker + Chromium 的资源消耗不低，单机并发受限。

---

### 3.3 OpenAI Operator / Atlas

**定位**：消费级 AI 浏览器，ChatGPT 生态的延伸

**技术架构**：Operator 于 2025 年 1 月推出，基于 GPT-4o 的 Computer-Using Agent (CUA) 模型。Agent 通过截图理解页面，用虚拟鼠标/键盘操作。Atlas 是后续推出的完整 AI Browser。运行在 OpenAI 的云端虚拟机中。🟢

**定价**：ChatGPT Plus $20/mo 包含 Operator 使用

**优势**：
- 与 ChatGPT 深度集成，用户基数大
- 视觉理解能力强（GPT-4o vision）
- 有 RL 训练的对抗检测系统
- "Watch Mode" 等安全机制

**劣势**：
- 封闭系统，不可自部署
- 2025 年多次被曝 prompt injection 漏洞：zero-interaction exfiltration 🟢、Task Injection 🟢、Atlas 的"Tainted Memories" CSRF 🟢
- 速度慢，每步都需要截图 + LLM 推理
- 不支持 API 集成，主要面向消费者

**适用场景**：个人用户的日常浏览辅助，低风险任务

**反面证据**：(1) Johann Rehberger 展示了通过 GitHub 页面隐藏指令实现 zero-click 数据泄露，Operator 未能检测 🟢。(2) Google 研究员发现 "Task Injection" 可以让 Operator 以为下载恶意文件是用户任务的一部分 🟢。

---

### 3.4 Anthropic Computer Use

**定位**：通用计算机操作能力，浏览器只是其中之一

**技术架构**：Claude 的 Computer Use 不限于浏览器，它可以操作整个桌面。通过截图识别屏幕内容，用坐标级别的鼠标/键盘操作完成任务。API 形式提供，开发者需要自己管理虚拟机/容器环境。🟢

**定价**：按 Claude API token 计费

**优势**：
- 范围最广——不只是浏览器，是整台电脑
- Constitutional AI 理念下的安全设计：Constitutional Classifiers 扫描不可信内容
- 模型能力强，Claude 4 在复杂推理上表现好
- API 形式灵活，可嵌入任意系统

**劣势**：
- 需要自己搭建虚拟机/沙箱环境
- 截图驱动，速度比 DOM 操作慢
- Token 消耗大（每步都要发送截图）
- 操作精度受截图分辨率限制

**适用场景**：需要操作非 Web 应用的场景（如桌面软件），或需要 Claude 推理能力的复杂工作流

**反面证据**：(1) 截图驱动的成本问题。每步操作至少消耗一张图片的 token，长流程下 API 费用显著。(2) 与专门的 browser agent 相比，通用 computer use 在 Web 场景下效率更低，因为它放弃了 DOM/a11y tree 的结构化信息。

---

### 3.5 Browser Use

**定位**：最流行的开源 browser agent 框架

**技术架构**：Python 框架，基于 Playwright，支持 OpenAI/Anthropic/Google/本地模型。核心是 DOM distillation——将页面精简为关键交互元素，降低 token 消耗。WebVoyager benchmark 89.1% 成功率。🟢

**定价**：开源免费，LLM API 费用自付

**优势**：
- 78,000+ star，社区最活跃
- 模型无关，可切换任意 LLM
- DOM distillation 显著降低 token 用量
- 多 tab 支持
- Python 生态，集成方便

**劣势**：
- 需要自己管理 browser 基础设施（可搭配 Browserbase/Steel）
- 生产环境需要额外的 proxy、反检测方案
- 框架层面，不包含工作流编排

**适用场景**：开发者构建自定义 browser agent，需要最大灵活性

**反面证据**：(1) 在生产环境中，"自己搞定一切"的模式意味着你要同时处理 browser 管理、proxy、反检测、session 持久化——复杂度不低。(2) 89.1% 的 benchmark 数字看起来好，但 WebVoyager 的任务分布和真实场景有差距，实际成功率可能更低 🟡。

---

### 3.6 Playwright MCP

**定位**：微软推出的 MCP Server，让 AI Agent 通过标准协议控制浏览器

**技术架构**：Model Context Protocol (MCP) 是 Anthropic 提出的开放协议，Playwright MCP Server 是微软的实现。Agent 通过 MCP 协议连接 Playwright，获得结构化的页面快照（accessibility tree），执行操作。不依赖截图，用 a11y snapshot 替代视觉输入。🟢

**定价**：开源免费

**优势**：
- 标准化协议，可与 Claude Code、Cursor 等工具集成
- A11y snapshot 比截图更高效（token 少、信息密度高）
- Playwright 的可靠性和跨浏览器支持
- 微软维护，长期支持有保障

**劣势**：
- MCP 生态仍在早期，兼容性不完美
- 需要本地运行 Playwright + browser
- 不含反检测、proxy 等生产级功能

**适用场景**：开发者工具链集成，特别是已使用 MCP 协议的 AI 开发环境

**反面证据**：(1) MCP 协议本身成为安全攻击目标——NeuralTrust 预测 MCP 将是 2026 年的"高价值攻击面" 🟡。(2) A11y tree 在复杂页面上可能丢失视觉上下文（如图表、地图），导致 Agent 理解不完整。

---

### 3.7 Multion

**定位**：个人 AI 浏览助手，强调自主操作

**技术架构**：Chrome 扩展 + 云端 LLM。Agent 在用户当前浏览器中运行，继承已登录的 session。通过截图+DOM 混合方式理解页面。🟡

**定价**：免费 + Pro 计划（具体定价信息有限）

**优势**：
- 直接在用户已登录的浏览器中工作，认证问题自然解决
- 消费级产品体验
- 多步骤任务支持

**劣势**：
- 扩展形式限制了能力边界
- 稳定性和准确率的用户评价参差不齐 🟡
- 公开技术文档较少
- 和 Operator/Comet 相比缺乏大厂背书

**适用场景**：个人日常浏览器辅助

**反面证据**：(1) 多位 Reddit 用户报告 Multion 在复杂工作流中的完成率不高 🟡。(2) 作为 Chrome 扩展，它受限于浏览器扩展 API 的沙箱，某些操作无法完成。

---

### 3.8 Skyvern

**定位**：无代码 AI 浏览器自动化，专攻企业表单和工作流

**技术架构**：结合计算机视觉和 LLM 来理解页面，不依赖 DOM selector。Cloud 服务 + 开源版本。🟢

**定价**：$0.10/page 起，usage-based 🟢

**优势**：
- 视觉理解为主，不怕 UI 变动
- 企业表单场景的深度优化
- 无代码友好
- 20,000+ star

**劣势**：
- 按页面计费，高频率使用成本上升快
- 视觉方式比 DOM 方式慢
- 通用 browsing 能力不如 Browser Use

**适用场景**：保险报价、政府表单、HR onboarding 等企业场景

**反面证据**：(1) 视觉理解依赖截图，在页面很长或动态加载时可能遗漏内容。(2) 自家 blog 是主要的"对比评测"来源，独立第三方评测较少 🟡。

---

### 3.9 Amazon Nova Act

**定位**：AWS 的 browser agent SDK（研究预览阶段）

**技术架构**：基于 Amazon Nova 模型，Python SDK，通过自然语言描述任务，Agent 在 Web 界面中执行。2025 年初发布研究预览。🟢

**定价**：预览阶段，定价未公开

**优势**：
- AWS 生态集成
- 面向生产环境设计，强调可靠性和可扩展性
- 支持 MCP 集成

**劣势**：
- 仍在预览阶段，功能不完整
- Nova 模型在 Web 理解上未证明优于 GPT-4o 或 Claude
- 文档和社区有限

**适用场景**：AWS 技术栈的企业，需要 browser agent 集成到现有云基础设施

**反面证据**：(1) 预览阶段意味着 API 可能 breaking change。(2) Amazon 在 AI 模型层面的口碑不如 OpenAI/Anthropic/Google。

---

### 3.10 其他值得关注的产品

**Firecrawl + Browser Sandbox**：从 web scraping 起家，2026 年推出 Browser Sandbox——每个 session 运行在隔离容器中，Playwright 预装。82,000+ star，500,000+ 开发者。2 credits/browser minute。定位是 AI 应用的"web data layer" 🟢。

**Hyperbrowser**：YC 背景，managed browser infra，内置 LLM 集成和自然语言自动化 API 🟡。

**Lightpanda**：用 Zig 从零写的 headless browser，专为 AI 和自动化设计。非常早期 🟡。

**Perplexity Comet / ChatGPT Atlas / Brave Leo / Opera Neon / Dia**：消费级 AI Browser。各有防护措施（见安全章节），但全都存在 prompt injection 风险。

---

## 四、产品对比总表

| 产品 | 类型 | 开源 | 技术路线 | 定价 | Star | 适合 |
|------|------|------|---------|------|------|------|
| Browserbase | 云 infra | ❌ | Headless Chrome + CDP | $0.10-0.12/hr | — | 规模化 SaaS |
| Stagehand | SDK | ✅ | Playwright + LLM | 免费(+LLM) | 21K | TS 开发者 |
| Steel | Browser API | ✅ | Docker Chrome + REST | 自部署免费 | 6.7K | 自控 infra |
| OpenAI Operator | 消费 | ❌ | 截图 + GPT-4o | $20/mo(Plus) | — | 个人用户 |
| Anthropic CU | API | ❌ | 截图 + Claude | Token 计费 | — | 桌面+Web 混合 |
| Browser Use | 框架 | ✅ | Playwright + Multi-LLM | 免费(+LLM) | 78K | 自定义 Agent |
| Playwright MCP | MCP Server | ✅ | A11y tree + Playwright | 免费 | — | 开发工具链 |
| Multion | 扩展 | ❌ | Chrome ext + LLM | Free/Pro | — | 个人助手 |
| Skyvern | Cloud+OSS | ✅ | CV + LLM | $0.10/page | 20K | 企业表单 |
| Nova Act | SDK | ❌ | Nova model + Python | 预览 | — | AWS 企业 |
| Firecrawl | Cloud+OSS | ✅ | Sandbox + Playwright | $16/mo+ | 82K | 数据提取 |

---

## 五、技术架构分析

### 5.1 Headless vs Headed

Headless browser（无 GUI 渲染）是云端方案的标配。Browserbase、Steel、Firecrawl 都是 headless Chrome。优点是资源消耗低、启动快、易于并行。缺点是某些网站能检测 headless 环境（通过 `navigator.webdriver`、canvas fingerprint 等）。

Headed browser（有 GUI）主要用于消费级产品（Operator、Comet、Dia）和本地方案（OpenClaw）。优点是反检测天然更好（因为和真实浏览器一模一样），且用户可以直接看到操作过程。缺点是资源消耗大，难以并行。

### 5.2 Cloud vs Local

| 方面 | 云端 | 本地 |
|------|------|------|
| 扩展性 | 弹性伸缩 | 单机受限 |
| 认证 | 需要 cookie 注入/session 转移 | 天然继承用户登录态 |
| 隐私 | 数据经过第三方服务器 | 数据不出本机 |
| 成本 | 按用量付费 | 硬件一次性投入 |
| 反检测 | 需要指纹伪造 | 真实浏览器环境 |

### 5.3 CDP vs 自有协议 vs 截图驱动

**CDP (Chrome DevTools Protocol)**：Browserbase、Steel、Browser Use、Playwright MCP 都用 CDP。成熟、精确、结构化信息丰富。缺点是强绑定 Chromium 内核。

**截图驱动**：OpenAI Operator、Anthropic Computer Use。通过截图让 LLM "看"页面，用坐标操作。优点是不限于浏览器（可操作任何 GUI），缺点是慢、token 消耗大、精度受限。

**混合方式**：Browser Use 同时用 DOM distillation 和截图。Skyvern 以 CV 为主辅以 DOM。这是当前最务实的方向。

### 5.4 MCP 的角色

Model Context Protocol 正在成为 Agent-Tool 交互的标准。Browserbase、Playwright、Firecrawl 都提供了 MCP server。MCP 的价值在于标准化：Agent 不需要知道底层是 Playwright 还是 Puppeteer，只需要通过统一接口操作浏览器。

但 MCP 也是新的攻击面。协议本身的安全性、权限管理、以及跨 server 的信任链都还在摸索阶段。

---

## 六、OpenClaw 的 Chrome Profile 方式

OpenClaw 采用了一条独特路线：通过 CDP 直接控制用户已有的 Chrome 浏览器实例。用户的 Chrome 已经登录了各种网站（Gmail、GitHub、Twitter...），OpenClaw 直接继承这些登录态。

**架构**：本地 headed Chrome + CDP WebSocket 连接。OpenClaw gateway 进程通过 CDP 协议与用户的 Chrome 通信。Agent 可以进行 snapshot（获取 a11y tree）、截图、点击、输入等操作。

**核心优势**：

1. **认证问题自动消失**。这是所有 cloud browser 方案最头疼的问题。你的 Gmail 需要 2FA？你的银行网站有设备绑定？OpenClaw 不在乎——因为你的 Chrome 早就登录了。

2. **反检测天然满分**。因为 Agent 操作的就是你真实的 Chrome，有你真实的浏览器指纹、cookie、历史记录。没有任何网站能区分这是人在操作还是 Agent 在操作。

3. **零成本**。不需要云端 browser session 费用，不需要 proxy 费用。

4. **数据不出本机**。页面内容在本地处理，不需要发送到第三方服务器。

**核心劣势**：

1. **不可扩展**。一台机器上的一个 Chrome 实例，就是你的全部。不能并行 100 个 session。

2. **安全风险集中**。Agent 拥有和你一样的访问权限。如果 prompt injection 成功，攻击者能访问你所有已登录的服务。

3. **Mac/本地机器依赖**。需要一台始终运行的电脑。

4. **共享使用冲突**。Agent 在操作浏览器时，你自己可能也想用。

**定位判断**：OpenClaw 的方式适合个人用户的私人 Agent——你想让 AI 帮你在已登录的网站上做事，且你信任这个 Agent 不会被 prompt injection 攻击。它不适合企业级批量自动化。

和其他方案的对比中，OpenClaw 占据了一个独特的生态位：**"你已经登录的 Chrome 就是最好的 Agent Browser"**。这个观点在技术上是成立的——认证和反检测是 Agent Browser 两大难题，OpenClaw 一次性解决了。

**反面证据**：(1) 认证问题并非不可解。Browserbase 的 "Agent Identity" 功能允许通过 cookie 注入复用 session。只是操作更麻烦，不像 OpenClaw 那样开箱即用。(2) 单点故障风险。Chrome 崩溃 = Agent 瘫痪。没有高可用机制。

---

## 七、核心场景分析

### 7.1 Web Scraping & 数据提取

最大的市场（2024 年 $7.54 亿，预计 2034 年 $28.7 亿）。Firecrawl 在这个场景下遥遥领先（82K star），它的 Agent endpoint 可以用自然语言描述需要什么数据。Browser Use 适合需要登录后抓取的场景。OpenClaw 在需要认证状态下的小规模抓取上有天然优势。

### 7.2 表单填写 & 企业工作流

Skyvern 的主战场。保险报价、政府表单、HR 系统——这些没有 API 的遗留系统。AI benchmark 显示 AI 填写 30 字段表单约 90 秒，人类 12+ 分钟。

### 7.3 测试自动化

$242.5 亿的市场（2026 年）。Playwright 占 QA 从业者的 45.1%。Playwright MCP 的出现让 AI 可以用自然语言生成和执行测试。Stagehand 在 Playwright 之上加了 AI reasoning layer。

### 7.4 自主浏览 & 个人助手

消费级产品的方向。预订机票、比价购物、管理社交媒体。Operator、Comet、Dia 都在做。OpenClaw 的优势在于能操作你已登录的任何网站。风险在于自主程度越高，被攻击的面越大。

### 7.5 认证工作流

这是 Agent Browser 最棘手的场景。2FA、设备绑定、CAPTCHA 都是拦路虎。Cloud browser 方案需要通过 cookie 注入或 session transfer 来绕过。OpenClaw 的本地方案天然解决了这个问题。Multion 的 Chrome 扩展方式也解决了，但能力受限。

---

## 八、商业模式

### 开源框架 (Browser Use, Playwright MCP)
- 免费使用，社区驱动
- 收入来源：无直接收入（或通过云服务间接变现）
- 挑战：可持续性

### 云端 SaaS (Browserbase, Firecrawl)
- 按用量计费（browser hour / credits / page）
- 典型月费：$16-$500+
- 优势：可预测的 ARR
- 挑战：毛利受云基础设施成本影响

### 混合模式 (Steel, Skyvern)
- 开源版本免费 + 云端版本收费
- 用开源获取社区和信任，用云服务变现

### 消费订阅 (Operator, Comet)
- 捆绑在现有订阅中（ChatGPT Plus $20/mo）
- 浏览器作为 AI 服务的载体
- 规模大但 ARPU 低

### 本地方案 (OpenClaw)
- 开源 / 开放核心
- 不从 browser 本身变现
- 价值主张在于整个 AI Agent 生态

---

## 九、局限性和挑战

### 9.1 安全是头号问题

2025 年的攻击案例一览：
- Zero-interaction exfiltration (Operator) 🟢
- Scamlexity — AI 浏览器在假网站上完成购买 (Comet) 🟢
- CometJacking — 一键劫持 (Comet) 🟢
- Tainted Memories — CSRF 污染长期记忆 (Atlas) 🟢
- HashJack — URL fragment 中的 prompt injection 🟢
- Task Injection — Agent 执行恶意子任务 (Operator) 🟢

**Prompt injection 至今无解。** OpenAI、Google、Anthropic 都在做多层防御（HITL、Classifier、RL red teaming），但没有任何厂商声称解决了这个问题。

### 9.2 CAPTCHA

CAPTCHA 专门设计来区分人和机器。Cloud headless browser 无法可靠地通过现代 CAPTCHA。部分服务使用 CAPTCHA solving API（如 2Captcha），但这增加成本和延迟。本地方案（OpenClaw）因为使用真实 Chrome 且有用户的 cookie，通常不触发 CAPTCHA。

### 9.3 反爬检测

Cloudflare、Akamai、PerimeterX 等反爬服务日益成熟。Headless browser 的 fingerprint 与真实浏览器有细微差异。Browserbase 和 Hyperbrowser 提供 "stealth mode"，但这是军备竞赛。

### 9.4 速度和成本

截图驱动的方案（Operator、Computer Use）每步操作需要 1-3 秒。一个 10 步的任务就要 10-30 秒。DOM 驱动的方案更快，但 LLM 推理本身有延迟。Cloud browser 按时间计费，复杂任务的成本可以轻易超过手动操作的"时间价值"。

### 9.5 可靠性

WebVoyager benchmark 最高 89.1%（Browser Use）。这意味着每 10 个任务有 1 个会失败。在生产环境中，"大部分时候能工作"和"可靠"之间的差距巨大。

**反面证据**：(1) 也有人认为可靠性问题会随模型进步自然解决——GPT-3.5 到 GPT-4o 的进步已经很大 🟡。(2) 对于某些容错高的场景（如数据收集），89% 的成功率已经足够用了。

---

## 十、未来趋势

**1. MCP 成为标准接口**。浏览器操作会像数据库查询一样被标准化。Agent 不再关心底层是 Playwright 还是 Puppeteer，只通过 MCP 接口操作。2026 年这个趋势已经很明显。

**2. 安全防御层次化**。HITL + Classifier + RL Red Teaming 的三层防御正在成为标配。但 prompt injection 不会在 2026 年被根本解决。

**3. 本地 + 云端混合架构**。认证相关的操作在本地完成（利用已登录的 Chrome），规模化任务在云端执行。这可能是终局形态。

**4. 专用 Agent Browser 引擎**。Lightpanda 用 Zig 从零写 browser engine，虽然还很早期，但代表一个方向：为 AI 而生的浏览器内核，不需要渲染 CSS，只需要生成结构化数据。

**5. 监管介入**。Adobe 数据显示 AI Agent 对零售网站的流量增长 4,700%。当 Agent 开始大规模替代人类浏览时，网站会加强反 Agent 措施，监管也会跟进。robots.txt 需要升级。

**6. 消费级和开发者级分化加剧**。Operator/Comet/Dia 走消费路线，Browserbase/Steel/Browser Use 走开发者路线。两条路线的产品形态和商业模式会越来越不同。

---

## 十一、NOMI 观点

这个赛道我给 **7.5/10**。

市场需求真实且巨大——AI Agent 要有用，就必须能访问 Web。但当前所有方案都在和同一个对手搏斗：**Web 不是为 Agent 设计的**。

最有价值的 infra 层是 Browserbase 这样的"browser-as-a-service"，因为它把复杂的浏览器管理变成了 API 调用。最有活力的开源社区是 Browser Use，因为它给了开发者最大的灵活性。最务实的方案可能是 OpenClaw 的本地方式——对个人用户来说，"你已经登录的 Chrome 就是最好的 Agent Browser"这个洞察是深刻的。

但整个赛道面临两个结构性风险：

1. **安全问题可能抑制采用**。Gartner 建议企业封禁 AI Browser 不是没有道理。如果一次高调的安全事故发生（比如 AI Browser 被利用进行大规模金融欺诈），整个行业可能倒退数年。

2. **模型进步可能让专用方案过时**。如果未来的 LLM 能直接解析 HTML 并精确操作，那些费力做 DOM distillation 和 a11y tree 的中间层可能变得多余。浏览器操作可能变成模型的原生能力，而不需要专门的 SDK。

看好的方向：
- Browserbase 的 infra 层定位
- Browser Use 的开源社区势能
- Playwright MCP 的标准化推动力
- OpenClaw 式的本地认证方案

不看好的方向：
- 纯消费级 AI Browser（安全风险和用户信任是致命瓶颈）
- 封闭式 SDK（Nova Act 这种不开源的方案很难建立生态）

---

## 十二、信息来源

1. Firecrawl. "11 Best AI Browser Agents in 2026." firecrawl.dev/blog. 🟢
2. Wiz. "Agentic Browser Security: 2025 Year-End Review." wiz.io/blog. 🟢
3. Browserbase. Pricing & Documentation. browserbase.com. 🟢
4. Contrary Research. "Browserbase Business Breakdown." research.contrary.com. 🟢
5. Steel.dev GitHub & Fly.io Customer Story. 🟢
6. NoHacksPod. "The Agentic Browser Landscape in 2026." nohackspod.com. 🟢
7. NeuralTrust. "5 Predictions for AI Agent Security in 2026." neuraltrust.ai. 🟡
8. AWS. "Amazon Nova Act SDK." aws.amazon.com. 🟢
9. PwC. AI Agent Adoption Survey 2025. 🟢
10. McKinsey. "The State of AI" 2025 Report. 🟢
11. Adobe Analytics. AI Agent traffic to retail sites data. 🟢
12. Gartner. AI Browser Risk Advisory, December 2025. 🟡
13. Skyvern. Product documentation & blog. skyvern.com. 🟡
14. Market.us. AI Browser Market Report. 🟡
15. GoLogin. "Is Browserbase Any Good?" gologin.com. 🟡

---

*NOMI | Sanono Research | 2026-03-17*
