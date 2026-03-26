import { useState, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SlidersHorizontal,
  Lock,
  TrendingUp,
  TrendingDown,
  Minus,
  ArrowRight,
} from 'lucide-react';

interface ScenarioLabProps {
  companyName: string;
  companyColor: string;
  scenarioLab: {
    intro: string;
    currentRevenue: number;
    currentMarketCap: number;
    defaults: { revenueGrowth: number; operatingMargin: number; multiple: number };
    presets: {
      name: 'bull' | 'base' | 'bear';
      growth: number;
      margin: number;
      multiple: number;
      narrative: string;
    }[];
    marketImplied: {
      narrative: string;
      growth: string;
      margin: string;
      multiple: string;
    };
  };
  locked: boolean;
  onExplore?: () => void;
}

const presetColors: Record<'bull' | 'base' | 'bear', {
  text: string;
  bg: string;
  border: string;
  glow: string;
  ring: string;
  icon: typeof TrendingUp;
}> = {
  bull: {
    text: 'text-green',
    bg: 'bg-green/10',
    border: 'border-green/40',
    glow: 'shadow-[0_0_20px_rgba(34,197,94,0.12)]',
    ring: 'ring-green/30',
    icon: TrendingUp,
  },
  base: {
    text: 'text-amber',
    bg: 'bg-amber/10',
    border: 'border-amber/40',
    glow: 'shadow-[0_0_20px_rgba(245,158,11,0.12)]',
    ring: 'ring-amber/30',
    icon: Minus,
  },
  bear: {
    text: 'text-red',
    bg: 'bg-red/10',
    border: 'border-red/40',
    glow: 'shadow-[0_0_20px_rgba(239,68,68,0.12)]',
    ring: 'ring-red/30',
    icon: TrendingDown,
  },
};

function formatMarketCap(value: number): string {
  if (value >= 1e12) return `$${(value / 1e12).toFixed(1)}T`;
  if (value >= 1e9) return `$${(value / 1e9).toFixed(0)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(0)}M`;
  return `$${value.toFixed(0)}`;
}

function getReturnColor(ret: number): string {
  if (ret > 10) return 'text-green';
  if (ret >= 0) return 'text-amber';
  return 'text-red';
}

function getReturnBg(ret: number): string {
  if (ret > 10) return 'bg-green/8';
  if (ret >= 0) return 'bg-amber/8';
  return 'bg-red/8';
}

function getReturnBorder(ret: number): string {
  if (ret > 10) return 'border-green/25';
  if (ret >= 0) return 'border-amber/25';
  return 'border-red/25';
}

function getReturnNarrative(ret: number): string {
  if (ret > 20) return 'This scenario requires everything to go right — high conviction needed.';
  if (ret >= 0) return 'A moderate outcome — close to what the market already expects.';
  return 'This scenario implies the stock is overvalued at current levels.';
}

