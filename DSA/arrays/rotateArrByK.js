function rotateArr(arr, k) {
    k = k % arr.length;
    reverse(arr,0,arr.length-1);
    reverse(arr,0,k-1);
    reverse(arr,k,arr.length-1);
    return arr;
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

let myArr = [1,2,3,4,5,6];
let k = 2;
let result = rotateArr(myArr, k);
console.log(result);


