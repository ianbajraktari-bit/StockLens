import {
  Repeat,
  TrendingDown,
  Search,
  TrendingUp,
  Lightbulb,
} from 'lucide-react';
import type { Lesson } from './types';

/**
 * Time-series lesson — through-line: one company, walked across five years
 * of a major business-model transition. Adobe 2012-2017. The shape is
 * deliberately not "compare three companies" — recurring revenue is a
 * concept about transition, not comparison, so the lesson follows one
 * business through it.
 *
 * Steps walk forward in time: 2012 baseline → May 2013 announcement →
 * FY2013 trough → FY2014/15 crossover → FY2017 result → synthesis.
 */
export const foundationsRecurringLesson: Lesson = {
  id: 'foundations-recurring',
  emoji: '🔄',
  title: 'Money That Comes Back',
  subtitle:
    'Watch Adobe tear up its own business model in real time — and become more valuable for doing it.',
  description:
    'In May 2013, Adobe stopped selling Photoshop in a box and forced every customer onto a $50/month subscription. Revenue dropped. Earnings cratered. Wall Street thought the company had lost its mind. Five years later, Adobe was the best-performing large-cap software stock of the decade. Walk the transition forward in time and find the signals investors saw — and the comfortable phrases that meant nothing.',
  estimatedMinutes: 4,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['recurring_revenue'],
  keyFacts: [],
  topics: [
    { label: 'The lumpy 2012 license-only Adobe', icon: Repeat },
    { label: 'Why FY2013 revenue dropped 8%', icon: TrendingDown },
    { label: 'Reading earnings commentary in a pivot', icon: Search },
    { label: 'Why subscription wins amplify, not create, durability', icon: Lightbulb },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────────
    // STEP 1 — 2012. The baseline. Calibrate why the old model was lumpy.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: '2012 — The Old Adobe',
      topicIcon: Repeat,
      context:
        'It\'s 2012. Adobe sells Photoshop as a $700 box of software you own forever. The full Creative Suite goes for ~$2,500. Customers buy a version, use it for a few years, and maybe upgrade when a new release comes out — or maybe not. Revenue that year: ~$4.4 billion, growing maybe 5% a year. A respectable, somewhat boring software business.\n\nThe headline problem with the box model wasn\'t piracy or competition. It was simpler: every dollar of revenue had to be RE-EARNED from scratch every release cycle. Calibrate that for yourself before we start.',
      question:
        'Roughly what % of existing Creative Suite customers actually upgraded to each new version Adobe shipped?',
      answer: 25,
      tolerance: 12,
      unit: '%',
      hint: 'When the new version felt incremental, most customers stayed on the old one.',
      reveal:
        'Around a quarter. Three out of four customers were running an older Creative Suite and not paying Adobe a cent for it that year — even though they were still using the product daily. Worse, the upgrade rate swung wildly version to version: when CS5 felt like a big leap, more upgraded; when CS6 felt incremental, fewer did. Revenue was a guessing game tied to whether the next release felt like enough of a reason to pay again.',
      takeaway:
        'License revenue forces every dollar to be re-earned. Adobe\'s old model meant most of its install base wasn\'t paying it any given year — they\'d already paid once and were waiting for the next version to feel worth the upgrade.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 2 — May 2013. The announcement. What's the right read?
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'May 2013 — The Announcement',
      topicIcon: TrendingDown,
      context:
        'On May 6, 2013, Adobe announced that CS6 — the version of Creative Suite that had just shipped — would be the LAST boxed product. Going forward, every Adobe creative tool would be available only through Creative Cloud at $50/month for the full suite or $20/month for Photoshop alone. No more $2,500 perpetual licenses. Ever.\n\nIf you\'re an investor reading the announcement live in May 2013, what\'s the most thoughtful read?',
      question: 'What\'s the right reaction to the May 2013 announcement?',
      options: [
        'Panic. Recurring $50/month is a fraction of $2,500 upfront — revenue is going to fall off a cliff.',
        'Cheer. Subscription revenue is always worth more than license revenue — this is an obvious upgrade.',
        'Sit in the question. Revenue WILL drop in the short term as license sales dry up faster than subscription revenue can backfill it. The interesting question isn\'t the trough — it\'s what shows up underneath it.',
        'Ignore the announcement. Software accounting is too complex to read from a press release; wait for next earnings.',
      ],
      correctIndex: 2,
      punchline:
        'Both panic and cheer were everywhere in May 2013 — and both were wrong. The honest read was: this trade WILL look bad on the income statement for a year or two as license revenue collapses faster than subscriptions can fill it. The real question is what happens AFTER the trough, and whether the metrics underneath it (subscriber count, retention, unit margin) are headed in the right direction while the headline is in the wrong one.',
      wrongNudges: [
        'Half right — revenue WAS going to drop near-term, mathematically. But "panic" treats the trough as the destination. The investing question is what happens AFTER the trough, and panic prevents you from looking.',
        'Too easy. Subscription revenue is more durable, but only if customers actually subscribe and stay. In May 2013 Adobe had a few hundred thousand CC subscribers. They needed millions for the math to work. Cheering before that was confirmed is hindsight bias dressed up as conviction.',
        '',
        'Punting on the most-watched software transition of the decade isn\'t analysis; it\'s avoidance. The data WAS already there: install base, ARPU, churn signals from the early CC cohort. The point of being an investor is doing the work the press release doesn\'t do for you.',
      ],
      takeaway:
        'The honest reaction to a major business-model change isn\'t "this is good" or "this is bad" — it\'s "here\'s what would make this work, here\'s what would prove it didn\'t, and which numbers tell me which." Stay in the question.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 3 — FY2013 close. Read management commentary in the trough.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Late 2013 — Reading the Trough',
      topicIcon: Search,
      intro:
        'FY2013 closes (Adobe\'s fiscal year ends late November). The numbers are ugly. Total revenue: ~$4.05B — DOWN ~8% from $4.4B the year before. Net income: ~$290M — DOWN ~65% from $833M. License revenue is in free fall. But subscribers reached ~1.4M, up from a few hundred thousand 18 months earlier.\n\nThis is the kind of report that triggers panic if you only read the top of the income statement. Adobe\'s management gave a long earnings commentary explaining the dip. Some of what they said was real signal. Some was the kind of confident-sounding language management uses when the headline is bad. Tap the THREE statements that are real evidence the transition is working — not the lines that are reassurance.',
      passage: [
        {
          type: 'text',
          value: 'From Adobe\'s FY2013 management commentary, paraphrased: ',
        },
        {
          type: 'chip',
          value: 'Revenue declined 8% year-over-year as expected during the transition',
          signal: false,
          feedback:
            'This just acknowledges the headline. It\'s not evidence the transition is working — it\'s evidence the transition happened. Don\'t confuse "we told you it would be bad" with "and here\'s why it\'ll be fine."',
        },
        { type: 'text', value: ' ' },
        {
          type: 'chip',
          value: 'Creative Cloud paid subscriptions reached 1.4 million, more than tripling year-over-year',
          signal: true,
          feedback:
            'Real signal. The bear case for Adobe was "customers won\'t pay monthly for software they used to own." 1.4M subscribers, more than tripling, is direct evidence customers WILL pay. The number is what matters; the trajectory matters more.',
        },
        { type: 'text', value: ' ' },
        {
          type: 'chip',
          value: 'We remain confident in the long-term strategy and committed to the model',
          signal: false,
          feedback:
            'Pure reassurance. Every CEO of a struggling company says this. It\'s not evidence either way — it\'s the verbal equivalent of "no comment." Throw it out and find the falsifiable claims around it.',
        },
        { type: 'text', value: ' ' },
        {
          type: 'chip',
          value: 'Annualized recurring revenue from Digital Media reached $1.07 billion exiting the year',
          signal: true,
          feedback:
            'Real signal — and the most important one. "Annualized recurring revenue" (ARR) means: at current run-rate, here\'s a year of forward-visible revenue. ~$1B in visible, recurring revenue is worth FAR more than ~$1B of lumpy license revenue. The income statement is showing the trough; ARR is showing the new floor.',
        },
        { type: 'text', value: ' ' },
        {
          type: 'chip',
          value: 'Operating margin declined as we reinvested in the platform',
          signal: false,
          feedback:
            'Could be true. Could also be a euphemism for "our costs went up faster than revenue." Without specific reinvestment numbers, this is unfalsifiable. Smart investors flag this kind of phrase and look for the actual cost detail before counting it as evidence.',
        },
        { type: 'text', value: ' ' },
        {
          type: 'chip',
          value: 'Subscription gross margin is structurally higher than license gross margin once at scale',
          signal: true,
          feedback:
            'Real signal AND testable. Subscription gross margin really is higher because there\'s no manufacturing, no boxes, no retail markup, no piracy. Adobe was telling investors: yes, the income statement looks bad now, but the unit economics underneath are better than what you\'re losing.',
        },
      ],
      requiredSignals: 3,
      reveal:
        'Three real signals: 1.4M paying subscribers (the demand exists), $1.07B in ARR (the new floor is visible), structurally better subscription unit margins (the math works at scale). The reassurance phrases — "confident in the strategy," "reinvested in the platform," "as expected" — sound like substance but contain none. Read every earnings commentary this way: separate the falsifiable claims from the comfortable language.',
      takeaway:
        'Earnings commentary during a transition is a mix of evidence and reassurance. Your job is to find the testable claims — subscriber count, ARR, unit margin — and ignore the rest. Confidence isn\'t a number.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 4 — FY2014-2015. The crossover. Calibrate the recovery.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: '2014-2015 — The Crossover',
      topicIcon: TrendingUp,
      context:
        'FY2014 closes. The trough is ending. Revenue: ~$4.15B, modestly above 2013. Subscribers: from 1.4M at end of FY2013 to ~3.5M at end of FY2014 — more than doubled.\n\nSomewhere during this fiscal year, something quietly important happened. Subscription revenue (collecting $50/month per subscriber, in a steady stream) crossed past license revenue (collecting $2,500 per box, but only when someone bought a box). The crossover is the moment the bear case dies: license revenue is going to keep declining toward zero — that\'s the deal Adobe made — and subscription revenue is going to keep growing as long as new subscribers come in faster than existing ones leave.\n\nCalibrate one more number. By the end of FY2015 — about 30 months after CS6 stopped shipping — what percentage of Adobe\'s TOTAL revenue came from subscriptions?',
      question: 'By end of FY2015, what % of Adobe\'s total revenue was subscription-based?',
      answer: 70,
      tolerance: 12,
      unit: '%',
      hint: 'Subscribers roughly doubled again from end of FY2014 (~3.5M) through FY2015.',
      reveal:
        'Around 70%. By end of FY2015 — just 30 months after CS6 stopped shipping — Adobe was a fundamentally different company. License revenue had become a small tail; subscription revenue was the engine. Total revenue: ~$4.8B, up 16% year-over-year and accelerating. Net income: ~$630M, more than double the FY2013 trough. The bear case was over.',
      takeaway:
        'The trough lasted about 18 months. The recovery wasn\'t cyclical — it was structural. Every new subscriber added durable revenue that didn\'t need to be re-earned the next year, while the lumpy license revenue Adobe had given up was never coming back.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 5 — FY2017. The result. The trap of the wrong lesson.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: '2017 — The Wrong Lesson',
      topicIcon: Lightbulb,
      context:
        'FY2017 closes. Adobe\'s revenue: ~$7.3 billion — up from ~$4.4B at the start of the journey. Net income: ~$1.7B, up roughly 6x from the FY2014 trough. Stock price: roughly 5x where it was in May 2013, making Adobe one of the best-performing large-cap software stocks of the entire 2010s.\n\nNow your friend pulls a clean conclusion from the chart: "subscription business model = better." So they tell you they\'re going to apply this pattern: any company switching from licenses to subscriptions is automatically a buy.\n\nWhat\'s wrong with that take?',
      question: 'Why is "subscription model = better" the wrong lesson from Adobe\'s pivot?',
      options: [
        'It\'s not — subscriptions really are structurally better, and any license-to-subscription transition is a buy.',
        'Adobe was already the de facto standard for working creative pros — its customers had nowhere realistic to go. The pivot didn\'t create durability; it monetized durability that was already there. A weaker company doing the same thing would just lose customers and never recover.',
        'Adobe got lucky with timing — Creative Cloud launched right as cloud computing took off.',
        'Subscriptions only worked because Adobe could afford to take a 2-year revenue hit; most companies can\'t.',
      ],
      correctIndex: 1,
      punchline:
        'The lesson isn\'t "subscriptions are better." It\'s "subscriptions amplify whatever you already are." Adobe was the standard for working creatives — they had to subscribe because there was no real alternative. Hand the same playbook to a company without that lock-in and the trough never ends. The pivot didn\'t create durability; it monetized durability that was already there.',
      wrongNudges: [
        'This is the take that kills portfolios. Smaller software companies tried the same transition and shrank or disappeared — Quark, Corel, and a long tail of others lost share they never got back. Subscription billing was a feature; the customer lock-in was the prerequisite.',
        '',
        'Cloud computing helped a little, but Creative Cloud isn\'t really a cloud-computing story — Photoshop still runs locally on your machine. The cloud part was mostly delivery and licensing. Adobe\'s edge was the customer base, not the infrastructure.',
        'True but secondary. Many companies have cash reserves; few have a customer base they can bring with them through a price-and-billing change. The financial cushion enables the bet; the moat decides whether the bet pays off.',
      ],
      takeaway:
        'When a transition story works for a great business, the obvious lesson is "the transition worked." The actual lesson is usually "this business was already great in a way that survived the transition." Don\'t generalize from winners without isolating what made them survive.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 6 — Thinking. Synthesis: write the pushback.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'thinking',
      prompt:
        'Your friend reads this lesson and says: "Got it — Adobe pivoted to subscriptions, revenue dropped, then it 5x\'d. So I\'m going to scan for any company switching from licenses to subscriptions and buy it." In 2-3 sentences, give them your strongest pushback — using what you saw across this lesson\'s timeline.',
      placeholder:
        'Think about: what made Adobe\'s trough survivable? What did the FY2013 commentary tell you to look for? What would have happened if Adobe had been a weaker company?',
      modelAnswer:
        'Adobe\'s pivot worked because Adobe was already the de facto standard for creative pros — when the boxed product disappeared, customers didn\'t have a realistic alternative, so they subscribed. Apply the same template to a company without that prior lock-in and the trough is permanent: Quark, Corel, and others tried subscription transitions and never came back. Before buying any "transition story," look at what FY2013 Adobe did: paying subscribers tripling, ARR rising while headline revenue fell, and unit margins structurally better. Without those three signals showing up underneath the trough, the transition isn\'t a setup for a comeback — it\'s a managed liquidation.',
      strongReasoningIncludes: [
        'Identifies that Adobe\'s pre-existing customer lock-in was the precondition, not the subscription model itself',
        'Names a concrete signal investors should look for during a transition (subscriber growth, ARR, or unit margin)',
        'Acknowledges that other companies tried the same playbook and failed (Quark, Corel, or a general "most software companies can\'t pull this off")',
      ],
    },
  ],
  takeaways: [
    'License revenue forces every dollar to be re-earned. Subscription revenue carries forward — but only if customers actually stay.',
    'Major business-model transitions create a trough that looks like failure on the income statement. The real signals live underneath: subscriber count, ARR, and unit margin.',
    'Earnings commentary during a transition is a mix of evidence and reassurance. Confidence is not a number; subscriber count, ARR, and unit margin are.',
    'Subscription transitions amplify the pre-existing moat — they don\'t create one. Adobe could pull it off because customers had nowhere else to go. Most companies trying the same thing don\'t.',
  ],
  completionMessages: {
    perfect:
      'Sharp work. You can read a transition through its trough — separating the signals that matter from the comforting language that doesn\'t.',
    great:
      'Strong run. You can see why Adobe\'s pivot worked, and why most pivots don\'t.',
    good: 'Solid grounding. Hold the timeline: trough → crossover → compounding, with subscriber count and ARR as the lights along the way.',
    low: 'Worth re-running. The point isn\'t "Adobe was great" — it\'s how to read a business through a major transition without panicking at the income statement.',
  },
};
