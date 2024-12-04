// Output:
// 4 4 4 4 4 4 4
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4

function pattern(n) {
  let outerCount = 2 * n - 1;

  for (let i = 0; i < outerCount; i++) {
    let result = "";

    for (let j = 0; j < outerCount; j++) {
      let top = i;
      let left = j;
      let bottom = outerCount - 1 - i;
      let right = outerCount - 1 - j;
      let min = Math.min(top, left, bottom, right);
      result += `${n - min} `;
    }

    console.log(result);
  }
}

pattern(4);
