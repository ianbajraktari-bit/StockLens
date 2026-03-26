import { useState, useEffect } from 'react';

export interface LiveQuote {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap: number;
  pe: number | null;
  forwardPe: number | null;
  eps: number | null;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;
  volume: number;
  avgVolume: number;
  dividendYield: number | null;
  marketState: string;
  timestamp: string;
  source: string;
  label: string;
}

export interface LiveFinancials {
  symbol: string;
  price: number;
  marketCap: number;
  pe: number | null;
  forwardPe: number | null;
  eps: number | null;
  revenueGrowth: number | null;
  grossMargins: number | null;
  operatingMargins: number | null;
  profitMargins: number | null;
  returnOnEquity: number | null;
  debtToEquity: number | null;
  freeCashflow: number | null;
  totalRevenue: number | null;
  beta: number | null;
  pegRatio: number | null;
  priceToBook: number | null;
  enterpriseValue: number | null;
  enterpriseToEbitda: number | null;
  earningsDate: string | null;
  timestamp: string;
  source: string;
  label: string;
}

export interface ChartDataPoint {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface LiveChart {
  symbol: string;
  prices: ChartDataPoint[];
  timestamp: string;
  source: string;
  label: string;
}

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  stale: boolean;
}

const STALE_THRESHOLD = 10 * 60 * 1000; // 10 minutes

function useFetch<T>(url: string | null): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: !!url,
    error: null,
    stale: false,
  });

  useEffect(() => {
    if (!url) return;

    let cancelled = false;
    setState((prev) => ({ ...prev, loading: true, error: null }));

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: T) => {
        if (!cancelled) {
          setState({ data, loading: false, error: null, stale: false });

          // Set stale after threshold
          setTimeout(() => {
            if (!cancelled) {
              setState((prev) => ({ ...prev, stale: true }));
            }
          }, STALE_THRESHOLD);
        }
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setState((prev) => ({
            ...prev,
            loading: false,
            error: err.message,
          }));
        }
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  return state;
}

export function useQuote(ticker: string | null) {
  return useFetch<LiveQuote>(ticker ? `/api/quote/${ticker}` : null);
}

export function useFinancials(ticker: string | null) {
  return useFetch<LiveFinancials>(ticker ? `/api/financials/${ticker}` : null);
}

export function useChart(
  ticker: string | null,
  period = '1y',
  interval = '1wk',
) {
  return useFetch<LiveChart>(
    ticker ? `/api/chart/${ticker}?period=${period}&interval=${interval}` : null,
  );
}

export function formatMarketCap(value: number | null | undefined): string {
  if (value == null) return 'N/A';
  if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
  if (value >= 1e9) return `$${(value / 1e9).toFixed(1)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(0)}M`;
  return `$${value.toLocaleString()}`;
}

export function formatPercent(value: number | null | undefined): string {
  if (value == null) return 'N/A';
  return `${(value * 100).toFixed(1)}%`;
}

export function formatPrice(value: number | null | undefined): string {
  if (value == null) return 'N/A';
  return `$${value.toFixed(2)}`;
}

export function formatRatio(value: number | null | undefined): string {
  if (value == null) return 'N/A';
  return `${value.toFixed(1)}x`;
}
