import type { Company } from './types';

export const costco: Company = {
  id: 'costco',
  name: 'Costco',
  ticker: 'COST',
  logo: '🏪',
  sector: 'Retail / Consumer Staples',
  tagline: 'The membership model that Wall Street loves and competitors fear',
  color: '#e31837',

  business: {
    description:
      "Costco operates giant warehouse stores where members pay an annual fee ($65-$130) for the right to buy products at near-cost prices. Here's the counterintuitive part: Costco barely makes money selling you things. Almost all of the profit comes from membership fees. The entire retail operation essentially breaks even on purpose — the low prices are the point, not a sacrifice. This creates an incredibly loyal customer base that renews at a 93% rate.",
    howItMakesMoneyTitle: 'How Costco Makes Money',
    revenueStreams: [
      {
        name: 'Merchandise Sales',
        percentage: 98,
        description:
          'Bulk groceries, electronics, clothing, and more at warehouse prices. This drives massive revenue but operates at ~1-2% margin. Costco intentionally caps markups at 14-15%, vs. 25-50% at typical retailers.',
      },
      {
        name: 'Membership Fees',
        percentage: 2,
        description:
          "Only 2% of revenue but ~70% of operating profit. This is the genius of the model — membership fees are almost pure profit. With 130M+ cardholders, small fee increases translate to hundreds of millions in incremental profit.",
      },
    ],
    competitiveAdvantage:
      "Costco's moat is psychological as much as it is financial. The membership fee creates a sunk-cost effect — once you've paid, you shop there to maximize value. The limited SKU strategy (3,700 items vs. 30,000 at Walmart) means higher volume per item, which means better supplier pricing. And the treasure-hunt experience (rotating premium items) drives traffic that no online competitor can replicate. Walmart has tried and failed to replicate this model with Sam's Club for decades.",
  },

  financials: {
    metrics: [
      {
        label: 'Revenue (TTM)',
        value: '$265B',
        explanation:
          'Growing steadily at 7-8% annually. This isn\'t explosive growth, but for a retailer of this scale, it\'s excellent. It means Costco is still gaining share in a mature industry.',
        sentiment: 'positive',
      },
      {
        label: 'Membership Revenue',
        value: '$4.8B',
        explanation:
          'This number is everything. Membership revenue grows predictably and drops almost entirely to the bottom line. The recent fee increase (first in 7 years) signals confidence in member loyalty.',
        sentiment: 'positive',
      },
      {
        label: 'Renewal Rate',
        value: '93%',
        explanation:
          'Among the highest subscription retention rates in any industry. For context, Netflix is around 95% and gym memberships are ~70%. This proves the value proposition is real — members feel they save more than the fee costs.',
        sentiment: 'positive',
      },
      {
        label: 'Operating Margin',
        value: '3.7%',
        explanation:
          'Looks terrible compared to most companies, but this is by design. Costco deliberately keeps margins low to keep prices low. The membership fee model means they don\'t need high retail margins.',
        sentiment: 'neutral',
      },
      {
        label: 'Comparable Sales Growth',
        value: '+6.8%',
        explanation:
          'Comp sales measure growth at existing stores. 6.8% is very strong for brick-and-mortar retail — it means customers are spending more per visit, not just that Costco is opening new locations.',
        sentiment: 'positive',
      },
      {
        label: 'Return on Equity',
        value: '30%',
        explanation:
          'A 30% ROE from a low-margin business sounds impossible until you understand the capital-light membership model. Costco generates enormous returns on the capital it actually invests.',
        sentiment: 'positive',
      },
    ],
  },

  valuation: {
    metrics: [
      {
        label: 'P/E Ratio',
        value: '55x',
        industryAvg: '22x',
        explanation:
          "This is the elephant in the room. 55x earnings is expensive for any company, let alone a retailer growing at 7%. The market is paying this premium for quality, predictability, and defensive characteristics. The question is whether that premium is justified or excessive.",
      },
      {
        label: 'EV/EBITDA',
        value: '36x',
        industryAvg: '12x',
        explanation:
          "3x the industry average. This screams 'premium stock.' Historically, Costco has always traded at a premium to peers, but the current premium is near all-time highs. You're paying a lot for consistency.",
      },
      {
        label: 'Price/Sales',
        value: '1.6x',
        industryAvg: '0.6x',
        explanation:
          "The Price/Sales ratio looks more reasonable because Costco's revenue is enormous. Still, it's nearly 3x the retail average, reflecting the market's belief in the membership model's superiority.",
      },
      {
        label: 'PEG Ratio',
        value: '5.1',
        industryAvg: '1.8',
        explanation:
          'A PEG of 5.1 is high by almost any standard. It means you\'re paying 5x the growth-adjusted market rate. Bulls argue traditional PEG doesn\'t capture Costco\'s quality premium. Bears say "at some point, valuation matters."',
      },
    ],
    summary:
      "Costco is the most expensively valued major retailer in the world, and it has been for years. The premium is a vote of confidence in the business model's resilience and predictability. If you're buying Costco, you're making a bet that this quality deserves a permanent premium — and that the consistency of the business model protects you in downturns.",
  },

  bullCase: {
    title: 'The Case for Costco',
    points: [
      'The membership model is a recurring revenue stream with 93% retention — this is practically subscription-grade reliability from a physical retailer.',
      'Costco is recession-resistant. In downturns, consumers trade down to Costco for value. The 2008 recession barely dented membership numbers.',
      "International expansion is a long runway — only 300 of 900+ warehouses are outside the US. Japan, China, and Europe are still early.",
      'E-commerce is growing 20%+ and Costco is just beginning to digitize. Same-day delivery through Instacart adds convenience without cannibalizing margins.',
      'The recent membership fee increase will add ~$500M+ in annual pre-tax income with minimal churn risk.',
    ],
  },

  bearCase: {
    title: 'The Case Against Costco',
    points: [
      'At 55x earnings, the stock is priced for perfection. Any stumble — a bad quarter, slower comps, lower renewal rates — and the premium compresses quickly.',
      "Revenue growth of 7% is solid but doesn't warrant a 55x multiple. You can find comparable growth at half the valuation in other sectors.",
      'New warehouse openings are slowing in the US as prime locations become scarce. International expansion is capital-intensive and culturally challenging.',
      "Wage inflation is a persistent risk — Costco's employee-friendly culture means labor costs tend to rise faster than peers.",
      'The membership model, while brilliant, has a ceiling. You can only raise prices so much and so often without testing member loyalty.',
    ],
  },

  marketExpectations: {
    impliedGrowth: '~10% annual earnings growth with stable membership trends',
    analystConsensus: 'Overweight (avg. target ~$1,050)',
    pricedIn: [
      'Steady 6-8% comp sales growth',
      'Membership renewal rates staying above 90%',
      'Gradual international expansion of 25-30 new warehouses per year',
    ],
    notPricedIn: [
      'A recession that actually tests whether consumers increase or decrease Costco spending',
      'A second membership fee increase sooner than expected',
      'A meaningful acceleration in e-commerce that changes the growth profile',
      'Valuation compression if interest rates stay higher for longer (expensive stocks get punished)',
    ],
  },

  technicalContext: {
    rsi: 64,
    rsiInterpretation:
      'RSI of 64 is slightly above neutral, leaning toward overbought territory. This suggests the stock has been trending up recently, but isn\'t at levels that typically signal exhaustion. Costco tends to be "perpetually overbought" because of constant institutional buying.',
    trendDescription:
      'Costco has been in a steady uptrend for years with shallow pullbacks. It\'s the definition of a "staircase stock" — steady climb, small dips, repeat. The few times it drops 15%+, institutional investors pile back in quickly.',
    volatilityNote:
      'Costco is one of the least volatile mega-caps. Typical daily moves are under 1%. Earnings can move the stock 3-5%, but that\'s about as wild as it gets. This is a "sleep well at night" stock, not a trading vehicle.',
    priceHistory: [
      { month: 'Apr 25', price: 920 },
      { month: 'May 25', price: 935 },
      { month: 'Jun 25', price: 960 },
      { month: 'Jul 25', price: 945 },
      { month: 'Aug 25', price: 970 },
      { month: 'Sep 25', price: 985 },
      { month: 'Oct 25', price: 960 },
      { month: 'Nov 25', price: 990 },
      { month: 'Dec 25', price: 1010 },
      { month: 'Jan 26', price: 1025 },
      { month: 'Feb 26', price: 1005 },
      { month: 'Mar 26', price: 1035 },
    ],
  },

  thinkingStep: {
    prompt:
      'Costco has one of the strongest business models in retail, but trades at a steep premium (~55x earnings). Would you consider this stock attractive at this valuation? Why or why not? (1–2 sentences)',
    modelAnswer:
      'Costco\'s business model is arguably the best in retail — high renewal rates, pricing power, and a loyal customer base create a durable competitive advantage. But at 55x earnings, you\'re paying a luxury price for a grocery store; the stock is attractive for patient investors who value predictability over upside, but poor for anyone expecting near-term returns, since even perfect execution may not drive the stock higher if the multiple compresses.',
    strongReasoningIncludes: [
      'Separates business quality from stock attractiveness — a great business can be a mediocre investment at the wrong price',
      'Considers the valuation multiple as a risk factor, not just earnings growth',
      'Specifies what type of investor this might suit (e.g., long-term compounder vs. growth seeker)',
    ],
  },

  decisionResponses: {
    bullish: {
      whatNeedsToHappen: [
        'Membership renewal rates need to stay above 90% — this is the foundation of the entire investment thesis.',
        'International expansion needs to show comparable unit economics to US warehouses.',
        'E-commerce needs to keep growing 15%+ without eroding the in-store experience that drives high basket sizes.',
        'The company needs to demonstrate pricing power through successful membership fee increases every 5-7 years.',
      ],
      biggestRisk:
        "Valuation compression. Even if the business executes perfectly, if the market decides a 55x P/E is too rich (due to rising rates, rotation to value, etc.), the stock could drop 20-30% even while earnings grow. You'd be right on the business but wrong on the stock.",
      keyMetricToWatch:
        'Membership renewal rate. If it drops below 90%, something fundamental has changed. Above 92%, the model is healthy. This single metric tells you whether the value proposition is intact.',
    },
    bearish: {
      whatNeedsToHappen: [
        'The P/E multiple needs to compress from 55x toward the 35-40x range, which alone would mean a 25-35% decline.',
        "Comp sales growth needs to slow below 4%, suggesting the company is hitting a growth ceiling in mature markets.",
        "Membership growth (not just renewals) needs to plateau, showing that Costco's addressable market is saturating.",
        'Margin pressure from wages, theft, or supply chain costs needs to squeeze the already-thin retail margins.',
      ],
      biggestRisk:
        "Costco is a stock that has punished bears for decades. Every time it looks expensive, the business keeps executing and the stock keeps climbing. Shorting quality is one of the most dangerous trades on Wall Street. If you're bearish, size your position accordingly.",
      keyMetricToWatch:
        "The P/E ratio relative to earnings growth. If the P/E starts contracting (even to 45x) while earnings grow only 8-10%, you'll see meaningful downside. Watch the multiple, not just the business.",
    },
    neutral: {
      whatNeedsToHappen: [
        'The business continues executing as expected — steady comps, stable renewals, gradual expansion.',
        "The valuation stays stretched but doesn't break down — no catalyst to compress or expand the multiple.",
        'Interest rates and macro conditions remain stable, keeping the premium-quality trade intact.',
      ],
      biggestRisk:
        "Costco doesn't give neutral investors much to do. It rarely provides good entry points, and selling means missing compounding from one of the best business models in retail. The risk is opportunity cost — your capital might work harder elsewhere while Costco grinds higher slowly.",
      keyMetricToWatch:
        'Same-store sales growth vs. the valuation multiple. As long as comps are 5%+ and the P/E stays below 60x, the stock is in equilibrium. A divergence in either direction signals the next move.',
    },
  },
};
