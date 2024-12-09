// Problem: Print all subsequences

let arr = [1, 2, 3];

function printSubsequences(i, arr, n, result) {
  if (i >= n) {
    console.log(result);
    return;
  }

  result.push(arr[i]);
  printSubsequences(i + 1, arr, n, result);
  result.pop();
  printSubsequences(i + 1, arr, n, result);
}

printSubsequences(0, arr, arr.length, []);
