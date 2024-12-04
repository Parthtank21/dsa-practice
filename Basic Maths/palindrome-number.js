// Problem: Palindrome number
// https://leetcode.com/problems/palindrome-number/

let num = 12300000;
let num1 = 7789;
let num2 = 121;

function solution(num) {
  let original = num;
  let reverse = 0;

  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }

  return reverse === original;
}

console.log(solution(num));
console.log(solution(num1));
console.log(solution(num2));
