// Resource:
// https://www.youtube.com/watch?v=tNm_NNSB3_w

// Output:
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

function pattern1(n) {
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 1; j <= n; j++) {
      result += "* ";
    }
    console.log(result);
  }
}

pattern1(5);
