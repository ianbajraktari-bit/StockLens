import {
  Search,
  Activity,
  ShieldCheck,
  Crosshair,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import type { Lesson } from './types';

/**
 * Scenario lesson — through-line: a friend has $50,000 and is choosing
 * among three real QSR/coffee chains. Three real businesses with the same
 * apparent topline but very different drivers underneath: Starbucks
 * (price masking traffic loss), Chipotle (traffic + ticket compounding),
 * McDonald's (price-driven growth, traffic flat). Each step builds:
 * calibrate Starbucks traffic → driver-quality compare → McDonald's
 * "12% growth" paradox → 3-years-later open call → red flags in a
 * "30% growth" pitch → synthesis.
 */
export const foundationsDriversLesson: Lesson = {
  id: 'foundations-drivers',
  emoji: '🔍',
  title: 'What Actually Drives a Business',
  subtitle:
    'Your friend has $50,000 and three restaurant stocks. The headline numbers all look similar. The drivers don\'t.',
  description:
    'Revenue is an output, not a driver. Two companies can grow 6% for completely different reasons — one because customers love them more, one because they raised prices on customers who are slowly leaving. This lesson hands you one decision and walks it through three real chains (Starbucks, Chipotle, McDonald\'s), and asks you to actually pick.',
  estimatedMinutes: 4,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['business_drivers'],
  keyFacts: [],
  topics: [
    { label: 'Revenue is an output — find the inputs', icon: Activity },
    { label: 'Same growth, different quality', icon: ShieldCheck },
    { label: 'When growth is hiding a problem', icon: Sparkles },
    { label: 'Holding a thesis when the drivers shift', icon: Crosshair },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────────
    // STEP 1 — Calibrate. Anchor the user with a Starbucks traffic number.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'Setting the Stage',
      topicIcon: Search,
      context:
        'Your friend has $50,000 and one rule: it has to go into one of three restaurant chains. The candidates: Starbucks (SBUX), Chipotle (CMG), McDonald\'s (MCD).\n\nBefore you compare them, calibrate one number. In 2024, Starbucks reported that overall revenue was roughly flat. The headline read fine. Underneath, US same-store sales were dropping — and inside that, traffic was dropping faster than ticket. Same-store transactions (people walking in) declined.',
      question: 'Roughly how much did US same-store transactions fall at Starbucks in late 2024?',
      answer: 10,
      tolerance: 4,
      unit: '%',
      hint: 'It was bad enough that the board fired the CEO and hired Brian Niccol from Chipotle.',
      reveal:
        'About 10%. US traffic dropped roughly 10% in the last quarter of 2024 — enough to trigger the management change. Starbucks revenue looked stable because international growth and price increases offset the US traffic collapse. The headline hid the diagnosis: people in Starbucks\'s home market were choosing not to come.',
      takeaway:
        'A revenue line can hide a demand problem for a long time. Decompose it into traffic × ticket × stores and the diagnosis becomes obvious — sometimes alarmingly so.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 2 — Compare (decisive). Same growth, different drivers.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'compare',
      topic: 'The Driver Test',
      topicIcon: ShieldCheck,
      context:
        'Now look at all three. To keep the comparison clean, imagine each just reported the same headline: same-store sales up about 6%. The headline is identical. The drivers are not.\n\nSame-store sales decompose into transactions (how many people walked in) and ticket (how much each spent). Same +6%, three completely different stories.',
      candidates: [
        {
          name: 'Chipotle',
          ticker: 'CMG',
          tag: 'Traffic + ticket',
          metrics: [
            { label: 'Same-store sales', value: '+6%' },
            { label: 'Transactions', value: '+5%', note: 'more people coming' },
            { label: 'Avg ticket', value: '+1%', note: 'mostly mix shift' },
            { label: 'Read', value: 'Demand expanding' },
          ],
        },
        {
          name: "McDonald's",
          ticker: 'MCD',
          tag: 'Mostly price',
          metrics: [
            { label: 'Same-store sales', value: '+6%' },
            { label: 'Transactions', value: 'flat', note: 'no new visits' },
            { label: 'Avg ticket', value: '+6%', note: 'menu price increases' },
            { label: 'Read', value: 'Earned via pricing' },
          ],
        },
        {
          name: 'Starbucks',
          ticker: 'SBUX',
          tag: 'Price masking traffic loss',
          metrics: [
            { label: 'Same-store sales', value: '+6%' },
            { label: 'Transactions', value: '-4%', note: 'fewer customers' },
            { label: 'Avg ticket', value: '+10%', note: 'price + bigger orders' },
            { label: 'Read', value: 'Demand shrinking' },
          ],
        },
      ],
      question: 'Whose +6% is the highest-quality growth?',
      options: [
        'Chipotle — traffic AND ticket are both up; demand is genuinely expanding',
        "McDonald's — flat traffic at scale is fine, and pricing power is itself a moat",
        'Starbucks — a +10% ticket increase shows premium customers spending more',
      ],
      bestIndex: 0,
      analyses: [
        'Right read. Chipotle\'s +5% transactions means MORE PEOPLE are choosing to come — that\'s the only signal in this set that demand itself is growing. Pricing comes and goes; pricing power can be eaten by competitors. Traffic growth is the rarest and most valuable signal in restaurants. Chipotle did this for years (~5% traffic at peak), and the stock 10x\'d.',
        'Half right. McDonald\'s pricing power is real — they CAN raise menu prices without traffic falling, which is genuinely impressive. But "flat traffic at +6% growth" means every dollar of growth came from charging existing customers more. That has a ceiling. The 2024 launch of the $5 Value Meal was a tell that even McDonald\'s had pushed pricing too far for the lower-income customer.',
        'A +10% ticket sounds like premium customers spending more. It\'s not. Inside that +10%, most of it was menu price increases — and the -4% transactions tells you customers are responding by leaving. "Fewer customers spending more" can hold up the headline for a few quarters. Then it doesn\'t. This is the exact pattern that got the Starbucks CEO fired.',
      ],
      punchline:
        'Same +6% growth, three completely different stories. Chipotle\'s growth is real demand. McDonald\'s growth is pricing power running out of room. Starbucks\'s growth is a covered-up demand problem.',
      takeaway:
        'When you see same-store sales, always ask: traffic or ticket? Traffic-driven growth means more people; ticket-driven growth means same people paying more. The first is durable. The second has a ceiling.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 3 — Decide. The McDonald's paradox.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Pricing-Power Paradox',
      topicIcon: Sparkles,
      context:
        'So Chipotle is the obvious pick, right? Best driver mix, real traffic growth.\n\nExcept McDonald\'s outperformed for decades on something Chipotle struggles to match: pricing power. From 2021 to 2023, McDonald\'s grew US revenue ~25% even though US transactions were roughly flat. Stock returned ~50% in that window. The 25% was almost entirely price.\n\nMcDonald\'s knew it was hitting the pricing ceiling — and in 2024 traffic from the lower-income consumer started slipping. They responded with the $5 Value Meal. What does the "growth from pure pricing" story actually tell you?',
      question: 'What is the trade-off McDonald\'s was making with price-driven growth?',
      options: [
        'There\'s no trade-off — pricing power IS the moat, and Chipotle just got lucky with traffic',
        'McDonald\'s pulled growth forward by raising prices into a customer base that had nowhere else cheap to go — but each price hike narrowed the audience until the value-conscious customer started skipping. The $5 Value Meal was an admission that the pricing engine was out of room.',
        "Pricing has no ceiling for a brand as strong as McDonald's",
        'Traffic and price are interchangeable — the source of growth doesn\'t matter',
      ],
      correctIndex: 1,
      punchline:
        'Price-driven growth is real growth right up until it\'s not. Each percentage point of menu price increase quietly trims the bottom of your customer base. You can run the trick for years — until the marginal customer\'s wage doesn\'t keep up. Then the next 1% costs you 5% of traffic.',
      wrongNudges: [
        'Chipotle\'s 5% traffic growth happened against a McDonald\'s that was raising prices nonstop. Some of Chipotle\'s "luck" was McDonald\'s customers trading sideways into a higher-quality bowl that didn\'t feel that much more expensive than a Big Mac meal anymore. That\'s causation, not luck.',
        '',
        'In 2024 McDonald\'s reported its first US traffic miss in years and explicitly cited "value perception erosion" with lower-income customers. The $5 Value Meal was launched as a direct response. The ceiling is real and McDonald\'s just hit it.',
        'They are very much not interchangeable. A 5% traffic gain compounds — happy customers come back and tell friends. A 5% price gain compresses — each year you\'ve narrowed your market. Same 5% on the headline, opposite trajectories underneath.',
      ],
      takeaway:
        'Pricing power IS valuable — but it\'s a finite resource, not a renewable one. Every price hike is a quiet trade: some revenue today for some customers tomorrow. Watch traffic to know when you\'ve overdrawn the account.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 4 — Compare (OPEN call). 3 years later, real ambiguity.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'compare',
      topic: 'Three Years Later',
      topicIcon: HelpCircle,
      context:
        'Skip ahead three years. Your friend held one of the three. The world shifted. Same companies, fresh data — the picture isn\'t obvious anymore.\n\nThis one is genuinely hard. Smart investors disagree. Pick the one you\'d hold for the NEXT five years and we\'ll walk through the trade-offs.',
      candidates: [
        {
          name: 'Starbucks',
          ticker: 'SBUX',
          tag: 'Niccol turnaround',
          metrics: [
            { label: 'US transactions', value: '+1%', note: 'first positive in 6 quarters' },
            { label: 'Avg ticket', value: '-2%', note: 'menu simplified, condiment bar back' },
            { label: 'Same-store sales', value: '-1%' },
            { label: 'Valuation', value: '~28x earnings', note: 'priced for the turnaround' },
          ],
        },
        {
          name: 'Chipotle',
          ticker: 'CMG',
          tag: 'Niccol gone, comp slowing',
          metrics: [
            { label: 'Transactions', value: '+1%', note: 'down from +5%' },
            { label: 'Avg ticket', value: '+3%' },
            { label: 'Same-store sales', value: '+4%' },
            { label: 'Valuation', value: '~45x earnings', note: 'still priced as a winner' },
          ],
        },
        {
          name: "McDonald's",
          ticker: 'MCD',
          tag: 'Value menu working',
          metrics: [
            { label: 'US transactions', value: '+2%', note: 'value menu pulled customers back' },
            { label: 'Avg ticket', value: '+1%', note: 'mix shift to lower-margin combos' },
            { label: 'Same-store sales', value: '+3%' },
            { label: 'Valuation', value: '~22x earnings', note: 'cheap for quality' },
          ],
        },
      ],
      question: 'Which would YOU hold for the next 5 years?',
      options: [
        'Starbucks — bet the turnaround works and traffic comes back',
        'Chipotle — pay up for the proven model even as growth normalizes',
        "McDonald's — take the value-menu reset and the cheaper price tag",
      ],
      // No bestIndex — open call.
      analyses: [
        'Contrarian, but defensible. Niccol has done a Chipotle-style turnaround before — at Chipotle. The +1% US transactions is the first real evidence the menu simplification and store experience changes are working. The bull case is "we\'re in the early innings of a multi-year traffic recovery." The bear case is a famous turnaround CEO is just borrowing demand from price cuts and the underlying brand has eroded. At 28x earnings, the market is already paying for some of the turnaround. If it stalls, you\'re paying turnaround prices for stagnation.',
        'Defensible — and the consensus pick. Even with Niccol gone and traffic decelerating from +5% to +1%, this is still arguably the best-run restaurant business in America. The bear case is everyone agrees. At 45x earnings, the market is pricing in continued outperformance — but the engine that drove it (Niccol\'s discipline, the +5% traffic streak) just changed. If the new CEO is ordinary, you can lose 25%+ on a still-fine business.',
        'The deep-value pick. 22x for a business with 40,000 stores, the value menu actually working, and traffic positive again is genuinely cheap. Bear case: the value menu fix is structural margin compression — the customer that came back came back for a $5 meal, not a $13 one. McDonald\'s gets growth back but a lower-margin growth. Sometimes that bet wins (you got cheap entry on a recovering business). Often the recovery shows up but the multiple doesn\'t expand because the unit economics moved.',
      ],
      punchline:
        'Three different driver stories, three different bets. The 5-year holder is buying a thesis about which driver is durable: traffic recovery (Starbucks), franchise strength surviving leadership change (Chipotle), or value-menu margin trade (McDonald\'s).',
      takeaway:
        'Drivers don\'t stay still. The right question isn\'t "which company has the best drivers today" — it\'s "which driver story do I believe holds up, and what would prove me wrong?"',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 5 — Tap. CEO of a real-ish chain pitching "30% growth."
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Reading the Pitch',
      topicIcon: Search,
      intro:
        'A CEO of a regional restaurant chain (say, modeled on Cava or Sweetgreen during a hot stretch) is on an investor call. They lead with "30% revenue growth." Tap the lines that should make you MORE worried, not less. (Three of them, hidden among real strengths.)',
      passage: [
        {
          type: 'text',
          value: 'We just delivered 30% revenue growth. ',
        },
        {
          type: 'chip',
          value: 'Same-store sales grew 4%',
          signal: false,
          feedback:
            'Real strength. Mid-single-digit comps in a tough restaurant year is genuinely good — it means the existing base is healthy. The question is whether 4% comps justifies the rest of the story.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: '26% of growth came from opening 80 new stores',
          signal: true,
          feedback:
            'They\'re framing 80 new stores as a strength, but it tells you that ~87% of the headline 30% growth is unit count, not the existing business getting healthier. New-store growth is real growth, but it\'s the most expensive kind — each new store costs millions to build and takes years to mature. Strip out new stores and the business is growing 4%.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Average unit volume on stores open 2+ years is up 8%',
          signal: false,
          feedback:
            'Real strength. Mature-store volumes growing 8% means the locations that have settled in are getting more productive — the unit economics work. This is the kind of metric that gives you confidence the new stores will eventually mature into the same kind of cash machines.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'New-store payback period extended from 3 years to 5 years',
          signal: true,
          feedback:
            'A real warning. Each new store now takes 5 years instead of 3 to earn back its build cost. That means the chain is opening stores in increasingly marginal locations, or build costs are rising faster than unit volumes. If you\'re depending on new stores for 87% of growth and the new stores are getting LESS profitable, the math gets worse every year.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: '4% comp came mostly from menu price; transactions were flat',
          signal: true,
          feedback:
            'There it is. The "4% same-store growth" isn\'t demand expanding — it\'s the same number of people paying more. Combine this with payback periods extending: the chain is opening stores into a market that isn\'t growing, then claiming pricing power as growth. This is the McDonald\'s ceiling problem at a chain that\'s nowhere near as established.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'We see a path to 5,000 stores long-term',
          signal: false,
          feedback:
            'Aspirational, not actionable. Every CEO has a long-term store target. The relevant question is whether the next 100 stores are profitable — and the data above says they\'re less profitable than the previous 100. Long-term targets are not red flags by themselves; they\'re just not strengths.',
        },
      ],
      requiredSignals: 3,
      reveal:
        'Three red flags spun as strengths: 87% of "30% growth" came from new stores, new-store payback extended from 3 to 5 years, and the modest 4% comp was all price (transactions flat). Strip those out and the story is: a chain growing existing-store transactions at 0% is opening lots of less-profitable stores to keep the headline alive. That\'s the same pattern as several growth-story chains that eventually had to slow openings and re-rate down.',
      takeaway:
        'When a CEO leads with revenue growth, your first question is WHERE it came from. New stores, price, and acquisitions all "count" — but each tells a different story about the underlying business. The headline number is the symptom; the drivers are the diagnosis.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 6 — Synthesis. Free response.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'thinking',
      prompt:
        'Your friend reads this lesson, looks at all three companies, and says: "I\'m just buying Chipotle. Best traffic, best brand. Done." In 2-3 sentences, give them your strongest pushback — using what you saw across these steps.',
      placeholder:
        'Think about: what did Chipotle\'s +5% traffic protect against AND not protect against? What did McDonald\'s pricing engine reveal? What was the role of the price tag in step 4?',
      modelAnswer:
        'Traffic-driven growth IS the highest-quality signal — Chipotle compounded for years on it — but the driver that made the stock work just changed. Niccol\'s gone, traffic dropped from +5% to +1%, and at 45x earnings the market is still pricing the +5% world. If the new CEO is ordinary, you can lose 25%+ on a business that\'s still genuinely fine. Meanwhile Starbucks at 28x and McDonald\'s at 22x are pricing in different problems — neither needs +5% traffic to work. The right question isn\'t "which company has the best drivers right now?" — it\'s "which driver story is actually durable from here, and what does the price tag already assume?"',
      strongReasoningIncludes: [
        'Acknowledges that traffic growth is real (don\'t pretend Chipotle\'s +5% was meaningless)',
        'Identifies that drivers can change — and the price tag can already assume the old drivers',
        'References at least one nuance from earlier in the lesson — the McDonald\'s pricing ceiling, the Starbucks turnaround math, or the Step 4 trade-off',
      ],
    },
  ],
  takeaways: [
    'Revenue is an output. Decompose every headline into its inputs — same-store sales = transactions × ticket — to find the real driver.',
    'Same growth, different quality. Chipotle\'s +6% (traffic + ticket), McDonald\'s +6% (price only), Starbucks\'s +6% (price masking traffic loss) — same number, completely different stories.',
    'Price-driven growth has a ceiling. Every price hike trims the customer base. McDonald\'s ran the move for years until the value-conscious customer left and the $5 Value Meal had to launch.',
    'Drivers don\'t stay still. The +5% traffic that made Chipotle a 10-bagger is not the +1% traffic of today. The thesis is the driver plus what could change it.',
  ],
  completionMessages: {
    perfect:
      'Sharp work. You moved past "high growth = good" into the actual decision: which driver is producing the growth, is it durable, and what does the price tag already assume.',
    great:
      'Strong run. You can see growth as multi-layered — traffic vs ticket, organic vs unit count, durable vs ceiling — instead of a single number.',
    good: 'Solid grounding. Hold onto the through-line: same three chains, three different views depending on which driver lens you applied.',
    low: 'Worth re-running. The point isn\'t the three companies — it\'s the habit of asking "WHERE did this growth come from, and what could break that engine?"',
  },
};
