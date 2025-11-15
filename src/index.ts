import { intro, log, outro } from "@clack/prompts";

import { DEFAULT_CONFIG } from "./constants/defaultConfig";
import { askYesNo } from "./services/askYesNo";
import { BacktracingAlgorithm } from "./services/BacktracingAlgorithm";
import { buildTable } from "./services/buildTable";
import { promptConfig } from "./services/promptConfig";

let config = DEFAULT_CONFIG;

try {
  intro("CSP Algorithm");

  const rewriteConfig = await askYesNo(
    "Rewrite default config ?"
  );

  if (rewriteConfig) {
    config = await promptConfig();
  }

  const algorithm = new BacktracingAlgorithm();

  log.info("Starting the algorithm");

  const solution = algorithm.solve(config.boardSize);

  if (solution.positions.length === config.boardSize) {
    log.success(
      `Found solution in ${solution.stepsCount} steps`
    );

    log.step(buildTable(solution.positions));
  } else {
    log.error("Solution does not exist");
  }

  outro("Program finished");
} catch (error) {
  if (
    error instanceof Error &&
    error.message === "User interrupted"
  ) {
    outro("Program interrupted by user");
    process.exit(0);
  }

  log.error(error.message);
}
