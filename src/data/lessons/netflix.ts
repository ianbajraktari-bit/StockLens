import { Target, TrendingUp, ShieldAlert, BrainCircuit, Zap, Calculator, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const netflixLesson: Lesson = {
  id: 'netflix',
  emoji: '🎬',
  title: 'Netflix Lesson',
  subtitle: 'From "spending too much" to the most efficient content machine on Earth',
  description:
    "In 2022, Netflix lost subscribers for the first time and the stock crashed 75%. Two years later, it\'s at all-time highs with record margins. The turnaround reveals how a subscription business works: why subscriber growth matters less than you think, why content spending is an investment not a cost, and how the ad tier changes the entire math.",
  estimatedMinutes: 4,
  dataAsOf: 'Q1 2025',
  tier: 'company',
  skills: ['recurring_revenue', 'margins', 'valuation', 'business_drivers'],
  keyFacts: [
    { label: 'Subscribers', value: '~300M', detail: 'The largest streaming platform by far — 2x Disney+' },
    { label: 'Annual Revenue', value: '~$39B', detail: 'Growing ~15% from price hikes, ad tier, and password crackdown' },
    { label: 'Operating Margin', value: '~28%', detail: 'Up from 18% in 2022 — approaching tech-company margins' },
    { label: 'Content Spend', value: '~$17B/year', detail: 'More than any studio — but revenue per dollar spent is improving' },
  ],
  topics: [
    { label: 'How subscription economics actually work at scale', icon: Target },
    { label: 'Why the 2022 crash happened — and what the recovery teaches', icon: ShieldAlert },
    { label: 'Content spending: the moat that competitors can\'t afford', icon: TrendingUp },
    { label: 'The ad tier: a new profit engine changing the math', icon: BrainCircuit },
  ],
  storyArc: ['The Subscription Machine', 'The Crash & Recovery', 'The Content Moat', 'The Decision'],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Drill: subscription economics instincts
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Subscription Economics',
      topicIcon: Zap,
      intro: 'Quick instincts about how Netflix\'s subscription model actually generates money.',
      prompts: [
        {
          setup: 'Netflix adds 1M subscribers at $15/month. What matters more for revenue growth?',
          left: { label: 'Adding more subscribers', sublabel: 'grow the base' },
          right: { label: 'Raising prices on 300M existing subscribers', sublabel: 'monetize the base' },
          correct: 'right',
          flash: 'A $1 price hike on 300M subscribers = $3.6B/year in new revenue. Adding 1M subscribers at $15/month = $180M/year. At scale, price increases dwarf new subscriber additions. This is the power of a massive installed base.',
        },
        {
          setup: 'Netflix\'s biggest cost is:',
          left: { label: 'Content (~$17B/year)', sublabel: 'shows, movies, originals' },
          right: { label: 'Technology & servers', sublabel: 'streaming infrastructure' },
          correct: 'left',
          flash: 'Content is ~45% of revenue. Technology costs are relatively small — streaming infrastructure is commoditized. The real investment is in what people watch, not how they watch it.',
        },
        {
          setup: 'When Netflix spends $200M on a hit show watched by 100M households:',
          left: { label: 'Cost per viewer: $2', sublabel: 'incredibly efficient' },
          right: { label: 'Cost per viewer: $20', sublabel: 'expensive' },
          correct: 'left',
          flash: '$200M ÷ 100M households = $2 per viewer. A movie theater charges $15/ticket for one viewing. Netflix delivers for $2 across unlimited viewings. Scale turns expensive content into cheap entertainment per person.',
        },
        {
          setup: 'Netflix\'s password-sharing crackdown in 2023:',
          left: { label: 'Lost subscribers', sublabel: 'people cancelled instead of paying' },
          right: { label: 'Added tens of millions of subscribers', sublabel: 'freeloaders converted to paying' },
          correct: 'right',
          flash: 'The crackdown added ~30M+ paid subscribers in 2023-2024. Most password sharers chose to pay rather than cancel — proving the product is essential, not optional. This was pure margin expansion: same content, more revenue.',
        },
        {
          setup: 'Netflix\'s churn rate (subscribers who cancel per month) is:',
          left: { label: '~2%', sublabel: 'lowest in streaming' },
          right: { label: '~8%', sublabel: 'high turnover' },
          correct: 'left',
          flash: '~2% monthly churn — the lowest among major streamers. Disney+ and others see 5-8%. Low churn means subscribers stay for years, making each acquisition more valuable. This is the retention moat.',
        },
      ],
      takeaway: 'At 300M subscribers, Netflix\'s growth comes from price hikes and converting freeloaders more than adding new subscribers. Low churn (~2%) and massive scale make content spending incredibly efficient per viewer.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: the 2022 crash math
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Crash & Recovery',
      topicIcon: Calculator,
      context:
        'In early 2022, Netflix had ~220M subscribers and traded at ~$600/share (50x earnings).\n\nQ1 2022: Netflix reported losing 200,000 subscribers — the first decline ever. The stock crashed to ~$170.\n\nThe loss: 200,000 out of 220,000,000 subscribers. That\'s 200K ÷ 220M of the base.',
      question: 'What percentage of subscribers did Netflix actually lose?',
      answer: 0.09,
      tolerance: 0.02,
      unit: '%',
      hint: '200,000 ÷ 220,000,000 × 100',
      reveal:
        '200,000 ÷ 220,000,000 = 0.09% — less than one-tenth of one percent. The stock dropped 75% because 0.09% of subscribers left. This wasn\'t about the actual loss — it was about narrative collapse. At 50x earnings, the stock was priced for perpetual subscriber growth. The tiniest crack in that story triggered a massive repricing. This is the expectations lesson in action: at high multiples, even tiny misses cause crashes.',
      takeaway: 'Netflix lost 0.09% of subscribers and 75% of its stock price. The lesson: at 50x earnings, the stock wasn\'t priced for what Netflix was — it was priced for what investors believed it would become. Any deviation from perfection was catastrophic.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Decide: what actually drove the recovery
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Recovery Playbook',
      topicIcon: Target,
      context:
        'After the crash, Netflix did three things:\n\n1. Cracked down on password sharing → added ~30M+ paid subscribers\n2. Launched an ad-supported tier at $7/month → new revenue per user from ads\n3. Raised prices on premium tiers → more revenue per existing subscriber\n\nBy 2025: 300M subscribers, $39B revenue, 28% operating margins, all-time high stock price.',
      question: 'What\'s the most important insight from Netflix\'s recovery?',
      options: [
        'Netflix recovered because it added more subscribers — growth is all that matters',
        'The recovery was driven by extracting more revenue from the existing base (price hikes, password crackdown, ad tier) — not by finding new markets. Netflix shifted from a growth story to a monetization story',
        'The ad tier saved Netflix — without ads, the company would have failed',
        'Netflix just got lucky — the content happened to be good that year',
      ],
      correctIndex: 1,
      punchline:
        'Netflix\'s recovery wasn\'t about growth — it was about monetization. Price hikes, password crackdowns, and the ad tier all extract more revenue from an existing 300M-subscriber base. This is the transition from growth company to profit machine — and it\'s exactly what the stock now reflects.',
      wrongNudges: [
        'Subscriber additions helped, but the real revenue driver was monetizing existing users. A $1 price hike on 300M subs generates 20x more revenue than adding 1M new subscribers. The math has shifted.',
        '',
        'The ad tier is important but it\'s one of three levers. Without the password crackdown (~30M+ new paid users) and price increases, the ad tier alone wouldn\'t have driven the recovery. All three together changed the story.',
        'Netflix spent $17B on content — it wasn\'t luck. And the recovery was driven by business model changes (pricing, ads, password policy), not by any single show. Structural changes matter more than content hits.',
      ],
      takeaway: 'Mature subscription businesses grow by monetizing the base, not just adding to it. Netflix\'s shift from "subscriber growth story" to "revenue per user story" is the playbook every subscription company eventually follows.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: the content spending debate
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'The Content Moat',
      topicIcon: Flag,
      intro: 'A bear argues Netflix spends too much on content. Tap the claims that are actually wrong or misleading.',
      passage: [
        { type: 'text', value: '"Netflix is doomed. ' },
        {
          type: 'chip',
          value: 'They spend $17 billion a year on content — that\'s unsustainable',
          signal: true,
          feedback: '$17B sounds massive, but context matters: it\'s ~45% of $39B in revenue, and Netflix generates $7B+ in free cash flow AFTER content spending. A company that spends $17B and still generates $7B in cash is not spending unsustainably — it\'s investing profitably.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Disney, Amazon, and Apple are all spending billions on streaming',
          signal: false,
          feedback: 'This is true — competition is real. But most competitors lose money on streaming. Disney+ is barely profitable. Apple TV+ is a loss leader. The question isn\'t whether competitors spend — it\'s whether they can sustain it.',
        },
        { type: 'text', value: '. Plus, ' },
        {
          type: 'chip',
          value: 'most Netflix originals are forgettable — they don\'t have Marvel or Star Wars',
          signal: true,
          feedback: 'Netflix doesn\'t need franchise IP. Their strategy is volume + data: produce hundreds of titles, use algorithms to match viewers to content, and win on breadth. Netflix\'s 2% churn (lowest in streaming) proves the strategy works regardless of individual show quality.',
        },
        { type: 'text', value: '. And ' },
        {
          type: 'chip',
          value: 'streaming is a commodity — people will switch to whoever has the best show that month',
          signal: true,
          feedback: 'Data contradicts this. Netflix\'s 2% churn vs. 5-8% for competitors shows people DON\'T switch freely. The habit of opening Netflix, the personalized algorithm, and the depth of library create real switching costs. Streaming is less commoditized than bears think.',
        },
        { type: 'text', value: '. The company ' },
        {
          type: 'chip',
          value: 'faces saturation — there are only so many people who will pay for streaming',
          signal: false,
          feedback: 'Saturation is a legitimate concern at 300M subscribers. Growth in mature markets will slow. This is why the shift to monetization (price hikes, ads) matters more than new subscriber additions going forward.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 2,
      reveal:
        'The "Netflix spends too much" bear case misses key context: $17B in content spending generates $39B in revenue and $7B+ in free cash flow. Content isn\'t a cost — it\'s an investment with measurable returns. The 2% churn rate proves subscribers stay. The real risk isn\'t spending — it\'s saturation.',
      takeaway: 'Content spending is Netflix\'s moat, not its weakness. At 300M subscribers, $17B in content costs $57 per subscriber per year — less than $5/month. Scale turns massive fixed costs into tiny per-user costs.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Estimate: ad tier economics
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Ad Tier Math',
      topicIcon: Calculator,
      context:
        'Netflix\'s ad tier charges $7/month in subscription fees. But it also earns ad revenue per user.\n\nEstimated ad revenue per ad-tier user: ~$8-10/month (based on viewing hours × ad load × CPM rates).\n\nTotal revenue per ad-tier user: $7 subscription + ~$9 ads = ~$16/month.\nPremium tier (no ads): $23/month.\n\nThe ad tier generates ~$16/month. The premium tier generates $23/month.',
      question: 'What percentage of premium-tier revenue does the ad tier capture?',
      answer: 70,
      tolerance: 5,
      unit: '%',
      hint: '$16 ÷ $23 × 100',
      reveal:
        '$16 ÷ $23 = 70%. The ad tier captures 70% of premium revenue at a much lower price point — making streaming accessible to price-sensitive users who would never pay $23. And here\'s the key: as ad rates improve and Netflix gets better at targeting, the ad tier could eventually generate MORE per user than premium. This is why the ad tier isn\'t just a discount — it\'s potentially a better business model.',
      takeaway: 'Netflix\'s ad tier earns ~70% of premium revenue at a lower price. It expands the addressable market while potentially becoming more profitable per user than ad-free tiers as targeting improves.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Decide: the investment judgment
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Judgment Call',
      topicIcon: BrainCircuit,
      context:
        'Here\'s the full picture:\n\n• 300M subscribers, ~2% churn (lowest in streaming)\n• Revenue: $39B, growing ~15% from price hikes + ad tier\n• Operating margin: 28%, expanding toward 30%+\n• Content spend: $17B/year but generates $7B+ in free cash flow after\n• Ad tier captures 70% of premium revenue, growing fast\n• P/E: ~45x — premium to market, pricing in continued margin expansion\n• Risk: subscriber saturation in developed markets',
      question: 'What\'s the most thoughtful investor stance on Netflix?',
      options: [
        'Sell — 45x P/E is too expensive for a company growing 15%',
        'Netflix at 45x is pricing in the transition from growth company to high-margin content platform. The bull case: margins expand to 35%+, ad tier becomes a profit engine, and price hikes continue. The bear case: 45x leaves no room for execution stumbles, and subscriber saturation limits growth',
        'Buy aggressively — Netflix is the clear streaming winner and will dominate forever',
        'Avoid — streaming is too competitive and content spending will never stop',
      ],
      correctIndex: 1,
      punchline:
        'Netflix at 45x is a bet on margin expansion, not subscriber growth. If operating margins reach 35%+ (from 28% today) and the ad tier scales, earnings could nearly double on flat subscriber growth. If margins plateau or competition intensifies, 45x is too expensive for a 15%-growth company. The investment case is about profitability trajectory, not content or subscribers.',
      wrongNudges: [
        '45x is high for 15% revenue growth — but if margins expand from 28% to 35%, earnings grow 25%+ even with modest revenue growth. P/E ratios on companies with expanding margins can be misleading because earnings growth exceeds revenue growth.',
        '',
        '"Dominate forever" isn\'t an investment thesis. Netflix has real advantages, but at 45x, the stock needs specific things to go right: margin expansion, ad tier scaling, and continued pricing power. "They\'ll win" doesn\'t address whether the price is right.',
        'Netflix generates $7B+ in free cash flow after $17B in content spending. It\'s not caught in a spending trap — it\'s the only profitable streamer at scale. The competition is hurting everyone else more than Netflix.',
      ],
      takeaway: 'Netflix\'s investment case is about margin expansion, not subscriber growth. At 45x, the stock needs margins to reach 35%+ and the ad tier to scale. It\'s a bet on Netflix becoming a high-margin media monopoly — priced for things to go right.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Thinking: synthesize
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'thinking',
      prompt:
        'Netflix lost 0.09% of subscribers in 2022 and the stock crashed 75%. By 2025, it\'s at all-time highs. What does this teach you about how the market prices subscription businesses?',
      placeholder: 'The Netflix crash and recovery teaches me that...',
      modelAnswer:
        'The 2022 crash shows that at high multiples, subscription businesses are priced for the trajectory, not the current state. Losing 0.09% of subscribers was financially meaningless — but it broke the "perpetual growth" narrative, and at 50x earnings, the stock had no margin for error. The recovery teaches the opposite lesson: Netflix didn\'t need explosive subscriber growth to reach all-time highs. It needed to prove it could monetize its existing base through price hikes, password crackdowns, and ads. The market re-rated Netflix from "growth story" (paying for subscriber adds) to "profitability story" (paying for margin expansion). This is the lifecycle of every subscription business: first you grow the base, then you monetize it. The stock price rewards whichever phase the market is focused on.',
      strongReasoningIncludes: [
        'Connects the 75% crash to expectations (50x P/E pricing in perfection) rather than to the actual subscriber loss',
        'Explains the recovery as a shift from growth narrative to monetization narrative',
        'Recognizes the subscription business lifecycle: grow the base, then monetize it',
      ],
    },
  ],
  takeaways: [
    'At 300M subscribers, Netflix\'s growth engine is monetization (price hikes, ad tier, password crackdown) not new subscriber additions. A $1 price hike generates more revenue than millions of new signups.',
    'The 2022 crash (75% drop on 0.09% subscriber loss) proves that at high multiples, narrative matters more than numbers. The stock was priced for perpetual growth — any deviation was catastrophic.',
    'Content spending ($17B/year) is Netflix\'s moat, not its weakness. At scale, it costs $57/subscriber/year — under $5/month. Netflix generates $7B+ in free cash flow after content spending.',
    'The ad tier captures ~70% of premium revenue at a lower price point. As targeting improves, it could become more profitable per user than ad-free subscriptions.',
  ],
  completionMessages: {
    perfect: 'Flawless. You now understand subscription economics at scale — and why Netflix\'s story is about margins, not subscribers.',
    great: 'Strong analysis. The crash-to-recovery arc is one of the best case studies in how markets price expectations vs. reality.',
    good: 'Good foundation. Netflix teaches the subscription business lifecycle: grow first, then monetize. Watch for this pattern in every subscription company.',
    low: 'Worth revisiting. Netflix\'s story contains lessons about valuations, expectations, and business model transitions that apply to dozens of companies.',
  },
};
