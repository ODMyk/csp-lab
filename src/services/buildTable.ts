import Table from "cli-table3";

export function buildTable(solution: number[]) {
  const boardSize = solution.length;

  const headers = Array.from(
    { length: boardSize },
    (_, i) => `${i + 1}`
  );
  const columnKeys = ["", ...headers];

  const table = new Table({
    head: columnKeys,
    colWidths: Array(boardSize + 1).fill(
      2 + boardSize.toString().length
    ),
    colAligns: Array(boardSize + 1).fill("center"),
    rowAligns: Array(boardSize + 1).fill("center"),
    style: {
      head: [],
    },
  });

  for (let row = 0; row < boardSize; row++) {
    const rowData: (string | number)[] = [`${row + 1}`];

    for (let col = 0; col < boardSize; col++) {
      const isQueen = solution[col] === row;
      rowData.push(isQueen ? "👑" : "");
    }
    table.push(rowData);
  }

  return table.toString();
}
