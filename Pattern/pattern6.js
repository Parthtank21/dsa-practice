// Output:
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = n; j >= i; j--) {
      result += `${n - j + 1} `;
    }
    console.log(result);
  }
}

pattern(5);
