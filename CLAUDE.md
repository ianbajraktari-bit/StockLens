# StockLens — Claude Agent Guide

## Source of Truth

- **Primary branch:** `main` — always pull/sync from `origin/main` before starting work
- **Repository:** `ianbajraktari-bit/StockLens` on GitHub
- **Production deployment:** Vercel (auto-deploys from `main`)
- **Lesson count:** 38 lessons (28 foundations + 10 company deep dives) + Analyst Mode (16 seeded companies across every major sector)
- **Step kinds:** `drill | estimate | decide | tap | thinking | compare`
- **Research Journal:** the connective spine — every memo, reflection, and note the user produces lands in `lib/journal.ts` (localStorage-backed, auto-imports legacy analyst responses)
- **Product status:** mid-pivot from "curriculum-as-main-loop" to "Hub + Apprenticeship." See **Product Roadmap** section. Phase 1 (Journal foundation) shipped; Phase 2 (Simulator) is next.

> **IMPORTANT:** Before making changes, run `git fetch origin main` and verify your local `main` matches remote. The codebase uses the step-based architecture (NOT the old `questions: QuizQuestion[]` format). If you see `QuizQuestion` anywhere, you are on a stale branch.

## What This Project Is

StockLens is a **hub for becoming an investor** — not a Duolingo-style quiz app dressed in stock vocabulary. The North Star: a beginner with no prior knowledge can use this app to become someone who can pick up any public company's 10-K, work through a reasoned analysis, and form a defensible investment opinion.

The product runs on an **apprenticeship model**, not a curriculum model. Lessons are a *resource* the user consults; the *main loop* is doing the work — analyzing companies, writing memos, holding theses through changing data, and tracking your own track record over time. We are explicitly not Duolingo for stocks. The Duolingo mechanic (drill-and-recall via SRS) maps well to memorization domains like languages and badly to judgment-under-uncertainty domains like investing. Duolingo themselves figured this out — Duolingo Math and Music both struggled for the same reason.

The core design principle: **every interaction should force the user to think, not just read.** The corollary, post-pivot: **every interaction should also produce a written artifact the user owns.** Writing is how skill compounds.

## The Four Layers of Investing Skill

This is the anchor. Every product decision should be asked: *which layer does this build?* If the answer is "none," cut it.

1. **Vocabulary** (~100 terms — margin, P/E, moat, recurring revenue, etc.). Small, mostly memorizable. *This* is where Duolingo-style mechanics work. Drills, flashcards, definitions. Foundations Phase 1 lives here.
2. **Mental models** (~30 patterns — how moats work, how cycles work, how cash differs from earnings, how operating leverage cuts both ways). Memorize-able conceptually, only useful in context. Foundations Phase 2 + company deep dives target this layer.
3. **Judgment under uncertainty** — given an ambiguous real situation, form a defensible view at a defensible price. *This is the actual skill.* Cannot be drilled. Built by repeated exposure to ambiguous decisions where smart people disagree. Analyst Mode + the new `compare` step (open-call mode) + the Simulator (Phase 2) target this layer.
4. **Emotional discipline** — hold conviction through a 30% drawdown, change your mind when facts change without flipping with sentiment, sit on cash when nothing is attractive. The thing that actually determines long-term outcomes. *No app currently teaches this.* The Simulator (Phase 2) is the only mechanic that builds it — because the user must commit before knowing outcomes.

