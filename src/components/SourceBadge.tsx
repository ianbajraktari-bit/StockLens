interface SourceBadgeProps {
  source: string;
  date?: string;
  label: 'live' | 'reported' | 'consensus' | 'estimated' | 'implied' | 'historical';
}

const labelColors: Record<string, string> = {
  live: 'bg-green/15 text-green border-green/25',
  reported: 'bg-accent/15 text-accent-light border-accent/25',
  consensus: 'bg-amber/15 text-amber border-amber/25',
  estimated: 'bg-amber/15 text-amber border-amber/25',
  implied: 'bg-red/15 text-red border-red/25',
  historical: 'bg-dark-500 text-text-muted border-dark-400',
};

export default function SourceBadge({ source, date, label }: SourceBadgeProps) {
  return (
    <div className="inline-flex items-center gap-1.5 flex-wrap">
      <span
        className={`text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded border ${labelColors[label] || labelColors.estimated}`}
      >
        {label}
      </span>
      <span className="text-[10px] text-text-muted">
        {source}
        {date && ` · ${date}`}
      </span>
    </div>
  );
}
