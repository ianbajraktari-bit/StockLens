import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import yahooFinance from 'yahoo-finance2';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Simple in-memory cache
const cache = new Map<string, { data: unknown; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function getCached<T>(key: string): T | null {
  const entry = cache.get(key);
  if (entry && Date.now() - entry.timestamp < CACHE_TTL) {
    return entry.data as T;
  }
  return null;
}

function setCache(key: string, data: unknown): void {
  cache.set(key, { data, timestamp: Date.now() });
}

// Suppress yahoo-finance2 community API notices
try {
  yahooFinance.setGlobalConfig({ notifyReceivedByApi: false });
} catch {
  // Ignore if method not available
}

// GET /api/quote/:symbol - Current quote data
app.get('/api/quote/:symbol', async (req, res) => {
  const { symbol } = req.params;
  const cacheKey = `quote:${symbol}`;

  try {
    const cached = getCached(cacheKey);
    if (cached) {
      res.json(cached);
      return;
    }

    const quote = await yahooFinance.quote(symbol);

    const data = {
      symbol: quote.symbol,
      name: quote.shortName || quote.longName,
      price: quote.regularMarketPrice,
      change: quote.regularMarketChange,
      changePercent: quote.regularMarketChangePercent,
      marketCap: quote.marketCap,
      pe: quote.trailingPE,
      forwardPe: quote.forwardPE,
      eps: quote.epsTrailingTwelveMonths,
      fiftyTwoWeekHigh: quote.fiftyTwoWeekHigh,
      fiftyTwoWeekLow: quote.fiftyTwoWeekLow,
      volume: quote.regularMarketVolume,
      avgVolume: quote.averageDailyVolume3Month,
      dividendYield: quote.dividendYield,
      marketState: quote.marketState,
      timestamp: new Date().toISOString(),
      source: 'Yahoo Finance',
      label: 'live' as const,
    };

    setCache(cacheKey, data);
    res.json(data);
  } catch (err) {
    console.error(`Error fetching quote for ${symbol}:`, err);
    res.status(500).json({
      error: 'Failed to fetch quote data',
      symbol,
      timestamp: new Date().toISOString(),
    });
  }
});

// GET /api/chart/:symbol - Historical price data
app.get('/api/chart/:symbol', async (req, res) => {
  const { symbol } = req.params;
  const period = (req.query.period as string) || '1y';
  const interval = (req.query.interval as string) || '1wk';
  const cacheKey = `chart:${symbol}:${period}:${interval}`;

  try {
    const cached = getCached(cacheKey);
    if (cached) {
      res.json(cached);
      return;
    }

    const now = new Date();
    const periodMap: Record<string, number> = {
      '1m': 30,
      '3m': 90,
      '6m': 180,
      '1y': 365,
      '2y': 730,
    };
    const days = periodMap[period] || 365;
    const start = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);

    const result = await yahooFinance.chart(symbol, {
      period1: start,
      period2: now,
      interval: interval as '1d' | '1wk' | '1mo',
    });

    const data = {
      symbol,
      prices: result.quotes.map((q) => ({
        date: q.date?.toISOString().split('T')[0],
        open: q.open ? Math.round(q.open * 100) / 100 : null,
        high: q.high ? Math.round(q.high * 100) / 100 : null,
        low: q.low ? Math.round(q.low * 100) / 100 : null,
        close: q.close ? Math.round(q.close * 100) / 100 : null,
        volume: q.volume,
      })).filter((q) => q.close !== null),
      timestamp: new Date().toISOString(),
      source: 'Yahoo Finance',
      label: 'historical',
    };

    setCache(cacheKey, data);
    res.json(data);
  } catch (err) {
    console.error(`Error fetching chart for ${symbol}:`, err);
    res.status(500).json({
      error: 'Failed to fetch chart data',
      symbol,
      timestamp: new Date().toISOString(),
    });
  }
});

// GET /api/financials/:symbol - Key financial metrics
app.get('/api/financials/:symbol', async (req, res) => {
  const { symbol } = req.params;
  const cacheKey = `financials:${symbol}`;

  try {
    const cached = getCached(cacheKey);
    if (cached) {
      res.json(cached);
      return;
    }

    const [quote, summary] = await Promise.all([
      yahooFinance.quote(symbol),
      yahooFinance.quoteSummary(symbol, {
        modules: ['financialData', 'defaultKeyStatistics', 'earningsHistory', 'calendarEvents'],
      }),
    ]);

    const fin = summary.financialData;
    const stats = summary.defaultKeyStatistics;
    const calendar = summary.calendarEvents;

    const data = {
      symbol,
      price: quote.regularMarketPrice,
      marketCap: quote.marketCap,
      pe: quote.trailingPE,
      forwardPe: quote.forwardPE,
      eps: quote.epsTrailingTwelveMonths,
      revenueGrowth: fin?.revenueGrowth,
      grossMargins: fin?.grossMargins,
      operatingMargins: fin?.operatingMargins,
      profitMargins: fin?.profitMargins,
      returnOnEquity: fin?.returnOnEquity,
      debtToEquity: fin?.debtToEquity,
      freeCashflow: fin?.freeCashflow,
      totalRevenue: fin?.totalRevenue,
      beta: stats?.beta,
      pegRatio: stats?.pegRatio,
      priceToBook: stats?.priceToBook,
      enterpriseValue: stats?.enterpriseValue,
      enterpriseToEbitda: stats?.enterpriseToEbitda,
      earningsDate: calendar?.earnings?.earningsDate?.[0],
      timestamp: new Date().toISOString(),
      source: 'Yahoo Finance',
      label: 'reported' as const,
    };

    setCache(cacheKey, data);
    res.json(data);
  } catch (err) {
    console.error(`Error fetching financials for ${symbol}:`, err);
    res.status(500).json({
      error: 'Failed to fetch financial data',
      symbol,
      timestamp: new Date().toISOString(),
    });
  }
});

