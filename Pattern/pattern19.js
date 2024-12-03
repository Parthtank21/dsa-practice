// Output:
// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********

function pattern(n) {
  // Upper part
  for (let i = 0; i < n; i++) {
    let result = "";

    for (let j = 1; j <= n - i; j++) {
      result += "*";
    }

    for (let j = 1; j <= 2 * i; j++) {
      result += " ";
    }

    for (let j = 1; j <= n - i; j++) {
      result += "*";
    }

    console.log(result);
  }

  // Lower part
  let space = 2 * n - 2;
  for (let i = 1; i <= n; i++) {
    let result = "";

    for (let j = 1; j <= i; j++) {
      result += "*";
    }

    for (let j = 1; j <= space - 2 * (i - 1); j++) {
      result += " ";
    }

    for (let j = 1; j <= i; j++) {
      result += "*";
    }
    console.log(result);
  }
}

pattern(5);
