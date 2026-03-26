import { Scale } from 'lucide-react';

interface ValuationImpliedProps {
  companyName: string;
  currentPE: string;
  implications: string[];
  summary: string;
}

export default function ValuationImplied({
  companyName,
  currentPE,
  implications,
  summary,
}: ValuationImpliedProps) {
  return (
    <div className="rounded-xl border border-amber/20 bg-amber/5 p-5 space-y-4">
      <div className="flex items-center gap-3">
        <Scale className="w-5 h-5 text-amber" />
        <h4 className="text-sm font-semibold text-amber uppercase tracking-wider">
          What has to happen for this valuation to make sense?
        </h4>
      </div>

      <p className="text-sm text-text-secondary leading-relaxed">
        If you buy {companyName} at {currentPE} earnings, you are implicitly
        betting on:
      </p>

      <ul className="space-y-2">
        {implications.map((item, i) => (
          <li
            key={i}
            className="text-sm text-text-secondary leading-relaxed flex items-start gap-2"
          >
            <span className="text-amber mt-0.5 shrink-0 font-bold">
              {i + 1}.
            </span>
            {item}
          </li>
        ))}
      </ul>

      <div className="pt-3 border-t border-amber/10">
        <p className="text-sm text-text-secondary leading-relaxed italic">
          {summary}
        </p>
      </div>
    </div>
  );
}
