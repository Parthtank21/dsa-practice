// Output:
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result += `${i} `;
    }
    console.log(result);
  }
}

pattern(5);
