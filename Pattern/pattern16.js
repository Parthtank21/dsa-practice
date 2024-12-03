// Output:
// A
// B B
// C C C
// D D D D
// E E E E E

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 0; j <= i; j++) {
      result += `${String.fromCharCode(65 + i)} `;
    }
    console.log(result);
  }
}

pattern(5);
