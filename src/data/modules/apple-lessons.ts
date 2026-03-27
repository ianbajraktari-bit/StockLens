import type { CompanyModule } from '../lessonTypes';

export const appleModule: CompanyModule = {
  id: 'apple',
  name: 'Apple',
  ticker: 'AAPL',
  logo: '🍎',
  color: '#a855f7',
  tier: 'beginner',
  tierOrder: 1,
  description: 'Learn fundamental investing concepts through the most valuable company on earth.',
  dynamicTicker: 'AAPL',

  lessons: [
    // ── Lesson 1: Business Model ─────────────────────────────────────
    {
      id: 'apple-business-model',
      title: 'What Does Apple Actually Sell?',
      objective: 'Understand Apple\'s business model and primary revenue drivers.',
      whyItMatters: 'You cannot value a company if you don\'t understand how it makes money.',
      context: 'Apple is the most valuable company in the world at ~$3.6 trillion. Most people know Apple for the iPhone, but the business is more nuanced than "phone company." Understanding the full picture is step one.',
      evidence: [
        { content: 'iPhone: 52% of revenue — the flagship, but growth has slowed', source: 'Apple FY2025', type: 'stat' },
        { content: 'Services: 24% of revenue, growing 14% YoY at 70%+ margins', source: 'Apple Q1 FY2026', type: 'stat' },
        { content: 'Mac, iPad, Wearables: 24% combined — mature, stable categories', source: 'Apple FY2025', type: 'stat' },
        { content: '2.5 billion active devices worldwide', source: 'Apple earnings call', type: 'stat' },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Based on the evidence above, which statement BEST describes Apple\'s current business model?',
        options: [
          { id: 'a', text: 'A phone company that also sells computers and headphones.' },
          { id: 'b', text: 'A hardware ecosystem that monetizes its installed base through high-margin services.' },
          { id: 'c', text: 'A software company that uses hardware as a distribution channel.' },
          { id: 'd', text: 'A luxury brand that charges premium prices for status.' },
        ],
        correctId: 'b',
        explanation: 'Apple\'s business model is a hardware ecosystem that locks users in, then monetizes them through Services (App Store, iCloud, Apple Music, Apple Pay). The iPhone is the anchor, but Services is where the margin expansion and growth story lives. This distinction matters because the market is valuing Apple as a platform, not just a hardware maker.',
      },
    },

    // ── Lesson 2: Revenue & Economics ────────────────────────────────
    {
      id: 'apple-revenue-economics',
      title: 'How Does Apple Make Money?',
      objective: 'Understand the relationship between products, services, and ecosystem monetization.',
      whyItMatters: 'Revenue mix determines margin profile. Margin profile determines valuation. Understanding this chain is fundamental.',
      context: 'Apple\'s revenue has grown only ~4% annually, but its profitability keeps expanding. How? The secret is in the mix: as Services (70%+ margins) grows faster than hardware (36% margins), the blended margin improves even if total growth is modest.',
      evidence: [
        { content: 'Product gross margin: ~36% — typical for premium hardware', source: 'Apple earnings', type: 'stat' },
        { content: 'Services gross margin: ~72% — nearly double products', source: 'Apple earnings', type: 'stat' },
        { content: 'Services grew from 18% to 24% of revenue in 3 years', source: 'Apple filings', type: 'trend' },
        { content: 'Overall gross margin: 48.2% — up from 42% three years ago', source: 'Apple Q1 FY2026', type: 'trend' },
      ],
      question: {
        type: 'select-best',
        prompt: 'Which metric is MOST important for understanding whether Apple\'s margin expansion will continue?',
        options: [
          { id: 'a', text: 'Total iPhone units sold per quarter' },
          { id: 'b', text: 'Services revenue as a percentage of total revenue' },
          { id: 'c', text: 'Year-over-year revenue growth rate' },
          { id: 'd', text: 'R&D spending as a percentage of revenue' },
        ],
        bestId: 'b',
        explanation: 'Services mix is the key driver. Every percentage point that Services grows as a share of total revenue mechanically improves Apple\'s blended gross margin — because Services margins are nearly 2x product margins. If Services reaches 30% of revenue, Apple\'s overall margin could approach 52%+. This is the core of the "Apple is becoming a platform company" thesis.',
      },
    },

    // ── Lesson 3: Competitive Advantage ─────────────────────────────
    {
      id: 'apple-moat',
      title: 'What Is Apple\'s Moat?',
      objective: 'Identify ecosystem lock-in (not just brand) as Apple\'s primary competitive advantage.',
      whyItMatters: 'Moats determine whether a company can sustain returns. Understanding WHAT the moat actually is prevents you from overpaying for the wrong reasons.',
      context: 'Many investors say Apple\'s moat is "brand." That\'s too simple. A moat is a structural advantage that prevents competitors from taking market share even when they offer similar products. Apple\'s moat runs deeper than brand recognition.',
      evidence: [
        { content: '93%+ iPhone retention rate — users almost never switch to Android', source: 'Consumer Intelligence Research', type: 'stat' },
        { content: 'Average Apple household owns 4+ Apple devices', source: 'Industry estimates', type: 'stat' },
        { content: 'Switching cost: migrating photos, apps, subscriptions, and ecosystem integrations', source: 'Product analysis', type: 'comparison' },
        { content: 'Apple\'s vertical integration (custom chips, OS, services) creates performance advantages competitors can\'t easily replicate', source: 'Tech analysis', type: 'comparison' },
      ],
      question: {
        type: 'free-response',
        prompt: 'In 2-3 sentences, explain what Apple\'s moat actually is. Be specific — "brand loyalty" alone is not a sufficient answer for an investor.',
        hint: 'Think about what specifically prevents an Apple user from switching to Android, even if Android offered a better phone.',
        rubric: {
          objective: 'Identify ecosystem lock-in and switching costs as the primary moat, not just brand',
          keyConceptsExpected: ['ecosystem', 'switching costs', 'lock-in', 'installed base', 'services', 'integration', 'retention'],
          scoringNotes: 'Strong answers explain WHY customers stay (ecosystem dependencies, data migration pain, multi-device integration) rather than just saying "brand loyalty." Best answers connect the moat to Services monetization — the moat enables the pricing power and recurring revenue.',
        },
      },
    },

    // ── Lesson 4: What Changed ──────────────────────────────────────
    {
      id: 'apple-what-changed',
      title: 'What Changed in Apple\'s Story?',
      objective: 'Identify the narrative shift from "hardware company" to "services platform" and understand why it matters for valuation.',
      whyItMatters: 'Stocks move on narrative shifts, not just fundamentals. Understanding what changed tells you what the market now believes — and where it could be wrong.',
      context: 'Apple\'s stock is up ~40% in the past year. Revenue growth was only ~4%. So what drove the stock? The market re-rated Apple — it now values the company differently than it did two years ago. Apple\'s P/E expanded from ~23x to ~31x.',
      evidence: [
        { content: 'P/E ratio expanded from 23x to 31x over two years — a re-rating, not an earnings move', source: 'Market data', type: 'trend' },
        { content: 'Services revenue hit $30B/quarter, growing 14% — the "platform" narrative', source: 'Apple Q1 FY2026', type: 'stat' },
        { content: 'Apple Intelligence (AI features) announcement reignited the upgrade cycle narrative', source: 'WWDC 2025', type: 'quote' },
        { content: 'Share buybacks: ~$90B in the past 12 months', source: 'Apple capital returns', type: 'stat' },
      ],
      question: {
        type: 'bull-bear-classify',
        prompt: 'Classify each of these developments as bullish, bearish, or neutral for Apple\'s stock over the next 12 months.',
        statements: [
          { id: 's1', text: 'Services revenue is growing 14% and is now 24% of total revenue' },
          { id: 's2', text: 'The P/E ratio has expanded from 23x to 31x without proportional earnings growth' },
          { id: 's3', text: 'Apple Intelligence requires newer hardware, potentially triggering an upgrade cycle' },
          { id: 's4', text: 'EU Digital Markets Act is forcing App Store changes that could reduce commissions' },
          { id: 's5', text: 'Apple bought back $90B of stock in the last 12 months' },
        ],
        correctClassification: {
          s1: 'bull',
          s2: 'bear',
          s3: 'bull',
          s4: 'bear',
          s5: 'neutral',
        },
        explanation: 'Services growth (bull) validates the platform thesis. But P/E expansion without earnings growth (bear) means the stock is more expensive for the same business — it needs the narrative to play out. Apple Intelligence is bullish if it drives real upgrades. EU regulation is bearish because it directly threatens the highest-margin part of Services. Buybacks are neutral — they help EPS mechanically but don\'t change the underlying business quality. Sophisticated investors weigh narrative shifts against valuation, not just direction.',
      },
    },

    // ── Lesson 5: Key Metric ────────────────────────────────────────
    {
      id: 'apple-key-metric',
      title: 'What Matters Most Right Now?',
      objective: 'Identify the single most important variable for Apple\'s stock over the next 12 months.',
      whyItMatters: 'The best investors are ruthlessly selective. Tracking 20 metrics is noise. Knowing which ONE matters most is signal.',
      context: 'Apple has many moving parts: iPhone cycles, Services growth, China risk, AI rollout, regulation, buybacks. But not all variables are equally important. One of them dominates the others for the stock\'s direction from here.',
      evidence: [
        { content: 'The entire P/E re-rating (23x → 31x) is built on the Services growth narrative', source: 'Valuation analysis', type: 'comparison' },
        { content: 'Services growth trend: 16% → 14% — slight deceleration already visible', source: 'Apple quarterly filings', type: 'trend' },
        { content: 'iPhone replacement cycle: averaging 4.2 years, the longest ever', source: 'Industry data', type: 'stat' },
        { content: 'China revenue: ~17% of total, under pressure from Huawei', source: 'Apple segment data', type: 'stat' },
      ],
      question: {
        type: 'free-response',
        prompt: 'What ONE metric matters most for whether Apple deserves its premium 31x P/E multiple over the next 12 months? Explain why it dominates the others.',
        hint: 'Think about what justified the re-rating from 23x to 31x. What keeps that premium intact?',
        rubric: {
          objective: 'Identify Services growth rate as the single most important variable',
          keyConceptsExpected: ['services growth', 'services revenue', 'platform', 'multiple', 'valuation', 're-rating', 'premium', 'margins'],
          scoringNotes: 'The best answer identifies Services growth rate as the key metric AND explains the causal chain: Services growth drives the platform narrative, the platform narrative drives the P/E re-rating, and a deceleration below 10% would likely compress the multiple back toward mid-20s. Good answers that pick other metrics (iPhone cycles, China) should get partial credit if the reasoning is sound.',
        },
      },
    },

    // ── Lesson 6: Valuation ─────────────────────────────────────────
    {
      id: 'apple-valuation',
      title: 'Is the Stock Cheap, Fair, or Expensive?',
      objective: 'Begin basic valuation thinking by understanding what assumptions a stock price embeds.',
      whyItMatters: 'A great business can be a terrible investment at the wrong price. Valuation is not about precision — it\'s about understanding what you\'re paying for.',
      context: 'Apple trades at 31x earnings. The S&P 500 average is ~22x. Apple\'s historical average P/E is 22x (5-year) and 18x (10-year). The question is not "is 31x high?" — the question is "what does 31x assume about the future, and do you believe those assumptions?"',
      evidence: [
        { content: 'Current P/E: 31x — 42% premium to the S&P 500', source: 'Market data', type: 'stat' },
        { content: 'Historical P/E: 22x (5yr avg), 18x (10yr avg)', source: 'Market data', type: 'comparison' },
        { content: 'If growth slows to 5% and P/E compresses to 25x, implied downside is ~20%', source: 'Scenario analysis', type: 'comparison' },
        { content: 'Analyst consensus price target: ~$210 — only ~3% upside from current levels', source: 'Wall Street consensus', type: 'stat' },
      ],
      question: {
        type: 'scenario-choice',
        prompt: 'Which scenario BEST describes Apple\'s current valuation setup?',
        scenarios: [
          {
            id: 'cheap',
            label: 'Undervalued',
            description: 'Services growth will accelerate, AI will drive a super-cycle, and Apple deserves 35x+. The stock is cheap for what you\'re getting.',
          },
          {
            id: 'fair',
            label: 'Fairly Valued',
            description: 'The current price already embeds the base case — steady Services growth, stable iPhone, and no regulatory disruption. There\'s limited upside without a positive surprise.',
          },
          {
            id: 'expensive',
            label: 'Overvalued',
            description: 'At 31x with ~4% revenue growth, the stock is priced for perfection. Any stumble in Services, China, or regulation would compress the multiple significantly.',
          },
        ],
        bestId: 'fair',
        explanation: 'At 31x with analyst targets implying only ~3% upside, the market has largely priced in the base case. Apple is NOT cheap — the P/E is 42% above the S&P 500 and well above its own historical average. But calling it "overvalued" requires a specific catalyst for multiple compression. The honest answer is that the stock is fairly valued if you believe the Services narrative, and the real question is whether the bull or bear surprises are more likely. This is the nuanced thinking that separates beginner from intermediate investors.',
      },
    },

    // ── Lesson 7: Risk & Thesis ─────────────────────────────────────
    {
      id: 'apple-risk-thesis',
      title: 'What Breaks the Thesis?',
      objective: 'Articulate the single biggest risk to an Apple investment clearly and concretely.',
      whyItMatters: 'The best investors spend more time on what could go wrong than what could go right. If you can\'t articulate the risk, you don\'t understand the investment.',
      context: 'Every thesis has a kill shot — one development that would fundamentally change the investment case. For Apple at 31x, the thesis depends on Services growth sustaining the platform narrative. So the question becomes: what specifically could break that?',
      evidence: [
        { content: 'EU Digital Markets Act actively being enforced against App Store practices', source: 'EU Commission', type: 'quote' },
        { content: 'US DOJ antitrust case targeting Apple\'s ecosystem practices', source: 'Department of Justice', type: 'quote' },
        { content: 'Google search deal (~$20B/yr) is a concentrated risk within Services', source: 'Industry estimates', type: 'stat' },
        { content: 'A 5-point margin compression in Services would reduce overall EPS by ~4%', source: 'Sensitivity analysis', type: 'comparison' },
      ],
      question: {
        type: 'free-response',
        prompt: 'What is the single biggest risk to an Apple investment at current levels? Be specific — name the risk, explain the mechanism, and estimate the potential impact.',
        hint: 'Think about which risk directly threatens the segment the market is paying the highest premium for.',
        rubric: {
          objective: 'Identify App Store regulation as the primary risk because it directly threatens Services margins',
          keyConceptsExpected: ['regulation', 'App Store', 'services', 'margins', 'commission', 'DMA', 'antitrust', 'EU', 'sideloading'],
          scoringNotes: 'The best answers identify regulation targeting the App Store specifically — not vague "regulation" — and explain the mechanism: forced commission reductions compress Services margins, which is the exact segment driving the valuation re-rating. Good answers that pick China risk or iPhone saturation should get partial credit if the reasoning is concrete and well-structured. Weaker answers cite vague macro risks or competition without specificity.',
        },
      },
    },
  ],
};
