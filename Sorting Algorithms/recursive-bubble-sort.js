let arr = [4, 2, 3, 1, 7, 5];
let arr2 = [1, 2, 3, 4];

function bubbleSortRecursive(arr, n) {
  if (n === 0) return;
  let didSwap = false;

  for (let i = 0; i <= n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;

      didSwap = true;
    }
  }
  // If array is already sorted return
  if (!didSwap) return;

  bubbleSortRecursive(arr, n - 1);
}

bubbleSortRecursive(arr, arr.length - 1);
console.log(arr);
