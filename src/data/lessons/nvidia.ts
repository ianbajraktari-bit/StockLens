import { Target, TrendingUp, ShieldAlert, BrainCircuit } from 'lucide-react';
import type { Lesson } from './types';

export const nvidiaLesson: Lesson = {
  id: 'nvidia',
  emoji: '🟢',
  title: 'NVIDIA Lesson',
  subtitle: 'Analyzing a high-growth stock in a hype cycle',
  description:
    "NVIDIA is one of the most talked-about stocks in the market — but hype and good investing are different things. In this lesson, you'll learn how NVIDIA actually makes money, why its competitive moat is different from most hardware companies, what could go wrong even if AI is real, and how to think about valuation when a stock has already gone up 10x.",
  estimatedMinutes: 3,
  dataAsOf: 'Q1 2025',
  keyFacts: [
    { label: 'Market Cap', value: '~$3.2T', detail: 'Grew from ~$300B to $3.2T in under 3 years' },
    { label: 'Annual Revenue', value: '~$130B', detail: 'Up from ~$27B two years ago — a 4.8x increase' },
    { label: 'Gross Margin', value: '73%', detail: 'Unheard of for a hardware company (Intel runs ~40%)' },
    { label: 'Data Center Share', value: '~80%+', detail: 'Dominant share of AI training chip market' },
  ],
  topics: [
    { label: 'How NVIDIA makes money and why it dominates', icon: Target },
    { label: 'What gives NVIDIA its real competitive moat', icon: TrendingUp },
    { label: 'The risks hiding behind the AI hype', icon: ShieldAlert },
    { label: 'Judging a stock that\'s already priced for perfection', icon: BrainCircuit },
  ],
  thinkingStep: {
    prompt:
      'NVIDIA trades at 39x earnings after growing revenue 114% in a single year. Its biggest customers are also building competing chips. AI spending is real — but so is the possibility that this is a cyclical capex boom, not permanent demand. Given everything you\'ve learned, would you buy NVIDIA at today\'s price? Write 1–2 sentences explaining what would have to be true for the investment to work.',
    placeholder:
      'e.g. "I would / wouldn\'t buy NVIDIA here because..."',
    modelAnswer:
      'NVIDIA is a genuinely dominant business with a real moat in CUDA — but at 39x earnings, the stock isn\'t priced for "good." It\'s priced for years of sustained hyper-growth with no margin compression and no meaningful share loss to custom silicon. I\'d need confidence that AI infrastructure spending is structurally permanent — not a cyclical capex wave — and that Google, Amazon, and Meta won\'t meaningfully dent NVIDIA\'s share before I\'d pay this price.',
    strongReasoningIncludes: [
      'Distinguishes between the AI trend being real and the stock being a good investment at the current price — these are separate questions',
      'Addresses what specifically must go right (sustained growth, no margin compression, limited custom silicon adoption) rather than vague optimism or pessimism',
      'Considers whether current AI spending is permanent structural demand or a cyclical capex boom that could slow even if AI itself succeeds',
    ],
  },
  takeaways: [
    'Understand concentration risk — when 83% of revenue comes from one segment, your investment thesis lives or dies with that segment.',
    'A real moat isn\'t just good hardware — it\'s an ecosystem (like CUDA) that creates switching costs. Look for what keeps customers locked in.',
    'Even if the underlying trend is real (AI), the stock can still disappoint if expectations outpace reality.',
    'When a stock is priced for perfection, the risk isn\'t that the business fails — it\'s that growth merely slows.',
  ],
  completionMessages: {
    perfect: "Flawless. You cut through the AI hype and analyzed NVIDIA like an investor, not a fan.",
    great: "Strong work. You understand that a great product doesn't automatically mean a great stock at any price.",
    good: "Solid start. You're learning to separate business quality from stock quality — that's the hardest part.",
    low: "Good effort. NVIDIA is a tricky stock because the hype makes it hard to think clearly — revisit the lesson to sharpen your edge.",
  },
  questions: [
    {
      topic: 'The Business',
      topicIcon: Target,
      context:
        'NVIDIA\'s Data Center segment generates ~83% of total revenue ($108B of $130B). Gaming, the original core business, is now ~10%. Automotive and other segments contribute the rest. Two years ago, Data Center was ~56% of a much smaller revenue base.',
      question: 'As an investor, what is the most important conclusion you draw from NVIDIA\'s revenue concentration?',
      options: [
        'NVIDIA should diversify into other businesses to reduce risk',
        'The concentration is fine because AI demand is strong and will keep growing',
        'Your entire investment thesis lives or dies with one question: will AI infrastructure spending keep accelerating at this pace?',
        'Data Center dominance proves NVIDIA has a monopoly, so the concentration is safe',
      ],
      correctIndex: 2,
      explanation:
        'When 83% of revenue comes from one segment, you don\'t really own a diversified company — you own a single bet on AI infrastructure spending. That bet might be right, but you need to be honest about what you\'re buying. The question isn\'t whether AI is real (it is), but whether hyperscalers will keep spending at this rate for years. If spending plateaus or becomes cyclical — even while AI itself thrives — NVIDIA\'s growth engine stalls. Recognizing what your thesis actually depends on is the first step to evaluating it honestly.',
      wrongExplanations: [
        'Diversifying sounds prudent, but it often destroys value. NVIDIA\'s dominance comes precisely from focus — the CUDA ecosystem, the chip architecture, the developer relationships are all concentrated investments in one domain. Suggesting diversification ignores why the company is dominant in the first place. The risk isn\'t the lack of diversification — it\'s whether the one thing they\'re concentrated in keeps growing.',
        '"AI is strong" is a narrative, not an analysis. Every investor already knows AI demand is strong — that\'s why the stock is up 2,000% in three years. The question is whether current spending rates are sustainable or whether this is a capex cycle that eventually normalizes. Accepting the narrative without questioning its durability is how investors get caught holding stocks after the growth rate downshifts.',
        '',
        'NVIDIA doesn\'t have a monopoly — it has a dominant market share sustained by ecosystem advantages. Google, Amazon, AMD, and Intel all compete. Dominant share can erode; monopolies are legally defined and enforced. Conflating market leadership with guaranteed safety ignores that the biggest risk to concentration is what happens if customers successfully build alternatives.',
      ],
      takeaway: 'When a company is concentrated in one segment, name the single question your investment depends on. If you can\'t answer that question with conviction, you don\'t have a thesis — you have a hope.',
    },
    {
      topic: 'Competitive Moat',
      topicIcon: TrendingUp,
      context:
        'NVIDIA commands 80%+ of the AI training chip market and 73% gross margins — extraordinary for hardware. Competitors exist: AMD makes rival GPUs, Google builds TPUs, Amazon has Trainium, and dozens of startups are designing custom AI chips. Yet NVIDIA\'s share hasn\'t meaningfully declined. Why?',
      question: 'What is the most accurate description of NVIDIA\'s competitive moat?',
      options: [
        'NVIDIA simply has the best hardware — faster chips mean customers have no reason to switch',
        'CUDA, NVIDIA\'s proprietary software ecosystem, creates switching costs that matter more than chip specs because the entire AI development stack is built on it',
        'NVIDIA\'s first-mover advantage in AI gives it a permanent lead that competitors can never close',
        'Hyperscalers are locked in by long-term contracts that prevent them from using alternatives',
      ],
      correctIndex: 1,
      explanation:
        'Hardware leadership matters, but hardware advantages are temporary — every chip generation can be challenged. CUDA is the real moat. It\'s a software ecosystem with 15+ years of developer investment: PyTorch, TensorFlow, and virtually all AI research tools are optimized for CUDA. Switching to a competitor means rewriting code, revalidating models, and retraining teams. That switching cost persists even if a rival builds a faster chip. This is why NVIDIA can charge 73% margins in hardware — the software makes the hardware sticky.',
      wrongExplanations: [
        'Having the best hardware is necessary but not sufficient for a durable moat. AMD\'s MI300X series is competitive on many benchmarks. Google\'s TPUs are optimized for specific workloads. If hardware specs alone determined winners, NVIDIA would be vulnerable every new chip cycle. The moat is what makes customers stay even when competitive hardware exists — and that\'s the software ecosystem, not the transistors.',
        '',
        'First-mover advantage is one of the most overused concepts in investing. Being first doesn\'t create a moat — look at BlackBerry (smartphones), MySpace (social), or Netscape (browsers). What matters is whether the first mover built switching costs or network effects that compound over time. NVIDIA did — through CUDA — but it\'s CUDA that matters, not the chronology.',
        'Hyperscalers don\'t have long-term GPU contracts — they actively develop alternatives. Google has invested billions in TPUs. Amazon built Trainium and Inferentia. Meta is exploring custom silicon. These companies choose NVIDIA despite having alternatives, which is a sign of ecosystem strength — not contractual lock-in. If it were just contracts, the moat would expire when the contracts do.',
      ],
      takeaway: 'The most durable moats aren\'t built on having the best product right now — they\'re built on making it expensive and painful for customers to leave. Switching costs compound; product specs reset every cycle.',
    },
    {
      topic: 'Risk & Bear Case',
      topicIcon: ShieldAlert,
      context:
        'You\'re building a bear case for NVIDIA. Consider these risks: (1) Hyperscalers — Google, Amazon, Meta — are investing billions in custom AI chips to reduce NVIDIA dependence. (2) AI infrastructure spending may be a cyclical capex boom, not permanent demand — companies could overbuild capacity, then pull back. (3) US export controls restrict NVIDIA\'s highest-end chip sales to China, cutting off a major market. (4) Competition from AMD\'s MI300 series is closing the performance gap and could pressure margins.',
      question: 'Which risk is most dangerous to NVIDIA\'s stock at its current valuation?',
      options: [
        'Custom silicon from hyperscalers — NVIDIA\'s best customers becoming its competitors directly threatens both market share and pricing power',
        'Cyclical capex risk — if AI spending is a build-out phase that plateaus, NVIDIA\'s growth rate collapses even though AI itself succeeds',
        'China export controls — losing access to a major market permanently caps revenue growth',
        'AMD competition — a credible rival closing the performance gap could compress NVIDIA\'s 73% margins toward industry norms',
      ],
      correctIndex: 1,
      explanation:
        'All four risks are real, but cyclicality is the most dangerous at this valuation because it attacks the assumption the entire stock price is built on: sustained hyper-growth. NVIDIA trades at 39x earnings because investors expect revenue to keep compounding at extraordinary rates for years. If AI infrastructure spending turns out to be a build-out phase — where companies invest heavily, then digest that capacity — growth could drop from 100%+ to 10-20% while the business is still healthy. At 39x earnings, a growth deceleration of that magnitude could cut the stock price in half even without a single lost customer. Custom silicon and AMD are share risks; cyclicality is a total-market-size risk.',
      wrongExplanations: [
        'Custom silicon is a genuine long-term threat, but it\'s slow-moving. Building competitive AI chips takes years, and CUDA switching costs protect NVIDIA during the transition. Even if Google and Amazon shift 30% of their workloads to custom chips over 5 years, NVIDIA could still grow if the total AI market expands fast enough. This risk erodes the moat gradually — it doesn\'t break the growth story suddenly. At 39x earnings, the sudden risks matter more than the gradual ones.',
        '',
        'China export controls are already priced in. The market knows NVIDIA can\'t sell H100s to China, and the stock still trades at 39x. NVIDIA has designed compliant chips for China and is growing despite the restrictions. Restrictions could tighten, but this is a known headwind, not a surprise catalyst. The most dangerous risks are the ones the market hasn\'t priced.',
        'AMD is a credible competitor, but closing the performance gap and winning ecosystem share are different things. AMD\'s MI300 is competitive on specs, but most AI developers still build on CUDA. Margin compression from AMD would be gradual — a few points per year, not a step change. At NVIDIA\'s scale and switching costs, AMD competition is a margin headwind, not an existential threat to the growth rate that justifies the valuation.',
      ],
      takeaway: 'At extreme valuations, the most dangerous risk isn\'t losing customers — it\'s the growth rate downshifting. Ask: "What is the stock price assuming about future growth, and what could make that growth merely good instead of extraordinary?"',
    },
    {
      topic: 'Think Like an Investor',
      topicIcon: BrainCircuit,
      context:
        'NVIDIA trades at 39x earnings and 27x sales. To justify the current price, analysts estimate NVIDIA needs to grow revenue by ~25% annually for the next 5 years — reaching ~$400B by 2030. That means the entire cloud and AI industry must roughly triple its GPU spending. Revenue grew 114% last year but is already expected to decelerate to ~45% next year as the base gets larger. Every Wall Street analyst rates it a "Buy." The stock has returned 2,000%+ in 3 years.',
      question: 'What is the most important question an investor should ask before buying NVIDIA at this price?',
      options: [
        '"Is AI real?" — if the technology works, NVIDIA will keep growing',
        '"Can NVIDIA sustain 73% gross margins for five years while competitors scale up and customers build alternatives?"',
        '"Has the stock already gone up too much?" — a 2,000% return means there\'s no upside left',
        '"Will NVIDIA beat earnings next quarter?" — short-term results determine whether the stock keeps going up',
      ],
      correctIndex: 1,
      explanation:
        'Everyone already knows AI is real — that\'s priced in. The real question is about durability: can NVIDIA maintain extraordinary margins while competitors invest billions to challenge it? At 39x earnings, the stock assumes not just that AI demand continues, but that NVIDIA keeps its near-monopoly pricing power for years. If margins compress from 73% to 55% — still excellent for hardware — earnings drop significantly even with growing revenue. The most dangerous scenario for NVIDIA investors isn\'t an AI bust; it\'s a world where AI thrives but NVIDIA becomes one of several winners instead of the only winner.',
      wrongExplanations: [
        '"Is AI real?" was the right question in 2022. In 2025, every major company is spending billions on AI infrastructure. The technology debate is over. Asking "is AI real?" at this point means you\'re two years behind the market. The relevant question now is about competitive durability and pricing power — not whether the underlying trend exists.',
        '',
        'Past returns tell you nothing about future returns. A stock that\'s up 2,000% could still double if the business warrants it — or it could drop 50% if expectations outpace reality. Anchoring to past performance instead of forward analysis is one of the most common investor errors. The question isn\'t where the stock has been; it\'s what must happen from here.',
        'Focusing on next-quarter earnings is trader thinking, not investor thinking. NVIDIA will probably beat estimates next quarter — they\'ve beaten 8 quarters in a row. But one quarter doesn\'t tell you whether the growth rate is sustainable for five years, whether margins will hold, or whether the valuation is justified. Short-term beats can mask long-term deterioration. Investors who buy on quarterly beats often sell on the first miss — at a much lower price.',
      ],
      takeaway: 'At extreme valuations, the right question isn\'t whether the trend is real — it\'s whether the company can maintain its dominance and pricing power for as long as the stock price assumes. Trends can be real while individual winners rotate.',
    },
  ],
};
