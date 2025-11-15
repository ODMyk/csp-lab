function validatePositiveInteger(value: string) {
  const number = Number(value);

  if (!Number.isInteger(number) || number <= 0) {
    return "Must be a positive integer";
  }
}

export const TextValidation = {
  validatePositiveInteger,
};
