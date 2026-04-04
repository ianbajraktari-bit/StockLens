import type { Company } from './types';

export const amazon: Company = {
  id: 'amazon',
  name: 'Amazon',
  ticker: 'AMZN',
  logo: '📦',
  sector: 'E-Commerce / Cloud Computing',
  tagline: 'The everything store that became the everything company',
  color: '#ff9900',

  business: {
    description:
      "Most people know Amazon as an online store, but that's only part of the picture. Amazon is really three businesses in a trench coat: a massive e-commerce platform, the world's largest cloud computing provider (AWS), and a fast-growing advertising business. The e-commerce side runs on razor-thin margins by design — it's a customer acquisition and data engine. The real profits come from AWS and ads.",
    howItMakesMoneyTitle: 'How Amazon Makes Money',
    revenueStreams: [
      {
        name: 'E-Commerce & Retail',
        percentage: 60,
        description:
          "Online and physical stores, including Whole Foods. This is the bulk of revenue but operates at thin margins — Amazon often reinvests profits to grow. It's a volume game.",
      },
      {
        name: 'Amazon Web Services (AWS)',
        percentage: 17,
        description:
          'The crown jewel. AWS is the #1 cloud platform globally, powering everything from Netflix to government agencies. It generates the majority of Amazon\'s operating profit despite being a fraction of revenue.',
      },
      {
        name: 'Advertising',
        percentage: 8,
        description:
          "The hidden gem. When you search for a product on Amazon, the top results are often ads. This is a ~$50B business with margins that rival Google's ad business.",
      },
      {
        name: 'Prime & Subscriptions',
        percentage: 7,
        description:
          '200M+ Prime members paying $139/year. This creates recurring revenue and locks customers into the Amazon ecosystem — they shop more to "get their money\'s worth."',
      },
      {
        name: 'Third-Party Seller Services',
        percentage: 8,
        description:
          'Fees from the 2M+ sellers on the marketplace. Amazon takes a cut of every sale and charges for fulfillment (FBA). This is high-margin, asset-light revenue.',
      },
    ],
    competitiveAdvantage:
      "Amazon's moat is the flywheel effect Jeff Bezos drew on a napkin: lower prices attract more customers, which attracts more sellers, which enables more scale, which lowers prices further. Add Prime's stickiness, AWS's enterprise lock-in, and the logistics network that would cost $100B+ to replicate, and you have a business that's nearly impossible to compete with head-on.",
  },

  financials: {
    metrics: [
      {
        label: 'Revenue (TTM)',
        value: '$638B',
        explanation:
          "One of the highest-revenue companies on Earth. But revenue alone doesn't tell you much about Amazon — the key is understanding which segments drive the profits.",
        sentiment: 'positive',
      },
      {
        label: 'Operating Income',
        value: '$68.6B',
        explanation:
          'Operating margin of ~10.7%, up from ~2% a few years ago. This improvement is the Amazon bull story in one number — the company is shifting from "grow at all costs" to showing what margins look like when the investments mature.',
        sentiment: 'positive',
      },
      {
        label: 'AWS Revenue',
        value: '$110B',
        explanation:
          'Growing ~19% YoY with margins around 35%. AWS alone would be the largest enterprise software company in the world. Its growth rate is key to Amazon\'s overall valuation.',
        sentiment: 'positive',
      },
      {
        label: 'Free Cash Flow',
        value: '$38.2B',
        explanation:
          "Recovered significantly from near-zero during the 2022 over-investment period. This shows Amazon's ability to generate cash when it chooses to, though they typically prefer reinvesting.",
        sentiment: 'positive',
      },
      {
        label: 'Advertising Revenue',
        value: '$56.2B',
        explanation:
          "Growing 24% YoY. This is almost pure profit and it's still underpenetrated. Prime Video ads are just getting started. This segment alone is worth more than most companies.",
        sentiment: 'positive',
      },
      {
        label: 'Capex',
        value: '$83B',
        explanation:
          "Massive capital spending, mostly on AWS data centers and logistics. This is both a strength (building future earnings power) and a risk (if returns on this spending disappoint). It's the biggest debate among Amazon investors.",
        sentiment: 'neutral',
      },
    ],
  },

  valuation: {
    metrics: [
      {
        label: 'P/E Ratio',
        value: '33x',
        industryAvg: '22x',
        explanation:
          "At 33x earnings, you're paying a premium. But Amazon's earnings are still in early innings of margin expansion. If operating margins reach 15%+ (plausible), today's price could look cheap in hindsight.",
      },
      {
        label: 'EV/EBITDA',
        value: '19x',
        industryAvg: '14x',
        explanation:
          'More reasonable than the P/E suggests, because Amazon generates significant EBITDA that gets reinvested. This multiple is what many value-oriented investors focus on.',
      },
      {
        label: 'Price/Sales',
        value: '3.5x',
        industryAvg: '1.2x',
        explanation:
          'Higher than retail peers but justified by the business mix. If Amazon were just a retailer, 3.5x would be absurd. But AWS and advertising carry software-like margins.',
      },
      {
        label: 'PEG Ratio',
        value: '1.3',
        industryAvg: '1.8',
        explanation:
          "A PEG below 1.5 for a company with Amazon's quality and diversification is reasonable. It suggests the stock isn't wildly overpriced relative to growth, but it's not a bargain either.",
      },
    ],
    summary:
      "Amazon's valuation is a tale of two businesses. If you value it as a retailer, it looks expensive. If you value it as a cloud + advertising company with a retail business attached, it looks more reasonable. The margin expansion story is the key — every percentage point of margin improvement unlocks billions in earnings.",
  },

  bullCase: {
    title: 'The Case for Amazon',
    points: [
      'AWS is positioned to benefit enormously from the AI wave — enterprises need cloud infrastructure to run AI workloads, and AWS is the market leader.',
      "Margin expansion has room to run. Amazon's retail margins are still well below Walmart's, and advertising is growing rapidly as a high-margin revenue source.",
      "Prime membership creates an unbreakable customer relationship — once you're in the ecosystem, switching costs are high.",
      "The advertising business is a $50B+ monster that most investors still underappreciate. It's growing faster than Google's ad business.",
      'Healthcare (One Medical, pharmacy), satellites (Project Kuiper), and AI services (Bedrock) provide long-term optionality.',
    ],
  },

  bearCase: {
    title: 'The Case Against Amazon',
    points: [
      'AWS growth has decelerated from 30%+ to ~19%. If cloud spending growth continues to slow, the highest-margin segment gets squeezed.',
      'Capital intensity is enormous — $83B in capex means Amazon needs massive returns just to justify the investment. What if the AI infrastructure buildout disappoints?',
      "Retail competition is intensifying, particularly from Temu and Shein at the low end, and from Walmart's improving e-commerce at the mid-market.",
      'Regulatory risk is real — antitrust scrutiny over marketplace practices and potential forced separation of AWS could cap upside.',
      'At nearly $2T market cap, the law of large numbers makes it harder to move the needle. What new market is big enough to matter?',
    ],
  },

  marketExpectations: {
    impliedGrowth: '~15% annual revenue growth, with operating margins expanding to 12-15%',
    analystConsensus: 'Overweight (avg. target ~$240)',
    pricedIn: [
      'Continued AWS leadership and steady 17-20% cloud growth',
      'Gradual operating margin expansion toward 12%+',
      'Advertising growing 20%+ for the next 2 years',
    ],
    notPricedIn: [
      'A significant re-acceleration in AWS growth from AI workloads',
      'Operating margins reaching 15%+ (the "Amazon becomes a profit machine" scenario)',
      'A material slowdown in consumer spending affecting the retail business',
      'Regulatory action that forces structural changes to the business',
    ],
  },

  technicalContext: {
    rsi: 52,
    rsiInterpretation:
      'RSI of 52 is dead neutral. The stock is in equilibrium — neither buyers nor sellers have conviction. This often precedes a bigger move once a catalyst arrives (usually earnings).',
    trendDescription:
      'Amazon has been trading in a broad range for the past 6 months. The stock rallied strongly off the 2022 lows but has been consolidating. This is typical for mega-caps transitioning from recovery to sustained growth.',
    volatilityNote:
      'Amazon tends to move 5-8% on earnings — it\'s one of the most volatile mega-cap earnings reactions. The stock is particularly sensitive to AWS growth numbers and margin commentary.',
    priceHistory: [
      { month: 'Apr 25', price: 180 },
      { month: 'May 25', price: 192 },
      { month: 'Jun 25', price: 199 },
      { month: 'Jul 25', price: 206 },
      { month: 'Aug 25', price: 188 },
      { month: 'Sep 25', price: 195 },
      { month: 'Oct 25', price: 201 },
      { month: 'Nov 25', price: 210 },
      { month: 'Dec 25', price: 218 },
      { month: 'Jan 26', price: 224 },
      { month: 'Feb 26', price: 215 },
      { month: 'Mar 26', price: 220 },
    ],
  },

  thinkingStep: {
    prompt:
      'Given Amazon\'s massive scale, its margin expansion story, and its aggressive AI capex — would you consider this stock attractive at its current valuation? Why or why not? (1–2 sentences)',
    modelAnswer:
      'Amazon is one of the few companies that can credibly invest $80B+ in capex and still generate rising margins, which makes the margin expansion thesis compelling. However, at ~40x forward earnings, you\'re paying a premium for execution that hasn\'t fully materialized — the stock is attractive if you believe AWS re-acceleration and advertising growth will drive an earnings inflection, but less so if capex doesn\'t translate into proportional returns over the next 2–3 years.',
    strongReasoningIncludes: [
      'Connects the capex investment thesis to a specific expected outcome (margin expansion, AWS growth)',
      'Acknowledges the time horizon — distinguishes between "eventually right" and "right now"',
      'Identifies what could go wrong even if the business keeps growing',
    ],
  },

  decisionResponses: {
    bullish: {
      whatNeedsToHappen: [
        'AWS needs to re-accelerate growth to 22%+ as AI workloads ramp — watch the quarterly AWS growth rate closely.',
        'Operating margins need to keep expanding, with retail approaching breakeven and advertising scaling.',
        'Prime membership growth needs to continue, particularly in international markets where penetration is still low.',
        'Capital spending needs to show ROI — watch for AWS margins to stabilize despite heavy investment.',
      ],
      biggestRisk:
        'AWS growth continues to decelerate while capex remains elevated. This would mean Amazon is spending aggressively without getting the growth payoff, which would crush the stock.',
      keyMetricToWatch:
        "AWS operating margin. If it stays above 30% while revenue accelerates, Amazon's earnings will inflect sharply upward. If margins compress while growth slows, the bull case weakens significantly.",
    },
    bearish: {
      whatNeedsToHappen: [
        'AWS growth needs to decelerate below 15% as cloud spending normalizes and competition from Azure and GCP intensifies.',
        'Retail margins need to stagnate as competition from Temu, Shein, and Walmart pressures pricing.',
        'The massive capex cycle needs to show diminishing returns — particularly the AI infrastructure buildout.',
        'Advertising growth needs to slow as the market matures and regulators scrutinize ad practices.',
      ],
      biggestRisk:
        "The bear case fails if Amazon enters a sustained margin expansion phase. The company has historically chosen growth over profits — if they 'flip the profit switch' more aggressively, earnings could dramatically outpace expectations.",
      keyMetricToWatch:
        'Operating margin trend. If total operating margin stalls below 11% for multiple quarters despite revenue growth, the bear case strengthens. The market will lose patience.',
    },
    neutral: {
      whatNeedsToHappen: [
        'AWS growth stabilizes in the 17-20% range — good but not exciting enough to drive re-rating.',
        'Margin expansion continues but gradually, matching consensus expectations rather than surprising.',
        'Retail business performs steadily without dramatic share gains or losses.',
      ],
      biggestRisk:
        "Amazon is a stock that tends to have big moves around earnings. A neutral stance works in between earnings, but every quarter brings the potential for a 5-8% swing. Be prepared to re-evaluate your position four times a year.",
      keyMetricToWatch:
        "The gap between revenue growth and earnings growth. As long as earnings grow faster than revenue (operating leverage), the stock has fundamental support even if it trades sideways.",
    },
  },
};
