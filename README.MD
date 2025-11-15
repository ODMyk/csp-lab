## 👑 N-Queens Problem Solver: Backtracking Algorithm Implementation

This project implements a solution to the classic **N-Queens Problem**, a well-known **Constraint Satisfaction Problem (CSP)**, using the **Backtracking Search** algorithm. The primary goal is to demonstrate the application of systematic search and constraint satisfaction techniques for finding a single feasible solution to a combinatorial puzzle.

The entire computational core is implemented in **TypeScript** within the **Node.js** environment.

---

## Concept and Optimization Objectives

The system seeks to find a safe placement of $N$ queens on an $N \times N$ chessboard such that no two queens threaten each other (i.e., no two queens share the same row, column, or diagonal).The solution employs an enhanced backtracking approach that utilizes a specialized constraint check to prune the search space early.

### Key Components

- **Representation (Board)**: An array of length $N$, where the index represents the column and the value at that index represents the row of the queen in that column (e.g., positions[3] = 1 means a queen is at row 1, column 3).
- **Constraints Check (isSafe)**: This core function efficiently checks for conflicts with previously placed queens across rows, main diagonals, and anti-diagonals.
- **Enhanced Search (Row Tracking)**: The algorithm maintains an availablePositions: Set<number> to track which rows have not yet been used by any queen. By removing assigned rows from the set and only iterating over the remaining available rows, the algorithm implicitly satisfies the row constraint and drastically reduces the domain size for each variable, saving computational effort.
- **Steps Counter**: A steps counter is used to track the number of nodes visited (recursive calls made) during the search, providing a performance metric for the algorithm's efficiency.

### Algorithm Focus

The algorithm is a systematic, complete search method, guaranteeing that a solution will be found if one exists.

- **Backtracking**: If an assignment (placing a queen in a specific row/column) violates a constraint, the algorithm immediately backtracks (reverts the change and tries the next available option).

- **Pruning**: The combined use of the isSafe check (for diagonal constraints) and the availablePositions set (for row constraints) ensures that branches of the search tree that cannot lead to a solution are ignored as early as possible.

---

## Architecture and Technologies

| Component                 | Technology / Pattern                      | Purpose                                                                                                                          |
| :------------------------ | :---------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| **Language/Runtime**      | **TypeScript** / **Node.js**              | Provides type safety for managing cities, configuration, and routes. Executes the computational core.                            |
| **Algorithm Core**        | **Backtracking Search**                   | A complete, systematic search method guaranteed to find a solution (or prove none exists).                                       |
| **Constraint Management** | `Math.abs(r1 - r2) !== Math.abs(c1 - c2)` | The standard, efficient calculation for checking diagonal conflicts.                                                             |
| **Optimization**          | `Set<number>` (availablePositions)        | Crucial for performance: Manages and prunes the domain of available rows for the current queen to speed up the constraint check. |

---

## Installation

To install the project, clone the repository and install dependencies using any package manager for Node.js.

```bash
git clone [https://github.com/ODMyk/csp-lab.git](https://github.com/ODMyk/csp-lab.git)
cd csp-lab
```

### Using pnpm

```bash
pnpm i
```

### Using npm

```bash
npm i
```

### Using yarn

```bash
yarn
```

## Running

To run the project use script `run` from `package.json`

### Using pnpm

```bash
pnpm run run
```

### Using npm

```bash
npm run run
```

### Using yarn

```bash
yarn run
```

The program will prompt you to setup environment and then start the simulation
