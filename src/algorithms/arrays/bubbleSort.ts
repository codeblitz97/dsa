export function bubbleSort(array: number[]) {
  let n = array.length;

  if (n <= 1) {
    return array;
  }

  for (let i = 0; i < n - 1; i++) {
    // Guys I used C++ in JavaScript
    for (let c = 0; c < n - i - 1; c++) {
      if (array[c + 1] < array[c]) {
        let temp = array[c];
        array[c] = array[c + 1];
        array[c + 1] = temp;
      }
    }
  }

  return array;
}
