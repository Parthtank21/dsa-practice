// Problem: Check if a string is palindrome or not
// https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function (s) {
  const str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return recursion(0, str, str.length);
};

function recursion(i, str, n) {
  if (i >= n / 2) return true;
  // Compare
  if (str[i] !== str[n - 1 - i]) return false;
  return recursion(i + 1, str, n);
}

let str = "A man, a plan, a canal: Panama";
console.log(isPalindrome(str));
