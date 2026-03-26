import type { Company, FlowData } from './types';

const appleFlowData: FlowData = {
  hook: {
    headline: 'Apple is the most valuable company on earth.',
    subheadline: 'The question is not whether it\'s a great business. It\'s whether $3.6 trillion is the right price.',
    criticalFacts: [
      {
        label: 'Market Cap',
        value: '$3.6T',
        context: 'Larger than the entire German stock market',
      },
      {
        label: 'P/E Ratio',
        value: '31x',
        context: '42% premium to the S&P 500 average',
      },
      {
        label: 'Services Revenue',
        value: '$96B/yr',
        context: 'Growing 14%, now 24% of revenue at 70%+ margins',
      },
      {
        label: 'Revenue Growth',
        value: '~4%',
        context: 'Modest top-line growth for a company priced like a compounder',
      },
    ],
    initialPrompt: 'In one sentence, what is the single biggest reason for your view?',
  },

  modules: [
    {
      id: 'business-quality',
      title: 'Business Quality',
      question: 'What makes Apple genuinely hard to compete with? Name the single strongest element of their moat.',
      context: 'Great businesses can still be bad investments at the wrong price. But understanding the moat is step one.',
      evidence: [
        { content: '2.5 billion active devices worldwide — the largest consumer ecosystem in tech', source: 'Apple Q1 FY2026' },
        { content: '93%+ iPhone retention rate — users almost never leave', source: 'Consumer Intelligence Research' },
        { content: 'Services margin: 70%+ vs 36% for hardware products', source: 'Apple earnings' },
        { content: 'Average Apple household owns 4+ devices, creating compounding switching costs', source: 'Industry estimates' },
      ],
      frameworkAnswer: 'Apple\'s moat is not any single product — it\'s the ecosystem. Once a user owns an iPhone, Mac, AirPods, and Watch, the cost of switching becomes enormous. This creates pricing power, recurring revenue, and a flywheel that no competitor has replicated. But the moat is defensive, not offensive. Apple\'s growth now depends on extracting more value from existing users, not acquiring new ones at scale.',
      keyInsight: 'The moat is real but mature. Growth now comes from monetization depth, not user acquisition.',
      insightType: 'neutral',
    },
    {
      id: 'what-changed',
      title: 'What Changed',
      question: 'Apple\'s stock is up ~40% in the past year despite modest revenue growth. What changed in the story to justify this move?',
      context: 'Stock prices move on narrative shifts, not just fundamentals. Understanding what changed tells you what the market now believes.',
      evidence: [
        { content: 'Services revenue hit $30B/quarter, growing 14% — redefining Apple as a platform', source: 'Apple Q1 FY2026' },
        { content: 'Apple Intelligence announcement reignited the upgrade cycle narrative', source: 'WWDC 2025' },
        { content: 'Share buybacks: ~$90B in 12 months, shrinking float aggressively', source: 'Apple capital returns' },
        { content: 'P/E expanded from ~23x to 31x in two years — a re-rating, not an earnings move', source: 'Market data' },
      ],
      frameworkAnswer: 'The market re-rated Apple from a "hardware company" to a "services + ecosystem platform." This narrative shift — not earnings growth — drove the stock. Services momentum, AI optionality, and massive buybacks created a story of durable compounding. The risk? Multiple expansion without proportional earnings growth means the stock is now priced for a future that must actually materialize.',
      keyInsight: 'The stock moved on narrative, not earnings. That makes it vulnerable if the narrative shifts back.',
      insightType: 'negative',
    },
    {
      id: 'what-matters-now',
      title: 'What Matters Now',
      question: 'If you could only track one metric for Apple over the next 12 months, what would it be and why?',
      context: 'Knowing what to watch is more valuable than knowing everything. The best investors are ruthlessly selective about what they track.',
      evidence: [
        { content: 'Services growth: 16% → 14% → ? — the trend is decelerating slightly', source: 'Apple quarterly filings' },
        { content: 'iPhone replacement cycle: averaging 4.2 years, the longest ever', source: 'Industry data' },
        { content: 'China revenue: ~17% of total, under pressure from Huawei resurgence', source: 'Apple segment data' },
        { content: 'Apple Intelligence adoption: too early to measure revenue impact', source: 'Management commentary' },
      ],
      frameworkAnswer: 'Services growth rate is the single most important variable. The entire re-rating from 23x to 31x P/E is built on Apple becoming a platform company. If Services accelerates (AI-driven upgrades, new subscriptions), the premium holds. If it decelerates below 10%, the 31x multiple becomes very difficult to justify and the stock likely re-rates down toward the mid-20s.',
      keyInsight: 'Apple\'s valuation depends almost entirely on whether Services can sustain 12%+ growth. Everything else is secondary.',
      insightType: 'neutral',
    },
    {
      id: 'financial-quality',
      title: 'Financial Quality',
      question: 'Apple generates $110B in free cash flow on ~$460B revenue, but top-line growth is only ~4%. What does this tell you about the business?',
      context: 'Numbers alone don\'t tell you much. What matters is what the numbers reveal about where the business is in its lifecycle.',
      evidence: [
        { content: 'Gross margin: 48.2% — at multi-year highs, up from 38-42% historically', source: 'Apple earnings' },
        { content: 'Free cash flow: $110B/year — one of the highest FCF generators in history', source: 'Apple filings' },
        { content: 'R&D spend: 8% of revenue vs 15-25% for Big Tech peers', source: 'Comparative analysis' },
        { content: 'Net cash position: ~$0 — deliberately leveraged to neutral for buybacks', source: 'Apple balance sheet' },
      ],
      frameworkAnswer: 'Apple\'s financial quality is exceptional — but the pattern reveals a mature business optimizing for profitability rather than growth. Margin expansion, aggressive buybacks, and low R&D intensity (relative to peers) are classic signs of a company extracting maximum value from its current position. This is not a criticism — it\'s an observation about where Apple is in its lifecycle. The question is whether the market is paying a growth multiple for a business exhibiting mature-company behavior.',
      keyInsight: 'Extraordinary cash generation, but growth is being manufactured through margins and buybacks, not top-line expansion.',
      insightType: 'negative',
    },
    {
      id: 'valuation',
      title: 'Valuation',
      question: 'At 31x earnings, what does the market need to believe about Apple\'s future for the current price to be justified?',
      context: 'Valuation is not about whether a number is "high" or "low." It\'s about what assumptions the price embeds — and whether you agree with them.',
      evidence: [
        { content: 'Historical P/E: 22x (5yr avg), 18x (10yr avg) — current multiple is well above both', source: 'Market data' },
        { content: 'Forward P/E: 29x — implies ~8-9% EPS growth priced in for next year', source: 'Consensus estimates' },
        { content: 'If growth slows to 5% and multiple compresses to 25x, that implies ~20% downside', source: 'Scenario analysis' },
        { content: 'S&P 500 average P/E: ~22x — Apple commands a 42% premium', source: 'Market data' },
      ],
      frameworkAnswer: 'At 31x, the market is pricing in: (1) Services growing 12%+ indefinitely, (2) margin expansion continuing, (3) AI creating a meaningful new revenue stream, and (4) no regulatory disruption to the App Store. All four must hold simultaneously. If any single assumption falters, the multiple compresses — and at these levels, even a 4-5x P/E compression on $7.90 EPS means $30-40 per share of downside.',
      keyInsight: 'The price is paying for perfection. There is very little margin for disappointment.',
      insightType: 'negative',
    },
    {
      id: 'priced-in',
      title: 'What\'s Priced In',
      question: 'What does the current price already assume about Apple\'s future — and what could still surprise the market in either direction?',
      context: 'Markets are forward-looking. The stock price already reflects a consensus view. Your edge comes from seeing what the consensus is missing.',
      evidence: [
        { content: 'Analyst consensus: $210 average price target — only ~3% upside from here', source: 'Wall Street consensus' },
        { content: 'Implied EPS growth: 8-10% annually for the next 3-5 years', source: 'Reverse DCF analysis' },
        { content: 'No major regulatory penalty appears to be priced in', source: 'Options market implied vol' },
        { content: 'AI monetization is priced as optionality, not as a concrete revenue driver', source: 'Analyst notes' },
      ],
      frameworkAnswer: 'The price already assumes: steady Services growth, successful AI integration, stable margins, and no China disruption. What\'s NOT priced in: a breakout AI monetization story (upside surprise) or a significant App Store antitrust ruling (downside surprise). The market has priced in "good." The stock moves from here on "great" or "bad" — the base case is already in the share price.',
      keyInsight: 'The consensus is already in the price. You need a differentiated view to justify buying or selling from here.',
      insightType: 'neutral',
    },
    {
      id: 'thesis-breaker',
      title: 'What Breaks the Thesis',
      question: 'What single development would most damage the bull case for Apple?',
      context: 'The best investors spend more time thinking about what could go wrong than what could go right. This is where conviction gets tested.',
      evidence: [
        { content: 'EU Digital Markets Act is actively being enforced against Apple\'s App Store', source: 'EU Commission' },
        { content: 'US DOJ antitrust case targeting Apple\'s ecosystem practices', source: 'Department of Justice' },
        { content: 'Services margin compression of 5% would reduce overall EPS by ~4%', source: 'Sensitivity analysis' },
        { content: 'China revenue already down 8% YoY with Huawei gaining share rapidly', source: 'Apple segment data' },
      ],
      frameworkAnswer: 'Regulation targeting the App Store is the most underappreciated risk. The App Store is the crown jewel of Services — high margin, recurring, and structurally protected by Apple\'s control of iOS. If Apple is forced to meaningfully reduce commissions or allow sideloading globally (not just EU), it directly hits the segment that the entire valuation re-rating depends on. A 5-point margin compression in Services would remove ~$3-4B of annual profit.',
      keyInsight: 'Regulation is the thesis killer because it targets the exact segment the market is paying a premium for.',
      insightType: 'negative',
    },
  ],

  scenarioLab: {
    intro: 'Every investment is a bet on specific variables. Make your assumptions explicit and see what they imply about the stock.',
    currentRevenue: 460,
    currentMarketCap: 3640,
    defaults: { revenueGrowth: 8, operatingMargin: 30, multiple: 31 },
    presets: [
      {
        name: 'bull',
        growth: 12,
        margin: 33,
        multiple: 35,
        narrative: 'Services accelerates via AI-driven upgrades. Apple Intelligence creates a premium subscription tier. App Store maintains pricing power globally. Multiple expands as market reclassifies Apple as a platform.',
      },
      {
        name: 'base',
        growth: 6,
        margin: 30,
        multiple: 28,
        narrative: 'Services grows steadily but decelerates to high-single-digits. iPhone cycles remain tepid. AI is a nice feature, not a growth driver. Buybacks keep EPS growing faster than revenue.',
      },
      {
        name: 'bear',
        growth: 2,
        margin: 27,
        multiple: 22,
        narrative: 'Services growth stalls below 10%. Regulation forces meaningful App Store concessions in the EU and US. Market reclassifies Apple as a mature hardware business with a shrinking premium.',
      },
    ],
    marketImplied: {
      narrative: 'The current price implies ~8% annual EPS growth for the next 5 years, with margins stable or expanding. Essentially, something between the base and bull case is already priced in — the stock needs the bull case to materialize for meaningful upside.',
      growth: '~8% revenue growth',
      margin: '~30-31% operating margin',
      multiple: '28-31x P/E sustained',
    },
  },

  stressTest: {
    questions: [
      {
        id: 'prove-wrong',
        question: 'What specific evidence would prove your thesis wrong?',
        hint: 'Think about a concrete datapoint, not a vague risk.',
      },
      {
        id: 'next-quarter',
        question: 'What do you need to see in Apple\'s next earnings report to feel more confident?',
        hint: 'Be specific — which metric, which segment, which trend.',
      },
      {
        id: 'underweighted-risk',
        question: 'What risk are you most likely underweighting right now?',
        hint: 'The risk you dismiss most quickly is often the one worth examining.',
      },
      {
        id: 'key-variable',
        question: 'Which matters most for the next 2 years: Services growth, iPhone cycles, regulation, China, or AI monetization?',
        hint: 'Pick one and explain why it dominates the others.',
      },
    ],
    keyVariables: [
      {
        variable: 'Services growth rate',
        importance: 'critical',
        description: 'The entire re-rating depends on this. Below 10% and the premium unwinds.',
      },
      {
        variable: 'App Store regulatory outcomes',
        importance: 'critical',
        description: 'Directly threatens the highest-margin revenue stream driving the bull case.',
      },
      {
        variable: 'China market stability',
        importance: 'high',
        description: '17% of revenue with competitive and geopolitical pressure mounting.',
      },
      {
        variable: 'iPhone replacement cycles',
        importance: 'high',
        description: 'If cycles extend beyond 4.5 years, hardware growth stalls further.',
      },
      {
        variable: 'AI monetization timeline',
        importance: 'moderate',
        description: 'Currently priced as optionality. A clear revenue model would be upside surprise.',
      },
    ],
    sophisticatedView: {
      whatToWatch: [
        'Services growth rate excluding the Google search deal — strips out the most vulnerable component',
        'App Store revenue per user in EU post-DMA — early signal of regulatory margin impact',
        'China iPhone install base (not just revenue) — reveals whether users are leaving the ecosystem',
        'Services as a percentage of total gross profit — the real measure of the platform transition',
      ],
      disconfirmingEvidence: [
        'Two consecutive quarters of Services growth below 10%',
        'Meaningful App Store commission reduction in a major market (US, China, or EU)',
        'iPhone installed base decline in any major geography',
        'Gross margin compression driven by Services mix shift slowing',
      ],
      strongestCounter: 'Apple is a mature hardware business being priced like a growth platform. At 31x earnings with ~4% revenue growth, the stock needs everything to go right. The market is paying for the Services narrative, but that business depends on a regulatory moat — App Store pricing power — that is under direct, escalating attack globally. If you strip out the Google search licensing deal (~$20B/yr), Services growth looks less impressive and more fragile than the headline number suggests.',
    },
  },

  debrief: {
    frameworkLabel: 'World-Class Business, Fully Priced',
    synthesis: 'Apple is an exceptional business with a durable moat, extraordinary cash generation, and one of the most loyal customer bases in history. The Services transition is real and meaningful. But at $3.6 trillion, the stock is priced for a future that requires continued Services acceleration, successful AI integration, no regulatory disruption, and stable China operations — simultaneously. The risk-reward from here favors patience over aggression.',
    strongestBull: 'The ecosystem is a flywheel that competitors cannot replicate. Services is still in the early innings of monetizing 2.5 billion devices. Apple Intelligence creates a new upgrade cycle, and the company\'s capital return program provides a persistent EPS tailwind. If Services reaches 30%+ of revenue, the margin profile justifies 35x or higher.',
    strongestBear: 'Apple is a mature hardware company being priced like a growth platform. At 31x with ~4% revenue growth, the stock has significant downside if Services decelerates or regulation compresses App Store margins. The market is paying for perfection, and the asymmetry favors the downside on any negative surprise.',
    marketBelief: 'The market believes Apple will complete its transition from hardware-led to services-led, sustaining premium margins and 8-10% EPS growth. This is the base case — already priced in.',
    whereMarketWrong: 'The market may be underpricing regulatory risk to the App Store (the crown jewel of Services) and overpricing AI\'s near-term impact on Apple\'s revenue. The Google search deal (~$20B/yr) is also an underappreciated concentration risk within Services.',
    bestForInvestor: 'This setup suits investors who want quality and stability with moderate single-digit annual returns. It does NOT suit investors seeking asymmetric upside — the risk/reward at 31x is compressed. If you demand a margin of safety, Apple doesn\'t offer one at current levels.',
    whatChangesConclusion: [
      'Services growth accelerates above 15% for 2+ quarters — more bullish',
      'Major App Store regulatory action in US or China — significantly more bearish',
      'AI drives a measurable iPhone upgrade acceleration visible in data — more bullish',
      'Multiple quarters of Services deceleration below 10% — more bearish',
      'P/E compresses to 25x or below on a market correction — better entry point, more constructive',
    ],
  },
};

