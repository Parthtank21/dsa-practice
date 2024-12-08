// Problem: Print 1 to N using recursion

function recursion(i, n) {
  if (i > n) return;
  console.log(i);
  return recursion(i + 1, n);
}

function backtracking(n) {
  if (n === 0) return;
  backtracking(n - 1);
  console.log(n);
}

console.log("Recursion: ");
recursion(1, 5);
console.log("Backtracking: ");
backtracking(5);
