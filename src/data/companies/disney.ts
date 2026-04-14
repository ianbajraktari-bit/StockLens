import type { CompanyProfile } from './types';

export const disneyProfile: CompanyProfile = {
  id: 'disney',
  ticker: 'DIS',
  name: 'Disney',
  emoji: '🏰',
  sector: 'Media & Entertainment',
  oneLiner: 'A century-old IP library, a streaming war, and theme parks printing cash — three businesses in one',
  description:
    "Disney owns the most valuable IP library in entertainment (Marvel, Star Wars, Pixar, Disney animation) and converts it into three engines: streaming (Disney+, Hulu, ESPN), theme parks (massive margins, inflating ticket prices), and linear TV networks (ABC, ESPN cable — rapidly declining). The business is mid-transition: parks throw off $8B+ in operating profit while linear TV melts and streaming struggles to achieve real profitability. Is Disney a durable compounder hidden behind a messy transition, or a slowly-unwinding media conglomerate?",
  dataAsOf: 'FY 2024',
  difficulty: 'advanced',
  estimatedMinutes: 14,
  keyFacts: [
    { label: 'Revenue', value: '~$91B', detail: 'Split across parks, streaming, linear networks, studios' },
    { label: 'Parks Op Profit', value: '~$8-9B', detail: 'Highest-margin, cash-gushing segment — domestic + international + cruises' },
    { label: 'Streaming', value: '~230M total subs', detail: 'Disney+ core + Hulu + ESPN+; finally approaching operating profitability' },
    { label: 'Linear TV', value: 'Declining ~5-8%/year', detail: 'Cable bundle unwinding; ESPN leaves cable around 2025-26' },
    { label: 'P/E Ratio', value: '~20-22x', detail: 'Depressed vs. historical ~25-30x — reflects transition uncertainty' },
    { label: 'Debt', value: '~$45B', detail: 'Elevated post-Fox acquisition; de-leveraging is a multi-year project' },
  ],
  workflow: {
    business: {
      modelAnswer:
        "Disney runs three main businesses, all fueled by its IP library. (1) Theme parks and cruises — Disneyland, Walt Disney World, international parks, Disney Cruise Line. Customers pay premium prices ($150+ per day at Walt Disney World) to experience the IP physically. This segment is the profit engine. (2) Streaming — Disney+, Hulu, and ESPN+ sold as monthly subscriptions. ~230M total subscribers; recently near break-even after years of losses. (3) Linear TV networks — ABC broadcast, ESPN cable, and smaller cable channels. Historically Disney\'s largest profit source; rapidly shrinking as cord-cutting accelerates. A fourth business, studios (theatrical film), produces the content that feeds all three. The whole company is an IP factory that monetizes stories across every format and decade.",
      strongReasoningIncludes: [
        'Identifies the three main segments: parks, streaming, linear TV (plus optionally studios)',
        'Mentions IP library / content as the underlying asset powering everything',
        'Shows awareness that parks is the profit engine while linear TV is declining',
      ],
    },
    drivers: {
      modelAnswer:
        "Different segments have different drivers, which is what makes Disney complicated. (1) Parks: attendance × per-capita spending (ticket prices, food, merchandise, hotels). Disney has aggressively pushed per-capita spending higher over the last 5 years, even as attendance plateaued. (2) Streaming: subscribers × ARPU (average monthly price per sub). Subscriber growth has slowed dramatically after the initial Disney+ boom; ARPU is now the main growth lever, meaning Disney relies on price increases and ad-tier adoption. (3) Linear TV: ad revenue × affiliate fees (what cable companies pay Disney per subscriber). Both declining as the cable bundle dies. The macro-level driver for all three is the IP pipeline — does Disney release hit content that drives parks attendance, streaming signups, and theatrical box office? Recent misses (Marvel fatigue, Star Wars decline) have hurt every segment simultaneously.",
      strongReasoningIncludes: [
        'Identifies different drivers for different segments (attendance × spend, subs × ARPU, ad × affiliate)',
        'Shows awareness that per-capita spending (parks) or ARPU (streaming) is the lever being pulled as volumes plateau',
        'Mentions IP pipeline / hit content as the cross-segment driver',
      ],
    },
    moat: {
      modelAnswer:
        "Disney has one of the strongest moats in entertainment: an IP library that has been built over 100 years and is essentially irreplaceable. Marvel, Star Wars, Pixar, Disney Princesses, the Muppets, and hundreds of smaller properties create an ecosystem no competitor can replicate. This IP produces compound advantages — a Star Wars character introduced in a 1977 film becomes a 2024 Disney+ series, a theme park ride, a toy, and a cruise-ship experience. Secondary moat: scale in parks — the cost to build a competitive theme-park system is $50B+ over decades, and Universal (the closest peer) operates at a fraction of Disney\'s scale. Third moat: vertically integrated content production (studios → distribution → merchandise). BUT the moat has holes. Content has become more hit-or-miss (Marvel slumps, Star Wars fatigue, Pixar misses). Streaming economics don\'t reward library depth as much as linear TV did — Netflix content costs $17B/year and the war of attrition is brutal. Parks remain the most durable piece.",
      strongReasoningIncludes: [
        'Identifies IP library as the primary moat',
        'Explains why the IP moat is hard to replicate (decades of accumulation, cultural entrenchment)',
        'Shows awareness that the moat is strongest in parks and weaker in streaming',
      ],
    },
    risks: {
      modelAnswer:
        "Four real risks. (1) Streaming economics don\'t work at Disney\'s scale. Content costs are enormous, subscriber growth has slowed, and the ad-tier path to profitability is unproven. Disney+ may never generate the margins linear TV did. (2) Linear TV collapse is faster than planned. ESPN affiliate fees were Disney\'s single biggest profit pool for decades; as ESPN moves to direct-to-consumer streaming (planned ~2025-26), the revenue and margin structure changes dramatically — almost certainly for the worse in the transition period. (3) Content fatigue and cultural friction. Marvel Phase 4/5 underperformed. Star Wars trilogy divided fans. Multiple theatrical releases have bombed. If the content engine misfires for a few more years, the whole flywheel slows. (4) Succession and strategic direction. Bob Iger came back because Bob Chapek\'s tenure was a disaster. The eventual handoff to a successor is a real execution risk — this is a company whose value depends on creative judgment at the top.",
      strongReasoningIncludes: [
        'Identifies streaming profitability OR the linear TV decline as a structural risk',
        'References content / creative risk (Marvel fatigue, Star Wars, theatrical misses)',
        'Shows awareness of the transition being messy and uncertain, not vague "competition"',
      ],
    },
    valuation: {
      modelAnswer:
        "Disney trades at a depressed multiple (~20-22x earnings) relative to its historical range (~25-30x) because the market is struggling to value a company in transition. The core question: when linear TV finishes declining, what does the earnings floor look like? Parks generate ~$8-9B in operating profit and are arguably under-appreciated; if you valued them alone at 18-20x earnings, they\'d account for most of Disney\'s current market cap. Streaming is a swing factor — a profitable streaming business worth $100B+ in a bull case, a perpetual money pit in a bear case. The current multiple reflects the market\'s inability to confidently value the transition. This is a \"sum of the parts\" story where pessimists see broken legacy + unproven growth, and optimists see a cash-gushing parks business with a cheap option on streaming monetization.",
      strongReasoningIncludes: [
        'Identifies the valuation as depressed / transition-uncertainty (neither clean growth nor clean value)',
        'References sum-of-parts thinking: parks + streaming + linear all value differently',
        'Names what has to work for the current multiple to be fair or cheap',
      ],
    },
    thesis: {
      modelAnswer:
        "BULL THESIS: The market is undervaluing Disney\'s parks business, which alone earns ~$8-9B annually and has decades of pricing power and reinvestment runway. Linear TV is dying, but the decline is priced in. Streaming just reached break-even and is about to become a profit contributor as Disney cuts costs and raises prices. ESPN\'s direct-to-consumer launch unlocks ~$10B in trapped cable value. Put parks + profitable streaming + ESPN DTC together, and Disney\'s earnings power in 2027 is much higher than consensus — at 22x today, you\'re paying a reasonable price for an earnings inflection.\n\nBEAR THESIS: Disney is a collection of mediocre or declining businesses held up by one great one (parks). Streaming will never match linear TV\'s economics — too much content cost, too much competition, too little pricing power. ESPN going DTC is a forced move that accelerates revenue declines before it helps. Theatrical is a coin flip between hits and misses, and the content IP is showing fatigue. Parks carry the company but have their own cycle risk in a recession. Fair value is closer to $75-80 than $100+, reflecting a multiple compression as the transition drags on.",
      strongReasoningIncludes: [
        'Commits to a clear side (bull or bear)',
        'References sum-of-parts thinking — at minimum, parks + streaming + linear TV',
        'Makes the case falsifiable with a specific metric or event',
      ],
    },
    verdict: {
      modelAnswer:
        "Defensible verdicts: HOLD or a speculative BUY on conviction in parks + streaming inflection. I wouldn\'t make this a core position — too many moving pieces and too much dependent on creative execution (hit rate of content, CEO succession). The case for buying: parks are high-quality, streaming is inflecting, and the multiple is below historical. The case for passing: the transition could take 3-5 years longer than bulls expect, and Disney\'s creative output has looked shaky enough that confidence in the IP engine requires leaning heavily on management\'s turnaround promises. What would change the answer: (1) Parks attendance and per-capita spend holding up through a recession — that\'s the base of the whole thesis; (2) Streaming operating margin trending toward 10%+ — proves the model works at scale; (3) A clean ESPN DTC launch that retains more revenue than consensus expects. Without those, Disney stays a show-me story.",
      strongReasoningIncludes: [
        'Commits to a specific verdict (buy, pass, hold, or a clearly defined wait)',
        'Names at least one measurable trigger that would change the answer',
        'Trigger is tied to specific segment performance (parks, streaming margin, ESPN DTC)',
      ],
    },
  },
};