When evaluating a feature: layers 1-2 are *table stakes*; layers 3-4 are the *moat*. Most investing edu apps stop at layer 2 and call it a day. We don't.

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
│   ├── LessonReflectionCard.tsx     # Optional structured-prompt card on lesson completion → journal entry
│   └── steps/
│       ├── DrillStep.tsx            # Binary choice drill (left/right taps)
│       ├── EstimateStep.tsx         # Numeric estimation with tolerance
│       ├── TapStep.tsx              # Signal-finding in text passages
│       ├── DecideStep.tsx           # Multiple choice with punchline reveal
│       ├── CompareStep.tsx          # Side-by-side candidate comparison (decisive + open-call)
│       └── ThinkingStepComponent.tsx # Free-response synthesis
├── pages/
│   ├── HomePage.tsx                 # Lesson grid, progress tracking, skills display, Journal entry point
│   ├── LessonRunner.tsx             # Intro → steps → completion (reflection card included)
│   └── JournalPage.tsx              # Research Journal feed: stats, composer, filters, search, entries
├── lib/
│   ├── progression.ts              # localStorage: completion, scores, skills tracking
│   └── journal.ts                   # Research Journal: entry types, CRUD, lazy import, stats
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
| `'compare'` | `CompareStep` | Side-by-side candidate cards (real companies) with structured metrics; supports decisive *and* open-call modes (see below) |

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

// Side-by-side candidate comparison
interface CompareCandidate {
  name: string;
  ticker?: string;
  tag?: string;                      // e.g., "Wholesale flywheel"
  metrics: { label: string; value: string; note?: string }[];
}

interface CompareStep {
  kind: 'compare';
  topic: string;
  topicIcon: LucideIcon;
  context: string;
  candidates: CompareCandidate[];   // 2-3 real companies
  question: string;
  options: string[];
  /** If set, this option is the strongest answer. If undefined, the
   *  question is genuinely open — every submission scores 1/1 and the
   *  educational value is in the per-option `analyses[i]`. */
  bestIndex?: number;
  analyses: string[];               // per-option targeted feedback
  punchline: string;
  takeaway: string;
}

type LessonStep =
  | DrillStep
  | EstimateStep
  | TapStep
  | DecideStep
  | ThinkingStepNew
  | CompareStep;
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

### CompareStep — Side-by-Side Candidate Comparison

**Purpose:** Force the user to weigh structured data across 2-3 real companies side-by-side. Closer to actual investing than any other step kind. **The open-call mode is the deliberate centerpiece of the new pedagogy** — it's how we teach layer 3 (judgment under genuine ambiguity).

**Two modes:**
- **Decisive** (`bestIndex` set) — one option is the strongest answer; picking it scores 1, others score 0. Use when the data clearly favors one candidate but the user must reason through *why* (e.g., recession resilience favors the highest-margin business — but the user has to see that).
- **Open call** (`bestIndex` undefined) — the question is genuinely ambiguous. Every submission scores 1/1. The educational value is entirely in `analyses[i]`, which gives targeted feedback on whichever path the user chose. Use this for "smart people disagree" prompts. The amber **"Open call"** chip is rendered to set expectation that there's no green-check moment — only trade-offs.

**Design rules:**
- 2-3 candidates max — more than 3 won't fit on mobile
- Each candidate has 3-5 metric rows (`label / value / optional note`). Use real numbers. Cite the year ("FY 2024") in the lesson context, not the metric.
- `analyses` length must equal `options` length. Each is 2-4 sentences explaining the trade-off this pick captures (or misses) — never "you got it wrong."
- Use open-call mode liberally. The whole product critique that drove the redesign was that decisive multiple-choice with obvious right answers ≠ teaching judgment.
- Good for: head-to-head business comparisons, recession/scenario tests, "which would you hold for the next 5 years," capital allocation framing.

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

## Curriculum

> **The authoritative list lives in `src/data/lessons/index.ts`.** Don't duplicate it here — the doc rots immediately. Read the source.

Current shape (Q1 2026):
- **Foundations Phase 1** (~7 lessons) — vocabulary: market, basics, margins, income, recurring, drivers, biases
- **Foundations Phase 2** (~21 lessons) — concepts + practical literacy: moats, valuation, expectations, cashflow, risk, debt, growth-value, returns, dividends, portfolio, earnings, selling, index-funds, ten-k, macro, history, sectors, statements, options, bonds, taxes
- **Company Deep Dives** (~10 lessons) — Apple, NVIDIA, Costco, Amazon, Microsoft, Tesla, Google, Netflix, Meta, Berkshire

