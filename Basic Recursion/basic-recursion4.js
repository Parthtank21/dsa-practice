// Problem: Sum of first N numbers

// Parameterised Recursion
function recursion(n, sum) {
  if (n === 0) return sum;
  return recursion(n - 1, sum + n);
}

// Functional Recursion
function recursion2(n) {
  if (n === 0) return 0;
  return n + recursion2(n - 1);
}

console.log(recursion(5, 0));
console.log(recursion2(5));
