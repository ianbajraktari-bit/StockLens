import type { Company } from './types';

export const walmart: Company = {
  id: 'walmart',
  name: 'Walmart',
  ticker: 'WMT',
  logo: '🏬',
  sector: 'Consumer & Retail',
  sectorId: 'consumer',
  investmentType: 'Platform Transformation',
  tagline:
    'The largest retailer on Earth, using scale and technology to reinvent itself for the digital age',
  color: '#0071dc',
  lastUpdated: 'March 2026',

  whatMattersNow: {
    title: 'What Matters Right Now',
    drivers: [
      {
        label: 'Walmart Connect advertising scale-up',
        description:
          'Walmart\'s advertising business is growing ~30% annually with estimated 50-70% margins. If it follows the trajectory of Amazon\'s ad business, it could fundamentally change Walmart\'s margin profile. This is the single most important variable for the "platform transformation" thesis.',
        category: 'company-specific',
      },
      {
        label: 'Tariff exposure on general merchandise',
        description:
          'Tariff escalation on goods from China and Southeast Asia directly threatens margins in general merchandise categories. Walmart\'s price-sensitive customers make it difficult to fully pass through cost increases, creating a margin squeeze risk.',
        category: 'geopolitical',
      },
      {
        label: 'Consumer spending health',
        description:
          'Walmart serves a lower- and middle-income demographic that is sensitive to employment trends, wage growth, and inflation. A recession would test whether Walmart gains share (trade-down effect) or loses volume as spending contracts broadly.',
        category: 'macro',
      },
      {
        label: 'E-commerce profitability path',
        description:
          'Online sales are growing 20%+ annually, but e-commerce is not yet consistently profitable on a standalone basis. Demonstrating a clear path to positive e-commerce contribution margins is critical to justifying the premium valuation.',
        category: 'company-specific',
      },
      {
        label: 'Valuation premium sustainability',
        description:
          'At 35x earnings, Walmart trades at a historically elevated multiple for a retailer. The market is pricing in a successful transition to a tech-enabled platform company. Any disappointment in growth or margins could trigger a re-rating back toward historical norms of 20-25x.',
        category: 'macro',
      },
    ],
  },

  whatChanged: {
    summary:
      'Walmart has been re-rated from a traditional retailer to a technology-enabled platform company. The stock\'s 50%+ gain over the past year reflects growing conviction in the advertising, e-commerce, and automation investment theses.',
    changes: [
      {
        label: 'Valuation: dramatically re-rated',
        direction: 'mixed',
        description:
          'The P/E has expanded from ~22x to 35x over the past two years. This reflects genuine business improvement, but also raises the bar for continued execution. The stock has recently pulled back 10% from highs, suggesting some investors are questioning the premium.',
      },
      {
        label: 'Advertising: becoming a real business',
        direction: 'positive',
        description:
          'Walmart Connect is scaling rapidly with margins that could eventually rival Amazon\'s ad business. This high-margin revenue stream is the primary catalyst for the margin expansion thesis that supports the elevated valuation.',
      },
      {
        label: 'Earnings growth: outpacing revenue',
        direction: 'positive',
        description:
          'Net income grew 12.6% versus revenue growth of 4.7%, demonstrating real operating leverage. The gap between revenue and earnings growth is widening as higher-margin businesses scale — exactly what the bull case requires.',
      },
      {
        label: 'Competitive intensity: rising from multiple directions',
        direction: 'negative',
        description:
          'Amazon continues to invest aggressively in grocery delivery. Temu and Shein are pressuring the low end. Digital price tag rollouts and automation investments are necessary just to maintain competitive position, not to gain an advantage.',
      },
    ],
  },

  business: {
    description:
      'Walmart operates over 10,500 stores and numerous e-commerce websites across 19 countries, employing approximately 2.1 million associates worldwide. The company has undergone a significant transformation in recent years, investing heavily in e-commerce, automation, and advertising technology to evolve from a traditional brick-and-mortar discounter into an omnichannel retail platform. Its fiscal year 2026 revenue of $713.16 billion makes it the largest company in the world by revenue. Walmart serves approximately 255 million customers weekly, leveraging its unmatched physical footprint as both a shopping destination and a fulfillment network for online orders.',
    howItMakesMoneyTitle: 'How Walmart Makes Money',
    revenueStreams: [
      {
        name: 'U.S. Grocery & Consumables',
        percentage: 56,
        description:
          'Grocery is the anchor of Walmart\'s U.S. business and the primary driver of store traffic. The company is the largest grocer in the United States, with approximately 25% market share. Grocery operates on thin margins (typically 1-2%), but its role is to bring customers through the door. Once inside, they purchase higher-margin items. This "loss leader" strategy has been central to Walmart\'s model for decades.',
      },
      {
        name: 'U.S. General Merchandise',
        percentage: 12,
        description:
          'Apparel, electronics, home goods, and other discretionary categories carry higher margins than grocery. This segment has faced pressure from e-commerce competitors but benefits from Walmart\'s increasing focus on marketplace and third-party seller programs, which generate fee-based revenue without inventory risk.',
      },
      {
        name: "Sam's Club",
        percentage: 13,
        description:
          "Walmart's membership-based warehouse club competes directly with Costco. Sam's Club generates revenue through both product sales and membership fees ($50-$110 annually). The segment has seen renewed momentum under recent management, with same-store sales consistently outpacing the broader Walmart U.S. segment.",
      },
      {
        name: 'International',
        percentage: 19,
        description:
          'Operations in Mexico, Canada, China, India (via Flipkart), Chile, and other markets. International has been a mixed story — Walmart exited several underperforming markets in recent years to focus on higher-return geographies. Mexico (Walmex) and India remain the strongest growth engines outside the United States.',
      },
    ],
    competitiveAdvantage:
      "Walmart's competitive moat is built on three pillars. First, scale: no retailer on Earth can match Walmart's purchasing power, which translates into structurally lower costs of goods. Second, the physical network: 4,700 U.S. stores place 90% of the American population within 10 miles of a Walmart, creating a logistics advantage that pure e-commerce players cannot replicate. Third, the company is increasingly building a high-margin services ecosystem — Walmart Connect (advertising), Walmart+ (membership), financial services, and healthcare — that layers recurring, higher-margin revenue on top of the retail foundation. The rollout of digital price tags across all U.S. stores by end of 2026 exemplifies how Walmart is using technology to reduce costs while improving the customer experience.",
  },

  financials: {
    metrics: [
      {
        label: 'Revenue (FY2026)',
        value: '$713.16B',
        explanation:
          'Revenue grew 4.7% year-over-year, an impressive figure given the enormous base. For a company generating over $700 billion in annual sales, mid-single-digit growth means Walmart is still gaining market share across categories. E-commerce contributed meaningfully, growing at roughly 20% annually.',
        sentiment: 'positive',
      },
      {
        label: 'Net Income',
        value: '$21.89B',
        explanation:
          'Earnings grew 12.6% year-over-year, significantly outpacing revenue growth. This margin expansion reflects the impact of higher-margin businesses like advertising (Walmart Connect) and membership fees, as well as operational efficiencies from automation investments.',
        sentiment: 'positive',
      },
      {
        label: 'EPS (Q4 FY26)',
        value: '$0.74 vs $0.73 est',
        explanation:
          'Walmart beat consensus estimates by a penny in its most recent quarter. While the magnitude of the beat is modest, consistent earnings beats reinforce management credibility and help sustain the stock\'s premium valuation.',
        sentiment: 'positive',
      },
      {
        label: 'Gross Margin',
        value: '24.91%',
        explanation:
          'Walmart\'s gross margin has been gradually expanding as the revenue mix shifts toward higher-margin services and advertising. For context, grocery-heavy retailers typically operate at 22-26% gross margins. The trend is important: every 100 basis points of gross margin improvement on a $713 billion revenue base equates to over $7 billion in incremental gross profit.',
        sentiment: 'positive',
      },
      {
        label: 'Operating Margin',
        value: '4.12%',
        explanation:
          'Operating margin remains thin by broad market standards but is respectable for a mass retailer. The gradual improvement from sub-4% levels in prior years reflects the company\'s successful strategy of layering higher-margin revenue streams on top of the core retail business.',
        sentiment: 'neutral',
      },
      {
        label: 'EBITDA',
        value: '$44.03B',
        explanation:
          'EBITDA of $44 billion provides substantial cash flow to fund capital expenditures, dividends, share repurchases, and strategic investments. Walmart has been reinvesting aggressively in supply chain automation, store remodels, and technology infrastructure.',
        sentiment: 'positive',
      },
    ],
  },

  valuation: {
    metrics: [
      {
        label: 'P/E Ratio',
        value: '35.2x',
        industryAvg: '22x',
        explanation:
          'At 35x earnings, Walmart trades at a significant premium to the retail sector average. This premium has expanded considerably over the past two years as the market has re-rated Walmart from a traditional retailer to a technology-enabled platform company. The question is whether the premium is sustainable or whether it has overshot.',
      },
      {
        label: 'EV/EBITDA',
        value: '22x',
        industryAvg: '12x',
        explanation:
          'Nearly double the industry average. This elevated multiple reflects confidence in Walmart\'s ability to sustain earnings growth through its evolving business mix. The advertising and membership businesses, while still small relative to total revenue, are growing rapidly and command much higher multiples in isolation.',
      },
      {
        label: 'Price/Sales',
        value: '1.3x',
        industryAvg: '0.6x',
        explanation:
          'Price-to-sales looks modest in absolute terms because Walmart\'s revenue base is so enormous. However, at more than double the sector average, the market is pricing in continued margin expansion and revenue growth. For a low-margin business, P/S is a particularly important metric to monitor.',
      },
      {
        label: 'PEG Ratio',
        value: '3.2',
        industryAvg: '1.8',
        explanation:
          'A PEG ratio of 3.2 indicates that the stock is expensive relative to its growth rate. Even accounting for the improving earnings trajectory, investors are paying a substantial premium for Walmart\'s perceived safety and consistency. This is typical of "quality compounder" stocks in the current market environment.',
      },
    ],
    summary:
      'Walmart\'s valuation has re-rated meaningfully higher as the market has come to view it less as a traditional retailer and more as a technology-enabled platform with multiple growth vectors. At 35x earnings, the stock is priced for continued execution on e-commerce growth, advertising revenue expansion, and margin improvement. The valuation is defensible if Walmart continues to deliver mid-single-digit revenue growth with double-digit earnings growth, but it leaves limited margin for error. Any deceleration in the high-growth segments or margin compression could trigger a multiple contraction.',
  },

  bullCase: {
    title: 'The Case for Walmart',
    points: [
      'Walmart Connect, the company\'s advertising business, is growing at approximately 30% annually and carries margins estimated at 50-70%. As this segment scales, it has the potential to meaningfully lift overall profitability, similar to how Amazon\'s advertising business transformed its margin profile.',
      'Walmart+ membership continues to grow, creating a recurring revenue stream and deepening customer engagement. The subscription model incentivizes higher purchase frequency and provides valuable first-party data for advertising targeting.',
      'The physical store network is a structural advantage in the age of omnichannel retail. Ninety percent of Americans live within 10 miles of a Walmart, enabling same-day delivery, curbside pickup, and ship-from-store capabilities that pure e-commerce players struggle to match.',
      'International operations, particularly in India (Flipkart) and Mexico (Walmex), represent substantial long-term growth opportunities in large, underpenetrated markets with favorable demographic trends.',
      'The rollout of digital price tags and supply chain automation should reduce labor costs and improve inventory management, providing a multi-year tailwind to operating margins. Management expects these investments to yield measurable efficiency gains beginning in fiscal year 2027.',
    ],
  },

  bearCase: {
    title: 'The Case Against Walmart',
    points: [
      'At 35x earnings, the stock is priced for a level of growth and margin expansion that may be difficult to sustain for a company of this scale. The recent pullback from all-time highs near $135 may signal that the market is beginning to question the multiple.',
      'Grocery, which constitutes 56% of U.S. revenue, is a structurally low-margin business. Any increase in food price deflation or competitive intensity could pressure the segment that drives the majority of store traffic.',
      'Amazon remains a formidable competitor in e-commerce and is investing aggressively in grocery delivery and same-day logistics. Walmart\'s e-commerce business, while growing, is still not consistently profitable on a standalone basis.',
      'Tariff escalation poses a direct risk to Walmart\'s cost structure, particularly in general merchandise categories sourced from China and Southeast Asia. Higher input costs that cannot be fully passed through to price-sensitive consumers would compress margins.',
      'The company employs 2.1 million associates, making it highly exposed to minimum wage increases and labor cost inflation. Each dollar per hour increase in average wages translates to roughly $4 billion in additional annual labor costs.',
    ],
  },

  marketExpectations: {
    impliedGrowth: '~10-12% annual earnings growth driven by margin expansion and revenue growth',
    analystConsensus: 'Strong Buy (avg. target ~$131, implying ~8% upside)',
    pricedIn: [
      'Continued mid-single-digit revenue growth with e-commerce as the primary driver',
      'Walmart Connect advertising revenue scaling to over $5 billion annually by 2028',
      'Gradual operating margin expansion toward 4.5-5.0% over the next three years',
      'Walmart+ membership reaching 30+ million U.S. households',
    ],
    notPricedIn: [
      'A significant tariff escalation that disrupts supply chains and compresses general merchandise margins',
      'Acceleration in Walmart Connect to a point where it fundamentally changes the company\'s margin structure (like Amazon\'s ads business did)',
      'A consumer recession that tests whether Walmart gains or loses share when spending contracts sharply',
      'Potential regulatory scrutiny of Walmart\'s market dominance in U.S. grocery as its share continues to grow',
    ],
  },

  technicalContext: {
    rsi: 38,
    rsiInterpretation:
      'An RSI of 38 places Walmart in mildly oversold territory, reflecting the recent pullback from all-time highs near $135. Historically, RSI readings below 40 for Walmart have tended to precede rebounds, as institutional investors view dips as buying opportunities in this high-quality name.',
    trendDescription:
      'Walmart experienced a powerful rally from $88 in April 2025 to an all-time high of $134.69 in February 2026, representing a gain of over 50% in ten months. The stock has since pulled back approximately 10% to the $121 level. This type of consolidation after a major run is common and does not necessarily indicate a trend reversal, though it warrants monitoring.',
    volatilityNote:
      'Walmart typically exhibits below-average volatility for a mega-cap stock, with a beta near 0.55. However, the recent expansion in valuation multiples has introduced greater sensitivity to earnings results and macroeconomic data. Daily moves of 2-3% around earnings reports have become more common as the stock trades at historically elevated multiples.',
    priceHistory: [
      { month: 'Apr 25', price: 88 },
      { month: 'May 25', price: 92 },
      { month: 'Jun 25', price: 97 },
      { month: 'Jul 25', price: 95 },
      { month: 'Aug 25', price: 100 },
      { month: 'Sep 25', price: 108 },
      { month: 'Oct 25', price: 115 },
      { month: 'Nov 25', price: 122 },
      { month: 'Dec 25', price: 128 },
      { month: 'Jan 26', price: 132 },
      { month: 'Feb 26', price: 135 },
      { month: 'Mar 26', price: 121 },
    ],
  },

  decisionResponses: {
    bullish: {
      whatNeedsToHappen: [
        'Walmart Connect advertising revenue needs to maintain 25%+ annual growth, demonstrating that the platform can attract and retain advertising spend at scale.',
        'E-commerce profitability must improve, with the segment moving toward breakeven or positive contribution margins by fiscal year 2028.',
        'Operating margins need to expand toward 4.5%+ as automation investments and higher-margin revenue streams offset wage inflation.',
        'Walmart+ membership needs to demonstrate strong retention rates above 70% and steady subscriber growth, validating the recurring revenue thesis.',
        'International operations, particularly Flipkart in India, must show a clear path to profitability while maintaining market share leadership.',
      ],
      biggestRisk:
        'Multiple compression. At 35x earnings, the stock is priced for continued execution across multiple growth initiatives simultaneously. If any one of these — advertising growth, e-commerce profitability, or margin expansion — disappoints, the market could re-rate the stock back toward its historical 20-25x range, implying 25-35% downside even if earnings continue to grow.',
      keyMetricToWatch:
        'Walmart Connect revenue growth rate. This is the single most important variable for the margin expansion thesis. If advertising growth remains above 25%, it validates the platform transformation narrative. If it decelerates below 20%, the premium valuation becomes harder to justify.',
    },
    bearish: {
      whatNeedsToHappen: [
        'The P/E multiple needs to compress from 35x toward the historical average of 20-25x, which would imply significant downside even on growing earnings.',
        'E-commerce growth needs to decelerate as Amazon and other competitors intensify their grocery and delivery investments.',
        'Tariff increases on imported general merchandise need to pressure margins beyond what can be offset by mix shift and automation.',
        'Consumer spending needs to weaken, particularly among Walmart\'s core lower- and middle-income demographic.',
        'Walmart Connect growth must slow materially, removing the key catalyst for margin expansion expectations.',
      ],
      biggestRisk:
        'Walmart has a long history of defying bearish expectations. The company\'s scale, adaptability, and management quality have consistently surprised to the upside over the past decade. Betting against Walmart\'s operational execution has been a losing trade, and the current management team under Doug McMillon has demonstrated an ability to reinvent the company while maintaining disciplined capital allocation.',
      keyMetricToWatch:
        'Same-store sales growth in Walmart U.S. If comp sales decelerate below 3%, it would signal weakening consumer demand or market share losses, undermining the growth premium embedded in the current valuation.',
    },
    neutral: {
      whatNeedsToHappen: [
        'The business continues to execute in line with consensus expectations — mid-single-digit revenue growth, gradual margin expansion, and steady e-commerce penetration gains.',
        'The valuation remains elevated but stable, with no catalyst strong enough to push the multiple significantly higher or lower.',
        'Macroeconomic conditions remain supportive, with stable consumer spending and no major tariff disruptions.',
      ],
      biggestRisk:
        'For a neutral investor, the primary risk is opportunity cost. Walmart at 35x earnings offers a modest expected return profile of perhaps 8-12% annually if earnings grow as projected and the multiple holds. That may underperform other investment opportunities, particularly in sectors with stronger growth prospects or more attractive valuations.',
      keyMetricToWatch:
        'The relationship between earnings growth and multiple expansion or contraction. If Walmart delivers 10%+ earnings growth while the P/E holds at 35x, the stock should appreciate accordingly. If the multiple compresses even as earnings grow, returns will be muted. The interplay between these two variables determines the risk-reward for a hold position.',
    },
  },
};
