// Output:
// *
// * *
// * * *
// * * * *
// * * * * *

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result += "* ";
    }
    console.log(result);
  }
}

pattern(5);
