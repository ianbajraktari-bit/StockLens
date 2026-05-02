import {
  Repeat,
  ShieldCheck,
  Wallet,
  Search,
  Crosshair,
  HelpCircle,
} from 'lucide-react';
import type { Lesson } from './types';

/**
 * Scenario lesson — through-line: your sister wants the most "predictable"
 * stock to hold. Three real candidates: Adobe, Netflix, Microsoft. Each step
 * builds on the last: calibrate Adobe's pivot → predictability test → the
 * cancel-anytime paradox → 3-years-later ambiguous re-pick → red flags in a
 * Peloton bull pitch → synthesis.
 */
export const foundationsRecurringLesson: Lesson = {
  id: 'foundations-recurring',
  emoji: '🔄',
  title: 'Money That Comes Back',
  subtitle:
    'Your sister wants the most predictable stock she can find. Help her pick.',
  description:
    'A dollar of revenue isn\'t a dollar of revenue. The market pays radically different prices for the same $1 depending on whether it\'s likely to come back next year. This lesson hands you one decision and walks it through three real subscription businesses (Adobe, Netflix, Microsoft), and asks you to actually pick.',
  estimatedMinutes: 4,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['recurring_revenue'],
  keyFacts: [],
  topics: [
    { label: 'Why predictability commands a premium', icon: Repeat },
    { label: 'Switching costs as the durability test', icon: ShieldCheck },
    { label: 'When a "subscription" is actually a treadmill', icon: Wallet },
    { label: 'Holding a thesis when retention shifts', icon: Crosshair },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────────
    // STEP 1 — Calibrate. Adobe's 2013 subscription pivot anchors the user.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'Setting the Stage',
      topicIcon: Repeat,
      context:
        'Your sister has $50,000 and one rule: it has to go into the most "predictable" business she can find. The candidates: Adobe (ADBE), Netflix (NFLX), Microsoft (MSFT). All three earn most of their money from subscriptions.\n\nBefore you compare them, calibrate one number. In 2013, Adobe stopped selling Photoshop as a $2,500 box you owned forever and switched it to a $50/month subscription. Wall Street panicked — the headline revenue dropped because subscriptions trickle in instead of landing all at once. Then something happened to the stock.',
      question: 'Roughly how much did Adobe stock return in the 10 years AFTER the 2013 subscription pivot?',
      answer: 900,
      tolerance: 300,
      unit: '%',
      hint: 'A boring software company became one of the best-performing stocks of the 2010s. Investors realized something the headline missed.',
      reveal:
        'About 900%. Adobe went from ~$45 in 2013 to ~$450 by 2023. Why? Because subscription revenue is worth more than one-time revenue — even when the subscription dollars are smaller. The market figured out that a $50/month subscription that lasts 5 years ($3,000) is worth FAR more than a $2,500 one-time sale, because the future is now visible.',
      takeaway:
        'Investors don\'t just pay for revenue — they pay for PREDICTABLE revenue. Adobe\'s 2013 pivot is the textbook case: same product, smaller individual checks, much higher stock price.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 2 — Compare (decisive). The predictability test side-by-side.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'compare',
      topic: 'The Predictability Test',
      topicIcon: ShieldCheck,
      context:
        'Now look at all three side-by-side. Imagine each loses 5% of its revenue to a tough year — recession, competition, whatever. The question is what happens NEXT year. Does the lost revenue come back automatically because customers are locked in, or does it have to be re-earned from scratch?\n\nAll three are "subscription" businesses. They are not equally sticky.',
      candidates: [
        {
          name: 'Microsoft',
          ticker: 'MSFT',
          tag: 'Office 365 + Azure',
          metrics: [
            { label: 'Annual churn', value: '<5%', note: 'enterprise contracts' },
            { label: 'Switching cost', value: '12-18 months', note: 'rebuild workflows' },
            { label: 'Avg customer life', value: '20+ years' },
            { label: 'Price increases', value: 'Accepted', note: '+$3/seat passes through' },
          ],
        },
        {
          name: 'Adobe',
          ticker: 'ADBE',
          tag: 'Creative Cloud',
          metrics: [
            { label: 'Annual churn', value: '~10%', note: 'mostly individuals' },
            { label: 'Switching cost', value: 'Months', note: 'learn new tools, redo files' },
            { label: 'Avg customer life', value: '~10 years' },
            { label: 'Price increases', value: 'Mostly accepted', note: 'some user pushback' },
          ],
        },
        {
          name: 'Netflix',
          ticker: 'NFLX',
          tag: 'Consumer streaming',
          metrics: [
            { label: 'Annual churn', value: '~25%', note: 'one-click cancel' },
            { label: 'Switching cost', value: '0 minutes', note: 'open Disney+ instead' },
            { label: 'Avg customer life', value: '~4 years' },
            { label: 'Price increases', value: 'Resisted', note: 'subs leave on hikes' },
          ],
        },
      ],
      question: 'Whose revenue is most likely to STILL be there a year from now?',
      options: [
        'Microsoft — switching off Office and Azure means rebuilding how the company works',
        'Adobe — Creative Cloud is sticky once you\'ve learned the keyboard shortcuts',
        'Netflix — 280M subscribers is the biggest base, so the most revenue carries forward',
      ],
      bestIndex: 0,
      analyses: [
        'Right read. Microsoft\'s revenue isn\'t sticky because customers love it — it\'s sticky because LEAVING is brutal. Office files, Teams meetings, Azure infrastructure, Active Directory identities. A 12-18 month migration project is a project a CFO almost never approves. That\'s why Microsoft can raise prices and barely lose anyone.',
        'Half right. Adobe IS stickier than Netflix — designers don\'t casually switch tools mid-project. But Adobe\'s lock-in is months, not years, and a non-trivial slice of its base is individual creators who churn when budgets tighten. Sticky-ish, not bulletproof.',
        'Subscriber count is a trap. Netflix has the most subscribers but the loosest lock-in — you can cancel during the credits of the show you\'re watching. ~25% annual churn means Netflix has to RE-EARN about a quarter of its base every year. Big number, fragile number.',
      ],
      punchline:
        'Predictability comes from switching costs, not subscription buttons. Microsoft\'s revenue carries forward because leaving is months of pain. Netflix\'s revenue is a constant re-earning of attention.',
      takeaway:
        'When you see "recurring revenue," ask one question: how painful is it to leave? Three months of pain → predictable. Three minutes → not really.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 3 — Decide. The Netflix paradox. So Microsoft is obviously best...
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Cancel-Anytime Paradox',
      topicIcon: Wallet,
      context:
        'So Microsoft is the obvious winner, right? Lowest churn, biggest switching cost, longest customer life.\n\nExcept Netflix at ~25% churn returned ~6,000% over the last 15 years — better than Microsoft and most "high quality" enterprise stocks. They\'ve raised prices repeatedly, customers leave for a month and come back when the next show drops, and the revenue line keeps going up.\n\nNetflix didn\'t accidentally end up with cancel-anytime billing. They picked it on purpose. What does the high-churn headline miss?',
      question: 'Why is Netflix\'s "easy to cancel" model not the weakness it looks like?',
      options: [
        'It\'s not — Microsoft really is just better, and Netflix\'s returns are luck',
        'Netflix subscribers don\'t really stay — they cycle in and out around hit shows. Each individual is high-churn, but the overall base keeps rising because new content pulls cancellers back. The library is the moat, not the contract.',
        'Netflix will eventually move to annual contracts once it hits scale',
        'Churn doesn\'t matter once the subscriber base is large enough',
      ],
      correctIndex: 1,
      punchline:
        'Netflix runs a content flywheel, not a contract flywheel. Cancel-anytime keeps the funnel low-friction; the $17B/year content budget keeps pulling people back in. The "moat" isn\'t the subscription — it\'s the library of shows that doesn\'t exist anywhere else.',
      wrongNudges: [
        'Netflix has compounded for 15+ years through every major subscriber drop and "Netflix is dying" cycle. That\'s not luck. The cancel-anytime billing is a deliberate feature: low friction in means high friction in absolute subscribers, even if individuals churn.',
        '',
        'Netflix has had years of leverage and kept the cancel-anytime model. Reed Hastings was explicit: lock-in destroys customer trust and inflates the headline number while hiding actual product quality. They\'d rather lose subs to a bad month than fake retention with annual prepay.',
        'Sub count without retention can mask a leaky bucket. Quibi had hundreds of millions in subs and disappeared in 6 months. The question is what KIND of dollar — Netflix\'s dollars are renewable because the next hit show is coming.',
      ],
      takeaway:
        'High churn can be a strategy if the engine that brings customers back is stronger than the door that lets them leave. Netflix\'s churn is a feature; Peloton\'s is a death spiral. Same number, completely different stories.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 4 — Compare (OPEN call). 3 years later, real ambiguity.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'compare',
      topic: 'Three Years Later',
      topicIcon: HelpCircle,
      context:
        'Skip ahead three years. Your sister held one of the three. The world shifted. Same companies, fresh data — the picture isn\'t obvious anymore.\n\nThis one is genuinely hard. Smart investors disagree. Pick the one you\'d hold for the NEXT five years and we\'ll walk through the trade-offs.',
      candidates: [
        {
          name: 'Microsoft',
          ticker: 'MSFT',
          tag: 'AI bundling',
          metrics: [
            { label: 'Annual churn', value: '<5%' },
            { label: 'Copilot attach', value: '~40%', note: 'AI bundled into Office' },
            { label: 'Revenue growth', value: '+14%' },
            { label: 'Valuation', value: '~32x earnings', note: 'priced for perfection' },
          ],
        },
        {
          name: 'Adobe',
          ticker: 'ADBE',
          tag: 'AI threat',
          metrics: [
            { label: 'Annual churn', value: '~12%', note: 'up from ~10%' },
            { label: 'Revenue growth', value: '+9%', note: 'down from +13%' },
            { label: 'AI competition', value: 'Heavy', note: 'Midjourney, Canva AI' },
            { label: 'Valuation', value: '~22x earnings', note: 'compressed on fears' },
          ],
        },
        {
          name: 'Netflix',
          ticker: 'NFLX',
          tag: 'Ad tier hitting',
          metrics: [
            { label: 'Annual churn', value: '~22%', note: 'down slightly' },
            { label: 'Subscribers', value: '290M', note: 'still growing' },
            { label: 'Ad-tier ARPU', value: '+30% YoY', note: 'new revenue stream' },
            { label: 'Valuation', value: '~38x earnings', note: 'priced like a winner' },
          ],
        },
      ],
      question: 'Which would YOU hold for the next 5 years?',
      options: [
        'Microsoft — pay up for the AI bundle and the lowest churn on the board',
        'Adobe — bet the AI fear is overdone and the switching cost holds',
        'Netflix — bet the ad tier and content flywheel keep compounding',
      ],
      // No bestIndex — this is open. Each path gets its own targeted analysis.
      analyses: [
        'Defensible — and the consensus pick. Sub-5% churn is still the industry benchmark, Copilot is bundling AI revenue at 40% attach without losing customers, and the enterprise lock-in barely flinched through the 2023 cost-cutting cycle. The risk is the price: at ~32x earnings, the market already assumes Copilot delivers. If AI revenue underperforms or the ROI numbers come out lukewarm, the stock can fall 20%+ even if the business is fine. You\'re paying for certainty — make sure you actually have it.',
        'Contrarian, but not crazy. The headline (churn drifting from 10% to 12%, growth slowing) is real, and AI image tools are a genuine threat for the long tail of casual creators. But Adobe is still the standard for professional design, switching costs hold for the agency and enterprise base, and at 22x earnings the market is already pricing in disappointment. Bull case: this is a fear-driven re-rating in a still-great business. Bear case: AI is the start of "Adobe is the next Kodak." Both are defensible.',
        'The bet on continued reinvention. The ad tier is real — 30% ARPU growth on a new product is not luck, and the cancel-anytime model just absorbed a price hike with subs still growing. The bear case is brutal though: at 38x earnings, Netflix is priced like the winner already. Disney+ + HBO + Amazon + YouTube are all spending tens of billions on content. If the content flywheel slows, the price cut can be sharp. You\'re betting management\'s next decade is as good as the last.',
      ],
      punchline:
        'Three subscription businesses, three completely different bets. None is wrong — they just price different risks. The job isn\'t finding the "right" stock. It\'s holding a thesis you can defend when retention or growth shifts under you.',
      takeaway:
        'When a question has no clean answer, don\'t reach for one. Pick the trade-off you\'re willing to live with — and write down what would prove you wrong.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 5 — Tap. Peloton bull pitch with red flags. Real-company stakes.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Reading the Pitch',
      topicIcon: Search,
      intro:
        'Pretend it\'s 2021. A friend forwards you a Peloton bull-case pitch. The framing leans hard on "subscription business." Tap the lines that should make you MORE worried, not less. (Three of them, hidden among real strengths.)',
      passage: [
        {
          type: 'text',
          value: 'Peloton is the next great recurring-revenue compounder. ',
        },
        {
          type: 'chip',
          value: '2.3M Connected Fitness subscribers paying $39/month',
          signal: false,
          feedback:
            'Real strength — at the time. A 2M+ paying base is genuinely meaningful, and the $39/month price is real cash. The problem isn\'t the size of the base. It\'s what\'s under it.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: '$2,500 hardware purchase locks customers in',
          signal: true,
          feedback:
            'They\'re framing the hardware cost as a moat. It isn\'t. Once a customer owns the bike, the hardware is sunk cost — it doesn\'t make them stay, it just makes leaving feel wasteful. Real switching costs make you LOSE something you still use; sunk costs are just regret. Peloton confused one for the other.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Live and on-demand classes from elite instructors',
          signal: false,
          feedback:
            'Real strength. The content library and instructor brand are genuine product differentiation — Peloton out-executed the entire fitness industry on this for years. The product worked. That\'s not the question.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Net subscriber growth +130% year-over-year',
          signal: true,
          feedback:
            'Headline growth during a pandemic is the easiest growth in the world. The right question isn\'t "how fast did they add subs in 2020" — it\'s "what happens when gyms reopen?" Pulling forward demand from 5 years of normal sales does not equal recurring revenue.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Bull case: revenue grows 5x as the bike count compounds and subscription revenue dominates',
          signal: true,
          feedback:
            'The 5x assumes the same churn and the same household demand. Both broke. Peloton\'s monthly churn nearly tripled post-2021, and the addressable market for $2,500 home bikes was much smaller than the pandemic-distorted curve suggested. "Recurring revenue dominates" only works if the recurring part actually recurs.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Trades at a premium to legacy fitness because the model is structurally better',
          signal: false,
          feedback:
            'Defensible at the time — the unit economics on paper looked far better than gym chains. The error wasn\'t the framework. The error was assuming the inputs (churn, household demand, pricing power) would hold when the world reopened.',
        },
      ],
      requiredSignals: 3,
      reveal:
        'Three red flags spun as strengths: the $2,500 hardware "lock-in" (sunk cost, not switching cost), the +130% pandemic growth (pulled-forward demand, not durable demand), and the "5x revenue" extrapolation (assumes churn stays low). Real strengths existed too — the subscriber base, the content library — but the pitch papered over the things that broke. Peloton stock fell ~95% from its 2021 peak.',
      takeaway:
        'When a pitch leans on "recurring revenue," your job is to pressure-test the recurring part. Sunk costs aren\'t switching costs. Pandemic growth isn\'t structural growth. And projections that extrapolate the best year forever are how investors get hurt.',
    },

    // ─────────────────────────────────────────────────────────────────────
    // STEP 6 — Synthesis. Free response.
    // ─────────────────────────────────────────────────────────────────────
    {
      kind: 'thinking',
      prompt:
        'Your sister reads this lesson, looks at all three companies, and says: "I\'m just buying Microsoft. Lowest churn. Done." In 2-3 sentences, give her your strongest pushback — using what you saw across these steps.',
      placeholder:
        'Think about: what does <5% churn protect against AND not protect against? What did Netflix\'s 25% churn reveal? What was the role of the price tag in step 4?',
      modelAnswer:
        'A <5% churn rate is real protection — Microsoft survives competitive pressure that would crush Netflix or Adobe — but low churn doesn\'t protect against the price you pay. At 32x earnings, Microsoft is priced like Copilot is going to deliver; if AI ROI disappoints, you can lose 20%+ on a great business. And the "low churn = better" rule misled you on Netflix — its 25% headline hid a content flywheel that pulled customers back faster than the door let them out. The right question isn\'t "which company has the lowest churn?" — it\'s "what risk am I underwriting at this price, and what would prove me wrong?"',
      strongReasoningIncludes: [
        'Acknowledges that low churn is real protection (don\'t pretend Microsoft\'s <5% churn is meaningless)',
        'Identifies that price/valuation matters separately from business quality',
        'References at least one nuance from earlier in the lesson — the Netflix flywheel paradox, the Peloton sunk-cost trap, or the Step 4 trade-off',
      ],
    },
  ],
  takeaways: [
    'Investors don\'t pay for revenue — they pay for predictable revenue. Adobe\'s 2013 pivot to subscriptions: same product, same customers, ~10x stock.',
    'Predictability comes from switching costs, not the word "subscription." Microsoft\'s lock-in is months of pain. Netflix\'s is one click.',
    'High churn can be a strategy. Netflix loses customers to the door but pulls them back through the library. The question is which engine — the door or the content — is stronger.',
    'Sunk costs aren\'t switching costs. Peloton\'s $2,500 bike made leaving feel wasteful; it didn\'t make staying valuable. The distinction is the entire investment thesis.',
  ],
  completionMessages: {
    perfect:
      'Sharp work. You moved past "subscription = good" into the actual decision: how sticky is the lock-in, what does the headline hide, and what trade-off are you underwriting at this price.',
    great:
      'Strong run. You can see recurring revenue as a multi-layered signal — switching cost, retention quality, and warning — instead of a single number.',
    good: 'Solid grounding. Hold onto the through-line: same three subscription businesses, three different views depending on which lens you applied.',
    low: 'Worth re-running. The point isn\'t the three companies — it\'s the habit of asking "what makes this revenue come back, and what could break that engine?"',
  },
};
