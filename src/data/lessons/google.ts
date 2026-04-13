import { Target, TrendingUp, ShieldAlert, BrainCircuit, Zap, Calculator, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const googleLesson: Lesson = {
  id: 'google',
  emoji: '🔍',
  title: 'Google Lesson',
  subtitle: 'The most profitable tollbooth in history — and the AI threat to it',
  description:
    "Google prints money. Search advertising generates 55%+ operating margins on $200B+ in ad revenue. But for the first time in 25 years, the core business faces a real threat: AI could change how people find information. You'll analyze why Google's ad machine is so profitable, what AI means for it, and whether the stock is priced for disruption or dominance.",
  estimatedMinutes: 4,
  dataAsOf: 'Q1 2025',
  tier: 'company',
  skills: ['margins', 'moats', 'valuation', 'risk'],
  keyFacts: [
    { label: 'Annual Revenue', value: '~$350B', detail: 'About 77% from advertising — mostly Search' },
    { label: 'Operating Margin', value: '~30%', detail: 'Search margins are 55%+ but Other Bets drag the average down' },
    { label: 'Google Cloud', value: '~$43B', detail: 'Now profitable — growing 28% and reaching scale' },
    { label: 'P/E Ratio', value: '~22x', detail: 'Below the market average — the market sees risk' },
  ],
  topics: [
    { label: 'Why Search advertising is the best business model ever built', icon: Target },
    { label: 'How AI threatens — and could strengthen — the ad machine', icon: ShieldAlert },
    { label: 'YouTube and Cloud: the second and third acts', icon: TrendingUp },
    { label: 'Why Google trades at a discount and whether it\'s deserved', icon: BrainCircuit },
  ],
  storyArc: ['The Ad Machine', 'The AI Question', 'Beyond Search', 'The Decision'],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Drill: Google business instincts
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Business DNA',
      topicIcon: Zap,
      intro: 'Quick instincts about how Alphabet actually makes money. Tap fast.',
      prompts: [
        {
          setup: 'Where does most of Google\'s revenue come from?',
          left: { label: 'Advertising', sublabel: 'Search, YouTube, network ads' },
          right: { label: 'Cloud & subscriptions', sublabel: 'Google Cloud, Workspace, YouTube Premium' },
          correct: 'left',
          flash: '~77% of Alphabet\'s revenue is advertising. Google is an ad company that happens to build technology products. The tech creates the audience; ads monetize it.',
        },
        {
          setup: 'Why are Search ads so profitable compared to social media ads?',
          left: { label: 'Intent', sublabel: 'user is actively looking to buy' },
          right: { label: 'Reach', sublabel: 'Google has more users' },
          correct: 'left',
          flash: 'When someone searches "best running shoes," they\'re ready to buy. The advertiser is paying to reach someone with intent. Social media ads interrupt people scrolling — search ads answer people shopping. Intent = higher conversion = higher ad prices.',
        },
        {
          setup: 'Google\'s Search operating margin is estimated at:',
          left: { label: '~25%', sublabel: 'solid but normal' },
          right: { label: '~55%+', sublabel: 'extraordinarily high' },
          correct: 'right',
          flash: 'Search margins are estimated above 55% — almost unheard of at this scale. The cost to serve one more search query is near zero, but advertisers pay billions. This is one of the highest-margin businesses in history.',
        },
        {
          setup: 'Google Cloud is now:',
          left: { label: 'Profitable', sublabel: 'turned the corner' },
          right: { label: 'Still losing money', sublabel: 'investing heavily' },
          correct: 'left',
          flash: 'Google Cloud turned profitable in 2023 and is now generating ~$2B+ in operating income annually. It\'s the #3 cloud behind AWS and Azure, growing 28% and reaching escape velocity.',
        },
        {
          setup: 'Alphabet\'s "Other Bets" (Waymo, Verily, etc.) are:',
          left: { label: 'Profitable moonshots' },
          right: { label: 'Losing billions/year', sublabel: 'funded by Search profits' },
          correct: 'right',
          flash: 'Other Bets lose ~$4-5B/year. They\'re funded entirely by the Search cash machine. Waymo has real technology but no clear path to profitability at scale. These bets drag overall margins down from 55%+ to ~30%.',
        },
      ],
      takeaway: 'Google is an advertising business with 55%+ Search margins, a growing Cloud division, and money-losing moonshots. Search intent-based ads are the profit engine funding everything else.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: the ad machine economics
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Ad Machine',
      topicIcon: Calculator,
      context:
        'Google processes ~8.5 billion searches per day. About 20% of searches show ads.\n\nSearch ad revenue: ~$200B/year\nSearches with ads: 8.5B × 365 × 20% = ~620 billion ad impressions per year\n\nRevenue per ad impression = $200B ÷ 620B',
      question: 'How much revenue does Google earn per ad impression (in cents)?',
      answer: 32,
      tolerance: 5,
      unit: '¢',
      hint: '$200B ÷ 620B impressions × 100 cents',
      reveal:
        '$200B ÷ 620B = $0.32 per ad impression — about 32 cents. That seems tiny, but multiply it by 620 billion impressions per year and you get $200B. The marginal cost to serve each additional search is nearly zero — the servers and algorithms are already built. This is why Search margins are 55%+: the revenue scales infinitely, the costs barely move.',
      takeaway: 'Google\'s moat is volume × margin. Each search earns pennies, but trillions of searches per year with near-zero marginal cost creates the most profitable business model in history.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Decide: the AI threat
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The AI Question',
      topicIcon: ShieldAlert,
      context:
        'For 25 years, Google Search had no real competitor. Now AI chatbots (ChatGPT, Perplexity) answer questions directly — without showing a page of blue links with ads.\n\nThe bear case: if people ask AI instead of searching Google, ad impressions drop. Revenue drops. The 55% margin machine breaks.\n\nThe bull case: Google is integrating AI into Search (AI Overviews). It has the most search data, the most users, and its own frontier AI models (Gemini). AI makes Search better, not obsolete.',
      question: 'What\'s the most important question for Google\'s future?',
      options: [
        'Whether ChatGPT will replace Google Search entirely',
        'Whether AI-powered answers can be monetized with ads as effectively as traditional search results — because if AI answers replace blue links, Google needs to make the same money from a different format',
        'Whether Google\'s AI is better than OpenAI\'s',
        'Whether people will stop using the internet because of AI',
      ],
      correctIndex: 1,
      punchline:
        'The existential question isn\'t "will people still search?" — they will. It\'s "can Google make the same ad revenue per query when AI answers replace blue links?" If AI Overviews show one answer instead of ten links, there\'s less ad space. The $200B ad machine depends on the format, not just the traffic.',
      wrongNudges: [
        'Full replacement is unlikely — Google has 90% market share and massive distribution advantages (default on Android, Chrome, iOS). The real risk isn\'t losing all traffic — it\'s losing the ad format that monetizes the traffic.',
        '',
        'AI model quality matters, but it\'s not the investment question. Google could have the best AI and still lose revenue if AI answers reduce ad impressions per query. The business risk is about monetization, not technology.',
        'People won\'t stop using the internet. They might change how they find information — asking AI instead of searching — but the total information demand keeps growing.',
      ],
      takeaway: 'Google\'s risk isn\'t that people stop searching — it\'s that AI changes the format of search in ways that reduce ad revenue per query. The 55% margin depends on the blue-links-plus-ads format. Changing that format is the real disruption risk.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: reading the bull/bear debate
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Beyond Search',
      topicIcon: Flag,
      intro: 'An analyst is evaluating Google\'s diversification beyond Search ads. Tap the claims that represent genuine strengths (not hype).',
      passage: [
        { type: 'text', value: '"Alphabet isn\'t just Search anymore. ' },
        {
          type: 'chip',
          value: 'YouTube generates ~$36B/year in ad revenue — more than Netflix\'s total revenue',
          signal: true,
          feedback: 'Real strength. YouTube generated ~$36B in ad revenue (2024) — more than Netflix\'s entire revenue. It\'s a second profit engine with its own moat (creator network effects, user habit) and still growing as TV ad budgets shift to streaming.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Google Cloud is growing 28% and now generating operating profit',
          signal: true,
          feedback: 'Real strength. Google Cloud hit ~$43B in revenue with operating margins improving from breakeven to ~10%. Together with YouTube\'s ~$36B, these two businesses represent ~$80B in revenue growing faster than Search. This is real diversification, not a promise.',
        },
        { type: 'text', value: '. Meanwhile, ' },
        {
          type: 'chip',
          value: 'Waymo is the leader in autonomous vehicles and will be worth $100B+',
          signal: false,
          feedback: 'Waymo has impressive technology, but "$100B+ valuation" is speculative. It operates in a few cities, loses billions/year, and autonomous vehicle timelines have been wrong for a decade. Leadership in technology doesn\'t guarantee financial success.',
        },
        { type: 'text', value: '. The company also has ' },
        {
          type: 'chip',
          value: '$95B in cash and short-term investments on the balance sheet',
          signal: true,
          feedback: 'Real strength. Google\'s $95B in cash (net of ~$13B debt) gives it more acquisition and R&D firepower than any competitor. That\'s a strategic moat in the AI arms race — it can fund massive GPU buildouts, talent acquisition, and new bets without borrowing a dime.',
        },
        { type: 'text', value: '. And ' },
        {
          type: 'chip',
          value: 'Gemini will beat ChatGPT because Google has more data',
          signal: false,
          feedback: 'Having more data doesn\'t guarantee AI leadership. OpenAI, Anthropic, and Meta are all competitive. "More data wins" oversimplifies the AI race — model architecture, talent, and distribution all matter.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 2,
      reveal:
        'Google\'s real diversification beyond Search: YouTube ($36B, dominant video), Cloud ($43B, profitable, growing 28%), and $95B cash. The speculative bets — Waymo\'s valuation, Gemini beating everyone — are narratives, not evidence yet. The investment case should rest on proven businesses, not hopeful predictions.',
      takeaway: 'Separate proven businesses from speculative bets. YouTube and Cloud are real diversification with real revenue. Waymo and AI dominance claims are optionality — worth something, but not the foundation of a thesis.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Estimate: what does 22x P/E imply?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Discount',
      topicIcon: Calculator,
      context:
        'Google trades at ~22x earnings. The S&P 500 average is ~22x. Microsoft trades at ~35x. Apple at ~30x.\n\nGoogle is the only mega-cap tech company trading at or below the market average. It has 30% operating margins, $95B in cash, and is growing revenue 14%.\n\nIf Google traded at the same multiple as Microsoft (35x), with current earnings of ~$90B:\n\nCurrent market cap at 22x: $90B × 22 = ~$1.98T\nHypothetical market cap at 35x: $90B × 35 = ?',
      question: 'What would Google\'s market cap be at Microsoft\'s multiple (in $T)?',
      answer: 3.15,
      tolerance: 0.2,
      unit: '$T',
      hint: '$90B × 35',
      reveal:
        '$90B × 35 = $3.15 trillion — versus ~$2T today. The $1.15T gap represents the "AI risk discount." The market is telling you: Google is a great business, but there\'s a real chance AI disrupts the Search cash machine. That discount is either an overreaction (opportunity) or justified caution (the market is correctly pricing risk). Your view on AI determines which.',
      takeaway: 'Google\'s below-market P/E is the market pricing in AI disruption risk. The ~$1T gap between Google\'s valuation and what its financials would normally command is the market\'s estimate of how much AI might damage the business.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Decide: the investment judgment
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Judgment Call',
      topicIcon: BrainCircuit,
      context:
        'Here\'s the full picture:\n\n• 77% of revenue from ads — mostly Search with 55%+ margins\n• YouTube: $36B, dominant, growing\n• Cloud: $43B, profitable, growing 28%\n• $95B cash, growing revenue 14%, 30% operating margins\n• 22x P/E — below market average despite superior financials\n• AI threatens the ad format that generates 55% margins\n• Google is also a leader in AI (Gemini, TPUs, DeepMind)',
      question: 'What\'s the most thoughtful investor stance on Google?',
      options: [
        'Sell — AI will destroy Search advertising and the entire business model is at risk',
        'Google at 22x is the rare case of a dominant business trading at a discount because of a specific, identifiable risk (AI disruption). If you believe Google can monetize AI-powered search effectively, the discount is a buying opportunity. If you believe the ad format is permanently impaired, the discount is justified',
        'Buy aggressively — Google is too cheap at 22x, the AI fears are overblown',
        'Avoid tech entirely — AI makes all tech stocks unpredictable',
      ],
      correctIndex: 1,
      punchline:
        'Google is one of the clearest examples of "what are you paying for the risk?" in today\'s market. The financials are excellent. The discount exists because of one specific question: can Google maintain $200B+ in ad revenue as AI changes how people find information? Your answer to that question is your investment thesis.',
      wrongNudges: [
        'AI destroying Search entirely ignores Google\'s advantages: 90% market share, default distribution on every device, frontier AI models, and 25 years of search data. The risk isn\'t that Search dies — it\'s that ad revenue per query shrinks.',
        '',
        '"Too cheap" assumes you\'ve answered the AI question positively. If AI reduces ad impressions by 20%, Google\'s earnings drop significantly. At 22x, the stock isn\'t obviously cheap — it\'s pricing in a real risk. You need a specific view on AI monetization, not just "it\'s cheap."',
        'AI doesn\'t affect all tech equally. Costco, Amazon\'s retail, and most of the economy are largely unaffected by AI disruption in search. Blanket avoidance is lazy analysis.',
      ],
      takeaway: 'Google\'s investment case reduces to one question: can the company monetize AI-powered search as effectively as traditional search? The 22x P/E is the market\'s way of saying "maybe not." Your job as an investor is to form your own view.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Thinking: synthesize
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'thinking',
      prompt:
        'Google has the best financials of any mega-cap tech company but trades at the lowest multiple. In 2-3 sentences, explain why — and what would need to change for the discount to close.',
      placeholder: 'Google trades at a discount because...',
      modelAnswer:
        'Google trades at 22x despite 30% margins, 14% growth, and $95B in cash because the market fears AI will disrupt Search advertising — the business that generates 77% of revenue and 55%+ margins. The discount would close if Google demonstrates that AI Overviews can be monetized as effectively as blue links (same ad revenue per query), or if YouTube and Cloud grow large enough to reduce the company\'s dependence on Search ads. Until one of those happens, the market will keep applying a "disruption risk" discount to an otherwise dominant business.',
      strongReasoningIncludes: [
        'Identifies the specific risk (AI disrupting the Search ad format) rather than vague "AI fears"',
        'Connects the discount to the revenue/margin structure — 77% from ads, 55% margins at risk',
        'Describes what would close the gap — either successful AI monetization or diversification reducing Search dependence',
      ],
    },
  ],
  takeaways: [
    'Google is an advertising company: 77% of revenue comes from ads, mostly Search. Search operating margins of 55%+ make it one of the most profitable business models ever built.',
    'The AI threat isn\'t that people stop searching — it\'s that AI answers replace blue links, reducing the ad space that generates $200B/year. The format matters as much as the traffic.',
    'YouTube ($36B) and Cloud ($43B, profitable, growing 28%) are real diversification. Waymo and AI dominance claims are optionality. Separate the proven from the speculative.',
    'Google at 22x P/E — below Microsoft (35x) and Apple (30x) — is the market pricing in AI disruption risk. The ~$1T valuation gap is the price of that uncertainty.',
  ],
  completionMessages: {
    perfect: 'Flawless. You can now articulate Google\'s investment case in terms of a single question: can the ad machine survive the AI transition?',
    great: 'Strong analysis. Understanding why the best financials don\'t always get the highest multiple is a key investing insight.',
    good: 'Good foundation. Google is a masterclass in how risk perception — not just financial performance — drives stock prices.',
    low: 'Worth revisiting. Google teaches one of investing\'s most important lessons: excellent businesses can still be risky if their core model faces disruption.',
  },
};
