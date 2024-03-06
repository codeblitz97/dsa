let o: number[];

export function countingSort(array: number[]): number[] {
  let n = array.length;

  if (n <= 0) {
    return array;
  }

  let mx = Math.max(...array);

  let c = Array(mx + 1).fill(0);

  for (let i = 0; i < n; i++) {
    c[array[i]]++;
  }

  for (let i = 1; i <= mx; i++) {
    c[i] += c[i - 1];
  }

  o = Array(n);

  for (let i = n - 1; i >= 0; i--) {
    o[c[array[i]] - 1] = array[i];
    c[array[i]]--;
  }

  return array;
}
