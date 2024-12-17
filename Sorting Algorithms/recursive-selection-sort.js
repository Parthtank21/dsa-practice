let arr = [4, 2, 3, 1, 7, 5];
let arr2 = [1, 2, 3, 4];

function selectionSortRecursive(arr, l, r) {
  if (l == r) return;

  let j = l;

  while (j > 0 && arr[j - 1] > arr[j]) {
    let temp = arr[j - 1];
    arr[j - 1] = arr[j];
    arr[j] = temp;
    j--;
  }

  selectionSortRecursive(arr, l + 1, r);
}

selectionSortRecursive(arr, 0, arr.length);
console.log(arr);
