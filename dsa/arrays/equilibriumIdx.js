// Problem Statement:
// An index i in an array is called an equilibrium index if the sum of elements before it is equal to the sum of elements after it.

function equilibriumIdx(arr){
    let totalSum = 0;
    for(let elem of arr ) totalSum += elem;

    let leftSum = 0;
    for(let i=0;i<arr.length;i++){
        if(leftSum === totalSum - leftSum - arr[i]){
            return i;
        }

        leftSum += arr[i];
    }

    return -1;
}


let arr = [1, 7, 3, 6, 5, 6];
let result = equilibriumIdx(arr);
console.log(result);