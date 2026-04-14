import type { CompanyProfile } from './types';

export const chipotleProfile: CompanyProfile = {
  id: 'chipotle',
  ticker: 'CMG',
  name: 'Chipotle',
  emoji: '🌯',
  sector: 'Restaurants — Fast Casual',
  oneLiner: 'The best unit economics in restaurants, compounding through disciplined store growth',
  description:
    "Chipotle is the cleanest case study of restaurant unit economics investors have. A new store costs ~$1.2M to build and generates ~$3M in year-one revenue at 25%+ store-level margins — a cash-on-cash return profile most businesses can only dream of. The company reinvests cash into ~300 new store openings a year, with a long runway (the goal is 7,000+ US stores from ~3,500 today). Same-store sales have been among the most consistent in restaurants for a decade. But the valuation has been rich for years, the labor model is expensive, and the 'Chipotlane' drive-thru bet is central to the next growth leg. Can this compounder keep compounding?",
  dataAsOf: 'FY 2024',
  difficulty: 'intro',
  estimatedMinutes: 10,
  keyFacts: [
    { label: 'Revenue', value: '~$11.3B', detail: 'FY2024 — grew ~15% YoY on store growth + comps' },
    { label: 'Restaurants', value: '~3,700', detail: 'Nearly all US; long runway to a ~7,000-store target' },
    { label: 'Average Unit Volume', value: '~$3.2M', detail: 'Per-store annual revenue — among the highest in fast casual' },
    { label: 'Store-Level Margin', value: '~26%', detail: 'Best-in-class for a restaurant of this scale' },
    { label: 'New Store Payback', value: '~2-3 years', detail: 'Unusually fast for a restaurant concept' },
    { label: 'P/E Ratio', value: '~45-55x', detail: 'Premium multiple for restaurant-industry leadership and unit growth story' },
  ],
  workflow: {
    business: {
      modelAnswer:
        "Chipotle operates ~3,700 Mexican-inspired fast-casual restaurants, essentially all company-owned (no franchising, which is unusual in the industry). The business makes money in two layers. (1) Restaurant-level: each store generates ~$3.2M in annual revenue at ~26% margin, producing ~$800K of store-level profit. (2) Corporate: corporate overhead (supply chain, marketing, real estate, HQ) runs ~10% of sales, leaving operating margin around 17%. Revenue grows two ways: opening new stores (~300 per year) and growing same-store sales (traffic + check). The choice to stay 100% company-owned means Chipotle captures all the economics but also bears all the capex, labor, and operational risk — the opposite of the McDonald's / Restaurant Brands franchise model.",
      strongReasoningIncludes: [
        'Identifies the company-owned model (vs. franchise) as distinctive',
        'Separates store-level unit economics from corporate overhead',
        'Notes the two growth levers: new stores + same-store sales',
      ],
    },
    drivers: {
      modelAnswer:
        "Three drivers. (1) New store openings — Chipotle opens ~8-10% new stores per year, and each store takes 2-3 years to reach full volume. This compounds mechanically: more stores = more revenue, with lag. (2) Same-store sales growth — a blend of traffic (number of orders) and ticket (average check). Chipotle has driven comps through a combination of menu innovation (brisket, chicken al pastor), digital order growth (~35% of sales via app/delivery), and pricing. (3) Chipotlanes — drive-thru-only digital pickup lanes. ~800+ Chipotlanes now; they generate higher volumes and higher margins than standard stores, and every new store is planned as a Chipotlane where zoning allows. Secondary drivers: loyalty program growth, throughput improvements in stores (speed of line), and international expansion, though international is tiny today.",
      strongReasoningIncludes: [
        'Identifies new store openings as a mechanical growth driver',
        'Names Chipotlanes or digital as a specific margin-accretive driver',
        'References same-store sales components (traffic, ticket) with some specificity',
      ],
    },
    moat: {
      modelAnswer:
        "Chipotle's moat is narrower than some but real. (1) Brand — Chipotle stands for a specific idea (real ingredients, customizable, fast-casual Mexican) and has defended that position against dozens of imitators over 20 years. That's actual brand moat, not just advertising. (2) Unit economics compounding — Chipotle has a repeatable new-store playbook that produces ~50% cash-on-cash returns on new store builds. Competitors can copy the menu, but replicating the real estate selection, supply chain, labor training, and throughput engineering at 3,700 units is very hard. (3) Scale in supply chain — Chipotle's purchasing power for specific inputs (fresh avocados, cilantro-lime rice, proteins) is unique at its scale. What Chipotle does NOT have is a network effect or high switching costs — a customer who tries a competitor isn't locked in. The moat depends on operational execution continuing to outclass competitors.",
      strongReasoningIncludes: [
        'Identifies brand + operational execution as the primary moat',
        'Acknowledges the moat is narrower than network-effect businesses',
        'References a specific operational advantage (real estate, supply chain, throughput)',
      ],
    },
    risks: {
      modelAnswer:
        "Four risks. (1) Saturation. Chipotle's US target is ~7,000 stores; at ~300 openings per year that's ~11 more years of unit growth before the mechanical compounding stops. When unit growth decelerates, the premium multiple compresses. (2) Food safety crisis. Chipotle had a major E. coli outbreak in 2015-16 that took years to recover from. Fresh ingredients + high volume = ongoing risk, and the brand premium makes any incident more damaging. (3) Labor cost inflation. California's $20 fast-food minimum wage took a meaningful margin chunk; if that model spreads nationally, Chipotle's store-level margins compress permanently. (4) Menu fatigue / lack of innovation success. Chipotle's menu is famously small; new items (brisket, chicken al pastor) have worked, but eventually customers want more variety and margin impact of promotional LTOs matters. A quieter risk: portion-size controversy has periodically hit social media and can affect ticket and traffic independently.",
      strongReasoningIncludes: [
        'Identifies unit-growth saturation as the structural multiple-compression risk',
        'Names food safety or labor as a margin / reputation risk',
        'References a menu / innovation risk or a specific operational threat',
      ],
    },
    valuation: {
      modelAnswer:
        "Chipotle trades at ~45-55x forward earnings — an extraordinary multiple for a restaurant, and one of the highest in the sector. That multiple reflects: (a) consistent high-teens earnings growth for a decade, (b) best-in-class store economics, (c) a long runway of US unit growth, and (d) low balance sheet risk. The multiple assumes Chipotle keeps opening stores at ~8%+ per year, keeps growing comps at mid-single-digits+, and keeps expanding operating margins. If those assumptions hold, the stock can compound at 15%+ annually. If any of them slows materially — saturation hits, labor costs bite, or a food safety incident returns — the multiple compresses to 25-30x (the upper end of 'normal' for restaurants), which would be a ~40% drawdown even with flat earnings. This is 'priced as if it works,' not 'priced with margin of safety.'",
      strongReasoningIncludes: [
        'Identifies Chipotle as premium / quality compounder priced accordingly',
        'Names specific assumptions (unit growth, comps, margin expansion)',
        'Notes the downside risk from multiple compression',
      ],
    },
    thesis: {
      modelAnswer:
        "BULL THESIS: Chipotle is the closest thing to a 'physical-world compounder' in restaurants — reliable same-store growth, mechanical unit expansion with great economics, and a management team that keeps finding new growth levers (Chipotlanes, international, loyalty). Even at 50x earnings, the algorithm is durable: 8% unit growth + 5% comps + margin expansion + buybacks = mid-to-high-teens EPS growth for years. Restaurants at this quality level historically get premium multiples forever, and Chipotle has earned its.\n\nBEAR THESIS: Chipotle's multiple has run too far ahead of reality. It's still a restaurant — capital-intensive, labor-heavy, vulnerable to food-safety tail risk — and the US TAM is finite. At 50x earnings, the margin of safety is zero. Same-store sales growth has been propped up by price increases more than traffic, and at some point the consumer pushes back. Unit growth sounds infinite but is actually 5-7 years from real saturation at current pace. One food safety incident, one California-style wage shock, or one stretch of flat comps and the multiple re-rates to 30x — a brutal drawdown.",
      strongReasoningIncludes: [
        'Commits to a clear bull or bear case',
        'References unit economics, multiple compression, or a specific risk',
        'The case is specific enough to be falsified by a named event',
      ],
    },
    verdict: {
      modelAnswer:
        "Reasonable verdict: PASS at current prices, with a clear re-entry trigger. Chipotle is a genuinely excellent business, but paying 50x earnings for a restaurant — even one this good — leaves essentially no margin of safety. I'd be a buyer if (a) the forward multiple compresses below ~35x, which usually requires a broader market pullback plus a soft quarter, or (b) traffic growth reaccelerates to mid-single-digits sustained (would justify the current multiple). I'd stay away if same-store sales growth drops below 3% for two consecutive quarters — that would signal saturation arriving faster than the bull case assumes. Food safety incidents, California-style wage actions spreading, or a sharp Chipotlane deceleration would all be red flags.",
      strongReasoningIncludes: [
        'Commits to a specific action (pass, buy, wait)',
        'Names a specific valuation or operating threshold',
        'The threshold is observable from earnings data',
      ],
    },
  },
};