Margins (`foundations-margins`) is the **reference implementation of the new scenario-driven format** — connected through-line, real companies, `compare` step in both decisive and open-call modes, structured ambiguity. Future lesson rewrites should match its shape.

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
│       ├── cocacola.ts           # Coca-Cola (KO) — consumer staples dividend compounder
│       ├── walmart.ts            # Walmart (WMT) — scale + retail re-rating
│       ├── homedepot.ts          # Home Depot (HD) — housing cycle + duopoly
│       ├── chipotle.ts           # Chipotle (CMG) — restaurant unit economics
│       ├── jpmorgan.ts           # JPMorgan Chase (JPM) — banking, cyclical, TBTF
│       ├── unitedhealth.ts       # UnitedHealth (UNH) — insurance + Optum vertical integration
│       ├── exxon.ts              # ExxonMobil (XOM) — integrated oil & gas, capital discipline
│       ├── adobe.ts              # Adobe (ADBE) — SaaS moat + AI risk
│       ├── salesforce.ts         # Salesforce (CRM) — enterprise SaaS + growth deceleration
│       ├── shopify.ts            # Shopify (SHOP) — e-com platform + GMV sensitivity
│       ├── disney.ts             # Disney (DIS) — sum-of-parts, streaming transition
│       ├── spotify.ts            # Spotify (SPOT) — label leverage, structural margin cap
│       ├── lilly.ts              # Eli Lilly (LLY) — pharma hypergrowth, GLP-1 bet
│       └── tsmc.ts               # TSMC (TSM) — semis monopoly, Taiwan geopolitical risk
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

## Daily Practice — The Retention Loop

Daily Practice is the "come back tomorrow" feature. Once a user has completed at least one lesson, a pool of gradable steps (drill, estimate, tap, decide — all except `thinking`) becomes available for review. Each day, the app selects 5 of those steps deterministically (seeded by the date), runs them as a sequential session, and records the result.

### Files

- `src/lib/spacedRepetition.ts` — per-item Leitner-box state, priority scoring, aggregate stats
- `src/lib/review.ts` — pool collection, scheduled selection, daily-result storage, public API
- `src/pages/ReviewSession.tsx` — intro → running → complete flow; reuses the same step components as `LessonRunner`
- Entry card on `HomePage.tsx`, route `/review/daily` in `App.tsx`

### Selection (Leitner spaced repetition)

Each review item (`itemId = lessonId:stepIndex`) lives in a Leitner box 0-5. Box intervals are `[1, 2, 4, 8, 16, 30]` days. On a perfect step (`correct === total`), the item moves up one box. On any miss, it resets to box 0 (due tomorrow) — which is how missed-question carryover is implemented.

`getScheduledDailyPractice()` walks the pool of gradable steps from completed lessons, computes a priority per item, sorts descending, and slices `DAILY_PRACTICE_SIZE` (5). Priority tiers:

- **`wrong`** (1000 + days since): item was missed most recently — highest priority
- **`due`** (400 + days overdue × 20): last-seen + box interval has elapsed
- **`new`** (500): item has no stat yet — lands between wrong and due
- **`upcoming`** (max(0, 100 - days until due × 5)): not yet due, low-priority refresher

Deterministic seeded jitter breaks ties reproducibly within a day. Stats are only mutated at session completion, so mid-day reopens see the same selection.

Each selected item carries its `reason` (`wrong | due | new | upcoming`) into the UI as a colored pill — users can see why each question surfaced and get an aggregate "today's mix" summary on the intro screen.

### Storage

- `stocklens-review-item-stats` — `Record<itemId, { box, lastSeen, timesSeen, timesCorrect, lastCorrect }>` — per-item SR state, updated after each step in a session
- `stocklens-daily-practice` — `Record<YYYY-MM-DD, { correct, total, completedAt }>` — session-level daily result; `saveDailyPracticeResult` also calls `updateStreak()`, so daily practice alone maintains a streak

### Empty-pool handling

