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

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`StockLens API server running on port ${PORT}`);
});
