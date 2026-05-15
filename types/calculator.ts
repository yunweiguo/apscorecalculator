import type { ScoreBand } from "@/types/content";

export interface ScoreInput {
  mcqCorrect: number;
  frqScores: number[];
}

export interface ScoreResult {
  compositePercent: number;
  estimatedScore: 1 | 2 | 3 | 4 | 5;
  explanation: string;
  band: ScoreBand;
}

export interface ReverseScoreInput {
  targetScore: 3 | 4 | 5;
  assumedFrqScore?: number;
  assumedMcqCorrect?: number;
}

export interface ReverseScoreResult {
  targetScore: 3 | 4 | 5;
  requiredCompositePercent: number;
  suggestedMcqCorrect: number;
  suggestedFrqTotal: number;
  explanation: string;
}
