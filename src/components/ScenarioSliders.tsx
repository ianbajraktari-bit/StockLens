import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';

interface ScenarioSlidersProps {
  companyName: string;
  currentRevenue: number; // in billions
  currentMargin: number; // as percentage, e.g., 10.7
  currentMultiple: number; // P/E ratio
  currentMarketCap: number; // in billions
  defaults?: {
    revenueGrowth: number;
    operatingMargin: number;
    multiple: number;
  };
  onConfigChange?: (config: {
    revenueGrowth: number;
    operatingMargin: number;
    multiple: number;
  }) => void;
}

export default function ScenarioSliders({
  companyName,
  currentRevenue,
  currentMargin,
  currentMultiple,
  currentMarketCap,
  defaults,
  onConfigChange,
}: ScenarioSlidersProps) {
  const [revenueGrowth, setRevenueGrowth] = useState(defaults?.revenueGrowth ?? 10);
  const [operatingMargin, setOperatingMargin] = useState(defaults?.operatingMargin ?? currentMargin);
  const [multiple, setMultiple] = useState(defaults?.multiple ?? currentMultiple);

  // Calculate implied outcome
  const projectedRevenue = currentRevenue * (1 + revenueGrowth / 100);
  const projectedEarnings = projectedRevenue * (operatingMargin / 100) * 0.8; // rough tax adjustment
  const impliedMarketCap = projectedEarnings * multiple;
  const impliedReturn = ((impliedMarketCap - currentMarketCap) / currentMarketCap) * 100;

  useEffect(() => {
    onConfigChange?.({ revenueGrowth, operatingMargin, multiple });
  }, [revenueGrowth, operatingMargin, multiple, onConfigChange]);

  const presets = [
    { name: 'Bull', growth: 20, margin: currentMargin + 3, mult: currentMultiple + 5 },
    { name: 'Base', growth: 10, margin: currentMargin, mult: currentMultiple },
    { name: 'Bear', growth: 3, margin: currentMargin - 2, mult: currentMultiple - 8 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <SlidersHorizontal className="w-5 h-5 text-accent-light" />
        <h4 className="text-base font-semibold text-text-primary">
          Build your scenario for {companyName}
        </h4>
      </div>

      <p className="text-sm text-text-secondary">
        Adjust assumptions to see how different outcomes affect the implied value.
        Every investment is a bet on specific variables — make yours explicit.
      </p>

      {/* Preset buttons */}
      <div className="flex gap-2">
        {presets.map((p) => (
          <button
            key={p.name}
            onClick={() => {
              setRevenueGrowth(Math.round(p.growth));
              setOperatingMargin(Math.round(p.margin * 10) / 10);
              setMultiple(Math.round(p.mult));
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
              p.name === 'Bull'
                ? 'bg-green/10 text-green border-green/20 hover:bg-green/20'
                : p.name === 'Bear'
                  ? 'bg-red/10 text-red border-red/20 hover:bg-red/20'
                  : 'bg-amber/10 text-amber border-amber/20 hover:bg-amber/20'
            }`}
          >
            {p.name} Case
          </button>
        ))}
      </div>

      {/* Sliders */}
      <div className="space-y-5">
        <SliderRow
          label="Revenue Growth (next year)"
          value={revenueGrowth}
          min={-10}
          max={60}
          step={1}
          format={(v) => `${v > 0 ? '+' : ''}${v}%`}
          onChange={setRevenueGrowth}
        />
        <SliderRow
          label="Operating Margin"
          value={operatingMargin}
          min={0}
          max={50}
          step={0.5}
          format={(v) => `${v.toFixed(1)}%`}
          onChange={setOperatingMargin}
        />
        <SliderRow
          label="Valuation Multiple (P/E)"
          value={multiple}
          min={5}
          max={80}
          step={1}
          format={(v) => `${v}x`}
          onChange={setMultiple}
        />
      </div>

      {/* Implied outcome */}
      <motion.div
        key={`${revenueGrowth}-${operatingMargin}-${multiple}`}
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        className={`rounded-xl border p-5 ${
          impliedReturn > 15
            ? 'border-green/20 bg-green/5'
            : impliedReturn < -10
              ? 'border-red/20 bg-red/5'
              : 'border-amber/20 bg-amber/5'
        }`}
      >
        <p className="text-xs text-text-muted uppercase tracking-wider mb-3 font-medium">
          Implied Outcome
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-text-muted">Projected Revenue</p>
            <p className="text-lg font-bold text-text-primary">
              ${projectedRevenue.toFixed(0)}B
            </p>
          </div>
          <div>
            <p className="text-xs text-text-muted">Implied Market Cap</p>
            <p className="text-lg font-bold text-text-primary">
              ${impliedMarketCap >= 1000
                ? `${(impliedMarketCap / 1000).toFixed(1)}T`
                : `${impliedMarketCap.toFixed(0)}B`}
            </p>
          </div>
          <div>
            <p className="text-xs text-text-muted">Implied Return</p>
            <p
              className={`text-lg font-bold ${
                impliedReturn > 0 ? 'text-green' : 'text-red'
              }`}
            >
              {impliedReturn > 0 ? '+' : ''}
              {impliedReturn.toFixed(1)}%
            </p>
          </div>
        </div>

        <p className="text-sm text-text-secondary mt-4 leading-relaxed">
          {impliedReturn > 20
            ? `This scenario implies significant upside. Ask yourself: is ${revenueGrowth}% revenue growth with ${operatingMargin.toFixed(1)}% margins at ${multiple}x earnings realistic? What would need to go right?`
            : impliedReturn > 0
              ? `This scenario implies modest upside. The market may already be pricing in something close to this. What would push the outcome above or below these assumptions?`
              : `This scenario implies downside. If you believe these assumptions are realistic, the stock may be overvalued at current levels. What would need to change for a better outcome?`}
        </p>
      </motion.div>
    </div>
  );
}

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-sm text-text-secondary">{label}</span>
        <span className="text-sm font-semibold text-text-primary">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1.5 bg-dark-500 rounded-full appearance-none cursor-pointer accent-accent"
      />
    </div>
  );
}
