// Resources:
// https://www.youtube.com/watch?v=HGk_ypEuS24
// https://www.youtube.com/watch?v=o4bAoo_gFBU
// https://www.geeksforgeeks.org/bubble-sort-algorithm/

let unsorted = [4, 5, 3, 1, 2];
let sorted = [10, 20, 30, 40, 50];

function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function optimizedBubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      let sorted = true;
    
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        sorted = false;
      }
    }

    if (sorted) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort(unsorted));
console.log(optimizedBubbleSort(sorted));