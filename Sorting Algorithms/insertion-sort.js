// Resourses:
// https://www.youtube.com/watch?v=HGk_ypEuS24
// https://www.geeksforgeeks.org/insertion-sort-algorithm/

let unsorted = [4, 3, 5, 2, 1];
let sorted = [1, 2, 3, 4, 5];

function insertionSort(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;    
        }
    }
    return arr;
}

console.log(insertionSort(unsorted));
console.log(insertionSort(sorted));