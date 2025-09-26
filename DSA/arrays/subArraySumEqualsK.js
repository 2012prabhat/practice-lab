// Q2. Subarray Sum Equals K

// 🔹 Given an integer array arr and an integer k, return the total number of subarrays whose sum equals k.

function subArraySumEqualsK(arr,k){
    let count = 0;
    for(let i=0;i<arr.length;i++){
        let sum = 0;
        for(let j=i;j<arr.length;j++){
            sum += arr[j];
            if(sum === k) count++;
        }
    }
    return count;
}


const arr = [1, 1, 1];
const k = 2;
const result = subArraySumEqualsK(arr,k);
console.log(result);

