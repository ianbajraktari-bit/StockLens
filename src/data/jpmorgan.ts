import type { Company } from './types';

export const jpmorgan: Company = {
  id: 'jpmorgan',
  name: 'JPMorgan Chase',
  ticker: 'JPM',
  logo: '🏦',
  sector: 'Finance & Payments',
  sectorId: 'finance',
  investmentType: 'Cyclical Leader',
  tagline:
    'The most consistently profitable bank in America, setting the standard for diversified financial services',
  color: '#003087',
  lastUpdated: 'March 2026',

  whatMattersNow: {
    title: 'What Matters Right Now',
    drivers: [
      {
        label: 'Interest rate trajectory and NII outlook',
        description:
          'Net interest income is JPMorgan\'s largest revenue component. The Fed\'s rate path directly determines the spread between what JPMorgan earns on loans and pays on deposits. NII guidance of ~$103B for 2026 assumes gradual normalization — faster cuts would compress margins.',
        category: 'macro',
      },
      {
        label: 'Credit cycle position',
        description:
          'Consumer credit card delinquencies and commercial real estate stress are the key credit metrics to watch. A deterioration would force higher loan loss provisions, directly reducing earnings. JPMorgan\'s fortress balance sheet means survival is never in question — but earnings impact could be significant.',
        category: 'macro',
      },
      {
        label: 'Investment banking recovery',
        description:
          'M&A activity is recovering after a two-year drought. If CEO confidence continues to improve and deal pipelines convert to completed transactions, JPMorgan\'s CIB segment — one of the top two globally — will see meaningful fee revenue upside.',
        category: 'industry',
      },
      {
        label: 'Jamie Dimon succession timeline',
        description:
          'Dimon has led JPMorgan since 2005 and is the most respected bank CEO in the industry. His eventual departure represents a key-person risk. The market has historically assigned a "Dimon premium" to the stock that could partially unwind during a leadership transition.',
        category: 'company-specific',
      },
    ],
  },

  whatChanged: {
    summary:
      'JPMorgan\'s story has evolved from "pandemic recovery beneficiary" to "best-in-class financial compounder." The stock trades near all-time highs as the market prices in sustained operational excellence.',
    changes: [
      {
        label: 'Profitability: industry-leading and consistent',
        direction: 'positive',
        description:
          'ROTCE of 20% continues to set the standard for large-cap banks. Net income of $57B in 2025 demonstrates the earnings power of the diversified franchise across all economic conditions.',
      },
      {
        label: 'Payments business: emerging growth engine',
        direction: 'positive',
        description:
          'J.P. Morgan Payments posted record $5.1B in Q4 2025 revenue. The payments infrastructure is becoming embedded in global commerce, creating a recurring revenue stream with Visa-like characteristics inside a bank.',
      },
      {
        label: 'NII outlook: normalizing from peak levels',
        direction: 'mixed',
        description:
          'Net interest income guidance of ~$103B for 2026 implies modest compression from 2025 peaks. The high-rate tailwind that boosted bank earnings is fading, though the normalization is gradual rather than sharp.',
      },
      {
        label: 'Valuation: at the upper end of historical range',
        direction: 'negative',
        description:
          'At ~14x earnings, JPMorgan is at the high end of its historical valuation range for a bank. The premium is earned, but the upside from further multiple expansion is limited.',
      },
    ],
  },

  business: {
    description:
      "JPMorgan Chase is the largest bank in the United States by assets ($4.4 trillion) and one of the most profitable financial institutions in the world. The firm operates across four major segments: Consumer & Community Banking (Chase retail banking and credit cards), Corporate & Investment Bank (Wall Street dealmaking and trading), Commercial Banking (mid-sized and large business lending), and Asset & Wealth Management. Under CEO Jamie Dimon's leadership since 2005, JPMorgan has consistently outperformed peers on return on tangible common equity (ROTCE), maintained fortress-level capital reserves, and invested aggressively in technology. The bank processes roughly $10 trillion in payments daily and serves nearly half of all U.S. households.",
    howItMakesMoneyTitle: 'How JPMorgan Chase Makes Money',
    revenueStreams: [
      {
        name: 'Consumer & Community Banking',
        percentage: 34,
        description:
          'Retail banking, credit cards, auto loans, and home lending. Chase is the largest credit card issuer in the U.S. and operates over 4,700 branches. This segment generates steady fee income and net interest income from consumer deposits and lending.',
      },
      {
        name: 'Corporate & Investment Bank',
        percentage: 34,
        description:
          'Investment banking advisory, debt and equity underwriting, fixed income and equities trading, and treasury services. This is the Wall Street engine of the firm, generating fees from M&A deals, IPOs, and trading activity across global markets.',
      },
      {
        name: 'Commercial Banking',
        percentage: 14,
        description:
          'Lending, treasury management, and investment banking services for mid-sized companies and large corporations. This segment bridges the gap between retail and institutional banking, providing steady lending income.',
      },
      {
        name: 'Asset & Wealth Management',
        percentage: 11,
        description:
          'Investment management, financial advisory, and private banking for institutional clients and high-net-worth individuals. The AWM segment delivered a 44% ROE in Q4 2025 and $1.8 billion in net income, making it one of the most profitable wealth management franchises globally.',
      },
      {
        name: 'Corporate',
        percentage: 7,
        description:
          'Treasury and chief investment office functions, centralized technology infrastructure, and other corporate-level activities that support the overall enterprise.',
      },
    ],
    competitiveAdvantage:
      "JPMorgan's competitive advantage rests on scale, diversification, and execution discipline. No other bank matches its breadth across consumer banking, investment banking, payments, and asset management. The firm's technology spending — over $17 billion annually — has built a digital banking platform that rivals fintech challengers while retaining the trust and regulatory infrastructure of a 225-year-old institution. J.P. Morgan Payments posted a record $5.1 billion in revenue in Q4 2025 alone, demonstrating how the bank's infrastructure is becoming embedded in global commerce. The fortress balance sheet ($362 billion in equity) allows JPMorgan to lend aggressively during downturns when competitors pull back, consistently gaining market share through economic cycles.",
  },

  financials: {
    metrics: [
      {
        label: 'Revenue (Managed)',
        value: '$185.6B',
        explanation:
          "JPMorgan's 2025 managed revenue of $185.6 billion makes it one of the highest-revenue financial institutions globally. Managed revenue includes net interest income plus noninterest revenue on a tax-equivalent basis, providing a clearer picture of the bank's earning power across all segments.",
        sentiment: 'positive',
      },
      {
        label: 'Net Income',
        value: '$57.0B',
        explanation:
          'Net income of $57 billion represents an extraordinary level of profitability for a bank. This translates to a net margin of approximately 31%, reflecting JPMorgan\'s operating leverage and its ability to generate returns across all four business segments simultaneously.',
        sentiment: 'positive',
      },
      {
        label: 'Earnings Per Share',
        value: '$20.02',
        explanation:
          "Q4 2025 EPS of $5.23 beat analyst estimates of $4.92 by 6%, capping a strong fiscal year. Full-year EPS of $20.02 reflects both strong operating performance and the benefit of share repurchases reducing the share count over time.",
        sentiment: 'positive',
      },
      {
        label: 'ROTCE',
        value: '20%',
        explanation:
          'Return on tangible common equity of 20% is the gold standard in banking. Most large banks target 12-15% ROTCE. JPMorgan consistently delivers 18-21%, which means it generates significantly more profit per dollar of shareholder equity than its peers, justifying its premium valuation.',
        sentiment: 'positive',
      },
      {
        label: 'ROE',
        value: '17%',
        explanation:
          "Return on equity of 17% includes goodwill and intangible assets in the denominator, making it a more conservative measure than ROTCE. Even on this basis, JPMorgan leads the large-bank peer group, reflecting the quality of its asset base and earnings consistency.",
        sentiment: 'positive',
      },
      {
        label: 'NII Guidance (2026)',
        value: '~$103B',
        explanation:
          "Management's 2026 net interest income guidance of approximately $103 billion assumes a moderating rate environment. NII is the bank's largest revenue component, representing the spread earned between what it charges borrowers and pays depositors. The guidance implies modest compression from 2025 levels as rates normalize, with adjusted expenses projected at approximately $105 billion.",
        sentiment: 'neutral',
      },
    ],
  },

  valuation: {
    metrics: [
      {
        label: 'P/E Ratio',
        value: '~14x',
        industryAvg: '12x',
        explanation:
          "A P/E of roughly 14x places JPMorgan at a modest premium to the large-bank average of 12x. This premium is justified by the bank's consistently superior ROTCE and its diversified earnings base, which provides more stability through economic cycles than peers with concentrated business models.",
      },
      {
        label: 'EV/EBITDA',
        value: '~10x',
        industryAvg: '8x',
        explanation:
          "EV/EBITDA is less commonly used for banks since EBITDA doesn't capture the nuances of banking economics (net interest income, provision expenses). That said, at roughly 10x, JPMorgan trades above the banking median, reflecting the market's willingness to pay more for best-in-class management and execution.",
      },
      {
        label: 'Price/Sales',
        value: '~4.3x',
        industryAvg: '3.0x',
        explanation:
          "A price-to-sales ratio of 4.3x is elevated relative to the banking sector average. This reflects JPMorgan's ability to convert revenue into profit more efficiently than peers — if you can earn a 31% net margin, the market will pay more per dollar of revenue.",
      },
      {
        label: 'PEG Ratio',
        value: '~1.8',
        industryAvg: '1.5',
        explanation:
          "A PEG ratio of 1.8 suggests JPMorgan is fairly valued relative to its growth rate. For a mature bank growing earnings at high single digits, this is reasonable. The ratio indicates that investors are not getting the stock cheaply on a growth-adjusted basis, but neither are they overpaying for a franchise of this caliber.",
      },
    ],
    summary:
      "JPMorgan trades at a deserved premium to the banking sector. The valuation reflects the market's confidence in the bank's ability to generate industry-leading returns through any economic environment. The key debate is whether the premium has room to expand further or whether the stock's strong run has already priced in the operational excellence that Jamie Dimon's leadership delivers. At ~14x earnings, it is not an expensive stock by broader market standards, but it is at the upper end of its historical range for banks.",
  },

  bullCase: {
    title: 'The Case for JPMorgan Chase',
    points: [
      'JPMorgan consistently delivers 18-21% ROTCE, well above the industry average of 12-15%, demonstrating a structural earnings advantage that justifies its premium valuation and makes it a compounding machine over time.',
      'J.P. Morgan Payments is emerging as a dominant global payments platform, posting record revenue of $5.1 billion in Q4 2025. As commerce continues shifting to digital channels, this embedded infrastructure becomes increasingly valuable.',
      'The fortress balance sheet ($4.4 trillion in assets, $362 billion equity) positions JPMorgan to gain market share during economic downturns, when weaker competitors pull back from lending — the bank has historically emerged from recessions stronger than it entered them.',
      'The investment banking and trading franchise is among the top two globally, and with M&A activity recovering strongly into 2026, fee revenue has significant upside as CEO confidence and dealmaking pipelines expand.',
      'Annual technology investment exceeding $17 billion gives JPMorgan digital capabilities rivaling fintech challengers while retaining the scale advantages, regulatory moat, and customer trust of the largest incumbent bank.',
    ],
  },

  bearCase: {
    title: 'The Case Against JPMorgan Chase',
    points: [
      'Net interest income guidance of ~$103 billion for 2026 implies modest compression from 2025 levels as the Federal Reserve eases rates, which could disappoint investors who have become accustomed to elevated NII during the high-rate cycle.',
      'Credit quality remains the cyclical wildcard — consumer credit card delinquencies and commercial real estate stress could force meaningful increases in loan loss provisions if the economy weakens, directly reducing earnings.',
      'Jamie Dimon\'s eventual departure represents a key-person risk. While the succession plan is well-developed, the stock has historically traded at a "Dimon premium" that could partially unwind during a leadership transition.',
      'At roughly 14x earnings and near all-time highs, much of the operational excellence is already reflected in the stock price. The upside from multiple expansion is limited for a bank, even one of this quality.',
      'Regulatory headwinds including Basel III endgame rules and potential increases in capital requirements could constrain return on equity by forcing the bank to hold more capital against its risk-weighted assets.',
    ],
  },

  marketExpectations: {
    impliedGrowth: '~7-9% annual EPS growth over the next 3 years',
    analystConsensus: 'Buy (avg. target ~$305)',
    pricedIn: [
      'Continued industry-leading ROTCE in the 18-20% range',
      'Stable credit quality with manageable loan loss provisions',
      'Recovery in investment banking fees driven by increased M&A activity',
      'Gradual NII normalization as rate cuts proceed slowly',
    ],
    notPricedIn: [
      'A sharp recession causing significant credit losses across consumer and commercial portfolios',
      'Regulatory capital requirements that meaningfully constrain lending and capital return',
      'A faster-than-expected rate cutting cycle that compresses net interest margins below guidance',
      'Accelerating growth in JPMorgan Payments becoming a standalone value driver comparable to Visa-like payment networks',
    ],
  },

  technicalContext: {
    rsi: 45,
    rsiInterpretation:
      'RSI of 45 indicates the stock is in neutral-to-slightly-oversold territory. The recent pullback from the January 2026 peak of $298 has brought the stock to a level where buying pressure has historically emerged for JPMorgan.',
    trendDescription:
      'JPMorgan was in a steady uptrend from April 2025 through January 2026, gaining roughly 27%. The stock has since pulled back approximately 6% from its highs, entering a consolidation phase. The broader trend remains constructive as long as the stock holds above the $270-275 support zone.',
    volatilityNote:
      'JPMorgan typically moves 2-4% on earnings days and is sensitive to Federal Reserve rate decisions and macroeconomic data releases. As a large-cap financials leader, it tends to be less volatile than the broader market during normal periods but can sell off sharply during financial stress events.',
    priceHistory: [
      { month: 'Apr 25', price: 235 },
      { month: 'May 25', price: 252 },
      { month: 'Jun 25', price: 265 },
      { month: 'Jul 25', price: 258 },
      { month: 'Aug 25', price: 245 },
      { month: 'Sep 25', price: 260 },
      { month: 'Oct 25', price: 275 },
      { month: 'Nov 25', price: 282 },
      { month: 'Dec 25', price: 290 },
      { month: 'Jan 26', price: 298 },
      { month: 'Feb 26', price: 285 },
      { month: 'Mar 26', price: 280 },
    ],
  },

  decisionResponses: {
    bullish: {
      whatNeedsToHappen: [
        'Net interest income needs to hold near the ~$103 billion guidance for 2026, confirming that the rate normalization cycle is not destroying the bank\'s core earnings engine.',
        'Credit quality must remain stable, with charge-off rates staying below historical averages. Watch consumer credit card delinquency trends quarterly.',
        'Investment banking revenue needs to continue recovering as M&A pipelines convert to completed deals, driving fee income growth in the CIB segment.',
        'J.P. Morgan Payments should sustain its growth trajectory, demonstrating that the bank is capturing secular share in digital commerce infrastructure.',
      ],
      biggestRisk:
        'A recession that triggers a credit cycle would simultaneously increase loan loss provisions, reduce lending volumes, and compress investment banking fees — hitting all four business segments at once. JPMorgan would survive any recession, but the stock could decline 20-30% in that scenario before recovering.',
      keyMetricToWatch:
        'Return on tangible common equity (ROTCE). As long as JPMorgan sustains 18%+ ROTCE, the bull thesis and the premium valuation are intact. A sustained drop below 16% would signal structural deterioration.',
    },
    bearish: {
      whatNeedsToHappen: [
        'The economy needs to weaken meaningfully, causing consumer and commercial credit losses to rise well above current provision levels.',
        'Net interest income must decline faster than expected as rate cuts compress margins and loan demand softens simultaneously.',
        'Basel III endgame or other regulatory changes need to force JPMorgan to hold substantially more capital, capping ROE potential.',
        'Investment banking activity needs to stall as market volatility or economic uncertainty freezes dealmaking pipelines.',
      ],
      biggestRisk:
        'The bear case fails if the economy achieves a soft landing and rates normalize gradually. In that scenario, JPMorgan continues compounding earnings at high single digits with industry-leading returns, and the stock grinds higher. Shorting the best-managed bank in America requires a strong macroeconomic conviction.',
      keyMetricToWatch:
        'Net charge-off rates across the consumer and commercial lending portfolios. Rising charge-offs are the earliest signal that credit quality is deteriorating and that loan loss provisions will need to increase.',
    },
    neutral: {
      whatNeedsToHappen: [
        'The economy muddles through with modest growth — not strong enough to accelerate lending, but not weak enough to cause credit stress.',
        'Net interest income normalizes gradually in line with guidance, offsetting any weakness with steady fee income growth.',
        'The stock trades in a range as the market prices in a stable but unspectacular earnings trajectory for banks.',
      ],
      biggestRisk:
        'Financial stocks tend to be binary around macro inflection points — they either rally on economic strength or sell off on recession fears. A neutral stance works in a goldilocks environment but leaves you exposed to a sharp move in either direction if the macro picture shifts.',
      keyMetricToWatch:
        'The spread between 2-year and 10-year Treasury yields (the yield curve). A steepening curve supports bank profitability, while an inverted or flattening curve signals economic stress and margin pressure.',
    },
  },
};
