// Output:
//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *

function pattern(m) {
  let n = m / 2;
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

  for (let i = 0; i < n; i++) {
    let result = "";

    for (let j = 0; j < i; j++) {
      result += " ";
    }

    for (let j = 0; j < 2 * (n - i) - 1; j++) {
      result += "*";
    }

    for (let j = 0; j < i; j++) {
      result += " ";
    }

    console.log(result);
  }
}

pattern(10);
