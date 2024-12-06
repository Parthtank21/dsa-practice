// Problem: Find GDC or HCF

let n1 = 36;
let n2 = 16;

// First try
function solution(n1, n2) {
  let min = n1 < n2 ? n1 : n2;
  let gcd = 1;

  for (let i = 1; i <= min; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
}

// Second try
function solution2(n1, n2) {
  let min = n1 < n2 ? n1 : n2;

  for (let i = min; i >= 1; i--) {
    if (n1 % i === 0 && n2 % i === 0) {
      return i;
    }
  }
}

// Using Euclidian Algorithm
function solution3(n1, n2) {
  while (n1 > 0 && n2 > 0) {
    if (n1 > n2) {
      n1 = n1 % n2;
    } else {
      n2 = n2 % n1;
    }
  }
  if (n1 === 0) return n2;
  return n1;
}

console.log(solution(n1, n2));
console.log(solution2(n1, n2));
console.log(solution3(n1, n2));
