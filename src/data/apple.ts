import type { Company } from './types';

export const apple: Company = {
  id: 'apple',
  name: 'Apple',
  ticker: 'AAPL',
  logo: '🍎',
  sector: 'Consumer Electronics / Software & Services',
  tagline: 'The world\'s most valuable company — but can it keep growing?',
  color: '#a2aaad',

  business: {
    description:
      'Apple designs, manufactures, and sells consumer electronics (iPhone, Mac, iPad, Apple Watch, AirPods) and the software ecosystems that run on them (iOS, macOS). But increasingly, Apple is a services company — App Store fees, iCloud subscriptions, Apple Music, Apple TV+, and Apple Pay generate high-margin recurring revenue from its 2.2 billion active devices worldwide.',
    howItMakesMoneyTitle: 'How Apple Makes Money',
    revenueStreams: [
      {
        name: 'iPhone',
        percentage: 52,
        description:
          'Still the core product. Over half of revenue comes from iPhone sales, which also serve as the gateway drug to the broader Apple ecosystem.',
      },
      {
        name: 'Services',
        percentage: 24,
        description:
          'App Store, iCloud, Apple Music, TV+, AppleCare, Apple Pay, licensing (Google pays ~$20B/year to be the default search engine). This is the fastest-growing and highest-margin segment.',
      },
      {
        name: 'Mac',
        percentage: 8,
        description:
          'Laptops and desktops. Apple Silicon (M-series chips) revitalized this business with industry-leading performance and efficiency.',
      },
      {
        name: 'iPad & Wearables',
        percentage: 16,
        description:
          'iPad, Apple Watch, AirPods, and accessories. Wearables have quietly become a Fortune 500-sized business on their own.',
      },
    ],
    competitiveAdvantage:
      "Apple's moat is the ecosystem. Once you own an iPhone, switching to Android means losing iMessage, AirDrop, Apple Watch compatibility, your iCloud photos, and your App Store purchases. This creates enormous switching costs. Add in the brand premium — people willingly pay 30-50% more for Apple products — and you have a business that's remarkably hard to disrupt.",
  },

  financials: {
    metrics: [
      {
        label: 'Revenue (TTM)',
        value: '$391B',
        explanation:
          'Modest growth (~4% YoY) after a flat 2023. Apple isn\'t a hyper-growth story anymore — it\'s a steady cash machine. The question is whether Services can accelerate total growth.',
        sentiment: 'neutral',
      },
      {
        label: 'Gross Margin',
        value: '46.2%',
        explanation:
          'Strong for a hardware company. The mix shift toward Services (which run at ~70% margins) has been steadily lifting this number. Every percentage point higher here adds billions to the bottom line.',
        sentiment: 'positive',
      },
      {
        label: 'Net Income (TTM)',
        value: '$97B',
        explanation:
          'Nearly $100B in annual profit. Only a handful of companies in history have achieved this. Apple converts revenue to profit at a 25% rate, which is excellent for a company selling physical products.',
        sentiment: 'positive',
      },
      {
        label: 'Free Cash Flow',
        value: '$108B',
        explanation:
          'Apple generates more free cash flow than almost any company on Earth. They return most of it to shareholders through buybacks ($90B+/year), which steadily reduces share count and boosts earnings per share.',
        sentiment: 'positive',
      },
      {
        label: 'Revenue Growth (YoY)',
        value: '+4%',
        explanation:
          'Low single-digit growth is the concern. At a ~$3T valuation, investors are paying a premium multiple for a business that\'s growing like a utility. Bulls argue Services will re-accelerate growth.',
        sentiment: 'neutral',
      },
      {
        label: 'Services Revenue',
        value: '$96B',
        explanation:
          'Growing ~13% YoY and approaching $100B annually. This segment alone would be one of the largest software companies in the world. It\'s the key to Apple\'s margin expansion story.',
        sentiment: 'positive',
      },
    ],
  },

  valuation: {
    metrics: [
      {
        label: 'P/E Ratio',
        value: '32x',
        industryAvg: '22x',
        explanation:
          'A P/E of 32 for a company growing 4% is rich by traditional standards. You\'re paying a premium for quality, consistency, and the expectation that Services will drive faster growth. If that doesn\'t materialize, the multiple could contract.',
      },
      {
        label: 'EV/EBITDA',
        value: '26x',
        industryAvg: '15x',
        explanation:
          'Nearly double the hardware industry average. The market is pricing Apple as a hybrid hardware-software company. If Services continues growing faster than Products, this premium is justified.',
      },
      {
        label: 'Price/Sales',
        value: '8.5x',
        industryAvg: '3x',
        explanation:
          'High for a company with hardware revenue, but Apple\'s brand and margin profile justify some premium. Compare to Microsoft at ~13x (pure software) and Samsung at ~1.5x (commodity hardware).',
      },
      {
        label: 'Shareholder Yield',
        value: '3.8%',
        industryAvg: '2.0%',
        explanation:
          'Combining dividends (~0.5%) and buybacks (~3.3%), Apple returns nearly 4% of its market cap to shareholders annually. This is a meaningful floor on returns even if the stock goes nowhere.',
      },
    ],
    summary:
      'Apple is not cheap on any traditional metric, but it rarely is. The premium reflects the quality and durability of the business. The real question is whether 4% revenue growth can support a 32x P/E indefinitely, or whether Services needs to meaningfully accelerate to justify the price.',
  },

  bullCase: {
    title: 'The Case for Apple',
    points: [
      'Services is approaching $100B/year at 70%+ margins and growing 13% YoY. As this segment becomes a larger share of revenue, overall margins and growth rates should improve.',
      'The installed base of 2.2B+ active devices is still growing. Each new device is another customer for high-margin services — it\'s a flywheel that gets stronger over time.',
      'Apple Intelligence (on-device AI) could drive a major iPhone upgrade cycle. If AI features become must-have, hundreds of millions of users with older iPhones will need to upgrade.',
      'Capital return program ($90B+/year in buybacks) acts as a steady tailwind for EPS growth, even if revenue growth is modest.',
      'New categories — Vision Pro (spatial computing), health features (glucose monitoring rumors), automotive — could open entirely new revenue streams.',
    ],
  },

  bearCase: {
    title: 'The Case Against Apple',
    points: [
      'Revenue growth of 4% doesn\'t justify a 32x P/E. The market is pricing in acceleration that may never come. If multiple compresses to 25x, that\'s a ~20% drawdown.',
      'iPhone is 52% of revenue and the smartphone market is mature globally. Upgrade cycles are lengthening as phones get "good enough."',
      'Regulatory risk is real: the EU Digital Markets Act and DOJ antitrust case could force App Store changes that directly hit the highest-margin business.',
      'China exposure (~18% of revenue) creates geopolitical risk. A deterioration in US-China relations could impact both sales and supply chain.',
      'Apple Intelligence has been underwhelming so far. If it fails to differentiate meaningfully from Google and Samsung AI features, the upgrade cycle catalyst disappears.',
    ],
  },

  marketExpectations: {
    impliedGrowth: '~8-10% annual EPS growth for the next 3 years',
    analystConsensus: 'Overweight (avg. target ~$245)',
    pricedIn: [
      'Steady iPhone replacement cycles with modest ASP growth',
      'Services revenue reaching $110B+ by 2026',
      'Continued $90B+ annual buyback program',
    ],
    notPricedIn: [
      'A major AI-driven iPhone supercycle in 2025-2026',
      'Regulatory action forcing App Store fee reductions (negative catalyst)',
      'Meaningful revenue from Vision Pro or a new product category',
      'A slowdown in China that impacts hardware sales significantly',
    ],
  },

  technicalContext: {
    rsi: 52,
    rsiInterpretation:
      'RSI of 52 is squarely neutral. Apple has been consolidating after a run from $165 to $230+ over the past year. The stock is neither overbought nor oversold, reflecting market indecision about near-term direction.',
    trendDescription:
      'Apple has been in a broad uptrend since mid-2024, with the stock making higher highs and higher lows. However, the pace of gains has slowed in the last 3 months, suggesting the easy money has been made in this move.',
    volatilityNote:
      'Apple typically moves 3-5% on earnings and major product announcements. It\'s less volatile than most mega-cap tech thanks to its diversified revenue streams and massive buyback support.',
    priceHistory: [
      { month: 'Apr 25', price: 198 },
      { month: 'May 25', price: 207 },
      { month: 'Jun 25', price: 215 },
      { month: 'Jul 25', price: 222 },
      { month: 'Aug 25', price: 228 },
      { month: 'Sep 25', price: 225 },
      { month: 'Oct 25', price: 233 },
      { month: 'Nov 25', price: 237 },
      { month: 'Dec 25', price: 242 },
      { month: 'Jan 26', price: 236 },
      { month: 'Feb 26', price: 231 },
      { month: 'Mar 26', price: 239 },
    ],
  },

  decisionResponses: {
    bullish: {
      whatNeedsToHappen: [
        'Services revenue needs to keep growing 12-15% annually, proving the margin expansion story is real and durable.',
        'Apple Intelligence needs to drive a visible iPhone upgrade cycle — watch unit sales and ASP trends over the next 2-3 quarters.',
        'The regulatory environment needs to remain manageable — App Store fee structures can\'t change dramatically without impacting the bull thesis.',
        'Buybacks need to continue at $90B+/year, providing a floor for EPS growth even if revenue growth stays modest.',
      ],
      biggestRisk:
        'Paying a 32x P/E for a company growing revenue at 4%. If the market re-rates Apple as a "mature tech" stock rather than a "platform growth" story, multiple compression alone could cause a 15-25% correction.',
      keyMetricToWatch:
        'Services revenue growth rate. If it stays above 12% and becomes 30%+ of total revenue, the margin expansion narrative holds and justifies the premium multiple.',
    },
    bearish: {
      whatNeedsToHappen: [
        'iPhone unit growth needs to stall or decline for 2+ consecutive quarters, confirming the smartphone market saturation thesis.',
        'Regulatory actions (EU DMA, DOJ case) need to result in meaningful App Store fee reductions that impact Services margins.',
        'Apple Intelligence needs to fail to differentiate — if users see no reason to upgrade, the supercycle thesis collapses.',
        'China revenue needs to decline as local competitors (Huawei) gain share and geopolitical tensions increase.',
      ],
      biggestRisk:
        'Apple has a history of proving bears wrong. The ecosystem is so sticky that even when products seem incremental, the installed base keeps growing. Shorting quality can be painful for a long time.',
      keyMetricToWatch:
        'iPhone revenue growth and average selling prices. If both flatten simultaneously, it confirms market saturation and removes the biggest growth lever.',
    },
    neutral: {
      whatNeedsToHappen: [
        'Mixed signals from product launches — solid but not spectacular iPhone sales, decent Services growth but below the most optimistic targets.',
        'Valuation stays stable as earnings gradually grow into the multiple, with neither expansion nor compression.',
        'The market continues to treat Apple as a "safe haven" mega-cap, limiting downside but also capping upside.',
      ],
      biggestRisk:
        'Apple tends to surprise in one direction or the other around product launches and earnings. A neutral stance could mean missing a breakout if AI features resonate, or not being positioned defensively if growth disappoints.',
      keyMetricToWatch:
        'The ratio of Services growth to overall revenue growth. If Services accelerates while Products stagnates, it validates the transition narrative but may not move the needle on total growth fast enough to justify the premium.',
    },
  },
};
