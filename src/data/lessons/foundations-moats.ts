import { Castle, Eye, TrendingUp, Zap, Search, Shield } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsMoatsLesson: Lesson = {
  id: 'foundations-moats',
  emoji: '🏰',
  title: 'What Keeps Winners Winning',
  subtitle: 'Why Google has had 90% search share for 20 years — and Uber might lose theirs overnight',
  description:
    'Some companies dominate their market for decades. Others have 80% market share and lose it in 3 years. The difference is the moat — a structural advantage that competitors can\'t copy. This lesson teaches you to tell real moats from fake ones, and why some moats strengthen while others erode.',
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['moats'],
  keyFacts: [],
  topics: [
    { label: 'The four types of real moats', icon: Castle },
    { label: 'Real vs fake competitive advantages', icon: Eye },
    { label: 'Why some moats strengthen and others erode', icon: TrendingUp },
    { label: 'How moats affect what you should pay', icon: Shield },
  ],
  steps: [
    // Hook with a counterintuitive estimation
    {
      kind: 'estimate',
      topic: 'The Moat Premium',
      topicIcon: Castle,
      context:
        'Two companies each earn $5 billion in annual profit.\n\nCompany A: a trendy fashion brand — no switching costs, customers follow trends, competitors copy designs within weeks. Margins are under constant pressure.\n\nCompany B: an enterprise software company — customers sign 3-year contracts, migrating to a competitor takes 18 months of engineering work, and 95% of customers renew.\n\nInvestors value each dollar of profit differently based on how DURABLE it is.',
      question: 'If Company A (no moat) trades at 12x earnings ($60B), roughly what multiple do you think investors pay for Company B (strong moat)?',
      answer: 30,
      tolerance: 10,
      unit: 'x',
      hint: 'How much more would you pay for profit that\'s nearly guaranteed to still be there in 10 years?',
      reveal:
        'About 25-35x earnings ($125-175B). That\'s a 2-3x premium for the SAME profit — because Company B\'s profit is durable. With 95% renewal rates and 18-month switching costs, next year\'s revenue is almost guaranteed. Company A could lose half its customers to the next fashion trend. The moat doesn\'t change what the company earns — it changes how LONG investors believe it will keep earning.',
      takeaway: 'A moat doesn\'t make a company more profitable today — it makes today\'s profits more likely to LAST. Investors pay 2-3x more for durable profits than fragile ones.',
    },

    // Decide with genuine ambiguity
    {
      kind: 'decide',
      topic: 'Is This a Real Moat?',
      topicIcon: Eye,
      context:
        'Uber has ~70% of the US ride-sharing market. Sounds dominant. But consider:\n\n- Drivers can (and do) drive for both Uber and Lyft simultaneously\n- Riders switch between apps in seconds based on price\n- There are no long-term contracts — every ride is a new decision\n- Uber\'s market share in most international markets is lower and declining\n\nCompare to Google Search with 90%+ market share:\n- Every search you do makes Google\'s results slightly better (data advantage)\n- Advertisers go where the users are → users go where the results are (network effect)\n- The Chrome browser, Android phones, and default search deals keep users in Google\'s ecosystem',
      question: 'Uber has 70% market share but Google has 90%. Which has the stronger moat?',
      options: [
        'Uber — 70% market share in a fast-growing market means they\'re winning',
        'Google — its advantages (data, network effects, defaults) get stronger as it gets bigger',
        'Both have strong moats since they both dominate their markets',
        'Neither — market share can change quickly for both companies',
      ],
      correctIndex: 1,
      punchline:
        'Google\'s moat strengthens over time — more users → better data → better results → more users. This is a virtuous cycle. Uber\'s "moat" is really just subsidized market share — there\'s nothing stopping a rider from switching apps in 10 seconds. Market share without structural lock-in is a temporary lead, not a moat.',
      wrongNudges: [
        'Market share is not a moat — it\'s the RESULT of a moat (or just marketing spend). Uber\'s 70% share is maintained by low prices, not by anything that prevents customers from leaving.',
        '',
        'They dominate their markets for completely different reasons. Google dominates because switching is actually worse for users (inferior search results elsewhere). Uber dominates because they spend more on subsidies. Only one of those survives a price increase.',
        'Google\'s advantages are structural and self-reinforcing. They\'ve maintained 90%+ for 20 years. Uber\'s share fluctuates and is under constant competitive pressure. These are not the same.',
      ],
      takeaway: 'Market share is not a moat. A moat is what PREVENTS competitors from taking your customers. Uber\'s riders can switch in 10 seconds. Google\'s users literally get worse results if they leave. That structural difference is everything.',
    },

    // Drill: identify the moat type, escalating difficulty
    {
      kind: 'drill',
      topic: 'Name the Moat',
      topicIcon: Zap,
      intro: 'Match each company to its primary moat type. The four real moats: switching costs, network effects, brand, and scale. But some of these are trickier than they look.',
      prompts: [
        {
          setup: 'Visa processes 65% of US credit card transactions. More cardholders → more merchants accept Visa → more people want Visa cards.',
          left: { label: 'Network effects', sublabel: 'more users = more value' },
          right: { label: 'Scale', sublabel: 'size advantage' },
          correct: 'left',
          flash: 'Classic network effect. Every new Visa user makes the network more valuable for merchants, and every new merchant makes it more valuable for users. This is nearly impossible to replicate — you can\'t build a payment network without both sides.',
        },
        {
          setup: 'Costco negotiates prices 15-20% below competitors because it buys in such enormous volume that suppliers can\'t say no.',
          left: { label: 'Brand', sublabel: 'consumer loyalty' },
          right: { label: 'Scale', sublabel: 'buying power' },
          correct: 'right',
          flash: 'Costco\'s moat is scale — buying $250B in goods gives negotiating leverage no smaller competitor can match. A startup can\'t walk into Procter & Gamble and demand the same prices. This advantage widens as Costco grows.',
        },
        {
          setup: 'Salesforce CRM stores 10 years of a company\'s customer data, customized workflows, and integrations with 50 other tools. Switching takes 12-18 months.',
          left: { label: 'Switching costs', sublabel: 'painful to leave' },
          right: { label: 'Network effects', sublabel: 'more users = more value' },
          correct: 'left',
          flash: 'Switching costs. It\'s not that Salesforce is the best CRM — it\'s that leaving is so painful that companies stay for decades. 10 years of data, custom workflows, trained employees, and integrations all have to be rebuilt from scratch.',
        },
        {
          setup: 'Coca-Cola spends $4B/year on marketing. When people think "cola," they think Coke — even in countries where they\'ve never tried it. But health trends are driving declining soda consumption worldwide.',
          left: { label: 'Strong moat', sublabel: '130-year brand' },
          right: { label: 'Eroding moat', sublabel: 'brand losing relevance' },
          correct: 'right',
          flash: 'Tricky one. Coca-Cola has one of the strongest brands in history — but brand moats CAN erode. Health consciousness is slowly reducing soda demand in developed markets. The brand still matters in emerging markets, but in the US and Europe, the moat is narrowing. Not all moats are permanent.',
        },
        {
          setup: 'A hot new restaurant chain has 200 locations, celebrity chef endorsement, and lines around the block. They have no proprietary recipes, no long-term leases in premium locations, and no technology advantage.',
          left: { label: 'Real moat', sublabel: 'proven demand and growth' },
          right: { label: 'No moat', sublabel: 'popularity ≠ defensibility' },
          correct: 'right',
          flash: 'No moat. Popularity, celebrity endorsements, and long lines are DEMAND signals, not moats. A moat is what prevents competitors from replicating your success. Without proprietary recipes, exclusive locations, or technology, any well-funded competitor can open a similar restaurant next door.',
        },
      ],
      takeaway: 'Four real moats: switching costs (painful to leave), network effects (more users = more value), brand (trust built over decades), and scale (cost advantages from size). But even real moats can erode — brand relevance fades, technology disrupts scale advantages.',
    },

    // Tap: analyze a company's claimed moats
    {
      kind: 'tap',
      topic: 'Real vs. Aspirational',
      topicIcon: Search,
      intro: 'A startup is pitching investors on their "unbreakable competitive advantages." Read the pitch and tap the moats that are REAL (structural and hard to replicate) vs. those that are fake or aspirational.',
      passage: [
        { type: 'text', value: '"Our competitive advantages: ' },
        { type: 'chip', value: 'We were first to market — launched 2 years before any competitor', signal: false, feedback: 'First-mover advantage is one of the most overrated "moats." MySpace was first. Friendster was first. BlackBerry was first. Being first only matters if you build switching costs or network effects while you have the lead. Otherwise, a better-funded competitor catches up.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Our platform hosts 50,000 merchants and 2 million buyers who transact with each other', signal: true, feedback: 'THIS is a real network effect. 50,000 merchants attract buyers, and 2 million buyers attract more merchants. A new competitor would need to build BOTH sides simultaneously, which is extremely difficult. This is the same moat that makes eBay, Airbnb, and Uber hard to displace.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Our team includes 3 Stanford PhDs and a former Google VP', signal: false, feedback: 'Impressive resumes are not a moat. People leave, get poached, or start competing companies. A moat must exist independent of specific individuals. Google\'s moat isn\'t its employees — it\'s its data and network effects.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Average merchant has 18 months of transaction data and custom integrations on our platform', signal: true, feedback: 'Real switching costs. 18 months of data + custom integrations means leaving requires rebuilding everything. This is the same moat Salesforce and AWS use — make leaving so painful that customers stay by default.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'We have the best user interface in the industry — everyone says so', signal: false, feedback: 'A better UI is not a moat — it\'s a competitive advantage that lasts until someone makes a better one. UIs are copied in months. A moat must be STRUCTURAL, not just a feature that can be replicated.' },
        { type: 'text', value: '. ' },
        { type: 'chip', value: 'Our proprietary algorithm improves with every transaction — 500 million data points and growing', signal: true, feedback: 'Data that improves the product creates a compounding advantage. Each transaction makes the algorithm better, which attracts more users, which generates more data. A new competitor starts with zero data points. This is Google\'s search moat applied to a marketplace.' },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 3,
      reveal:
        'Three real moats: a two-sided network effect (merchants + buyers), switching costs (18 months of data and integrations), and a compounding data advantage (500M data points improving the algorithm). Three fake moats: first-mover advantage (easily lost), team pedigree (people leave), and better UI (easily copied). Real moats are structural and self-reinforcing. Fake moats are temporary advantages that competitors can replicate.',
      takeaway: 'Test every claimed moat with one question: "If a competitor with unlimited money tried to copy this in 2 years, could they?" If yes, it\'s not a moat. Networks, switching costs, and compounding data advantages can\'t be copied with money. UIs, teams, and first-mover timing can.',
    },

    // Thinking step
    {
      kind: 'thinking',
      prompt: 'Pick a company you use every day (Google, Apple, Amazon, Netflix, Spotify, Uber, etc.). What is its moat? Is that moat getting STRONGER or WEAKER over time? What would need to happen for a competitor to take significant market share from them?',
      placeholder: 'Name the company, identify its specific moat type (switching costs, network effects, brand, or scale), and explain whether it\'s strengthening or eroding...',
      modelAnswer:
        'Apple\'s moat is ecosystem switching costs — and it\'s getting STRONGER. Your iPhone connects to your Apple Watch, AirPods, MacBook, iPad, and HomePod. Your photos, messages, and purchases are stored in iCloud. Your apps, subscriptions, and payment methods are tied to your Apple ID. Switching to Android means losing all of these connections. Every new Apple device you buy makes leaving MORE painful, not less. A competitor would need to simultaneously build: a phone OS, an app store with millions of apps, a smartwatch platform, wireless earbuds, a laptop OS, cloud storage, and a payment system — and convince hundreds of millions of people to switch all of them at once. Samsung makes great phones, but they can\'t replicate the ecosystem. The moat IS the ecosystem, and it strengthens with every product Apple adds. The only real threat is regulatory — governments forcing Apple to open up its ecosystem, reduce App Store fees, or allow sideloading. Technology won\'t break this moat. Regulation might.',
      strongReasoningIncludes: [
        'Identifies a specific moat type, not just "they\'re a good company"',
        'Explains whether the moat is strengthening or weakening with evidence',
        'Identifies what would need to happen for a competitor to break through',
      ],
    },
  ],
  takeaways: [
    'A moat is a structural advantage that prevents competitors from taking your customers. Market share without a moat is temporary.',
    'Four real moats: switching costs (painful to leave), network effects (more users = more value), brand (trust over decades), scale (cost advantages from size).',
    'Some moats strengthen over time (network effects, data advantages) and some erode (brand relevance). Not all moats are permanent.',
    'The moat test: "If a competitor with unlimited money tried to replicate this in 2 years, could they?" If yes, it\'s not a real moat.',
  ],
  completionMessages: {
    perfect: 'Perfect. You can now distinguish real competitive advantages from marketing claims — one of the most valuable skills in investing.',
    great: 'Strong work. Understanding moats is what separates long-term investors from people who chase hot stocks.',
    good: 'Good foundation. Remember: the moat isn\'t what a company DOES well — it\'s what prevents competitors from doing the same thing.',
    low: 'Worth revisiting. Moats are the single biggest determinant of whether a company\'s profits will last or evaporate.',
  },
};
