import { useQuote, formatPrice, formatMarketCap } from '../hooks/useMarketData';
import SourceBadge from './SourceBadge';

interface LiveQuoteProps {
  ticker: string;
  companyColor: string;
}

export default function LiveQuote({ ticker, companyColor }: LiveQuoteProps) {
  const { data, loading, error, stale } = useQuote(ticker);

  if (loading) {
    return (
      <div className="rounded-xl border border-border bg-dark-700 p-5 animate-pulse">
        <div className="h-4 w-24 bg-dark-500 rounded mb-3" />
        <div className="h-8 w-32 bg-dark-500 rounded mb-2" />
        <div className="h-3 w-48 bg-dark-500 rounded" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="rounded-xl border border-border bg-dark-700 p-5">
        <p className="text-sm text-text-muted">
          Live data unavailable for {ticker}
        </p>
        <p className="text-xs text-text-muted mt-1">
          Using hardcoded estimates below
        </p>
      </div>
    );
  }

  const isPositive = (data.change ?? 0) >= 0;

  return (
    <div className="rounded-xl border border-border bg-dark-700 p-5">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs text-text-muted mb-1">
            {data.marketState === 'REGULAR' ? 'Market Open' : 'Market Closed'}
          </p>
          <div className="flex items-baseline gap-3">
            <p className="text-3xl font-bold text-text-primary">
              {formatPrice(data.price)}
            </p>
            <div
              className={`flex items-center gap-1 text-sm font-medium ${
                isPositive ? 'text-green' : 'text-red'
              }`}
            >
              <span>
                {isPositive ? '+' : ''}
                {data.change?.toFixed(2)}
              </span>
              <span>
                ({isPositive ? '+' : ''}
                {data.changePercent?.toFixed(2)}%)
              </span>
            </div>
          </div>
        </div>
        <div
          className="w-3 h-3 rounded-full animate-pulse"
          style={{ backgroundColor: companyColor }}
          title="Live data"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
        <MiniMetric label="Market Cap" value={formatMarketCap(data.marketCap)} />
        <MiniMetric
          label="P/E"
          value={data.pe ? `${data.pe.toFixed(1)}x` : 'N/A'}
        />
        <MiniMetric label="52W High" value={formatPrice(data.fiftyTwoWeekHigh)} />
        <MiniMetric label="52W Low" value={formatPrice(data.fiftyTwoWeekLow)} />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <SourceBadge
          source={data.source}
          date={new Date(data.timestamp).toLocaleString()}
          label={stale ? 'estimated' : 'live'}
        />
        {stale && (
          <span className="text-[10px] text-amber">Data may be stale</span>
        )}
      </div>
    </div>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] text-text-muted uppercase tracking-wider">
        {label}
      </p>
      <p className="text-sm font-semibold text-text-primary">{value}</p>
    </div>
  );
}
