import type { CompanyProfile } from './types';

export const walmartProfile: CompanyProfile = {
  id: 'walmart',
  ticker: 'WMT',
  name: 'Walmart',
  emoji: '🛒',
  sector: 'Retail — Mass Market',
  oneLiner: 'The low-price retailer that quietly became a tech-enabled omnichannel giant',
  description:
    "Walmart is the largest retailer on earth — ~$650B revenue, ~10,600 stores, and ~240 million weekly customers. For decades it was a thin-margin retail grinder whose moat was 'cheaper than anyone else because we have more scale than anyone else.' In the last five years it's quietly transformed: e-commerce is now ~18% of US sales, a growing high-margin advertising business (Walmart Connect) is emerging, and Walmart+ is a credible Amazon Prime alternative. The stock has re-rated sharply — from a ~16x retailer multiple to ~30x — as investors now price it like a digital platform with a grocery business attached. Is that re-rating justified, or is it still fundamentally a low-margin retailer?",
  dataAsOf: 'FY 2025',
  difficulty: 'intro',
  estimatedMinutes: 11,
  keyFacts: [
    { label: 'Revenue', value: '~$681B', detail: 'FY2025 — the largest retailer in the world by a wide margin' },
    { label: 'Operating Margin', value: '~4.3%', detail: 'Low by tech standards, but on a massive revenue base — ~$29B in operating income' },
    { label: 'E-commerce % of US Sales', value: '~18%', detail: 'Up from ~5% pre-pandemic — growing double-digits' },
    { label: 'Walmart Connect (Ads)', value: '~$4B+ revenue', detail: 'High-margin ad business — the re-rating driver' },
    { label: 'Grocery % of Revenue', value: '~60%', detail: 'Groceries are low-margin but drive visit frequency' },
    { label: 'P/E Ratio', value: '~30-33x', detail: 'Historically high — reflects the digital-platform re-rating, not retail fundamentals' },
  ],
  workflow: {
    business: {
      modelAnswer:
        "Walmart sells groceries, general merchandise, and health/wellness products through ~10,600 stores and increasingly through walmart.com. Core customer is mass-market — median household income under $80K — and the value proposition is always price first, convenience second. Revenue splits roughly: ~60% groceries (low-margin, high-frequency), ~30% general merchandise (higher-margin, lower-frequency), ~10% health/wellness and other. Walmart makes money on gross margin spread (~24%), amplified by massive inventory turnover and scale-driven supplier leverage. The newer business layers: Walmart+ (subscription for delivery + perks), Walmart Connect (advertising from brands selling on Walmart surfaces) — these carry much higher margins and are the reason investors think of Walmart differently than they used to.",
      strongReasoningIncludes: [
        'Separates grocery from general merchandise as distinct revenue mixes',
        'Identifies the retail gross-margin spread as the core model',
        'Mentions the newer high-margin layers (ads, membership) — not just \'retail stores\'',
      ],
    },
    drivers: {
      modelAnswer:
        "Short-term drivers: same-store sales growth (driven by traffic × ticket size), e-commerce penetration, and food inflation passing through to revenue. Long-term drivers: (1) Grocery market share — Walmart is the #1 US grocer and has been gaining share, especially from trade-down during inflationary periods. (2) E-commerce growth — the online business is still doubling digits and should keep growing the percentage mix for years. (3) Advertising attach — Walmart Connect is small today (~$4B) but the market for retail media ads is massive, and high-margin ad dollars fall almost entirely to the bottom line. (4) Walmart+ membership growth — more members = stickier customer, more e-com volume, data network effects for ads. The mix shift from pure retail to retail+ads+membership is what's reshaping the business, not just top-line growth.",
      strongReasoningIncludes: [
        'Identifies grocery market-share gains and trade-down dynamic',
        'References e-commerce penetration or Walmart+ growth',
        'Names advertising / retail media as a margin-expansion driver',
      ],
    },
    moat: {
      modelAnswer:
        "Walmart's moat is scale economics — the purest form of it in retail. With $680B+ in revenue, Walmart negotiates prices from suppliers that no competitor can match, runs the most efficient logistics network in retail (thanks to its truck fleet and distribution centers), and spreads fixed costs over a customer base so large that per-unit costs are structurally lower than any challenger's. That's been the moat for 40 years. The newer dimension: ~90% of the US population lives within 10 miles of a Walmart store. That network is now the backbone of the fastest same-day e-commerce delivery in the US — using stores as mini-fulfillment hubs, Walmart can undercut Amazon on delivery speed for fresh and heavy goods in many markets. It's a physical asset turned into a digital moat. Walmart does NOT have a particularly strong brand moat (customers choose Walmart for price, not love) or high switching costs.",
      strongReasoningIncludes: [
        'Identifies scale economics as the primary moat',
        'References the store network being repurposed for omnichannel / fulfillment',
        'Notes the moat is rooted in cost advantage, not brand or switching costs',
      ],
    },
    risks: {
      modelAnswer:
        "Four risks. (1) Multiple compression. Walmart at 30x+ earnings prices in continued digital transformation; if e-commerce growth slows or the ad business disappoints, the multiple could drop back toward 20-22x — a 25%+ derating even with flat earnings. (2) Consumer trade-up in a strong economy. Walmart benefits when consumers trade down for price; it loses when consumers trade back up to Target or specialty retailers. (3) Amazon in groceries. Amazon Fresh / Whole Foods has never cracked Walmart's grocery moat, but if they did — through robotic fulfillment or a real private-label push — Walmart's highest-frequency visit driver would erode. (4) Labor costs and regulatory pressure. Walmart is a huge employer of low-wage workers; wage pressure, unionization, or regulation around worker classification could compress margins that are already thin. A quieter risk: the revenue base is so large that real percentage growth requires outsized absolute dollar wins, making it hard to move the needle without a transformational new business.",
      strongReasoningIncludes: [
        'Identifies multiple-compression / re-rating risk specifically',
        'Names at least one competitive risk (Amazon, trade-up, specialty)',
        'References margin pressure from wages, operations, or regulation',
      ],
    },
    valuation: {
      modelAnswer:
        "Walmart trades at ~30-33x forward earnings — an unusually high multiple for a retailer. Historical Walmart multiples averaged 15-18x. The re-rating reflects investor belief that Walmart isn't really a retailer anymore — it's becoming a digital platform (ads + membership) with a physical retail business subsidizing customer acquisition. If that view is right, the multiple can stay here; if it's wrong and Walmart is still fundamentally a 4% operating margin retailer, the multiple should be in the low 20s. The valuation assumes: (a) advertising revenue continues scaling double-digits, (b) operating margins expand from 4.3% toward 5%+, and (c) e-commerce keeps growing share. The risk is asymmetric: all three have to keep working to hold the multiple, and any disappointment rerates it down 20-30%.",
      strongReasoningIncludes: [
        'Identifies the historical vs. current multiple gap — re-rated',
        'Names specific assumptions (ad growth, margin expansion, e-com penetration)',
        'Notes the asymmetric downside if the digital-platform narrative breaks',
      ],
    },
    thesis: {
      modelAnswer:
        "BULL THESIS: Walmart is early innings of becoming the most underrated digital platform in America. Its ad business is small today (~$4B) but in a TAM of hundreds of billions. Its store network is a physical asset turning into a delivery moat no pure e-commerce player can replicate. Operating margins have room to expand as high-margin ads and membership mix up. The stock deserves a premium multiple because it's not just a retailer — it's a retailer with hidden, high-quality businesses attached that are growing 20%+ inside a 4-5% top-line grinder.\n\nBEAR THESIS: Walmart at 30x is priced for perfection and it's still fundamentally a low-margin retailer. Retail media is real but small, and every retailer is launching an ad network now — Walmart won't keep a monopoly on it. A strong consumer economy means trade-up out of Walmart. Grocery inflation is normalizing, which removes a tailwind from comps. Meanwhile 30x for a retailer with 4% operating margins assumes everything keeps breaking right for years. One bad quarter and the multiple compresses to 22x — a 30%+ drawdown in a stock most people own as a 'defensive.'",
      strongReasoningIncludes: [
        'Commits to a bull or bear case',
        'References a specific product line (ads, membership) or macro dynamic',
        'The case is falsifiable by a named metric or event',
      ],
    },
    verdict: {
      modelAnswer:
        "Reasonable verdict: TRIM or HOLD, not a fresh buy at current prices. Walmart is an excellent business, but the multiple has run far ahead of its historical norm and leaves little margin of safety. If I already own it, I'd hold but wouldn't add. If I don't own it, I'd wait for either (a) multiple compression below ~24x forward earnings (has happened twice in the last decade during broader corrections), or (b) clear evidence that Walmart Connect ad revenue is growing 25%+ and approaching 10%+ of total revenue — which would justify keeping a digital-platform multiple. I'd get more bearish if ad revenue disappoints for two consecutive quarters or if operating margins contract toward 4%.",
      strongReasoningIncludes: [
        'Commits to a specific action (buy, hold, trim, wait)',
        'Names a specific valuation or operational threshold',
        'The threshold is observable from earnings data',
      ],
    },
  },
};
