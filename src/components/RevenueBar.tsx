interface RevenueBarProps {
  name: string;
  percentage: number;
  description: string;
  color: string;
}

export default function RevenueBar({
  name,
  percentage,
  description,
  color,
}: RevenueBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-medium text-text-primary">{name}</span>
        <span className="text-sm font-semibold text-text-primary">
          {percentage}%
        </span>
      </div>
      <div className="h-2.5 bg-dark-600 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
      <p className="text-sm text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}
