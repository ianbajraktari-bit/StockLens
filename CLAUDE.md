# StockLens — Claude Agent Guide

## What This Project Is

StockLens is a Duolingo-style app that teaches people how to think like investors. Not memorize facts — **think**. The app teaches users to form opinions on companies, weigh risks against valuations, and make investment decisions using real reasoning.

The core design principle: **every interaction should force the user to think, not just read.**

## Tech Stack

- React 19 + TypeScript (strict mode)
- Vite 8 with @vitejs/plugin-react
- Tailwind CSS 4 with custom dark theme (`src/index.css`)
- Framer Motion for animations
- Lucide React for icons
- localStorage for completion tracking (no backend, no accounts)
- Deployed on Vercel (`vercel.json` has SPA rewrite)

## Project Structure

```
src/
├── App.tsx                          # Lesson picker, completion tracking, routing
├── main.tsx                         # Entry point
├── index.css                        # Tailwind theme (dark mode, custom colors)
├── components/
│   ├── QuestionBlock.tsx            # Renders question + 4 answer options
│   ├── FeedbackBlock.tsx            # Post-answer feedback (punchline, reflection, details)
│   ├── Navbar.tsx                   # Top nav bar
│   ├── MetricCard.tsx               # Financial metric display card
│   ├── DecisionPanel.tsx            # Bull/bear/neutral stance selector
│   ├── SectionCard.tsx              # Generic section wrapper
│   ├── PriceChart.tsx               # Recharts area chart
│   └── RevenueBar.tsx               # Revenue segment bar
├── pages/
│   └── LessonPage.tsx               # Phase state machine for lesson flow
└── data/
    ├── lessons/
    │   ├── types.ts                 # QuizQuestion, ThinkingStep, Lesson interfaces
    │   ├── index.ts                 # Barrel exports, allLessons array, getLessonById
    │   ├── foundations-margins.ts   # "What a Business Keeps"
    │   ├── foundations-recurring.ts # "Money That Comes Back"
    │   ├── foundations-drivers.ts   # "What Actually Drives a Business"
    │   ├── apple.ts                 # Apple company lesson (most advanced)
    │   ├── nvidia.ts                # NVIDIA company lesson
    │   └── costco.ts                # Costco company lesson
    ├── types.ts                     # Company interface (for CompanyPage)
    ├── companies.ts                 # Company data array
    ├── amazon.ts                    # Amazon company data
    ├── costco.ts                    # Costco company data
    └── nvidia.ts                    # NVIDIA company data
```

## Architecture — How It Works

### Data-Driven Lessons

All lesson content lives in typed data objects. The UI is generic — one `LessonPage` renders any lesson. To create a new lesson, you only create a new data file and add it to `index.ts`. No UI changes needed.

### Phase State Machine (LessonPage.tsx)

```
intro → answering → feedback → answering → ... → thinking → thinking-revealed → complete
```

Phases:
- **intro**: Lesson overview, key facts, topics, "Start Lesson" button
- **answering**: Show question + options. If question has `gutCheck` and gut not done, show gut check first (auto-advances after 500ms on selection)
- **feedback**: Question collapses to one-line reminder. Shows punchline (if exists) or full explanation. Shows reflection (if exists). Shows takeaway + continue.
- **thinking**: Free-response textarea (min 10 chars). Only on company lessons.
- **thinking-revealed**: Shows model answer + strong reasoning criteria
- **complete**: Score, completion message, takeaways, restart/back buttons. Fires `onComplete` callback to mark lesson in localStorage.

### Lesson Picker (App.tsx)

- Splits lessons into "Foundations" (`id.startsWith('foundations-')`) and "Company Deep Dives"
- Tracks completion via localStorage key `'stocklens-completed'` (JSON array of IDs)
- Shows visual states: completed (green check, "Redo"), up next (accent border, "Up next"), locked (default)
- `allLessons` array in `index.ts` controls ordering

## Type System

### QuizQuestion

```typescript
interface QuizQuestion {
  topic: string;                    // Step label ("The Business", "Investor Quality")
  topicIcon: LucideIcon;           // Icon displayed next to topic
  context?: string;                // Setup text shown before question
  gutCheck?: {                     // Optional pre-question instinct check
    prompt: string;                // "Quick gut check..."
    nudge: string;                 // "No wrong answer..."
    options: string[];             // 2 choices
    reflections: string[];         // 2 tailored responses
  };
  question: string;                // The main question
  options: string[];               // 4 answer choices
  correctIndex: number;            // Index of correct answer
  punchline?: string;              // 1-2 sentence key insight (shown instead of full explanation)
  reflection?: {                   // Optional post-punchline active step
    prompt: string;                // Follow-up question
    options: string[];             // 2-3 choices (no correct answer)
    responses: string[];           // Tailored response per choice
  };
  explanation: string;             // Full explanation (behind "See why" if punchline exists)
  wrongExplanations: string[];     // One per option (empty string for correct answer's slot)
  takeaway: string;                // Key learning point
}
```

### Lesson

