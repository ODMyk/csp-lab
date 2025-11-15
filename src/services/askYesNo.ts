import { isCancel, select } from "@clack/prompts";

import { interrupt } from "./interrupt";

export async function askYesNo(
  question: string
): Promise<boolean> {
  const answer = await select({
    message: question,
    options: [
      { label: "Yes", value: true },
      { label: "No", value: false },
    ],
  });

  if (isCancel(answer)) {
    interrupt();
  }

  return answer;
}
