import { Castle, Mail, Search, Scissors } from 'lucide-react';
import type { Lesson } from './types';

/**
 * Scenario lesson — through-line: you held Blockbuster in 1999. The next
 * eleven years play out as a slow-motion moat collapse, with every signal
 * available to anyone who looked. Each step asks the call you would have
 * made in that moment. The final step is retrospective: what would have
 * actually made you sell?
 */
export const foundationsMoatsLesson: Lesson = {
  id: 'foundations-moats',
  emoji: '🏰',
  title: 'Watch a Moat Break',
  subtitle:
    'Blockbuster, 1999-2010. The signals were all there. You\'re holding the stock. When do you sell?',
  description:
    'Moats are easier to spot AFTER they break than before. This lesson hands you Blockbuster the year it peaked and walks you through eleven years of real, contemporaneous data — the Netflix offer, the late-fee revenue, the store openings. At each beat you make the call you would have made then. At the end you look back and decide what would have actually made you act.',
  estimatedMinutes: 4,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['moats'],
  keyFacts: [],
  topics: [
    { label: 'Where the moat actually came from', icon: Castle },
    { label: 'The Netflix offer no one took seriously', icon: Mail },
    { label: 'Reading signals in real time vs. with hindsight', icon: Search },
    { label: 'Knowing when "fixing it" is already too late', icon: Scissors },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────────
    // STEP 1 — Estimate. Anchor on where the cash actually came from.
    // The thing Netflix is about to attack is the most profitable line.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: '1999 — Where the Cash Came From',
      topicIcon: Castle,
      context:
        'It\'s 1999. You own shares in Blockbuster (BBI). The company runs ~7,000 video-rental stores, brings in around $4.5B in revenue, and is the obvious king of home entertainment.\n\nThe story everyone tells about the moat is the store count. The income statement tells a different story. Guess one number: the share of Blockbuster\'s revenue that comes from late fees.',
      question: 'Roughly what % of Blockbuster\'s revenue came from late fees?',
      answer: 15,
      tolerance: 5,
      unit: '%',
      hint: 'Around $800M a year out of ~$5B in revenue.',
      reveal:
        'About 15% — roughly $800M a year. The fact most discussions of Blockbuster skip past: one of its biggest profit centers was the penalty it charged customers for being late. Worth holding in your head as you read the next step.',
      takeaway:
        'A company\'s moat is usually less interesting than its most profitable line. The 7,000 stores were the moat people talked about. The late fees were what funded them.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 2 — Decide. September 2000. The Netflix offer.
    // The hardest call in the lesson, and the one that aged worst.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'September 2000 — The Offer',
      topicIcon: Mail,
      context:
        'Reed Hastings flies to Dallas to meet Blockbuster\'s CEO, John Antioco. Netflix has roughly 300,000 subscribers, mails DVDs in red envelopes, charges no late fees, and is losing money. Hastings offers to sell the whole company to Blockbuster for $50M.\n\nAntioco declines. (The story Hastings tells is that he was "laughed out of the room.")\n\nYou hold BBI. The press picks the meeting up briefly. You have to form a view. What do you want?',
      question: 'As a Blockbuster shareholder in fall 2000, what call do you want management to have made?',
      options: [
        'Decline — Netflix loses money on a niche product, $50M is a distraction',
        'Buy — $50M is cheap insurance against a model aimed at your most profitable revenue line',
        'Decline, but quietly start an in-house DVD-by-mail unit to keep the option open',
      ],
      correctIndex: 1,
      punchline:
        '$50M to own the company that was building a no-late-fee subscription product, when 15% of your revenue is late fees. The right read in 2000 wasn\'t "Netflix will win." It was: this is aimed straight at the line we make the most money on, and the option to control it is cheap.',
      wrongNudges: [
        'This was the consensus call at the time, and it\'s defensible. Netflix in 2000 was small, unprofitable, and the DVD-by-mail thesis was unproven. What aged badly isn\'t the dismissal of Hastings — it\'s that nobody at Blockbuster mapped Netflix\'s pitch onto Blockbuster\'s P&L and noticed which line it was aimed at.',
        '',
        'A reasonable answer, and Blockbuster eventually attempted a version of it five years later, when Netflix had 4M subscribers. The catch: optional in-house projects that aren\'t funded and prioritized rarely catch a competitor that\'s already compounding.',
      ],
      takeaway:
        'A competitor that\'s built specifically to attack one of your revenue lines is a different kind of threat than a generic competitor. The hedge against the first kind tends to look like a waste of money right up until you wish you had it.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 3 — Tap. Late 2003. Mix of erosion signals and comfortable noise.
    // The user has to find the lines that actually move the moat thesis.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Late 2003 — What\'s a Signal, What\'s Noise',
      topicIcon: Search,
      intro:
        'Skip ahead three years. You\'re reading an analyst snapshot of Blockbuster as of late 2003. Tap the facts that should move your view of the moat — and skip the ones that look reassuring but don\'t actually answer the moat question.',
      passage: [
        { type: 'text', value: 'Blockbuster posted record annual revenue near $5.9B and ' },
        {
          type: 'chip',
          value: 'opened roughly 200 net new stores worldwide',
          signal: true,
          feedback:
            'New stores cost real money: leases, fit-outs, staff. Three years into Netflix existing, capital is still flowing into more of the same asset class Netflix\'s product is built to bypass. The headline reads as growth, but the substance is doubling down on the wrong inventory.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Late fees still produced roughly $800M annually — about 15% of revenue',
          signal: true,
          feedback:
            'Three years after Hastings\' offer, late fees are still Blockbuster\'s biggest profit lever, and Blockbuster has done nothing to reduce its exposure to them. The competitor whose marketing literally says "no late fees" now has 1.5M subscribers.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Brand awareness in the US remained near-universal',
          signal: false,
          feedback:
            'True, but it doesn\'t answer the moat question. Blockbuster\'s moat was the store count, not the brand. A customer who recognizes the Blockbuster name can still pick the red envelope on a Friday night — recognition doesn\'t prevent that choice.',
        },
        { type: 'text', value: '. Meanwhile, ' },
        {
          type: 'chip',
          value: 'Netflix subscribers grew from under 1M to over 1.5M during the year',
          signal: true,
          feedback:
            'Subscribers roughly doubled in two years (600K to 1.5M). At this rate Netflix passes 5M inside 2-3 years, which is when Blockbuster\'s same-store rental numbers start to feel it. The slope of the curve is the news, not the absolute number.',
        },
        { type: 'text', value: '. Industry observers noted that ' },
        {
          type: 'chip',
          value: 'physical video stores still accounted for the vast majority of rental revenue',
          signal: false,
          feedback:
            'True today, and probably true next year. The question moat analysis is supposed to answer is what the market looks like in five years. "Currently dominates" doesn\'t answer that question.',
        },
        { type: 'text', value: '. The company also reported ' },
        {
          type: 'chip',
          value: 'same-store rental revenue declined for the second straight year',
          signal: true,
          feedback:
            'Same-store revenue strips out new openings, so it isolates whether the existing footprint is healthier or weaker than it was a year ago. Two straight down years means the customer base Blockbuster already had is rolling over. The headline revenue still grew, but only because the company kept opening stores.',
        },
        { type: 'text', value: '.' },
      ],
      requiredSignals: 3,
      reveal:
        'Four signals worth tapping: capital still flowing into new stores, $800M in late fees still unhedged, Netflix compounding from 600K toward 5M, and same-store revenue rolling over for two straight years. Two reassuring facts that don\'t actually answer the moat question: brand awareness (never the moat) and "physical still dominates" (a snapshot, not a forecast). The data was all in the public filings. The hard part was acting on it while the headline number was still a record.',
      takeaway:
        'The headline revenue line is a lagging indicator of moat health. Same-store metrics, the new-vs-existing mix, and the revenue line exposed to a specific competitor\'s pitch all weaken earlier. By the time the headline rolls over, you\'re reacting to something that started 18 months ago.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 4 — Decide. Jan 2005. The "no more late fees" announcement.
    // Genuinely contested in real time. Right idea or terminal copy?
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'January 2005 — The End of Late Fees',
      topicIcon: Scissors,
      context:
        'Antioco announces "The End of Late Fees." The change strips out roughly $400M of high-margin revenue overnight, on the bet that removing the customer pain point keeps people coming to stores instead of switching to Netflix. Carl Icahn takes a board seat that year and is openly furious about the lost cash. Within two years, Antioco is out.\n\nNetflix now has ~4M subscribers. Same-store revenue is still declining. You still hold BBI.\n\nWhat\'s the right read on this move?',
      question: 'Was killing late fees the right move?',
      options: [
        'Right move — late fees were the pain Netflix exploited, and removing it was overdue',
        'Wrong move — they gave up $400M of high-margin revenue to copy a model they couldn\'t win at',
        'Right idea, executed three years too late — by 2005 the customer who was going to switch had already switched',
      ],
      correctIndex: 2,
      punchline:
        'All three options have a real defender, which is part of the point. Option 3 ages the best: the diagnosis was correct (late fees were a competitive wound), but by 2005 Netflix had passed 4M subscribers and the customer who was going to switch had largely already switched. Option 1 was Antioco\'s view and he lost his job over it. Option 2 was Icahn\'s and earned him a board seat. Both can be reasonable and still leave you holding a stock that goes to zero.',
      wrongNudges: [
        'The diagnosis is right. Late fees were a real competitive wound. The same move in 2001 would have been a serious moat defense; in 2005 Netflix had 4M subscribers and same-store revenue had already been declining for years, so the move arrived after most of the damage was done.',
        'This was Icahn\'s read, and the market mostly agreed in the short term. The catch is that the cash being defended was leaking specifically because of the no-late-fees competitor. You can hold the cash for a year or two and still lose to the structural problem.',
        '',
      ],
      takeaway:
        'A CEO finally taking the obviously-correct action three years after the signal was visible tells you more about the moat than about the CEO. By the time it shows up as a press release, most of what you needed to act on already happened.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 5 — Thinking. Retrospective sell question.
    // The whole lesson lands here.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'thinking',
      prompt:
        'You held BBI from 1999 through bankruptcy in 2010 and lost roughly your entire investment. Pick the year you would have actually sold — 2000 (the offer), 2003 (the data was clear), 2005 (the late-fee reversal), or 2008 (Icahn\'s board fights and CEO turnover). In 3-4 sentences, defend that timing: what specific signal would have made YOU act then, when most holders didn\'t?',
      placeholder:
        'Pick a year. Name the specific signal — the late fees line, Netflix\'s sub curve, same-store revenue, Antioco\'s firing. Be honest: would you really have acted on that, or are you picking the year hindsight makes obvious?',
      modelAnswer:
        'I would have sold in 2003. By then same-store rental revenue had been declining for two years and Netflix subscribers had gone from 600K to over 1.5M. Each of those signals alone is noise; together they describe a footprint that\'s rolling over at the same time a competitor is passing the inflection from niche to scaled. To be honest about hindsight: 2000 is the year that looks obvious now, but Hastings showing up with 300K subs would have read as a punt to me in real time. 2005 is too late, since the late-fee reversal was already management admitting the model had lost. So 2003 is where the data crossed the line from "concerning" to "the thesis I bought has changed."',
      strongReasoningIncludes: [
        'Picks a specific year and names the actual signal that would have triggered the sell, rather than "I would have seen Netflix coming"',
        'Acknowledges what was knowable at the moment vs. what only looks obvious now',
        'Distinguishes between leading signals (same-store, Netflix sub curve, late-fee exposure) and lagging ones (the late-fee reversal, CEO turnover, bankruptcy)',
      ],
    },
  ],
  takeaways: [
    'Blockbuster\'s moat was the 7,000 stores. The cash that funded those stores came from late fees, and Netflix\'s product was specifically built to bypass that line.',
    'A $50M offer to acquire the company aimed at your most profitable revenue line is unusually cheap optionality. Whether you take it depends on whether anyone at the firm has mapped the competitor\'s pitch onto your P&L.',
    'Headline revenue is a lagging indicator. Same-store metrics, the new-vs-existing store mix, and the share of revenue exposed to one competitor\'s specific product all roll over earlier.',
    'When a CEO finally takes the obviously-correct action years after the signal was visible, the move itself is usually a confirmation that the moat broke, not a fresh reason to buy.',
  ],
  completionMessages: {
    perfect:
      'Sharp work. You can read moat erosion through the line items that move first, instead of waiting for the headline revenue to break.',
    great:
      'Good run. You can see how moat erosion is readable in real time, and how the obvious management responses tend to arrive after the customer has already made up their mind.',
    good:
      'Decent foundation. The point worth keeping: the moat people described was the store count, but the cash came from a different line, and it was the cash line that got attacked.',
    low:
      'Worth re-running. The lesson isn\'t Blockbuster specifically. It\'s the habit of asking which of your revenue lines a competitor\'s product was actually built to bypass.',
  },
};
