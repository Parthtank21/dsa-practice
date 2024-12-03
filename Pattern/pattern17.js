// Output:
//      A
//     ABA
//    ABCBA
//   ABCDCBA
//  ABCDEDCBA

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let result = "";
    let counter = 0;

    for (let j = 0; j <= n - 1 - i; j++) {
      result += " ";
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      if (j > i) {
        counter--;
      } else {
        counter++;
      }
      result += String.fromCharCode(64 + counter);
    }

    for (let j = 0; j <= n - 1 - i; j++) {
      result += " ";
    }

    console.log(result);
  }
}

pattern(5);
