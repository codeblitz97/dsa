export function selectionSort(array: number[]) {
  let n = array.length;

  if (n <= 1) {
    return array;
  }

  for (let i = 0; i < n - 1; i++) {
    let n2 = i;

    for (let c = i + 1; c < n; c++) {
      if (array[c] < array[n2]) {
        n2 = c;
      }
    }

    if (n2 !== i) {
      const temp = array[i];
      array[i] = array[n2];
      array[n2] = temp;
    }
  }

  return array;
}
