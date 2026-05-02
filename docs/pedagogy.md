# StockLens — Pedagogy

The educational philosophy. For orientation, see [CLAUDE.md](../CLAUDE.md).

## The Four Layers of Investing Skill

This is the anchor. Every product decision should be asked: *which layer does this build?* If the answer is "none," cut it.

1. **Vocabulary** (~100 terms — margin, P/E, moat, recurring revenue, etc.). Small, mostly memorizable. *This* is where Duolingo-style mechanics work. Drills, flashcards, definitions. Foundations Phase 1 lives here.
2. **Mental models** (~30 patterns — how moats work, how cycles work, how cash differs from earnings, how operating leverage cuts both ways). Memorize-able conceptually, only useful in context. Foundations Phase 2 + company deep dives target this layer.
3. **Judgment under uncertainty** — given an ambiguous real situation, form a defensible view at a defensible price. *This is the actual skill.* Cannot be drilled. Built by repeated exposure to ambiguous decisions where smart people disagree. Analyst Mode + the new `compare` step (open-call mode) + the Simulator (Phase 2) target this layer.
4. **Emotional discipline** — hold conviction through a 30% drawdown, change your mind when facts change without flipping with sentiment, sit on cash when nothing is attractive. The thing that actually determines long-term outcomes. *No app currently teaches this.* The Simulator (Phase 2) is the only mechanic that builds it — because the user must commit before knowing outcomes.

When evaluating a feature: layers 1-2 are *table stakes*; layers 3-4 are the *moat*. Most investing edu apps stop at layer 2 and call it a day. We don't.

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
