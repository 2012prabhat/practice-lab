// Q2. Subarray Sum Equals K

// 🔹 Given an integer array arr and an integer k, return the total number of subarrays whose sum equals k.


// brute force approcah o(n2)
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
const result2 = subArraySumEqualsKByMap(arr,k);
console.log(result);
console.log(result2);



// hashmap approcah with O(n)

function subArraySumEqualsKByMap(arr,k){
    let count = 0;
    let prefixSum = 0;
    let sumCount = new Map();
    sumCount.set(prefixSum,1);

    for(let i=0;i<arr.length;i++){
        prefixSum += arr[i];

        if(sumCount.has(prefixSum - k)){
            count += sumCount.get(prefixSum-k);
        }

        sumCount.set(prefixSum,(sumCount.get(prefixSum) || 0)+1);
    }

    return count;
}

