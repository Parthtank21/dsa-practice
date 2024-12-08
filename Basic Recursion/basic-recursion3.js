// Problem: Print N to 1 using recursion

function recursion(n) {
  if (n === 0) return;
  console.log(n);
  return recursion(n - 1);
}

function backtracking(i, n) {
  if (i > n) return;
  backtracking(i + 1, n);
  console.log(i);
}

console.log("Recursion: ");
recursion(5);
console.log("Backtracking: ");
backtracking(1, 5);
