// Problem: Armstrong number

let num = 1531;
let num1 = 1634;

function solution(num) {
  let original = num;
  let temp = num;
  let sum = 0;
  let count = 0;

  while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
  }

  while (num > 0) {
    let digit = num % 10;
    sum = sum + Math.pow(digit, count);
    num = Math.floor(num / 10);
  }

  return sum === original;
}

console.log(solution(num));
console.log(solution(num1));
