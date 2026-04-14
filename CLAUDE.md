# StockLens — Claude Agent Guide

## Source of Truth

- **Primary branch:** `main` — always pull/sync from `origin/main` before starting work
- **Repository:** `ianbajraktari-bit/StockLens` on GitHub
- **Production deployment:** Vercel (auto-deploys from `main`)
- **Lesson count:** 35 lessons (25 foundations + 10 company deep dives) + Analyst Mode (10 seeded companies)
- **Architecture:** Step-based (`steps: LessonStep[]` with `kind: 'drill' | 'estimate' | 'decide' | 'tap' | 'thinking'`)

> **IMPORTANT:** Before making changes, run `git fetch origin main` and verify your local `main` matches remote. The codebase uses the step-based architecture (NOT the old `questions: QuizQuestion[]` format). If you see `QuizQuestion` anywhere, you are on a stale branch.

## What This Project Is

StockLens is a Duolingo-style app that teaches people how to think like investors. Not memorize facts — **think**. The app teaches users to form opinions on companies, weigh risks against valuations, and make investment decisions using real reasoning.

The core design principle: **every interaction should force the user to think, not just read.**

## Tech Stack

- React 19 + TypeScript (strict mode)
- Vite 8 with @vitejs/plugin-react
- Tailwind CSS 4 with custom dark theme (`src/index.css`)
- Framer Motion for animations
- Lucide React for icons
- React Router v6 for client-side routing
- localStorage for completion/score tracking (no backend, no accounts)
- Deployed on Vercel (`vercel.json` has SPA rewrite)

## Project Structure

```
src/
├── App.tsx                          # Router, ScrollToTop, ErrorBoundary wrapper
├── main.tsx                         # Entry point
├── index.css                        # Tailwind @theme (dark mode, custom colors)
├── components/
│   ├── ErrorBoundary.tsx            # React class error boundary with recovery UI
│   └── steps/
│       ├── DrillStep.tsx            # Binary choice drill (left/right taps)
│       ├── EstimateStep.tsx         # Numeric estimation with tolerance
│       ├── TapStep.tsx              # Signal-finding in text passages
│       ├── DecideStep.tsx           # Multiple choice with punchline reveal
│       └── ThinkingStepComponent.tsx # Free-response synthesis
├── pages/
│   ├── HomePage.tsx                 # Lesson grid, progress tracking, skills display
│   └── LessonRunner.tsx             # Intro → steps → completion state machine
├── lib/
│   └── progression.ts              # localStorage: completion, scores, skills tracking
└── data/
    └── lessons/
        ├── types.ts                 # LessonStep union, Lesson, Skill, LessonTier
        ├── index.ts                 # Barrel exports, allLessons array, getLessonById
        ├── foundations-market.ts    # "What Is the Stock Market?"
        ├── foundations-basics.ts    # "Follow the Money"
        ├── foundations-margins.ts   # "What a Business Keeps"
        ├── foundations-income.ts    # "Reading the Scoreboard"
        ├── foundations-recurring.ts # "Money That Comes Back"
        ├── foundations-drivers.ts   # "What Actually Drives a Business"
        ├── foundations-biases.ts    # "Your Brain vs. Your Portfolio"
        ├── foundations-moats.ts     # "What Keeps Winners Winning"
        ├── foundations-valuation.ts # "What Is a Stock Worth?"
        ├── foundations-expectations.ts # "The Expectations Game"
        ├── foundations-cashflow.ts  # "Cash vs. Profit"
        ├── foundations-risk.ts      # "Risk Is Not a Feeling"
        ├── foundations-debt.ts      # "Debt: Fuel or Fire?"
        ├── foundations-growth-value.ts # "Growth vs. Value"
        ├── foundations-returns.ts   # "Where the Profits Go"
        ├── foundations-portfolio.ts # "Building a Portfolio"
        ├── foundations-earnings.ts  # "Reading an Earnings Report"
        ├── foundations-selling.ts   # "When to Sell"
        ├── apple.ts                # Apple company lesson
        ├── nvidia.ts               # NVIDIA company lesson
        ├── costco.ts               # Costco company lesson
        ├── amazon.ts               # Amazon company lesson
        ├── microsoft.ts            # Microsoft company lesson
        ├── tesla.ts                # Tesla company lesson
        ├── google.ts               # Google company lesson
        └── netflix.ts              # Netflix company lesson
```

