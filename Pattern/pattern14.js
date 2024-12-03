// Output:
// A
// A B
// A B C
// A B C D
// A B C D E

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 0; j <= i; j++) {
      result += `${String.fromCharCode(65 + j)} `;
    }
    console.log(result);
  }
}

pattern(5);
