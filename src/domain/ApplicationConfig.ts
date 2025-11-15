export interface ApplicationConfig {
  boardSize: number;
}

function create(
  init: ApplicationConfig
): ApplicationConfig {
  return {
    ...init,
  };
}

export const ApplicationConfig = {
  create,
};