## Architecture — How It Works

### Data-Driven Lessons

All lesson content lives in typed data objects. The UI is generic — `LessonRunner` renders any lesson from its `steps` array. To create a new lesson, you only create a new data file and add it to `index.ts`. No UI changes needed.

### Step-Based Architecture

Each lesson contains a `steps: LessonStep[]` array. Steps are a discriminated union on `kind`:

| Kind | Component | Purpose |
|------|-----------|---------|
| `'drill'` | `DrillStep` | Binary left/right choices, rapid-fire |
| `'estimate'` | `EstimateStep` | Numeric estimation with tolerance range |
| `'tap'` | `TapStep` | Find signals in a text passage |
| `'decide'` | `DecideStep` | Multiple choice with punchline reveal |
| `'thinking'` | `ThinkingStepComponent` | Free-response synthesis (no grading) |

Each step component receives its typed data and an `onDone(score)` callback. The `LessonRunner` advances through steps sequentially, accumulating scores.

### Phase State Machine (LessonRunner.tsx)

```
intro → running (step 0 → step 1 → ... → step N) → complete
```

Phases:
- **intro**: Lesson overview, key facts, topics, tier badge, "Start Lesson" button
- **running**: Renders current step component. Progress bar + score counter at top. Each step calls `onDone` to advance.
- **complete**: Score with star rating (0-3), completion message, takeaways, next lesson / redo / home buttons. Fires `onComplete` to persist in localStorage.

### Routing (App.tsx)

- `GET /` → `HomePage`
- `GET /lesson/:id` → `LessonRunner` (via `getLessonById`)
- `ScrollToTop` resets scroll on navigation
- `ErrorBoundary` wraps everything for crash recovery

### Home Page (HomePage.tsx)

- Hero section with 3 value prop cards
- Foundations split into Phase 1 ("Core Financial Vocabulary") and Phase 2 ("Investing Concepts")
- Company Deep Dives section
- Per-lesson star display on completed cards
- Skills progress bars showing exposure across skill categories
- Visual states: completed (green check + stars), up next (accent border), locked

### Progression System (lib/progression.ts)

- **Completion**: `Set<string>` of lesson IDs in localStorage
- **Scores**: Per-lesson best score (`correct/total`) with 0-3 star ratings
- **Skills**: Exposure count per skill category, incremented on lesson completion
- Stars: 100% = 3 stars, 75%+ = 2 stars, 50%+ = 1 star, <50% = 0 stars

## Type System

### LessonStep (discriminated union)

```typescript
// Binary choice drill
interface DrillStep {
  kind: 'drill';
  topic: string;
  topicIcon: LucideIcon;
  intro: string;
  prompts: DrillPrompt[];           // Array of binary choices
  takeaway: string;
}

interface DrillPrompt {
  setup?: string;                    // Optional shared setup line
  left: { label: string; sublabel?: string };
  right: { label: string; sublabel?: string };
  correct: 'left' | 'right';
  flash: string;                     // Short feedback after tap
}

// Numeric estimation
interface EstimateStep {
  kind: 'estimate';
  topic: string;
  topicIcon: LucideIcon;
  context: string;
  question: string;
  answer: number;                    // Correct numeric answer
  tolerance: number;                 // Acceptable distance from answer
  unit?: string;                     // Display unit (%, $, x, etc.)
  hint?: string;                     // Tiny hint above input
  reveal: string;
  takeaway: string;
}

// Signal-finding in text
interface TapStep {
  kind: 'tap';
  topic: string;
  topicIcon: LucideIcon;
  intro: string;
  passage: TapSegment[];            // Mixed text and tappable chips
  requiredSignals: number;
  reveal: string;
  takeaway: string;
}

type TapSegment =
  | { type: 'text'; value: string }
  | { type: 'chip'; value: string; signal: boolean; feedback: string };

// Multiple choice with reveal
interface DecideStep {
  kind: 'decide';
  topic: string;
  topicIcon: LucideIcon;
  context?: string;
  question: string;
  options: string[];                 // 2-4 short options
  correctIndex: number;
  punchline: string;                 // 1-2 sentence key insight
  wrongNudges?: string[];            // Optional per-wrong-option feedback
  takeaway: string;
}

// Free-response synthesis (no grading)
interface ThinkingStepNew {
  kind: 'thinking';
  prompt: string;
  placeholder: string;
  modelAnswer: string;
  strongReasoningIncludes: string[];
}

type LessonStep = DrillStep | EstimateStep | TapStep | DecideStep | ThinkingStepNew;
```

