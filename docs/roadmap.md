# StockLens — Product Roadmap

For orientation, see [CLAUDE.md](../CLAUDE.md).

StockLens is mid-pivot from "great curriculum app" to "full hub for becoming an investor." The new shape has three intertwined surfaces — **Desk** (home base), **Floor** (simulator), **Library** (lessons + companies + tools as a resource) — all hanging off the **Research Journal** spine. The roadmap is organized in **four phases**, each shippable on its own.

> **North Star:** a user who works through this app for ~6 months can pick up any public company's 10-K, write a reasoned investment memo, hold a thesis through changing data, and articulate which biases they personally fall into. **That's the difference between education and skill.**

## Phase 1 — Journal foundation + IA refactor (in progress)

The connective spine. Everything hangs off this.

- [x] **Research Journal v1** — `lib/journal.ts`, typed entries (memo / reflection / note + future trade_rationale / thesis), CRUD + search + stats, lazy idempotent backfill of legacy analyst responses, `/journal` page with feed + composer + filters, deep links back to source lesson/analysis
- [x] **Lesson reflection card** — structured-prompt card on lesson completion screens, 40-char minimum, idempotent per lesson, edits land back in the journal
- [x] **Header journal entry point** — live entry count, accent-toned pill in HomePage header
- [x] **Compare step kind** — `CompareStep` with decisive + open-call modes; redesigned `foundations-margins` as a connected scenario lesson using it
- [ ] **Information-architecture refactor** — rename home → `Desk`, reorganize routes into `/library/lessons/:id`, `/library/companies/:id`, `/library/practice`, `/floor` (placeholder), `/journal`. Old routes redirect.
- [ ] **Desk redesign** — replace the tab-bar HomePage with a "morning open" view: Today panel (streak, due reviews, in-progress work), Recent Journal feed, Continue prompts, quick-action buttons
- [ ] **Library hub** — browseable shelves (Lessons / Companies / Tools / Failure Cases), contextual surfacing from Desk and Floor
- [ ] **Apply scenario template to remaining Phase 1 lessons** — at minimum: Recurring Revenue, Moats, Drivers should adopt the new connected-scenario format that Margins now uses

## Phase 2 — Simulator MVP (the heart)

This is what makes the app *startup-level different*. No other investing app builds layer 4 (emotional discipline) because no other app forces the user to commit before knowing outcomes.

- [ ] **Fictional fund** — $100K starting capital, 5-10 watchlist companies (reuse Analyst Mode profiles)
- [ ] **Time advancement** — one in-app "week" per real day, or manual advance; market state (prices, news) progresses on a curated narrative
- [ ] **Curated event narratives** — for each watchlist company, a sequence of plausible quarterly events (earnings prints, competitive shifts, macro shocks, management changes). Static + designed, not LLM-generated, so events are pedagogically sharp.
- [ ] **Forced trade rationale** — every buy/sell/hold decision requires a written memo before submission; auto-creates a `trade_rationale` journal entry
- [ ] **Track-record dashboard** — running portfolio P/L, decision-by-decision accuracy, "predictions you made vs. what happened"
- [ ] **Adversarial pairing** — every bull thesis the user writes requires writing the bear thesis before submission

## Phase 3 — LLM Manager + content scale

The seriousness lever. Conversational pushback from an Anthropic-API-powered "manager" turns lazy memos into a visibly-failing user experience — which is what forces the engagement we can't trust users to bring on their own. **Requires real billing.**

- [ ] **LLM Manager** — when user submits a memo or trade rationale, an Anthropic-API-powered analyst challenges their reasoning conversationally ("Your thesis says the moat holds, but the renewal rate just dropped 5 points. Defend that."). User defends or revises. Targets layer 3 directly.
- [ ] **Bias profile** — over time, the manager builds a model of the user's recurring biases ("you tend to fall for narrative-driven stocks; you sell winners too early") and surfaces it
- [ ] **Failure case studies** — 30+ — Enron, Lehman, Sears, WeWork, GE, Pets.com, etc. Wins teach less than losses. New library shelf.
- [ ] **Content scale** — push toward 80-120 lessons total and 50+ company profiles. Volume creates the pattern-recognition substrate that skilled investors actually rely on.
- [ ] **Past-self surfacing** — "you wrote this 60 days ago — has anything changed?" prompts on aging journal entries

## Phase 4 — Real data, social, time machine

- [ ] **Real historical price feeds** — simulator can use real S&P data; portfolios reflect actual market moves (requires backend)
- [ ] **Time Machine mode** — show user a real company's 2015 10-K, have them write a thesis, then show what actually happened 2015→now. Hindsight calibration done right.
- [ ] **Mobile PWA polish, offline support**
- [ ] **Shareable analysis cards** — with care — no financial advice
- [ ] **Leaderboard / community** — ranked on analysis quality, not portfolio P/L
- [ ] **Diagnostic onboarding** — 5-question placement quiz to suggest a starting point (could ship earlier if it accelerates Phase 1)
- [ ] **Practice heatmap / calendar view** — visualize daily completion history and streak shape

## Pre-pivot work (already shipped — preserved here for reference)

These were the Tier-1-through-5 priorities before the pivot. They all shipped and remain part of the foundation. Most slot under Phase 1 (Library content) or are subsumed by Phase 2/3 ambitions.

- **Analyst Mode v1-v4** — 7-step workflow, 16 seeded companies across every major sector (banking, healthcare, pharma, semis, energy, staples, retail, SaaS, e-commerce, restaurants, media). Save responses, resume at first unanswered step. Becomes the analysis template inside the Phase 2 Simulator.
- **Daily Practice + spaced repetition** — Leitner-box per-item tracking, priority-scored selection, deterministic 5-question daily mix from completed lessons. Streak-feeding. Stays as a Library tool, surfaced from the Desk.
- **XP + Levels + Quests** — closed-form level curve `25·L·(L+1)`, 8-band title ladder (Novice → Market Wizard), 17-quest catalog. Extend to simulator actions in Phase 2; reward outcomes (predictions correct, theses held) not just output.
- **Critical curriculum gaps filled** — Index Funds, 10-K reading, Options, Bonds, Taxes (all under Foundations Phase 2 in `data/lessons/`).
- **Lesson rewrites** — first 4 + remaining Phase 1 + Moats lessons rewritten with real companies and harder judgment calls. Margins additionally upgraded to scenario-driven format using `compare`.
