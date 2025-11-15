import type { Solution } from "./Solution";

export interface CspAlgorithm {
  solve(boardSize: number): Solution;
}
