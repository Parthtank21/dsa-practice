let num = 7789;

// Using recursion - Slower
function getDigits(num, counter) {
  if (num == 0) return counter;

  let digit = num % 10;
  // console.log(digit);
  counter++;
  num = Math.floor(num / 10);

  return getDigits(num, counter);
}

// Using while loop - Faster
function getDigits1(num) {
  let counter = 0;
  while (num > 0) {
    let digit = num % 10;
    // console.log(digit);
    counter++;
    num = Math.floor(num / 10);
  }
  return counter;
}

console.time("recursion");
console.log(getDigits(num, 0));
console.timeEnd("recursion");

console.time("while");
console.log(getDigits1(num));
console.timeEnd("while");
