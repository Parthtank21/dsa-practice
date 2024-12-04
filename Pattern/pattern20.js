// Output:
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

function pattern(n) {
  let outerCount = 2 * n - 1;
  let spaces = 2 * (n - 1);
  let stars = 1;

  for (let i = 1; i <= outerCount; i++) {
    let result = "";

    for (let j = 1; j <= stars; j++) {
      result += "*";
    }

    for (let j = 1; j <= spaces; j++) {
      result += " ";
    }

    for (let j = 1; j <= stars; j++) {
      result += "*";
    }

    if (i > outerCount / 2) {
      spaces = spaces + 2;
      stars = stars - 1;
    } else {
      spaces = spaces - 2;
      stars = stars + 1;
    }

    console.log(result);
  }
}

pattern(5);
