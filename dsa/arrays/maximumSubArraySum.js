function maxSumSubArray(arr) {
    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];  // add current element
            max = Math.max(max, sum);
        }
    }

    return max;
}

// Example
let arr = [1, 2, 3];
console.log(maxSumSubArray(arr)); // 6
console.log(maxSumSubArrayByKadnesAlgo(arr)); // 6


function maxSumSubArrayByKadnesAlgo(arr){
    let currSum = 0;
    let max = -Infinity;
    
    for(let elem of arr){
        currSum += elem;
        max = Math.max(max,currSum);
        if(currSum<0){
            currSum = 0;
        }
    }
    return max;
}   