// POST /api/evaluate - Evaluate quiz answers
app.post('/api/evaluate', (req, res) => {
  try {
    const body = req.body;

    if (!body || !body.questionType || body.answer === undefined) {
      res.status(400).json({ error: 'Missing required fields: questionType, answer' });
      return;
    }

    const { questionType } = body;

    if (questionType === 'free-response') {
      const { answer, rubric } = body;

      if (!rubric || !rubric.keyConceptsExpected || !Array.isArray(rubric.keyConceptsExpected)) {
        res.status(400).json({ error: 'free-response requires rubric with keyConceptsExpected array' });
        return;
      }

      const answerStr: string = String(answer);
      const answerLower = answerStr.toLowerCase();
      const keyConcepts: string[] = rubric.keyConceptsExpected;

      // Keyword-matching heuristic
      const matchedConcepts: string[] = [];
      const missedConcepts: string[] = [];

      for (const concept of keyConcepts) {
        if (answerLower.includes(concept.toLowerCase())) {
          matchedConcepts.push(concept);
        } else {
          missedConcepts.push(concept);
        }
      }

      // Scoring
      let score = 0;

      // Base score: 3/10 for any substantive answer (>10 chars)
      if (answerStr.trim().length > 10) {
        score += 3;
      }

      // +1 point for each key concept found (up to keyConceptsExpected.length points)
      score += matchedConcepts.length;

      // +1 point for specificity (answer > 50 chars)
      if (answerStr.trim().length > 50) {
        score += 1;
      }

      // +1 point for mentioning evidence or numbers
      if (/\d/.test(answerStr) || /evidence|data|study|research|report|statistic|percent|%/i.test(answerStr)) {
        score += 1;
      }

      // Cap at 10
      score = Math.min(score, 10);

      // Build gotRight
      const gotRight = matchedConcepts.length > 0
        ? `You correctly identified: ${matchedConcepts.join(', ')}.`
        : answerStr.trim().length > 10
          ? 'You provided a substantive answer but missed the key concepts.'
          : '';

      // Build missing
      const missing = missedConcepts.length > 0
        ? `You did not mention: ${missedConcepts.join(', ')}.`
        : 'You covered all the key concepts.';

      // Build strongerFraming from rubric objective + scoringNotes
      const objective = rubric.objective || '';
      const scoringNotes = rubric.scoringNotes || '';
      const strongerFraming = [objective, scoringNotes].filter(Boolean).join('. ');

      // Build followUp from objective
      const followUp = objective
        ? `Consider further: how does "${objective.toLowerCase()}" apply in different market conditions?`
        : null;

      res.json({
        score,
        maxScore: 10,
        gotRight,
        missing,
        strongerFraming,
        followUp,
      });
      return;
    }

    // Non-free-response question types
    const validTypes = ['multiple-choice', 'ranking', 'select-best', 'bull-bear-classify', 'scenario-choice'];
    if (!validTypes.includes(questionType)) {
      res.status(400).json({ error: `Unsupported questionType: ${questionType}. Supported: free-response, ${validTypes.join(', ')}` });
      return;
    }

    const { answer, correctAnswer, explanation } = body;

    if (correctAnswer === undefined) {
      res.status(400).json({ error: 'Non-free-response questions require correctAnswer' });
      return;
    }

    // Ranking questions: score proportional to items in correct position
    if (questionType === 'ranking') {
      if (!Array.isArray(answer) || !Array.isArray(correctAnswer)) {
        res.status(400).json({ error: 'ranking questionType requires answer and correctAnswer to be arrays' });
        return;
      }

      const totalItems = correctAnswer.length;
      if (totalItems === 0) {
        res.json({
          score: 10,
          maxScore: 10,
          gotRight: 'No items to rank.',
          missing: '',
          strongerFraming: explanation || '',
          followUp: null,
        });
        return;
      }

      let correctPositions = 0;
      for (let i = 0; i < totalItems; i++) {
        if (i < answer.length && String(answer[i]) === String(correctAnswer[i])) {
          correctPositions++;
        }
      }

      const score = Math.round((correctPositions / totalItems) * 10 * 10) / 10; // one decimal place

      const gotRight = correctPositions > 0
        ? `You placed ${correctPositions} out of ${totalItems} items in the correct position.`
        : '';

      const missing = correctPositions < totalItems
        ? `The correct ranking was: ${correctAnswer.join(', ')}.`
        : '';

      res.json({
        score,
        maxScore: 10,
        gotRight,
        missing,
        strongerFraming: explanation || '',
        followUp: null,
      });
      return;
    }

    // Simple correct/incorrect for other non-free-response types
    const isCorrect = String(answer) === String(correctAnswer);
    const score = isCorrect ? 10 : 0;

    res.json({
      score,
      maxScore: 10,
      gotRight: isCorrect ? 'Correct!' : '',
      missing: isCorrect ? '' : `The correct answer was: ${correctAnswer}. ${explanation || ''}`.trim(),
      strongerFraming: explanation || '',
      followUp: null,
    });
  } catch (err) {
    console.error('Error in /api/evaluate:', err);
    res.status(500).json({ error: 'Internal server error during evaluation' });
  }
});

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`StockLens API server running on port ${PORT}`);
});
