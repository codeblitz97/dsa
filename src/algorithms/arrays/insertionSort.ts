export function insertionSort(array: number[]) {
  let n = array.length;

  if (n <= 1) {
    return array;
  }

  for (let i = 1; i < n; i++) {
    let x = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > x) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = x;
  }

  return array;
}
