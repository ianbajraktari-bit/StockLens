import {
  Castle,
  ShieldCheck,
  Sparkles,
  Search,
  Crosshair,
  HelpCircle,
} from 'lucide-react';
import type { Lesson } from './types';

/**
 * Scenario lesson — through-line: your colleague has $50,000 and three
 * "wide-moat" candidates. Three real businesses, three different moat
 * types: Visa (network effects), Hermès (brand + scarcity), Salesforce
 * (switching costs). Each step builds: calibrate Visa → disruption test →
 * Hermès scarcity paradox → 3-years-later open call → red flags in a
 * "moat" pitch with no real moat → synthesis.
 */
export const foundationsMoatsLesson: Lesson = {
  id: 'foundations-moats',
  emoji: '🏰',
  title: 'What Keeps Winners Winning',
  subtitle:
    'Your colleague has $50,000 and three "wide-moat" stocks. Help them think it through.',
  description:
    'A moat is a structural advantage competitors can\'t copy with money. The word gets thrown at every company with high market share — but real moats and fake moats look identical until they\'re tested. This lesson hands you one decision and walks it through three real "moat" companies (Visa, Hermès, Salesforce), and asks you to actually pick.',
  estimatedMinutes: 4,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['moats'],
  keyFacts: [],
  topics: [
    { label: 'Network effects, brand, switching costs', icon: Castle },
    { label: 'How a moat acts under direct attack', icon: ShieldCheck },
    { label: 'When constraint IS the strategy', icon: Sparkles },
    { label: 'Holding a thesis when the moat shifts', icon: Crosshair },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────────
    // STEP 1 — Calibrate. Visa's net margin anchors what a real moat does.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'Setting the Stage',
      topicIcon: Castle,
      context:
        'Your colleague has $50,000 and one rule: it has to go into one of three companies that everyone calls "wide-moat." The candidates: Visa (V), Hermès (RMS.PA), Salesforce (CRM).\n\nBefore you compare them, calibrate one number — Visa\'s net margin. Visa runs the rails for ~65% of US credit card transactions. Each swipe earns Visa a tiny cut. Make a guess.',
      question: 'What net margin does Visa run? (FY 2024, ~$36B revenue)',
      answer: 54,
      tolerance: 8,
      unit: '%',
      hint: 'Visa\'s "factory" is software. Each additional transaction has almost zero variable cost.',
      reveal:
        'About 54%. Visa kept ~$19B out of every $36B in revenue. That\'s rarefied. The reason isn\'t pricing power on any single transaction — Visa\'s cut is tiny. It\'s that Visa runs a two-sided network: every cardholder makes Visa more valuable to merchants, and every merchant makes Visa more valuable to cardholders. The network is the moat. The 54% margin is just what falls out of it.',
      takeaway:
        'Real moats produce extraordinary margins because they neuter the thing that normally compresses margins — competition. A 50%+ margin sustained for decades is almost always a moat at work.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 2 — Compare (decisive). The disruption test.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'compare',
      topic: 'The Disruption Test',
      topicIcon: ShieldCheck,
      context:
        'Now look at all three side-by-side. A $20B-funded competitor decides to take each one head-on — same product, free for 3 years. Who actually loses customers?\n\nA real moat is the answer to one question: if a rich, smart competitor copied your product tomorrow, would your customers leave?',
      candidates: [
        {
          name: 'Visa',
          ticker: 'V',
          tag: 'Network effects',
          metrics: [
            { label: 'Moat type', value: 'Two-sided network' },
            { label: 'Cardholders', value: '4.6B' },
            { label: 'Merchants accepting', value: '130M+' },
            { label: 'Under attack', value: 'Holds', note: 'merchants need cardholders, vice versa' },
          ],
        },
        {
          name: 'Hermès',
          ticker: 'RMS.PA',
          tag: 'Brand + scarcity',
          metrics: [
            { label: 'Moat type', value: 'Brand built since 1837' },
            { label: 'Birkin waitlist', value: '3-6 years' },
            { label: 'Net margin', value: '~32%' },
            { label: 'Under attack', value: 'Holds', note: 'logo can\'t be cloned with money' },
          ],
        },
        {
          name: 'Salesforce',
          ticker: 'CRM',
          tag: 'Switching costs',
          metrics: [
            { label: 'Moat type', value: 'Embedded in workflows' },
            { label: 'Avg customer life', value: '~12 years' },
            { label: 'Switch effort', value: '12-18 months' },
            { label: 'Under attack', value: 'Holds short-term', note: 'new customers up for grabs' },
          ],
        },
      ],
      question: 'Whose moat would HOLD UP best against the well-funded copycat?',
      options: [
        'Visa — no amount of money can manufacture 4.6B cardholders and 130M merchants overnight',
        'Hermès — luxury buyers will pay anything for the logo',
        'Salesforce — enterprise buyers won\'t switch from a known platform',
      ],
      bestIndex: 0,
      analyses: [
        'Right read. Visa\'s network is essentially impossible to replicate with money. To compete, the copycat needs cardholders — but cardholders only sign up where merchants accept. And merchants only accept where cardholders are. The only way through is to subsidize BOTH sides for years (PayPal/Stripe couldn\'t do it; even Apple Pay rides on Visa\'s rails). Network effects are the deepest moat we have a name for.',
        'Half right. Hermès\'s brand is genuinely uncopyable in the short run — you can\'t buy 187 years of cultural prestige. But brands CAN be attacked over decades by shifting consumer taste. Coach was once luxury. Burberry lost its prestige and clawed it back. Hermès\'s moat is real, but it lives or dies on cultural relevance, not technology.',
        'Salesforce holds the EXISTING base because rip-and-replace is a 12-18 month nightmare. But the copycat doesn\'t need to steal existing customers — they just need to win the next decade of new ones. Switching costs protect what you have. They don\'t win you the next deal.',
      ],
      punchline:
        'Network effects > brand > switching costs in raw defensibility, because the network is the only one of the three that gets STRONGER as the company gets bigger. A brand can fade. A switching cost only works on customers you already have.',
      takeaway:
        'Real moats survive a well-funded copycat. If your only defense is "we got here first" or "we\'re the biggest," that\'s a lead, not a moat. A moat is what stops the next dollar from beating you.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 3 — Decide. Hermès paradox. Visa is obvious; what about Hermès?
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Scarcity Paradox',
      topicIcon: Sparkles,
      context:
        'So Visa is the obvious pick, right? Strongest moat, biggest network, highest margins.\n\nExcept Hermès has compounded ~15%/year for 30 years and outperformed almost every "high quality" stock you can name. Their CEO has refused — for decades — to scale up Birkin production. They could sell 10x more. They won\'t. Customers wait years for a $12,000 bag and feel lucky to get one.\n\nHermès didn\'t accidentally end up with a 3-6 year waitlist. They engineered it. What does the headline "they\'re leaving money on the table" miss?',
      question: 'Why is constraining supply Hermès\'s moat — not a missed opportunity?',
      options: [
        'It\'s not — they should make more bags and Visa really is just better',
        'Scarcity IS the product. The moment a Birkin is easy to get, the prestige collapses and the moat dies. Hermès isn\'t selling leather; they\'re selling proof you\'re someone who can get one.',
        'They\'ll eventually scale up production once demand stabilizes',
        'Brand value doesn\'t depend on supply once a brand is famous enough',
      ],
      correctIndex: 1,
      punchline:
        'Hermès runs two businesses stapled together: a near-cost handbag (the bait) and the social currency of having one (the hook). The price tag isn\'t for the leather — it\'s for the implicit message that you waited 3 years and got picked. Flooding the market would destroy the very thing that makes the bag worth $12K.',
      wrongNudges: [
        'Hermès has 30+ years of compounding through every recession, every fashion cycle, every "luxury is dying" narrative. That\'s not a missed opportunity — it\'s the textbook case of constraint as a strategy. Buffett would call it "the right kind of scarcity."',
        '',
        'They have had a hundred chances to scale Birkin production and refused every one. The CEO has been explicit: maintaining scarcity is more important than maximizing this year\'s revenue. The discipline IS the moat.',
        'Coach proved this wrong. Coach was once aspirational; flooding the market with discounted bags broke the brand. It took a decade and new leadership to start rebuilding. Brand value lives or dies on perceived scarcity. Hermès knows this.',
      ],
      takeaway:
        'When you see a company "leaving money on the table," ask: is this the strategy, or the symptom? Hermès\'s waitlist is a strategy. A struggling retailer with empty shelves is a death spiral. Same fact, different stories.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 4 — Compare (OPEN call). 3 years later, real ambiguity.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'compare',
      topic: 'Three Years Later',
      topicIcon: HelpCircle,
      context:
        'Skip ahead three years. Your colleague held one of the three. The world shifted. Same companies, fresh data — the picture isn\'t obvious anymore.\n\nThis one is genuinely hard. Smart investors disagree. Pick the one you\'d hold for the NEXT five years and we\'ll walk through the trade-offs.',
      candidates: [
        {
          name: 'Visa',
          ticker: 'V',
          tag: 'Stablecoins emerging',
          metrics: [
            { label: 'Net margin', value: '~54%' },
            { label: 'Revenue growth', value: '+9%' },
            { label: 'Stablecoin volume', value: '+250% YoY', note: 'still tiny vs Visa' },
            { label: 'Valuation', value: '~28x earnings', note: 'priced as durable' },
          ],
        },
        {
          name: 'Hermès',
          ticker: 'RMS.PA',
          tag: 'China softening',
          metrics: [
            { label: 'Net margin', value: '~32%' },
            { label: 'Revenue growth', value: '+8%', note: 'down from +20%' },
            { label: 'Greater China sales', value: '-7%', note: 'luxury slowdown' },
            { label: 'Valuation', value: '~50x earnings', note: 'highest in luxury' },
          ],
        },
        {
          name: 'Salesforce',
          ticker: 'CRM',
          tag: 'AI threat',
          metrics: [
            { label: 'Net margin', value: '~16%' },
            { label: 'Revenue growth', value: '+8%', note: 'down from +24%' },
            { label: 'AI agents', value: 'Could replace seats', note: 'self-disruption risk' },
            { label: 'Valuation', value: '~22x earnings', note: 'compressed on AI fears' },
          ],
        },
      ],
      question: 'Which would YOU hold for the next 5 years?',
      options: [
        'Visa — pay up for the most defensible network on Earth',
        'Hermès — bet the China weakness is cyclical and the moat holds',
        'Salesforce — take the cheap valuation and bet the AI fear is overdone',
      ],
      // No bestIndex — open call.
      analyses: [
        'Defensible — and the consensus pick. The 54% margin is still the cushion, the network is still the network, and stablecoin volume is up huge but still <1% of Visa\'s rails. The risk is the long arc: if stablecoins or central-bank digital currencies eventually become how people pay, Visa\'s cut shrinks. At ~28x earnings the market thinks the network endures. If you believe that, you sleep well. If you think payments are about to be reinvented, the next decade is the wrong decade for Visa.',
        'Contrarian, but not crazy. The headline (Greater China -7%, growth halved) is real, and at 50x earnings Hermès is priced for perfection in a luxury cycle that just turned. But the moat is the same moat — 187 years of brand, 3-6 year Birkin waitlist, and a customer base that buys through any cycle. The bull case is "this is a luxury cycle, not a Hermès problem." The bear case is "Chinese millennials don\'t want logos the way their parents did." Reasonable people disagree. The 50x P/E means if the bear is right, the stock can fall 30%+.',
        'The deep-value pick. 22x for a sticky enterprise software business is genuinely cheap if AI doesn\'t blow up the seat-license model. The bear case is brutal though: if AI agents replace 30% of CRM seats over 5 years, the switching-cost moat protects revenue that\'s shrinking on its own. You\'re betting Salesforce successfully converts to "AI per outcome" pricing before customers figure out they need fewer humans. Sometimes that bet wins. Often it doesn\'t.',
      ],
      punchline:
        'Three different moat types, three different threats. Real investing rarely has a clean answer. Every choice here is defensible — and every choice has a way to fail. The job isn\'t finding the "right" stock. It\'s holding a thesis you can defend when the moat is tested.',
      takeaway:
        'Even real moats face real threats. The question isn\'t "is the moat there" — it\'s "is the moat surviving the specific attack on it right now, and what would prove me wrong?"',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 5 — Tap. WeWork-style "moat" pitch with no real moat.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Reading the Pitch',
      topicIcon: Search,
      intro:
        'A friend forwards you a 2019-era WeWork bull-case pitch. They\'re excited about its "structural advantages." Tap the lines that sound like a moat but aren\'t. (Three of them, hidden among real strengths.)',
      passage: [
        {
          type: 'text',
          value: 'WeWork is the most valuable real estate platform of our generation. ',
        },
        {
          type: 'chip',
          value: '500+ locations across 100+ cities',
          signal: true,
          feedback:
            'Number of locations is not a moat — it\'s a count. Visa has 130M merchants because of network effects; WeWork has 500 locations because they signed 500 leases. A competitor with the same checkbook can sign 500 of their own. Scale of footprint without network effects is not defensibility.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: '$1.2B in committed lease revenue from existing members',
          signal: false,
          feedback:
            'Real strength — at the time. Members ON contracts produce predictable revenue. The question is whether those contracts get renewed in a downturn. (Spoiler: many didn\'t.) But the existing committed revenue itself is a real number.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Brand recognition globally — "WeWork" is becoming a verb',
          signal: true,
          feedback:
            'Brand AWARENESS is not a moat. Hermès\'s brand stops competitors because the brand is the product. WeWork\'s "brand" is awareness of a coworking option among many. A more awareness-driven competitor with cheaper rent steals the customer instantly. Awareness without pricing power or scarcity is just marketing.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Members can use any WeWork location worldwide with one membership',
          signal: false,
          feedback:
            'A real product feature with mild network properties — more locations = more value to members who travel. Not as powerful as Visa\'s network (members don\'t recruit other members), but a genuine differentiator from a single landlord. This one is on the right side of the line.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Long-term leases on premium real estate locked in at low pre-2020 rates',
          signal: true,
          feedback:
            'They\'re framing fixed long-term leases as a moat. They\'re actually the central RISK — WeWork is locked in to multi-year lease payments while charging members month-to-month. When demand drops, the lease still gets paid. This isn\'t a moat. It\'s a duration mismatch that bankrupted the company.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Loyal community of members who collaborate, refer, and stay',
          signal: false,
          feedback:
            'There IS something here — community-driven retention is real, and active members did refer others. The problem isn\'t this claim. The problem is everything around it. A real strength embedded in a pitch that papers over the duration mismatch.',
        },
      ],
      requiredSignals: 3,
      reveal:
        'Three "moat" claims that aren\'t moats: 500 locations (a count, not a network), brand recognition (awareness ≠ pricing power), and long-term leases (the core financial risk dressed as an advantage). WeWork\'s S-1 valued the company at $47B; it filed for bankruptcy 4 years later. Real moats survive an attack. WeWork\'s "moat" was just expensive marketing on top of a duration mismatch.',
      takeaway:
        'Test every claimed moat with one question: "If a well-funded competitor copied this in 2 years, would customers leave?" 500 locations? Yes. Brand awareness? Yes. Network effects, switching costs, scarcity-based brand? No. Real moats are structural. Fake moats are stories.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 6 — Synthesis. Free response.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'thinking',
      prompt:
        'Your colleague reads this lesson, looks at all three companies, and says: "I\'m just buying Visa. Best moat, highest margin. Done." In 2-3 sentences, give them your strongest pushback — using what you saw across these steps.',
      placeholder:
        'Think about: what does a network-effect moat protect against AND not protect against? What did Hermès\'s scarcity reveal? What was the role of the price tag in step 4?',
      modelAnswer:
        'A network-effect moat is real protection — Visa\'s 4.6B cardholders aren\'t something a competitor can buy with cash — but a moat doesn\'t protect against the wrong threat or the wrong price. At ~28x earnings, Visa is priced as if the rails endure for decades; if stablecoins or central-bank digital currencies become how people actually pay, the network is irrelevant. And the "biggest moat = best stock" rule misled you on Hermès — its moat works through self-imposed scarcity, not scale, and it\'s compounded just as well. The right question isn\'t "which company has the biggest moat?" — it\'s "which moat survives the specific attack coming at it, at the price I\'m paying?"',
      strongReasoningIncludes: [
        'Acknowledges that network effects are real protection (don\'t pretend Visa\'s moat is meaningless)',
        'Identifies that the SPECIFIC threat to a moat matters (stablecoins for Visa, taste for Hermès, AI for Salesforce)',
        'References at least one nuance from earlier in the lesson — the Hermès paradox, the disruption test, or the Step 4 trade-off',
      ],
    },
  ],
  takeaways: [
    'A moat is what stops the next dollar from beating you. Network effects, brand-as-scarcity, switching costs — they live or die on whether a well-funded copycat can reproduce them.',
    'Real moats produce extraordinary margins because they neuter competition. Visa at 54%, Hermès at 32%, Salesforce at 16% — each margin reveals the strength of its specific moat.',
    'Constraint can be the moat. Hermès limits Birkin supply on purpose because the scarcity IS the product. Flooding the market would destroy the moat that justifies the price.',
    'Even real moats face real threats. Network effects can be replatformed (stablecoins). Brand can lose cultural relevance. Switching costs protect the past, not the future. The thesis is the moat plus the threat.',
  ],
  completionMessages: {
    perfect:
      'Sharp work. You moved past "wide-moat = good" into the actual decision: which moat type, against which threat, at which price.',
    great:
      'Strong run. You can see moats as multi-layered — type, threat, and price tag — instead of a single label.',
    good: 'Solid grounding. Hold onto the through-line: same three "wide-moat" companies, three different views depending on which lens you applied.',
    low: 'Worth re-running. The point isn\'t the three companies — it\'s the habit of asking "what specifically is this moat protecting against, and what could break it?"',
  },
};
