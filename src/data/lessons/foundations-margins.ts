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
    'Margin is the cents of profit a business keeps out of each dollar of revenue. It\'s the most-cited shorthand for business quality, and it misleads about as often as it helps. This lesson walks one investment decision through Microsoft, Costco, and Kroger, and asks you to actually pick.',
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
        'Your friend has $50,000 saved up and one rule: it has to go into one of three stocks. The candidates: Microsoft (MSFT), Costco (COST), Kroger (KR).\n\nBefore you compare them, calibrate one number: Microsoft\'s net margin. Net margin is the cents of profit a company keeps out of every dollar of revenue. Microsoft is the most profitable of the three. Make a guess.',
      question: 'What net margin does Microsoft run? (FY 2024, ~$245B revenue)',
      answer: 36,
      tolerance: 8,
      unit: '%',
      hint: 'Software has near-zero cost to deliver each additional copy.',
      reveal:
        'About 36%. Microsoft kept ~$88B out of every $245B in revenue. Most public companies don\'t get within shouting distance of that. Software has almost no variable cost (no factories, no shipping, no inventory), so once Azure or Office is built, each new customer is largely profit.',
      takeaway:
        'A "good" margin depends heavily on the industry, but anything above 30% is rare. Most public companies operate in single digits.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 2 — Compare (decisive). Recession resilience side-by-side.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'compare',
      topic: 'The Recession Test',
      topicIcon: ShieldCheck,
      context:
        'Three side by side. A recession hits next year and revenue drops 10% across the board. Assume costs are sticky in the short term: you can\'t fire engineers or close stores overnight, so most of the revenue you lose comes straight off the bottom line.\n\nWho still walks away with healthy profit?',
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
        'Right read. The 36% margin acts as a shock absorber. Even after a 10% revenue hit, Microsoft still prints ~$63B in profit at a ~29% margin, which is better than most companies manage in a boom. That\'s what people mean when they call high margins defensive.',
        'Revenue scale is a trap when margins are this thin. Costco brings in more revenue than Microsoft, but a 10% drop applied to a 2.9% margin wipes out the entire profit cushion. The topline is huge; there\'s nothing underneath it to absorb the loss.',
        'Half right. Grocery demand really is recession-resilient. But that\'s an argument about Kroger\'s revenue, not its margin. Even if Kroger\'s revenue only falls 5%, a 1.5% margin has no room left to absorb cost shocks (energy, wages, supply chain). Defensive demand and defensive margins do different jobs.',
      ],
      punchline:
        'A 36% margin can swallow a 10% revenue shock and still leave Microsoft as one of the most profitable businesses on the planet. A 1.5% margin can\'t absorb much of anything. The cushion isn\'t an abstraction; it\'s the part of the income statement that decides who survives a bad year.',
      takeaway:
        'Higher margins make a business more durable, not just more profitable. The cushion is most useful in the years it\'s hardest to add to it.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 3 — Decide. The Costco paradox. Now Microsoft looks obvious...
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Margin Paradox',
      topicIcon: Wallet,
      context:
        'Microsoft looks like the obvious pick. Highest margin, most resilient, biggest cushion.\n\nThen you notice Costco at 2.9% returned ~650% over the last 15 years, better than the S&P and better than most "high quality" software stocks. Charlie Munger called it one of the best businesses in the world. Costco didn\'t drift to a 2.9% margin by accident; they engineered it, and they\'ve refused to raise it for forty years.\n\nSo what is the 2.9% margin not telling you?',
      question: 'Why is Costco\'s thin margin actually the source of its strength?',
      options: [
        'It\'s not — Microsoft really is just better, and Costco\'s returns are luck',
        'Costco intentionally sells products near cost so members feel they\'re getting incredible deals — and the real product (the membership, at near-100% margin) renews 93% of the time',
        'Costco will eventually raise margins once they hit critical mass',
        'Margins don\'t matter once revenue is large enough',
      ],
      correctIndex: 1,
      punchline:
        'Costco is two businesses stapled together. The wholesale operation runs near cost and acts as a customer-acquisition engine for the second business: a membership product that collects ~$4.8B in fees at almost 100% margin. The 2.9% net margin describes the wholesale half. It doesn\'t describe the half where the actual money is made.',
      wrongNudges: [
        'Forty years of compounding isn\'t luck. The 2.9% margin is the wrong line to look at. The real economics live in the $4.8B in membership fees, which Costco collects at almost no incremental cost.',
        '',
        'Costco has had repeated opportunities to raise margins and turned them down each time. Successive CEOs have said the same thing publicly: they\'d rather give up margin than give up member trust. The value perception is what drives 93% renewal, and it doesn\'t survive a margin grab.',
        'Revenue is the wrong frame here. Visa has far less revenue than Costco, a 55% margin, and a more durable business than either. What matters is what kind of dollar a company is bringing in. Costco\'s membership dollars are among the highest-quality dollars in retail.',
      ],
      takeaway:
        'When you see a thin margin, the question worth asking is whether the margin is the strategy or the symptom. The same 2.9% can describe a deliberate trade or a business running out of room, and you can\'t tell which from the number alone.',
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
        'Skip ahead three years. Your friend held one of the three. The world shifted. Same three companies, fresh data, and the picture isn\'t obvious anymore.\n\nThis one is genuinely hard, and smart investors disagree. Pick the one you\'d hold for the next five years, and we\'ll walk through the trade-off you\'re accepting.',
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
        'Defensible, and the consensus pick. The 36% margin is still the cushion, AI is a real growth tailwind, and the existing cloud business is sticky enough that even a recession barely dents it. The risk is the price tag. At ~32x earnings, the market already assumes AI delivers. If the AI ramp comes in below expectations, the stock can fall 20% even if the underlying business is fine. You\'re buying a great business at a price that leaves no room for disappointment.',
        'Contrarian, not crazy. Renewal slipping from 93% to 88% is a real warning. A 5-point drop is the membership flywheel slowing, and the membership flywheel is the business. Costco still has 60M+ members, the brand still works, and management has a forty-year record of defending the model. The bull case is that the slip is temporary. The bear case is that Walmart Plus and Amazon Prime are starting to eat the wholesale model. Both are reasonable. At a 50x P/E, the bear case being right cuts the stock in half.',
        'The deep-value pick. 14x earnings is genuinely cheap, the merger gives Kroger about 30% market share (real pricing power), and groceries hold up in recessions. The bear case is unforgiving. 1.5% margins leave almost no cushion if Walmart cuts prices, and the merger adds years of integration risk on top. You\'d be betting that a low-margin business with a stable franchise, bought cheaply, beats two higher-quality businesses bought at full price. Sometimes that wins. More often it doesn\'t.',
      ],
      punchline:
        'Most actual investing decisions look like this. Three defensible choices, each with a different way of being wrong. The work isn\'t finding the option that turns out to be right. It\'s picking the trade-off you can hold to when news arrives that argues against it.',
      takeaway:
        'Open questions don\'t get cleaner if you force an answer. Pick the trade-off you\'re willing to live with, and write down ahead of time what would change your mind.',
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
            'They\'re framing 88% as a strength, and historically it would be. The catch is the trend: renewal has slipped from 93%. A 5-point drop in renewal is the membership flywheel slowing down, and the pitch is using a still-impressive level to walk past a meaningful change.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Membership fees produce ~$4.8B at near-100% margin',
          signal: false,
          feedback:
            'Real strength. This is the line that makes Costco\'s thin product margin misleading: the membership is itself the product, and it pays for nearly all the operating profit.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Trading at 50x earnings — premium quality deserves a premium price',
          signal: true,
          feedback:
            '50x earnings bakes a lot of assumption in. Microsoft trades at 32x with a 36% margin and an AI tailwind. If the membership flywheel is slowing, it\'s hard to argue Costco deserves the higher multiple. "Premium for quality" only works as a frame if you\'ve confirmed the quality is intact, which is the part the pitch is trying to assert past.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Walmart Plus is a "different demographic" so it doesn\'t threaten Costco',
          signal: true,
          feedback:
            'This is the kind of comfortable claim that ages badly. Walmart Plus has 100M+ members, Amazon Prime has 200M+, and both are pushing into bulk and household goods. Telling yourself a competitor doesn\'t threaten you because of "demographics" tends to be the assumption you wish you\'d revisited two years later.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: '40-year history of consistent execution',
          signal: false,
          feedback:
            'Real strength. Track record is one of the better signals in investing, though it doesn\'t guarantee the next decade by itself. Use it as evidence, not as proof.',
        },
      ],
      requiredSignals: 3,
      reveal:
        'Three red flags presented as strengths: the 88% renewal (down 5 points from 93%), the 50x valuation (which presumes the quality is intact), and the dismissive Walmart framing. Real strengths: the $4.8B in membership fees and the forty-year track record. A pitch can be factually accurate and still misleading. The interesting question is what it underweights.',
      takeaway:
        'When you read a bull case, the useful question is which "strength" the writer is using to walk you past a warning. Pitches are written to convince, not to inform.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 6 — Synthesis. Free response.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'thinking',
      prompt:
        'Your friend reads this lesson, looks at all three companies, and says: "I\'m just going to buy Microsoft. 36% margin. Done." In 2-3 sentences, give them your strongest pushback, drawing on what you saw across these steps.',
      placeholder:
        'Think about: what does a 36% margin protect against AND not protect against? What did Costco\'s 2.9% reveal? What was the role of the price tag in step 4?',
      modelAnswer:
        'A 36% margin really is protection against operational shocks; Microsoft survives a recession that would crush Kroger. But margin doesn\'t protect against the price you pay for it. At 32x earnings, Microsoft is priced as if AI is going to deliver, and a great business can still cost you 20% if the ramp comes in slower than the multiple assumes. The same shorthand misled you one step earlier on Costco: the 2.9% headline hid the membership engine running at almost 100%. So "highest margin" isn\'t really the question. The question is what risk you\'re paying for at this price, and what would tell you you were wrong about it.',
      strongReasoningIncludes: [
        'Acknowledges that high margin is real protection (don\'t pretend Microsoft\'s 36% is meaningless)',
        'Identifies that price/valuation matters separately from business quality',
        'References at least one nuance from earlier in the lesson — the Costco paradox, the recession asymmetry, or the Step 4 trade-off',
      ],
    },
  ],
  takeaways: [
    'Net margin is the cents of profit kept per dollar of revenue. The same revenue dollar lands very differently at Microsoft (36%), Costco (2.9%), and Kroger (1.5%).',
    'Margin is part of how a business survives a bad year. A 36% cushion absorbs shocks that put a 1.5% business in the red.',
    'A thin margin can be a deliberate trade. Costco runs near cost on purpose because the membership underneath the headline is the actual high-margin product.',
    'Margin alone is not a verdict. A great business at the wrong price can still be a bad investment, and a thesis you can hold should come with the conditions that would prove it wrong.',
  ],
  completionMessages: {
    perfect:
      'Good work. You\'re past the "high margin equals good business" shorthand and into the harder question of who survives, what the headline hides, and what you\'re paying for at this price.',
    great:
      'Solid pass. You can read margin as cushion, as strategy, and as warning, depending on which company you\'re looking at.',
    good: 'There\'s a foundation here worth keeping. Same three companies told three different stories depending on which lens you put on them.',
    low: 'Run this one again. The lesson isn\'t really about Microsoft, Costco, and Kroger; it\'s the habit of asking what a margin number does and doesn\'t tell you.',
  },
};
