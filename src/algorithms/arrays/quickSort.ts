export function quickSort(array: number[]): number[] {
  let n = array.length;

  if (n <= 1) {
    return array;
  }

  let p = array[0];
  let l: number[] = [];
  let r: number[] = [];

  for (let i = 1; i < n; i++) {
    if (array[i] < p) {
      l.push(array[i]);
    } else {
      r.push(array[i]);
    }
  }

  return quickSort(l).concat(p, quickSort(r));
}
