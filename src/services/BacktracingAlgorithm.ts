import type { CspAlgorithm } from "../domain";
import { Solution } from "../domain";

export class BacktracingAlgorithm implements CspAlgorithm {
  private steps = 0;
  private availablePositions: Set<number> = new Set();

  private isSafe(
    board: number[],
    col: number,
    row: number
  ): boolean {
    for (let prevCol = 0; prevCol < col; prevCol++) {
      const prevRow = board[prevCol];

      if (prevRow === row) {
        return false;
      }

      if (
        Math.abs(prevRow - row) === Math.abs(prevCol - col)
      ) {
        return false;
      }
    }

    return true;
  }

  private solveNQueens(
    board: number[],
    col: number,
    boardSize: number
  ): number[] | null {
    this.steps++;

    if (col === boardSize) {
      return board;
    }

    const availablePositions = Array.from(
      this.availablePositions.values()
    );

    for (const row of availablePositions) {
      if (this.isSafe(board, col, row)) {
        board[col] = row;

        this.availablePositions.delete(row);

        const result = this.solveNQueens(
          board,
          col + 1,
          boardSize
        );

        if (result !== null) {
          return result;
        }

        this.availablePositions.add(row);
      }
    }

    return null;
  }

  public solve(boardSize: number): Solution {
    this.steps = 0;

    this.availablePositions = new Set(
      Array.from({ length: boardSize }, (_, i) => i)
    );

    const board: number[] = new Array(boardSize).fill(-1);

    const solutionPositions = this.solveNQueens(
      board,
      0,
      boardSize
    );

    return Solution.create({
      positions: solutionPositions || [],
      stepsCount: this.steps,
    });
  }
}
