# Dwarkesh Patel × Jensen Huang: Will NVIDIA's Moat Persist?

**Guest**: Jensen Huang, Founder & CEO of NVIDIA · **Host**: Dwarkesh Patel · **Duration**: 1 hour 43 minutes · **Video**: [YouTube](https://www.youtube.com/watch?v=Hrbq66XqtCo) · **Date**: April 2026

> The backdrop is simple: software company valuations are crashing as the market bets AI will commoditize software. Meanwhile, NVIDIA keeps climbing. Dwarkesh Patel — the sharpest blade among Silicon Valley's new generation of podcasters — opens with a disarmingly simple question: NVIDIA sends a GDS2 file to TSMC, TSMC builds the chips, SK Hynix makes the HBM, an ODM assembles the rack. So NVIDIA is fundamentally a software company whose products others manufacture. If software gets commoditized, does NVIDIA? Jensen doesn't dodge. He spends the entire interview answering.
>
> For anyone making product or technology decisions in the AI era, this conversation offers a rare window into how someone running a trillion-dollar empire thinks about moats, competition, supply chains, and geopolitics. Jensen describes how he "prefetches" supply chain bottlenecks years in advance — not by throwing money at capacity locks, but by personally sitting with every supplier CEO and walking them through why the future is as big as he says it is. He describes GTC as a 360-degree ecosystem visualization tool: upstream sees downstream demand, downstream sees upstream capability. This isn't CEO diplomacy — it's systems design thinking applied to supply chains.
>
> But the sharpest part of this conversation is about China chip controls. Jensen says what few dare to in this politically charged minefield: "Comparing AI chips to enriched uranium is a lousy analogy because it's an illogical analogy." His argument isn't moral — it's game theory. If the US restricts exports, China builds its own, other countries fill the gap, and American chip companies lose half their market. More importantly, his "AI five-layer cake" framework — energy, chips, infrastructure, models, applications — argues the US should win every layer, not scare itself into retreat. In the noise of the AI arms race, this kind of cold structural thinking is worth more than any slogan.

---

## Electrons to Tokens: NVIDIA's Core Mission

**Dwarkesh**: We've seen the valuations of a bunch of software companies crash because people are expecting AI to commoditize software. There's a potentially naive way of thinking: NVIDIA sends a GDS2 file to TSMC, TSMC builds the logic dies and switches, packages them with HBM from SK Hynix, Samsung, and Micron, then sends it to an ODM in Taiwan for rack assembly. So NVIDIA is fundamentally making software that other people manufacture. If software gets commoditized, does NVIDIA get commoditized?

**Jensen**: In the end, **something has to transform electrons into tokens**. That transformation — and making those tokens more valuable over time — is incredibly hard to commoditize. It's like making one molecule more valuable than another molecule. The amount of artistry, engineering, science, and invention that goes into making a token valuable — we're watching it happen in real time.

**My mental model of our company: the input is electrons, the output is tokens, and in the middle is NVIDIA.** Our job is to do as much as necessary, as little as possible, to enable that transformation at incredible capability. What I mean by "as little as possible" — whatever I don't need to do, I partner with somebody and make it part of my ecosystem. If you look at NVIDIA today, **we probably have the largest ecosystem of partners in the world** — upstream supply chain, downstream supply chain, across all five layers of AI.

![Electrons to Tokens: NVIDIA's Core Mission](/images/reading/jensen-huang-nvidia-moat-1.jpg)

And I don't think enterprise software companies will get commoditized either. Most software companies today are tool makers — Excel, PowerPoint, Cadence, Synopsys. **I see the opposite of what people see: the number of agents will grow exponentially, the number of tool users will grow exponentially.** Today we're limited by the number of engineers. Tomorrow those engineers will be supported by armies of agents exploring design spaces like never before, using the same tools we use today. The reason it hasn't happened yet is that agents aren't good enough at using tools yet.

## Supply Chain as Moat

**Dwarkesh**: In your latest filings, you had almost $100 billion in purchase commitments with foundries, memory, and packaging. Semi Analysis reports you'll have $250 billion of these commitments. One interpretation: NVIDIA's real moat isn't chip design — it's that you've locked up years of scarce components. Someone else might have an accelerator, but can they actually get the memory? The logic?

**Jensen**: That's one of the things we can do that's hard for someone else to do. We've made enormous commitments upstream — some explicit, like the numbers you mentioned, and some implicit. A lot of upstream investments are made by our supply chain partners because **I sit down with those CEOs personally, tell them how big this industry is going to be, explain why, and reason through it with them step by step**.

Why are they willing to invest for me and not someone else? Because they know I have the downstream capacity to buy their supply and sell it through. **NVIDIA's downstream demand is so large that they're willing to make upstream investments.** If you look at GTC — people marvel at the scale — it's a 360-degree view of the entire AI universe in one place. They're all there because they need to see each other. I bring them together so downstream sees upstream, upstream sees downstream.

**I spend a lot of my time informing our supply chain and partners about the opportunity ahead** — how big, why, when, and how to reason about it systematically. People say my keynotes are one announcement after another, but there's always a part that's almost educational. That's exactly the point. I need the entire ecosystem to understand what's coming.

![GTC: 360-Degree Ecosystem Visualization](/images/reading/jensen-huang-nvidia-moat-2.jpg)

We can sustain this scale only because downstream demand is so great and they all see it coming. Just as there's cash flow, there's supply chain flow. **Nobody's going to build a supply chain for an architecture whose business turns are low.**

## TPU Competition and the CUDA Flywheel

**Dwarkesh**: I want to understand NVIDIA's view on TPUs. Google has been doing TPU for many generations, now they have Trillium. Saying NVIDIA's moat is impenetrable and saying Google has built good-enough chips — one of these must be wrong.

**Jensen**: Both are true. Google's chips are impressive. They invented the Transformer, trained massive models — their position in AI is legendary. However, **TPU fundamentally serves one company**. Their Cloud TPU has some customers, but it's far from a massive installed base.

Here's the fundamental issue. **In AI, a completely new type of model appears every 90 days** — new architectures, new methodologies, new discoveries. When something new arrives, researchers need a programmable, flexible platform with broad ecosystem support. If your platform is optimized for last generation's dataflow graph, you're stuck when the new model arrives.

NVIDIA's approach is different. When a new model appears, we write new CUDA kernels, parallelize and distribute the new algorithms across processors, systems, and networks. **Without CUDA to do that, I wouldn't even know where to start.**

The flywheel is what matters. CUDA has the largest installed base, the most developers, the richest ecosystem. **The platform with the best performance per dollar attracts the most developers, who create the most applications, which attract the most users — that's the computing platform flywheel.**

**Dwarkesh**: But Google has unlimited internal developers. They don't need an external ecosystem.

**Jensen**: The question isn't whether they have developers. It's **how long it takes to adapt their chip every time they make a new discovery**. With an ASIC, you've essentially burned a dataflow graph into silicon. When AI has a breakthrough — and this happens every few months — you need to redesign the chip. That cycle is 3-5 years for ASICs. On NVIDIA's architecture, we can adapt in weeks or days with new CUDA libraries. **CUDA makes our chips in some sense eternal — every generation of hardware gets better through software updates.**

## Why Doesn't NVIDIA Become a Hyperscaler?

**Dwarkesh**: NVIDIA's gross margins exceed 70%. If you also ran cloud services, you'd capture downstream profits. Why not become a hyperscaler?

**Jensen**: The world has plenty of clouds. If I don't do it, someone will. **Following the philosophy of doing as much as needed but as little as possible** — in clouds, the world already has excellent companies doing that.

But the deeper reason: **if I do cloud, I become a competitor to my customers**. Today NVIDIA is everyone's supplier, competing with no one. AWS, Azure, GCP, Oracle — they're all partners. If I start competing with them, the ecosystem collapses.

Think of it this way — **I don't want to be a brand. I want to be the TSMC of AI.** TSMC succeeded because it doesn't make its own chip brands, so every chip company trusts it with their most sensitive designs. If TSMC started making its own chips, the model collapses. Same logic applies to NVIDIA.

![Not a Cloud: The TSMC of AI](/images/reading/jensen-huang-nvidia-moat-3.jpg)

**Dwarkesh**: But you do have DGX Cloud?

**Jensen**: DGX Cloud isn't an independent cloud. It runs through partner data centers — CoreWeave, Oracle, Microsoft. We help enterprises use AI more easily, but the infrastructure belongs to partners. **We don't compete for end customers; we make it easier for customers to use partner infrastructure.**

And here's an important point. Count how many ASIC teams in the world can deliver a new generation chip on time every single year. Your token cost drops by an order of magnitude every year, and you can count on it. **You need to find another ASIC team where you can bet your entire business that they'll be there for you every single year. Go find one — you can count them on one hand.**

## Should We Sell Chips to China?

**Dwarkesh**: What's your view on China chip controls? Should we keep selling AI chips to China?

**Jensen**: Let me give a bigger framework. **AI is a five-layer cake: energy, chips, infrastructure, models, applications. The United States should go win all five.**

What's happening is we've put controls on the chip layer. The result? China started building its own chips. More importantly, **American chip companies lost the China market** — one of the world's largest technology consumer markets. This isn't hypothetical. It's already happened.

**Dwarkesh**: But what if an AI chip can train a model that does zero-day exploits against all American software? Isn't that a weapon?

**Jensen**: First, **comparing AI chips to enriched uranium is a lousy analogy — an illogical analogy**. The way to solve security problems is through dialogue with researchers, with China, with other countries, to ensure technology isn't misused. That takes diplomacy, not blockades.

Second, the US must stay ahead. Blackwell, Vera Rubin — abundantly available in the United States. Our results prove it.

Third, **if we scare this country into thinking AI is a nuclear bomb, so everybody hates and fears AI, we're doing a disservice to the United States**. If we scare everyone out of software engineering because "AI will kill all software jobs," we won't have software engineers. If we scare away energy investment because "data centers will consume all power," we won't have energy infrastructure.

![AI Five-Layer Cake: Win Every Layer](/images/reading/jensen-huang-nvidia-moat-4.jpg)

**Jensen**: **Fear is the biggest enemy in the AI race, not China.** If we scare ourselves into stopping investment while other countries press ahead — that's the real security threat. The right approach: stay ahead at every layer of the stack while managing risk through diplomacy. Don't close the door — run faster than everyone else.

## Energy: The Real Bottleneck

**Dwarkesh**: You put energy at the bottom of the AI five-layer cake. Will power become a hard constraint on AI development?

**Jensen**: It already is. The US is scarce on energy, which is why NVIDIA has to keep advancing our architecture — to deliver maximum throughput with limited chips because power is limited. **Our performance per watt is the highest in the world.** But if your power is completely abundant and cheap? Then you might not need cutting-edge 7nm chips — Hopper at 7nm would do. Today's models were largely trained on Hopper.

The more pragmatic approach: **the power grid is idle 99% of the time**. We should eliminate waste — use the grid's idle capacity for AI workloads. Before chasing nuclear plants and space-based computing, exhaust what's already available.

**Dwarkesh**: But could a competitor in an energy-abundant country catch up with two-generation-old chips plus massive power?

**Jensen**: Theoretically possible, but remember — **it's not just chips times watts**. You also need the entire software stack — the CUDA ecosystem, model optimization, inference frameworks. Chips are just one layer of the five-layer cake. A competitor with chips and power but no software ecosystem is like having flour and an oven but not knowing how to bake bread.

## What If AI Never Happened?

**Dwarkesh**: Final question. If AI never happened, what kind of company would NVIDIA be?

**Jensen**: If AI didn't exist, NVIDIA would still be a very large company. **Our company's premise is that Moore's Law's ability to advance general-purpose computing has largely run its course, and the future belongs to domain-specific accelerated computing.** That has nothing to do with AI.

Computer graphics, molecular dynamics, seismic processing, image processing, computational lithography — all these need GPU acceleration regardless of AI. **If you watch the beginning of GTC, none of it is AI — computational lithography, quantum chemistry, data processing — all accelerated computing applications.**

Of course, it was our accumulated work in accelerated computing that made deep learning possible. **We democratized it so any student, any scientist could access a GeForce card and do amazing research.** That fundamental promise hasn't changed one bit.

If there were no AI, I'd be very sad. But NVIDIA's core mission wouldn't change — **making real what general-purpose computing can't do or can't do well, through accelerated computing.** Tensors aren't the only way to compute, and we want to help everyone.

![Accelerated Computing: A Mission Older Than AI](/images/reading/jensen-huang-nvidia-moat-5.jpg)

---

*This article is based on Dwarkesh Patel's interview with Jensen Huang. The original video runs approximately 1 hour 43 minutes. This piece preserves the core arguments and structure while editing conversational speech for readability. Full video available at [Dwarkesh Podcast](https://www.youtube.com/watch?v=Hrbq66XqtCo).*
