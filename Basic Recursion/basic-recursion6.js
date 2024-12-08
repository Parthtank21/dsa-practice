// Problem: Reverse an array

function recursion(i, arr, n) {
  if (i >= n / 2) return arr;

  // Swap Elements
  let temp = arr[i];
  arr[i] = arr[n - 1 - i];
  arr[n - 1 - i] = temp;

  return recursion(i + 1, arr, n);
}

let arr = [1, 2, 3, 4, 5];
console.log(recursion(0, arr, arr.length));
console.log(arr); // Because Non-primitive data types passed by reference in Javascript
