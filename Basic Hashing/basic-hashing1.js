// Problem: Count how many times character appears in string
// https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/0

let str = "swiss";

// Using Object for Hashing - Slower
function countFrequency(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];

    if (!obj[curr]) {
      obj[curr] = 1;
    } else {
      obj[curr]++;
    }
  }

  return function (character) {
    return obj[character] ? obj[character] : 0;
  };
}

// Using Array for Hashing - Faster
function countFrequency1(str) {
  let arr = new Array(26).fill(0);

  for (let item of str) {
    let curr = item.charCodeAt(0) - 97;
    arr[curr]++;
  }

  return function (character) {
    let curr = character.charCodeAt(0) - 97;
    return arr[curr] ? arr[curr] : 0;
  };
}

let checkFreq = countFrequency(str);
console.log(checkFreq("i")); // obj: 6.668ms

let checkFreq1 = countFrequency1(str);
console.log(checkFreq1("i")); // arr: 0.277ms
