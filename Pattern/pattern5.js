// Output:
// * * * * *
// * * * *
// * * *
// * *
// *

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = n; j >= i; j--) {
      result += "* ";
    }
    console.log(result);
  }
}

pattern(5);
