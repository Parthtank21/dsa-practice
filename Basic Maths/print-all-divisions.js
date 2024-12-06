// Problem: Print all divisions

let num = 36;
let num1 = 10;

// With using Math library - Faster
function solution(num) {
  let sqrt = Math.sqrt(num);
  let divisors = [];

  for (let i = 1; i <= sqrt; i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (i !== num / i) divisors.push(num / i);
    }
  }

  divisors.sort((a, b) => a - b);

  return divisors;
}

// Without using Math library - Slower
function solution1(num) {
  let divisors = [];

  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (i !== num / i) divisors.push(num / i);
    }
  }

  divisors.sort((a, b) => a - b);

  return divisors;
}

console.time("no-sqrt");
console.log(solution1(num));
console.timeEnd("no-sqrt");
console.time("sqrt");
console.log(solution(num));
console.timeEnd("sqrt");
