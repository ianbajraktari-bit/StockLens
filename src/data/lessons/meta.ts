import { Users, DollarSign, AlertTriangle, Calculator, Target } from 'lucide-react';
import type { Lesson } from './types';

export const metaLesson: Lesson = {
  id: 'meta',
  emoji: '👤',
  title: 'Meta Lesson',
  subtitle: 'The ad machine funding the metaverse — genius or gamble?',
  description:
    "Meta prints $50B+ in free cash flow from the most profitable ad business on Earth, then pours $16B a year into Reality Labs with no clear payoff. You'll learn how attention-based ad models actually work, why Meta survived the 'Facebook is dying' narrative, and whether the metaverse bet is visionary or reckless.",
  estimatedMinutes: 4,
  dataAsOf: 'Q4 2024',
  tier: 'company',
  skills: ['business_drivers', 'margins', 'valuation', 'moats'],
  keyFacts: [
    { label: 'Daily Active People', value: '3.3B', detail: 'Across Facebook, Instagram, WhatsApp, and Messenger — nearly half of humanity' },
    { label: 'Annual Revenue', value: '~$165B', detail: '~98% from advertising — the most concentrated ad business among big tech' },
    { label: 'Operating Margin', value: '~42%', detail: 'Family of Apps alone runs at ~50%+ margins — Reality Labs losses drag overall down' },
    { label: 'Reality Labs Losses', value: '~$16B/year', detail: 'Meta spends more on the metaverse than most companies earn in total' },
  ],
  topics: [
    { label: 'How attention converts to ad dollars at massive scale', icon: DollarSign },
    { label: 'Why 3.3B daily users is an almost unreplicable moat', icon: Users },
    { label: 'The Reality Labs question: visionary bet or value destruction?', icon: AlertTriangle },
    { label: 'Whether Meta at ~25x earnings prices in the risks', icon: Target },
  ],
  storyArc: ['The Ad Machine', 'The Efficiency Pivot', 'The Metaverse Bet', 'The Decision'],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Drill: ad business instincts
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'The Ad Machine',
      topicIcon: DollarSign,
      intro: 'Meta makes almost all its money from ads. Quick instincts on how the ad business actually works.',
      prompts: [
        {
          setup: 'Meta earns ~$165B in revenue. What percentage comes from advertising?',
          left: { label: '~70%', sublabel: 'diversified across products' },
          right: { label: '~98%', sublabel: 'almost entirely ads' },
          correct: 'right',
          flash: '~98% of Meta\'s revenue is advertising. Facebook, Instagram, WhatsApp, Messenger — they\'re all ad-delivery platforms. The product is attention; the customer is the advertiser.',
        },
        {
          setup: 'Meta earns ~$68 per user/year in the US and Canada, but only ~$5 in Asia. Why?',
          left: { label: 'US users spend more time on the apps', sublabel: 'more attention = more ads' },
          right: { label: 'US advertisers pay far more per ad', sublabel: 'higher purchasing power = higher ad rates' },
          correct: 'right',
          flash: 'Ad rates are driven by purchasing power, not time spent. A US user who might buy a $50 product is worth far more to an advertiser than an Asian user who might buy a $2 product. Same attention, vastly different monetization.',
        },
        {
          setup: 'Apple\'s iOS privacy changes (ATT) in 2021 cost Meta ~$10B in revenue. How did Meta recover?',
          left: { label: 'Built AI models to predict behavior without tracking', sublabel: 'replaced lost data with AI inference' },
          right: { label: 'Convinced users to opt back into tracking', sublabel: 'reversed the privacy changes' },
          correct: 'left',
          flash: 'Meta invested billions in AI to model user behavior without relying on Apple\'s tracking. By 2024, ad targeting was better than before ATT — using on-platform signals and AI prediction instead of cross-app tracking. This AI investment is now a competitive moat.',
        },
        {
          setup: 'Meta\'s biggest competitor for ad dollars is:',
          left: { label: 'Google', sublabel: 'search + YouTube ads' },
          right: { label: 'TikTok', sublabel: 'short-form video ads' },
          correct: 'left',
          flash: 'Google and Meta together control ~50% of all digital advertising. TikTok is growing but still much smaller in revenue. The real competition for ad budgets is Google — they split the digital ad market between "intent" (search) and "discovery" (social feeds).',
        },
        {
          setup: 'Instagram Reels was Meta\'s response to TikTok. As a business move, it was:',
          left: { label: 'Defensive — copied TikTok to stop user exodus', sublabel: 'survival move' },
          right: { label: 'Offensive — short video increases time spent and ad inventory', sublabel: 'growth move' },
          correct: 'right',
          flash: 'Reels increased total time spent on Instagram by 24%+ because short videos are addictive. More time = more ad slots = more revenue. It started as defense against TikTok but became an ad revenue growth engine.',
        },
      ],
      takeaway: 'Meta is an attention-to-ad-dollars conversion machine. 3.3B daily users, ~98% ad revenue, massive regional pricing gaps, and AI-powered targeting that recovered from Apple\'s privacy hit. The business is simpler — and more dominant — than most people realize.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: the Year of Efficiency
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Efficiency Pivot',
      topicIcon: Calculator,
      context:
        'In early 2023, Zuckerberg declared a "Year of Efficiency" and cut 21,000 employees (~25% of Meta\'s workforce). Before the cuts, Meta had ~87,000 employees and ~$95B in operating expenses. After the cuts and restructuring, expenses dropped to ~$85B — while revenue grew from ~$117B to ~$165B.',
      question: 'What was Meta\'s operating margin improvement from 2022 to 2024 (approximate)?',
      answer: 17,
      tolerance: 3,
      unit: 'percentage points',
      hint: '2022: ($117B - $95B) / $117B ≈ 19%. 2024: ($165B - $95B) / $165B. But expenses also fell.',
      reveal:
        'Operating margin went from ~20% in 2022 to ~42% in 2024 — a 22 percentage-point swing. Revenue grew 40% while expenses barely budged. This is operating leverage: once the cuts happened, every new dollar of revenue flowed almost straight to profit. The stock tripled from its 2022 lows largely because of this margin expansion.',
      takeaway: 'The "Year of Efficiency" showed what Meta\'s ad business looks like when run lean. Revenue grew 40% while costs stayed flat — that\'s operating leverage turning a $117B company into a $165B one with nearly double the margins.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Tap: the metaverse debate
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'The Metaverse Bet',
      topicIcon: AlertTriangle,
      intro: 'Reality Labs has lost $50B+ since 2020 with no clear monetization. A bull and a bear are arguing. Tap the claims that are misleading or wrong.',
      passage: [
        { type: 'text', value: 'Bear: "Meta is ' },
        {
          type: 'chip',
          value: 'burning $16B a year on VR headsets nobody wants',
          signal: true,
          feedback: 'Misleading. Meta Quest is the best-selling VR headset, and Reality Labs includes AR glasses, AI wearables, and the Horizon platform — not just VR headsets. The spend is on an entire computing platform, not one product.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'The metaverse has no revenue model after 4 years of spending',
          signal: false,
          feedback: 'This is largely true. Reality Labs generates only ~$2B in revenue against $16B in costs. After $50B+ invested, there\'s no proven business model yet. Bears have a point here.',
        },
        { type: 'text', value: '."\n\nBull: "' },
        {
          type: 'chip',
          value: 'Meta can afford it — $50B in free cash flow funds Reality Labs and still leaves $34B+',
          signal: false,
          feedback: 'True. This is the key bull argument. Meta\'s ad business is so profitable that $16B in Reality Labs losses is funded entirely by cash flow, with tens of billions left over for buybacks and dividends. It\'s not threatening the core business.',
        },
        { type: 'text', value: '. Plus, ' },
        {
          type: 'chip',
          value: 'the metaverse will be a $1 trillion market by 2030',
          signal: true,
          feedback: 'Misleading. TAM projections for unproven markets are notoriously unreliable. The smartphone was a "$X trillion market" projection in 2005 too — the number was right eventually, but the timing and winners were impossible to predict. Don\'t invest based on TAM forecasts.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Zuckerberg controls 60%+ of voting power, so he can make long-term bets others can\'t',
          signal: true,
          feedback: 'True, but this cuts both ways. Founder control enables patient long-term bets — but it also means shareholders can\'t stop Zuckerberg from spending $16B/year on a bet they disagree with. The same structure that enabled Facebook\'s success could fund a decade-long money pit.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 2,
      reveal:
        'The metaverse debate has legitimate points on both sides. Bears are right that $50B+ has produced no business model. Bulls are right that Meta\'s cash flow easily funds the bet. The misleading claims: "nobody wants VR" (Quest sells well), "$1 trillion TAM" (fantasy numbers), and founder control being presented as purely positive (it\'s a double-edged sword).',
      takeaway: 'Reality Labs is a $16B/year bet funded by a $50B cash flow machine. The core ad business isn\'t at risk — but $50B+ in cumulative losses with no revenue model is a legitimate concern. Founder control means this bet continues whether shareholders like it or not.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Drill: Meta vs. the competition
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Competitive Moat',
      topicIcon: Users,
      intro: 'How strong is Meta\'s competitive position? Tap which advantage matters more.',
      prompts: [
        {
          setup: 'Meta\'s core moat is:',
          left: { label: 'Network effects', sublabel: '3.3B daily users — everyone you know is there' },
          right: { label: 'Superior technology', sublabel: 'best algorithms and AI' },
          correct: 'left',
          flash: 'Technology can be copied; networks can\'t. Facebook, Instagram, and WhatsApp have nearly half of humanity using them daily. A competitor would need to convince billions of people to move simultaneously. That\'s the moat.',
        },
        {
          setup: 'TikTok has 1B+ monthly users and dominates short video. Is Meta\'s moat weakening?',
          left: { label: 'Yes — TikTok proves users will leave', sublabel: 'attention is shifting' },
          right: { label: 'No — users added TikTok without leaving Meta', sublabel: 'not zero-sum' },
          correct: 'right',
          flash: 'Meta\'s daily active users grew from 2.9B to 3.3B during TikTok\'s rise. Users added TikTok as another app, not a replacement. Social media isn\'t zero-sum — people use multiple platforms for different purposes.',
        },
        {
          setup: 'WhatsApp has 2B+ users but generates almost no revenue. Is it:',
          left: { label: 'A failed product', sublabel: '$19B acquisition with no payoff' },
          right: { label: 'An unmonetized asset', sublabel: 'massive reach, payments and business messaging ahead' },
          correct: 'right',
          flash: 'WhatsApp is the default messaging app in most countries outside the US. Business messaging, payments (already live in India and Brazil), and click-to-WhatsApp ads are early but growing fast. The $19B price tag looks increasingly cheap for 2B+ users.',
        },
        {
          setup: 'Meta\'s AI recommendation engine now drives 30%+ of Instagram content from accounts you don\'t follow. For the ad business, this is:',
          left: { label: 'Risky — users hate algorithmic content', sublabel: 'could drive people away' },
          right: { label: 'Bullish — more engagement and better ad targeting', sublabel: 'AI improves the product AND the business' },
          correct: 'right',
          flash: 'AI-recommended content increased time spent on Instagram by 24%+. More time = more ad inventory. And the same AI models that recommend content also improve ad targeting. Users may complain, but engagement metrics keep climbing.',
        },
      ],
      takeaway: 'Meta\'s moat is 3.3B daily users connected by network effects that no competitor has replicated. TikTok didn\'t shrink Meta\'s base — it grew alongside it. WhatsApp is an unmonetized asset with 2B+ users. AI is making the ad business better, not disrupting it.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Estimate: what Reality Labs actually costs shareholders
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Real Cost',
      topicIcon: Calculator,
      context:
        'Meta trades at ~$1.5 trillion market cap with a P/E of ~25x.\n\nFamily of Apps (the ad business) earned ~$70B in operating income in 2024.\nReality Labs lost ~$16B.\nConsolidated operating income: ~$54B.\n\nIf Reality Labs didn\'t exist, Meta\'s operating income would be $70B instead of $54B.',
      question: 'What P/E would Meta trade at based on Family of Apps earnings alone (assume $70B operating → ~$60B net income)?',
      answer: 25,
      tolerance: 2,
      unit: 'x',
      hint: '$1.5T market cap ÷ $60B net income',
      reveal:
        '$1.5T ÷ $60B = 25x. Here\'s what that means: the market is valuing Meta\'s ad business at ~25x earnings and assigning roughly ZERO value to Reality Labs. All $50B+ invested so far, all $16B/year in ongoing spending — the market prices it at nothing. If Reality Labs ever works, it\'s pure upside. If it doesn\'t, the ad business alone justifies the stock price.',
      takeaway: 'The market assigns zero value to Reality Labs. Meta\'s stock price is supported entirely by the ad business at ~25x earnings. Reality Labs is either a free call option on the future of computing, or a $16B/year charity project — depending on your view.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Decide: the investment judgment
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Judgment Call',
      topicIcon: Target,
      context:
        'The full picture:\n\n• 3.3B daily active people — ~half of humanity\n• Revenue: ~$165B, ~98% from ads, growing ~20%\n• Operating margin: ~42% (Family of Apps alone: ~50%+)\n• Free cash flow: ~$50B+ after $16B in Reality Labs losses\n• AI improving ad targeting and engagement simultaneously\n• Reality Labs: $50B+ invested, ~$2B revenue, no proven business model\n• Founder control: Zuckerberg has 60%+ voting power\n• P/E: ~25x — reasonable if ad growth continues, cheap if Reality Labs works',
      question: 'What\'s the most thoughtful investor stance on Meta?',
      options: [
        'Avoid — the metaverse spending is reckless and Zuckerberg can\'t be stopped',
        'Meta at ~25x is reasonably priced for a dominant ad business growing 20% with 42% margins. Reality Labs is a free option — the market assigns it zero value. The risk is founder control enabling indefinite spending on unproven bets, but the ad business funds everything with cash to spare',
        'Buy aggressively — Meta is the cheapest big tech stock and Reality Labs will be worth $500B+',
        'Sell — the ad business is mature and AI will disrupt social media advertising',
      ],
      correctIndex: 1,
      punchline:
        'Meta at ~25x earnings for a business growing 20% with 42% margins and $50B+ in free cash flow is not expensive by any historical standard. The market gives Reality Labs zero credit — meaning if it ever works, it\'s pure upside. The real risk isn\'t the business; it\'s governance. Zuckerberg can spend $16B/year on anything he wants, and shareholders can\'t stop him.',
      wrongNudges: [
        'The metaverse spending is concerning, but "can\'t be stopped" isn\'t the full picture. The ad business generates $50B+ in cash flow — Reality Labs consumes $16B, leaving $34B+ for buybacks and dividends. The core business isn\'t at risk; the question is whether the excess cash is well-spent.',
        '',
        '"Cheapest big tech" is true on P/E, but valuing Reality Labs at $500B+ requires a working business model that doesn\'t exist yet. The reasonable case doesn\'t require Reality Labs to succeed — it\'s priced at zero already.',
        'AI is making Meta\'s ad business BETTER, not disrupting it. Meta\'s AI recommendation engine increases engagement and improves ad targeting simultaneously. The companies most threatened by AI in advertising are smaller ad networks, not the platform with 3.3B users and the best targeting data.',
      ],
      takeaway: 'Meta\'s ad business justifies the current price at ~25x. Reality Labs is a free option the market doesn\'t price in. The unique risk: founder control means Zuckerberg decides how to spend $50B+ in annual cash flow, and shareholders just watch.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Thinking: synthesize
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'thinking',
      prompt:
        'Based on everything you\'ve learned — the $165B ad business at 42% margins, 3.3B daily users, the AI-powered recovery from Apple\'s privacy changes, $16B/year in Reality Labs losses with no revenue model, Zuckerberg\'s 60%+ voting control, and a ~25x P/E — would you invest in Meta today? What\'s the key variable that determines whether this is a great investment or a mediocre one?',
      placeholder: 'My investment opinion on Meta is...',
      modelAnswer:
        'I\'d buy Meta at ~25x. The ad business is dominant — 3.3B daily users, 98% ad revenue, growing 20%, and the AI improvements to targeting make the moat wider, not narrower. The fact that Meta recovered from Apple\'s privacy hit by building better AI models shows the company can adapt. Reality Labs is the wildcard: $16B/year with no revenue model is hard to love, but the market already prices it at zero, so I\'m not paying for it. The key variable isn\'t the metaverse — it\'s ad revenue growth. If Meta keeps growing ads at 15-20% with 40%+ margins, the stock is cheap at 25x. If ad growth slows to single digits (regulatory pressure, competition, saturation), then 25x is fair, not cheap. The governance risk (Zuckerberg\'s control) is real but acceptable because the ad business funds everything with room to spare.',
      strongReasoningIncludes: [
        'Recognizes the ad business alone justifies the price — Reality Labs is upside, not the thesis',
        'Identifies ad revenue growth rate as the key variable (not the metaverse) that determines whether 25x is cheap or fair',
        'Addresses the governance risk of founder control as a real concern, not something to dismiss',
      ],
    },
  ],
  takeaways: [
    'Meta\'s ad business is simpler than it looks: 3.3B daily users × attention × AI targeting = ~$165B in revenue at 42% margins. Nearly 98% comes from ads.',
    'The "Year of Efficiency" proved the operating leverage: revenue grew 40% while costs stayed flat, doubling margins from ~20% to ~42%. Lean Meta is a cash machine.',
    'Reality Labs has consumed $50B+ with no proven business model. The market prices it at zero — meaning it\'s either a free call option on the future or a $16B/year write-off.',
    'At ~25x earnings for 20% growth and $50B+ in free cash flow, Meta\'s valuation is supported entirely by the ad business. The key risk is governance: Zuckerberg\'s 60%+ voting control means he decides how the cash gets spent.',
  ],
  completionMessages: {
    perfect: 'Perfect. You understand both sides of Meta — the world\'s best ad machine and its most expensive side project. That\'s real analysis.',
    great: 'Strong work. You can now separate Meta the ad business from Meta the metaverse bet — and value each independently.',
    good: 'Good foundation. Meta teaches a critical skill: evaluating a dominant business that carries a controversial side bet.',
    low: 'Worth revisiting. Meta is one of the most important case studies in tech investing — understanding its dual nature is essential.',
  },
};
