export function findLowestValue(array: number[]) {
  let lowestValue = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < lowestValue) {
      lowestValue = array[i];
    }
  }

  return lowestValue;
}
