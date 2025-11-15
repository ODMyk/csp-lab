export interface Solution {
  positions: number[];
  stepsCount: number;
}

export function create(init: Solution): Solution {
  return {
    ...init,
  };
}

export const Solution = {
  create,
};