### Lesson

```typescript
type LessonTier = 'foundations-1' | 'foundations-2' | 'company';

type Skill =
  | 'margins'
  | 'recurring_revenue'
  | 'business_drivers'
  | 'behavioral_biases'
  | 'moats'
  | 'valuation'
  | 'risk';

interface Lesson {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  estimatedMinutes: number;
  dataAsOf: string;                  // 'Q1 2025' for company, '' for foundations
  keyFacts: { label: string; value: string; detail: string }[];
  topics: { label: string; icon: LucideIcon }[];
  storyArc?: string[];
  steps: LessonStep[];              // The interactive content
  takeaways: string[];
  completionMessages: { perfect: string; great: string; good: string; low: string };
  tier?: LessonTier;
  skills?: Skill[];
}
```

## Step Design Patterns

### DrillStep — Rapid Binary Choices

**Purpose:** Build quick pattern recognition. User taps left or right, gets instant feedback.

**Design rules:**
- Each prompt has exactly 2 choices (left/right)
- `flash` gives immediate 1-sentence feedback after each tap
- Manual "Next" button between prompts (no auto-advance)
- Score shown at end with takeaway
- Good for: comparing two approaches, identifying better/worse options

### EstimateStep — Numeric Intuition

**Purpose:** Force the user to commit to a number before seeing the answer. Builds calibration.

**Design rules:**
- Single numeric input with optional unit display
- `tolerance` defines acceptable range (e.g., answer=35, tolerance=10 accepts 25-45)
- `hint` shown as small text above input (optional)
- Reveal shows how close they were
- Good for: margins, growth rates, valuations, ratios

### TapStep — Signal Finding in Text

**Purpose:** Train the user to spot red flags, key signals, or important phrases in context.

**Design rules:**
- `passage` mixes plain text with tappable chips
- Chips are either signals (`signal: true`) or distractors (`signal: false`)
- Each chip has per-tap `feedback` explaining why it is/isn't a signal
- Correctly found signals show in amber with flag icon
- Wrong taps show muted gray with X icon
- Must find `requiredSignals` to unlock Done button
- Good for: reading financial statements, spotting biases, identifying risks

### DecideStep — Multiple Choice with Insight

**Purpose:** Classic question format but with a punchline reveal that delivers the core insight.

**Design rules:**
- 2-4 options, one correct
- `punchline` is the 1-2 sentence key insight revealed after answering
- `wrongNudges` optionally explains why each wrong answer is tempting
- Radio-style selection with submit button
- Good for: judgment calls, applying frameworks, decision-making

### ThinkingStep — Free-Response Synthesis

**Purpose:** Synthesize everything learned into a written opinion. Forces integration.

**Design rules:**
- One open-ended prompt asking for a judgment call
- Minimum 10 characters to submit
- Model answer shown after submission (not before)
- 3 criteria for "what strong reasoning includes"
- No AI grading — self-comparison only
- Typically the final step in company lessons

## Content Quality Standards

### Questions Should Teach Reasoning, Not Trivia

BAD: "What percentage of Apple's revenue comes from Services?"
GOOD: "As an investor, which aspect of this revenue mix should concern you most?"

