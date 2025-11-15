import { group, text } from "@clack/prompts";

import { DEFAULT_CONFIG } from "../constants/defaultConfig";
import { type ApplicationConfig } from "../domain";

import { TextValidation } from "./TextValidation";
import { wrapToNumber } from "./wrapToNumber";

export function promptConfig(): Promise<ApplicationConfig> {
  return group({
    boardSize: wrapToNumber(() =>
      text({
        message: "Board size",
        initialValue: DEFAULT_CONFIG.boardSize.toString(),
        placeholder: DEFAULT_CONFIG.boardSize.toString(),
        validate: TextValidation.validatePositiveInteger,
      })
    ),
  });
}
