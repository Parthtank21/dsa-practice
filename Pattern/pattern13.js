// Output:
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

function pattern(n) {
  let counter = 1;
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result += counter + " ";
      counter++;
    }
    console.log(result);
  }
}

pattern(5);
