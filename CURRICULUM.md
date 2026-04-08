# StockLens Curriculum Map

## Target User
College-age beginners who have zero investing background. Someone who just opened a Robinhood account and doesn't know what a P/E ratio is. The app should take them from nothing to forming their own investment opinions over weeks/months of use.

## Design Philosophy
- **Duolingo-style**: Short lessons (3-5 minutes), interactive, mobile-first
- **Teach thinking, not trivia**: Every interaction forces the user to reason, not memorize
- **Progressive unlocking**: Each unit builds on the last. You can't skip ahead.
- **Company deep dives are the "final exam"**: Users apply everything they've learned

## Interaction Patterns (use in every lesson)
1. **Gut Check** — Binary tap (2 options) before the real question. Activates intuition before analysis. Example: "Which matters more for a company: revenue or profit?" (no wrong answer — it's a priming question)
2. **Punchline** — 1-2 sentence key insight shown after answering. Full explanation hidden behind "See why" tap. Avoids wall-of-text.
3. **Reflection** — After the punchline, a follow-up that forces the user to DO something with the insight (apply it, compare it, predict with it).
4. **Thinking Step** — Free-response at the end of a lesson or unit. User writes their reasoning, then sees a model answer to compare against.

## Lesson Architecture
Each lesson is a data-driven object rendered by a generic `LessonPage` component.
Phase state machine: `intro → gut_check → question → feedback → punchline → reflection → [repeat] → thinking → complete`

---

## Unit 1: The Investor's Mindset
*Why invest at all? Build confidence that this is learnable.*

### Lesson 1.1: What Investing Actually Is
- Core idea: Investing = putting money to work so it earns more money. It's not gambling. It's not trading.
- Gut check: "Is buying a stock more like placing a bet or buying a piece of a business?"
- Punchline: "When you buy a stock, you become a part-owner of a real company. You own a tiny slice of their profits, their buildings, their future."
- Reflection: "If you owned 0.001% of your favorite restaurant, what would you care about?" (options: the food quality, the daily stock price, whether it's profitable, how the sign looks)
- Thinking step: "In your own words, what's the difference between investing and gambling?"

### Lesson 1.2: The Power of Compounding
- Core idea: Time is your biggest advantage. Starting early matters more than starting big.
- Gut check: "Which makes you more money: $10,000 invested at age 20, or $20,000 invested at age 30?"
- Punchline: "The $10,000 at age 20 wins — by a lot. Compounding means your money earns money on its money. Time is the multiplier."
- Include a simple interactive showing compound growth over time
- Thinking step: "Why do you think most people don't start investing until their 30s or 40s, even though starting earlier is better?"

### Lesson 1.3: Why Stocks Exist
- Core idea: Companies sell stock to raise money. You buy stock to share in their success (or failure).
- Gut check: "If a company needs $1 billion to build a new factory, should they borrow it or sell stock?"
- Punchline: "There's no single right answer — both have tradeoffs. But when a company sells stock, they're inviting you to be a partner. You share the upside AND the risk."

### Lesson 1.4: Your Brain vs. Your Portfolio
- Core idea: Intro to behavioral biases — your instincts are often wrong about investing.
- Gut check: "A stock you own drops 20%. Do you sell, hold, or buy more?"
- Punchline: "Most people sell — and that's usually the wrong move. Your brain is wired to avoid losses more than it seeks gains. This is called loss aversion, and it's the #1 reason amateur investors underperform."
- Reflection: "Which is harder to do: sell a stock that's gone up 50%, or hold a stock that's gone down 50%?" → Discuss why both feel difficult for different reasons

---

## Unit 2: Speaking the Language
*Learn the vocabulary so you can read the scoreboard.*

### Lesson 2.1: Stocks, Shares, and Market Cap
- What is a stock, a share, what market cap means and why a $500 stock isn't necessarily "more expensive" than a $10 stock

### Lesson 2.2: How Stock Prices Move
- Supply and demand, what drives price changes, the difference between price and value

### Lesson 2.3: The Major Indices
- S&P 500, Dow, Nasdaq — what they track and why people reference them

### Lesson 2.4: Types of Stocks
- Growth vs. value vs. dividend vs. cyclical (Lynch's categories). What kind of investor are you?

---

## Unit 3: How Businesses Make Money
*This is where the existing "Foundations" lessons fit, but restructured.*

### Lesson 3.1: Revenue — Where the Money Comes In
- Different types of revenue, why "top line" matters

### Lesson 3.2: Margins — What the Business Keeps
- (Existing: foundations-margins, but upgraded with interaction patterns)

### Lesson 3.3: Recurring vs. One-Time Revenue
- (Existing: foundations-recurring, upgraded)

### Lesson 3.4: Business Drivers — What Actually Moves the Needle
- (Existing: foundations-drivers, upgraded)

### Lesson 3.5: Business Models — How Different Companies Work
- Subscription vs. advertising vs. marketplace vs. hardware — how the model shapes everything

---

## Unit 4: Reading the Scoreboard
*Financial statements taught through stories, not spreadsheets.*

### Lesson 4.1: The Income Statement — A Company's Report Card
- Revenue, costs, profit. The "did they make money?" statement.

### Lesson 4.2: The Balance Sheet — What They Own vs. Owe
- Assets, liabilities, equity. The "how healthy is this company?" snapshot.

### Lesson 4.3: Cash Flow — The Money That Actually Moves
- Why profit ≠ cash. Why cash flow is what experienced investors care about most.

### Lesson 4.4: Red Flags — What Bad Numbers Look Like
- Declining margins, rising debt, negative cash flow despite "profits." Pattern recognition.

---

## Unit 5: Is This Stock Worth It?
*Valuation — the hardest concept, made simple.*

### Lesson 5.1: Price vs. Value
- Why a $500 stock can be "cheaper" than a $10 stock. Market cap revisited with depth.

### Lesson 5.2: P/E Ratio — The One Number Every Investor Should Know
- What it means, how to use it, when it's misleading

### Lesson 5.3: Growth and PEG — Paying for the Future
- Why high P/E might be fine if growth is high enough

### Lesson 5.4: Comparing Companies — Apples to Apples
- Same-industry comparisons, why you can't compare a tech company's P/E to a bank's

---

## Unit 6: Building a Thesis
*Going from "I like this company" to "I should buy this stock."*

### Lesson 6.1: The Two-Minute Drill
- Can you explain in 2 minutes why you'd buy this? If not, you're not ready.

### Lesson 6.2: Spotting Opportunity in Daily Life
- Lynch's core insight: you encounter investment ideas every day

### Lesson 6.3: The Research Checklist
- What to look at before buying: financials, competitive position, valuation, risks

### Lesson 6.4+: Company Deep Dives
- Apple, NVIDIA, Costco, Amazon, etc.
- These are the APPLICATION of everything learned in Units 1-5
- Should use all four interaction patterns heavily
- User should be tested on concepts from earlier units within the company context

---

## Unit 7: Your Portfolio
*Putting it all together.*

### Lesson 7.1: Diversification — Why and How Much
### Lesson 7.2: When to Buy and When to Sell
### Lesson 7.3: Tracking Your Investments
### Lesson 7.4: Common Mistakes Revisited
- Behavioral biases from Unit 1, now with real portfolio stakes

---

## Unit 8: Leveling Up (Advanced)
*For users who complete all foundations.*

### Lesson 8.1: Moats — What Makes a Business Defensible
### Lesson 8.2: Management Quality
### Lesson 8.3: Industry Analysis
### Lesson 8.4: Advanced Valuation (DCF, Free Cash Flow Yield)

---

## Implementation Priority
1. Build the lesson rendering system (phase state machine, interaction patterns)
2. Build Unit 1 (4 lessons) — this is the on-ramp, most important for beginners
3. Build Unit 2 (4 lessons) — vocabulary foundation
4. Upgrade existing Foundations content into Unit 3 format
5. Build Units 4-5 — financial literacy core
6. Convert company deep dives into Unit 6 interactive format
7. Units 7-8 as the app matures

## Progression System
- Lessons unlock sequentially within a unit
- Units unlock when the previous unit is complete
- Track completion, scores, and streaks in localStorage
- Skills tracking: map each lesson to skills (e.g., "valuation", "financial statements", "behavioral awareness")