```typescript
interface Lesson {
  id: string;                      // 'foundations-margins', 'apple', etc.
  emoji: string;                   // Displayed on cards and headers
  title: string;
  subtitle: string;
  description: string;             // Multi-sentence overview for intro screen
  estimatedMinutes: number;
  dataAsOf: string;                // 'Q1 2025' or '' for foundations
  keyFacts: { label, value, detail }[];  // Empty array for foundations
  topics: { label, icon }[];       // 4 items, shown on intro + picker
  storyArc?: string[];             // Optional narrative labels per question
  questions: QuizQuestion[];       // Typically 4 questions
  thinkingStep?: ThinkingStep;     // Optional final free-response
  takeaways: string[];             // 4 bullet points for completion screen
  completionMessages: { perfect, great, good, low: string };
}
```

### ThinkingStep

```typescript
interface ThinkingStep {
  prompt: string;                  // Open-ended question
  placeholder: string;             // Textarea hint
  modelAnswer: string;             // Example strong answer
  strongReasoningIncludes: string[]; // 3 criteria for good reasoning
}
```

## Interaction Patterns

### 1. Gut Check (pre-question)

**Purpose:** Activate System 1 thinking. Get the user to commit to an instinct BEFORE they see the analytical question. This creates a "stake" — they care about the answer because they already picked a side.

**Design rules:**
- Always 2 options (binary choice)
- No correct answer — both are valid first reactions
- Auto-advances 500ms after selection (no confirm button)
- Reflections acknowledge the user's instinct, then pivot to why reality is more nuanced
- Use on questions where there's a common intuitive bias to surface

**Currently applied to:** foundations-margins Q2, foundations-recurring Q3, foundations-drivers Q3

### 2. Punchline (post-answer)

**Purpose:** Deliver the core insight in 1-2 sentences immediately after answering, instead of a wall of text. The full explanation goes behind a "See why" toggle.

**Design rules:**
- Maximum 2 sentences
- Must contain the surprising reframe or key number
- Should make the user feel like they learned something in 3 seconds
- Full explanation + wrong-answer breakdowns are preserved behind "See why"

**Currently applied to:** All 4 Apple questions

### 3. Reflection (post-punchline)

**Purpose:** Force the user to DO something with the insight instead of passively reading it. One quick tap, no typing.

**Design rules:**
- 2-3 options representing different thinking approaches, NOT random valid answers
- Options should form a spectrum (e.g., risk tolerance levels, analytical lenses)
- No correct answer, but responses subtly guide toward stronger reasoning
- Gates the Continue button — user must engage before moving on
- Responses should be 1-2 sentences, not paragraphs

**Currently applied to:** Apple Q1 (analytical lens spectrum), Apple Q3 (risk tolerance spectrum)

### 4. Thinking Step (end of lesson)

**Purpose:** Synthesize everything learned into a written opinion. Forces integration of all concepts.

**Design rules:**
- One open-ended prompt asking for a judgment call
- Minimum 10 characters to submit
- Model answer shown after submission (not before)
- 3 criteria for "what strong reasoning includes"
- No AI grading — self-comparison only

**Currently applied to:** All 3 company lessons (Apple, NVIDIA, Costco)

## Ideal Interaction Loop (Duolingo-style)

The tightest, most engaging loop per question:

```
[gut check — optional, 1 tap]
     ↓
[question — read context, pick answer, submit]
     ↓
[punchline — 1-2 sentences, instant insight]
     ↓
[reflection — optional, 1 tap, tailored response]
     ↓
[takeaway — 1 line]
     ↓
[continue → next question]
```

At any moment, the user should see ONLY what they need to act on right now. When feedback shows, the question collapses. When reflection is unanswered, the Continue button is hidden.

## Content Quality Standards

### Questions Should Teach Reasoning, Not Trivia

BAD: "What percentage of Apple's revenue comes from Services?"
GOOD: "As an investor, which aspect of this revenue mix should concern you most?"

BAD: "What is Apple's P/E ratio?"
GOOD: "At 30x earnings with 8% growth, what is the most thoughtful investor reaction?"

### Every Wrong Answer Should Be Plausibly Tempting

Each wrong option should represent a real cognitive trap:
- **Surface-level thinking**: "Revenue is spread across five segments, so Apple is well-diversified" (counts segments without tracing dependencies)
- **Emotional reasoning**: "Buy immediately — Apple is a great business" (conflates business quality with stock quality)
- **Anchoring on one number**: "Avoid it — the P/E is above average" (ignores quality premium)

