import type { CompanyProfile } from './types';

export const homeDepotProfile: CompanyProfile = {
  id: 'homedepot',
  ticker: 'HD',
  name: 'Home Depot',
  emoji: '🔨',
  sector: 'Retail — Home Improvement',
  oneLiner: 'The default hardware store for America — a duopoly with Lowe\'s, leveraged to housing',
  description:
    "Home Depot is the largest home improvement retailer in the US, with ~2,300 stores and a commanding share of both DIY consumers and professional contractors. Along with Lowe's, it operates in a near-duopoly — a rare structure in retail. The stock compounds with the US housing cycle: when homes turn over, people renovate; when rates rise, renovation slows. The pro customer (contractors, plumbers, electricians) is the secret weapon — higher-frequency, higher-ticket, stickier than DIY. The question is whether Home Depot's moat survives a prolonged housing slowdown, and whether Amazon or a digital-first upstart can eventually penetrate a category where 'I need it today' has always favored physical stores.",
  dataAsOf: 'FY 2024',
  difficulty: 'intro',
  estimatedMinutes: 10,
  keyFacts: [
    { label: 'Revenue', value: '~$159B', detail: 'FY2024 — down slightly YoY as housing-sensitive demand softened' },
    { label: 'Operating Margin', value: '~13.5%', detail: 'Among the best in big-box retail' },
    { label: 'Stores', value: '~2,340', detail: 'US, Canada, Mexico — saturated domestic footprint' },
    { label: 'Pro Customer Share', value: '~50% of sales', detail: 'Contractors and trades — higher ticket, higher frequency than DIY' },
    { label: 'Return on Invested Capital', value: '~30%+', detail: 'Unusually high for a retailer — signals real pricing power' },
    { label: 'P/E Ratio', value: '~24-27x', detail: 'Slight premium to market — reflects quality and defensive moat' },
  ],
  workflow: {
    business: {
      modelAnswer:
        "Home Depot sells home improvement products — lumber, tools, paint, appliances, plumbing, electrical — across two customer types. DIY consumers (~50%) come in for a weekend project; pros (~50%) are contractors, electricians, plumbers buying for their businesses. Revenue is transactional — there's no subscription, no recurring contract. Home Depot makes money on a gross margin spread (~33%) between what it buys from suppliers at scale and what it sells to customers, and amplifies that through high inventory turns and cost discipline. The pro customer is critical: they buy more per trip, more often, and are less price-sensitive because they're passing costs through to their own customers. Home Depot is really two businesses sharing the same real estate.",
      strongReasoningIncludes: [
        'Separates DIY from Pro as distinct customer segments',
        'Describes the retail gross-margin spread business model',
        'Recognizes the Pro customer is disproportionately important to profitability',
      ],
    },
    drivers: {
      modelAnswer:
        "Three drivers. (1) Existing home sales turnover — when houses change hands, new owners renovate. When housing freezes (as in 2023-24 with mortgage rates at 7%+), project demand dries up. (2) Home price appreciation — homeowners who feel wealthy renovate more; when home values drop, discretionary renovation gets pushed out. (3) Pro demand / housing starts / repair-and-remodel activity — professional contractors drive the steady base-rate of revenue, less cyclical than DIY but still tied to housing activity. Secondary drivers: weather (bad weather = more repairs), commodity prices for lumber (higher prices can lift revenue even without more units), and the growth of Home Depot's own online / installation services. Interest rates are the master switch — they move housing turnover, which moves everything else.",
      strongReasoningIncludes: [
        'Identifies housing activity (turnover, starts, rates) as the primary macro driver',
        'Distinguishes Pro demand from DIY demand in driver mix',
        'References interest rates or housing prices as a specific mechanism',
      ],
    },
    moat: {
      modelAnswer:
        "Home Depot's moat is scale economics + location + a supplier relationship advantage. Scale: Home Depot's buying power lets it source cheaper than regional competitors — a pressure-treated 2x4 costs it less than a local lumber yard pays wholesale. Location: there are ~2,340 stores, each an expensive physical asset with zoning, parking, and loading-dock access a new entrant could never replicate nationally. Supplier relationships: national brands (Milwaukee, DeWalt, Behr) give Home Depot exclusive SKUs and preferential pricing because Home Depot is their #1 channel. Plus a duopoly structure with Lowe's — the two coexist without destructive price wars. The moat is NOT a network effect and it's NOT brand love from consumers — it's the physics of cheap inventory, cheap real estate at scale, and a pro customer base that's sticky because of the 'I need it in 30 minutes' convenience factor.",
      strongReasoningIncludes: [
        'Identifies scale economics (purchasing power, store network) as the primary moat',
        'References the duopoly structure with Lowe\'s as stabilizing',
        'Notes the moat is rooted in physical / logistical advantages, not brand',
      ],
    },
    risks: {
      modelAnswer:
        "Three real risks. (1) A prolonged housing freeze. If mortgage rates stay above 6% for 3+ years, existing home sales could structurally shift lower, compressing Home Depot's core demand driver for an extended period — not a cycle, a plateau. (2) Amazon + digital competitors for commodity categories. Paint, small tools, and anything a contractor can order a day in advance is at risk of online substitution. The 'I need it today' advantage protects the big categories but erodes at the edges. (3) Pro customer share shift to specialty distributors — Ferguson in plumbing, Ferguson and Wesco in electrical — which offer deeper inventory and better service for large contractors. Home Depot has pushed hard into pro (acquired SRS in 2024 for $18B), signaling it sees this threat. A quieter risk: operating margins are already industry-leading, leaving limited room for further expansion — growth has to come from revenue, which ties back to housing.",
      strongReasoningIncludes: [
        'Names housing-cycle risk as structural, not just cyclical',
        'Identifies a specific digital / Amazon threat or specialty-distributor threat',
        'References a margin-plateau or growth-ceiling risk',
      ],
    },
    valuation: {
      modelAnswer:
        "Home Depot trades at ~24-27x forward earnings — a modest premium to the ~20x market multiple, which reflects quality (30%+ ROIC, duopoly position, consistent capital returns) but not euphoria. The valuation assumes: mid-single-digit revenue growth across the cycle (weaker in housing downturns, stronger in recoveries), margin stability around 13-14%, and steady buybacks continuing to compound EPS at high-single-digits. This is defensible pricing — not a bargain, not a bubble. The multiple expands above 27x when the housing cycle turns positive (lower rates, more transactions) and compresses below 22x during housing recessions. The entire equity is a bet on the housing cycle, mean-reverting around a very high-quality business.",
      strongReasoningIncludes: [
        'Identifies the valuation as quality / cyclical compounder, not growth or value',
        'Notes the multiple tracks the housing cycle',
        'References specific assumptions (growth rate, margin, buyback contribution)',
      ],
    },
    thesis: {
      modelAnswer:
        "BULL THESIS: Home Depot is a rate-cut trade with a quality wrapper. The moment mortgage rates drop meaningfully below 6%, pent-up housing turnover unlocks years of deferred renovation demand. In the meantime, the pro business grows through SRS and is structurally less cyclical. The duopoly with Lowe's means no destructive pricing, and operating margins at 13%+ compound reliably into buybacks and dividends. At 25x earnings with 8-10% total-return algorithm, this is a 'wait for the cycle, collect the dividend' compounder.\n\nBEAR THESIS: Home Depot has peaked. Housing affordability is at generational lows and even rate cuts may not unlock the scale of pent-up demand the bull case assumes. Operating margins at ~13% leave little room for expansion — revenue growth IS the thesis, and revenue has gone nowhere for two years. Amazon is a slow grind on the long tail, and specialty distributors chip away at the pro segment. At 25x for a retailer, you're paying a premium for quality but getting no multiple expansion — the total return depends entirely on the housing cycle turning, which it may not.",
      strongReasoningIncludes: [
        'Commits to a bull or bear case',
        'References housing cycle, pro business, or a specific competitor',
        'Names a specific metric or event that would confirm / refute the thesis',
      ],
    },
    verdict: {
      modelAnswer:
        "Reasonable verdict: HOLD or ACCUMULATE on weakness. Home Depot is a well-run business trading at a reasonable price — not a compelling buy, not a compelling sell. If I don't own it, I'd wait for either (a) a housing recession that drops the multiple below ~20x (has happened twice in the last decade), or (b) clear signals that housing turnover is reaccelerating (existing home sales rising 3+ consecutive months, mortgage rates below 5.5%). I'd reconsider the position if operating margins contract meaningfully for two consecutive quarters, or if Amazon starts genuinely breaking into the commodity categories (paint, small hardware). I'd rather own Home Depot at a 19x multiple than any lower-quality retailer at a cheaper price.",
      strongReasoningIncludes: [
        'Commits to a specific action (buy, hold, pass, wait)',
        'Names a specific price, multiple, or macro condition',
        'The condition is observable from public data',
      ],
    },
  },
};
