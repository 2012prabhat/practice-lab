// Question. Largest Subarray with 0 Sum

// Problem Statement:
// Given an array of integers (can be positive or negative), find the length of the largest contiguous subarray with sum = 0.

function largestSubArrayWithSum(arr){
    let prefixSum = 0;
    let map = new Map();
    let maxLength = 0;

    for(let i=0;i<arr.length;i++){
        prefixSum += arr[i];
        if(prefixSum == 0){
            maxLength = i+1;            
        }else if(map.get(prefixSum)!==undefined){
                maxLength = Math.max(maxLength, i - map.get(prefixSum));
        }else{
            map.set(prefixSum,i);
        }
    }
    return maxLength;
}

let arr = [1, 2, -3, 3];
console.log(largestSubArrayWithSum(arr));



