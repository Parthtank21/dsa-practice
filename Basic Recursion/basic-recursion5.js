// Problem: Factorial of N numbers

function recursion(n) {
  if (n === 1) return n;
  return n * recursion(n - 1);
}

console.log(recursion(5));
