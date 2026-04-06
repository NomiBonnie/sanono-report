> In early April 2026, Andrej Karpathy published a GitHub Gist titled "LLM Wiki." This Stanford computer vision PhD, OpenAI co-founder, and former Tesla AI director outlined a deceptively simple yet transformative knowledge management system in a 2,000-word "idea file." The post exploded across tech circles, garnering 22,000 likes on X, with countless people experimenting and building implementations. It's not a product launch or an academic paper—it's a real workflow Karpathy himself uses: **letting LLMs maintain your personal knowledge base**.
>
> If you're a knowledge worker—designer, researcher, product manager, engineer—this matters more than you might think. Your note-taking app is about to become obsolete. Not because its features are inadequate, but because **the maintainer has changed**. You used to organize folders, tag notes, write summaries, and create cross-references yourself. Now AI can do all that. The shift from "manually maintained static notebooks" to "AI-compiled dynamic knowledge graphs" isn't an upgrade—it's a paradigm shift.
>
> Karpathy's core insight: **the value of a knowledge base lies not in storage, but in connections**. Traditional RAG (Retrieval-Augmented Generation) reassembles answers from scratch on every query. LLM Wiki has the AI act like a librarian, integrating each new document into the existing knowledge network—updating related entries, flagging contradictions, adding cross-references. Knowledge isn't passively stored; it actively grows. This idea isn't new—Vannevar Bush imagined the Memex in 1945, Niklas Luhmann practiced it with his Zettelkasten in the 1960s—but LLMs make "zero-cost maintenance" real for the first time.

---

## I. From Memex to LLM Wiki: An 80-Year Dream

In July 1945, *The Atlantic* published Vannevar Bush's "As We May Think." This engineer who led U.S. wartime research described a device called the **Memex**: a desk containing microfilm, where users could build "associative trails" between documents, organizing knowledge through connections rather than categories. Bush wrote: **"The human mind operates by association, not by alphabetical or numerical order."**

This vision influenced decades of computing—hypertext, the World Wide Web, Wikipedia all echo Memex's spirit. But Bush's problem remained unsolved: **who maintains these connections?**

In the 1960s, German sociologist **Niklas Luhmann** offered his answer: the Zettelkasten (slip-box) method. Using 90,000 index cards linked by a numbering system, Luhmann built an analog hypertext network. He called it **"my communication partner."** This system helped him publish 70 books and 400+ papers over 30 years.

But the cost was immense. Luhmann spent hours daily maintaining his slip-box—writing new cards, updating old ones, adjusting numbers, creating cross-references. **The gap between knowledge management's value and its maintenance cost seemed insurmountable.**

The 2000s brought digital note-taking tools. Evernote, Notion, Roam Research, Obsidian—each generation promised "easier knowledge management." But fundamentally, they just swapped paper cards for digital files. **The maintainer was still human.**

In 2020, Tiago Forte published *Building a Second Brain*, proposing the PARA method (Projects/Areas/Resources/Archives) to reduce maintenance through better folder structure. But even the most devoted Second Brain practitioners admit: **note systems eventually decay**. Because humans get tired, forget, procrastinate—and knowledge graphs require continuous, tedious, mechanical maintenance.

Then in 2026, Karpathy's LLM Wiki emerged, offering the first viable solution to this 80-year problem: **make AI the maintainer**.

Humans handle reading, thinking, questioning. AI handles summarizing, cross-referencing, consistency checks. **Maintenance cost drops to near-zero. Knowledge graphs can finally grow sustainably.**

![](/images/reading/karpathy-llm-wiki-1.jpg)

*From Bush's 1945 Memex vision to Karpathy's 2026 LLM Wiki: 80 years of knowledge management evolution*

## II. Karpathy's Three-Layer Architecture: Raw, Wiki, Schema

Karpathy's technical architecture is surprisingly minimal. No vector databases, no embedding pipelines, no complex RAG infrastructure. Just three layers, each with clear responsibilities:

**Layer 1: Raw Sources**

Your personal data warehouse—articles, papers, images, data files in their original formats. Karpathy uses Obsidian Web Clipper to convert web articles to Markdown, downloads images locally with hotkeys, ensuring LLMs can directly access everything.