BAD: "What is Apple's P/E ratio?"
GOOD: "At 30x earnings with 8% growth, what is the most thoughtful investor reaction?"

### Every Wrong Answer Should Be Plausibly Tempting

Each wrong option should represent a real cognitive trap:
- **Surface-level thinking**: counts segments without tracing dependencies
- **Emotional reasoning**: conflates business quality with stock quality
- **Anchoring on one number**: ignores context and quality premiums

### Feedback Should Teach, Not Dismiss

BAD: "This is wrong because Services matters more."
GOOD: "Total revenue isn't what drives valuation — profit quality is. A dollar of recurring, high-margin Services revenue is worth more to investors than a dollar of one-time hardware revenue."

### Context Should Be Concrete, Not Abstract

BAD: "Consider a company with multiple revenue streams."
GOOD: "Two neighborhood restaurants both grew revenue 20% this year — from $500,000 to $600,000."

Use specific numbers, names, and scenarios. Foundations lessons use relatable businesses (restaurants, tutoring, snack boxes). Company lessons use real data.

## Creating a New Lesson

### Step 1: Create the data file

Create `src/data/lessons/{id}.ts`. Follow this template:

```typescript
import { IconA, IconB, IconC, IconD } from 'lucide-react';
import type { Lesson } from './types';

export const myLesson: Lesson = {
  id: 'my-lesson-id',
  emoji: '📊',
  title: 'Lesson Title',
  subtitle: 'Short tagline',
  description: '2-3 sentences explaining what the user will learn.',
  estimatedMinutes: 2,
  dataAsOf: '',              // 'Q1 2025' for company lessons, '' for foundations
  keyFacts: [],              // Empty for foundations, 3-4 items for company lessons
  topics: [
    { label: 'Topic 1', icon: IconA },
    { label: 'Topic 2', icon: IconB },
    { label: 'Topic 3', icon: IconC },
    { label: 'Topic 4', icon: IconD },
  ],
  tier: 'foundations-1',     // 'foundations-1' | 'foundations-2' | 'company'
  skills: ['margins'],       // Which skills this lesson develops
  steps: [
    {
      kind: 'drill',
      topic: 'Topic Name',
      topicIcon: IconA,
      intro: 'Setup text explaining the drill.',
      prompts: [
        {
          setup: 'Optional context for this specific prompt.',
          left: { label: 'Option A', sublabel: 'Brief detail' },
          right: { label: 'Option B', sublabel: 'Brief detail' },
          correct: 'left',
          flash: 'Why A is the better choice — 1 sentence.',
        },
      ],
      takeaway: 'Key learning from this drill.',
    },
    {
      kind: 'decide',
      topic: 'Topic Name',
      topicIcon: IconB,
      context: 'Setup text with specific numbers and scenarios...',
      question: 'Question that requires reasoning, not recall?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctIndex: 0,
      punchline: '1-2 sentence key insight.',
      wrongNudges: ['', 'Why B is weaker.', 'Why C is weaker.', 'Why D is weaker.'],
      takeaway: 'One sentence the user should remember.',
    },
    // ... mix of drill, estimate, tap, decide, thinking steps
  ],
  takeaways: ['Takeaway 1', 'Takeaway 2', 'Takeaway 3', 'Takeaway 4'],
  completionMessages: {
    perfect: 'Message for 100%.',
    great: 'Message for 75%+.',
    good: 'Message for 50%+.',
    low: 'Message for <50%.',
  },
};
```

### Step 2: Register in index.ts

Add export to `src/data/lessons/index.ts`:

```typescript
export { myLesson } from './my-lesson';
```

Add to the `allLessons` array in the correct position:
- Foundations Phase 1 lessons first
- Foundations Phase 2 lessons second
- Company lessons last

### Step 3: Verify

- Run `npx tsc -b --force` (must pass with zero errors — stricter than `--noEmit`)
- Run `npx vite build` (must succeed)
- Lesson appears automatically in the picker

## Lesson Categories

### Foundations Phase 1 (`tier: 'foundations-1'`)

Core financial vocabulary using relatable, non-stock scenarios.

