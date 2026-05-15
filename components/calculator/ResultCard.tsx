import type { ScoreResult } from "@/types/calculator";

type Props = { result: ScoreResult };

export function ResultCard({ result }: Props) {
  return (
    <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-lg">
      <p className="text-sm text-slate-300">Estimated AP Score</p>
      <div className="mt-2 text-6xl font-bold">{result.estimatedScore}</div>
      <p className="mt-3 text-slate-200">Composite estimate: {result.compositePercent}%</p>
      <p className="mt-3 text-sm text-slate-300">{result.explanation}</p>
    </div>
  );
}
