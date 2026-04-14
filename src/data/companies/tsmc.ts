import type { CompanyProfile } from './types';

export const tsmcProfile: CompanyProfile = {
  id: 'tsmc',
  ticker: 'TSM',
  name: 'TSMC',
  emoji: '🔬',
  sector: 'Semiconductors — Manufacturing',
  oneLiner: 'The world\'s sole source of leading-edge chips — the most geopolitically important company on earth',
  description:
    "TSMC makes ~90% of the world's most advanced chips — the ones in NVIDIA GPUs, Apple silicon, AMD CPUs, and essentially every device that matters. It doesn't design chips; it manufactures them for fabless companies like NVIDIA and Apple. The economics are extraordinary: ~55% gross margins, dominant market share, and a decades-long process lead that competitors (Samsung, Intel) have tried and failed to close. But TSMC operates in Taiwan, 100 miles from mainland China, and a significant share of the world's economy depends on that geography not becoming a conflict zone. The investment case is pure: a wide-moat compounder with secular AI tailwinds, priced for the risk.",
  dataAsOf: 'FY 2024',
  difficulty: 'advanced',
  estimatedMinutes: 14,
  keyFacts: [
    { label: 'Revenue', value: '~$90B', detail: 'FY2024 — grew ~30% driven by HPC (AI) demand' },
    { label: 'Gross Margin', value: '~55%', detail: 'Extraordinary for manufacturing — reflects pricing power at the leading edge' },
    { label: 'Advanced Node Share', value: '~90%+', detail: '3nm, 5nm, 7nm production — TSMC is essentially the only supplier' },
    { label: 'Capex', value: '~$30-38B/year', detail: 'Massive — building leading-edge fabs costs $20B+ each' },
    { label: 'Top Customers', value: 'Apple ~25%, NVIDIA ~10%+', detail: 'Concentrated customer base, but customers locked in' },
    { label: 'P/E Ratio', value: '~20-25x fwd', detail: 'Premium to semi-manufacturing peers; discount to fabless customers' },
  ],
  workflow: {
    business: {
      modelAnswer:
        "TSMC is a pure-play semiconductor foundry — it manufactures chips that other companies design. The 'fabless-foundry' model: companies like NVIDIA, Apple, AMD, Qualcomm, and Broadcom design chips and pay TSMC to produce them at TSMC's fabrication facilities (fabs). TSMC charges per wafer, with premium pricing for leading-edge processes (currently 3nm). Each new process generation costs $20-40B to bring up, requires cutting-edge EUV lithography equipment (from ASML, another monopoly), and takes 3-5 years of development. Revenue and margins scale with how much leading-edge volume TSMC can produce, because leading-edge nodes have much higher pricing power than mature nodes. TSMC does NOT design any chips, has no consumer brand, and has essentially no fabless competitors it competes against — its customers ARE the fabless companies.",
      strongReasoningIncludes: [
        'Identifies the pure-play foundry (fabless-foundry) model',
        'Separates TSMC from its customers — it does NOT design chips',
        'Recognizes leading-edge nodes carry the pricing power and the moat',
      ],
    },
    drivers: {
      modelAnswer:
        "Three drivers. (1) AI accelerator demand. NVIDIA's entire H100/H200/Blackwell lineup is manufactured at TSMC, and hyperscaler AI capex is the single biggest revenue lever right now. This is unlike any historical semi cycle in scale. (2) Apple and mobile chipsets. Apple pre-pays for essentially all of TSMC's newest node capacity in year one; iPhone cycles drive a big, predictable chunk of revenue. (3) Advanced packaging (CoWoS) — high-end AI chips require specialized packaging to combine GPU dies with high-bandwidth memory. TSMC's CoWoS capacity has been a bottleneck for NVIDIA's output. Expanding packaging capacity is almost as important as expanding wafer capacity. Secondary drivers: automotive semiconductors (steady, mid-growth), IoT/industrial chips (lower-end nodes, stable), and China exposure (still meaningful but capped by export controls).",
      strongReasoningIncludes: [
        'Identifies AI / HPC demand as the dominant near-term driver',
        'References Apple OR advanced packaging (CoWoS) as a specific lever',
        'Acknowledges revenue is tied to a few large customers and their end markets',
      ],
    },
    moat: {
      modelAnswer:
        "TSMC has one of the most durable moats in any industry, with three reinforcing pillars. (1) Process technology lead. TSMC is typically 1-2 generations ahead of competitors (Samsung, Intel) in yield and performance at leading-edge nodes. That gap exists because each generation compounds — you need to master node N to efficiently bring up node N+1. (2) Scale economics. Leading-edge fabs cost $20-40B; only TSMC has the volume to amortize that capex. Customers prefer TSMC because it's ahead; being ahead generates the profits to stay ahead. (3) Customer dependence. Apple, NVIDIA, and AMD have designed chips that require TSMC's specific process — switching fabs means redesigning the chip (18+ months, billions of dollars). This creates mutual lock-in. Samsung is 1-2 years behind in process technology and has struggled with yields; Intel's foundry business is years from being competitive at the leading edge. Barring geopolitical disruption, TSMC's moat is effectively self-reinforcing.",
      strongReasoningIncludes: [
        'Identifies process technology leadership as the primary moat',
        'References the capex + scale dynamic that makes the moat self-reinforcing',
        'Notes switching costs for fabless customers (chip redesign)',
      ],
    },
    risks: {
      modelAnswer:
        "Four risks, dominated by one. (1) China-Taiwan geopolitical risk. A Chinese military blockade or invasion of Taiwan would disrupt essentially the entire global chip supply. This is the tail risk that makes TSMC trade at a lower multiple than its economics justify. Probability of outright war is arguably low, but any escalation (China establishing an ADIZ, cyberattacks on fabs) hits the stock immediately. (2) Export controls and decoupling. US restrictions on selling advanced chips to China have already cut TSMC's China revenue; further restrictions or Chinese retaliation could escalate. (3) Cyclical overbuild. Semis are cyclical — huge capex commitments (Arizona, Japan, Germany fabs) create fixed costs that can pressure margins if demand softens. The AI boom could turn into AI oversupply. (4) Intel or Samsung catching up at the leading edge. Intel's 18A process is coming in 2025-26; if it works, it would crack TSMC's monopoly at the leading edge for the first time in a decade. A quieter risk: ASML — TSMC depends on a single supplier (ASML) for EUV lithography machines.",
      strongReasoningIncludes: [
        'Identifies Taiwan geopolitical risk as the dominant structural risk',
        'Names export controls / China decoupling as a specific revenue risk',
        'References either cyclical semi risk or competitive catch-up (Intel, Samsung)',
      ],
    },
    valuation: {
      modelAnswer:
        "TSMC trades at ~20-25x forward earnings — a premium to most semi peers and a rich absolute multiple, but a significant DISCOUNT to its customers (NVIDIA at ~40x, Apple at ~30x) and to what the economics would normally command for a business with this moat. The discount is entirely the Taiwan geopolitical risk — if TSMC were headquartered in the US or Europe, it would probably trade at 30-35x. Embedded in the current price: continued AI-driven revenue growth at 20%+, successful ramp of Arizona and Japan fabs (diversifying geographic risk), and no escalation around Taiwan. If the geopolitical situation stabilizes, there's genuine multiple expansion potential. If it worsens, the downside is severe (not just valuation — the stock trades on existential risk). The entire valuation discussion is really a geopolitical-risk discussion dressed up in P/E multiples.",
      strongReasoningIncludes: [
        'Identifies the geopolitical discount vs. peer / customer multiples',
        'Names specific assumptions embedded in the price (AI demand, diversification)',
        'Frames valuation as primarily a risk-adjusted discount, not a pure growth story',
      ],
    },
    thesis: {
      modelAnswer:
        "BULL THESIS: TSMC is the most important business in the global economy, trading at a geopolitical-risk discount that the market will gradually remove. AI accelerator demand is a multi-decade secular wave, and TSMC is the only supplier. Arizona and Japan fabs are beginning to come online, giving customers and investors a genuine geographic diversification story that should compress the Taiwan-risk discount over 3-5 years. Gross margins at 55% are expanding as leading-edge mix grows. At 22x earnings for a business growing 20%+ with this moat, you're paid to own the geopolitical risk.\n\nBEAR THESIS: TSMC is priced for a geopolitical outcome that can't be known. Taiwan tension is structural, not cyclical — China's leadership has been explicit about unification, and the US chip export control regime is only tightening. The Arizona and Japan fabs are far more expensive to build and will run at lower margins; 'geographic diversification' actually compresses gross margins, not the multiple. Meanwhile AI capex cycles historically end badly — hyperscaler spending can drop 30% overnight, and TSMC is a major beneficiary on the way up. At 22x earnings for a business with existential tail risk AND a cyclical revenue base, the margin of safety is thinner than the multiple suggests.",
      strongReasoningIncludes: [
        'Commits to a bull or bear case',
        'References Taiwan risk, AI cyclicality, or geographic diversification specifically',
        'The thesis is specific enough that a named event would confirm or refute it',
      ],
    },
    verdict: {
      modelAnswer:
        "Reasonable verdict: SIZE IT SMALL and buy. TSMC belongs in a diversified portfolio because its economics are among the best in the world, but position sizing matters more than price here — a Taiwan conflict is the kind of event where you can lose 50-70% of your position in a week, regardless of fundamentals. I'd buy in the ~20x earnings range, trim above 28x. Triggers that would change my view: (a) major escalation around Taiwan (any kinetic action, Chinese naval exercises inside Taiwan's EEZ, full blockade) — reduce immediately; (b) Intel 18A yields proving genuinely competitive with TSMC N3 — revisit the moat assumption; (c) hyperscaler capex guidance turning meaningfully negative — AI cycle inflection; (d) Arizona fab margins stabilizing at parity with Taiwan fabs — strong signal for re-rating. This is a 'conviction at a small size' investment, not a large core position.",
      strongReasoningIncludes: [
        'Commits to a specific action, including position sizing consideration',
        'Names specific geopolitical or competitive triggers',
        'The triggers are observable from news, earnings, or competitor data',
      ],
    },
  },
};
