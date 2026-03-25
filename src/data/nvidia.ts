import type { Company } from './types';

export const nvidia: Company = {
  id: 'nvidia',
  name: 'NVIDIA',
  ticker: 'NVDA',
  logo: '🟢',
  sector: 'Semiconductors / AI Infrastructure',
  tagline: 'The company building the picks and shovels of the AI gold rush',
  color: '#76b900',

  business: {
    description:
      "NVIDIA designs graphics processing units (GPUs) — chips originally built for rendering video game graphics. But GPUs turned out to be perfect for another task: the massive parallel computations required to train and run AI models. Today, NVIDIA is the dominant supplier of AI infrastructure. When companies like OpenAI, Google, or Meta need to train their next model, they're almost certainly buying NVIDIA's chips to do it.",
    howItMakesMoneyTitle: 'How NVIDIA Makes Money',
    revenueStreams: [
      {
        name: 'Data Center (AI & Cloud)',
        percentage: 83,
        description:
          'The main growth engine. This is where the AI demand lives — hyperscalers (AWS, Azure, GCP) and enterprises buying GPU clusters for training and inference.',
      },
      {
        name: 'Gaming',
        percentage: 10,
        description:
          'The original business. GeForce GPUs for PC gamers. Still profitable but no longer the growth story.',
      },
      {
        name: 'Auto & Robotics',
        percentage: 4,
        description:
          'Chips for self-driving cars and industrial robots. Early stage but could be huge long-term.',
      },
      {
        name: 'Professional Visualization',
        percentage: 3,
        description:
          'Workstation GPUs for designers, architects, and content creators.',
      },
    ],
    competitiveAdvantage:
      "NVIDIA's real moat isn't just the hardware — it's CUDA, their proprietary software platform. Developers have spent years building AI tools on CUDA, creating massive switching costs. Competitors like AMD have capable chips, but the ecosystem lock-in keeps NVIDIA dominant. It's like how people stay on iPhone not just for the hardware, but for iMessage, AirDrop, and the whole ecosystem.",
  },

  financials: {
    metrics: [
      {
        label: 'Revenue (TTM)',
        value: '$130.5B',
        explanation:
          "Up from ~$27B two years ago. This isn't normal growth — it's a 4.8x increase driven by insatiable AI chip demand. The question is whether this pace can continue.",
        sentiment: 'positive',
      },
      {
        label: 'Gross Margin',
        value: '73%',
        explanation:
          'Extraordinarily high for a hardware company. For comparison, Intel runs around 40%. This reflects NVIDIA\'s pricing power — when you\'re the only game in town, you can charge premium prices.',
        sentiment: 'positive',
      },
      {
        label: 'Net Income (TTM)',
        value: '$72.9B',
        explanation:
          'Net margin of ~56%. NVIDIA is converting revenue to profit at a rate typically seen in software companies, not hardware makers. This is a sign of extreme competitive advantage.',
        sentiment: 'positive',
      },
      {
        label: 'Free Cash Flow',
        value: '$60.9B',
        explanation:
          "Massive cash generation means NVIDIA can fund R&D, buy back stock, and invest in new markets without taking on debt. They're essentially self-funding their future.",
        sentiment: 'positive',
      },
      {
        label: 'Revenue Growth (YoY)',
        value: '+114%',
        explanation:
          "Still doubling year-over-year at this scale is remarkable. But growth is decelerating — it was +265% a few quarters ago. Investors need to watch if this stabilizes or drops sharply.",
        sentiment: 'positive',
      },
      {
        label: 'R&D Spending',
        value: '$12.9B',
        explanation:
          "About 10% of revenue goes back into R&D. This is how NVIDIA stays ahead — they're already working on next-gen architectures while competitors are trying to catch up to current ones.",
        sentiment: 'neutral',
      },
    ],
  },

  valuation: {
    metrics: [
      {
        label: 'P/E Ratio',
        value: '39x',
        industryAvg: '25x',
        explanation:
          "A P/E of 39 means investors are paying $39 for every $1 of earnings. That's above average, but for a company growing revenue 100%+ YoY, some would argue it's actually reasonable. The danger is if growth slows faster than expected.",
      },
      {
        label: 'EV/EBITDA',
        value: '35x',
        industryAvg: '18x',
        explanation:
          "Nearly double the industry average. This tells you the market believes NVIDIA's earnings power will keep expanding. If AI spending plateaus, this multiple will compress fast.",
      },
      {
        label: 'Price/Sales',
        value: '27x',
        industryAvg: '5x',
        explanation:
          "This is the most eye-catching number. 27x sales is pricing in years of future growth. Even great companies rarely sustain multiples this high. It doesn't mean the stock will crash — but it means expectations are sky-high.",
      },
      {
        label: 'PEG Ratio',
        value: '0.35',
        industryAvg: '1.5',
        explanation:
          "The PEG ratio adjusts P/E for growth rate. Under 1.0 suggests the stock might actually be undervalued relative to its growth. At 0.35, the math says you're getting the growth cheaply — but only if the growth continues.",
      },
    ],
    summary:
      "NVIDIA's valuation is high on an absolute basis but more reasonable when you factor in growth. The key question: are we in the early innings of AI infrastructure spending, or approaching a plateau? Your answer to that question determines whether the stock is cheap or expensive at these levels.",
  },

  bullCase: {
    title: 'The Case for NVIDIA',
    points: [
      'AI spending is still in the early innings — enterprise adoption is just beginning, and training compute needs grow exponentially with model size.',
      'CUDA ecosystem lock-in means competitors need years to build comparable software stacks, even if their hardware catches up.',
      'The Blackwell architecture (next-gen chips) is seeing record pre-orders, suggesting demand isn\'t slowing.',
      'New markets like sovereign AI (countries building their own compute infrastructure) and robotics could add entire new revenue streams.',
      'Margins could stay elevated if NVIDIA continues to sell complete systems (DGX) rather than just chips.',
    ],
  },

  bearCase: {
    title: 'The Case Against NVIDIA',
    points: [
      'Customers are actively trying to reduce dependence on NVIDIA — Google has TPUs, Amazon has Trainium, AMD is gaining share. Diversification is a when, not an if.',
      'AI spending could hit a "digestion phase" where companies pause to actually deploy what they\'ve bought before ordering more.',
      'At $3.2T market cap, NVIDIA needs to keep growing at extraordinary rates just to justify the current price.',
      'Export restrictions to China (a previously large market) limit the addressable market.',
      'History shows that hardware companies eventually see commoditization — the question is when, not if.',
    ],
  },

  marketExpectations: {
    impliedGrowth: '~50% annual revenue growth for the next 3 years',
    analystConsensus: 'Overweight (avg. target ~$165)',
    pricedIn: [
      'Continued dominance in AI training chips through 2026',
      'Successful Blackwell ramp with strong margins',
      'Sustained hyperscaler capex growth of 30%+',
    ],
    notPricedIn: [
      'A meaningful slowdown in AI capex spending',
      'AMD or custom silicon taking significant share',
      'New export controls cutting off additional markets',
      'A major new revenue stream (robotics, automotive) materializing sooner than expected',
    ],
  },

  technicalContext: {
    rsi: 58,
    rsiInterpretation:
      'RSI of 58 is neutral — not overbought or oversold. The stock has pulled back from recent highs and is consolidating, which typically means the market is "digesting" the recent move.',
    trendDescription:
      'The stock has been in a strong uptrend since early 2023 but has been range-bound over the past 3 months. This kind of consolidation after a massive run-up is normal and often precedes the next directional move.',
    volatilityNote:
      'NVIDIA moves 3-5% on earnings days and major AI news. This is higher than typical large-caps. If you own it, expect big swings — that\'s the price of admission for a high-growth story.',
    priceHistory: [
      { month: 'Apr 25', price: 96 },
      { month: 'May 25', price: 118 },
      { month: 'Jun 25', price: 131 },
      { month: 'Jul 25', price: 128 },
      { month: 'Aug 25', price: 122 },
      { month: 'Sep 25', price: 116 },
      { month: 'Oct 25', price: 135 },
      { month: 'Nov 25', price: 141 },
      { month: 'Dec 25', price: 137 },
      { month: 'Jan 26', price: 130 },
      { month: 'Feb 26', price: 124 },
      { month: 'Mar 26', price: 138 },
    ],
  },

  decisionResponses: {
    bullish: {
      whatNeedsToHappen: [
        'AI infrastructure spending needs to continue accelerating — watch hyperscaler capex in quarterly earnings (Microsoft, Google, Amazon, Meta).',
        'NVIDIA needs to successfully ramp Blackwell production without major yield issues.',
        'Gross margins need to hold above 70%, proving that pricing power remains intact even as competition increases.',
        'New use cases (inference at scale, robotics, sovereign AI) need to start contributing meaningfully to revenue.',
      ],
      biggestRisk:
        'An AI spending "air pocket" — a quarter or two where major customers pause orders to deploy existing infrastructure. Even a temporary slowdown could cause a significant correction at these multiples.',
      keyMetricToWatch:
        'Data Center revenue growth rate. As long as this segment grows 40%+ YoY, the bull case remains intact. If it drops below 30%, the narrative shifts.',
    },
    bearish: {
      whatNeedsToHappen: [
        'Custom silicon (Google TPU, Amazon Trainium) needs to prove it can handle a meaningful share of AI workloads at lower cost.',
        'AI capex spending needs to plateau or decline as companies shift focus to deploying rather than building infrastructure.',
        'AMD or Intel needs to close the performance gap and offer a credible CUDA alternative.',
        'Gross margins need to compress as competition increases, signaling loss of pricing power.',
      ],
      biggestRisk:
        "The bear case fails if AI turns out to be even bigger than expected. If we're truly in an iPhone-level platform shift, trying to time a peak in NVIDIA's business could mean missing years of upside.",
      keyMetricToWatch:
        "Competitive share data — watch AMD's data center GPU revenue and Google's TPU deployment numbers. If NVIDIA's share drops below 80%, the bear thesis gains traction.",
    },
    neutral: {
      whatNeedsToHappen: [
        'You need to see mixed signals — strong demand but rising competition, good earnings but decelerating growth rates.',
        'The stock trades sideways as the market waits for clarity on whether AI spending growth can be sustained at scale.',
        'Valuation multiples gradually compress as earnings catch up to the stock price.',
      ],
      biggestRisk:
        "NVIDIA rarely stays still — it tends to make big moves in both directions. A neutral stance means you might miss a breakout or fail to protect against a breakdown. Consider defining what would change your mind in either direction.",
      keyMetricToWatch:
        'The spread between revenue growth and stock price appreciation. If earnings grow into the valuation (P/E falls while earnings rise), a neutral stance is validated.',
    },
  },
};
