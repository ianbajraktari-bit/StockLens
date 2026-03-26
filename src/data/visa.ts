import type { Company } from './types';

export const visa: Company = {
  id: 'visa',
  name: 'Visa',
  ticker: 'V',
  logo: '💳',
  sector: 'Finance & Payments',
  sectorId: 'finance',
  investmentType: 'Toll Booth Monopoly',
  tagline:
    'The invisible toll booth processing $15 trillion in annual payment volume across 200+ countries',
  color: '#1a1f71',
  lastUpdated: 'March 2026',

  whatMattersNow: {
    title: 'What Matters Right Now',
    drivers: [
      {
        label: 'Cash-to-digital transition runway',
        description:
          'An estimated 85% of global transactions still occur in cash. The pace of digital adoption in emerging markets — particularly Africa, South Asia, and Southeast Asia — determines how long Visa\'s secular growth tailwind persists. This is a multi-decade opportunity.',
        category: 'industry',
      },
      {
        label: 'Cross-border volume recovery and growth',
        description:
          'Cross-border transactions are Visa\'s highest-margin revenue stream. International travel recovery and global e-commerce expansion directly drive this category. Any disruption to travel or trade (recession, geopolitical) would hit the most profitable part of the business.',
        category: 'macro',
      },
      {
        label: 'Regulatory threat to interchange economics',
        description:
          'The U.S. Credit Card Competition Act and similar international initiatives aim to introduce routing alternatives that could compress interchange fees. This is a low-probability but high-impact risk to the entire network economics model.',
        category: 'geopolitical',
      },
      {
        label: 'Real-time payment network competition',
        description:
          'FedNow in the U.S., UPI in India, and Pix in Brazil offer alternatives that bypass card networks entirely. While adoption in developed markets is nascent, their rapid growth in India and Brazil proves that card networks are not the only path to digital payments.',
        category: 'industry',
      },
    ],
  },

  whatChanged: {
    summary:
      'Visa\'s fundamental story remains remarkably stable — the cash-to-digital transition continues, margins are expanding, and the network effect strengthens. The debate is purely about valuation and emerging competitive threats.',
    changes: [
      {
        label: 'Revenue growth: steady and predictable',
        direction: 'positive',
        description:
          'FY2025 revenue grew 11% to ~$40B. The consistency of this growth — driven by secular tailwinds rather than cyclical factors — is what commands the premium multiple.',
      },
      {
        label: 'Value-added services: becoming a growth vector',
        direction: 'positive',
        description:
          'Consulting, analytics, fraud prevention, and tokenization services are growing faster than core network revenues, increasing Visa\'s share of each transaction beyond basic processing fees.',
      },
      {
        label: 'Regulatory scrutiny: intensifying globally',
        direction: 'negative',
        description:
          'The Credit Card Competition Act gained momentum in Congress, and the EU is examining interchange practices. While no legislation has passed, the regulatory overhang is greater than it was a year ago.',
      },
      {
        label: 'Real-time payments: proving the concept',
        direction: 'mixed',
        description:
          'UPI in India now processes more transactions than all card networks combined in that market. While developed-market adoption of real-time rails remains minimal, the proof of concept has been established.',
      },
    ],
  },

  business: {
    description:
      "Visa operates the world's largest electronic payments network, connecting consumers, merchants, financial institutions, and governments across more than 200 countries and territories. Critically, Visa does not issue cards, extend credit, or set rates — it is a pure-play technology and network company that earns a small fee on every transaction flowing through its rails. In fiscal year 2025, Visa processed over $15 trillion in total payment volume across roughly 4.3 billion cards. The business model is capital-light, highly scalable, and generates operating margins above 65%. As the global economy continues its secular shift from cash to digital payments, Visa sits at the center of a multi-decade tailwind that expands its addressable market with each new card issued and each new merchant connected.",
    howItMakesMoneyTitle: 'How Visa Makes Money',
    revenueStreams: [
      {
        name: 'Service Revenues',
        percentage: 36,
        description:
          'Fees earned for providing financial institution clients with support services related to their card programs. These fees are based on payment volume — the dollar amount of transactions on Visa-branded cards. As consumer spending grows and more transactions shift from cash to card, service revenues scale accordingly.',
      },
      {
        name: 'Data Processing Revenues',
        percentage: 35,
        description:
          'Fees earned for authorization, clearing, settlement, and network access. Every time a Visa card is swiped, tapped, or used online, Visa charges a processing fee. This is the pure infrastructure toll — Visa earns revenue for routing the transaction through its network, regardless of whether the cardholder pays their balance.',
      },
      {
        name: 'International Transaction Revenues',
        percentage: 25,
        description:
          'Fees earned for cross-border transaction processing and currency conversion. When a U.S. cardholder makes a purchase in Europe, Visa earns an additional fee for facilitating the cross-currency settlement. This is the highest-margin revenue stream and benefits from growth in international travel and global e-commerce.',
      },
      {
        name: 'Other Revenues',
        percentage: 4,
        description:
          'Value-added services including consulting, data analytics, fraud prevention tools, and loyalty platform solutions. Visa is investing heavily in expanding these services as a way to deepen client relationships and increase revenue per transaction beyond basic processing fees.',
      },
    ],
    competitiveAdvantage:
      "Visa's moat is its network effect, which is among the strongest in any industry. The more cardholders that use Visa, the more merchants accept it. The more merchants accept it, the more consumers want a Visa card. This self-reinforcing cycle has created a duopoly with Mastercard that is extremely difficult to disrupt. Visa's network handles more than 65% of U.S. card payment volume and approximately 40% globally. The infrastructure is deeply embedded in the financial system — banks, processors, point-of-sale terminals, and e-commerce platforms are all built to work with Visa's protocols. Switching costs are enormous: replacing Visa would require simultaneously convincing billions of cardholders, tens of millions of merchants, and thousands of financial institutions to adopt an alternative. Additionally, Visa's capital-light model (it does not take credit risk) means nearly all revenue growth falls through to the bottom line, producing return on invested capital above 50%.",
  },

  financials: {
    metrics: [
      {
        label: 'Revenue (TTM)',
        value: '$41.39B',
        explanation:
          'Trailing twelve-month revenue of $41.39 billion reflects Visa\'s position as one of the most efficient revenue-generating machines in financial services. Fiscal year 2025 revenue of approximately $40 billion grew 11% year-over-year, driven by steady payment volume growth, cross-border travel recovery, and expansion of value-added services.',
        sentiment: 'positive',
      },
      {
        label: 'Net Income (FY2025)',
        value: '$19.85B',
        explanation:
          'Net income of nearly $20 billion on $40 billion in revenue translates to a net margin approaching 50%. This exceptional profitability reflects the capital-light, scalable nature of Visa\'s network model — the incremental cost of processing an additional transaction is negligible, so volume growth drops almost directly to the bottom line.',
        sentiment: 'positive',
      },
      {
        label: 'Market Capitalization',
        value: '$579.27B',
        explanation:
          'At $579 billion, Visa is one of the most valuable financial companies in the world — worth more than JPMorgan Chase despite generating a fraction of the revenue. This premium reflects the market\'s recognition of Visa\'s superior margin profile, growth durability, and near-zero credit risk.',
        sentiment: 'positive',
      },
      {
        label: 'Return on Equity',
        value: '53.95%',
        explanation:
          'An ROE above 50% is almost unheard of among large-cap companies. Visa achieves this through a combination of very high margins and an asset-light balance sheet. The company requires minimal tangible capital to operate, meaning virtually all earnings represent returns on shareholder equity rather than being locked up in physical assets or loan books.',
        sentiment: 'positive',
      },
      {
        label: 'Return on Invested Capital',
        value: '52.66%',
        explanation:
          'ROIC of nearly 53% confirms that Visa\'s competitive advantages translate into genuine economic value creation. The company earns far more on its invested capital than its cost of capital, which means every dollar reinvested in the business generates substantial excess returns for shareholders.',
        sentiment: 'positive',
      },
      {
        label: 'Share Buybacks (FY2025)',
        value: '$18.2B',
        explanation:
          'Visa returned $18.2 billion to shareholders through buybacks in fiscal 2025, reflecting the company\'s prodigious free cash flow generation. The buyback program steadily reduces the share count, amplifying per-share earnings growth and providing a floor under the stock during periods of market weakness.',
        sentiment: 'positive',
      },
    ],
  },

  valuation: {
    metrics: [
      {
        label: 'P/E Ratio',
        value: '28.33x',
        industryAvg: '18x',
        explanation:
          'Visa trades at a significant premium to the broader financial sector, but this comparison is somewhat misleading. Visa\'s business model more closely resembles a technology platform than a bank. The 28x multiple reflects ~50% net margins, high growth visibility, and zero credit risk — characteristics that command premium valuations.',
      },
      {
        label: 'EV/EBITDA',
        value: '~20x',
        industryAvg: '14x',
        explanation:
          'An EV/EBITDA of 20x is elevated but consistent with other high-quality, capital-light business models (think software companies or exchanges). Visa\'s predictable cash flows and minimal capital expenditure requirements justify this premium relative to capital-intensive financial institutions.',
      },
      {
        label: 'Price/Sales',
        value: '~14x',
        industryAvg: '5x',
        explanation:
          'A price-to-sales ratio of 14x appears steep until you consider Visa\'s net margin of ~50%. The market is willing to pay more per dollar of revenue when such a large percentage of that revenue converts to free cash flow. For Visa, revenue quality matters more than revenue quantity.',
      },
      {
        label: 'PEG Ratio',
        value: '~2.5',
        industryAvg: '1.5',
        explanation:
          'A PEG ratio of 2.5 suggests investors are paying a premium even after adjusting for Visa\'s growth rate. This premium reflects the market\'s confidence in the durability and predictability of that growth — the secular shift from cash to digital payments provides a long runway of mid-teens earnings growth with relatively low execution risk.',
      },
    ],
    summary:
      'Visa\'s valuation is undeniably premium by any traditional financial sector benchmark, but the comparison framework matters. Visa operates more like a technology monopoly than a bank — it takes no credit risk, requires minimal capital, and generates margins that most software companies would envy. The forward P/E of 22.8x implies the market expects continued low-teens revenue growth and mid-teens earnings growth. The stock is not cheap, but the question is whether you ever get a "cheap" entry point for a business with this quality of economics. Historically, investors who waited for a meaningful pullback in Visa were often left waiting as the stock compounded steadily higher.',
  },

  bullCase: {
    title: 'The Case for Visa',
    points: [
      'The global cash-to-digital transition is still in its early stages. An estimated 85% of worldwide transactions still occur in cash, providing a massive and enduring growth runway as emerging markets — particularly in Africa, South Asia, and Southeast Asia — increasingly adopt electronic payments.',
      'Cross-border transaction volumes are accelerating as international travel fully recovers and global e-commerce expands. Cross-border is Visa\'s highest-margin revenue stream, and every percentage point of growth in this category has an outsized impact on profitability.',
      'Visa\'s value-added services business (consulting, analytics, fraud prevention, tokenization) is growing faster than the core network and creating new revenue streams that increase the company\'s share of each transaction beyond basic processing fees.',
      'The capital return program is exceptional — $18.2 billion in buybacks plus a growing dividend in fiscal 2025. With free cash flow conversion near 100% of net income, Visa can simultaneously invest in growth and return enormous amounts of capital to shareholders.',
      'New payment flows in B2B, government disbursements, and real-time payments represent a total addressable market several times larger than consumer card payments. Visa Direct, the company\'s push payment platform, processed over $600 billion in volume in 2025 and is growing rapidly.',
    ],
  },

  bearCase: {
    title: 'The Case Against Visa',
    points: [
      'Regulatory risk is persistent and growing. The U.S. Credit Card Competition Act and similar international initiatives aim to introduce more competition in payment routing, which could compress interchange fees and reduce the economics that make Visa\'s network so profitable.',
      'Real-time payment networks (FedNow in the U.S., UPI in India, Pix in Brazil) offer alternatives that bypass card networks entirely. While these systems are nascent in most markets, their growth in India and Brazil demonstrates that card networks are not the only path to digital payments.',
      'At a $579 billion market cap and 28x earnings, Visa is priced for near-perfect execution. Any meaningful deceleration in payment volume growth — whether from economic weakness, competitive encroachment, or regulatory action — would pressure the multiple.',
      'Consumer spending is cyclical, and a recession would reduce transaction volumes and cross-border activity. While Visa does not take credit risk directly, its revenue is tied to the aggregate level of consumer and business spending across the global economy.',
      'Big tech companies (Apple Pay, Google Pay, Amazon) are building their own payment ecosystems and could eventually seek to disintermediate card networks, particularly for on-platform transactions where they control the customer relationship.',
    ],
  },

  marketExpectations: {
    impliedGrowth: '~12-14% annual earnings growth over the next 3 years',
    analystConsensus: 'Strong Buy (avg. target ~$399)',
    pricedIn: [
      'Continued mid-single-digit growth in global payment volumes',
      'Full recovery and sustained growth in cross-border transaction revenues',
      'Steady expansion of value-added services revenue',
      'Ongoing share buybacks of $16-20B annually',
    ],
    notPricedIn: [
      'Passage of the Credit Card Competition Act or similar legislation forcing open routing on Visa transactions',
      'Rapid adoption of real-time payment rails that meaningfully cannibalize card volume in developed markets',
      'A severe global recession that sharply reduces consumer and business spending volumes across all geographies',
      'Visa successfully capturing a significant share of the $125 trillion B2B payments market through Visa Direct and Visa B2B Connect',
    ],
  },

  technicalContext: {
    rsi: 42,
    rsiInterpretation:
      'An RSI of 42 places Visa in mildly oversold territory, suggesting the recent pullback from November highs may be nearing a support level. Historically, Visa has found reliable buying interest when its RSI dips into the low 40s, as long-term holders view pullbacks as accumulation opportunities.',
    trendDescription:
      'Visa rallied steadily from $280 in April 2025 to $322 in November 2025, a gain of approximately 15%. The stock has since pulled back about 6% to $303, giving back some of the gains as broader market rotation out of large-cap quality names weighed on the stock. The longer-term uptrend remains intact above the $285-290 support zone.',
    volatilityNote:
      'Visa is one of the lower-volatility large-cap stocks, typically moving 1-3% on earnings days. The stock tends to trade as a quality defensive name during market stress, declining less than the broader market. Expect elevated movement around quarterly earnings, cross-border volume disclosures, and any regulatory developments related to interchange fees.',
    priceHistory: [
      { month: 'Apr 25', price: 280 },
      { month: 'May 25', price: 292 },
      { month: 'Jun 25', price: 305 },
      { month: 'Jul 25', price: 295 },
      { month: 'Aug 25', price: 288 },
      { month: 'Sep 25', price: 298 },
      { month: 'Oct 25', price: 310 },
      { month: 'Nov 25', price: 322 },
      { month: 'Dec 25', price: 318 },
      { month: 'Jan 26', price: 325 },
      { month: 'Feb 26', price: 312 },
      { month: 'Mar 26', price: 303 },
    ],
  },

  thinkFirstQuestions: {
    businessRisk: 'Visa processes $15 trillion in annual payment volume with 50% net margins. With a business this dominant, what could actually disrupt it? Think about technology, regulation, and competition.',
    valuationView: 'Visa trades at 28x earnings with 11% revenue growth and 50% net margins. The stock has never been "cheap." Is a premium-forever valuation justified for a toll booth monopoly?',
    narrativeShift: 'Visa\'s fundamental story hasn\'t changed much — cash keeps going digital. But new competitors (UPI, Pix, FedNow) are proving that card networks aren\'t the only way. How should investors weigh this?',
  },

  scenarioDefaults: {
    currentRevenue: 41,
    currentMargin: 65,
    currentMultiple: 28,
    currentMarketCap: 579,
  },

  valuationImplied: {
    currentPE: '28x',
    implications: [
      'The global cash-to-digital transition continues at mid-single-digit payment volume growth for the next decade',
      'Regulatory actions (Credit Card Competition Act, EU interchange reviews) do not materially disrupt network economics',
      'Real-time payment networks (FedNow, UPI) remain complementary rather than substitutional to card networks in developed markets',
      'Cross-border volumes continue growing at high teens rates as international travel and e-commerce expand',
    ],
    summary: 'At 28x earnings, Visa is priced as a perpetual compounder with a wide moat. The question isn\'t whether Visa is a great business — it clearly is. The question is whether 28x adequately compensates you for regulatory tail risk and the possibility that real-time payments eventually bypass card rails.',
  },

  chartNarrative: [
    { month: 'Apr 25', event: 'Steady trading as cross-border volume recovery supported results' },
    { month: 'Jun 25', event: 'Rally on strong fiscal Q3 showing international transaction strength' },
    { month: 'Aug 25', event: 'Pullback as Credit Card Competition Act gained congressional momentum' },
    { month: 'Nov 25', event: 'New highs as regulatory fears eased and holiday spending data came in strong' },
    { month: 'Jan 26', event: 'Brief peak before rotation out of quality/defensive names' },
    { month: 'Mar 26', event: 'Pullback to support as investors weighed valuation against growth durability' },
  ],

  decisionResponses: {
    bullish: {
      whatNeedsToHappen: [
        'Payment volume growth needs to sustain at mid-to-high single digits, confirming that the cash-to-digital transition continues to provide a reliable organic growth tailwind regardless of economic cycles.',
        'Cross-border volumes must continue recovering and growing as international travel normalizes and global e-commerce expands, driving growth in Visa\'s highest-margin revenue category.',
        'Value-added services revenue needs to grow at a faster rate than core network revenues, demonstrating that Visa is successfully expanding its share of each transaction and deepening its competitive moat.',
        'Regulatory outcomes must remain manageable — specifically, the Credit Card Competition Act should either fail to pass or be implemented in a form that does not materially disrupt Visa\'s network economics.',
      ],
      biggestRisk:
        'Regulatory intervention is the most significant threat to the bull case. If legislation forces open routing that allows merchants to bypass Visa\'s network for debit and eventually credit transactions, the entire toll booth economic model faces structural compression. This is a low-probability but high-impact risk.',
      keyMetricToWatch:
        'Cross-border transaction volume growth rate. This is Visa\'s highest-margin revenue stream and the most direct indicator of the company\'s ability to compound earnings at mid-teens rates. Sustained growth above 15% in cross-border volumes validates the premium multiple.',
    },
    bearish: {
      whatNeedsToHappen: [
        'Real-time payment networks need to gain meaningful traction in developed markets, demonstrating that consumers and merchants will adopt alternatives to card networks when given viable options.',
        'Regulatory action in the U.S. or EU must force open routing or interchange fee reductions that compress the economics of Visa\'s network.',
        'A global recession needs to reduce payment volumes and cross-border activity meaningfully, demonstrating that Visa is more cyclical than the market assumes.',
        'Big tech payment platforms need to begin disintermediating card networks for a growing share of transactions, particularly in mobile and e-commerce channels.',
      ],
      biggestRisk:
        'The bear case faces a structural challenge: even during the 2020 pandemic, Visa\'s business proved remarkably resilient. Payment volumes recovered within quarters, and the shift to digital actually accelerated the company\'s long-term growth trajectory. Betting against a network with 4.3 billion cards in circulation and 65% U.S. market share requires a thesis beyond cyclical weakness.',
      keyMetricToWatch:
        'Total payment volume growth and the trajectory of real-time payment adoption in the U.S. If FedNow or similar systems begin handling a measurable percentage of transactions that would have gone through card networks, the competitive narrative shifts.',
    },
    neutral: {
      whatNeedsToHappen: [
        'Visa delivers steady, in-line results — mid-single-digit volume growth, stable margins, and consistent buybacks — without a catalyst for multiple expansion or contraction.',
        'The regulatory environment remains uncertain but does not produce definitive outcomes, keeping a cloud over the stock without materially changing the fundamentals.',
        'The stock trades range-bound as investors debate whether the premium valuation is justified by growth durability or threatens to compress if growth slows.',
      ],
      biggestRisk:
        'Visa has historically rewarded long-term holders through consistent compounding. A neutral stance risks underweighting a compounder during a period when steady mid-teens earnings growth may outperform the broader market. Conversely, the premium valuation means any negative surprise carries outsized downside risk.',
      keyMetricToWatch:
        'The ratio of value-added services revenue to total revenue. Growth in this category represents Visa\'s ability to increase its economic share of each transaction and build competitive advantages beyond pure network scale. If this ratio expands from the current level, it supports the bull case for sustained premium valuation.',
    },
  },
};
