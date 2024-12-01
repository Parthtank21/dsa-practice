// Problem: Easy
// https://www.hackerrank.com/challenges/insertionsort1/problem?isFullScreen=true

let arr = [2, 4, 6, 8, 3]; // Array
let n = 5; // Array size

// First Attempt
function solution(arr, n) {
    let element = arr[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > element) {
            arr[i + 1] = arr[i];
            console.log(arr.join(" "));
        } else {
            arr[i + 1] = element;
            console.log(arr.join(" "));
            break;
        }
        if (i == 0) {
            arr[i] = element;
            console.log(arr.join(" "));
        }
    }
}

// Second Attempt
function solution1(arr, n) {
    let last = arr[n - 1];

    for (let i = n - 1; i >= 0; i--) {
        if (last < arr[i - 1]) {
            arr[i] = arr[i - 1];
            console.log(arr.join(" "));
        } else {
            arr[i] = last;
            console.log(arr.join(" "));
            break;
        }
    }
}

solution1(arr, n);