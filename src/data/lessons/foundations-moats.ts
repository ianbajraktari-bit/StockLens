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
        'It\'s 1999. You own shares in Blockbuster (BBI). The company runs ~7,000 video-rental stores, brings in around $4.5B in revenue, and is the obvious king of home entertainment.\n\nMost of the moat narrative is about the stores: 7,000 locations no competitor can match. But that\'s not where the cash mostly comes from.\n\nGuess one number — the share of Blockbuster\'s revenue that comes from a single source: late fees.',
      question: 'Roughly what % of Blockbuster\'s revenue came from late fees?',
      answer: 15,
      tolerance: 5,
      unit: '%',
      hint: 'Around $800M a year out of ~$5B in revenue.',
      reveal:
        'About 15% — roughly $800M a year. The story you\'d tell about Blockbuster\'s moat is "7,000 stores." The story the income statement tells is "we charge customers a penalty for being late, and that penalty is one of our biggest profit centers." This matters because the next thing you\'re about to learn is that someone is building a business model whose entire pitch is "no late fees."',
      takeaway:
        'A moat is only as durable as its most profitable revenue line. If a competitor can attack THAT line specifically, the rest of the business goes with it.',
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
        'In hindsight, $50M was the cheapest insurance policy in business history. The reason it was cheap is exactly the reason it was easy to dismiss: Netflix at 300K subscribers really did look like a niche. The right read in 2000 wasn\'t "Netflix will win" — it was "this model attacks the late-fee revenue, and we own that line."',
      wrongNudges: [
        'This was the consensus call at the time, and it\'s defensible — Netflix in 2000 was small, unprofitable, and the DVD-by-mail thesis was unproven. The reason it aged badly isn\'t "Antioco missed the future." It\'s "he failed to ask which of his revenue lines a no-late-fee subscription model was specifically built to kill."',
        '',
        'This is the elegant answer in hindsight, and Blockbuster eventually did try a version of it — five years later, when Netflix had 4M+ subscribers. Building optionality only counts if you actually fund and prioritize it. "We started a project" is not insurance.',
      ],
      takeaway:
        'When a competitor\'s pitch is built around eliminating one of your specific revenue lines, that\'s a directed attack — not a generic threat. Cheap insurance against directed attacks tends to look stupid until it doesn\'t.',
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
            'This is the signal hidden as a strength. New stores cost money — leases, fit-outs, staff. Capital is flowing into more of the asset class Netflix is starting to attack. It\'s not "growth" — it\'s doubling down on a model whose most profitable line is under threat.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Late fees still produced roughly $800M annually — about 15% of revenue',
          signal: true,
          feedback:
            'Three years after Hastings\' offer, the line Netflix\'s entire pitch was built to kill is still your single biggest profit lever. That\'s not stability — that\'s an unhedged exposure to a competitor whose marketing literally says "no late fees."',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Brand awareness in the US remained near-universal',
          signal: false,
          feedback:
            'Comforting and irrelevant. Blockbuster\'s moat was never the brand — it was the 7,000 stores that no competitor could replicate. Netflix doesn\'t need brand parity; it needs a customer to choose mail-order one Friday night. Brand awareness doesn\'t protect against that choice.',
        },
        { type: 'text', value: '. Meanwhile, ' },
        {
          type: 'chip',
          value: 'Netflix subscribers grew from under 1M to over 1.5M during the year',
          signal: true,
          feedback:
            'Subs roughly doubled in two years — 600K to 1.5M+. That\'s no longer the noisy curve of a niche product. It\'s a compounder, and you can extend the line. At this growth rate, Netflix passes 5M in 2-3 years and starts showing up in your same-store rental numbers.',
        },
        { type: 'text', value: '. Industry observers noted that ' },
        {
          type: 'chip',
          value: 'physical video stores still accounted for the vast majority of rental revenue',
          signal: false,
          feedback:
            'True, and exactly the kind of backward-looking number that gets investors hurt. The point of moat analysis is what the market looks like in 5 years, not what it looked like in the last 12 months. "Still" is not a thesis.',
        },
        { type: 'text', value: '. The company also reported ' },
        {
          type: 'chip',
          value: 'same-store rental revenue declined for the second straight year',
          signal: true,
          feedback:
            'This is the cleanest tell. Same-store revenue strips out the new openings — it asks "is the existing footprint healthier or weaker?" Two straight years of decline means the existing customer base is rolling over. The headline revenue is being held up by store count, not demand.',
        },
        { type: 'text', value: '.' },
      ],
      requiredSignals: 3,
      reveal:
        'Four real signals: capital still flowing into new stores, $800M in late fees still unhedged, Netflix compounding from 600K toward 5M, same-store revenue rolling over for two straight years. Two distractors: brand awareness (never the moat) and "physical still dominates" (a backward-looking comfort). The data to call this in 2003 was all in the public filings. The hard part wasn\'t finding it — it was acting on it while the headline number was still a record.',
      takeaway:
        'A moat erodes from the inside before it shows up in the headline. Same-store metrics, mix of new vs. existing, and the share of revenue exposed to a competitor\'s specific pitch all break first. By the time the headline revenue rolls over, the call you needed to make was 18 months ago.',
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
        'All three options have a real argument. The strongest read is option 3: the diagnosis was correct (late fees were a competitive liability), but by January 2005 the model was already lost — Netflix had passed 4M subscribers and was compounding. The painful version of this for an investor: a late, correct decision still spends real money and still loses. Icahn\'s objection (option 2) is short-term but not crazy. The optimistic read (option 1) was Antioco\'s — and he was fired for it within two years.',
      wrongNudges: [
        'Defensible diagnosis — late fees were a real competitive wound. The reason this isn\'t the strongest read is timing. The same move in 2001 would have been a moat defense. In 2005, with Netflix at 4M+ subscribers and same-store revenue rolling over, it was a cost without a corresponding benefit.',
        'This was Icahn\'s read and the market\'s short-term reaction. It rewards the cash and ignores why the cash was leaking — the late-fee line was a structural weakness Netflix\'s model targeted directly. Defending the cash without addressing the leak is how you end up bankrupt in five years with a healthy interim P&L.',
        '',
      ],
      takeaway:
        'Watch how late "fixing it" comes. When a CEO finally takes the right action three years after the signal was visible, the action itself is rarely the buy signal — it\'s often the confirmation that the moat already broke.',
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
        'I would have sold in 2003 — not because I had a crystal ball, but because the same-store revenue line had been declining for two straight years while Netflix subscribers had compounded from 600K to over 1.5M. The combination is what makes this readable in real time: the existing footprint was rolling over (demand-side weakness) AT THE SAME TIME a directly-competing model was passing the inflection from "niche" to "compounder." Either signal alone is noise; together they\'re a moat-erosion thesis. The honest part: 2000 is the year hindsight loves, but Hastings-at-300K-subs would have looked like a punt to me in real time. 2005 (the late-fee reversal) is too late — the move itself was already an admission the moat was gone, and at that point you\'re selling into a market that has noticed. The lesson isn\'t "would you have been smart enough to sell early" — it\'s "what specific combination of signals would make you act before the headline number breaks?" For me that\'s same-store rolling over plus a directly-competing model compounding past 1M users.',
      strongReasoningIncludes: [
        'Picks a specific year and names the actual signal that would have triggered the sell — not "I would have seen Netflix coming"',
        'Acknowledges what was knowable at that moment vs. what only looks obvious in hindsight',
        'Distinguishes between leading signals (same-store, Netflix sub curve, late-fee exposure) and lagging signals (the late-fee reversal, the CEO firing, the bankruptcy filing)',
      ],
    },
  ],
  takeaways: [
    'A moat is only as durable as its most profitable revenue line. Blockbuster\'s moat was 7,000 stores — but the cash came from late fees, and Netflix attacked the cash directly.',
    'Cheap insurance against a directed competitive attack tends to look stupid right up until it doesn\'t. The Netflix offer at $50M was the cheapest hedge in business history.',
    'A moat erodes from the inside before the headline breaks. Same-store revenue, mix of new vs. existing, and revenue exposed to a specific competitor\'s pitch all roll over first.',
    'When management finally takes the obviously-correct action three years after the signal was visible, it\'s usually the confirmation that the moat already broke — not the moment to buy in.',
  ],
  completionMessages: {
    perfect:
      'Sharp work. You can read a moat the way it actually breaks — through the most profitable revenue line, with same-store metrics rolling first, while the headline still looks fine.',
    great:
      'Strong run. You can see that moat erosion is readable in real time if you know which lines to watch — and that the obvious "fix it" moves usually arrive too late.',
    good:
      'Solid grounding. Hold onto the through-line: the moat was never the 7,000 stores. It was the late-fee line that funded them — and it had a directly-targeted attacker the whole time.',
    low:
      'Worth re-running. The point of this lesson isn\'t Blockbuster — it\'s the habit of asking "which of my revenue lines is a competitor specifically built to kill?" before the headline number breaks.',
  },
};