Key principle: **the raw directory is immutable**. LLMs only read from here, never modify. This ensures information traceability—every claim in any wiki page can be traced to a source document in raw/.

**Layer 2: Wiki**

This layer is entirely owned and maintained by the LLM. When you add a new article to raw/, the LLM doesn't just index it—it reads the full text, extracts key information, then executes a cascade of operations:

- Generate summary page
- Create or update related entity pages (people, concepts, products)
- Add cross-reference links in existing pages
- Flag contradictions between new and old information
- Update the master index (index.md) and operation log (log.md)

**A single new document can trigger updates to 10-15 wiki pages.** This "ingest once, propagate everywhere" pattern is what traditional note-taking can't achieve—you might remember what you wrote in one document, but you won't manually update ten related pages.

Karpathy describes his workflow: "I have the LLM agent open on one side and Obsidian on the other. The LLM makes edits based on our conversation, and I browse the results in real time—following links, checking the graph view, reading updated pages. **Obsidian is the IDE; the LLM is the programmer; the wiki is the codebase.**"

This analogy precisely captures the role division: humans are project managers (setting direction), LLMs are executors (handling details), and the wiki is the continuously evolving product.

**Layer 3: Schema**

Like a configuration file in programming—instructions telling the LLM how to organize the wiki. For example, CLAUDE.md for Claude Code or AGENTS.md for Codex. It defines: directory structure conventions, page format standards, document ingestion workflows, query strategies.

Karpathy's positioning of Schema is interesting: it's not a static file written once, but **co-evolved between you and the LLM**. As you gain experience using the wiki, Schema gets updated—which conventions work, what needs adjustment, which workflows are most efficient. Schema itself "grows."

The relationship between three layers can be understood through a metaphor: Raw is ore, Wiki is refined metal products, Schema is the smelting manual. **Ore stays unchanged, products constantly update, the manual records best practices.**

![](/images/reading/karpathy-llm-wiki-2.jpg)

*Three-layer architecture: immutable raw materials at bottom, LLM-maintained knowledge graph in middle, co-evolved schema document on top*

This architecture implies two important operational modes:

**Ingest**: Triggered when adding new materials. LLM reads the source, discusses key points with you, then systematically updates multiple wiki pages. Karpathy prefers ingesting one document at a time while staying involved—"I read summaries, check updates, guide what the LLM should emphasize." But batch ingestion works too.

**Lint**: Periodically have the LLM scan the wiki for: contradictions between pages, outdated claims superseded by new data, orphan pages with no incoming links, important concepts mentioned but lacking their own page, missing cross-references. **The LLM even suggests new searches to fill gaps**—the wiki doesn't just passively store; it actively grows.


## III. Cross-References: Why [[Wikilinks]] Are the Soul

In Karpathy's system, the most valuable element isn't individual page content—it's **the links between pages**.

This insight isn't new. Bush pointed out in 1945 that Memex's essence was "associative trails." Luhmann said: "Every note is just an element in the network of references and back references, from which it gains its quality." Yet in actual digital note-taking, cross-references remain the most neglected aspect.

The reason is simple: **manually maintaining cross-references is exhausting.**

You write a concept on page A. Page B mentions the same concept. Page C cites A's conclusions. Managing these links manually means reviewing every possibly related page whenever you add a document. Beyond 50 documents, this becomes impossible.

Obsidian's `[[wikilinks]]` syntax offers a low-barrier solution—type double brackets and a page name to create a bidirectional link. Obsidian's graph view reveals the entire knowledge network's topology: which pages are hubs, which are orphans, where connections cluster, where they're sparse.

But wikilinks do far more than navigation. **When an LLM reads a wiki containing wikilinks, it receives not a collection of isolated documents, but a semantic network.** Links themselves are information—A linking to B means a relationship exists between them, which the LLM can understand and leverage to answer questions.

Karpathy describes two special files for navigation:

**index.md**: A content catalog listing every wiki page with a one-line summary and category tags. When answering queries, the LLM reads index.md first to locate relevant pages, then drills in. Karpathy found that **at moderate scale (~100 articles, hundreds of pages), index-based navigation outperforms vector retrieval**—no embedding infrastructure required.

