// Output:
//     *
//    ***
//   *****
//  *******
// *********

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let result = "";

    for (let j = 0; j < n - i - 1; j++) {
      result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      result += "*";
    }
    for (let j = 0; j < n - i - 1; j++) {
      result += " ";
    }

    console.log(result);
  }
}

pattern(5);
