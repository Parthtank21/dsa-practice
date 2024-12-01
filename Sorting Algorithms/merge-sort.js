// Resources:
// https://www.youtube.com/watch?v=ogjf7ORKfd8
// https://www.geeksforgeeks.org/merge-sort/

let unsorted = [5, 8, 2, 3, 1, 4, 7, 6, 0];
let unsorted2 = [3, 2, 1];
let unsorted3 = [2, 1];
let unsorted4 = [];

function mergeSort(arr, low, high) {
    if (low >= high) return;

    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
    let temp = [];
    let left = low;
    let right = mid + 1;

    while (left <= mid && right <= high) {
        if (arr[left] < arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

function applyMergeSort(arr) {
    mergeSort(arr, 0, arr.length - 1);
    console.log(arr)
}

applyMergeSort(unsorted)
applyMergeSort(unsorted2)
applyMergeSort(unsorted3)
applyMergeSort(unsorted4)





