**log.md**: An append-only chronological record of ingests, queries, and lint passes. Each entry uses a consistent prefix (e.g., `## [2026-04-02] ingest | Article Title`), making it parseable with Unix tools like grep. The log provides the wiki's "evolution timeline," helping the LLM understand recent activity.

VentureBeat quoted community member Charly Wargnier: **"It acts as a living AI knowledge base that actually heals itself."** This self-healing ability stems directly from cross-references—when you update an entity page, the LLM checks all pages linking to it for necessary synchronized updates. Without links, no cascading repair is possible.

This is the fundamental distinction between LLM Wiki and traditional RAG. **RAG assembles answers at query time; LLM Wiki compiles knowledge at ingest time.** One starts from scratch every time; the other accumulates continuously. One's quality depends on retrieval algorithms; the other's depends on cross-reference density and accuracy.

![](/images/reading/karpathy-llm-wiki-3.jpg)

*Cross-references transform isolated documents into an organic knowledge network—connections are value*

## IV. From Theory to Practice: Three Implementation Approaches

After Karpathy's Gist dropped, the community quickly spawned various implementation paths. By tech stack and use case, they fall into three categories.

### Approach 1: Obsidian + AI Coding Tools

The most popular path, also recommended by Chinese tech community member "Lao Zhang" (@laozhang2579). Core idea: use Obsidian as the wiki browser/editor, Cursor or Claude Code as the LLM agent maintaining wiki files.

The workflow:

1. Use Obsidian Web Clipper to save web articles to raw/
2. Open the entire wiki directory in Cursor, have AI read new documents
3. AI generates summaries, updates indexes, creates cross-references
4. Browse results in Obsidian, check connection quality via graph view

Lao Zhang emphasized several key details in his X posts. First, **Schema files are critical**—without them, LLM output quality drops significantly. An LLM without a schema is like an intern without coding standards: the code runs but the style is chaos. Second, **ingestion pace matters**—process one document at a time, discuss thoroughly with AI before moving to the next.

**Strengths**: Obsidian's mature ecosystem—graph view, Dataview query plugin, Marp slide plugin—dramatically enhances wiki visualization and interactivity. Lex Fridman mentioned generating dynamic HTML pages for data visualization, even conversing with a "temporary knowledge base" via voice mode during 7-10 mile runs.

**Weaknesses**: Requires coordinating multiple tools (Obsidian + Cursor/Claude Code + CLI), with a moderate technical barrier. Token limits in Cursor and Claude Code may require frequent segmentation for large wikis.

### Approach 2: Pure Markdown + CLI Agent

Karpathy's own approach—the most minimalist path. No specific note-taking software needed; the entire wiki is a Git repository of Markdown files, operated via CLI tools and LLM APIs.

Karpathy admits this is currently "a hacky collection of scripts." But he mentions **qmd**—a local Markdown search engine combining BM25 and vector retrieval with LLM re-ranking, running entirely on-device. It provides both CLI and MCP server interfaces for direct LLM invocation.

**Strengths**: No software dependencies. **The wiki is a Git repo**—automatic version history, branching, collaboration. Deployment is maximally flexible.

**Weaknesses**: No graph view or visualization. Pure text operation is unfriendly to non-technical users. High setup cost for LLM agent integration.

### Approach 3: Agent-Native Platforms

The most radical path—platforms purpose-built for AI agents, where LLM Wiki becomes a native capability rather than a manual setup.

X user @jumperz (Secondmate founder) demonstrated a "Swarm Knowledge Base" orchestrated via OpenClaw: 10 AI agents collaborating, each covering different domains, sharing one wiki. An independent "Quality Gate" agent (based on the Hermes model) reviews every new page—only validated content enters the live wiki.

**This solves multi-agent collaboration's core problem: one agent's hallucination cannot pollute the entire knowledge base.** The quality gate creates a "Compound Loop": agents produce raw output → compiler organizes structure → Hermes validates truth → verified briefings feed back to all agents. Every agent "wakes up" to filtered, high-integrity collective knowledge.

