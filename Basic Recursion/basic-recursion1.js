// Problem: Print name N times using recursion

function solution(name, time) {
  if (time === 0) return;

  console.log(name);
  solution(name, time - 1);
}

solution("Parth", 3);