If `getReviewPoolSize()` is 0, the home-page card doesn't render, and direct navigation to `/review/daily` shows a "no material yet" screen that routes the user to the lesson picker.

### Future

- Weak-area surfacing (route practice toward low-mastery skill tags)
- Heatmap / streak calendar visualization
- Multiple practice sessions per day once the pool is large enough
- Per-item history view (how many times you've seen X, current box, last miss)

## XP + Levels + Quests — The Progression Spine

Every action in the app — finishing a lesson, submitting an analyst step, completing daily practice — feeds one shared progression ledger. XP is the currency, Level is the headline, Quests are the milestones. This is what pulls lessons, Analyst Mode, and the retention loop into a single motivational arc.

### Files

- `src/lib/xp.ts` — ledger, level curve, titles, award helpers
- `src/lib/quests.ts` — catalog, evaluation, earned-set persistence
- Integrations: `src/lib/progression.ts`, `src/lib/review.ts`, `src/pages/HomePage.tsx`, `src/pages/LessonRunner.tsx`, `src/pages/ReviewSession.tsx`, `src/pages/AnalystSession.tsx`

### Level curve

Closed-form quadratic: `XP_required(L) = 25 * L * (L + 1)`. Level L→L+1 costs `50 * (L + 1)` XP, so gaps widen smoothly. Inversion: `L = floor((-1 + sqrt(1 + xp/6.25)) / 2)`. `getLevelInfo(xp)` returns `{ level, title, xpIntoLevel, xpForNextLevel, progressPct, totalXp }` for any XP total.

### Title ladder

8 bands keyed off level: Novice (L0) → Apprentice (L3) → Analyst (L6) → Portfolio Strategist (L10) → Principal (L15) → Senior Portfolio Manager (L22) → Chief Investment Officer (L32) → Market Wizard (L45+).

### XP sources (gated to prevent farming)

- **Lesson completion** — `awardLessonCompletion({ correct, total, firstCompletion })`. First-time award: `50 + 10*correct`; replay: 40% of that ceiling.
- **Analyst step submission** — `awardAnalystStep()` — 15 XP, first-submission only.
- **Analyst full completion** — `awardAnalystComplete()` — 100 XP bonus, first completion only.
- **Daily practice** — `awardDailyPractice(correct, total)` — `20 + 5*correct`, once per day (gated by presence in daily-results map).
- **Quest unlock** — `awardQuestXp(title, amount)` — the quest's own `xp` value.

All writes go through `awardXp()`, which appends to a ring-buffered event ledger (`stocklens-xp-events`, max 50 entries) and returns `{ awarded, totalXp, leveledUp, currentLevel, levelsGained }` so UI can celebrate level-ups.

### Quest catalog (17 quests)

Categories: `lessons | analyst | habit | skills`. Each quest has a `check: () => { current, target }` — the universal shape lets the evaluator iterate uniformly. Notable quests: `first-light`, `phase-1-complete`, `phase-2-complete`, `deep-diver` (5 company lessons), `completionist` (all lessons), `perfect-mind` (5 3-stars), `flawless` (15 3-stars), `first-analysis`, `analyst` (5 companies), `wall-street-ready` (all companies), `habit-formed` (7-day streak), `disciplined` (30-day streak), `practice-maker` (5 daily practices), `sharpened` (20), `well-rounded` (3 mastered skills), `all-skills`, `grand-slam` (everything).

`evaluateQuests()` is idempotent — it runs after any progress event, compares the newly-completed set against `stocklens-quests-earned`, fires XP for the delta, and persists the new earned set. Safe to call anywhere.

### Integration pattern

Return signatures were widened (not replaced) so existing callers keep working:

- `markCompleted(id, score)` → `LessonCompletionReward { xp, quests, firstCompletion }`
- `markAnalysisComplete(id)` → `AnalysisCompletionReward { xp, quests, firstCompletion }`
- `saveAnalystResponse(...)` → `XpAwardResult | null` (first-submission only)
- `saveDailyPracticeResult(correct, total)` → `DailyPracticeReward { result, xp, quests, firstCompletionToday }`

Completion screens (`LessonRunner`, `ReviewSession`, `AnalystSession`) capture these rewards and render three reward blocks:

1. **XP earned** — accent-gradient card with Zap icon and `+X XP`
2. **Level up** — warm-gradient callout with animated chevron and new title
3. **Quest unlocked** — one card per newly-earned quest, with icon, title, description, and XP chip

### Home-page surface

- Level badge in header ring (shows current level number instead of completion %)
- Prominent level + XP card: title, total XP, progress bar to next level, quest count
- Quests panel: 17 tiles in three states
  - **Earned**: warm fill + trophy icon + XP chip
  - **In progress**: accent border + current/target progress bar
  - **Locked**: muted + Lock icon

### Circular import note

`progression.ts` and `quests.ts` cross-import each other. This is safe because all cross-module references happen inside function bodies (not during module initialization). Keep it that way — do not hoist imported identifiers into module-level constants in either file.

### Future

- Daily XP budget / anti-grind cap if replay XP becomes abusable
- Quest progress toasts (notify mid-lesson when a quest ticks toward target)
- Seasonal / rotating quest pool layered on top of the permanent catalog
- Leaderboard (requires backend — out of scope while we remain localStorage-only)

## Research Journal — The Connective Spine

The journal is the **single source of truth for the user's writing**. Every meaningful piece of writing produced anywhere in the app — Analyst Mode memos, post-lesson reflections, free-form notes, and (future) simulator trade rationales and thesis statements — lands in one chronological feed the user owns. This is the foundation of the apprenticeship model: skill compounds through writing, and the journal is where that writing lives forever.

### Files

- `src/lib/journal.ts` — entry types, localStorage layer, CRUD, search, stats, lazy backfill
- `src/pages/JournalPage.tsx` — the feed: stats grid, quick-note composer, type-filter chips, search, inline-expanding entry cards with deep links back to the originating lesson/analysis
- `src/components/LessonReflectionCard.tsx` — optional structured-prompt card on lesson-completion screens (40-char minimum); idempotent per lesson
- Integration: `src/lib/progression.ts` (saveAnalystResponse mirrors into journal), `src/pages/HomePage.tsx` (header entry point with live entry count), `src/App.tsx` (route at `/journal`)

### Entry types

```typescript
type JournalEntryType =
  | 'analyst_memo'       // anchored to (companyId, stepKind), upsert
  | 'lesson_reflection'  // anchored to lessonId, upsert
  | 'note'               // free-form, append-only
  | 'trade_rationale'    // FUTURE — Phase 2 simulator
  | 'thesis';            // FUTURE — buy/sell/hold thesis being tracked
```

**Anchored entries** (memos, reflections) use deterministic ids (`analyst:{companyId}:{stepKind}`, `reflection:{lessonId}`) and upsert — one entry per context, latest text wins, original `createdAt` preserved across edits. **Append-only entries** (notes) get fresh ids each time so the user keeps a chronological record of evolving thinking.

### Storage

- `stocklens-journal-entries` — `JournalEntry[]`
- `stocklens-journal-imported` — boolean flag; idempotent backfill of existing analyst responses runs once per browser via `importLegacyAnalystResponses()`. Called lazily on every read through `ensureImported()`.

### Public API

Reads always run `ensureImported()` first so callers don't have to think about the backfill:
- `getAllEntries()` — newest first by `createdAt`
- `getEntryById(id)`, `getEntriesByType(type)`, `getEntriesForCompany(companyId)`, `getEntriesForLesson(lessonId)`, `searchEntries(query)`
- `getJournalStats()` — total + per-type counts + companies covered + lessons reflected + last-entry timestamp

Writes:
- `upsertAnalystMemo({ companyId, stepKind, text, submittedAt? })` — called from `saveAnalystResponse`
- `upsertLessonReflection({ lessonId, text })` — called from the reflection card
- `createNote({ text, title?, tags?, companyId?, lessonId? })` — append-only
- `updateEntry(id, patch)`, `deleteEntry(id)` — for notes; UI hides delete on anchored entries

### Reflection prompt — design intent

The card uses a *structured* prompt, not a blank "what did you take away?" textarea. Current prompt: *"One judgment call from this lesson you want to remember the next time you analyze a real company."* This is deliberate — blank prompts produce one-word fluff; structured prompts produce real thinking. 40-character minimum is just enough to filter "yes" / "got it" without being punitive.

### Future

- Diff view between earlier and current versions of an anchored entry (track how the user's thinking evolved)
- Tags + saved searches
- Surfacing "you wrote this 60 days ago — anything changed?" prompts (past-self accountability)
- Export a single company's full journal as a shareable analysis card
- Phase 2: `trade_rationale` entries created automatically when the user makes a simulator trade
- Phase 3: LLM "manager" reads the user's recent journal entries to provide personalized pushback

## Product Roadmap

StockLens is mid-pivot from "great curriculum app" to "full hub for becoming an investor." The new shape has three intertwined surfaces — **Desk** (home base), **Floor** (simulator), **Library** (lessons + companies + tools as a resource) — all hanging off the **Research Journal** spine. The roadmap is organized in **four phases**, each shippable on its own.

> **North Star:** a user who works through this app for ~6 months can pick up any public company's 10-K, write a reasoned investment memo, hold a thesis through changing data, and articulate which biases they personally fall into. **That's the difference between education and skill.**

### Phase 1 — Journal foundation + IA refactor (in progress)

The connective spine. Everything hangs off this.

- [x] **Research Journal v1** — `lib/journal.ts`, typed entries (memo / reflection / note + future trade_rationale / thesis), CRUD + search + stats, lazy idempotent backfill of legacy analyst responses, `/journal` page with feed + composer + filters, deep links back to source lesson/analysis
- [x] **Lesson reflection card** — structured-prompt card on lesson completion screens, 40-char minimum, idempotent per lesson, edits land back in the journal
- [x] **Header journal entry point** — live entry count, accent-toned pill in HomePage header
- [x] **Compare step kind** — `CompareStep` with decisive + open-call modes; redesigned `foundations-margins` as a connected scenario lesson using it
- [ ] **Information-architecture refactor** — rename home → `Desk`, reorganize routes into `/library/lessons/:id`, `/library/companies/:id`, `/library/practice`, `/floor` (placeholder), `/journal`. Old routes redirect.
- [ ] **Desk redesign** — replace the tab-bar HomePage with a "morning open" view: Today panel (streak, due reviews, in-progress work), Recent Journal feed, Continue prompts, quick-action buttons
- [ ] **Library hub** — browseable shelves (Lessons / Companies / Tools / Failure Cases), contextual surfacing from Desk and Floor
- [ ] **Apply scenario template to remaining Phase 1 lessons** — at minimum: Recurring Revenue, Moats, Drivers should adopt the new connected-scenario format that Margins now uses

### Phase 2 — Simulator MVP (the heart)

This is what makes the app *startup-level different*. No other investing app builds layer 4 (emotional discipline) because no other app forces the user to commit before knowing outcomes.

- [ ] **Fictional fund** — $100K starting capital, 5-10 watchlist companies (reuse Analyst Mode profiles)
- [ ] **Time advancement** — one in-app "week" per real day, or manual advance; market state (prices, news) progresses on a curated narrative
- [ ] **Curated event narratives** — for each watchlist company, a sequence of plausible quarterly events (earnings prints, competitive shifts, macro shocks, management changes). Static + designed, not LLM-generated, so events are pedagogically sharp.
- [ ] **Forced trade rationale** — every buy/sell/hold decision requires a written memo before submission; auto-creates a `trade_rationale` journal entry
- [ ] **Track-record dashboard** — running portfolio P/L, decision-by-decision accuracy, "predictions you made vs. what happened"
- [ ] **Adversarial pairing** — every bull thesis the user writes requires writing the bear thesis before submission

### Phase 3 — LLM Manager + content scale

The seriousness lever. Conversational pushback from an Anthropic-API-powered "manager" turns lazy memos into a visibly-failing user experience — which is what forces the engagement we can't trust users to bring on their own. **Requires real billing.**

- [ ] **LLM Manager** — when user submits a memo or trade rationale, an Anthropic-API-powered analyst challenges their reasoning conversationally ("Your thesis says the moat holds, but the renewal rate just dropped 5 points. Defend that."). User defends or revises. Targets layer 3 directly.
- [ ] **Bias profile** — over time, the manager builds a model of the user's recurring biases ("you tend to fall for narrative-driven stocks; you sell winners too early") and surfaces it
- [ ] **Failure case studies** — 30+ — Enron, Lehman, Sears, WeWork, GE, Pets.com, etc. Wins teach less than losses. New library shelf.
- [ ] **Content scale** — push toward 80-120 lessons total and 50+ company profiles. Volume creates the pattern-recognition substrate that skilled investors actually rely on.
- [ ] **Past-self surfacing** — "you wrote this 60 days ago — has anything changed?" prompts on aging journal entries

### Phase 4 — Real data, social, time machine

- [ ] **Real historical price feeds** — simulator can use real S&P data; portfolios reflect actual market moves (requires backend)
- [ ] **Time Machine mode** — show user a real company's 2015 10-K, have them write a thesis, then show what actually happened 2015→now. Hindsight calibration done right.
- [ ] **Mobile PWA polish, offline support**
- [ ] **Shareable analysis cards** — with care — no financial advice
- [ ] **Leaderboard / community** — ranked on analysis quality, not portfolio P/L
- [ ] **Diagnostic onboarding** — 5-question placement quiz to suggest a starting point (could ship earlier if it accelerates Phase 1)
- [ ] **Practice heatmap / calendar view** — visualize daily completion history and streak shape

### Pre-pivot work (already shipped — preserved here for reference)

These were the Tier-1-through-5 priorities before the pivot. They all shipped and remain part of the foundation. Most slot under Phase 1 (Library content) or are subsumed by Phase 2/3 ambitions.

- **Analyst Mode v1-v4** — 7-step workflow, 16 seeded companies across every major sector (banking, healthcare, pharma, semis, energy, staples, retail, SaaS, e-commerce, restaurants, media). Save responses, resume at first unanswered step. Becomes the analysis template inside the Phase 2 Simulator.
- **Daily Practice + spaced repetition** — Leitner-box per-item tracking, priority-scored selection, deterministic 5-question daily mix from completed lessons. Streak-feeding. Stays as a Library tool, surfaced from the Desk.
- **XP + Levels + Quests** — closed-form level curve `25·L·(L+1)`, 8-band title ladder (Novice → Market Wizard), 17-quest catalog. Extend to simulator actions in Phase 2; reward outcomes (predictions correct, theses held) not just output.
- **Critical curriculum gaps filled** — Index Funds, 10-K reading, Options, Bonds, Taxes (all under Foundations Phase 2 in `data/lessons/`).
- **Lesson rewrites** — first 4 + remaining Phase 1 + Moats lessons rewritten with real companies and harder judgment calls. Margins additionally upgraded to scenario-driven format using `compare`.

## Pedagogical Principles

These are durable design rules. They apply across every step kind, every page, every feature. When in doubt, return here.

1. **Structured prompts beat blank textboxes.** A blank "what did you take away?" prompt produces one-word fluff. A targeted prompt — *"One judgment call from this lesson you want to remember the next time you analyze a real company"* — produces real thinking. We control the prompt; we control the floor on user effort.

2. **Reward outcomes, not output.** XP for *writing* is farmable and incentivizes quantity over quality. XP for *predictions that came true*, *theses that held up*, *biases the user identified in themselves* — that's outcome-based and farms the user toward truth. Phase 2/3 reward design must follow this.

3. **Adversarial pairing forces seriousness.** Every bull thesis requires writing the bear thesis before submission. Every recommendation requires articulating what would change your mind. This is uncomfortable; the discomfort is the point. Buffett does this. Munger does this. Most retail investors don't. Forcing it is the value.

4. **Open ambiguity is the centerpiece, not the exception.** Real investing rarely has a clean answer. Multiple-choice with obvious right answers (the original product flaw) trains the user to look for the trick — not to weigh trade-offs. The `compare` step's open-call mode and the Phase 2 Simulator's forced-decision-without-knowing-the-outcome are the mechanics that build layer 3 (judgment) and layer 4 (emotional discipline).

5. **Volume is the moat for pattern recognition.** Skilled investors know hundreds of businesses. The current 16 Analyst Mode companies aren't enough — Phase 3 pushes to 50+. You only learn what a "Sears situation" or a "See's Candy moment" looks like by seeing many of them.

6. **Failures teach more than wins.** Every winning company can teach 2 lessons; every spectacular failure can teach 10. Phase 3 failure-case shelf is non-negotiable.

7. **Writing is how skill compounds.** Every meaningful interaction in the app should produce a written artifact the user owns. This is why the journal is the spine, not a side feature.

8. **Some users will never lock in. That's fine.** Optimize the product to be excellent for the 20% who will, not mediocre for everyone. Stop designing for the user who's trying to fake it — they're not the user.

9. **Feedback teaches, not grades.** Wrong-answer explanations are mini-lessons, not dismissals. Per-option `analyses[i]` in compare steps and `wrongNudges[i]` in decide steps exist for this — fill them in with real reasoning, not "incorrect, the right answer is X."

10. **Use specific, real examples.** Toy bakeries are forbidden. Real companies (Microsoft, Costco, Visa, Hermès, Kroger) with real numbers and real ambiguity make every concept concrete. Foundations lessons can use simplified scenarios but the businesses must be recognizable and the numbers credible.

## What Makes This Project Different

Most investing education falls into one of four buckets:
1. **Textbook-style** — walls of text, no interaction, no retention.
2. **Quiz-style** — trivia testing memorization (this is where the original StockLens lived; we left).
3. **Drill-style** (Duolingo for stocks) — vocabulary repetition. Doesn't generalize to judgment domains. Duolingo Math and Music struggled here for the same reason.
4. **Simulation-style** — fake trading with no conceptual foundation. Builds gambling instincts, not investing skill.

StockLens is **none of these.** The model we're building is **apprenticeship + writing + skin-in-the-game simulation**, all hanging off a single research journal the user owns. Specifically:

- **Lessons are a resource, not the main loop.** They live in the Library and get consulted just-in-time when the user needs a concept. The main loop is doing the work — analyzing companies, writing memos, holding theses through changing data.
- **Six step kinds, not five** — and the new one (`compare`, especially in open-call mode) is the centerpiece. We deliberately built a mechanic that *cannot* have a single right answer because that's what real investing looks like.
- **The Research Journal is the spine.** Every memo, reflection, and (future) trade rationale lands in one place. The user's own writing — over months — is the durable artifact.
- **The Simulator (Phase 2) is what no one else builds.** Real time pressure, curated events, forced trade memos, track records that compound. This is the mechanic that targets layer 4 (emotional discipline) — which is what actually determines long-term investing outcomes.
- **The LLM Manager (Phase 3) is the seriousness lever.** Conversational pushback that makes lazy memos visibly fail, surfaces personal biases over time, and gives the user the apprenticeship experience that great investors historically only got via mentors.
- **Feedback teaches, not grades.** Per-option analyses, wrong-answer mini-lessons, model-comparison synthesis — never a bare "you got it wrong."

The goal is not "completes all lessons." The goal is **someone who has written 30+ company memos, lived through 6 months of simulated market cycles, can articulate which biases they personally fall into, and can pick up any 10-K and form a reasoned opinion.** That's an investor — not a quiz-taker.
