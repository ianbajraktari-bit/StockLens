import { Receipt, Calculator, ArrowDownUp, Target, MessageSquare } from 'lucide-react';
import type { Lesson } from './types';

/**
 * Scenario lesson — through-line: one real earnings print
 * (Starbucks Q2 FY2024, reported April 30, 2024). Headline number is
 * comp sales -4%; the stock dropped ~16% the next day. The lesson
 * peels the same number apart — traffic vs. ticket — until the user
 * sees what the headline hides. Inward zoom on a single quarter,
 * not a forward-in-time walk and not a side-by-side comparison.
 */
export const foundationsDriversLesson: Lesson = {
  id: 'foundations-drivers',
  emoji: '🔍',
  title: 'Inside One Number',
  subtitle:
    'Starbucks just printed -4% comp sales. The stock fell 16%. The real story isn\'t in the headline.',
  description:
    'Revenue is what gets printed. Drivers are what produced it. This lesson takes one real quarter — Starbucks Q2 FY2024, reported April 30, 2024 — and walks you from the headline number down to the two levers underneath it (traffic and ticket). By the end you can read past a comp number into the actual lever that\'s moving — and write the question you\'d ask on the earnings call.',
  estimatedMinutes: 4,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['business_drivers'],
  keyFacts: [],
  topics: [
    { label: 'Comp sales = traffic × ticket', icon: Calculator },
    { label: 'Why traffic and ticket mean different things', icon: ArrowDownUp },
    { label: 'Reading a real earnings print', icon: Receipt },
    { label: 'Asking the right question on the call', icon: MessageSquare },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────────
    // STEP 1 — Decide. Anchor on the headline. Bait the obvious read.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Headline',
      topicIcon: Receipt,
      context:
        'On April 30, 2024, Starbucks reports Q2 FY2024 earnings. Revenue is $8.56B, down ~2% year over year. The headline that runs everywhere: "Global comparable store sales fell 4%." The stock drops about 16% the next morning.\n\nBefore you see anything else, you have to form a quick read. Comp sales declining 4% — what would you assume is happening?',
      question: 'Same-store sales down 4%. What does that headline most naturally suggest?',
      options: [
        'Customers are walking away — fewer people are coming into Starbucks',
        'Customers are still coming, but spending less per visit (smaller drinks, fewer add-ons)',
        'You can\'t tell from the headline alone — comp sales is one number that hides at least two different stories',
      ],
      correctIndex: 2,
      punchline:
        'Comp sales is the product of two underlying numbers: (transactions per store) × (average ticket per transaction). A -4% comp could be -10% traffic offset by +6% ticket, or -1% traffic with -3% ticket, or anywhere in between. The headline tells you the result. It doesn\'t tell you which of the two levers moved.',
      wrongNudges: [
        'It might turn out to be true once you look at the split, but the headline alone doesn\'t support it. To know whether fewer customers came in, you need the transaction count, which is reported separately.',
        'It might also turn out to be true. Lower spend per visit shows up as ticket decline. But again, the headline doesn\'t tell you whether ticket moved at all.',
        '',
      ],
      takeaway:
        'Same-store sales is a composite. It tells you what landed; it doesn\'t tell you which of the two levers underneath it moved. So before you form a view on a comp print, ask for the split.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 2 — Estimate. Force the user to do the decomposition math.
    // Reveals the actual SBUX split: traffic -7%, ticket +4%.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'Splitting the Number',
      topicIcon: Calculator,
      context:
        'Inside the press release, Starbucks breaks the North America comp into the two levers. Average ticket — what each customer spent per visit — was UP 4%. So the -3% North America comp came entirely from the other lever: transactions per store.\n\nFor small percentages, the math is roughly additive: comp ≈ traffic% + ticket%. So if comp is -3% and ticket is +4%, traffic must be down by about how much?',
      question: 'North America comp -3%, ticket +4%. Roughly how much was traffic down?',
      answer: 7,
      tolerance: 2,
      unit: '%',
      hint: 'For small numbers: comp ≈ traffic + ticket. Solve for traffic.',
      reveal:
        'About -7%, which is what Starbucks actually reported for North America: transactions per store down ~7%, average ticket up ~4%, and comp landing at -3%. So the underlying customer-visit decline was about twice the size of the comp number, with most of the offset coming from price increases. The headline made the quarter look bad. The split made it look worse.',
      takeaway:
        'If ticket is up and comp is still down, the entire comp decline (and then some) is coming from traffic. The useful question to ask in that case: what would the comp have been without the price increases?',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 3 — Drill. Build the framework: traffic vs. ticket.
    // 4 quick scenarios, each one isolating which lever moved and why.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Traffic or Ticket?',
      topicIcon: ArrowDownUp,
      intro:
        'Four short scenarios. For each one, decide which lever (traffic or ticket) you would weight more as an investor and why. The point is to internalize that they\'re not interchangeable signals.',
      prompts: [
        {
          setup:
            'A coffee chain reports comp sales +5%. Underneath: traffic +5%, ticket flat. Compare with another quarter: comp sales +5%, traffic flat, ticket +5% (price increase).',
          left: { label: 'Traffic +5%', sublabel: 'more customers, same spend' },
          right: { label: 'Ticket +5%', sublabel: 'price hike, same customers' },
          correct: 'left',
          flash:
            'Same +5% on the surface, very different underneath. The traffic version means more people are choosing to walk in. The ticket version means the same people are paying a higher price. Traffic-led growth is harder to manufacture and tends to be more durable.',
        },
        {
          setup:
            'A restaurant chain prints comp -2%. Split A: traffic -8%, ticket +6% (heavy menu price hikes). Split B: traffic +2%, ticket -4% (smaller orders).',
          left: { label: 'Split A', sublabel: 'traffic -8%, ticket +6%' },
          right: { label: 'Split B', sublabel: 'traffic +2%, ticket -4%' },
          correct: 'left',
          flash:
            'Both prints land at -2%, but they describe different businesses. In Split A, customers are leaving and price increases are masking the loss; once you can\'t raise again, the comp gets uglier. In Split B, customers are still showing up; they\'re just buying smaller orders, which a promotion or new menu can usually pull back.',
        },
        {
          setup:
            'An apparel retailer reports flat comp sales. Traffic +6%, ticket -6%. Same store, same period last year: traffic flat, ticket flat.',
          left: { label: 'Bullish read', sublabel: 'demand is picking up' },
          right: { label: 'Bearish read', sublabel: 'pricing power is gone' },
          correct: 'left',
          flash:
            'Both reads are defensible, and which one you weight depends on what you think is causing the ticket softness. The bullish version: customers are coming back, and the lower ticket reflects promotions you can pull back later. The bearish version: customers are coming back only because of those promotions, in which case the demand picks up but the unit economics don\'t. The traffic recovery is the more interesting fact, but it\'s not unambiguous good news.',
        },
        {
          setup:
            'A coffee chain prints comp sales -3%. The CEO emphasizes "we held ticket up by raising prices, customers value the brand." A sell-side analyst asks specifically about transactions per store.',
          left: { label: 'CEO is reassuring', sublabel: 'price held, brand intact' },
          right: { label: 'Analyst is right to push', sublabel: 'price held, but did people show up?' },
          correct: 'right',
          flash:
            'When management leads with ticket and walks past transactions, transactions are usually the worse number. The follow-up the analyst is reaching for: what did traffic do, and where would the comp have landed without the price increases?',
        },
      ],
      takeaway:
        'Traffic and ticket measure different things. Traffic measures whether people are choosing to come in; ticket measures what they spend once they do. A comp held up by price increases is a different story than the same comp delivered by more visits, even if the printed number is identical.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 4 — Decide. Apply the framework back to SBUX.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Reading SBUX Q2 FY2024',
      topicIcon: Target,
      context:
        'Now apply what you just drilled to the real quarter.\n\nStarbucks North America: comp -3%, transactions per store -7%, average ticket +4%. China: comp -11% (transactions and ticket both down). Globally: comp -4%. Revenue $8.56B (-2%). Stock down ~16% the next day.\n\nWhat\'s the actual diagnosis?',
      question: 'What is the real story underneath the -4% global comp?',
      options: [
        'Pricing-led weakness — customers pushed back on Starbucks\' price hikes, so ticket fell',
        'Demand-led weakness — fewer people are walking into Starbucks, partly hidden by price hikes pushing ticket up',
        'A mix problem — customers shifted from premium drinks to cheaper ones',
      ],
      correctIndex: 1,
      punchline:
        'It\'s the demand read. North America transactions per store were down ~7% while ticket was up 4%, so without the price increases the comp would have been roughly -7%. That\'s the part the market reacted to: the headline was -4%, but underneath it was a 7% drop in visits and a price lever that has limited room left to run.',
      wrongNudges: [
        'Ticket actually went up 4% in North America, not down. The price lever was working in this quarter; the question is what was happening underneath it.',
        '',
        'Possible at the margins, but the bigger movement is in transactions per store, not in basket composition. A 7% transaction decline is fewer customer visits, not the same customer choosing a smaller drink.',
      ],
      takeaway:
        'Two comp prints can land at the same number and tell opposite stories. The market\'s reaction usually tracks the lever underneath the headline, especially the lever the company didn\'t lead with in the press release.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 5 — Thinking. Write the call question.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'thinking',
      prompt:
        'You\'re on the Starbucks Q2 FY2024 earnings call. The CEO has spent the prepared remarks emphasizing brand strength, new menu innovation, and ticket growth. You get one question. Write it. (3-4 sentences max — set up what you noticed in the print, then ask the question.)',
      placeholder:
        'What did the print actually show? What did management talk around? What\'s the one thing that, if answered, would tell you whether this is a one-quarter occasional-visitor problem or a structural demand break?',
      modelAnswer:
        'In North America, transactions per store were down 7% while ticket was up 4%, so the -3% comp is masking a much bigger drop in customer visits, with most of the offset coming from price. My question: of that 7-point transaction decline, how much was occasional customers visiting less often versus active Rewards members dropping out of the program entirely? The reason it matters: lower frequency from existing customers is something a marketing campaign can usually pull back, but Rewards attrition is a change in the most loyal cohort and it changes how I think about the multiple. I\'d also want a sense of how much further you believe ticket can go from here, because if traffic stays around -7% and the price lever is close to tapped out, next quarter\'s comp looks meaningfully worse.',
      strongReasoningIncludes: [
        'Names the actual transactions-vs-ticket split in the question rather than asking generically about "weakness"',
        'Asks for a decomposition management didn\'t volunteer (e.g., occasional vs. loyal customer behavior, frequency vs. cohort attrition, room left in the price lever)',
        'Connects the possible answers to a specific investment consequence (what would change in your view depending on which way they answer)',
      ],
    },
  ],
  takeaways: [
    'Comp sales is the product of transactions per store and average ticket. The headline tells you the result; the split tells you which lever actually moved.',
    'Traffic measures whether people are choosing to come in. Ticket measures what they spend once they do. The two are not interchangeable, even when they add up to the same comp.',
    'When ticket is up and comp is still down, the comp is understating what\'s happening on the demand side. Without the price lever the print would have been worse.',
    'On most earnings calls, the lever management talks about most is usually the better one. The useful question is about the lever they spent the least time on.',
  ],
  completionMessages: {
    perfect:
      'Good run. You can read past a comp number to the lever underneath, and ask the question that gets you the part management didn\'t volunteer.',
    great:
      'Solid work. You can see that two identical comp prints can describe very different businesses depending on the traffic-vs-ticket split.',
    good:
      'Decent foundation. The piece worth keeping: comp ≈ traffic + ticket, so before forming a view on a comp print, ask for the split.',
    low:
      'Worth another run. The lesson isn\'t Starbucks specifically. It\'s the habit of breaking every comp number into its two levers before deciding what the quarter actually said.',
  },
};
