// Output:
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// First Attempt
function pattern(n) {
  for (let i = 0; i < n; i++) {
    let result = "";

    for (let j = 0; j <= i; j++) {
      result += "*";
    }

    console.log(result);
  }

  for (let i = 0; i < n; i++) {
    let result = "";

    for (let j = n - 1; j > i; j--) {
      result += "*";
    }

    console.log(result);
  }
}

// Second Attempt
function pattern2(n) {
  for (let i = 0; i < 2 * n; i++) {
    let stars = i;
    if (i > n) stars = 2 * n - i;
    let result = "";

    for (let j = 0; j < stars; j++) {
      result += "*";
    }

    console.log(result);
  }
}

pattern2(5);