Entrepreneur Vamshi Reddy commented on X: **"Every business has a raw/ directory. Nobody's ever compiled it. That's the product."** Karpathy agreed, calling it "an incredible new product category."

Edra co-founder Eugen Alpeza noted the enterprise challenge: "The jump from personal research wiki to enterprise operations is where it gets brutal. Thousands of employees, millions of records, tribal knowledge that contradicts itself across teams."

These three approaches aren't mutually exclusive. Start with Approach 1 (lowest barrier), scale to 2 or 3 as needs grow.

![](/images/reading/karpathy-llm-wiki-4.jpg)

*From personal notes to multi-agent collaboration: three approaches covering beginner to enterprise scale*


## V. The Counter-Arguments: Five Risks You Can't Ignore

Any serious technology proposal needs counter-arguments. LLM Wiki is no silver bullet. In practice, it faces at least five serious challenges.

### Risk 1: Hallucination Contamination

LLMs fabricate facts—this is well-documented. But in the LLM Wiki context, hallucination damage is amplified.

In traditional RAG, hallucinations affect only a single response—close the window and they vanish. In LLM Wiki, **hallucinations can be written into wiki pages, becoming persistent "knowledge,"** propagating through cross-references to other pages. One incorrect concept definition might be cited by 10 other pages, creating cascading contamination.

Wikipedia's March 2026 case provides a real-world warning. The Open Knowledge Association used AI to translate Wikipedia articles, introducing mass hallucinations—fabricated citations, factual errors, invented sources. Wikipedia editors had to implement new policies restricting AI translations. **If a public encyclopedia can't avoid AI hallucinations, personal knowledge bases are even more vulnerable.**

Karpathy's lint mechanism partially addresses this—periodically having the LLM self-check for contradictions. But having the same LLM review its own work is like having students grade their own exams. Secondmate's "Quality Gate" (using an independent model for review) is more reliable but adds complexity and cost.

### Risk 2: Cognitive Outsourcing

When AI handles all summarizing, organizing, and cross-referencing, can humans maintain deep understanding?

Luhmann's Zettelkasten worked partly because **manual organization is itself a form of thinking**. Deciding where a card belongs and what it links to is an act of conceptual discrimination. That "friction" isn't a bug—it's a feature.

Tiago Forte launched his "AI Second Brain" course in 2026 while noting a crucial distinction: **Personal Knowledge Management (PKM) is being replaced by Personal Context Management (PCM)—the new bottleneck isn't AI capability, but your ability to give AI the right information at the right time.** When AI handles everything, your value lies in judgment, and judgment comes from deep understanding, which comes from "friction" with knowledge.

If LLM Wiki completely removes that friction, you might own a massive knowledge base while understanding little of its contents.

### Risk 3: Privacy and Security

Karpathy's system requires the LLM to read all your raw materials—research papers, personal notes, business documents. With cloud LLMs (GPT-4, Claude), **your entire knowledge base transits through APIs**.

For individuals, this means your reading history, research directions, even thinking patterns could be logged in API records. For enterprises, compliance risks are greater—internal documents passing through third-party APIs may violate data protection regulations.

Karpathy's mention of qmd (local search engine) offers partial mitigation—it runs entirely on-device. But wiki generation and maintenance still depend on remote LLMs. Fully local solutions (using open-source models like Llama) solve the privacy issue, but local models currently lack sufficient capability for long-text understanding and cross-referencing.

### Risk 4: Scale Ceiling

Karpathy acknowledges his system works well at ~100 articles and ~400,000 words. That's adequate for personal research, but enterprise knowledge bases contain millions of documents.

When wiki pages exceed a few thousand, index.md-based navigation breaks down—one index file can't hold summaries for all pages. At that point, you're back to embeddings + vector databases. **LLM Wiki hasn't eliminated RAG; it offers a simpler alternative at small-to-medium scale.**

Reddit's LocalLLaMA community raised another point: "Karpathy might be onto something, but it doesn't take advantage of the responses inferred by the 'fast' model interacting with the user." The wiki only captures knowledge compiled during ingestion; **insights and reasoning chains from daily Q&A may not be written back into the wiki**.

