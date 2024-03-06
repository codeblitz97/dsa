import {
  bubbleSort,
  findLowestValue,
  insertionSort,
  selectionSort,
} from './algorithms';

console.log('Lowest value: ', findLowestValue([224, 211, 21, 5, 7]));
console.log('Bubble sorted array: ', bubbleSort([524, 69, 21, 2, 7]));
console.log(
  'Selection sorted array: ',
  selectionSort([
    224, 211, 21, 5, 7, 321, 21121, 2447398579837598, 121, -1, -69,
  ])
);
console.log(
  'Insertion sorted',
  insertionSort([-10, 27, -2, 21212, -9, -6, 9, 6, 312, 212])
);
