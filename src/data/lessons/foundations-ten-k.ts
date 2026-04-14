import { FileText, AlertTriangle, Search, BookOpen, Scale, Target } from 'lucide-react';
import type { Lesson } from './types';

export const foundationsTenKLesson: Lesson = {
  id: 'foundations-ten-k',
  emoji: '📑',
  title: 'Reading a 10-K',
  subtitle:
    'The one document every serious investor learns to read — and where the real story lives',
  description:
    "Every public company in the US publishes a 10-K once a year: a 100-200 page legal document the SEC requires them to file. It has the real numbers, the real risks, and (if you know where to look) the management\'s honest read of their own business. You\'ll learn which sections matter, where the traps are hidden, and how to extract 80% of the insight in 30 minutes.",
  estimatedMinutes: 3,
  dataAsOf: '',
  tier: 'foundations-2',
  skills: ['business_drivers', 'risk', 'valuation'],
  keyFacts: [],
  topics: [
    { label: 'What a 10-K is and why it\'s different from a press release', icon: FileText },
    { label: 'The 4 sections that matter — and the ones you can skim', icon: BookOpen },
    { label: 'How to read "Risk Factors" without drowning in boilerplate', icon: AlertTriangle },
    { label: 'Spotting the real story in MD&A', icon: Search },
  ],
  steps: [
    // ─────────────────────────────────────────────────────────────────
    // 1. Decide: What a 10-K actually is
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'What Is a 10-K?',
      topicIcon: FileText,
      context:
        "Apple publishes two very different documents after its fiscal year ends:\n\n1. A press release — 8 pages of highlights, charts, and management quotes.\n2. A 10-K filing — 80+ pages filed directly with the SEC, legally required, legally reviewed.\n\nBoth describe the same year. Only one can lie to you.",
      question: "The main reason a 10-K is more useful than a press release is:",
      options: [
        "It has more pictures and easier formatting",
        "It\'s a legal document filed with the SEC — exaggerating, cherry-picking, or omitting material facts can lead to fraud charges, so the content is carefully reviewed by lawyers and auditors",
        "It\'s published more frequently than press releases",
        "It only contains good news about the company",
      ],
      correctIndex: 1,
      punchline:
        "A press release is marketing. A 10-K is a sworn document. The CEO and CFO personally sign it, attesting that it\'s accurate — under penalty of federal law. That\'s why risks are fully disclosed, accounting is audited, and every material business fact is on the record. It\'s the closest thing to \"the truth\" a public company produces.",
      wrongNudges: [
        "10-Ks are deliberately plain — minimal formatting, no photos. That\'s part of why they\'re reliable: you\'re reading content, not marketing.",
        '',
        "10-Ks come out once a year. The quarterly equivalent is the 10-Q. Companies don\'t publish more 10-Ks; they publish one per fiscal year.",
        "10-Ks must legally disclose bad news too — that\'s the whole point. The \"Risk Factors\" section is often 20+ pages of things that could go wrong.",
      ],
      takeaway:
        "A 10-K is the only investor document backed by federal law. Press releases are marketing; 10-Ks are sworn testimony. Always prefer the 10-K when you\'re making a real investment decision.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. Drill: Which section answers which question?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'drill',
      topic: 'The Four Sections That Matter',
      topicIcon: BookOpen,
      intro:
        "A 10-K is long, but only a few sections actually matter for investors. Tap the section you'd turn to for each question.",
      prompts: [
        {
          setup: "\"What does this company actually sell and how does it make money?\"",
          left: { label: 'Item 1: Business', sublabel: 'the company\'s own description of its operations' },
          right: { label: 'Item 9: Accountant Changes', sublabel: 'disclosures about auditors' },
          correct: 'left',
          flash: "Item 1 is where the company explains — in its own words — what it does, its products, its markets, and its strategy. Always start here.",
        },
        {
          setup: "\"What could realistically go wrong with this business?\"",
          left: { label: 'Item 1A: Risk Factors', sublabel: 'required disclosure of material risks' },
          right: { label: 'Item 2: Properties', sublabel: 'real estate owned by the company' },
          correct: 'left',
          flash: "Item 1A is where management (and their lawyers) list every material risk they can think of. Much is boilerplate, but buried in it are the real, company-specific threats.",
        },
        {
          setup: "\"How did the business actually perform this year, in management's own narrative?\"",
          left: { label: 'Item 7: MD&A', sublabel: 'Management\'s Discussion & Analysis' },
          right: { label: 'Item 5: Market for Stock', sublabel: 'share price history' },
          correct: 'left',
          flash: "MD&A (Item 7) is management\'s written commentary on the year — revenue drivers, margin changes, segment performance, and forward outlook. This is where the real story lives.",
        },
        {
          setup: "\"What are the actual numbers — revenue, profit, cash, debt?\"",
          left: { label: 'Item 8: Financial Statements', sublabel: 'audited P&L, balance sheet, cash flow' },
          right: { label: 'Item 3: Legal Proceedings', sublabel: 'ongoing lawsuits' },
          correct: 'left',
          flash: "Item 8 contains the three audited financial statements — the income statement, balance sheet, and cash flow statement — plus all the detailed footnotes that explain them.",
        },
        {
          setup: "\"Is the company facing any major lawsuits that could hurt earnings?\"",
          left: { label: 'Item 3: Legal Proceedings', sublabel: 'required disclosure of material litigation' },
          right: { label: 'Item 1: Business', sublabel: 'business description' },
          correct: 'left',
          flash: "Item 3 lists material lawsuits. Most public companies have some ongoing litigation; the question is whether any single case could move the needle.",
        },
      ],
      takeaway:
        "The four sections to master: Item 1 (Business), Item 1A (Risk Factors), Item 7 (MD&A), and Item 8 (Financial Statements). Read those four and you have 90% of what matters. Skim the rest.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. Estimate: How much of a 10-K is boilerplate?
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'estimate',
      topic: 'The Boilerplate Problem',
      topicIcon: Scale,
      context:
        "A typical large-cap 10-K is ~100,000 words. Most investors give up when they see the length.\n\nBut a huge chunk is template language used by every company: disclaimers, legal boilerplate, formatting. The actual company-specific content — the parts that distinguish this business from every other — is much shorter.",
      question: "Roughly what percentage of a typical 10-K is unique, company-specific content worth reading?",
      answer: 25,
      tolerance: 10,
      unit: '%',
      hint: "The rest is boilerplate shared across most filings",
      reveal:
        "Roughly 20-30% is genuinely company-specific. The other 70%+ is risk-factor boilerplate (\"our business is subject to economic conditions\"), accounting policy templates, and legal language that\'s nearly identical across every filing. Learn to recognize the boilerplate and skip it — and a 200-page document becomes a 50-page read.",
      takeaway:
        "A 10-K looks overwhelming, but 70%+ is template. Train your eye to skip the boilerplate and extract the 25% that actually distinguishes this business from its peers.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. Tap: Find the real signal in MD&A
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'tap',
      topic: 'Reading MD&A',
      topicIcon: Search,
      intro:
        "Here's a passage from the MD&A of a fictional SaaS company\'s 10-K. Tap the sentences that carry real investor signal — not the boilerplate.",
      passage: [
        { type: 'text', value: '"Revenue increased 12% year-over-year to $2.4B. ' },
        {
          type: 'chip',
          value: 'Net revenue retention declined from 118% to 104%',
          signal: true,
          feedback:
            "Huge signal. Net revenue retention measures how existing customers change their spending. Dropping from 118% to 104% means customers are upgrading less and downgrading/churning more. This is the leading indicator of slowing growth.",
        },
        { type: 'text', value: ', driven by ' },
        {
          type: 'chip',
          value: 'macroeconomic pressures impacting our customers',
          signal: false,
          feedback:
            "Boilerplate. Every single company blames \"macro\" when results soften. By itself this phrase tells you nothing — the specific numbers (like NRR dropping 14 points) are what matter.",
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Operating margin compressed 400 basis points to 18%',
          signal: true,
          feedback:
            "Strong signal. A 4-percentage-point margin drop in one year is significant. Now the question becomes: is this temporary (one-time investment) or structural (customers demanding lower prices)?",
        },
        { type: 'text', value: ' due to ' },
        {
          type: 'chip',
          value: 'continued investment in strategic growth initiatives',
          signal: false,
          feedback:
            'Classic boilerplate. "Strategic growth initiatives" is what executives say when they\'d rather not be specific. The number (400bps margin drop) is real; the explanation is vague.',
        },
        { type: 'text', value: '. ' },
        {
          type: 'chip',
          value: 'Three of our top ten customers did not renew their contracts this year',
          signal: true,
          feedback:
            "Critical signal — and an unusually candid one. Losing 30% of top-10 customers is a major yellow flag about product-market fit or competitive pressure. Most 10-Ks would bury this in a footnote.",
        },
        { type: 'text', value: ' We remain ' },
        {
          type: 'chip',
          value: 'confident in our long-term strategy and market opportunity',
          signal: false,
          feedback:
            "Pure management boilerplate. Every CEO in history has said this. It has no informational value — it\'s in every 10-K, every earnings call, every press release.",
        },
        { type: 'text', value: '."' },
      ],
      requiredSignals: 3,
      reveal:
        "The real story in this passage: growth is slowing dramatically (NRR down 14 points), margins are compressing, and three major customers left. Management frames it with reassuring language, but the numbers tell you growth has stalled and competitive pressure is rising. This is how MD&A works — the signal is in the numbers and specifics, not the commentary around them.",
      takeaway:
        "Specific numbers are signal. Generic explanations are boilerplate. When management gives you a hard number AND a vague reason, trust the number. When they give you vibes instead of numbers, something\'s being hidden.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. Decide: Reading Risk Factors smart
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'Risk Factors — Signal vs. Noise',
      topicIcon: AlertTriangle,
      context:
        "The Risk Factors section of a 10-K is often 15-25 pages long. Lawyers write it to disclose every conceivable risk — from cyberattacks to pandemics to interest rates — so the company can\'t later be accused of hiding something.\n\nThe result: most of it is useless to investors. But not all of it.",
      question: "Which risk-factor content is actually worth paying attention to?",
      options: [
        "Every risk listed — if they disclosed it, it\'s important",
        "Generic risks that apply to every company (\"cyberattacks could disrupt operations\")",
        "Company-specific risks that are new or changed from last year\'s filing — especially ones unique to this business\'s structure, concentration, or regulatory position",
        "Only the risks related to lawsuits",
      ],
      correctIndex: 2,
      punchline:
        "Pros compare this year\'s Risk Factors to last year\'s. New risks (or reworded ones) signal what changed in management\'s actual thinking. Company-specific risks — like \"68% of our revenue comes from one customer\" or \"we operate in markets where new regulations are pending\" — are gold. Generic risks (\"cyber threats exist\") are noise.",
      wrongNudges: [
        "Risks are listed exhaustively for legal protection, not because each is material. Reading every word would waste hours for minimal signal.",
        "Generic risks appear in every 10-K in America. They tell you nothing about this specific company.",
        '',
        "Lawsuits are in Item 3 (Legal Proceedings), not Item 1A (Risk Factors). Risk Factors cover broader business risks — concentration, regulation, competition, execution.",
      ],
      takeaway:
        "In Risk Factors, hunt for two things: (1) company-specific structural risks (customer concentration, regulatory exposure, key-person dependency), and (2) new or changed risk language compared to last year\'s filing. Everything else is legal boilerplate.",
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. Decide: The 30-minute 10-K read
    // ─────────────────────────────────────────────────────────────────
    {
      kind: 'decide',
      topic: 'The 30-Minute Read',
      topicIcon: Target,
      context:
        "You have 30 minutes to get a useful read on a company from its 10-K. You can\'t read the whole thing.",
      question: "The most efficient reading order is:",
      options: [
        "Start at page 1 and read linearly — cover to cover in summary",
        "Item 1 (Business, 10 min) → Item 7 MD&A (10 min) → Item 8 key financials (5 min) → Item 1A Risk Factors skim for company-specific + new risks (5 min)",
        "Jump to the footnotes in Item 8 — that\'s where they hide the bad stuff",
        "Read only the CEO\'s letter to shareholders",
      ],
      correctIndex: 1,
      punchline:
        "This order works because each section builds on the last. Item 1 tells you what the business is. MD&A explains how it performed THIS year. Item 8 shows the hard numbers. Risk Factors, read last and selectively, tells you what could break the thesis you\'ve formed. Most pros use roughly this sequence — you don\'t need to read every word to make a sound judgment.",
      wrongNudges: [
        "Reading linearly means spending the first 20 minutes on table-of-contents, company history, and irrelevant detail — before you ever reach what matters.",
        "Footnotes matter, but without reading MD&A first you won\'t know what to look for in them. Start with the narrative, then dig into the numbers.",
        "Most 10-Ks don\'t even include a CEO letter — that\'s part of the annual report, which is a separate marketing document. The 10-K itself is where the substance lives.",
      ],
      takeaway:
        "30-minute read: Business → MD&A → Financial Statements → Risk Factors skim. This sequence gives you 80% of the informed-investor view in one session. Do it for a company you own, and you\'re already doing more than 95% of retail investors.",
    },
  ],
  takeaways: [
    "A 10-K is the only investor document backed by federal law. Press releases are marketing; 10-Ks are sworn testimony — the most reliable source of truth a public company produces.",
    "Four sections matter: Item 1 (Business), Item 1A (Risk Factors), Item 7 (MD&A), Item 8 (Financial Statements). You can skim everything else.",
    "MD&A is where the real story lives. Learn to separate specific numbers (signal) from generic management commentary (noise).",
    "30-minute read: Business → MD&A → Financials → Risk Factors skim. That one habit puts you ahead of 95% of retail investors.",
  ],
  completionMessages: {
    perfect:
      "You can navigate a 10-K like an analyst now. This one skill — reading filings fluently — separates serious investors from everyone else. Go pull up a real 10-K and practice.",
    great:
      "Strong grasp of the anatomy of a 10-K. You know which sections matter, how to skim the boilerplate, and where to find the real story. That\'s 95% of the battle.",
    good:
      "Good start. Next step: pick a company you\'re interested in, open its most recent 10-K on SEC EDGAR, and spend 30 minutes on the four key sections. Practice beats theory here.",
    low:
      "Worth revisiting. Reading a 10-K is the single most important applied skill in investing — and most people never learn it. Come back to this lesson once you\'re comfortable with the concepts.",
  },
};
