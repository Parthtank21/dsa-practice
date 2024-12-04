// Problem: reverse number
// https://leetcode.com/problems/reverse-integer/

let num = 12300000;
let num1 = 7789;
let num2 = 12;

function solution(num) {
  let reverse = 0;

  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }

  return reverse;
}

// Leetcode Solution
function leetcode(x) {
    const limit = Math.pow(2, 31) - 1;
    let reverse = 0;
    let original = x

    x = original < 0 ? -x : x;

    while (x > 0) {
        let digit = x % 10;
        reverse = reverse * 10 + digit;
        x = Math.floor(x / 10);
    }

    if (reverse > limit || -reverse < -limit) {
        return 0;
    }

    return original < 0 ? -reverse : reverse;
}

console.log(solution(num));
console.log(solution(num1));
console.log(solution(num2));
