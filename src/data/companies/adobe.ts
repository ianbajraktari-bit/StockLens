import type { CompanyProfile } from './types';

export const adobeProfile: CompanyProfile = {
  id: 'adobe',
  ticker: 'ADBE',
  name: 'Adobe',
  emoji: '🎨',
  sector: 'Software',
  oneLiner: 'The creative software standard — Photoshop, Illustrator, Premiere — transitioning into an AI era',
  description:
    "Adobe built its empire on creative software (Photoshop, Illustrator, Premiere, After Effects) and successfully pivoted from one-time licenses to a subscription model around 2013. Today it prints $20B+ in revenue at 35%+ operating margins with deep switching costs. But generative AI threatens to commoditize content creation — and startups like Figma nearly acquired it in 2022 for $20B. The question: is Adobe a durable compounder, or is its moat quietly eroding?",
  dataAsOf: 'FY 2024',
  difficulty: 'standard',
  estimatedMinutes: 12,
  keyFacts: [
    { label: 'Revenue', value: '~$21B', detail: 'Annual revenue, growing ~10-11% YoY' },
    { label: 'Operating Margin', value: '~36%', detail: 'Among the highest in enterprise software' },
    { label: 'Business Mix', value: '~75% Digital Media / 25% Digital Experience', detail: 'Creative Cloud + Document Cloud = Digital Media; Experience = marketing analytics' },
    { label: 'P/E Ratio', value: '~25-30x', detail: 'Forward P/E; dropped from ~45x peak as growth concerns rose' },
    { label: 'Subscription %', value: '>95%', detail: 'Almost entirely recurring revenue since the 2013 transition' },
    { label: 'Key Threat', value: 'Generative AI', detail: 'Tools like Midjourney, DALL-E, and Canva compress some of Adobe\'s value' },
  ],
  workflow: {
    business: {
      modelAnswer:
        "Adobe sells subscription software that creative professionals and marketers use to make digital content. The main product is Creative Cloud — a bundle that includes Photoshop (image editing), Illustrator (vector design), Premiere (video editing), and about 20 other apps — priced at roughly $60/month per user. Customers are individual creators, design teams at agencies and brands, and enterprise marketing departments. A secondary business (~25% of revenue) is Digital Experience: marketing analytics and campaign tools sold to large companies. The business converts attention (huge installed base of trained users) into recurring revenue (subscription fees) at extremely high gross margins (~88%).",
      strongReasoningIncludes: [
        'Names the specific product bundle (Creative Cloud) and/or a few flagship apps',
        'Explains the subscription/SaaS model (monthly or annual fees, not one-time licenses)',
        'Identifies who pays: individual creators, design teams, or enterprise marketing',
      ],
    },
    drivers: {
      modelAnswer:
        "Three drivers matter most: (1) Subscriber count — the installed base of paying users, which grows with new creators entering the market and Adobe expanding into adjacent segments like students and hobbyists. (2) Average Revenue Per User (ARPU) — driven by price increases, tier mix (single-app vs. full bundle), and enterprise seat expansion. (3) Net revenue retention — whether existing customers expand or churn. A healthy Adobe has NRR above 100%, meaning existing customers spend more each year. Growth = Subscribers × ARPU, and both levers have been pushed hard since 2013. The AI question is whether new users will keep joining at the same rate if cheaper tools can do 80% of what Creative Cloud does.",
      strongReasoningIncludes: [
        'Identifies subscriber count (or installed base) as a driver',
        'Identifies ARPU or pricing as a driver',
        'Connects drivers to how revenue actually changes — not just listing generic factors',
      ],
    },
    moat: {
      modelAnswer:
        "Adobe\'s primary moat is switching costs, reinforced by skill-based lock-in. Creative professionals spend years mastering Photoshop\'s 500+ tools and keyboard shortcuts; that skill set is only useful inside Adobe. Design teams have libraries of .PSD and .AI files that are Adobe-native — switching means re-learning and potentially re-working. Third layer: network effects in professional workflows (clients expect .PSD handoffs; job postings require \"Adobe proficiency\"). A smaller moat element is brand — \"industry standard\" status for creative work. BUT: the moat is under more pressure today than five years ago. Figma won web/UI design before Adobe could catch up (hence the $20B attempted acquisition). Canva owns casual design. Generative AI lets non-experts skip Photoshop entirely for many tasks. Moat is real but narrowing at the edges.",
      strongReasoningIncludes: [
        'Identifies switching costs and/or skill-based lock-in as the core moat',
        'Explains WHY switching is hard: muscle memory, file formats, team workflows',
        'Acknowledges moat is under pressure from Figma, Canva, or AI tools',
      ],
    },
    risks: {
      modelAnswer:
        "Three real threats over 5 years. (1) Generative AI commoditizes content creation. If a marketer can generate an ad from a text prompt in 30 seconds using a $20/month AI tool, the value of spending 2 hours in Photoshop drops. Adobe\'s own Firefly AI offsets some of this, but fundamentally the value of \"skilled creator hours\" is deflating. (2) Category-specific competitors picking off Adobe\'s bundle. Figma won design. Canva won casual. DaVinci Resolve is taking pro video. Each bundle component is being unbundled by a specialist. (3) Pricing saturation. Adobe\'s per-seat price has been pushed repeatedly; enterprise customers are resisting further increases and smaller competitors are anchoring expectations lower. A slower concern: regulatory scrutiny on bundled pricing and the blocked Figma deal signals antitrust headwinds against consolidation.",
      strongReasoningIncludes: [
        'Identifies generative AI as a structural threat — not just "competition"',
        'Names at least one specific competitor (Figma, Canva, DaVinci, Midjourney, etc.)',
        'Points to pricing saturation, bundle unbundling, or another specific vector',
      ],
    },
    valuation: {
      modelAnswer:
        "Adobe is priced as a mature growth business — not a hyper-growth story, but not a value stock either. At ~25-30x forward earnings with ~10-11% revenue growth and ~36% operating margins, the market is saying: \"reliable cash compounder with some AI risk, but margins and retention stay strong.\" Historically Adobe traded at 35-45x earnings when growth was 15%+. The multiple compression reflects that growth has slowed from hyper-growth to steady-growth, and that AI and competitor risk are no longer ignorable. This valuation is defensible if you believe: (a) Adobe\'s AI integration keeps customers from leaving, (b) pricing power remains, (c) the Digital Experience business keeps growing 10%+. It looks too expensive if you believe AI genuinely commoditizes creative work, or if the moat erodes faster than expected.",
      strongReasoningIncludes: [
        'Correctly identifies it as a mature growth / compounder valuation, not value or turnaround',
        'Reasons about the P/E in context of growth rate (PEG-style thinking)',
        'Names a specific condition that would make the current valuation wrong in either direction',
      ],
    },
    thesis: {
      modelAnswer:
        "BULL THESIS: Adobe has one of the strongest switching-cost moats in software, a 30M+ paying subscriber base, and has successfully monetized every prior technology shift (desktop → cloud, perpetual → subscription). AI is a threat, but Adobe is shipping Firefly and Acrobat AI features faster than competitors can disrupt the bundle. At 10-11% revenue growth, 36% margins, and a buyback-heavy capital return program, Adobe can compound owner returns at 13-15% annually for years — with far lower risk than a pure growth stock.\n\nBEAR THESIS: The switching-cost moat is weaker than it looks because generative AI lets customers skip Adobe entirely for many tasks. Figma won UI/UX before Adobe noticed; Canva is eating casual design; AI tools are eating marketing content. Every quarter, fewer creators need Creative Cloud to produce professional work. Growth slowed from 20%+ to 10-11% in two years, and the next leg down could take it to mid-single digits — at which point a 25x multiple compresses to 15x and the stock loses 30-40%.",
      strongReasoningIncludes: [
        'Picks a clear side (bull or bear) rather than hedging',
        'References specific drivers, moat, or risks from earlier steps',
        'The thesis is falsifiable — it would be wrong if a specific event or number occurred',
      ],
    },
    verdict: {
      modelAnswer:
        "A defensible PASS or a small BUY both work here — the key is knowing why. PASS: The moat is real but narrowing, AI is compressing value creation, and the current 25-30x multiple still assumes margins hold. I\'d only reconsider if (a) revenue re-accelerates above 13% driven by Firefly AI monetization, or (b) the multiple compresses below 20x giving a margin of safety. BUY: Adobe is the rare company with both durable cash flows and optionality on AI — if Firefly becomes the enterprise AI-creative standard, the upside is substantial. What changes my mind either way: the next 4 quarters of net revenue retention. If NRR stays above 105%, the moat is holding. If it drops toward 100%, the bear case is playing out in real time.",
      strongReasoningIncludes: [
        'Commits to a specific verdict: buy, pass, or a clearly-defined \"waiting for X\"',
        'Names a specific, measurable trigger that would change the answer',
        'The trigger is something observable in company reports, not vague macro',
      ],
    },
  },
};
