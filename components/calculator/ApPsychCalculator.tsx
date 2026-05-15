"use client";

import { useEffect, useMemo, useState } from "react";
import { calculateScore } from "@/lib/calculator/score";
import { trackEvent } from "@/lib/analytics/events";
import { ResultCard } from "@/components/calculator/ResultCard";
import { ReverseCalculator } from "@/components/calculator/ReverseCalculator";
import { ScoreBandTable } from "@/components/calculator/ScoreBandTable";

export function ApPsychCalculator() {
  const [mcqCorrect, setMcqCorrect] = useState(55);
  const [frq1, setFrq1] = useState(5);
  const [frq2, setFrq2] = useState(5);

  const result = useMemo(() => calculateScore({ mcqCorrect, frqScores: [frq1, frq2] }), [mcqCorrect, frq1, frq2]);

  useEffect(() => {
    trackEvent("score_estimated", { pagePath: window.location.pathname, estimatedScore: result.estimatedScore });
  }, [result.estimatedScore]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-3">
          <NumberInput label="MCQ correct" value={mcqCorrect} min={0} max={75} onChange={setMcqCorrect} />
          <NumberInput label="FRQ 1 score" value={frq1} min={0} max={7} onChange={setFrq1} />
          <NumberInput label="FRQ 2 score" value={frq2} min={0} max={7} onChange={setFrq2} />
        </div>
        <div className="mt-6">
          <ScoreBandTable />
        </div>
      </div>
      <div className="space-y-6">
        <ResultCard result={result} />
        <ReverseCalculator />
      </div>
    </div>
  );
}

function NumberInput({ label, value, min, max, onChange }: { label: string; value: number; min: number; max: number; onChange: (value: number) => void }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          const next = Math.min(max, Math.max(min, Number(e.target.value)));
          onChange(next);
          trackEvent("calculator_input_changed", { pagePath: window.location.pathname });
        }}
        className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-3 text-lg font-semibold outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </label>
  );
}