export default function ScenarioLab({
  companyColor,
  scenarioLab,
  locked,
  onExplore,
}: ScenarioLabProps) {
  const { defaults, presets, currentRevenue, currentMarketCap, marketImplied } = scenarioLab;

  const [revenueGrowth, setRevenueGrowth] = useState(defaults.revenueGrowth);
  const [operatingMargin, setOperatingMargin] = useState(defaults.operatingMargin);
  const [multiple, setMultiple] = useState(defaults.multiple);
  const [activePreset, setActivePreset] = useState<'bull' | 'base' | 'bear' | null>(null);
  const hasExplored = useRef(false);

  const triggerExplore = useCallback(() => {
    if (!hasExplored.current && onExplore) {
      hasExplored.current = true;
      onExplore();
    }
  }, [onExplore]);

  const handlePreset = useCallback(
    (preset: (typeof presets)[number]) => {
      setRevenueGrowth(preset.growth);
      setOperatingMargin(preset.margin);
      setMultiple(preset.multiple);
      setActivePreset(preset.name);
      triggerExplore();
    },
    [triggerExplore],
  );

  const handleSliderChange = useCallback(
    (setter: (v: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(parseFloat(e.target.value));
      setActivePreset(null);
      triggerExplore();
    },
    [triggerExplore],
  );

  const projectedRevenue = currentRevenue * (1 + revenueGrowth / 100);
  const projectedEarnings = projectedRevenue * (operatingMargin / 100) * 0.8;
  const impliedMarketCap = projectedEarnings * multiple;
  const impliedReturn = ((impliedMarketCap - currentMarketCap) / currentMarketCap) * 100;

  const activePresetData = useMemo(
    () => (activePreset ? presets.find((p) => p.name === activePreset) : null),
    [activePreset, presets],
  );

  // ── LOCKED state ──
  if (locked) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-xl border border-dark-600 bg-dark-800/60 px-5 py-4 opacity-50"
      >
        <div className="flex items-center gap-3">
          <Lock className="h-4 w-4 text-text-muted flex-shrink-0" />
          <SlidersHorizontal className="h-4 w-4 text-text-muted flex-shrink-0" />
          <span className="text-sm font-medium text-text-muted">Scenario Lab</span>
          <span className="ml-auto text-xs text-text-muted/60 flex-shrink-0 hidden sm:inline">
            Complete all modules to unlock
          </span>
        </div>
      </motion.div>
    );
  }

  // ── ACTIVE state ──
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border border-dark-500 bg-dark-800 overflow-hidden"
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-dark-600">
        <div className="flex items-center gap-2.5 mb-3">
          <div
            className="flex items-center justify-center w-8 h-8 rounded-lg"
            style={{ backgroundColor: `${companyColor}15` }}
          >
            <SlidersHorizontal className="h-4 w-4" style={{ color: companyColor }} />
          </div>
          <h2 className="text-lg font-semibold text-text-primary tracking-tight">
            Scenario Lab
          </h2>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">{scenarioLab.intro}</p>
      </div>

      <div className="px-6 py-5 space-y-6">
        {/* Preset Buttons */}
        <div className="grid grid-cols-3 gap-3">
          {presets.map((preset) => {
            const colors = presetColors[preset.name];
            const Icon = colors.icon;
            const isActive = activePreset === preset.name;
            return (
              <motion.button
                key={preset.name}
                whileTap={{ scale: 0.97 }}
                onClick={() => handlePreset(preset)}
                className={`
                  relative flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                  border text-sm font-medium transition-all duration-200 cursor-pointer
                  ${
                    isActive
                      ? `${colors.bg} ${colors.border} ${colors.text} ${colors.glow} ring-1 ${colors.ring}`
                      : 'bg-dark-700 border-dark-500 text-text-secondary hover:bg-dark-600 hover:text-text-primary'
                  }
                `}
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="capitalize">{preset.name}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Sliders */}
        <div className="space-y-5">
          <SliderControl
            label="Revenue Growth"
            value={revenueGrowth}
            min={-5}
            max={20}
            step={1}
            unit="%"
            onChange={handleSliderChange(setRevenueGrowth)}
            companyColor={companyColor}
          />
          <SliderControl
            label="Operating Margin"
            value={operatingMargin}
            min={20}
            max={40}
            step={0.5}
            unit="%"
            onChange={handleSliderChange(setOperatingMargin)}
            companyColor={companyColor}
          />
          <SliderControl
            label="Valuation Multiple (P/E)"
            value={multiple}
            min={15}
            max={40}
            step={1}
            unit="x"
            onChange={handleSliderChange(setMultiple)}
            companyColor={companyColor}
          />
        </div>

        {/* Active preset narrative */}
        <AnimatePresence mode="wait">
          {activePresetData && (
            <motion.div
              key={activePresetData.name}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div
                className={`
                  rounded-xl border-l-2 px-4 py-3
                  ${presetColors[activePresetData.name].border}
                  ${presetColors[activePresetData.name].bg}
                `}
              >
                <p className="text-sm text-text-secondary leading-relaxed">
                  {activePresetData.narrative}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Implied Outcome */}
        <motion.div
          layout
          className={`rounded-xl border p-5 ${getReturnBg(impliedReturn)} ${getReturnBorder(impliedReturn)} transition-colors duration-300`}
        >
          <div className="flex items-center gap-2 mb-4">
            <ArrowRight className="h-4 w-4 text-text-muted" />
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Implied Outcome
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs text-text-muted mb-1">Implied Market Cap</p>
              <motion.p
                key={impliedMarketCap.toFixed(0)}
                initial={{ opacity: 0.6, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl font-bold text-text-primary tracking-tight"
              >
                {formatMarketCap(impliedMarketCap)}
              </motion.p>
            </div>
            <div>
              <p className="text-xs text-text-muted mb-1">Implied Return</p>
              <motion.p
                key={impliedReturn.toFixed(0)}
                initial={{ opacity: 0.6, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-xl font-bold tracking-tight ${getReturnColor(impliedReturn)}`}
              >
                {impliedReturn >= 0 ? '+' : ''}
                {impliedReturn.toFixed(1)}%
              </motion.p>
            </div>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">
            {getReturnNarrative(impliedReturn)}
          </p>
        </motion.div>

        {/* Market Comparison */}
        <div className="rounded-xl border border-dark-500 bg-dark-700/50 p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              What the market currently implies
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <ComparisonMetric
              label="Growth"
              userValue={`${revenueGrowth >= 0 ? '+' : ''}${revenueGrowth}%`}
              marketValue={marketImplied.growth}
            />
            <ComparisonMetric
              label="Margin"
              userValue={`${operatingMargin}%`}
              marketValue={marketImplied.margin}
            />
            <ComparisonMetric
              label="Multiple"
              userValue={`${multiple}x`}
              marketValue={marketImplied.multiple}
            />
          </div>

          <p className="text-sm text-text-secondary leading-relaxed">
            {marketImplied.narrative}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ── Slider Control ──

interface SliderControlProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  companyColor: string;
}

function SliderControl({ label, value, min, max, step, unit, onChange, companyColor }: SliderControlProps) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm text-text-secondary">{label}</span>
        <span className="text-sm font-bold text-text-primary tabular-nums">
          {unit === '%' && value >= 0 ? '+' : ''}
          {step % 1 === 0 ? value : value.toFixed(1)}
          {unit}
        </span>
      </div>
      <div className="relative h-6 flex items-center">
        <div className="absolute inset-x-0 h-1 rounded-full bg-dark-500" />
        <div
          className="absolute left-0 h-1 rounded-full transition-all duration-100"
          style={{ width: `${pct}%`, backgroundColor: companyColor }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ zIndex: 2 }}
        />
        <div
          className="absolute w-3.5 h-3.5 rounded-full border-2 transition-all duration-100 pointer-events-none"
          style={{
            left: `calc(${pct}% - 7px)`,
            backgroundColor: '#12121a',
            borderColor: companyColor,
            boxShadow: `0 0 8px ${companyColor}40`,
          }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-[10px] text-text-muted tabular-nums">
          {min}
          {unit}
        </span>
        <span className="text-[10px] text-text-muted tabular-nums">
          {max}
          {unit}
        </span>
      </div>
    </div>
  );
}

// ── Comparison Metric ──

function ComparisonMetric({
  label,
  userValue,
  marketValue,
}: {
  label: string;
  userValue: string;
  marketValue: string;
}) {
  return (
    <div className="text-center">
      <p className="text-[10px] uppercase tracking-wider text-text-muted mb-2">{label}</p>
      <p className="text-sm font-bold text-text-primary mb-0.5">{userValue}</p>
      <p className="text-[10px] text-text-muted">vs {marketValue}</p>
    </div>
  );
}
