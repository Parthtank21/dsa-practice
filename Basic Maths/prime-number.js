// Problem: Check Prime Number

let num = 36;
let num1 = 11;
let num2 = 5;

function solution(num) {
  let sqrt = Math.sqrt(num);
  let counter = 0;

  for (let i = 1; i <= sqrt; i++) {
    if (num % i === 0) {
      counter++;
      if (num / i !== i) counter++;
    }
  }

  return counter === 2;
}

console.log(solution(num));
console.log(solution(num1));
console.log(solution(num2));
