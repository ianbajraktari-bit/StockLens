interface MetricCardProps {
  label: string;
  value: string;
  explanation: string;
  sentiment?: 'positive' | 'neutral' | 'negative';
  industryAvg?: string;
}

export default function MetricCard({
  label,
  value,
  explanation,
  sentiment,
  industryAvg,
}: MetricCardProps) {
  const sentimentColor =
    sentiment === 'positive'
      ? 'text-green bg-green-glow'
      : sentiment === 'negative'
        ? 'text-red bg-red-glow'
        : 'text-amber bg-amber-glow';

  return (
    <div className="rounded-xl border border-border bg-dark-700 p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-text-secondary">{label}</p>
        {sentiment && (
          <span
            className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${sentimentColor}`}
          >
            {sentiment}
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-3">
        <p className="text-2xl font-bold text-text-primary">{value}</p>
        {industryAvg && (
          <p className="text-sm text-text-muted">
            Industry avg: {industryAvg}
          </p>
        )}
      </div>
      <p className="text-sm text-text-secondary leading-relaxed">
        {explanation}
      </p>
    </div>
  );
}
