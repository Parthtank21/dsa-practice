// Problem: Easy
// https://www.hackerrank.com/challenges/insertionsort2/problem?isFullScreen=true

let arr = [1, 4, 3, 5, 6, 2]; // Array
let n = 6; // Array size

// First Attempt
function solution(arr, n) {
    for (let i = 1; i <= n - 1; i++) {
        let j = i - 1;
        let curr = arr[i];

        while (j >= 0 && arr[j] > curr) {
            arr[j + 1] = arr[j];
            j--
        }

        arr[j+1] = curr
        console.log(arr.join(" "));
    }
}

solution(arr, n);