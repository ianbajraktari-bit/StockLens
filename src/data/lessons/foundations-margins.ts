import {
  Scale,
  ShieldCheck,
  Wallet,
  Search,
  Crosshair,
  HelpCircle,
} from 'lucide-react';
import type { Lesson } from './types';

/**
 * Scenario lesson — through-line: your friend has $50,000 to put in one stock.
 * Three real candidates: Microsoft, Costco, Kroger. Each step builds on the
 * last: calibrate margins → recession test → membership paradox → 3-years-later
 * ambiguous re-pick → red flags in a bull pitch → synthesis.
 */
export const foundationsMarginsLesson: Lesson = {
  id: 'foundations-margins',
  emoji: '💡',
  title: 'What a Business Keeps',
  subtitle:
    'Your friend has $50,000 and three stocks to choose from. Help them think it through.',
  description:
    'Margin — the cents of profit a business keeps from each dollar of revenue — is the most-cited shorthand for business quality. But that shorthand misleads more often than it helps. This lesson hands you one investment decision and walks it through three real companies (Microsoft, Costco, Kroger), and asks you to actually pick.',
  estimatedMinutes: 4,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['margins'],
  keyFacts: [],
  topics: [
    { label: 'Calibrating real-world margins', icon: Scale },
    { label: 'How margin acts as recession insurance', icon: ShieldCheck },
    { label: 'When low margins are the strategy', icon: Wallet },
    { label: 'Holding a thesis when the data shifts', icon: Crosshair },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────────
    // STEP 1 — Calibrate. Anchor the user before the side-by-side hits.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'Setting the Stage',
      topicIcon: Scale,
      context:
        'Your friend has $50,000 saved up and one rule: it has to go into one of three stocks. The candidates: Microsoft (MSFT), Costco (COST), Kroger (KR).\n\nBefore you compare them, calibrate one number — Microsoft\'s net margin. Net margin is the cents of profit a company keeps out of every dollar of revenue. Microsoft is the most profitable of the three. Make a guess.',
      question: 'What net margin does Microsoft run? (FY 2024, ~$245B revenue)',
      answer: 36,
      tolerance: 8,
      unit: '%',
      hint: 'Software has near-zero cost to deliver each additional copy.',
      reveal:
        'About 36%. Microsoft kept ~$88B out of every $245B in revenue. That\'s extraordinary — most businesses don\'t get within shouting distance. Software has almost no variable cost (no factories, no shipping, no inventory), so once Azure or Office is built, each new customer is mostly profit.',
      takeaway:
        'A "good" margin depends on the industry, but >30% is rarefied air. Most of the world lives in single digits.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 2 — Compare (decisive). Recession resilience side-by-side.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'compare',
      topic: 'The Recession Test',
      topicIcon: ShieldCheck,
      context:
        'Now look at all three side-by-side. A recession hits next year and revenue drops 10% across the board. To keep this clean, assume costs are sticky in the short term — you can\'t fire engineers or close stores overnight. So a revenue dollar lost is mostly a profit dollar lost.\n\nWho still walks away with healthy profit?',
      candidates: [
        {
          name: 'Microsoft',
          ticker: 'MSFT',
          tag: 'Software + cloud',
          metrics: [
            { label: 'Revenue', value: '$245B' },
            { label: 'Net margin', value: '36%' },
            { label: 'Profit', value: '$88B' },
            { label: 'After 10% rev drop', value: '~$63B', note: 'still ~29% margin' },
          ],
        },
        {
          name: 'Costco',
          ticker: 'COST',
          tag: 'Wholesale membership',
          metrics: [
            { label: 'Revenue', value: '$254B' },
            { label: 'Net margin', value: '2.9%' },
            { label: 'Profit', value: '$7.4B' },
            { label: 'After 10% rev drop', value: '~breakeven', note: 'cushion gone' },
          ],
        },
        {
          name: 'Kroger',
          ticker: 'KR',
          tag: 'Traditional grocery',
          metrics: [
            { label: 'Revenue', value: '$147B' },
            { label: 'Net margin', value: '1.5%' },
            { label: 'Profit', value: '$2.2B' },
            { label: 'After 10% rev drop', value: 'red ink', note: 'flips to a loss' },
          ],
        },
      ],
      question: 'Whose profit holds up best in this scenario?',
      options: [
        'Microsoft — its 36% margin gives it the most room to absorb the shock',
        'Costco — its sheer revenue scale means it has the most cash coming in',
        'Kroger — groceries are recession-proof since people still need to eat',
      ],
      bestIndex: 0,
      analyses: [
        'Right read. The 36% margin is essentially a shock absorber. Even with a 10% revenue hit, Microsoft is still printing ~$63B in profit at a ~29% margin — better than most companies do in a boom. This is what people mean when they call high margins "defensive."',
        'Revenue scale is a trap when margins are razor-thin. Costco brings in MORE revenue than Microsoft, but a 10% drop on a 2.9% margin business wipes out the entire profit cushion. Big topline, fragile bottom line.',
        'Half right — grocery demand IS recession-resilient. But that\'s a revenue argument, not a margin argument. Even if Kroger\'s revenue only drops 5%, its 1.5% margin has zero room to absorb cost shocks (energy, wages, supply chain). Defensive demand + defensive margins are different things.',
      ],
      punchline:
        'Margin is recession insurance. A 36% margin can swallow a 10% revenue shock and still be one of the best businesses in the world. A 1.5% margin can\'t absorb anything.',
      takeaway:
        'Higher margins don\'t just mean "more profitable" — they mean "more durable." The cushion matters most exactly when things get hard.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 3 — Decide. The Costco paradox. Now Microsoft looks obvious...
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Margin Paradox',
      topicIcon: Wallet,
      context:
        'So Microsoft is the obvious pick, right? Highest margin, most resilient, biggest cushion.\n\nExcept Costco at 2.9% margin returned ~650% over the last 15 years — better than the S&P, better than most "high quality" software stocks. Warren Buffett\'s partner Charlie Munger called it one of the best businesses in the world. Costco didn\'t accidentally end up at 2.9%. They got there ON PURPOSE — and have refused to raise margins for 40+ years.\n\nWhat does the headline 2.9% margin miss?',
      question: 'Why is Costco\'s thin margin actually the source of its strength?',
      options: [
        'It\'s not — Microsoft really is just better, and Costco\'s returns are luck',
        'Costco intentionally sells products near cost so members feel they\'re getting incredible deals — and the real product (the membership, at near-100% margin) renews 93% of the time',
        'Costco will eventually raise margins once they hit critical mass',
        'Margins don\'t matter once revenue is large enough',
      ],
      correctIndex: 1,
      punchline:
        'Costco runs two businesses stapled together: a near-cost wholesale operation (the bait) and a membership business (the hook). The wholesale business is a customer-acquisition machine for the high-margin membership. The 2.9% headline hides a ~100% margin product underneath.',
      wrongNudges: [
        'Costco has compounded for 40+ years — that\'s not luck. The 2.9% margin is misdirection: the real economics are in the $4.8B in membership fees, which cost almost nothing to collect.',
        '',
        'Costco has had multiple chances to raise margins and has refused every time. CEOs have been explicit: they\'d rather lose margin than lose member trust. Raising prices would break the value perception that drives 93% renewal.',
        'Revenue is the wrong frame. Visa, with FAR less revenue than Costco, has a 55% margin and a more durable business. The question is what KIND of dollar you\'re bringing in — Costco\'s membership dollars are some of the best dollars in retail.',
      ],
      takeaway:
        'When you see a thin margin, ask: is this margin the strategy, or the symptom? Costco at 2.9% is a strategy. A struggling retailer at 2.9% is a death spiral.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 4 — Compare (OPEN call). 3 years later, real ambiguity.
    // The user's prior framing gets stress-tested.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'compare',
      topic: 'Three Years Later',
      topicIcon: HelpCircle,
      context:
        'Skip ahead three years. Your friend held one of the three. The world shifted. Same three companies, fresh data — the picture isn\'t obvious anymore.\n\nThis one is genuinely hard. Smart investors disagree. Pick the one you\'d hold for the NEXT five years and we\'ll walk through the trade-offs.',
      candidates: [
        {
          name: 'Microsoft',
          ticker: 'MSFT',
          tag: 'AI tailwind',
          metrics: [
            { label: 'Net margin', value: '36%' },
            { label: 'Revenue growth', value: '+14%' },
            { label: 'AI products', value: 'ramping fast' },
            { label: 'Valuation', value: '~32x earnings', note: 'priced for perfection' },
          ],
        },
        {
          name: 'Costco',
          ticker: 'COST',
          tag: 'Renewal slipping',
          metrics: [
            { label: 'Net margin', value: '2.9%' },
            { label: 'Revenue growth', value: '+4%', note: 'down from +7%' },
            { label: 'Renewal rate', value: '88%', note: 'down from 93%' },
            { label: 'Valuation', value: '~50x earnings', note: 'priced higher than MSFT' },
          ],
        },
        {
          name: 'Kroger',
          ticker: 'KR',
          tag: 'Just merged',
          metrics: [
            { label: 'Net margin', value: '1.5%' },
            { label: 'Revenue growth', value: '+5%' },
            { label: 'Market share', value: '~30%', note: 'after Albertsons merger' },
            { label: 'Valuation', value: '~14x earnings', note: 'cheap on paper' },
          ],
        },
      ],
      question: 'Which would YOU hold for the next 5 years?',
      options: [
        'Microsoft — pay up for the AI tailwind and cushion',
        'Costco — bet the slip is temporary and the moat holds',
        'Kroger — take the cheap valuation and let the merger compound',
      ],
      // No bestIndex — this is open. Each path gets its own targeted analysis.
      analyses: [
        'Defensible — and the consensus pick. The 36% margin is still the cushion, AI is a real growth tailwind, and the existing cloud business is sticky enough that even a recession barely dents it. The risk is the price tag: at ~32x earnings, the market already assumes AI delivers. If AI revenue underperforms expectations, the stock can fall 20%+ even if the business is fine. You\'re buying a great business at a price that doesn\'t leave room for disappointment.',
        'Contrarian, but not crazy. The headline (renewal dropping from 93% to 88%) is a real warning — that 5-point move means the membership flywheel is bleeding. But Costco still has 60M+ members, the brand still works, and management has a 40-year track record of defending the model. The bull case is "this is a temporary blip, the moat holds." The bear case is "this is the start of Walmart Plus and Amazon Prime eating the wholesale model." Reasonable people disagree. The 50x P/E means if the bear case is right, the stock gets cut in half.',
        'The deep-value pick. 14x earnings is genuinely cheap, the merger gives Kroger ~30% market share which is real pricing power, and groceries are recession-resistant. The bear case is brutal though: 1.5% margins mean almost zero cushion if Walmart cuts prices, plus the merger creates integration risk. You\'d be betting that a low-margin business with a stable franchise, bought cheaply, beats two higher-quality businesses bought at full price. Sometimes that bet wins. Often it doesn\'t.',
      ],
      punchline:
        'Real investing rarely has a clean answer. Every choice here is defensible — and every choice has a way to fail. The job isn\'t finding the "right" stock. It\'s holding a thesis you can defend when the data shifts under you.',
      takeaway:
        'When a question has no clean answer, don\'t reach for one. Pick the trade-off you\'re willing to live with — and write down what would prove you wrong.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 5 — Tap. Bull pitch with red flags. Builds on Step 4's data.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Reading the Pitch',
      topicIcon: Search,
      intro:
        'A friend at work sends you this Costco bull-case pitch they wrote. They\'re trying to get you excited. Tap the lines that should make you MORE worried, not less. (Three of them, hidden among real strengths.)',
      passage: [
        {
          type: 'text',
          value: 'Costco is the highest-quality retailer on Earth. ',
        },
        {
          type: 'chip',
          value: '60M+ members renew at 88%',
          signal: true,
          feedback:
            'They\'re framing 88% as a strength — and historically it would be. But last lesson you saw the renewal rate has slipped from 93%. A 5-point drop in renewal is the membership flywheel slowing down. The pitch is dressing up bad news as good news.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Membership fees produce ~$4.8B at near-100% margin',
          signal: false,
          feedback:
            'Real strength. This is exactly why Costco\'s thin product margin is misleading — the membership is the product, and it prints money.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Trading at 50x earnings — premium quality deserves a premium price',
          signal: true,
          feedback:
            '50x earnings is a HUGE assumption baked in. Microsoft trades at 32x WITH a 36% margin and AI growth. If the membership flywheel slows, Costco doesn\'t deserve a higher multiple than Microsoft. The "premium for quality" framing assumes the quality is intact — that\'s the very thing in question.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Walmart Plus is a "different demographic" so it doesn\'t threaten Costco',
          signal: true,
          feedback:
            'This is the kind of comfortable assumption that gets investors hurt. Walmart Plus has 100M+ members. Amazon Prime has 200M+. Both are pushing into bulk and household goods. Telling yourself the threat doesn\'t apply because of "demographics" is exactly the bias that makes you miss disruption when it\'s happening.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: '40-year history of consistent execution',
          signal: false,
          feedback:
            'Real strength. Track record is one of the best signals in investing — but track record alone doesn\'t guarantee the next decade. Use it as evidence, not proof.',
        },
      ],
      requiredSignals: 3,
      reveal:
        'Three red flags spun as strengths: the 88% renewal (down 5 points), the 50x valuation (assumes quality is intact), and the dismissive Walmart framing. Real strengths: $4.8B in membership fees and the 40-year track record. A good pitch can be true and still misleading — the question is what it doesn\'t emphasize.',
      takeaway:
        'When you read a bull case, ask: what fact is being framed as a strength that\'s actually a warning? Pitches optimize for excitement, not balance.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 6 — Synthesis. Free response.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'thinking',
      prompt:
        'Your friend reads this lesson, looks at all three companies, and says: "I\'m just going to buy Microsoft. 36% margin. Done." In 2-3 sentences, give them your strongest pushback — using what you saw across these steps.',
      placeholder:
        'Think about: what does a 36% margin protect against AND not protect against? What did Costco\'s 2.9% reveal? What was the role of the price tag in step 4?',
      modelAnswer:
        'A 36% margin is real protection against operational shocks — Microsoft survives a recession that would cripple Kroger — but margin alone doesn\'t protect against the price you pay. At 32x earnings, Microsoft is priced like AI is going to deliver; if it underdelivers, you can lose 20%+ on a great business. And the "high margin = quality" rule misled you on Costco — its 2.9% headline hid the membership engine running at near-100%. The right question isn\'t "which company has the best margin?" — it\'s "what risk am I underwriting at this price, and what would prove me wrong?"',
      strongReasoningIncludes: [
        'Acknowledges that high margin is real protection (don\'t pretend Microsoft\'s 36% is meaningless)',
        'Identifies that price/valuation matters separately from business quality',
        'References at least one nuance from earlier in the lesson — the Costco paradox, the recession asymmetry, or the Step 4 trade-off',
      ],
    },
  ],
  takeaways: [
    'Net margin = cents of profit kept per dollar of revenue. Microsoft 36%, Costco 2.9%, Kroger 1.5% — same dollar, vastly different keep rates.',
    'High margin is recession insurance. A 36% margin survives shocks that wipe out a 1.5% business. The cushion matters most exactly when things get hard.',
    'A thin margin can be the strategy, not the symptom. Costco runs cheap on purpose — the real product is the membership at near-100% margin, hidden under the headline.',
    'Margin is one input, not a verdict. Two great companies can both be wrong investments at the wrong price — and a defensible thesis includes what would prove you wrong.',
  ],
  completionMessages: {
    perfect:
      'Sharp work. You moved past "high margin = good business" into the actual decision: who survives, what does the headline hide, and what trade-off are you underwriting at this price.',
    great:
      'Strong run. You can see margin as a multi-layered signal — cushion, strategy, and warning — instead of a single number.',
    good: 'Solid grounding. Hold onto the through-line: same three companies, three different views depending on which lens you applied.',
    low: 'Worth re-running. The point of this lesson isn\'t the three companies — it\'s the habit of asking "what does this margin tell me, and what does it miss?"',
  },
};
