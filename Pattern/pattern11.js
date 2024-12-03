// Output:
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

// First Attempt
function pattern(n) {
  for (let i = 0; i < n; i++) {
    let result = "";

    for (let j = 0; j <= i; j++) {
      let element = (i + j) % 2;
      if (element === 0) result += `1 `;
      if (element === 1) result += `0 `;
    }

    console.log(result);
  }
}

pattern(5);
