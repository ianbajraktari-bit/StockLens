# StockLens — Claude Agent Guide

## Source of Truth

- **Primary branch:** `main` — always pull/sync from `origin/main` before starting work
- **Repository:** `ianbajraktari-bit/StockLens` on GitHub
- **Production deployment:** Vercel (auto-deploys from `main`)
- **Lesson count:** 38 lessons (28 foundations + 10 company deep dives) + Analyst Mode (16 seeded companies across every major sector)
- **Step kinds:** `drill | estimate | decide | tap | thinking | compare`
- **Research Journal:** the connective spine — every memo, reflection, and note the user produces lands in `lib/journal.ts` (localStorage-backed, auto-imports legacy analyst responses)
- **Product status:** mid-pivot from "curriculum-as-main-loop" to "Hub + Apprenticeship." See **Phase Status** below and full detail in [docs/roadmap.md](docs/roadmap.md).

> **IMPORTANT:** Before making changes, run `git fetch origin main` and verify your local `main` matches remote. The codebase uses the step-based architecture (NOT the old `questions: QuizQuestion[]` format). If you see `QuizQuestion` anywhere, you are on a stale branch.

## Phase Status

Phase 1 (Hub + Apprenticeship pivot) is in progress. Shipped on main: Research Journal v1 (`/journal`), lesson reflection card, header journal entry point, the `compare` step kind in decisive + open-call modes, Library hub, Floor placeholder, and the Hub mode strip on HomePage. Remaining for Phase 1: the Desk redesign of HomePage and bringing Recurring Revenue / Moats / Drivers up to the new lesson-design bar (each lesson is designed for what it's teaching — see [Lesson Shape](docs/architecture.md#lesson-shape-designed-not-templated)). Phase 2 (Simulator MVP) is next.

## What This Project Is

StockLens is a **hub for becoming an investor** — not a Duolingo-style quiz app dressed in stock vocabulary. The North Star: a beginner with no prior knowledge can use this app to become someone who can pick up any public company's 10-K, work through a reasoned analysis, and form a defensible investment opinion. The product runs on an **apprenticeship model**, not a curriculum model — lessons are a *resource* the user consults; the *main loop* is doing the work. The core design principle: **every interaction should force the user to think and produce a written artifact the user owns.** See [docs/pedagogy.md](docs/pedagogy.md) for the four layers of investing skill, content quality standards, and the 10 pedagogical principles that drive every product decision.

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
│   ├── steps/                       # 6 step components (drill, estimate, tap, decide, thinking, compare)
│   └── analyst/AnalystStepComponent.tsx  # Free-response step UI for Analyst Mode
├── pages/
│   ├── HomePage.tsx                 # Lesson grid, progress tracking, skills display, Journal entry point
│   ├── LessonRunner.tsx             # Intro → steps → completion (reflection card included)
│   ├── JournalPage.tsx              # Research Journal feed: stats, composer, filters, search, entries
│   ├── AnalystModeHome.tsx          # Company picker (lists all seeded companies)
│   ├── AnalystSession.tsx           # Workflow runner: intro → 7 steps → complete
│   ├── ReviewSession.tsx            # Daily Practice runner
│   ├── LibraryPage.tsx, FloorPage.tsx  # Library hub + Floor (Phase 2) placeholder
├── lib/
│   ├── progression.ts               # localStorage: completion, scores, skills tracking
│   ├── journal.ts                   # Research Journal: entry types, CRUD, lazy import, stats
│   ├── spacedRepetition.ts          # Per-item Leitner-box state, priority scoring
│   ├── review.ts                    # Daily practice pool collection + selection + storage
│   ├── xp.ts                        # XP ledger, level curve, titles, award helpers
│   └── quests.ts                    # Quest catalog, evaluation, earned-set persistence
└── data/
    ├── lessons/
    │   ├── types.ts                 # LessonStep union, Lesson, Skill, LessonTier
    │   ├── index.ts                 # Barrel exports, allLessons array, getLessonById
    │   ├── foundations-*.ts         # 28 foundations lessons (Phase 1 + Phase 2)
    │   └── {company}.ts             # 10 company deep-dive lessons
    └── companies/
        ├── types.ts                 # CompanyProfile, AnalystStepKind, WORKFLOW_STEPS
        ├── index.ts                 # allCompanies, getCompanyById
        └── {company}.ts             # 16 seeded company profiles for Analyst Mode
```

## Step Kinds (quick reference)

| Kind | Component | Purpose |
|------|-----------|---------|
| `'drill'` | `DrillStep` | Binary left/right choices, rapid-fire |
| `'estimate'` | `EstimateStep` | Numeric estimation with tolerance range |
| `'tap'` | `TapStep` | Find signals in a text passage |
| `'decide'` | `DecideStep` | Multiple choice with punchline reveal |
| `'thinking'` | `ThinkingStepComponent` | Free-response synthesis (no grading) |
| `'compare'` | `CompareStep` | Side-by-side candidate cards (real companies); decisive + open-call modes |

Full type definitions, per-kind design rules, and the lesson-creation template live in [docs/architecture.md](docs/architecture.md).

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

## Deeper Detail

This file is intentionally short — orientation only. For depth:

- **[docs/architecture.md](docs/architecture.md)** — full Architecture (data-driven lessons, phase state machine, routing, progression), full Type System with all 6 step interfaces, per-kind Step Design Patterns, the Creating-a-New-Lesson template, Curriculum source of truth, and the internals of Analyst Mode, Daily Practice, XP + Levels + Quests, and the Research Journal.
- **[docs/pedagogy.md](docs/pedagogy.md)** — the Four Layers of Investing Skill (the anchor for every product decision), Content Quality Standards (good vs. bad questions/feedback/context), the 10 Pedagogical Principles, and What Makes This Project Different.
- **[docs/roadmap.md](docs/roadmap.md)** — North Star, Phase 1-4 in detail, and the pre-pivot work shipped.
