import subject from "@/content/subjects/ap-psychology.json";
import type { SubjectConfig } from "@/types/content";

const config = subject as SubjectConfig;

export function ScoreBandTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr><th className="p-3">AP Score</th><th className="p-3">Estimated Composite Range</th></tr>
        </thead>
        <tbody>
          {config.scoring.estimatedScoreBands.map((band) => (
            <tr key={band.score} className="border-t border-slate-100">
              <td className="p-3 font-semibold">{band.score}</td>
              <td className="p-3">{band.minPercent}%{band.maxPercent ? ` – ${band.maxPercent}%` : "+"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
