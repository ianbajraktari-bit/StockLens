import { Target, TrendingUp, ShieldAlert, BrainCircuit, Zap, Calculator, Flag } from 'lucide-react';
import type { Lesson } from './types';

export const nvidiaLesson: Lesson = {
  id: 'nvidia',
  emoji: '🟢',
  title: 'NVIDIA Lesson',
  subtitle: 'Analyzing a high-growth stock in a hype cycle',
  description:
    "NVIDIA went from $300B to $3.2T in under three years. The AI hype is real — but is the stock price? You'll trace where the revenue actually comes from, stress-test the CUDA moat, and decide whether 39x earnings is a fair price when your biggest customers are building their own chips.",
  estimatedMinutes: 4,
  dataAsOf: 'Q1 2025',
  tier: 'company',
  skills: ['business_drivers', 'moats', 'valuation', 'risk'],
  keyFacts: [
    { label: 'Market Cap', value: '~$3.2T', detail: 'Grew from ~$300B to $3.2T in under 3 years' },
    { label: 'Annual Revenue', value: '~$130B', detail: 'Up from ~$27B two years ago — a 4.8x increase' },
    { label: 'Gross Margin', value: '73%', detail: 'Unheard of for a hardware company (Intel runs ~40%)' },
    { label: 'Data Center Share', value: '~80%+', detail: 'Dominant share of AI training chip market' },
  ],
  topics: [
    { label: 'Tracing NVIDIA\'s extreme revenue concentration', icon: Target },
    { label: 'Stress-testing the CUDA moat against custom silicon', icon: TrendingUp },
    { label: 'Separating the AI trend from the stock bet', icon: ShieldAlert },
    { label: 'Making the judgment call at 39x earnings', icon: BrainCircuit },
  ],
  storyArc: ['The Concentration', 'The Moat', 'The Risk', 'The Decision'],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Drill: NVIDIA business instincts
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Business DNA',
      topicIcon: Zap,
      intro: 'Quick instincts about NVIDIA\'s business. Tap fast.',
      prompts: [
        {
          setup: 'Where does NVIDIA make most of its money?',
          left: { label: 'Gaming GPUs', sublabel: '~10% of revenue' },
          right: { label: 'Data Center chips', sublabel: '~83% of revenue' },
          correct: 'right',
          flash: 'Gaming built the company, but Data Center IS the company now. $108B of $130B.',
        },
        {
          setup: 'Which better explains NVIDIA\'s 73% gross margin?',
          left: { label: 'Premium hardware specs', sublabel: 'fastest chips on the market' },
          right: { label: 'Software ecosystem lock-in', sublabel: 'CUDA switching costs' },
          correct: 'right',
          flash: 'Specs get matched every cycle. CUDA makes customers stay even when alternatives exist. That\'s pricing power.',
        },
        {
          setup: 'What kind of revenue is this?',
          left: { label: 'Recurring', sublabel: 'customers re-order automatically' },
          right: { label: 'Cyclical capex', sublabel: 'big purchases in waves' },
          correct: 'right',
          flash: 'Companies buy GPUs in massive build-out waves, not subscriptions. When the wave crests, orders drop.',
        },
        {
          setup: 'Who are NVIDIA\'s biggest customers?',
          left: { label: 'Thousands of small companies', sublabel: 'diversified base' },
          right: { label: 'A handful of hyperscalers', sublabel: 'Google, Amazon, Meta, Microsoft' },
          correct: 'right',
          flash: 'Concentrated customer base. A few companies drive most of the revenue — and they\'re building their own chips.',
        },
        {
          setup: 'Revenue grew 114% last year. What does the market expect next?',
          left: { label: '~45% growth', sublabel: 'decelerating but still strong' },
          right: { label: '114%+ again', sublabel: 'sustained hyper-growth' },
          correct: 'left',
          flash: 'The base is so large that growth naturally decelerates. Going from $130B to $190B is different than $27B to $58B.',
        },
        {
          setup: 'NVIDIA at 39x earnings is priced for:',
          left: { label: 'Years of sustained hyper-growth', sublabel: 'perfection must continue' },
          right: { label: 'Steady moderate growth', sublabel: 'good but not extraordinary' },
          correct: 'left',
          flash: 'At 39x, the stock needs revenue to reach ~$400B by 2030. "Good" growth would crash the stock.',
        },
      ],
      takeaway:
        'NVIDIA is a concentrated bet on AI infrastructure spending. 83% of revenue from one segment, cyclical capex, concentrated customers — and priced for perfection.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Estimate: the Data Center concentration
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Concentration Number',
      topicIcon: Calculator,
      context:
        'NVIDIA\'s total revenue is ~$130B. Data Center generates ~$108B. Gaming is ~$13B. Automotive and other segments contribute the rest. Two years ago, Data Center was ~56% of a much smaller base.',
      question: 'What % of NVIDIA\'s revenue comes from Data Center?',
      answer: 83,
      tolerance: 5,
      unit: '%',
      hint: '$108B ÷ $130B',
      reveal:
        '$108B ÷ $130B = 83%. You don\'t own a diversified chip company — you own a single bet on AI infrastructure spending. If that spending plateaus, everything plateaus. The question isn\'t whether AI is real. It\'s whether hyperscalers keep spending at this pace.',
      takeaway: 'When one segment is 83% of revenue, your investment thesis is one question: will that segment keep accelerating?',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: the CUDA switching cost
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Real Moat',
      topicIcon: Calculator,
      context:
        'CUDA has been built over 15+ years. PyTorch, TensorFlow, and virtually all AI research tools are optimized for it. Intel\'s gross margin in chips is ~40%. AMD also makes competitive GPUs. Yet NVIDIA charges 73% gross margins — nearly double industry norms.',
      question: 'How many percentage points above Intel\'s margin does NVIDIA charge? (NVIDIA 73% minus Intel ~40%)',
      answer: 33,
      tolerance: 5,
      unit: 'pts',
      hint: '73% − 40%',
      reveal:
        '33 percentage points above Intel. That margin premium is the CUDA moat made visible. Customers pay nearly 2x the industry gross margin because rewriting code, revalidating models, and retraining teams costs more than just buying NVIDIA. Hardware specs reset every cycle — but 15 years of ecosystem lock-in doesn\'t.',
      takeaway: 'A real moat shows up in the numbers. NVIDIA charges double-industry margins because switching costs make leaving more expensive than paying the premium.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: the NVIDIA bull case
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Stress-Test the Bull Case',
      topicIcon: Flag,
      intro:
        'An analyst pitches NVIDIA as the "AI winner." Tap the assumptions that could break.',
      passage: [
        { type: 'text', value: '"NVIDIA dominates AI training with ' },
        {
          type: 'chip',
          value: '80%+ market share',
          signal: false,
          feedback: 'Current market share is a verifiable fact, not an assumption.',
        },
        { type: 'text', value: ' and ' },
        {
          type: 'chip',
          value: '73% gross margins',
          signal: false,
          feedback: 'Current margins are a fact. The question is whether they persist.',
        },
        { type: 'text', value: '. The CUDA ecosystem means ' },
        {
          type: 'chip',
          value: 'customers can\'t switch to competitors',
          signal: true,
          feedback:
            'Google, Amazon, and Meta are spending billions on custom AI chips (TPUs, Trainium, MTIA). They\'re not locked in forever — they\'re actively building alternatives.',
        },
        { type: 'text', value: '. AI spending is ' },
        {
          type: 'chip',
          value: 'structurally permanent',
          signal: true,
          feedback:
            'AI infrastructure spending may be a cyclical capex boom. Companies could overbuild capacity, then pull back — even if AI itself succeeds. Build-outs don\'t last forever.',
        },
        { type: 'text', value: ', not a cyclical wave. Revenue grew 114%, and the company will ' },
        {
          type: 'chip',
          value: 'sustain 25%+ growth for 5 years',
          signal: true,
          feedback:
            'Sustaining 25%+ growth on a $130B base means reaching ~$400B. That requires the entire AI chip market to roughly triple. Growth naturally decelerates as the base expands.',
        },
        { type: 'text', value: ' to reach $400B by 2030. At 39x earnings, NVIDIA is ' },
        {
          type: 'chip',
          value: 'fairly priced for the opportunity',
          signal: true,
          feedback:
            'At 39x, you need hyper-growth AND margin maintenance AND no meaningful share loss. "Fairly priced" hides that the stock is priced for perfection.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 3,
      reveal:
        'The facts are real (market share, margins). The assumptions are that CUDA lock-in is permanent, AI capex is structural not cyclical, 25%+ growth sustains on a $130B base, and 39x is fair for a hardware business. Every one of those could break.',
      takeaway:
        'Separate facts from assumptions. NVIDIA\'s current dominance is a fact — whether it persists for 5 years at 39x is a chain of assumptions.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Drill: risk sorting
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Risk Ranking',
      topicIcon: ShieldAlert,
      intro: 'Each risk threatens NVIDIA. Tap whether it attacks the growth rate or the moat.',
      prompts: [
        {
          setup: 'AI infrastructure spending turns out to be a cyclical build-out that plateaus.',
          left: { label: 'Growth rate', sublabel: 'total market stops expanding' },
          right: { label: 'Moat', sublabel: 'competitive advantage weakens' },
          correct: 'left',
          flash: 'Even if NVIDIA keeps 80% share, revenue stalls when the total market stops growing. Growth risk.',
        },
        {
          setup: 'Google\'s TPUs reach 70% of CUDA performance at 40% lower cost.',
          left: { label: 'Growth rate' },
          right: { label: 'Moat', sublabel: 'customers can leave' },
          correct: 'right',
          flash: 'Custom silicon closing the gap attacks the lock-in that lets NVIDIA charge 73% margins. Moat erosion.',
        },
        {
          setup: 'US export controls permanently block high-end chip sales to China.',
          left: { label: 'Growth rate', sublabel: 'addressable market shrinks' },
          right: { label: 'Moat' },
          correct: 'left',
          flash: 'Cuts off a major market. Revenue ceiling gets lower, but the competitive position in remaining markets is unchanged.',
        },
        {
          setup: 'AMD\'s MI300X wins 15% of data center GPU share.',
          left: { label: 'Growth rate' },
          right: { label: 'Moat', sublabel: 'margin compression' },
          correct: 'right',
          flash: 'A credible rival winning share forces NVIDIA to compete on price. Margins compress from 73% toward industry norms.',
        },
        {
          setup: 'Companies realize they overbuilt AI capacity and pause GPU orders for 18 months.',
          left: { label: 'Growth rate', sublabel: 'demand cliff' },
          right: { label: 'Moat' },
          correct: 'left',
          flash: 'Classic capex cycle. Demand evaporates temporarily while digesting capacity. NVIDIA\'s moat is intact but revenue craters.',
        },
        {
          setup: 'Amazon requires all new ML projects to use Trainium instead of NVIDIA GPUs.',
          left: { label: 'Growth rate' },
          right: { label: 'Moat', sublabel: 'customer defection' },
          correct: 'right',
          flash: 'Your biggest customer becoming your competitor and mandating alternatives is a direct moat attack.',
        },
      ],
      takeaway:
        'Growth risks and moat risks are different. Growth risks mean the market stops expanding. Moat risks mean NVIDIA loses its premium position. At 39x, growth risks are more dangerous because the stock price assumes growth continues.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Decide: cyclical vs structural
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Core Question',
      topicIcon: ShieldAlert,
      context:
        'NVIDIA\'s revenue grew from $27B to $130B in two years. Its biggest customers (Google, Amazon, Meta, Microsoft) are building their own chips. Revenue is already expected to decelerate from 114% to ~45%. At 39x, the stock needs ~$400B revenue by 2030.',
      question: 'Which risk is most dangerous to NVIDIA\'s stock at this valuation?',
      options: [
        'Custom silicon from hyperscalers — best customers becoming competitors',
        'AI capex is a cyclical build-out, not permanent demand — growth collapses even if AI succeeds',
        'China export controls permanently cap the addressable market',
        'AMD competition compresses margins from 73% toward industry norms',
      ],
      correctIndex: 1,
      punchline:
        'Custom silicon and AMD erode the moat gradually. Cyclicality breaks the growth story overnight. At 39x, the stock isn\'t priced for "good" — it\'s priced for sustained hyper-growth. A growth deceleration could cut the price in half while the business is still healthy.',
      wrongNudges: [
        'Custom silicon is a real long-term threat, but building competitive chips takes years and CUDA switching costs slow adoption. The sudden risk matters more at 39x.',
        '',
        'China export controls are already known and priced in. The market knows about the restrictions — the stock still trades at 39x.',
        'AMD competition would compress margins gradually — a few points per year. At 39x, the sudden risks matter more than the slow ones.',
      ],
      takeaway: 'At extreme valuations, the most dangerous risk isn\'t losing customers — it\'s the growth rate downshifting. Trends can be real while the capex cycle is temporary.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. Decide: the investor call
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The Investment Decision',
      topicIcon: BrainCircuit,
      context:
        'NVIDIA trades at 39x earnings. Revenue grew 114% but is decelerating. The CUDA moat is real but customers are building alternatives. Every analyst rates it a "Buy." The stock has returned 2,000%+ in 3 years.',
      question: 'What is the most important question before buying at this price?',
      options: [
        '"Is AI real?" — if the technology works, NVIDIA wins',
        '"Can NVIDIA sustain 73% margins for 5 years while competitors scale and customers build alternatives?"',
        '"Has the stock already gone up too much?" — 2,000% means no upside left',
        '"Will NVIDIA beat earnings next quarter?"',
      ],
      correctIndex: 1,
      punchline:
        'Everyone already knows AI is real — that\'s priced in. At 39x, the bet is that NVIDIA keeps near-monopoly pricing power for years while customers actively build alternatives. If margins compress from 73% to 55%, earnings drop sharply even with growing revenue.',
      wrongNudges: [
        '"Is AI real?" was the right question in 2022. In 2025 every major company is spending billions on it. You\'re two years behind the market.',
        '',
        'Past returns tell you nothing about future returns. A stock up 2,000% could still double — or drop 50%. Anchoring to past performance is one of the most common errors.',
        'Quarterly beats are trader thinking. NVIDIA will probably beat next quarter. The question is whether the growth rate sustains for five years.',
      ],
      takeaway: 'At extreme valuations, the right question isn\'t whether the trend is real — it\'s whether the company can maintain dominance and pricing power for as long as the price assumes.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 8. Thinking step: synthesis
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'thinking',
      prompt:
        'NVIDIA trades at 39x earnings after growing revenue 114% in a single year. Its biggest customers are also building competing chips. AI spending is real — but so is the possibility that this is a cyclical capex boom. Given everything, would you buy NVIDIA at today\'s price? Write 1-2 sentences explaining what would have to be true for the investment to work.',
      placeholder:
        'e.g. "I would / wouldn\'t buy NVIDIA here because..."',
      modelAnswer:
        'NVIDIA is a genuinely dominant business with a real moat in CUDA — but at 39x earnings, the stock isn\'t priced for "good." It\'s priced for years of sustained hyper-growth with no margin compression and no meaningful share loss to custom silicon. I\'d need confidence that AI infrastructure spending is structurally permanent — not a cyclical capex wave — and that Google, Amazon, and Meta won\'t meaningfully dent NVIDIA\'s share before I\'d pay this price.',
      strongReasoningIncludes: [
        'Distinguishes between the AI trend being real and the stock being a good investment at the current price',
        'Addresses what specifically must go right (sustained growth, no margin compression, limited custom silicon adoption)',
        'Considers whether current AI spending is permanent structural demand or a cyclical capex boom',
      ],
    },
  ],
  takeaways: [
    'When 83% of revenue comes from one segment, name the single question your investment depends on.',
    'The CUDA moat is real — but it shows up as a 33-point margin premium that customers are actively trying to escape.',
    'Growth risks and moat risks are different. At extreme valuations, growth risks are more dangerous.',
    'At 39x, the risk isn\'t that AI fails — it\'s that growth merely slows. "Good" isn\'t good enough when the price demands perfection.',
  ],
  completionMessages: {
    perfect: 'Flawless. You cut through the AI hype and analyzed NVIDIA like an investor, not a fan.',
    great: "Strong work. You understand that a great product doesn't automatically mean a great stock at any price.",
    good: "Solid start. You're learning to separate business quality from stock quality — that's the hardest part.",
    low: "Good effort. NVIDIA is tricky because the hype makes it hard to think clearly — revisit to sharpen your edge.",
  },
};
