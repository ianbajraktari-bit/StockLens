import { Target, TrendingUp, ShieldAlert, BrainCircuit, Zap, Calculator, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const microsoftLesson: Lesson = {
  id: 'microsoft',
  emoji: '🪟',
  title: 'Microsoft Lesson',
  subtitle: 'How a "boring" company became the world\'s most valuable',
  description:
    "Microsoft was left for dead in 2014 — a fading Windows monopoly. A decade later, it\'s worth $3 trillion. The turnaround came from one of the most successful business model transitions in history: turning one-time software purchases into recurring subscriptions and building a cloud platform to rival AWS. You'll analyze how the transition worked, what it means for margins, and whether 35x earnings is fair for a company growing 15%.",
  estimatedMinutes: 4,
  dataAsOf: 'Q1 2025',
  tier: 'company',
  skills: ['recurring_revenue', 'moats', 'valuation', 'risk'],
  keyFacts: [
    { label: 'Market Cap', value: '~$3.1T', detail: 'Competing with Apple and NVIDIA for #1 most valuable company' },
    { label: 'Annual Revenue', value: '~$245B', detail: 'Growing ~15% annually — accelerating from cloud and AI' },
    { label: 'Operating Margin', value: '~44%', detail: 'Among the highest of any mega-cap — higher than Apple' },
    { label: 'Cloud Revenue', value: '~$135B', detail: 'Azure + Office 365 + Dynamics — over half of total revenue' },
  ],
  topics: [
    { label: 'How the subscription transition transformed the business', icon: Target },
    { label: 'Why 44% operating margins are almost unheard of at this scale', icon: TrendingUp },
    { label: 'The AI bet — Copilot, OpenAI, and what\'s priced in', icon: ShieldAlert },
    { label: 'Making the judgment call at 35x and 15% growth', icon: BrainCircuit },
  ],
  storyArc: ['The Transition', 'The Margins', 'The AI Bet', 'The Decision'],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Drill: Microsoft business instincts
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Business DNA',
      topicIcon: Zap,
      intro: 'Quick instincts about how Microsoft makes money today. Tap fast.',
      prompts: [
        {
          setup: 'How does Microsoft sell Office today vs. 2010?',
          left: { label: '2010: buy once for $400', sublabel: 'one-time purchase, done' },
          right: { label: '2024: $13/month forever', sublabel: 'Office 365 subscription' },
          correct: 'right',
          flash: 'The shift from $400 one-time to $13/month means Microsoft earns $156/year per user — and the revenue never stops. 400M+ paid seats.',
        },
        {
          setup: 'Which revenue type is more valuable to investors?',
          left: { label: 'One-time license sales', sublabel: 'big upfront, then nothing' },
          right: { label: 'Monthly subscriptions', sublabel: 'smaller but recurring forever' },
          correct: 'right',
          flash: 'Recurring revenue is predictable. Investors pay premium multiples for it because next year\'s revenue is nearly guaranteed.',
        },
        {
          setup: 'Azure competes with AWS. Which has been growing faster recently?',
          left: { label: 'AWS', sublabel: '~19% growth' },
          right: { label: 'Azure', sublabel: '~30% growth' },
          correct: 'right',
          flash: 'Azure is growing faster and gaining share. Enterprise customers already using Office 365 often choose Azure for simplicity — the Microsoft ecosystem pulls them in.',
        },
        {
          setup: 'Why is a 44% operating margin remarkable at $245B revenue?',
          left: { label: 'Software scales', sublabel: 'code costs the same whether 1 or 1B users' },
          right: { label: 'Microsoft charges too much', sublabel: 'overpriced products' },
          correct: 'left',
          flash: 'Software has near-zero marginal cost. Once built, serving the next customer costs almost nothing. That\'s why software margins dwarf hardware, retail, and manufacturing.',
        },
        {
          setup: 'Microsoft\'s biggest competitive advantage is:',
          left: { label: 'The product quality', sublabel: 'better than alternatives' },
          right: { label: 'Enterprise lock-in', sublabel: 'switching means retraining millions of workers' },
          correct: 'right',
          flash: 'Most enterprises run on Office, Teams, Active Directory, Azure. Switching means retraining thousands of employees, migrating data, and rewriting integrations. The switching cost IS the moat.',
        },
        {
          setup: 'Microsoft invested $13B in OpenAI. This is a bet on:',
          left: { label: 'AI becoming core to every product', sublabel: 'Copilot in Office, Azure AI' },
          right: { label: 'OpenAI itself being profitable', sublabel: 'return on the $13B investment' },
          correct: 'left',
          flash: 'The $13B isn\'t about OpenAI\'s profits. It\'s about embedding AI into every Microsoft product — making Office, Azure, and GitHub indispensable. AI is the upgrade cycle.',
        },
      ],
      takeaway:
        'Microsoft pulled off the rarest move in tech: transforming from one-time sales to recurring subscriptions at massive scale. Add cloud growth, 44% margins, and enterprise lock-in, and you have one of the highest-quality business models in the world.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: the subscription math
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Recurring Revenue Machine',
      topicIcon: Calculator,
      context:
        'Microsoft has over 400 million paid Office 365 subscribers. The average revenue per user is roughly $150/year across consumer and commercial plans. Before the subscription transition, Office was a one-time $300-400 purchase every 5-7 years.',
      question: 'How much annual recurring revenue does Office 365 generate from 400M subscribers at $150/user?',
      answer: 60,
      tolerance: 8,
      unit: '$B',
      hint: '400M × $150',
      reveal:
        '400M × $150 = $60B/year in recurring revenue from Office alone. Under the old model, if those users bought Office every 5 years at $350, that\'s $28B/year on average. The subscription model more than doubled the revenue — and made it predictable. This is why the transition was transformational.',
      takeaway: 'Subscriptions don\'t just change how customers pay — they change how much they pay. $60B/year in recurring revenue is worth far more than $28B in sporadic purchases.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: margin advantage
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Margin Advantage',
      topicIcon: Calculator,
      context:
        'Microsoft earns a 44% operating margin on $245B in revenue. Apple earns ~30% on $391B. Google earns ~32% on $340B. Amazon earns ~10% on $620B.\n\nThe difference is business model: software subscriptions cost almost nothing to deliver. Each additional user is nearly pure profit.',
      question: 'How much operating profit does Microsoft generate annually? ($245B × 44%)',
      answer: 108,
      tolerance: 10,
      unit: '$B',
      hint: '$245B × 0.44',
      reveal:
        '$245B × 44% ≈ $108B in operating profit. For comparison, Amazon does $620B in revenue but generates only ~$65B in operating profit. Microsoft earns more profit on 40% of the revenue. That\'s the power of software margins — and why investors pay a premium for this business model.',
      takeaway: 'Revenue is vanity, margins are sanity. Microsoft generates more profit than Amazon on less than half the revenue. The business model — recurring software at 44% margins — is what justifies the premium.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: the Microsoft bull case
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Stress-Test the Bull Case',
      topicIcon: Flag,
      intro: 'An analyst pitches Microsoft as "the safest mega-cap." Tap the assumptions that could break.',
      passage: [
        { type: 'text', value: '"Microsoft has ' },
        {
          type: 'chip',
          value: '44% operating margins',
          signal: false,
          feedback: 'Current margins are a verifiable fact. The question is whether they hold or expand from here.',
        },
        { type: 'text', value: ' and ' },
        {
          type: 'chip',
          value: '$60B+ in Office 365 recurring revenue',
          signal: false,
          feedback: 'Current subscription revenue is a fact. Recurring revenue at this scale is genuinely hard to disrupt.',
        },
        { type: 'text', value: '. Azure will ' },
        {
          type: 'chip',
          value: 'keep growing 30%+ as it overtakes AWS',
          signal: true,
          feedback: 'Azure is gaining share, but 30%+ growth on a $80B+ base is increasingly hard. AWS isn\'t standing still, and Google Cloud is also accelerating. Sustained 30% assumes no competitive response.',
        },
        { type: 'text', value: '. AI Copilot will ' },
        {
          type: 'chip',
          value: 'add $10B+ in new annual revenue within 2 years',
          signal: true,
          feedback: 'Copilot adoption is early and pricing is still being tested. Enterprise AI deployment is slower than consumer AI hype suggests. $10B in 2 years assumes rapid enterprise adoption that hasn\'t been proven yet.',
        },
        { type: 'text', value: '. Enterprise lock-in means ' },
        {
          type: 'chip',
          value: 'customers can\'t leave',
          signal: false,
          feedback: 'Switching costs are real and well-documented. Enterprises that have built on Microsoft for 20+ years aren\'t going anywhere. This is a fact, not an assumption.',
        },
        { type: 'text', value: '. At 35x earnings, it\'s ' },
        {
          type: 'chip',
          value: 'reasonably priced for this quality',
          signal: true,
          feedback: '35x at 15% growth means you need growth to sustain AND margins to hold for years. "Reasonably priced" for quality still requires a lot to go right at nearly double the market multiple.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 2,
      reveal:
        'The moat is real (lock-in, margins, recurring revenue). The assumptions are about growth continuation: Azure sustaining 30%+ against intensifying competition, AI Copilot monetizing at scale quickly, and 35x being justified when the market average is 18-20x. Quality is undeniable — the question is the price.',
      takeaway: 'Even the highest-quality businesses have assumptions baked into their stock price. Microsoft\'s moat is real — but at 35x, the price still assumes significant growth from cloud and AI.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Drill: risk sorting
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Risk Assessment',
      topicIcon: ShieldAlert,
      intro: 'Each risk threatens Microsoft. Tap whether it\'s a real concern or manageable noise.',
      prompts: [
        {
          setup: 'Azure growth decelerates from 30% to 18% as cloud migration matures.',
          left: { label: 'Real concern', sublabel: 'growth engine slows' },
          right: { label: 'Manageable' },
          correct: 'left',
          flash: 'Azure is the main growth driver. Deceleration to 18% would force a multiple re-rating at 35x. This is the most probable bear case.',
        },
        {
          setup: 'Google Workspace takes 5% of Office 365 enterprise market share.',
          left: { label: 'Real concern' },
          right: { label: 'Manageable', sublabel: 'switching costs protect' },
          correct: 'right',
          flash: 'Enterprise switching costs are enormous. Google Workspace has tried for 15 years without serious enterprise penetration. 5% erosion is noise.',
        },
        {
          setup: 'AI Copilot revenue disappoints — enterprises adopt slower than expected.',
          left: { label: 'Real concern', sublabel: 'growth narrative weakens' },
          right: { label: 'Manageable' },
          correct: 'left',
          flash: 'The stock price includes AI upside. If Copilot monetizes slowly, the growth story weakens and the AI premium in the stock evaporates.',
        },
        {
          setup: 'Antitrust regulators investigate the OpenAI partnership.',
          left: { label: 'Real concern' },
          right: { label: 'Manageable', sublabel: 'regulatory posturing' },
          correct: 'right',
          flash: 'Regulatory noise, not structural threat. Even if the partnership gets restructured, Microsoft has already integrated the technology across its products.',
        },
        {
          setup: 'AI compute costs (GPU spending) compress margins by 2-3 percentage points.',
          left: { label: 'Real concern', sublabel: '44% margins at risk' },
          right: { label: 'Manageable' },
          correct: 'left',
          flash: 'If AI features require massive GPU spend, the 44% margin could compress. Investors paying 35x assume margins hold or expand. Even a small compression matters at this valuation.',
        },
      ],
      takeaway: 'Microsoft\'s moat is rock-solid. The risks are at the margin — literally. Azure deceleration, AI monetization speed, and margin compression from AI costs. These don\'t break the business, but they can break the stock at 35x.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Decide: the investor call
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Investment Decision',
      topicIcon: BrainCircuit,
      context:
        'Microsoft trades at 35x earnings. It has 44% operating margins, $60B in recurring Office revenue, Azure growing 30%, and an AI strategy embedded across every product. Growth is 15%. Enterprise lock-in is deep. But Azure is decelerating, AI monetization is unproven at scale, and 35x assumes a lot goes right.',
      question: 'What is the most thoughtful investor stance?',
      options: [
        'Buy — highest quality business in tech, untouchable moat',
        'Avoid — 35x for 15% growth is overpriced even for Microsoft',
        'The quality is real and the moat is deep. But at 35x, you need Azure to sustain growth AND AI to monetize meaningfully. If both happen, the stock compounds. If either disappoints, the premium shrinks. The risk isn\'t the business — it\'s the price already reflecting the upside',
        'Wait for AI to prove itself before buying',
      ],
      correctIndex: 2,
      punchline:
        'Microsoft is arguably the highest-quality large business in the world. But quality has a price — and at 35x, most of that quality is already reflected. The investment question isn\'t "is it great?" but "is the stock pricing in more greatness than will materialize?"',
      wrongNudges: [
        'Quality doesn\'t make a stock a buy at any price. You just identified real risks to Azure growth and AI monetization. Ignoring them because the business is great is how investors overpay.',
        '',
        '',
        'Waiting for proof means paying a higher price. If AI works, the stock will be at 40x+ by the time you know. The question is whether 35x already includes enough AI upside.',
      ],
      takeaway: 'The highest-quality businesses are the hardest to evaluate — not because they\'re complicated, but because the stock price already reflects the quality everyone can see. Your edge is in the assumptions the price makes about the future.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Thinking step: synthesis
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'thinking',
      prompt:
        'Microsoft has 44% operating margins, $60B+ in recurring Office revenue, Azure growing 30%, deep enterprise lock-in, and an AI strategy across every product. At 35x earnings and 15% growth, would you buy? Write 1-2 sentences on what makes you comfortable or uncomfortable.',
      placeholder:
        'e.g. "I would / wouldn\'t buy Microsoft because..."',
      modelAnswer:
        'Microsoft is the closest thing to a compounding machine in public markets — recurring revenue, unmatched margins, and a moat that deepens with every year of enterprise lock-in. But at 35x, I\'m paying for Azure to sustain 25%+ growth and AI Copilot to become a meaningful revenue driver. The business quality gives me confidence, but the valuation leaves little room for disappointment on either front.',
      strongReasoningIncludes: [
        'Acknowledges the genuine quality (margins, recurring revenue, moat) rather than dismissing 35x as simply "too expensive"',
        'Identifies the specific growth assumptions the price depends on (Azure sustained growth, AI monetization)',
        'Distinguishes between business risk (low) and valuation risk (moderate) — the business is strong but the price may already reflect it',
      ],
    },
  ],
  takeaways: [
    'Microsoft\'s subscription transition doubled Office revenue and made it recurring. This is the model every software company now copies.',
    '44% operating margins on $245B revenue generates more profit than Amazon on $620B. Business model matters more than revenue size.',
    'The moat is enterprise lock-in — millions of workers trained on Microsoft products, decades of integrated infrastructure. Switching costs are the strongest form of moat.',
    'At 35x, you\'re paying for quality everyone can see. The edge is in evaluating whether Azure growth and AI monetization justify the premium the price already assumes.',
  ],
  completionMessages: {
    perfect: 'Flawless. You analyzed the highest-quality business in tech and still found the right questions to ask at 35x.',
    great: 'Strong work. You understand that even the best businesses can be overpriced — and that the hardest analysis is the one where the quality is obvious.',
    good: 'Good start. Microsoft is the gold standard for business quality. The challenge is deciding whether the stock already reflects it.',
    low: 'Worth revisiting. Microsoft teaches the most important lesson in investing: quality at the wrong price can still lose money.',
  },
};
