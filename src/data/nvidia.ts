import type { Company } from './types';

export const nvidia: Company = {
  id: 'nvidia',
  name: 'NVIDIA',
  ticker: 'NVDA',
  logo: '🟢',
  sector: 'Technology & AI',
  sectorId: 'technology',
  investmentType: 'High Expectations Growth',
  tagline: 'The dominant supplier of AI infrastructure and accelerated computing',
  color: '#76b900',
  lastUpdated: 'March 2026',

  whatMattersNow: {
    title: 'What Matters Right Now',
    drivers: [
      {
        label: 'AI infrastructure spending durability',
        description:
          'Hyperscalers have committed over $300B in combined 2026 capex, mostly for AI. Whether this spending accelerates, plateaus, or pulls back is the single most important variable for NVIDIA\'s revenue trajectory over the next 12 months.',
        category: 'industry',
      },
      {
        label: 'Blackwell architecture ramp',
        description:
          'The Blackwell GPU generation is in full production ramp. Execution on yields, supply chain logistics, and meeting customer delivery timelines will determine whether NVIDIA can hit or exceed its $78B Q1 FY2027 revenue guidance.',
        category: 'company-specific',
      },
      {
        label: 'Export controls and China restrictions',
        description:
          'U.S. export restrictions have already cost NVIDIA a $4.5B inventory charge on H20 chips. Further tightening could shrink the addressable market, while any easing would be a positive catalyst. China policy is unpredictable and binary.',
        category: 'geopolitical',
      },
      {
        label: 'Customer concentration and custom silicon',
        description:
          'Google TPUs, Amazon Trainium, and Microsoft\'s Maia chips represent a strategic push by NVIDIA\'s largest customers to reduce dependence. The pace at which custom silicon captures inference workloads will shape NVIDIA\'s long-term market share.',
        category: 'industry',
      },
    ],
  },

  whatChanged: {
    summary:
      'Over the past 6 months, NVIDIA\'s narrative has shifted from "can they sustain this growth?" to "how long does the cycle last?" Revenue growth remains extraordinary, but the conversation has matured.',
    changes: [
      {
        label: 'Growth rate: still accelerating',
        direction: 'positive',
        description:
          'FY2026 revenue grew 65% to $215.9B, and Q1 FY2027 guidance of $78B implies continued momentum. The growth rate has not decelerated meaningfully despite the enormous base.',
      },
      {
        label: 'Valuation: compressing on earnings growth',
        direction: 'positive',
        description:
          'The P/S ratio has fallen from 27x to ~19.6x as earnings have grown into the valuation. The stock is less "expensive" relative to fundamentals than it was a year ago, even as the price has risen.',
      },
      {
        label: 'Competition: intensifying but not yet material',
        direction: 'mixed',
        description:
          'AMD\'s data center GPU revenue is growing, and custom silicon programs are advancing. However, NVIDIA\'s market share in AI training remains above 80%. The threat is real but the timeline for meaningful share loss is uncertain.',
      },
      {
        label: 'Regulatory risk: escalating',
        direction: 'negative',
        description:
          'The H20 inventory charge and evolving export policy have introduced a new source of earnings volatility. Investors must now factor in regulatory risk as a recurring variable, not a one-time event.',
      },
    ],
  },

  business: {
    description:
      'NVIDIA designs graphics processing units (GPUs) that have become the standard hardware for training and deploying artificial intelligence models. Originally built for rendering video game graphics, GPUs excel at the massive parallel computations that AI workloads require. Today, NVIDIA is the leading supplier of AI infrastructure worldwide. When companies like OpenAI, Google, or Meta need to train their next-generation models, they rely overwhelmingly on NVIDIA hardware to do so.',
    howItMakesMoneyTitle: 'How NVIDIA Makes Money',
    revenueStreams: [
      {
        name: 'Data Center (AI & Cloud)',
        percentage: 88,
        description:
          'The primary growth driver, up from 83% a year ago. Hyperscalers (AWS, Azure, GCP) and enterprises purchase GPU clusters for AI training and inference workloads. This segment generated the vast majority of the revenue increase in FY2026.',
      },
      {
        name: 'Gaming',
        percentage: 6,
        description:
          'The original business line. GeForce GPUs for PC gaming remain profitable but represent a shrinking share of total revenue as data center demand accelerates.',
      },
      {
        name: 'Auto & Robotics',
        percentage: 4,
        description:
          'Chips and platforms for autonomous vehicles, industrial robotics, and edge AI. Still early-stage but growing steadily as adoption increases.',
      },
      {
        name: 'Professional Visualization',
        percentage: 2,
        description:
          'Workstation GPUs for designers, architects, engineers, and content creators using GPU-accelerated applications.',
      },
    ],
    competitiveAdvantage:
      "NVIDIA's competitive moat extends well beyond hardware. The CUDA software platform, built over nearly two decades, has become the de facto standard for GPU-accelerated computing. Developers, researchers, and enterprises have invested heavily in CUDA-based toolchains, creating substantial switching costs. While competitors like AMD offer capable hardware, replicating the depth and breadth of NVIDIA's software ecosystem remains a multi-year challenge. This combination of leading hardware performance and deep software entrenchment sustains NVIDIA's dominant market position.",
  },

  financials: {
    metrics: [
      {
        label: 'Revenue (FY2026)',
        value: '$215.9B',
        explanation:
          'Up 65% from $130.5B in FY2025 (fiscal year ended January 2026). This marks another year of extraordinary growth driven by sustained AI infrastructure demand across hyperscale and enterprise customers.',
        sentiment: 'positive',
      },
      {
        label: 'Gross Margin',
        value: '71.1%',
        explanation:
          'Slightly lower than last year due to a $4.5B inventory charge related to the H20 chip in Q1 FY2026. Excluding that charge, margins remain well above industry norms, reflecting strong pricing power. Q1 FY2027 guidance targets 75% gross margin.',
        sentiment: 'positive',
      },
      {
        label: 'Operating Income',
        value: '$130.4B',
        explanation:
          'Operating margin of approximately 60%. NVIDIA converts revenue to operating profit at rates typically associated with software businesses, underscoring its competitive position and pricing leverage.',
        sentiment: 'positive',
      },
      {
        label: 'EPS (FY2026)',
        value: '$4.90',
        explanation:
          'Earnings per share grew significantly year over year, supported by revenue growth and operational efficiency. Q4 FY2026 alone contributed $68.1B in revenue, up 73% year over year.',
        sentiment: 'positive',
      },
      {
        label: 'Q1 FY2027 Guidance',
        value: '$78B revenue',
        explanation:
          'Management guided Q1 FY2027 revenue to $78B with a 75% gross margin target. Notably, guidance does not assume any China data center compute revenue, reflecting ongoing export restriction uncertainty.',
        sentiment: 'positive',
      },
      {
        label: 'R&D Investment',
        value: '~$16B',
        explanation:
          'Continued heavy investment in next-generation architectures ensures NVIDIA stays ahead of the competitive curve. R&D spending as a percentage of revenue has normalized as the top line has grown rapidly.',
        sentiment: 'neutral',
      },
    ],
  },

  valuation: {
    metrics: [
      {
        label: 'P/E Ratio',
        value: '~35x',
        industryAvg: '25x',
        explanation:
          'At roughly 35 times earnings, NVIDIA trades at a premium to the semiconductor industry average. However, given 65% revenue growth in the most recent fiscal year, the multiple reflects continued high expectations rather than speculative excess.',
      },
      {
        label: 'EV/EBITDA',
        value: '~30x',
        industryAvg: '18x',
        explanation:
          'Above the industry average, indicating the market expects NVIDIA to sustain elevated earnings growth. A deceleration in AI infrastructure spending would put pressure on this multiple.',
      },
      {
        label: 'Price/Sales',
        value: '~19.6x',
        industryAvg: '5x',
        explanation:
          'A significant premium to peers, though it has compressed meaningfully from the 27x level a year ago as revenue growth has caught up with the stock price. This ratio continues to decline if revenue growth persists.',
      },
      {
        label: 'PEG Ratio',
        value: '~0.5',
        industryAvg: '1.5',
        explanation:
          'A PEG ratio well below 1.0 suggests the stock may be attractively valued relative to its growth rate. This metric favors NVIDIA as long as the current growth trajectory holds, but it is sensitive to forward growth assumptions.',
      },
    ],
    summary:
      'NVIDIA trades at a premium on most absolute valuation metrics, but the multiples look more reasonable when adjusted for growth. The P/S ratio has compressed substantially over the past year as earnings scaled. The central investment question remains whether AI infrastructure spending is in early or mid-cycle, as the answer determines whether current valuations are sustainable.',
  },

  bullCase: {
    title: 'The Case for NVIDIA',
    points: [
      'AI infrastructure spending remains in its early phases. Enterprise adoption is accelerating, and training compute requirements continue to grow with model scale and complexity.',
      'The CUDA ecosystem creates durable switching costs that competitors will need years to replicate, even as alternative hardware improves.',
      'The Blackwell architecture is ramping with strong demand, and the Q1 FY2027 guidance of $78B signals continued momentum.',
      'Emerging markets such as sovereign AI programs, robotics, and autonomous vehicles represent substantial incremental revenue opportunities.',
      'NVIDIA is increasingly selling complete systems and networking infrastructure, expanding its addressable market and supporting margin stability.',
    ],
  },

  bearCase: {
    title: 'The Case Against NVIDIA',
    points: [
      'Major customers are actively investing in alternatives. Google has TPUs, Amazon has Trainium, and AMD continues to gain data center GPU share. Diversification away from NVIDIA is a strategic priority for hyperscalers.',
      'AI spending may enter a digestion phase where companies pause to deploy and optimize existing infrastructure before placing new orders.',
      'At a $4.2T market cap, NVIDIA must sustain extraordinary growth rates to justify its valuation. Any meaningful deceleration would weigh heavily on the stock.',
      'Export restrictions have already resulted in a $4.5B H20 inventory charge, and further regulatory actions could limit the addressable market.',
      'Historically, hardware businesses face eventual margin compression as competition matures. The timing is uncertain, but the risk is persistent.',
    ],
  },

  marketExpectations: {
    impliedGrowth: '~35-40% annual revenue growth for the next 2-3 years',
    analystConsensus: 'Strong Buy (avg. target ~$185)',
    pricedIn: [
      'Continued dominance in AI training and inference chips through 2027',
      'Successful Blackwell production ramp with gross margins above 70%',
      'Sustained hyperscaler capital expenditure growth of 30%+',
    ],
    notPricedIn: [
      'A meaningful slowdown or pause in AI infrastructure spending',
      'Custom silicon or AMD capturing significant market share',
      'Additional export controls affecting revenue beyond current restrictions',
      'A new revenue stream (robotics, automotive) scaling faster than consensus expects',
    ],
  },

  technicalContext: {
    rsi: 62,
    rsiInterpretation:
      'RSI of 62 is modestly above neutral, indicating mild bullish momentum. The stock has recovered from a pullback earlier in the year and is trending upward without reaching overbought levels.',
    trendDescription:
      'NVIDIA has been in a long-term uptrend since early 2023, with a notable correction in mid-2025 followed by a strong recovery. The stock has gained roughly 60% from its August 2025 lows, reflecting renewed confidence in the AI spending cycle.',
    volatilityNote:
      'NVIDIA typically moves 3-6% on earnings releases and significant AI-related news. This is elevated volatility for a company of its market cap. Investors should expect meaningful short-term price swings around key events.',
    priceHistory: [
      { month: 'Apr 25', price: 108 },
      { month: 'May 25', price: 130 },
      { month: 'Jun 25', price: 142 },
      { month: 'Jul 25', price: 128 },
      { month: 'Aug 25', price: 118 },
      { month: 'Sep 25', price: 121 },
      { month: 'Oct 25', price: 140 },
      { month: 'Nov 25', price: 148 },
      { month: 'Dec 25', price: 139 },
      { month: 'Jan 26', price: 132 },
      { month: 'Feb 26', price: 152 },
      { month: 'Mar 26', price: 174 },
    ],
  },

  thinkFirstQuestions: {
    businessRisk: 'NVIDIA dominates AI infrastructure today. What do you think is the biggest threat to that dominance over the next 3 years?',
    valuationView: 'NVIDIA trades at ~35x earnings with 65% revenue growth. Would you pay this multiple? What growth rate would you need to see to justify it?',
    narrativeShift: 'A year ago, the question was "can NVIDIA sustain this growth?" Now it\'s "how long does the cycle last?" What changed, and does it matter for the investment?',
  },

  scenarioDefaults: {
    currentRevenue: 216,
    currentMargin: 60,
    currentMultiple: 35,
    currentMarketCap: 4200,
  },

  valuationImplied: {
    currentPE: '~35x',
    implications: [
      'AI infrastructure spending continues growing 30%+ annually for at least 2-3 more years',
      'NVIDIA maintains 80%+ market share in AI training chips despite custom silicon efforts by Google, Amazon, and Microsoft',
      'Gross margins stay above 70% as the Blackwell architecture ramps without meaningful pricing pressure from AMD or others',
      'Export controls do not materially expand beyond current restrictions, preserving the addressable market',
    ],
    summary: 'At 35x earnings, you are paying for a company that must sustain extraordinary growth in an industry where the spending cycle length is genuinely uncertain. The valuation is reasonable if AI is a generational platform shift, but expensive if spending normalizes within 2 years.',
  },

  chartNarrative: [
    { month: 'Apr 25', event: 'Post-earnings pullback as market digested China export restriction impact' },
    { month: 'May 25', event: 'Strong rally on Q1 earnings beat and raised full-year guidance' },
    { month: 'Jun 25', event: 'Peak optimism as hyperscaler capex commitments exceeded expectations' },
    { month: 'Jul 25', event: 'Rotation out of AI stocks on profit-taking and sector rotation' },
    { month: 'Aug 25', event: 'Correction deepens on broader market selloff and China concerns' },
    { month: 'Oct 25', event: 'Recovery begins as Blackwell production ramp confirmed on schedule' },
    { month: 'Feb 26', event: 'New highs on blowout Q4 earnings: $68.1B revenue, $78B Q1 guidance' },
    { month: 'Mar 26', event: 'Continued momentum as market prices in sustained AI spending cycle' },
  ],

  decisionResponses: {
    bullish: {
      whatNeedsToHappen: [
        'AI infrastructure spending needs to continue accelerating. Monitor hyperscaler capital expenditure disclosures from Microsoft, Google, Amazon, and Meta each quarter.',
        'NVIDIA needs to execute the Blackwell ramp without significant yield or supply chain issues.',
        'Gross margins need to hold above 70%, demonstrating that pricing power remains intact despite increasing competition.',
        'Emerging use cases such as inference at scale, robotics, and sovereign AI need to begin contributing meaningfully to revenue.',
      ],
      biggestRisk:
        'A temporary pause in AI infrastructure orders as customers absorb and deploy existing capacity. Even a one- or two-quarter slowdown could trigger a substantial correction at current multiples.',
      keyMetricToWatch:
        'Data Center revenue growth rate. As long as this segment grows above 40% year over year, the bull case remains well-supported. A decline below 25% would signal a shift in the growth trajectory.',
    },
    bearish: {
      whatNeedsToHappen: [
        'Custom silicon programs (Google TPU, Amazon Trainium) need to demonstrate they can handle a meaningful share of AI workloads at competitive cost.',
        'AI capital expenditure needs to plateau or decline as companies prioritize deployment over new builds.',
        'AMD or other competitors need to close the performance gap and offer a viable alternative to the CUDA ecosystem.',
        'Gross margins need to compress below 65%, signaling erosion of pricing power.',
      ],
      biggestRisk:
        'The bear case breaks down if AI adoption proves even larger than current expectations. If this is a generational platform shift comparable to the internet or mobile, attempting to time a peak in NVIDIA demand could mean forgoing years of upside.',
      keyMetricToWatch:
        "Market share data for data center GPUs. Track AMD's data center revenue and deployment numbers for Google TPU and Amazon Trainium. If NVIDIA's share drops below 75%, the bear thesis gains credibility.",
    },
    neutral: {
      whatNeedsToHappen: [
        'Mixed signals persist: strong demand paired with rising competition, solid earnings alongside decelerating growth rates.',
        'The stock consolidates as the market awaits clarity on whether current AI spending levels are sustainable at scale.',
        'Valuation multiples gradually compress as earnings growth catches up to the stock price.',
      ],
      biggestRisk:
        'NVIDIA tends to make large directional moves rather than trading sideways for extended periods. A neutral stance may result in missing a significant breakout or failing to protect against a sharp decline. Define clear thresholds for when you would shift conviction in either direction.',
      keyMetricToWatch:
        'The relationship between revenue growth and stock price appreciation. If earnings grow into the valuation (P/E compresses while earnings rise), a neutral stance is well-supported. If the gap widens in either direction, reassess.',
    },
  },
};