- 7 lessons: Market, Basics, Margins, Income, Recurring, Drivers, Biases
- **No keyFacts** (empty array), **no dataAsOf**
- Use everyday businesses (restaurants, tutoring, snack boxes, SaaS)
- ~2 minutes each

### Foundations Phase 2 (`tier: 'foundations-2'`)

Investing concepts that build on Phase 1 vocabulary.

- 11 lessons: Moats, Valuation, Expectations, Cashflow, Risk, Debt, Growth-Value, Returns, Portfolio, Earnings, Selling
- More analytical depth, still uses relatable scenarios
- ~2-3 minutes each

### Company Deep Dives (`tier: 'company'`)

Apply concepts to real public companies using real data.

- 8 lessons: Apple, NVIDIA, Costco, Amazon, Microsoft, Tesla, Google, Netflix
- **keyFacts** with real numbers and dates
- **dataAsOf** set to latest quarter
- Final step should be a `thinking` step (investment judgment prompt)
- ~3-5 minutes each

## Curriculum — 26 Lessons

### Foundations Phase 1 (7 lessons)
1. 📈 What Is the Stock Market?
2. 💰 Follow the Money
3. 💡 What a Business Keeps (margins)
4. 📊 Reading the Scoreboard (income statements)
5. 🔄 Money That Comes Back (recurring revenue)
6. 🔍 What Actually Drives a Business (key drivers)
7. 🧠 Your Brain vs. Your Portfolio (behavioral biases)

### Foundations Phase 2 (11 lessons)
8. 🏰 What Keeps Winners Winning (moats)
9. ⚖️ What Is a Stock Worth? (valuation)
10. 🎯 The Expectations Game
11. 💸 Cash vs. Profit (cash flow)
12. 🎲 Risk Is Not a Feeling
13. 🏦 Debt: Fuel or Fire?
14. ⚖️ Growth vs. Value
15. 💰 Where the Profits Go (returns)
16. 🧩 Building a Portfolio
17. 📋 Reading an Earnings Report
18. 🚪 When to Sell

### Company Deep Dives (8 lessons)
19. 🍎 Apple
20. 🟢 NVIDIA
21. 🏪 Costco
22. 📦 Amazon
23. 🪟 Microsoft
24. ⚡ Tesla
25. 🔍 Google
26. 🎬 Netflix

## Design Constraints

- **No backend** — localStorage only, no accounts, no databases
- **No AI grading** — self-comparison via model answers and criteria
- **Dark theme only** — custom color system in index.css
- **Mobile-first** — max-w-2xl centered layout, touch-friendly tap targets
- **Inputs min 16px font** — prevents iOS Safari auto-zoom
- **prefers-reduced-motion** — respects user motion preferences
- **Accessibility** — ARIA roles/labels on interactive elements

## Color System

```
Background:    dark-950 (#06060b) — page background
Surface:       dark-900 (#0a0a12) — card insets
Cards:         dark-800 (#111119)
Interactive:   dark-700 (#1a1a25) — buttons, inputs
Hover:         dark-600 (#222230)
Borders:       border (#1e293b) / border-light (#334155)
Accent:        accent (#6366f1) / accent-light (#818cf8)
Correct:       green (#22c55e)
Wrong:         red (#ef4444)
Warning/Flag:  amber (#f59e0b)
Warm:          warm (#f59e0b) — takeaway boxes
Text:          text-primary (#f1f5f9) / text-secondary (#94a3b8) / text-muted (#64748b) / text-faint (#475569)
```

## Common Commands

```bash
npx tsc -b --force        # Type check (stricter — catches unused imports)
npx vite build            # Production build
npm run dev               # Dev server
```

## Analyst Mode — The Capstone Feature

Analyst Mode is the "apply what you learned" layer. After a user works through the curriculum, Analyst Mode lets them pick a company NOT in the curriculum and walk through a structured 7-step analysis workflow. It's the bridge between *knowledge* (foundations lessons) and *skill* (forming actual investment opinions).

### File Layout

