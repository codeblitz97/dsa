import chalk from 'chalk';
import {
  bubbleSort,
  findLowestValue,
  insertionSort,
  quickSort,
  selectionSort,
} from './algorithms';

const measureExecutionTime = (algorithm: Function, array: number[]) => {
  const startTime = performance.now();
  const result = algorithm(array);
  const endTime = performance.now();
  const executionTime = endTime - startTime;

  console.log(
    `${algorithm.name} execution time: ${executionTime} milliseconds`
  );
  console.log(`${algorithm.name} result:`, result);

  return executionTime;
};

const arrayToSort = [
  -10, 27, -2, 21212, -9, -6, 9, 6, 312, 212, 2787437684764629846982649826498,
  1371903810938019480914809147, 213, 1313, 13133, 13, 1, 3, 3, 1, 3, 31, 3, 13,
  13, 3, 1, 33, 1371903810938019480914809147,
];

const findLowestValueTime = measureExecutionTime(findLowestValue, arrayToSort);
const bubbleSortTime = measureExecutionTime(bubbleSort, arrayToSort);
const selectionSortTime = measureExecutionTime(selectionSort, arrayToSort);
const insertionSortTime = measureExecutionTime(insertionSort, arrayToSort);
const quickSortTime = measureExecutionTime(quickSort, arrayToSort);

const fastestTime = Math.min(
  findLowestValueTime,
  bubbleSortTime,
  selectionSortTime,
  insertionSortTime,
  quickSortTime
);

let fastestAlgorithm = '';
if (fastestTime === bubbleSortTime) {
  fastestAlgorithm = 'bubbleSort';
} else if (fastestTime === selectionSortTime) {
  fastestAlgorithm = 'selectionSort';
} else if (fastestTime === insertionSortTime) {
  fastestAlgorithm = 'insertionSort';
} else {
  fastestAlgorithm = 'quickSort';
}

console.log(
  chalk.green(
    `The fastest algorithm was`,
    `${chalk.bold.blue(fastestAlgorithm)}`,
    `which was`,
    `${chalk.bold.cyan(fastestTime)}`,
    `milliseconds faster than the others.`
  )
);