export const apple: Company = {
  id: 'apple',
  name: 'Apple',
  ticker: 'AAPL',
  logo: '🍎',
  sector: 'Technology & AI',
  sectorId: 'technology',
  investmentType: 'Mature Tech Compounder',
  tagline: 'The ecosystem that 2.5 billion devices — and Wall Street — cannot quit',
  color: '#a855f7',
  lastUpdated: 'March 2026',

  whatMattersNow: {
    title: 'What Matters Right Now',
    drivers: [
      {
        label: 'Apple Intelligence as an upgrade catalyst',
        description:
          'Apple\'s on-device AI features require newer hardware, potentially triggering a multi-year iPhone refresh cycle. Whether Apple Intelligence meaningfully differentiates from Google and Samsung AI offerings will determine if this catalyst is real or overhyped.',
        category: 'company-specific',
      },
      {
        label: 'Services revenue growth sustainability',
        description:
          'Services hit $30B/quarter at 14% growth, now representing 24% of revenue with 70%+ margins. The trajectory of this segment is the single most important variable for Apple\'s re-rating from hardware company to platform company.',
        category: 'company-specific',
      },
      {
        label: 'App Store regulatory pressure',
        description:
          'The EU Digital Markets Act and potential U.S. legislation could force Apple to reduce App Store commissions or allow sideloading. This directly threatens the highest-margin component of Services — the revenue stream driving the entire valuation narrative.',
        category: 'geopolitical',
      },
      {
        label: 'China market dynamics',
        description:
          'China represents ~17% of revenue and is under competitive pressure from Huawei\'s resurgence. Any escalation in U.S.-China tensions could simultaneously disrupt supply chains and demand, making China both a growth market and a risk factor.',
        category: 'geopolitical',
      },
    ],
  },

  whatChanged: {
    summary:
      'Apple\'s narrative has shifted from "iPhone dependency" to "platform transition." The Services business is redefining how the market values Apple, while Apple Intelligence is creating a potential new upgrade cycle.',
    changes: [
      {
        label: 'Services: becoming the valuation anchor',
        direction: 'positive',
        description:
          'Services revenue reached a record $30B/quarter, growing 14% YoY. The mix shift toward high-margin recurring revenue is the primary reason Apple\'s P/E has expanded from the low-20s to 31x over the past two years.',
      },
      {
        label: 'iPhone 16 cycle: stronger than expected',
        direction: 'positive',
        description:
          'iPhone revenue grew 23% in Q1 FY2026, driven by Apple Intelligence features and pent-up upgrade demand. This eased concerns that the smartphone market was saturated.',
      },
      {
        label: 'Gross margins: at multi-year highs',
        direction: 'positive',
        description:
          'Gross margin of 48.2% is well above Apple\'s historical 38-42% range, driven by Services mix and Apple Silicon efficiencies. This margin expansion has room to continue if Services keeps growing as a share of total revenue.',
      },
      {
        label: 'Regulatory overhang: growing',
        direction: 'negative',
        description:
          'The EU is actively enforcing the Digital Markets Act against Apple, and U.S. antitrust scrutiny is intensifying. The risk of forced commission reductions on the App Store has increased materially over the past year.',
      },
    ],
  },

  business: {
    description:
      "Apple designs, manufactures, and sells consumer electronics, software, and services. Its product lineup — iPhone, Mac, iPad, Apple Watch, and AirPods — is unified by a tightly integrated software ecosystem (iOS, macOS, watchOS) that creates deep user loyalty and significant switching costs. With 2.5 billion active devices worldwide, Apple has built one of the largest and most engaged installed bases in technology. Increasingly, the company's growth story is shifting from hardware units to monetizing that installed base through high-margin services such as the App Store, Apple Music, iCloud, Apple TV+, and Apple Pay.",
    howItMakesMoneyTitle: 'How Apple Makes Money',
    revenueStreams: [
      {
        name: 'iPhone',
        percentage: 52,
        description:
          'The flagship product and primary revenue driver. iPhone generated 23% year-over-year growth in Q1 FY2026, fueled by the iPhone 16 cycle and Apple Intelligence features driving upgrades across the installed base.',
      },
      {
        name: 'Services',
        percentage: 24,
        description:
          'App Store, Apple Music, iCloud, AppleCare, Apple TV+, Apple Pay, and licensing (including the Google search deal). Services hit a record $30 billion per quarter in Q1 FY2026, growing 14% year-over-year. This segment carries gross margins above 70%, making it the most profitable part of the business.',
      },
      {
        name: 'Mac',
        percentage: 6,
        description:
          'MacBook, iMac, and Mac Pro lines. The transition to Apple Silicon (M-series chips) has strengthened margins and performance differentiation versus Windows PCs.',
      },
      {
        name: 'iPad',
        percentage: 6,
        description:
          'iPad and iPad Pro. A mature product line with periodic refresh cycles. The M-series chip integration has positioned iPad Pro as a laptop alternative for certain workflows.',
      },
      {
        name: 'Wearables & Accessories',
        percentage: 6,
        description:
          'Apple Watch, AirPods, and accessories. These products deepen ecosystem engagement and provide recurring upgrade cycles, though growth has moderated.',
      },
      {
        name: 'Other Products & Services',
        percentage: 6,
        description:
          'Apple Vision Pro, licensing revenue, and other emerging categories. Vision Pro remains a niche product, but represents Apple\'s long-term bet on spatial computing.',
      },
    ],
    competitiveAdvantage:
      "Apple's moat is its ecosystem. Hardware, software, and services are designed to work seamlessly together, creating switching costs that compound with every additional Apple device a customer owns. An iPhone user with AirPods, an Apple Watch, iCloud storage, and App Store subscriptions faces significant friction in moving to Android. This lock-in effect drives a 93%+ retention rate and enables premium pricing. Additionally, Apple's vertical integration — designing its own chips (M-series, A-series), operating systems, and increasingly its own cellular modems — gives it control over the full technology stack, resulting in performance and efficiency advantages that competitors relying on third-party components struggle to match.",
  },

  financials: {
    metrics: [
      {
        label: 'Revenue (TTM)',
        value: '~$460B',
        explanation:
          'Apple generated approximately $460 billion in trailing twelve-month revenue, with FY2025 full-year revenue of $416 billion and Q1 FY2026 setting a record at $143.8 billion. The acceleration reflects strong iPhone 16 demand and continued Services momentum.',
        sentiment: 'positive',
      },
      {
        label: 'Gross Margin',
        value: '48.2%',
        explanation:
          'Gross margin of 48.2% is well above Apple\'s historical average of 38-42%. The improvement is driven by the growing mix of high-margin Services revenue (70%+ margins) and the cost efficiencies of Apple Silicon. For a hardware-centric company, this margin profile is exceptional.',
        sentiment: 'positive',
      },
      {
        label: 'Net Income (Q1 FY26)',
        value: '$42.1B',
        explanation:
          'A record quarterly net income figure, demonstrating Apple\'s ability to convert revenue growth into bottom-line profit. The combination of operating leverage, Services mix shift, and disciplined cost management is expanding profitability.',
        sentiment: 'positive',
      },
      {
        label: 'Services Revenue',
        value: '$30B/quarter',
        explanation:
          'Services revenue reached a record $30 billion in Q1 FY2026, growing 14% year-over-year. This segment now represents nearly a quarter of total revenue and carries margins roughly twice those of hardware. The Services trajectory is central to Apple\'s valuation re-rating from a hardware company to a platform company.',
        sentiment: 'positive',
      },
      {
        label: 'EPS (TTM)',
        value: '$7.92',
        explanation:
          'Earnings per share of $7.92 on a trailing twelve-month basis. Aggressive share buybacks — Apple has repurchased over $600 billion in stock over the past decade — continue to reduce the share count and amplify per-share earnings growth beyond what revenue growth alone would suggest.',
        sentiment: 'positive',
      },
      {
        label: 'Active Device Installed Base',
        value: '2.5B devices',
        explanation:
          'The installed base of 2.5 billion active Apple devices is the foundation for everything. Each device is a potential Services customer. As this base grows and engagement deepens, the recurring revenue opportunity expands correspondingly. This metric matters more than any single quarter\'s iPhone shipments.',
        sentiment: 'positive',
      },
    ],
  },

  valuation: {
    metrics: [
      {
        label: 'P/E Ratio',
        value: '31.45x',
        industryAvg: '25x',
        explanation:
          'At 31.45 times earnings, Apple trades at a premium to the broader tech sector. This premium reflects the market\'s recognition of Apple as a high-quality compounder with predictable cash flows, rather than a high-growth speculative name. The question is whether Services growth can sustain this multiple.',
      },
      {
        label: 'EV/EBITDA',
        value: '23.46x',
        industryAvg: '18x',
        explanation:
          'The enterprise-value-to-EBITDA multiple of 23.46x is elevated relative to hardware peers but more in line with software and platform companies. This reflects the market\'s view that Apple is transitioning toward a higher-margin, more recurring-revenue business model.',
      },
      {
        label: 'Forward P/E',
        value: '28.88x',
        industryAvg: '22x',
        explanation:
          'The forward P/E of 28.88x implies analysts expect roughly 8-9% earnings growth over the next twelve months. This is a reasonable expectation given the Services ramp and iPhone cycle, though it leaves limited room for disappointment.',
      },
      {
        label: 'Market Cap',
        value: '$3.64T',
        industryAvg: 'N/A',
        explanation:
          'At $3.64 trillion, Apple is one of the most valuable companies in the world. To grow the stock meaningfully from here requires either multiple expansion (unlikely at current levels) or sustained earnings growth. At this scale, even strong results can feel priced in.',
      },
    ],
    summary:
      'Apple\'s valuation reflects a business in transition — from a cyclical hardware company to a platform with recurring, high-margin revenue streams. The premium multiple is justified if Services continues to grow at mid-teens rates and the installed base keeps expanding. However, at $3.64 trillion, the margin of safety is thin. Investors are paying for execution certainty, and any stumble in iPhone demand or Services deceleration would pressure the multiple.',
  },

  bullCase: {
    title: 'The Case for Apple',
    points: [
      'The Services business is still in the early stages of monetizing a 2.5 billion-device installed base. At $120 billion in annual Services revenue, Apple is generating only about $48 per active device per year — there is substantial room to increase wallet share through new offerings and price increases.',
      'Apple Intelligence (on-device AI features) is creating a meaningful upgrade cycle, as users with older devices need newer hardware to access AI capabilities. This could drive a multi-year iPhone refresh wave similar to the 5G cycle.',
      'Gross margin expansion has room to continue as Services grows from 24% to a potentially larger share of revenue. Each percentage point of mix shift toward Services adds meaningfully to overall profitability.',
      'Apple\'s capital return program is unmatched — the company has returned over $700 billion to shareholders through buybacks and dividends. The shrinking share count provides a persistent tailwind to per-share earnings growth.',
      'The health and financial services ecosystems (Apple Watch health monitoring, Apple Pay, Apple Card, Savings) represent early-stage platforms that could become significant revenue contributors over the next five years.',
    ],
  },

  bearCase: {
    title: 'The Case Against Apple',
    points: [
      'iPhone revenue concentration remains a risk — at 52% of sales, any disruption to the smartphone market (saturation, economic downturn, competitive pressure from Samsung or Chinese manufacturers) directly impacts the top line.',
      'Regulatory pressure on the App Store is intensifying globally. The EU Digital Markets Act, potential US legislation, and court rulings could force Apple to reduce App Store commissions or allow sideloading, threatening the highest-margin component of Services.',
      'Apple Intelligence has been slow to roll out and has not yet demonstrated a clear differentiation advantage over Google\'s or Samsung\'s AI offerings. If AI features become commoditized, the upgrade catalyst weakens.',
      'China remains both a critical market (~17% of revenue) and a geopolitical risk. Domestic competitors like Huawei have regained share, and any escalation in US-China tensions could disrupt supply chains and demand simultaneously.',
      'At a $3.64 trillion market cap with a 31x P/E, Apple needs to deliver flawless execution just to meet expectations. The stock is priced for perfection, which means the risk-reward is asymmetric to the downside on any negative surprise.',
    ],
  },

  marketExpectations: {
    impliedGrowth: '~9-11% annual earnings growth for the next 3 years',
    analystConsensus: 'Buy (average price target ~$297)',
    pricedIn: [
      'Continued mid-teens Services growth through FY2027',
      'Stable iPhone market share with periodic upgrade cycle tailwinds',
      'Ongoing margin expansion from Services mix shift',
      'Aggressive share buyback program continuing at $90B+ annually',
    ],
    notPricedIn: [
      'A meaningful App Store regulatory ruling that forces commission reductions below 15%',
      'Apple Intelligence becoming a genuine platform differentiator that accelerates the upgrade cycle beyond current estimates',
      'A significant deterioration in China demand due to geopolitical escalation or competitive losses to Huawei',
      'A new product category (AR glasses, home robotics) achieving iPhone-like adoption curves',
    ],
  },

  technicalContext: {
    rsi: 52,
    rsiInterpretation:
      'An RSI of 52 is essentially neutral, indicating the stock is neither overbought nor oversold. After pulling back from December highs, Apple has found a support level and is consolidating, which suggests the market is awaiting a catalyst for the next directional move.',
    trendDescription:
      'Apple staged a strong rally from April through December 2025, rising from $175 to $255 — a 46% gain. The stock has since pulled back approximately 3% from those highs, trading in a range between $238 and $255. This consolidation after a significant run-up is a typical pattern that often resolves in the direction of the prior trend.',
    volatilityNote:
      'Apple tends to be less volatile than most mega-cap tech peers, given its diversified revenue base and massive buyback program that provides a floor under the stock. Expect 2-4% moves around earnings reports and product launches, with day-to-day movement typically in the 1-2% range.',
    priceHistory: [
      { month: 'Apr 25', price: 175 },
      { month: 'May 25', price: 195 },
      { month: 'Jun 25', price: 210 },
      { month: 'Jul 25', price: 222 },
      { month: 'Aug 25', price: 215 },
      { month: 'Sep 25', price: 228 },
      { month: 'Oct 25', price: 235 },
      { month: 'Nov 25', price: 242 },
      { month: 'Dec 25', price: 255 },
      { month: 'Jan 26', price: 243 },
      { month: 'Feb 26', price: 238 },
      { month: 'Mar 26', price: 248 },
    ],
  },

  thinkFirstQuestions: {
    businessRisk: 'Apple has 2.5 billion active devices and a 93%+ retention rate. With that kind of lock-in, what do you think is the biggest risk to the business over the next 5 years?',
    valuationView: 'Apple trades at 31x earnings. Services is growing at 14% with 70%+ margins, but iPhone still represents 52% of revenue. Is this a hardware company or a platform company? Does it matter for the valuation?',
    narrativeShift: 'Apple\'s story has shifted from "iPhone dependency" to "platform transition" as Services grows. What specifically changed in the business that enabled this re-rating?',
  },

  scenarioDefaults: {
    currentRevenue: 460,
    currentMargin: 30,
    currentMultiple: 31,
    currentMarketCap: 3640,
  },

  valuationImplied: {
    currentPE: '31x',
    implications: [
      'Services revenue continues growing at 12-15% annually, reaching 30%+ of total revenue within 2-3 years',
      'Apple Intelligence drives a meaningful iPhone upgrade cycle, sustaining hardware revenue growth in the high single digits',
      'App Store regulatory risks (EU DMA, potential U.S. legislation) do not materially compress Services margins below 65%',
      'The installed base continues expanding, particularly in emerging markets like India, providing a growing foundation for Services monetization',
    ],
    summary: 'At 31x earnings, you are paying for a successful platform transition — from cyclical hardware company to recurring-revenue ecosystem. If Services reaches 30% of revenue, the blended margin profile justifies 35x+. If regulatory action compresses App Store margins, the premium unwinds quickly.',
  },

  chartNarrative: [
    { month: 'Apr 25', event: 'Recovery from tariff-driven selloff as supply chain fears eased' },
    { month: 'May 25', event: 'Strong rally on iPhone 16 demand data exceeding expectations' },
    { month: 'Jul 25', event: 'Apple Intelligence announcement at WWDC drove upgrade cycle optimism' },
    { month: 'Aug 25', event: 'Brief pullback on China competitive concerns as Huawei gained share' },
    { month: 'Dec 25', event: 'New highs on record Q1 FY2026 revenue of $143.8B' },
    { month: 'Jan 26', event: 'Pullback as EU DMA enforcement intensified against App Store' },
    { month: 'Mar 26', event: 'Recovery as Services momentum and AI features sustained upgrade demand' },
  ],

  flowData: appleFlowData,

  decisionResponses: {
    bullish: {
      whatNeedsToHappen: [
        'Services revenue needs to maintain 12-15% year-over-year growth, demonstrating that the monetization of the installed base is still accelerating rather than approaching saturation.',
        'Apple Intelligence must drive a measurable uplift in iPhone upgrade rates, visible in Q2 and Q3 FY2026 results as users on older models transition to AI-capable hardware.',
        'Gross margins need to continue expanding toward 50%+ as the Services revenue mix increases, validating the platform company narrative that supports the premium valuation.',
        'The installed base needs to keep growing, particularly in emerging markets like India, to prove that Apple\'s addressable market is still expanding.',
      ],
      biggestRisk:
        'App Store regulation is the most underappreciated threat to the bull case. A forced reduction in the 30% commission rate would directly compress the highest-margin revenue stream and could remove 5-10% from Services gross profit, undermining the entire margin expansion thesis.',
      keyMetricToWatch:
        'Services revenue growth rate. As long as Services grows above 12% annually and approaches 30% of total revenue, the re-rating from hardware company to platform company continues and the premium multiple is justified.',
    },
    bearish: {
      whatNeedsToHappen: [
        'iPhone upgrade cycles need to elongate further, with consumers finding insufficient reason to replace devices every 3-4 years, particularly if Apple Intelligence features are eventually backported to older models.',
        'Regulatory actions in the EU and potentially the US need to force meaningful App Store commission reductions, directly impacting the most profitable segment.',
        'China revenue needs to decline as Huawei and other domestic competitors recapture market share with increasingly capable devices that leverage local AI ecosystems.',
        'AI feature parity across Android and iOS needs to eliminate the potential upgrade catalyst, making Apple Intelligence a non-factor in purchase decisions.',
      ],
      biggestRisk:
        'The bear case fails if Apple successfully launches a new product category — whether AR glasses, a home device, or a health platform — that reignites the growth narrative and opens a new multi-hundred-billion-dollar market. Apple has done this before (iPod, iPhone, Watch), and dismissing the possibility is a recurring mistake bears have made.',
      keyMetricToWatch:
        'iPhone revenue growth rate and China segment performance. If iPhone growth turns negative for two consecutive quarters or China revenue declines more than 10%, the bear case gains significant momentum.',
    },
    neutral: {
      whatNeedsToHappen: [
        'Apple delivers steady but unspectacular results — high single-digit earnings growth, stable margins, and no major product surprises — justifying a hold but not providing a catalyst for re-rating.',
        'The stock trades within a range as the market debates whether the Services growth story merits a higher multiple or whether the hardware maturity story merits a lower one.',
        'Regulatory developments proceed slowly, creating ongoing uncertainty without a definitive resolution that would force a re-pricing.',
      ],
      biggestRisk:
        'Apple tends to reward patience. The stock has historically compounded through periods of pessimism, driven by buybacks and Services growth. A neutral stance risks missing a breakout if a new product cycle or AI monetization strategy exceeds expectations. Conversely, the valuation is full enough that holding through a correction could be painful.',
      keyMetricToWatch:
        'The ratio of Services revenue to total revenue. If this metric moves from 24% toward 30% over the next two years, it validates the platform transition thesis and the stock likely re-rates higher. If it stalls, the premium multiple is harder to defend.',
    },
  },
};