```
src/
├── data/
│   └── companies/
│       ├── types.ts              # CompanyProfile, AnalystStepKind, WorkflowStepTemplate, WORKFLOW_STEPS
│       ├── index.ts              # allCompanies, getCompanyById, barrel exports
│       ├── visa.ts               # Visa (V) — network effect moat
│       ├── starbucks.ts          # Starbucks (SBUX) — brand + saturation
│       ├── walmart.ts            # Walmart (WMT) — scale + retail re-rating
│       ├── homedepot.ts          # Home Depot (HD) — housing cycle + duopoly
│       ├── chipotle.ts           # Chipotle (CMG) — restaurant unit economics
│       ├── adobe.ts              # Adobe (ADBE) — SaaS moat + AI risk
│       ├── salesforce.ts         # Salesforce (CRM) — enterprise SaaS + growth deceleration
│       ├── shopify.ts            # Shopify (SHOP) — e-com platform + GMV sensitivity
│       ├── disney.ts             # Disney (DIS) — sum-of-parts, streaming transition
│       └── spotify.ts            # Spotify (SPOT) — label leverage, structural margin cap
├── pages/
│   ├── AnalystModeHome.tsx       # Company picker (lists all seeded companies)
│   └── AnalystSession.tsx        # Workflow runner: intro → 7 steps → complete
└── components/
    └── analyst/
        └── AnalystStepComponent.tsx  # Free-response step UI; reveals model answer after submit
```

### The Workflow (WORKFLOW_STEPS)

Every company uses the same 7 steps in the same order. Each company supplies its own `modelAnswer` and `strongReasoningIncludes` for each step.

1. **Business** — "What does this company actually do and how does it make money?"
2. **Drivers** — "What 2-3 factors most drive revenue?"
3. **Moat** — "Durable competitive advantage? What type?"
4. **Risks** — "What 2-3 things could structurally hurt this business?"
5. **Valuation** — "Priced as growth, value, or turnaround?"
6. **Thesis** — "Make the strongest bull OR bear case."
7. **Verdict** — "Buy, pass, or need info? What would change your mind?"

Shared prompts live in `WORKFLOW_STEPS` (data/companies/types.ts). Company-specific content lives in each company's `workflow: Record<AnalystStepKind, AnalystStepContent>`.

### Adding a New Company

1. Create `src/data/companies/{id}.ts` following the `CompanyProfile` shape. You need:
   - id, ticker, name, emoji, sector, oneLiner, description
   - `dataAsOf` (e.g. 'Q4 2024'), `difficulty` ('intro' | 'standard' | 'advanced'), `estimatedMinutes`
   - `keyFacts`: 4-6 real data points the user reasons from
   - `workflow`: a Record with all 7 `AnalystStepKind` entries filled in
2. Register in `src/data/companies/index.ts` — add the import, the named export, and append to `allCompanies`.
3. Order in `allCompanies` is by difficulty (intro first). The picker displays them in array order.

### Quality Bar for Model Analyses

The `modelAnswer` is the single biggest thing that makes Analyst Mode educational. It should:

- Be 4-8 sentences of actual reasoning — not a fact dump. Show HOW to think, not just what to think.
- Reference specific numbers/drivers from the `keyFacts` when relevant.
- Present both sides when the real answer is uncertain (classic example: "could be X or Y depending on whether Z").
- End with something falsifiable — a specific number, trigger, or event that would change the conclusion.

The `strongReasoningIncludes` is 3 criteria the user self-checks against. They should be:

- Observable (the user can actually tell whether they covered it)
- Not prescriptive about WHICH answer (the user can disagree with the model)
- Focused on the reasoning structure, not the specific conclusion

### Progression Tracking

Two separate localStorage structures track Analyst Mode progress:

- **`stocklens-analyses-completed`** — `Set<companyId>` of companies the user fully walked through. Completion increments the daily streak via `updateStreak()`.
- **`stocklens-analyst-responses`** — `Record<companyId, Record<stepKind, { text, submittedAt }>>`. Each free-response is saved as soon as the user submits that step. This lets the user resume, review, revise, and compare their own past reasoning.