### Risk 5: Single Point of Failure

Karpathy writes: "You rarely ever write or edit the wiki manually; it's the domain of the LLM." This means wiki quality depends entirely on LLM capability and Schema design.

If the LLM provider changes APIs, raises prices, or a model version regresses in knowledge organization (not uncommon during updates), **your entire knowledge management system could suddenly degrade**. You own all the Markdown files (auditable, readable—that's good), but you might lose the ability to maintain them.

This is why the Schema layer matters so much. A well-written Schema lets you switch between LLMs while preserving wiki consistency and quality. **Schema is the program for the LLM; the wiki is the program's output.**

![](/images/reading/karpathy-llm-wiki-5.jpg)

*The AI librarian's challenges: hallucination, cognitive outsourcing, privacy, scale, and single-point dependency*

## VI. What This Means for Knowledge Workers

After studying Karpathy's system and the community's implementations, different groups should take different actions:

### Act Now

**Researchers and analysts.** If your work is long-cycle, deep-accumulation—tracking a field for months or years, continuously reading papers, reports, news—LLM Wiki may be the most efficient knowledge management system available today. Traditional note-taking software's pain points are most acute here: more documents means harder to find connections, less motivation to maintain, and the knowledge base increasingly resembles a digital junkyard.

**Product managers and designers.** Your work is fundamentally information synthesis—weaving competitive analysis, user research, tech trends, and business metrics into coherent product strategy. This is exactly what LLM Wiki excels at: compiling fragmented inputs into structured knowledge networks.

**Independent creators and newsletter authors.** You need continuous reading, continuous material accumulation, continuous output. An AI-maintained knowledge base becomes your permanent material library, where every reading session stockpiles ammunition for future writing.

### Wait and See

**Casual note-takers.** If your needs are just to-dos, bookmarks, occasional journaling, existing tools (Apple Notes, Notion) are perfectly adequate. LLM Wiki's advantage lies in "compilation" and "cross-referencing"—if your notes don't need much interconnection, introducing LLM maintenance is over-engineering.

**High-accuracy-required domains.** In law, medicine, finance, a single hallucination can have serious consequences. Using LLM Wiki in these fields requires extremely rigorous review processes, where costs may exceed benefits.

### The Question Everyone Should Consider

Whether or not you adopt LLM Wiki immediately, a deeper question deserves thought: **when AI can manage knowledge for you, what's your core competency?**

Karpathy's answer is implicit in his design: humans handle "sourcing, exploration, and asking the right questions." **What to read, which direction to pursue, what questions to ask—this judgment is irreplaceable.** Knowledge management's manual labor (summarizing, categorizing, linking, consistency checking) can be outsourced to AI, but knowledge management's intellectual labor (curatorial vision and question quality) belongs only to you.

This aligns with Forte's "Personal Context Management" view. **The AI-era knowledge worker's core skill is no longer "organizing information" but "providing AI with the right context."**

## VII. Closing

Karpathy's Gist ends by stating the document is "intentionally abstract"—it describes a pattern, not an implementation. Directory structures, page formats, tool choices all depend on your domain, preferences, and LLM of choice.

This openness is part of the design. LLM Wiki isn't a product or a framework. **It's a mindset shift: from "I manually maintain notes" to "AI continuously compiles my knowledge."**

Eighty years ago, Bush envisioned the Memex but couldn't find a maintainer. Sixty years ago, Luhmann found one—himself—at the cost of hours of daily manual labor. Today, LLMs make "zero-cost maintenance for personal knowledge graphs" real for the first time.

Karpathy summarized the core spirit: **"The tedious part of maintaining a knowledge base is not the reading or the thinking—it's the bookkeeping. Updating cross-references, keeping summaries current, noting when new data contradicts old claims, maintaining consistency across dozens of pages. Humans abandon wikis because the maintenance burden grows faster than the value. LLMs don't get bored, don't forget to update a cross-reference, and can touch 15 files in one pass."**

Your next knowledge management system might not need you to maintain it at all.

![](/images/reading/karpathy-llm-wiki-6.jpg)

*The knowledge worker's future: humans think and ask questions; AI handles the rest*

