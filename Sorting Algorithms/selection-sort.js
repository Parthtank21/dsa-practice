// Resources:
// https://www.youtube.com/watch?v=HGk_ypEuS24
// https://www.geeksforgeeks.org/selection-sort-algorithm-2/

let unsorted = [4, 5, 3, 1, 2];

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallestIdx = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[smallestIdx]) {
        smallestIdx = j;
      }
    }
    // Swap elements
    let temp = arr[i];
    arr[i] = arr[smallestIdx];
    arr[smallestIdx] = temp;
  }
  return arr;
}

console.log(selectionSort(unsorted));