The picker (`AnalystModeHome`) surfaces three states per company: unstarted, in-progress (N of 7 steps saved), and analyzed. The session (`AnalystSession`) detects prior responses on mount, shows a "Prior Work" review card in the intro phase, and resumes at the first unanswered step. Users can also "Start Fresh" to wipe responses for a company via `clearCompanyResponses`.

Future: diff-view comparing a user's first pass vs. current responses (track multiple revisions over time, not just last-saved).

## Product Roadmap

StockLens is evolving from a content engine into a complete "teaching machine" — beginner → intelligent investor. Tracked priorities:

### Tier 1 — Differentiators (the moat)
- [x] **Analyst Mode v1** — 7-step workflow, 4 seeded companies (Visa, Starbucks, Adobe, Disney)
- [x] **Analyst Mode v2** — expanded to 10 companies (added: Walmart, Home Depot, Chipotle, Salesforce, Shopify, Spotify)
- [x] **Analyst Mode v3** — save user responses to localStorage, review-past-answers card on intro, resume at first unanswered step, in-progress state on picker
- [ ] **Analyst Mode v4** — expand to 15-20 companies (add a financial/bank, a pharma, a semi outside NVDA, an energy co.)
- [ ] **Analyst Mode v5** — track response revisions over time (first-pass vs. current diff view); export a company analysis as a shareable card

### Tier 2 — Retention (not started)
- [ ] **Review / Spaced Repetition mode** — mixes questions from completed lessons on a schedule; surfaces weak areas
- [ ] **Daily Practice** — 3-5 mixed questions per day, maintains the streak, keeps material fresh

### Tier 3 — Critical curriculum gaps
- [x] Index Funds & ETFs (foundations-index-funds)
- [x] Reading a 10-K (foundations-ten-k)
- [ ] **Options basics** — what calls/puts are, how they're used for income and hedging (literacy, not trading)
- [ ] **Bonds and fixed income** — yield, duration, credit risk, role in portfolios
- [ ] **Taxes for investors** — short vs. long-term capital gains, tax-advantaged accounts, tax-loss harvesting
- [ ] **Recession/downturn playbook** — how to think about portfolio decisions during drawdowns

### Tier 4 — Engagement layer
- [ ] **XP + levels** — cumulative XP from all lessons and analyses, level titles ("Apprentice Investor" → "Analyst" → "Portfolio Manager")
- [ ] **Quests / milestone badges** — "Complete all Foundations Phase 1", "Analyze 5 companies", "30-day streak"
- [ ] **Diagnostic onboarding** — 5-question placement quiz to suggest a starting point
- [ ] **Learning path narrative** — explicitly recommended order with contextual "why this next"

### Tier 5 — Polish + scale
- [ ] Mobile PWA polish, offline support
- [ ] Social proof / shareable analysis cards (with care — no financial advice)
- [ ] Creator-submitted company profiles (community curation with review)
- [ ] Integration with a free markets API for live P/E and price (big decision — requires backend)

The North Star: a user who completes all lessons + all Analyst Mode companies can pick up any public company's 10-K, work through a reasoned analysis in 30 minutes, and form a defensible investment opinion. **That's the difference between education and skill.**

## What Makes This Project Different

Most investing education is either:
1. **Textbook-style** — walls of text, no interaction, no retention
2. **Quiz-style** — trivia questions testing memorization
3. **Simulation-style** — fake trading with no conceptual foundation

StockLens is different because:
- **It teaches thinking patterns**, not facts. Every step requires reasoning.
- **5 distinct interaction types** — drills, estimates, signal-finding, decisions, free-response — keep users engaged
- **It builds progressively** — Phase 1 vocabulary → Phase 2 concepts → Company application
- **Feedback teaches, not grades** — wrong answer explanations are mini-lessons, not dismissals
- **Scores and skills tracking** — star ratings, skill exposure bars, and progression create motivation

The goal is that after completing all lessons, a user can pick up any company's financials and form a reasoned opinion — not because they memorized what to think, but because they learned how to think.
