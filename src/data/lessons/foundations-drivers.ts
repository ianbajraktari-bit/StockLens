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
        'Comp sales is a product, not a measurement. It\'s (transactions per store) × (average ticket per transaction). A -4% comp could be -10% traffic offset by +6% ticket, or -1% traffic with -3% ticket, or any combination in between. The headline is the OUTPUT. The drivers are inside.',
      wrongNudges: [
        'A common read — and possibly correct — but you\'re jumping ahead of the data. Traffic is one of the two levers under comp sales. To get to "fewer people are coming" you have to look at the transaction count, which the headline doesn\'t give you.',
        'Also possible — and possibly correct. Lower spend per visit shows up as ticket decline. But the headline alone doesn\'t tell you whether ticket moved at all.',
        '',
      ],
      takeaway:
        'Same-store sales is a composite number. It tells you the result; it does not tell you which lever moved. The investor\'s first move on any comp print: ask for the split.',
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
        'About -7%. That\'s the actual reported number for North America: transactions per store down ~7%, average ticket up ~4%, comp landing at ~-3%. The headline (-3%, or -4% globally) understates what\'s actually moving — a 7% drop in customer visits, partially masked by customers spending more per visit (mostly from price increases). The "demand" picture is roughly twice as bad as the headline suggests.',
      takeaway:
        'When ticket is up and comp is still down, traffic is doing all the damage — and then some. Ticket is hiding part of the loss. Always ask: how big would the comp decline have been WITHOUT the price increase?',
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
        'For each scenario below, decide which lever should worry you MORE as an investor — traffic (number of customer visits) or ticket (average spend per visit). The point is to build the reflex: traffic and ticket are NOT interchangeable signals.',
      prompts: [
        {
          setup:
            'A coffee chain reports comp sales +5%. Underneath: traffic +5%, ticket flat. Compare with another quarter: comp sales +5%, traffic flat, ticket +5% (price increase).',
          left: { label: 'Traffic +5%', sublabel: 'more customers, same spend' },
          right: { label: 'Ticket +5%', sublabel: 'price hike, same customers' },
          correct: 'left',
          flash:
            'Traffic-led growth is a demand signal — more humans are choosing to come in. Ticket-led growth is a pricing signal — same humans, asked to pay more. Traffic is the harder, more durable one.',
        },
        {
          setup:
            'A restaurant chain prints comp -2%. Split A: traffic -8%, ticket +6% (heavy menu price hikes). Split B: traffic +2%, ticket -4% (smaller orders).',
          left: { label: 'Split A', sublabel: 'traffic -8%, ticket +6%' },
          right: { label: 'Split B', sublabel: 'traffic +2%, ticket -4%' },
          correct: 'left',
          flash:
            'Same -2% headline, very different underneath. Split A is bleeding customers and using price to mask it — that math runs out when you can\'t hike again. Split B still has people walking in; they\'re just trading down. Trade-down is reversible. Customers leaving is much harder to win back.',
        },
        {
          setup:
            'An apparel retailer reports flat comp sales. Traffic +6%, ticket -6%. Same store, same period last year: traffic flat, ticket flat.',
          left: { label: 'Bullish read', sublabel: 'demand is picking up' },
          right: { label: 'Bearish read', sublabel: 'pricing power is gone' },
          correct: 'left',
          flash:
            'Genuinely defensible either way, but the bullish read tends to win on this one. The customers ARE coming back — that\'s a real demand signal. Ticket softness from promotions can be unwound. Traffic that disappears often doesn\'t come back. Demand is the harder lever to fix.',
        },
        {
          setup:
            'A coffee chain prints comp sales -3%. The CEO emphasizes "we held ticket up by raising prices, customers value the brand." A sell-side analyst asks specifically about transactions per store.',
          left: { label: 'CEO is reassuring', sublabel: 'price held, brand intact' },
          right: { label: 'Analyst is right to push', sublabel: 'price held, but did people show up?' },
          correct: 'right',
          flash:
            'When a CEO talks about ticket and not transactions, that\'s usually because transactions are the worse number. "We held ticket" is doing a lot of work in that sentence. The right follow-up is always: what did traffic do, and what would the comp have looked like without the price increases?',
        },
      ],
      takeaway:
        'Traffic = demand. Ticket = pricing and mix. A comp sales number that looks fine because of price hikes is a different business than the same comp delivered by more customers walking in. Pricing power runs out; demand compounds.',
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
        'This is a traffic story, not a ticket story. North America transactions per store fell ~7%; ticket actually went UP 4%. The comp would have been roughly -7% without the price increases. The market\'s 16% reaction was less about "Starbucks is shrinking 4%" and more about "Starbucks is losing visits at 7%, and the price lever propping up the headline is almost spent."',
      wrongNudges: [
        'Ticket actually went UP 4% in North America, not down. That\'s the trick of this print — the surface-level "weakness" is actually masked by pricing strength. The damage is in the lever the press release talks about least.',
        '',
        'Possible at the margins, but the bigger signal is in the transaction count, not the basket composition. When transactions are down 7%, you\'re losing CUSTOMER VISITS, not just trading down within the same basket.',
      ],
      takeaway:
        'Two prints with the same -4% comp can mean opposite things. The market reaction is rarely to the headline — it\'s to the lever underneath the headline that the company didn\'t lead with.',
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
        'Across North America, transactions per store were down 7% while ticket was up 4% — meaning the -3% comp masked a much larger drop in actual customer visits, with the price lever doing most of the propping. My question: of that -7% transaction decline, how much was driven by occasional customers (lower visit frequency from existing members) versus active Rewards members leaving the program entirely? The reason this matters: the first is a marketing problem you can fix with offers; the second is a structural break in your most loyal demand cohort, and it changes the multiple I should be paying. I\'d also want a sense of how much further you believe ticket can go — because if pricing is tapped out and traffic stays at -7%, next quarter\'s headline comp is very different.',
      strongReasoningIncludes: [
        'Names the actual split (transactions vs. ticket) in the question — doesn\'t just ask about "weakness"',
        'Asks for a decomposition the company has NOT volunteered (e.g. occasional vs. loyal customer behavior, frequency vs. cohort attrition, what happens if ticket can\'t go higher)',
        'Connects the answer to a specific investment consequence — what would change in your view depending on which way they answer',
      ],
    },
  ],
  takeaways: [
    'Comp sales is a product, not a measurement: comp ≈ transactions × ticket. The headline tells you the result; the split tells you which lever moved.',
    'Traffic is a demand signal. Ticket is a pricing/mix signal. They are not interchangeable — a comp held up by price hikes is a different business than the same comp delivered by more customer visits.',
    'When ticket is up and comp is still down, traffic is doing all the damage. The "real" decline is bigger than the headline suggests.',
    'On any earnings print, the lever management leads with is usually the better one. The question you should ask is about the lever they didn\'t mention.',
  ],
  completionMessages: {
    perfect:
      'Sharp work. You can read past a comp number to the actual lever moving underneath — and ask the question that forces management to reveal what they led around.',
    great:
      'Strong run. You can see that two identical headline numbers can mean opposite things depending on the traffic-vs-ticket split.',
    good:
      'Solid grounding. Hold onto the through-line: comp ≈ traffic + ticket. The headline is the output; the drivers are inside.',
    low:
      'Worth re-running. The point of this lesson isn\'t Starbucks — it\'s the habit of decomposing every comp number into the two levers before forming a view.',
  },
};