### Wrong Explanations Should Teach, Not Dismiss

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
  description: '2-3 sentences explaining what the user will learn and why it matters.',
  estimatedMinutes: 2,
  dataAsOf: '',              // 'Q1 2025' for company lessons, '' for foundations
  keyFacts: [],              // Empty for foundations, 4 items for company lessons
  topics: [
    { label: 'Topic 1', icon: IconA },
    { label: 'Topic 2', icon: IconB },
    { label: 'Topic 3', icon: IconC },
    { label: 'Topic 4', icon: IconD },
  ],
  // storyArc: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],  // Optional
  questions: [
    {
      topic: 'Display Topic Name',
      topicIcon: IconA,
      context: 'Setup text with specific numbers and scenarios...',
      question: 'Question that requires reasoning, not recall?',
      options: [
        'Correct answer — the reasoning-based choice',
        'Tempting wrong answer — surface-level trap',
        'Tempting wrong answer — emotional reasoning trap',
        'Tempting wrong answer — anchoring trap',
      ],
      correctIndex: 0,
      // punchline: 'Optional 1-2 sentence key insight.',
      explanation: 'Full explanation (3-5 sentences). Shown directly or behind "See why".',
      wrongExplanations: [
        '',  // Empty string for correct answer's index
        'Why option B is weaker (2-3 sentences, teaches not dismisses).',
        'Why option C is weaker (2-3 sentences).',
        'Why option D is weaker (2-3 sentences).',
      ],
      takeaway: 'One sentence the user should remember.',
    },
    // ... more questions (typically 4 total)
  ],
  // thinkingStep: { ... },  // Optional, for company lessons
  takeaways: [
    'Takeaway 1',
    'Takeaway 2',
    'Takeaway 3',
    'Takeaway 4',
  ],
  completionMessages: {
    perfect: 'Message for 100%.',
    great: 'Message for 75%+.',
    good: 'Message for 50%+.',
    low: 'Message for <50%.',
  },
};
```

### Step 2: Register in index.ts

Add export and import to `src/data/lessons/index.ts`:

```typescript
export { myLesson } from './my-lesson';
```

Add to the `allLessons` array in the correct position (foundations first, then company lessons).

### Step 3: Verify

- Run `npx tsc --noEmit` (must pass with zero errors)
- Run `npx vite build` (must succeed)
- Lesson appears automatically in the picker

## Lesson Categories

### Foundations Lessons (`id: 'foundations-*'`)

Teach universal investing concepts using relatable, non-stock scenarios.

- **No keyFacts** (empty array)
- **No dataAsOf** (empty string)
- **No thinkingStep**
- Use everyday businesses (restaurants, tutoring, snack boxes, SaaS)
- 4 questions, ~2 minutes
- May have gut checks on 1-2 questions

### Company Lessons

Apply foundations concepts to real public companies using real data.

- **4 keyFacts** with real numbers and dates
- **dataAsOf** set to latest quarter
- **thinkingStep** with investment judgment prompt
- **storyArc** recommended (narrative labels per question)
- 4 questions following the arc: business model → quality/bull case → risk/bear case → decision
- All questions should have **punchlines**
- 1-2 questions should have **reflections**

## Curriculum Vision

The full learning path (not all built yet):

### Phase 1: Foundations (concepts via everyday scenarios)
- What a Business Keeps (margins) ✅
- Money That Comes Back (recurring revenue) ✅
- What Actually Drives a Business (key drivers) ✅
- *Future: Reading an Income Statement, Cash Flow vs Profit, Competitive Moats, Valuation Basics, Market Expectations, Risk Assessment*

### Phase 2: Company Deep Dives (apply concepts to real stocks)
- Apple ✅ (most advanced — has punchlines, reflections, story arc)
- NVIDIA ✅
- Costco ✅
- *Future: Amazon, Microsoft, Tesla, Google, Netflix, etc.*

### Phase 3: Advanced Topics
- *Building a thesis, Portfolio construction, When to sell, Behavioral biases, Sector analysis*

## Design Constraints

- **No backend** — localStorage only, no accounts, no databases
- **No AI grading** — self-comparison via model answers and criteria
- **No redesigns** — extend existing patterns, don't rebuild
- **All fields are optional** — new features use optional fields on existing types so old lessons work unchanged
- **Dark theme only** — custom color system in index.css
- **Mobile-first** — max-w-2xl centered layout, touch-friendly tap targets

## Color System

```
Background:    dark-900 (#0a0a0f)
Cards:         dark-800 (#12121a)
Hover:         dark-700 (#1a1a26)
Borders:       border (#1e293b)
Accent:        accent (#6366f1) / accent-light (#818cf8)
Correct:       green (#22c55e)
Wrong:         red (#ef4444)
Warning:       amber (#f59e0b)
Text:          text-primary (#f1f5f9) / text-secondary (#94a3b8) / text-muted (#64748b)
```

## Common Commands

```bash
npx tsc --noEmit          # Type check (must pass before committing)
npx vite build            # Production build
npm run dev               # Dev server
```

## What Makes This Project Different

Most investing education is either:
1. **Textbook-style** — walls of text, no interaction, no retention
2. **Quiz-style** — trivia questions testing memorization
3. **Simulation-style** — fake trading with no conceptual foundation

StockLens is different because:
- **It teaches thinking patterns**, not facts. Every question requires reasoning.
- **It uses cognitive science** — gut checks activate intuition, punchlines create surprise, reflections force application
- **It builds progressively** — foundations teach concepts via everyday scenarios, then company lessons apply them to real stocks
- **Feedback teaches, not grades** — wrong answer explanations are mini-lessons, not dismissals

The goal is that after completing all lessons, a user can pick up any company's financials and form a reasoned opinion — not because they memorized what to think, but because they learned how to think.
