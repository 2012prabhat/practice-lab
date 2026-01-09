// brute force
function maximumSubArray(arr,k){
    let maxSum = -Infinity;
    for(let i=0;i<=arr.length-k;i++){
        let cSum = 0;
        for(let j=i;j<=i+k-1;j++){
            cSum += arr[j];
        }
        maxSum = Math.max(cSum,maxSum);
    }
    return maxSum;
}

// sliding window 

function maximumSubArrayBySlidingWindow(arr,k){
    let windowSum = 0;
    for(let i=0;i<k;i++){
        windowSum += arr[i];
    }
    let maxSum = windowSum;
    for(let i=k;i<arr.length;i++){
        windowSum = windowSum - arr[k-1] + arr[i];
        maxSum = Math.max(maxSum,windowSum);
    }
    return maxSum;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let k = 3;
console.log(maximumSubArray(arr,k));
console.log(maximumSubArrayBySlidingWindow(arr,k));