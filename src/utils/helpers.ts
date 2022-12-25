export function formatPercent(n: number) {
  return n.toFixed(0) + "%";
}

export function countErrors(actual: string, expected: string) {
  const expectedCharacters = expected.split("");

  return expectedCharacters.reduce((errors, expectedChar, i) => {
    const actualChar = actual[i];
    if (actualChar != expectedChar) {
      errors++;
    }
    return errors;
  }, 0);
}

export function calculateAccuracy(errors: number, total: number) {
  if (total > 0) {
    const corrects = total - errors;
    return (corrects / total) * 100;
  }

  return 0;
}
