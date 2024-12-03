// Output:
// 1      1
// 12    21
// 123  321
// 12344321

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let result = "";

    for (let j = 0; j <= i; j++) {
      result += j + 1;
    }

    for (let j = 0; j < 2 * (n - i - 1); j++) {
      result += " ";
    }

    for (let j = i; j >= 0; j--) {
      result += j + 1;
    }

    console.log(result);
  }
}

pattern(4);
