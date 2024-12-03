// Output:
// A B C D E
// A B C D
// A B C
// A B
// A

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = n; j > i; j--) {
      result += `${String.fromCharCode(65 + n - j)} `;
    }
    console.log(result);
  }
}

pattern(5);
