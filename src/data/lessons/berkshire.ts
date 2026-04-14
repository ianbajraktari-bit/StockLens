import { Building2, Shield, Wallet, TrendingUp, AlertTriangle, Scale } from 'lucide-react';
import type { Lesson } from './types';

export const berkshireLesson: Lesson = {
  id: 'berkshire',
  emoji: '🎩',
  title: 'Berkshire Hathaway Lesson',
  subtitle: 'A holding company, an insurance float, and the world\'s most famous capital allocator',
  description:
    "Berkshire isn't really a company — it's a machine for owning other businesses, funded by one of the strangest free-money sources in finance. You'll learn what insurance 'float' actually is, why Berkshire has never paid a dividend, how Apple became its largest position, and the central question every Berkshire investor now faces: what happens after Buffett?",
  estimatedMinutes: 4,
  dataAsOf: 'Q4 2024',
  tier: 'company',
  skills: ['business_drivers', 'valuation', 'risk', 'moats', 'margins'],
  keyFacts: [
    { label: 'Market Cap', value: '~$1T+', detail: 'Crossed $1 trillion in 2024 — the first non-tech US company to do so' },
    { label: 'Cash & Treasuries', value: '~$325B', detail: 'Largest cash pile in corporate history — earning ~5% in short-term bonds' },
    { label: 'Insurance Float', value: '~$170B', detail: 'Money held from policyholders that Berkshire invests before paying claims' },
    { label: 'Dividend', value: '$0', detail: 'Has not paid a dividend since Buffett took over in 1965 — all capital is reinvested' },
  ],
  topics: [
    { label: 'What Berkshire actually is — a conglomerate, not a company', icon: Building2 },
    { label: 'Insurance float: the hidden engine behind the returns', icon: Shield },
    { label: 'Why no dividend, and what that tells you about management', icon: Wallet },
    { label: 'The succession question — investing in a post-Buffett Berkshire', icon: AlertTriangle },
  ],
  storyArc: ['The Three-Part Machine', 'The Float Engine', 'The Capital Allocation Test', 'The Succession Question'],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Decide: What Berkshire actually is
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'What Is Berkshire?',
      topicIcon: Building2,
      context:
        'When people say "Berkshire Hathaway," most picture a giant investment fund run by Warren Buffett. That\'s not quite right.\n\nBerkshire owns 60+ wholly-owned operating businesses (BNSF Railway, GEICO, See\'s Candies, Dairy Queen, Duracell, a huge utility, and more), plus a $300B+ stock portfolio (Apple, Coca-Cola, American Express, Bank of America, Chevron).',
      question: 'The single best description of Berkshire is:',
      options: [
        'A mutual fund run by Warren Buffett',
        'A conglomerate — a parent company that owns and operates many independent businesses, plus a stock portfolio on the side',
        'A private equity firm that buys and flips companies',
        'An insurance company with other businesses attached',
      ],
      correctIndex: 1,
      punchline:
        'Berkshire is a conglomerate. The operating businesses (railway, energy, insurance, consumer goods) generate most of the earnings. The stock portfolio is large but smaller than the operations. Buffett\'s genius was building a structure where cash from all of it gets allocated wherever returns are highest.',
      wrongNudges: [
        'Mutual funds don\'t own operating companies outright — they only hold public stocks. Berkshire owns entire railways and utilities in addition to stocks.',
        '',
        'Private equity buys, restructures, and sells. Berkshire buys and holds essentially forever — See\'s Candies has been inside Berkshire since 1972.',
        'Insurance is the engine, not the entire business. It generates the float that funds everything else, but the non-insurance operations now earn more than the insurance operations.',
      ],
      takeaway:
        'Berkshire is a conglomerate built around an insurance engine. To value it, you have to understand the operating businesses AND the stock portfolio AND the float — not just one piece.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Drill: How the three parts work together
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'The Three-Part Machine',
      topicIcon: Scale,
      intro:
        'Berkshire has three income sources. Tap the one each question is really describing.',
      prompts: [
        {
          setup: 'A customer pays GEICO $1,500 for a year of car insurance. GEICO doesn\'t expect to pay claims on that policy for months.',
          left: { label: 'This creates "float"', sublabel: 'cash Berkshire holds and invests until claims are paid' },
          right: { label: 'This is pure operating profit', sublabel: 'the $1,500 goes straight to earnings' },
          correct: 'left',
          flash: 'The $1,500 doesn\'t become profit — it becomes float. Berkshire holds the cash, invests it, and keeps any returns. Meanwhile, the insurance business only becomes "profit" once claims are settled for less than premiums collected.',
        },
        {
          setup: 'BNSF Railway hauls grain, oil, and consumer goods across North America. Revenue: ~$24B.',
          left: { label: 'Part of the insurance business', sublabel: 'underwriting risk' },
          right: { label: 'One of the wholly-owned operating businesses', sublabel: 'a real, physical business Berkshire bought outright' },
          correct: 'right',
          flash: 'BNSF is a core Berkshire operating subsidiary — acquired for $34B in 2010. It\'s not insurance; it\'s a railroad. Berkshire owns 100% of it and collects all its profits.',
        },
        {
          setup: 'Berkshire owns roughly 300 million shares of Apple — worth ~$70B at recent prices.',
          left: { label: 'Part of Berkshire\'s public stock portfolio', sublabel: 'held like any investor would' },
          right: { label: 'Berkshire operates Apple\'s retail stores', sublabel: 'a subsidiary they run' },
          correct: 'left',
          flash: 'Berkshire buys stocks in public companies just like an individual investor does — it just does it with more money. Apple is a passive minority stake, not a Berkshire subsidiary.',
        },
        {
          setup: 'Berkshire Hathaway Energy (BHE) runs utilities in the US and UK and owns pipelines.',
          left: { label: 'Part of the stock portfolio', sublabel: 'public equity holding' },
          right: { label: 'A wholly-owned operating subsidiary', sublabel: 'Berkshire owns the whole thing' },
          correct: 'right',
          flash: 'BHE is 100% Berkshire-owned. Utilities are steady, regulated, and reinvest heavily — the kind of predictable cash generator Berkshire loves.',
        },
        {
          setup: 'When one of Berkshire\'s operating companies earns $2B in profit, where does the cash go?',
          left: { label: 'Up to Berkshire\'s parent-level balance sheet, for Buffett to allocate', sublabel: 'to stocks, acquisitions, or reserves' },
          right: { label: 'Stays with the subsidiary forever', sublabel: 'reinvested locally' },
          correct: 'left',
          flash: 'The single most important Berkshire mechanic: subsidiary profits get swept up to headquarters, where Buffett (historically) decides whether to reinvest, acquire, or sit in cash. That central allocation is the entire advantage.',
        },
      ],
      takeaway:
        'Three parts: operating businesses generate cash, the stock portfolio compounds, and the insurance float quietly funds both. All the cash flows up to one place, which is the whole point.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: The float advantage
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Float Engine',
      topicIcon: Shield,
      context:
        'Berkshire holds ~$170B in insurance float — premiums collected but not yet paid out in claims. Berkshire invests that float while it waits.\n\nIf Berkshire earns just 5% on that float each year (easy in a world where Treasury bills yield ~5%), how much annual profit does the float alone generate — before any insurance underwriting profit?',
      question: 'Roughly how much does 5% on $170B produce per year?',
      answer: 8.5,
      tolerance: 1.5,
      unit: '$B',
      hint: '$170B × 0.05',
      reveal:
        'Roughly $8.5B per year — generated by money that isn\'t even Berkshire\'s. That\'s the magic of float: it\'s free leverage. Most companies have to borrow money (paying interest) to invest. Berkshire effectively gets paid to borrow, because good underwriting means premiums exceed eventual claims. Over decades, this compounds into a structural advantage competitors can\'t copy.',
      takeaway:
        'Insurance float is borrowed money that Berkshire invests. When underwriting is disciplined, the cost of that money is zero or negative — a source of returns no ordinary investor has access to.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Decide: Why no dividend
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Capital Allocation Test',
      topicIcon: Wallet,
      context:
        'Berkshire has never paid a dividend under Buffett. Not once since 1965.\n\nMany Berkshire investors are retirees who would love dividend income. The company has enough cash to pay a massive dividend. Yet Buffett has always refused.',
      question: 'The strongest argument for not paying a dividend is:',
      options: [
        'Dividends are taxed, so investors prefer buybacks',
        'As long as Berkshire can reinvest each $1 to create more than $1 of market value over time, keeping the dollar inside Berkshire creates more wealth for shareholders than handing it out',
        'Buffett personally disagrees with all dividends',
        'The law prevents insurance companies from paying dividends',
      ],
      correctIndex: 1,
      punchline:
        'The real test of capital allocation is the "$1 retained test": every dollar Berkshire keeps should eventually produce more than $1 of market value. If it can, that dollar is worth more inside the company than in your hand. Berkshire has consistently passed this test — so paying it out would destroy value.',
      wrongNudges: [
        'Tax efficiency matters but it\'s the symptom, not the reason. Berkshire avoids dividends because reinvestment beats payout — taxes just make that gap even bigger.',
        '',
        'Buffett invests in plenty of dividend-paying stocks (Coke, Apple, Chevron). He\'s not opposed to dividends — he just thinks Berkshire specifically has better uses for the cash.',
        'Insurance subsidiaries can absolutely pay dividends up to the parent. The choice to not pay from parent to shareholder is a strategic one, not a legal one.',
      ],
      takeaway:
        'Not paying a dividend is a bet on management. If the company can compound cash better than shareholders can, keeping it in the business creates more wealth long-term. The moment that stops being true, dividends become the right answer.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Tap: The $325B cash question
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'The Cash Pile Problem',
      topicIcon: AlertTriangle,
      intro:
        'Berkshire\'s cash and short-term Treasury pile recently hit ~$325B — an all-time record. Buffett has also been net selling stocks for several quarters. Tap the phrases that explain why a giant cash pile is both a strength AND a warning sign.',
      passage: [
        { type: 'text', value: '"Berkshire is sitting on $325B in cash and treasuries. On one hand, ' },
        {
          type: 'chip',
          value: 'cash earning 5% yields generates ~$16B/year in safe income',
          signal: true,
          feedback:
            'Yes — a strength. $325B at ~5% short-term Treasury yields produces billions in risk-free income with no effort. This wasn\'t true two years ago when rates were near zero.',
        },
        { type: 'text', value: ', and ' },
        {
          type: 'chip',
          value: 'it gives Berkshire firepower to buy during any crash',
          signal: true,
          feedback:
            'Yes — a strength. In 2008, Berkshire deployed billions into Goldman and GE on favorable terms because it had cash when everyone else was desperate. A huge cash pile is optionality.',
        },
        { type: 'text', value: '. But on the other hand, ' },
        {
          type: 'chip',
          value: 'Buffett building a record cash pile suggests he can\'t find investments that meet his criteria',
          signal: true,
          feedback:
            'Yes — a warning. Buffett prefers owning businesses over cash. When the cash pile reaches all-time highs, it signals that, in his view, nothing is priced attractively — which has historically been a late-cycle warning.',
        },
        { type: 'text', value: '. He\'s even been ' },
        {
          type: 'chip',
          value: 'reducing the massive Apple position',
          signal: true,
          feedback:
            'Yes — a warning. Selling down Berkshire\'s biggest and most successful stock position is a serious signal. It means either valuations look stretched, or Buffett sees risks worth de-risking for.',
        },
        { type: 'text', value: '. Still, Berkshire ' },
        {
          type: 'chip',
          value: 'has the most loyal shareholder base in finance',
          signal: false,
          feedback:
            'True but not directly about the cash pile. Loyal shareholders matter for volatility, not for whether the cash signals caution.',
        },
        { type: 'text', value: ' and ' },
        {
          type: 'chip',
          value: 'remains profitable every single quarter',
          signal: false,
          feedback:
            'True, but this is a statement about stability — not about what the cash pile itself is telling you.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 3,
      reveal:
        'The cash pile is a two-sided message. It\'s a strength (optionality, safe income) and a warning (the world\'s most patient buyer doesn\'t see anything worth buying). Historically, Buffett has built cash before market dislocations — investors who pay attention to his behavior, not just his words, often get useful signal.',
      takeaway:
        'Watch what Buffett does, not just what he says. A record cash pile and selling the biggest stock position together tell you more than any interview would.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Estimate: Valuation anchor
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'Valuing the Pieces',
      topicIcon: TrendingUp,
      context:
        'Rough back-of-envelope for Berkshire:\n\n• Operating businesses (railway, utilities, GEICO, etc.): ~$45B/year in earnings. At ~15x earnings, that\'s worth ~$675B.\n• Stock portfolio: ~$300B market value.\n• Cash and treasuries: ~$325B.\n\nAdd up the pieces — this is the crude "sum-of-parts" view of what Berkshire is worth.',
      question: 'What is the rough sum-of-parts value, in billions?',
      answer: 1300,
      tolerance: 100,
      unit: '$B',
      hint: '$675B + $300B + $325B',
      reveal:
        'About $1.3T — surprisingly close to the actual market cap. That\'s not a coincidence: Berkshire rarely trades at huge premiums or discounts to its parts because it\'s followed too closely. The question isn\'t whether Berkshire is mispriced today — it\'s whether the parts grow over time, especially the operating businesses that now do most of the work.',
      takeaway:
        'Value Berkshire by summing its pieces: operations + stocks + cash. If the market price is well below the sum, it\'s a bargain. If it\'s well above, the market is pricing in future brilliance.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Decide: The succession question
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'After Buffett',
      topicIcon: AlertTriangle,
      context:
        'Warren Buffett is in his 90s. Charlie Munger, his longtime partner, passed away in 2023. Greg Abel — who has run Berkshire\'s non-insurance operations for years — has been named his successor.\n\nEvery Berkshire investor now has to answer one question.',
      question: 'What is the most important thing to evaluate about post-Buffett Berkshire?',
      options: [
        'Whether Abel is as charismatic as Buffett in interviews',
        'Whether the structural advantages (float, conglomerate model, disciplined culture) survive without Buffett personally allocating each dollar',
        'Whether Berkshire will finally start paying a dividend',
        'Whether Abel will sell off the operating businesses',
      ],
      correctIndex: 1,
      punchline:
        "Buffett built a machine, not just a portfolio. The real succession question is whether the system — float, culture, decentralization, long holding periods, discipline about price — survives without the person. Most of Berkshire\'s $1T value isn\'t Buffett\'s stock picks; it\'s the businesses and the model. If the model survives, Berkshire keeps compounding. If culture drifts, the advantage evaporates over years, not weeks.",
      wrongNudges: [
        'Charisma doesn\'t compound capital. Some of the best capital allocators in history have been quiet operators investors barely recognize.',
        '',
        'A dividend is a possibility, but by itself it doesn\'t tell you whether Berkshire can still reinvest productively. The dividend question is downstream of the real one: can Abel allocate capital as well as Buffett did?',
        'Selling operating businesses would destroy the whole model — Berkshire\'s value IS the operating businesses plus the capital allocation engine. Abel is unlikely to break the thing he was chosen to protect.',
      ],
      takeaway:
        "The Buffett premium isn\'t really about Buffett — it\'s about the system he built. The investment question is whether that system runs without him.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 8. Thinking: Would you invest today?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'thinking',
      prompt:
        "You\'re considering putting $10,000 into Berkshire at roughly its current valuation. The business has a ~$325B cash pile, a reduced Apple position, an unproven successor taking over the capital allocation role Buffett held for 60 years, and a sum-of-parts value in line with the market cap.\n\nIn a few sentences, make your case: would you buy, pass, or wait? What specifically would change your answer?",
      placeholder:
        "Example: 'I\'d buy because the operating businesses alone cover most of the market cap, and the cash pile is optionality for the next downturn. I\'d pass if...'",
      modelAnswer:
        "The case to buy: Berkshire is roughly fairly valued on a sum-of-parts basis, but the cash pile represents future optionality that won\'t show up in earnings today. The operating businesses (BNSF, BHE, GEICO) are durable, recession-resistant compounders. Even if Abel is only 80% as good as Buffett at allocation, 80% of Buffett is still world-class. The downside is limited by the cash and operating earnings.\n\nThe case to pass or wait: Succession risk is real — cultures and disciplines can drift. Buffett building record cash and selling Apple signals he sees fewer opportunities, which usually precedes volatility. Buying after a 15-20% market correction would give you the same businesses plus Buffett\'s cash deployed at bargain prices.\n\nEither answer can be right. The wrong answer is buying without a view on these two specific questions: will Abel preserve the model, and is the current market environment one where Berkshire\'s edge (disciplined patience) will matter?",
      strongReasoningIncludes: [
        'Weighs the operating businesses + cash against the succession risk',
        'References what the $325B cash pile and Apple trimming actually signal about Buffett\'s view',
        'Identifies a concrete trigger (price level, macro event, leadership action) that would change the answer',
      ],
    },
  ],
  takeaways: [
    'Berkshire is three businesses in one: wholly-owned operating companies, a large stock portfolio, and an insurance engine that generates float. The magic is all the cash flowing to one allocator.',
    'Insurance float is the hidden lever — ~$170B of effectively free capital Berkshire invests. It\'s the closest thing to legal free money in finance when underwriting is disciplined.',
    'No dividend is a bet that management can compound each retained dollar into more than $1 of value. The moment that stops being true, that strategy has to change.',
    'The succession question isn\'t about Buffett\'s personality — it\'s whether the system (float + culture + discipline + decentralization) runs without him. That\'s what you\'re really buying or selling.',
  ],
  completionMessages: {
    perfect:
      "You can read Berkshire now — not as one company but as a machine with parts you can value independently. That\'s exactly how Buffett himself has always described it.",
    great:
      "Strong grasp of the Berkshire model. You see past the mythology to the actual structure — float, operations, stocks, and the allocation decision that ties them together.",
    good:
      "Good start. The key insight is that Berkshire is a system, not a stock pick. Keep returning to how the pieces feed each other — that\'s where the durability comes from.",
    low:
      "Worth revisiting. Berkshire is unusual enough that the standard investor lens doesn\'t work — once you understand float and the conglomerate structure, the whole thing clicks into place.",
  },
};
