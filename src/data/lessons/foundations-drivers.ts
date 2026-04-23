import { Search, Activity, TrendingUp, Zap, Target } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsDriversLesson: Lesson = {
  id: 'foundations-drivers',
  emoji: '🔍',
  title: 'What Actually Drives a Business',
  subtitle: 'Starbucks revenue fell 3% — but WHY tells you everything',
  description:
    'Revenue is an output, not a driver. When Starbucks\' revenue drops 3%, the investor\'s job isn\'t to panic — it\'s to figure out WHY. Fewer stores? Fewer visits per store? Lower spending per visit? Each answer implies a completely different problem with a completely different fix. This lesson teaches you to think like a detective.',
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-1',
  skills: ['business_drivers'],
  keyFacts: [],
  topics: [
    { label: 'Revenue is an output — trace back to inputs', icon: Activity },
    { label: 'How to decompose revenue into drivers', icon: Search },
    { label: 'Same growth, different quality', icon: TrendingUp },
    { label: 'When growth is hiding a problem', icon: Target },
  ],
  steps: [
    // Hook: Starbucks detective work
    {
      kind: 'decide',
      topic: 'The Detective Question',
      topicIcon: Search,
      context:
        'Starbucks just reported that quarterly revenue fell 3% — from $9.4B to $9.1B. The stock dropped 8% in after-hours trading. Headlines say "Starbucks struggles."\n\nBut "revenue fell 3%" is just the symptom. An investor needs the diagnosis. Starbucks\' revenue comes from:\n\nRevenue = (number of stores) × (visits per store) × (spend per visit)\n\nThe 3% drop could be caused by any of these three inputs declining.',
      question: 'Which cause would worry you MOST as an investor?',
      options: [
        'Fewer stores — Starbucks closed 200 locations',
        'Fewer visits per store — customers are coming less often',
        'Lower spend per visit — customers are ordering smaller drinks',
      ],
      correctIndex: 1,
      punchline:
        'Fewer visits is the scariest because it signals a DEMAND problem — customers are choosing not to come. Closing stores is often strategic (trimming underperformers). Lower spend might be a temporary trade-down. But fewer visits means the brand is losing its pull — people are going to competitors or making coffee at home. This is exactly what happened to Starbucks in 2024: same-store visits declined 6% in the US.',
      wrongNudges: [
        'Store closures can actually be GOOD — trimming unprofitable locations improves overall margins. Management closing stores is a deliberate strategic choice, not a demand signal.',
        '',
        'Lower spend per visit could mean customers are trading down (ordering a $5 latte instead of a $7 one), which is concerning but manageable. They\'re still showing up — they\'re just spending less per trip.',
      ],
      takeaway: 'Revenue is an output. When it changes, decompose it into its inputs (stores × visits × spend) to find the real driver. The SAME revenue drop can mean completely different things.',
    },

    // Estimate: test real intuition about drivers
    {
      kind: 'estimate',
      topic: 'Driver Math',
      topicIcon: Activity,
      context:
        'Starbucks has about 36,000 stores worldwide. In a typical quarter, each store generates about $260,000 in revenue. That gives roughly $9.4B in quarterly revenue.\n\nNow imagine Starbucks reports next quarter\'s revenue is $9.1B — a 3% decline. The number of stores actually GREW by 2% (to 36,720). Spend per visit stayed flat.',
      question: 'If stores grew 2% and spend per visit was flat, but total revenue still fell 3%, roughly how much did visits per store decline?',
      answer: 5,
      tolerance: 2,
      unit: '%',
      hint: 'If stores grew 2% but revenue fell 3%, visits per store must have fallen enough to overcome that store growth AND cause a net decline',
      reveal:
        'About 5%. Stores grew 2%, so all else equal, revenue should have been UP 2%. Instead it was DOWN 3%. That\'s a 5-percentage-point gap — which means visits per store dropped roughly 5%. This is the kind of detective work that separates investors from headline-readers. The 3% revenue decline was actually a 5% demand decline MASKED by store expansion.',
      takeaway: 'The headline number can UNDERSTATE the real problem. A company can open new locations to mask declining traffic at existing ones. Same-store metrics (revenue at stores open 1+ year) are what investors watch to see through this.',
    },

    // Drill: which growth source is higher quality?
    {
      kind: 'drill',
      topic: 'Growth Quality',
      topicIcon: Zap,
      intro: 'Not all growth is equal. Two companies can grow 20% but for very different reasons. Which growth source is more sustainable?',
      prompts: [
        {
          setup: 'Company A grew 20% by signing new customers. Company B grew 20% because existing customers bought more.',
          left: { label: 'A: new customers', sublabel: 'expanding the base' },
          right: { label: 'B: existing expansion', sublabel: 'customers spending more' },
          correct: 'right',
          flash: 'Existing customers spending more (called "net revenue retention" or "expansion revenue") is cheaper and stickier than new acquisition. It means the product is getting MORE valuable to people who already use it. Amazon\'s growth is largely existing customers buying more categories.',
        },
        {
          setup: 'Company A grew 20% by raising prices 20%. Company B grew 20% by selling 20% more units at the same price.',
          left: { label: 'A: price increase', sublabel: 'charging more' },
          right: { label: 'B: volume growth', sublabel: 'selling more units' },
          correct: 'right',
          flash: 'Price increases have a ceiling — eventually customers push back or switch. Volume growth means real demand is expanding. Apple can raise iPhone prices only so much. But selling 20% more iPhones means 20% more people want the product — that\'s demand, not pricing power.',
        },
        {
          setup: 'Company A grew 20% by acquiring another company. Company B grew 20% organically (no acquisitions).',
          left: { label: 'A: acquisition', sublabel: 'bought another company' },
          right: { label: 'B: organic', sublabel: 'grew on their own' },
          correct: 'right',
          flash: 'Acquisitions are "bought growth" — the company wrote a check to add revenue. Organic growth means the core business is actually expanding. Acquisitions also come with integration risks, cultural clashes, and debt. Many acquisitions DESTROY value.',
        },
        {
          setup: 'Company A grew 15% because their industry grew 20% (they actually lost market share). Company B grew 15% while their industry grew 5% (they\'re taking share from competitors).',
          left: { label: 'A: rising tide', sublabel: 'industry carried them' },
          right: { label: 'B: taking share', sublabel: 'outperforming industry' },
          correct: 'right',
          flash: 'A is LOSING ground despite growing. When the tide goes out, A will shrink faster than the market. B is gaining share — winning customers from competitors. That signals something about the product is genuinely better. Growth relative to the industry matters more than absolute growth.',
        },
        {
          setup: 'Company A grew 25% this year after growing 5% last year (accelerating). Company B grew 25% this year after growing 40% last year (decelerating).',
          left: { label: 'A: accelerating', sublabel: '5% → 25%' },
          right: { label: 'B: decelerating', sublabel: '40% → 25%' },
          correct: 'left',
          flash: 'Same growth rate, completely different stories. A is getting BETTER — something changed (new product, new market, something working). B is slowing down — the easy growth is over. Investors pay premiums for acceleration and penalize deceleration. NVIDIA went from 40% to 120% growth (acceleration) and the stock 10x\'d.',
        },
      ],
      takeaway: 'Growth quality matters as much as growth rate. Organic > acquired, expanding customers > new customers, market share gains > riding a rising tide, and acceleration > deceleration.',
    },

    // Tap: find the driver buried in a pitch
    {
      kind: 'tap',
      topic: 'What\'s Actually Driving This?',
      topicIcon: Search,
      intro: 'A CEO is pitching investors on their company\'s "incredible 30% growth." Read the pitch and find the details that reveal WHAT is actually driving that growth — and whether it\'s sustainable.',
      passage: [
        { type: 'text', value: '"We grew 30% this year to $500M revenue. ' },
        { type: 'chip', value: 'Our product is incredible and customers love us', signal: false, feedback: 'Vague enthusiasm is not a driver. "Customers love us" is something every CEO says. Where\'s the DATA?' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'We acquired two competitors for $200M, adding $120M in revenue', signal: true, feedback: 'THERE it is. $120M of the $150M growth came from BUYING companies, not organic growth. Strip out acquisitions, and organic growth is only $30M on $350M — about 8.5%. The "30% growth" headline is misleading.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'We expanded into 12 new countries this year', signal: false, feedback: 'Expansion sounds impressive but says nothing about profitability. Are those new countries making money, or burning cash for years before they contribute? Country count ≠ financial health.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Same-store revenue at existing locations declined 4%', signal: true, feedback: 'RED FLAG. The core business is SHRINKING. Growth is entirely coming from acquisitions and new locations, not from the existing base getting healthier. This is masking a declining core business.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Customer acquisition cost rose 60% while lifetime value remained flat', signal: true, feedback: 'It\'s getting MORE expensive to acquire each customer but each customer isn\'t worth any more. This means the unit economics are deteriorating — every new customer is less profitable than the last. This trend kills growth companies.' },
        { type: 'text', value: '. We\'re confident in our ' },
        { type: 'chip', value: 'market-leading brand and best-in-class team', signal: false, feedback: 'Brand claims and team quality are unverifiable and every company says this. Show me the numbers. What specific metric proves the brand is working?' },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 3,
      reveal:
        'The "30% growth" story collapses under scrutiny. 80% of growth came from acquisitions, not organic demand. Same-store revenue declined 4% — the core business is getting weaker. And customer acquisition costs are rising 60% while customer value is flat — each new customer is less profitable. This company is spending more to run faster on a treadmill. The CEO\'s pitch buries these facts under enthusiasm and vanity metrics.',
      takeaway: 'When a CEO says "we grew 30%," your first question is WHERE did that growth come from? Organic growth, existing customer expansion, and improving unit economics are real. Acquisition-driven growth with declining core metrics is a cover-up.',
    },

    // Thinking step
    {
      kind: 'thinking',
      prompt: 'You\'re analyzing two coffee chains. Both grew revenue 12% this year. Chain A\'s growth came from opening 50 new stores (existing stores were flat). Chain B\'s growth came from 0 new stores — existing stores increased visits 5% and spend per visit 7%. Which business is in a better position, and why?',
      placeholder: 'Think about what each growth source tells you about demand, efficiency, and sustainability...',
      modelAnswer:
        'Chain B is in a much better position. Its growth is entirely organic — existing stores attracted more customers who spent more per visit. This signals genuine demand: people are choosing to come more often and buy more when they\'re there. No new stores needed means no new rent, no construction costs, no new staff hiring — the growth is almost pure profit. Chain A\'s growth is all from new stores — the existing business is flat, meaning the brand isn\'t getting stronger, customers aren\'t visiting more or spending more. A opened 50 locations to grow 12%, but each new store costs hundreds of thousands in buildout. If the core locations aren\'t improving, what makes you think 50 new ones will be different? Chain A is buying growth; Chain B is earning it. When a recession hits, B\'s existing stores will stay resilient. A\'s new stores, without proven demand, may become liabilities.',
      strongReasoningIncludes: [
        'Identifies that organic same-store growth (visits + spend) is fundamentally stronger than growth from new locations',
        'Explains WHY — organic growth is cheaper, signals real demand, and drops more profit to the bottom line',
        'Considers what happens under stress (recession) and which model is more fragile',
      ],
    },
  ],
  takeaways: [
    'Revenue is an output. Decompose it into inputs (stores × visits × spend) to understand what\'s REALLY happening.',
    'The same headline number can hide completely different stories. A 3% revenue decline can mask a 5% demand decline offset by store expansion.',
    'Growth quality matters: organic > acquired, customer expansion > new acquisition, market share gains > riding a rising tide.',
    'When a CEO says "30% growth," ask WHERE it came from. If most of it is acquisitions and the core is declining, the growth is a cover-up.',
  ],
  completionMessages: {
    perfect: 'Perfect. You can now see through headline numbers to find the real drivers — a skill most investors never develop.',
    great: 'Strong work. Understanding the difference between growth sources is one of the most valuable analytical skills in investing.',
    good: 'Good start. Remember: always decompose revenue into its inputs. The headline number is the symptom — the drivers are the diagnosis.',
    low: 'Worth revisiting. Revenue decomposition is essential — it\'s how you tell the difference between real growth and manufactured growth.',
  },
};
