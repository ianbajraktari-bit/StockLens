import { Shield, Zap, ArrowUpRight, Lightbulb, Flag, Scale } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsOptionsLesson: Lesson = {
  id: 'foundations-options',
  emoji: '📜',
  title: 'Options Basics',
  subtitle: 'Calls, puts, and what they actually do — without the day-trader mythology',
  description:
    "Options are the most misunderstood instrument in investing. Half of investors think they're gambling tools. The other half think they're magic income machines. Both are wrong. Options are contracts — the right, but not the obligation, to buy or sell a stock at a fixed price by a fixed date. This lesson teaches you what calls and puts really are, how hedging and income strategies work, and when options belong nowhere near your portfolio.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['risk'],
  keyFacts: [],
  topics: [
    { label: 'Calls and puts — rights, not obligations', icon: Scale },
    { label: 'Using options to hedge downside risk', icon: Shield },
    { label: 'Covered calls — the income strategy everyone talks about', icon: ArrowUpRight },
    { label: 'When options are gambling, not investing', icon: Flag },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Decide: what is a call option?
    //
    // Why a decide first: anchors the core concept (it's a CONTRACT,
    // not a stock) in one concrete scenario before abstractions.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'What an Option Actually Is',
      topicIcon: Scale,
      context:
        'Apple is trading at $200. You buy a "call option" that gives you the right to buy Apple at $210 anytime in the next 3 months. The option costs $5 per share (options trade in contracts of 100 shares, so $500 total).\n\nThree months later, one of two things happens:\n• Apple is $250 → you exercise: buy at $210, immediately worth $250. $40 profit per share. After the $5 cost: $35 net.\n• Apple is $180 → you walk away. The option expires worthless. You lose the $5 per share.',
      question: 'What did you actually buy when you paid $5 for the call option?',
      options: [
        '100 shares of Apple at a discount',
        'A piece of Apple the company',
        'The right — but not the obligation — to buy Apple at $210 before the option expires. You can use it or let it die',
        'A bet that Apple will crash',
      ],
      correctIndex: 2,
      punchline:
        'An option is a contract, not a share. A call gives you the RIGHT (not obligation) to buy a stock at a set "strike" price by a set date. If the stock rises above the strike, the option has value — you can exercise or sell it. If not, it expires worthless and you lose only what you paid (the "premium"). Your downside is capped at the premium; your upside is theoretically unlimited.',
      wrongNudges: [
        'You don\'t own any Apple shares. You own a contract. The option only turns into shares if you exercise it — and you only exercise if it\'s profitable to do so.',
        'Options have no claim on the company. No voting rights, no dividends, no ownership. They\'re derivative contracts between two parties — the option seller and you.',
        '',
        'Calls are bullish — they profit when the stock RISES above the strike. The bearish version is a put.',
      ],
      takeaway: 'A call option is the right to buy a stock at a fixed price by a fixed date. You pay a premium upfront. If the stock rises above the strike, the option pays off. If not, you lose only the premium.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Drill: calls vs. puts
    //
    // Why a drill: puts are the mirror of calls; a drill forces
    // rapid classification and cements the directional intuition.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'Calls vs. Puts',
      topicIcon: Zap,
      intro: 'Calls profit when the stock rises. Puts profit when the stock falls. For each scenario, pick the option the investor should buy.',
      prompts: [
        {
          setup: 'You think Nvidia will rip higher after earnings in 2 weeks.',
          left: { label: 'Buy a call', sublabel: 'profits if stock rises' },
          right: { label: 'Buy a put', sublabel: 'profits if stock falls' },
          correct: 'left',
          flash: 'Calls are the bullish bet. If Nvidia rises above the strike, your call gains value. If it doesn\'t, you lose the premium.',
        },
        {
          setup: 'You own 500 shares of Tesla and are worried about a crash over the next 3 months. You want protection.',
          left: { label: 'Buy a call' },
          right: { label: 'Buy a put', sublabel: 'protects against drops' },
          correct: 'right',
          flash: 'Puts are like insurance. If Tesla crashes, the put gains value and offsets your losses. If Tesla rises, you lose the put premium but your shares gain — a small cost for peace of mind.',
        },
        {
          setup: 'You think a bank stock is massively overvalued and will collapse when the next quarter disappoints.',
          left: { label: 'Buy a call' },
          right: { label: 'Buy a put', sublabel: 'pays off when stock drops' },
          correct: 'right',
          flash: 'Puts profit from price declines. If the stock falls below the strike, the put gains value. This is how you speculate on drops without short-selling.',
        },
        {
          setup: 'You believe Google will grind higher slowly over 6 months. You already own 1,000 shares. You want to earn income on the position.',
          left: { label: 'Sell a call', sublabel: 'collects premium now' },
          right: { label: 'Buy a put' },
          correct: 'left',
          flash: 'Selling a call ("covered call") collects the premium upfront. If Google stays below your strike, you keep the premium and your shares. The tradeoff: if Google rockets, you\'re forced to sell at the strike — capping your upside.',
        },
      ],
      takeaway: 'Calls = bullish (profit from rises). Puts = bearish or protective (profit from drops, or hedge existing shares). Buying either costs a premium. Selling either collects a premium — but obligates you to act if the option is exercised.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: hedging cost
    //
    // Why an estimate: makes hedging concrete — options as insurance
    // costs real money, and the user should feel the drag.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Cost of Protection',
      topicIcon: Shield,
      context:
        'You own 100 shares of Microsoft at $400 ($40,000 position). You\'re worried about a crash over the next 6 months. You buy a 6-month put with a $380 strike — this means if Microsoft falls below $380, the put offsets your losses below that level.\n\nThe put costs $12 per share = $1,200 total for the 100-share contract.\n\nIf Microsoft is flat at $400 when the put expires, the put is worthless.',
      question: 'What percentage of your $40,000 position did the hedge cost?',
      answer: 3,
      tolerance: 0.5,
      unit: '%',
      hint: '$1,200 ÷ $40,000',
      reveal:
        '$1,200 ÷ $40,000 = 3% — the cost of the hedge. This is the "insurance premium" for 6 months of downside protection below $380. Over a full year, that\'s ~6% drag. Protective puts are expensive. They\'re worth it only in specific cases: short holding periods, positions you can\'t afford to lose, or during unusually risky periods. Buying puts continuously is how investors quietly bleed returns — the insurance usually costs more than the crashes it prevents.',
      takeaway: 'Hedging with puts isn\'t free. A typical put costs 2-5% of the position value per 6 months. Continuous hedging erodes long-term returns; selective hedging (around known risks like earnings or an overextended position) can be worthwhile.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: covered call red flags
    //
    // Why a tap: covered calls are sold everywhere as "free income."
    // They have real tradeoffs that retail investors often miss.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'The Covered Call Trap',
      topicIcon: Flag,
      intro: 'A financial influencer pitches covered calls as "free income." Tap the claims that hide real tradeoffs.',
      passage: [
        { type: 'text', value: 'The pitch: "Sell covered calls on your stocks to collect premium income. ' },
        {
          type: 'chip',
          value: 'You own the shares anyway, so the income is free money',
          signal: true,
          feedback: 'The tradeoff is real. You\'re selling your upside. If the stock rockets 30%, you\'re forced to sell at your strike price — capturing maybe 5% of that gain instead of 30%. The "free" income is really you being paid to cap your upside.',
        },
        { type: 'text', value: '. On a $50,000 stock position, ' },
        {
          type: 'chip',
          value: 'you can generate $300-500 per month in premium',
          signal: false,
          feedback: 'The numbers are roughly accurate — 6-12% annualized premium is typical. The headline yield is real. It\'s the risk profile that\'s misleading, not the income itself.',
        },
        { type: 'text', value: '. Even better, ' },
        {
          type: 'chip',
          value: 'if the stock goes up, you just sell another call and collect more premium',
          signal: true,
          feedback: 'This is true only if your shares aren\'t called away. If the stock closes above your strike at expiration, the buyer exercises — your shares are gone at the strike price, and you owe capital gains tax on the forced sale. "Just sell another call" misses the forced-sale scenario entirely.',
        },
        { type: 'text', value: '. Worst case, ' },
        {
          type: 'chip',
          value: 'if the stock drops, you still own the shares and kept the premium',
          signal: true,
          feedback: 'Covered calls offer almost no downside protection. If the stock drops 20%, the premium you collected (maybe 1-2% per month) barely offsets the loss. You\'re still exposed to 18%+ of downside. The strategy monetizes upside — it does not protect downside.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Works best on stocks you\'re happy to sell at the strike price',
          signal: false,
          feedback: 'This is actually sound advice. The ideal covered call target is a stock you\'d be willing to sell anyway at the strike — so if it\'s called away, you haven\'t lost anything you cared about.',
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 2,
      reveal:
        'The "free money" frame hides three real costs: (1) You\'re capping your upside — in big rallies, you miss most of the gain. (2) Forced sales trigger taxable events. (3) The strategy offers almost no downside protection — the premium is a small cushion, not insurance. Covered calls can make sense on stocks you\'re already planning to trim at the strike price, but they\'re not "free income."',
      takeaway: 'Covered calls trade upside for income. They work when the stock stays flat-to-slightly-up, and hurt badly in big rallies. They\'re not insurance against crashes. Know what you\'re selling before you sell it.',
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Decide: options as gambling vs. investing
    //
    // Why a decide: the final judgment call — when options serve
    // an investor, and when they're just leveraged bets.
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Tools vs. Lottery Tickets',
      topicIcon: Lightbulb,
      context:
        'Four investors use options differently:\n\n• Alex buys weekly call options on meme stocks hoping for 10x returns. Most expire worthless.\n• Priya buys 6-month puts on her largest stock position before a known industry disruption.\n• Marcus sells covered calls on shares he already plans to sell above the strike anyway.\n• Dana buys out-of-the-money calls on 5 different tech stocks every month "in case something pops."',
      question: 'Which investors are using options as tools vs. gambling?',
      options: [
        'All four are investing — options are always a valid tool',
        'All four are gambling — options are always speculation',
        'Priya and Marcus are using options as tools (hedging + disciplined income); Alex and Dana are gambling — buying short-dated, out-of-the-money options is closer to lottery tickets than investing',
        'Alex is the smart one — big upside with limited downside',
      ],
      correctIndex: 2,
      punchline:
        'Options as tools have a specific purpose: hedge a known risk (Priya) or monetize a planned exit (Marcus). Options as gambling skip the purpose: buying lottery tickets (Alex, Dana) with negative expected value because you find the upside exciting. The common thread: if you can\'t articulate a specific investment purpose for the contract, you\'re almost certainly gambling — and most retail option "investors" lose money over time for exactly this reason.',
      wrongNudges: [
        'Options become tools only when they serve a purpose tied to an existing position or risk. Alex and Dana are buying lottery tickets — the fact that they\'re using options doesn\'t make it investing.',
        'Options are a legitimate part of many sophisticated strategies. But they require purpose. Used blindly, they destroy capital.',
        '',
        'Alex\'s "big upside with limited downside" feels asymmetric but hides that 90%+ of short-dated out-of-the-money options expire worthless. The expected value is deeply negative.',
      ],
      takeaway: 'Options are tools when they serve a specific job: hedging a known risk, monetizing a planned exit, or generating income on shares you\'d sell anyway. Options are gambling when they\'re just bets on direction with no connection to a real position.',
    },
  ],
  takeaways: [
    'A call is the right to buy at a strike price by a date. A put is the right to sell. Both cost a premium — if the trade doesn\'t work, the premium is what you lose.',
    'Puts are insurance. They protect downside but cost 2-5% of position value every 6 months. Continuous hedging quietly erodes long-term returns.',
    'Covered calls trade upside for income. They work on flat-to-rising stocks you\'re willing to sell at the strike. They offer almost no protection in crashes.',
    'Options are tools when they have a specific job (hedging a known risk, exiting a position, generating income on shares). They\'re gambling when they\'re just leveraged direction bets.',
    'You can ignore options entirely and still be a great investor. Most successful long-term investors never touch them.',
  ],
  completionMessages: {
    perfect: 'Sharp. You now understand options well enough to decide — with open eyes — whether they belong in your process.',
    great: 'Strong. The key distinction: options as tools (with a job) vs. options as lottery tickets (direction bets). You can tell the difference now.',
    good: 'Solid foundation. The rest is about disciplined use — and for most investors, ignoring options entirely is a valid choice.',
    low: 'Worth revisiting. Options have ended more portfolios than they\'ve built. Literacy here matters even if you never trade them.',
  },
};
