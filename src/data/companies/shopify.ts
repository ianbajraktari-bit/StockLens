import type { CompanyProfile } from './types';

export const shopifyProfile: CompanyProfile = {
  id: 'shopify',
  ticker: 'SHOP',
  name: 'Shopify',
  emoji: '🛍️',
  sector: 'E-commerce / SaaS',
  oneLiner: 'The picks-and-shovels of independent e-commerce — arming merchants to fight Amazon',
  description:
    "Shopify gives small and mid-size merchants the software stack to run their own online store — instead of renting space on Amazon. ~10% of US e-commerce now flows through Shopify stores. The business mixes a steady SaaS subscription layer with a much bigger, faster-growing 'Merchant Solutions' layer (payments, shipping, capital) that scales with merchant GMV. The model is powerful but the economics are thinner than pure SaaS, competition is real, and the valuation has always priced Shopify like a winner. Is this the Amazon alternative, or Amazon's long-tail prey?",
  dataAsOf: 'FY 2024',
  difficulty: 'standard',
  estimatedMinutes: 12,
  keyFacts: [
    { label: 'Revenue', value: '~$8.9B', detail: 'FY2024 — grew ~26% YoY' },
    { label: 'GMV', value: '~$290B', detail: 'Gross merchandise volume processed through Shopify stores' },
    { label: 'Gross Margin', value: '~51%', detail: 'Blended — subscription ~80%+, merchant solutions ~40%' },
    { label: 'Merchant Solutions', value: '~74% of revenue', detail: 'Payments, shipping, capital — scales with GMV, lower margin than subscription' },
    { label: 'Free Cash Flow', value: '~$1.6B', detail: 'Positive and growing after the 2022-23 cost reset' },
    { label: 'P/E Ratio', value: '~70-90x fwd', detail: 'Priced as a high-growth compounder' },
  ],
  workflow: {
    business: {
      modelAnswer:
        "Shopify sells the infrastructure a merchant needs to run an online store without Amazon. That splits into two layers. (1) Subscription Solutions: monthly SaaS fee for the storefront software — high-margin (~80%+), recurring, the easy-to-understand part. (2) Merchant Solutions: the bigger and faster-growing layer — Shopify Payments (processing fees on every transaction), Shopify Shipping, Shopify Capital (merchant loans), and checkout tools. Merchant Solutions scales directly with merchant GMV (~$290B processed in 2024), so when the merchants Shopify serves grow, Shopify grows more than proportionally. This is why Shopify isn't really a SaaS company anymore — it's a commerce platform that takes a cut of economic activity.",
      strongReasoningIncludes: [
        'Separates subscription from merchant solutions — not just "sells e-commerce software"',
        'Identifies that merchant solutions is the larger / faster-growing layer',
        'Connects revenue to GMV — Shopify grows when its merchants grow',
      ],
    },
    drivers: {
      modelAnswer:
        "The primary driver is merchant GMV growth — a function of (a) number of active merchants, (b) average merchant size, and (c) attach rate of merchant solutions (payments penetration in particular). Secondary: the shift from 'sell on Amazon' to 'own your own brand and store' — every DTC-native brand that chooses Shopify over a marketplace is a structural win. Third: international expansion, where Shopify's US penetration is deeper than elsewhere. A quieter driver is Shop Pay adoption — when consumers use Shop Pay across multiple Shopify stores, switching costs rise for the merchant. The thing that mostly DOESN'T drive revenue anymore is pure subscription growth — the ARPU story is on merchant solutions attach.",
      strongReasoningIncludes: [
        'Names GMV (or merchant volume) as the core driver',
        'References payments attach rate or merchant solutions penetration',
        'Identifies the independent-brand / anti-Amazon trend as a secular driver',
      ],
    },
    moat: {
      modelAnswer:
        "Shopify's moat is high switching costs + a developing network effect, but both are real and narrower than investors often assume. Switching costs: once a merchant runs their catalog, customer data, fulfillment rules, and apps on Shopify, moving is painful — not impossible, but slow and risky. The app ecosystem (thousands of third-party apps tightly integrated) compounds this. Network effect: Shop Pay, which remembers a consumer's payment info across all Shopify stores, creates some two-sided dynamics — more consumers using Shop Pay makes the checkout more valuable for merchants, which encourages more merchants to stay. The moat is NOT scale economics the way Amazon's is — cloud costs and payment processing rates are industry-standard, and Shopify doesn't have unique cost advantages.",
      strongReasoningIncludes: [
        'Identifies switching costs as the primary moat',
        'Distinguishes this from pure network effects or scale economics',
        'Acknowledges the moat has real limits — merchants can and do leave',
      ],
    },
    risks: {
      modelAnswer:
        "Four structural risks. (1) GMV exposure — merchant solutions revenue tracks consumer spending. A consumer recession compresses Shopify directly, and more than the subscription revenue would suggest. (2) Amazon and TikTok Shop competition — Amazon's 'Buy with Prime' specifically targets Shopify merchants, and social commerce could pull GMV to platforms Shopify doesn't sit on. (3) Take-rate ceiling — Shopify extracts maybe 3% of GMV today; investors often assume this can keep rising, but merchants notice fees and will push back as attach rates mature. (4) Capex creep from Shopify Fulfillment — the company tried to build a fulfillment network, abandoned it (sold to Flexport in 2023), and may have to revisit that problem. Also: this is an emerging-economy-exposed business — a global slowdown hits Shopify harder than most SaaS names.",
      strongReasoningIncludes: [
        'Names consumer spending / GMV sensitivity as a structural risk',
        'Identifies Amazon (or a specific competitor like TikTok Shop) as a real threat',
        'References take-rate, regulation, or another specific monetization risk',
      ],
    },
    valuation: {
      modelAnswer:
        "Shopify is priced as a premium growth compounder — ~70-90x forward earnings, well above any mature SaaS peer. That pricing assumes: (a) GMV continues to grow 20%+ for many years, (b) take rates expand from ~3% toward 4%+, (c) operating margins scale meaningfully from current ~15% toward 25%+, and (d) international penetration catches up to US levels. If all four are true, the stock is fine. If even two of the four disappoint, the multiple compression is severe — Shopify has traded anywhere between 20x and 150x earnings over the last five years, which tells you how much of the valuation is sentiment, not math. This is a 'pay for the future' stock, not a 'pay for the business' stock.",
      strongReasoningIncludes: [
        'Identifies Shopify as growth / high-multiple, not value or turnaround',
        'Names specific assumptions embedded in the price (GMV growth, margin expansion, take rate)',
        'Notes the multiple is sentiment-sensitive, not a stable anchor',
      ],
    },
    thesis: {
      modelAnswer:
        "BULL THESIS: Shopify is the default platform for independent commerce in an internet that's rejecting Amazon centralization. GMV compounds at 20%+ indefinitely as more brands go direct, more retail shifts online, and more international merchants adopt. Operating leverage finally kicks in — the 2022-23 cost reset means every incremental dollar of revenue falls to the bottom line. At 70x earnings you're not paying for today, you're paying for a business that could be $20B+ in revenue and 25% margins by 2030. That's a real compounder.\n\nBEAR THESIS: Shopify's growth depends on GMV growing 20%+, take rate expanding, margins scaling, AND Amazon not eating its lunch — too many things have to go right. Consumer spending is cyclical, and Shopify revenue is more cyclical than investors appreciate. Amazon's Buy with Prime, TikTok Shop, and a revived Etsy are all fighting for the same merchant mindshare. Meanwhile the stock trades at 70x+ earnings, which gives you no margin of safety. A 10-point multiple compression alone is a ~15% drawdown — and multiple compressions here tend to be 50-point moves.",
      strongReasoningIncludes: [
        'Commits to a clear bull or bear case',
        'References the specific growth/multiple tension or a named competitor',
        'The case is falsifiable — names a metric that would prove it wrong',
      ],
    },
    verdict: {
      modelAnswer:
        "Reasonable verdict: PASS at current valuation, but keep a watchlist. Shopify's business is genuinely excellent — merchant lock-in is real, the e-commerce secular trend is real, and management has shown they can cut costs when they need to. But at 70x+ forward earnings, everything has to go right, and Shopify has a long history of ~40% drawdowns whenever growth decelerates by even 5 percentage points. I'd be a buyer if (a) forward P/E drops below ~40x while GMV growth stays above 15%, or (b) payments attach rate continues pushing past 60% with clear evidence of a take-rate expansion story. I'd pass if GMV growth falls below 15% and doesn't rebound — that would indicate the Amazon / TikTok Shop competitive pressure is real and structural.",
      strongReasoningIncludes: [
        'Commits to a specific action (buy, pass, or conditional wait)',
        'Names a specific price, multiple, or metric threshold',
        'The threshold is measurable from public data',
      ],
    },
  },
};
