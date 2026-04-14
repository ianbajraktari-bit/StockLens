import type { CompanyProfile } from './types';

export const lillyProfile: CompanyProfile = {
  id: 'lilly',
  ticker: 'LLY',
  name: 'Eli Lilly',
  emoji: '💊',
  sector: 'Pharmaceuticals',
  oneLiner: 'The pharma giant riding the GLP-1 wave — with Mounjaro and Zepbound rewriting the industry',
  description:
    "Eli Lilly has become the most important pharma company in the world on the back of GLP-1 drugs — tirzepatide, sold as Mounjaro (diabetes) and Zepbound (obesity). These drugs are doing to obesity what statins did to cholesterol: creating a multi-decade, multi-hundred-billion-dollar market essentially overnight. Lilly is the quality brand in a duopoly with Novo Nordisk and has been capacity-constrained rather than demand-constrained. But the stock has re-rated to a multiple only ever seen for a handful of pharma names, GLP-1 pricing will face pressure, and pharma's oldest rule — the patent cliff — is undefeated. Is this the next Pfizer post-Lipitor, or a truly different kind of pharma compounder?",
  dataAsOf: 'FY 2024',
  difficulty: 'advanced',
  estimatedMinutes: 14,
  keyFacts: [
    { label: 'Revenue', value: '~$45B', detail: 'FY2024 — grew ~32% YoY, driven almost entirely by tirzepatide' },
    { label: 'Tirzepatide Revenue', value: '~$16B', detail: 'Mounjaro + Zepbound combined — already Lilly\'s biggest franchise, growing ~3-4x' },
    { label: 'Operating Margin', value: '~34%', detail: 'Expanding rapidly as GLP-1 production scales past fixed costs' },
    { label: 'R&D Spend', value: '~$11B', detail: 'Among highest in pharma — multiple Phase 3 obesity follow-ons in pipeline' },
    { label: 'Patent Expirations', value: 'Tirzepatide: ~2036', detail: 'Long runway before the next major patent cliff' },
    { label: 'P/E Ratio', value: '~35-50x fwd', detail: 'Extraordinary multiple for pharma — priced as a hypergrowth biotech' },
  ],
  workflow: {
    business: {
      modelAnswer:
        "Lilly is a diversified global pharmaceutical company, but right now it is overwhelmingly a GLP-1 company. It discovers, develops, manufactures, and sells branded prescription drugs. Revenue comes from patent-protected products sold at premium prices, primarily through insurance channels. The current core is tirzepatide — a single molecule sold as Mounjaro for type 2 diabetes and Zepbound for obesity — which together are already ~35% of revenue and growing fast enough that they'll likely be 50%+ within 2 years. Other franchises (Verzenio for breast cancer, Trulicity, Taltz for psoriasis, Jardiance via a Boehringer partnership) still matter, but the stock is the GLP-1 story. Pharma's economic model: high R&D cost upfront, patent protection creates pricing power for 10-15 years, then generic competition destroys most of the economics unless you've already built the next franchise.",
      strongReasoningIncludes: [
        'Identifies Lilly as a branded pharmaceutical company with patent-driven economics',
        'Recognizes that tirzepatide is the dominant driver of the current story',
        'Notes the patent-cliff dynamic that governs long-term pharma economics',
      ],
    },
    drivers: {
      modelAnswer:
        "Three drivers dominate. (1) Tirzepatide volume — supply has been the bottleneck since launch, so every new manufacturing facility coming online unlocks more revenue. Lilly has committed $20B+ to manufacturing expansion, which is the main near-term revenue unlock. (2) GLP-1 indication expansion. Zepbound is already approved for obesity; trials are underway for sleep apnea, heart failure, chronic kidney disease, alcoholism, and more. Every new indication dramatically expands the addressable population and defends against generic commodity positioning. (3) Pipeline — retatrutide (a triple-agonist), orforglipron (an oral GLP-1), and other obesity follow-ons are in late-stage trials. A successful oral GLP-1 could be a $50B+ drug on its own. Secondary: pricing power (today's GLP-1 list prices are ~$1,000/month; real net prices after rebates are much lower and trending down), and international expansion (most GLP-1 prescriptions are still US-based).",
      strongReasoningIncludes: [
        'Identifies manufacturing capacity / supply as the near-term revenue bottleneck',
        'References new indication expansion as a structural market-size driver',
        'Names a pipeline compound or oral GLP-1 as a long-term lever',
      ],
    },
    moat: {
      modelAnswer:
        "Lilly's moat has three layers. (1) Patent protection. Tirzepatide's core patent runs to ~2036, and obesity follow-on compounds will have their own patent runways. For the next decade, nobody can legally copy tirzepatide in the US. (2) Manufacturing moat. GLP-1s are peptide drugs — complex to manufacture at scale. Lilly has spent years and tens of billions building the physical capacity, and new entrants can't replicate that quickly. This is why Lilly + Novo essentially ARE the GLP-1 market despite obvious demand. (3) Scientific expertise and pipeline depth. Lilly's obesity research platform now has the largest dataset in the field, which compounds — each trial informs the next. Secondary: brand familiarity with prescribers, and payer relationships built over decades. What Lilly does NOT have is a true network or switching-cost moat — patients don't have loyalty; they just take whatever their insurance covers.",
      strongReasoningIncludes: [
        'Identifies patent protection as a primary moat with a specific time horizon',
        'Recognizes manufacturing complexity as a secondary but real moat for peptide drugs',
        'Acknowledges the moat is time-limited (patent cliff) rather than indefinite',
      ],
    },
    risks: {
      modelAnswer:
        "Four real risks. (1) GLP-1 pricing collapse. As Medicare negotiates prices (IRA) and payers push back on specialty tier pricing, net prices on GLP-1s have been falling quickly. If real net pricing erodes faster than volume growth, revenue growth stalls despite huge demand. (2) New entrants. Amgen, Pfizer, Roche, and Chinese biotechs all have oral and injectable GLP-1 candidates in trials. Even if none match tirzepatide's efficacy, each adds pricing pressure. (3) Long-term safety or discontinuation data. GLP-1s have relatively short real-world duration data; a safety signal or high dropout rate at year 3-5 could materially shrink the long-term patient population. (4) Next patent cliff. Tirzepatide's patent runs to ~2036, but markets start pricing in cliffs ~3-5 years before expiry. Any pipeline slippage compresses the 'next wave' valuation. A quieter risk: US political backlash on drug pricing; obesity drugs are a highly visible political target.",
      strongReasoningIncludes: [
        'Identifies pricing / net-price compression as a structural risk',
        'Names a specific competitor or new-entrant threat',
        'References long-term safety data, discontinuation, or a patent cliff dynamic',
      ],
    },
    valuation: {
      modelAnswer:
        "Lilly trades at ~35-50x forward earnings — an extraordinary multiple for pharma (historical sector average is ~15-20x). The multiple prices in: (a) tirzepatide growing 40%+ annually for several more years, (b) indication expansion continuing to unlock new patient pools, (c) the obesity market being genuinely multi-hundred-billion-dollar TAM, and (d) Lilly keeping ~40%+ share in that market. If all four hold, the algorithm supports high-20s/30x earnings growth for years and the multiple is defensible. If even one breaks — pricing collapses faster, oral alternatives take share, indication trials disappoint — the multiple compresses sharply toward 20x, which is a 40%+ drawdown before earnings even change. This is a 'priced for the future' stock where the asymmetry is real: upside if things keep going right, severe downside if they don't.",
      strongReasoningIncludes: [
        'Identifies Lilly as hypergrowth-priced, not defensive or value',
        'Names specific assumptions embedded in the multiple (GLP-1 volume, pricing, TAM)',
        'Notes the asymmetric downside from multiple compression',
      ],
    },
    thesis: {
      modelAnswer:
        "BULL THESIS: Lilly is at the beginning of the biggest therapeutic category in pharma history. Obesity affects 40%+ of US adults and global prevalence is rising — the addressable patient pool is 10x larger than any single drug class has ever reached. Lilly has the best-in-class molecule (tirzepatide beats Wegovy on efficacy) and a pipeline of next-generation obesity drugs nobody else can match. Manufacturing capacity ramps continue unlocking revenue, and indication expansion keeps adding market. Even at 40x earnings, the long-term earnings power means the PEG ratio is reasonable — this is the rare pharma name that deserves a tech-like multiple.\n\nBEAR THESIS: Every pharma blockbuster eventually gets commoditized, and GLP-1s will be no exception. Amgen's MariTide, oral pills, and Chinese biotechs will all arrive by 2026-27, turning a duopoly into a crowded field. Net pricing is already falling as PBMs negotiate harder — list price headlines mask what's actually happening to realized revenue per prescription. Meanwhile Lilly trades at 45x earnings, a multiple that requires GLP-1s to stay essentially a duopoly with full pricing power for a decade. History says drug categories don't work that way. This is an expensive bet on pharma history breaking its own pattern.",
      strongReasoningIncludes: [
        'Commits to a bull or bear case',
        'References GLP-1 economics, pricing, or competition specifically',
        'The thesis is falsifiable by specific clinical, commercial, or pricing data',
      ],
    },
    verdict: {
      modelAnswer:
        "Reasonable verdict: TRIM on strength, or PASS if not owned. Lilly's business is genuinely historic — but the valuation has moved faster than the fundamentals. I'd be a long-term buyer below ~30x forward earnings, which would require either (a) a broader market correction, or (b) a temporary scare on competitive data. I'd get more concerned on: any Phase 3 readout from Amgen's MariTide showing competitive efficacy and tolerability; real net price per prescription declining faster than ~10% annually (indicating commoditization is accelerating); or oral GLP-1 trial data from any competitor showing broad efficacy (which would remove Lilly's injection-convenience edge). Key quarterly metrics: tirzepatide volume growth (still supply-limited?), net realized price per prescription, and international mix.",
      strongReasoningIncludes: [
        'Commits to a specific action (trim, buy, wait)',
        'Names specific competitive or pricing thresholds',
        'The thresholds are observable from company filings or competitor trial readouts',
      ],
    },
  },
};
