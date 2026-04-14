import type { CompanyProfile } from './types';

export const starbucksProfile: CompanyProfile = {
  id: 'starbucks',
  ticker: 'SBUX',
  name: 'Starbucks',
  emoji: '☕',
  sector: 'Consumer',
  oneLiner: 'A brand moat in a cup — 38,000 stores, but the growth engine is stalling',
  description:
    "Starbucks turned coffee into an everyday premium ritual, building a brand that lets it charge $6 for what costs ~50 cents to make. With ~38,000 stores globally, it\'s reached near-saturation in its home market while betting its future on China (where it faces brutal local competition) and app-based loyalty. Same-store sales turned negative in 2024. Is this a temporary stumble, or the start of maturity drag for a brand people are falling out of love with?",
  dataAsOf: 'FY 2024',
  difficulty: 'intro',
  estimatedMinutes: 10,
  keyFacts: [
    { label: 'Revenue', value: '~$36B', detail: 'Global company-operated and licensed stores' },
    { label: 'Stores', value: '~38,000', detail: 'Globally; ~16,000 in the US, ~7,500 in China' },
    { label: 'Operating Margin', value: '~15%', detail: 'Compressed from ~18% pre-pandemic; wage and input costs pressing down' },
    { label: 'Same-Store Sales', value: '-2% to -6%', detail: 'Recent quarters turned negative in the US and China — a new problem' },
    { label: 'Rewards Members', value: '~33M active', detail: 'US loyalty members drive ~60%+ of transactions' },
    { label: 'China Exposure', value: '~20% of stores, smaller revenue share', detail: 'Intense local competition from Luckin Coffee; pricing pressure' },
  ],
  workflow: {
    business: {
      modelAnswer:
        "Starbucks sells premium coffee and espresso drinks through ~38,000 stores worldwide — a mix of company-operated locations (mostly US and China) and licensed stores run by partners (airports, grocery stores, international). Customers pay ~$5-7 for drinks that cost ~50 cents to produce, giving store-level gross margins above 70%. The business makes money on volume (transactions per store per day) × ticket size (dollars per transaction). A large and growing portion of revenue flows through the mobile app and loyalty program, which both drive higher frequency and reduce labor costs via mobile order-ahead. Secondary revenue: packaged coffee sold at retail (licensed to Nestlé) and some consumer products.",
      strongReasoningIncludes: [
        'Identifies the core unit: coffee stores with premium pricing',
        'Mentions the company-operated vs. licensed model OR the mobile/loyalty system',
        'Shows some grasp of the unit economics (high markup on cheap inputs)',
      ],
    },
    drivers: {
      modelAnswer:
        "Three drivers dominate. (1) Store count — total revenue scales almost linearly with number of locations, so unit growth matters. Starbucks is near saturation in the US but still opening thousands in China and emerging markets. (2) Same-store sales (SSS) — transactions per store × average ticket. This is the single most-watched Starbucks metric; positive SSS means the existing base is growing, negative means it\'s shrinking. (3) Mix and pricing — premium drink mix (more cold beverages, more customization, more food attach) and periodic price increases. Starbucks has relied heavily on pricing over the last 3-4 years because transaction volume has weakened. Ominous sign: when pricing carries growth but volume declines, the next price increase stops working.",
      strongReasoningIncludes: [
        'Identifies store count OR same-store sales as a driver',
        'References pricing / mix as a driver',
        'Shows awareness that pricing without volume is a fragile driver',
      ],
    },
    moat: {
      modelAnswer:
        "Starbucks\'s primary moat is brand — it owns the cognitive shortcut for \"premium coffee\" in most of the world. A secondary moat is scale: real estate advantages (best corners in most cities), supply chain volume, and marketing reach. The mobile app and loyalty program add mild switching costs — saved payment, rewards progression, personalized orders. However, these moats are weaker than they look in 2024. Brand loyalty is eroding among younger consumers who see Starbucks as overpriced and corporate. Scale in China is overwhelmed by Luckin Coffee (~20,000 stores) and others selling at half the price. The switching cost from the app is low — it\'s a convenience layer, not a lock-in. Starbucks still has a moat, but it\'s more \"habit and convenience\" than \"irreplaceable experience.\"",
      strongReasoningIncludes: [
        'Identifies brand as the core moat',
        'References scale, real estate, OR the loyalty app as secondary moat elements',
        'Shows some awareness that the moat is weaker than it used to be',
      ],
    },
    risks: {
      modelAnswer:
        "Three material risks. (1) Maturity in the US market. With ~16,000 stores in a country of 330M, Starbucks is bumping against saturation. Future US growth depends on same-store sales, which are negative. This is the classic mature-retailer problem: once new stores cannibalize old ones, growth stalls. (2) China competition and consumer shift. Luckin Coffee and local chains sell at half Starbucks\'s price in a market where discretionary income is tighter than it was. Starbucks China same-store sales were down ~14% recently. (3) Input cost pressure + wage pressure squeezing margins. Coffee beans, dairy, labor, and real estate all rose sharply post-pandemic; operating margin fell from ~18% to ~15%. A quieter risk: generational brand drift — if Gen Z views Starbucks the way Gen X viewed Dunkin, the brand premium compresses slowly over a decade.",
      strongReasoningIncludes: [
        'Identifies US saturation OR the mature-retailer growth problem',
        'Names the China competition risk specifically (Luckin, local chains, pricing pressure)',
        'References margin compression from wages, inputs, or operating costs',
      ],
    },
    valuation: {
      modelAnswer:
        "Starbucks is priced in an awkward middle — neither a cheap value stock nor a clear growth story. At ~22-25x forward earnings, the multiple suggests the market sees a temporary slowdown that will reverse, not a structural decline. That\'s the bet you\'re making at the current price. If you think the US is just going through a rough patch and China stabilizes, this could be a decent entry point for a quality franchise. If you think this is the start of secular decline — saturation in the US, permanent Chinese competition, brand fatigue — then 22-25x is still too high and the multiple should compress toward 15x (where mature consumer brands trade). This is the classic growth-to-value transition question that investors get wrong both directions: too optimistic about recoveries, too pessimistic about genuine maturity.",
      strongReasoningIncludes: [
        'Identifies the valuation as growth-to-value transition territory (not clearly one or the other)',
        'Reasons about what the current multiple implies about future growth',
        'Names what would shift the valuation in either direction',
      ],
    },
    thesis: {
      modelAnswer:
        "BULL THESIS: The US slowdown is temporary — driven by post-pandemic behavior normalization and inflation fatigue, both of which fade. A new CEO (Brian Niccol, from Chipotle) is executing a clear turnaround: simplifying the menu, fixing store throughput, rebuilding morning daypart. China will stabilize as the economy recovers and Starbucks\'s premium positioning differentiates from price competitors. Meanwhile the business prints massive cash flow, buys back stock, and pays a growing dividend. At ~22x earnings for a global brand with decades of runway, this is a buy.\n\nBEAR THESIS: Starbucks is a mature retailer that got addicted to price increases. Now pricing is maxed out, volumes are declining, and the brand is losing relevance with younger consumers. China is structurally broken — Luckin has proven that Chinese consumers won\'t pay Starbucks prices for commodity coffee. The CEO change is a symptom of a company that knows it\'s in trouble. At 22-25x, the market is pricing in a recovery that isn\'t coming. Earnings should compress and the multiple should compress with them — fair value is more like $70-80 than $100+.",
      strongReasoningIncludes: [
        'Picks a clear side (bull or bear)',
        'References specific elements: US saturation, China competition, new CEO, pricing, OR brand relevance',
        'Makes the case falsifiable — what would prove it wrong',
      ],
    },
    verdict: {
      modelAnswer:
        "A reasonable verdict is PASS or WAIT unless you have strong conviction on the Niccol turnaround. The business is still high-quality, but at 22-25x earnings with negative same-store sales and China under pressure, the margin of safety is thin. Two specific triggers would change the answer. (1) Positive SSS — if US same-store sales turn positive for two consecutive quarters, the bull case is validating and the stock likely re-rates higher. (2) A reset lower — if the stock falls to 15-17x earnings during continued weakness, the downside is mostly priced in and buying becomes compelling. The in-between — buying at 22-25x with negative trends and no clear inflection — is the worst of both worlds.",
      strongReasoningIncludes: [
        'Commits to a specific verdict: buy, pass, or wait',
        'Names a measurable trigger (SSS turning positive, multiple compression, China stabilization)',
        'The trigger is observable from reported numbers or price action',
      ],
    },
  },
};
