import { isCancel } from "@clack/core";

import { interrupt } from "./interrupt";

export function wrapToNumber(
  factory: () => Promise<string | symbol>
): () => Promise<number> {
  return async () => {
    const value = await factory();

    if (isCancel(value)) {
      interrupt();
    }

    return Number(value);
  };
}
