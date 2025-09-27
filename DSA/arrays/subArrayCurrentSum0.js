// Q5. Count Subarrays with Sum 0

// Problem Statement:
// Given an integer array (positive, negative, or zero), find the total number of subarrays whose sum is equal to 0.


function couuntSubArrayWithSum0(arr){
    let count = 0;
    for(let i=0;i<arr.length;i++){
        let sum = 0;
        for(let j=i;j<arr.length;j++){
            sum += arr[j];
            if(sum === 0) count++;
        }
    }
    return count;
}

let arr = [1, -1, 2, -2, 3];
let result = couuntSubArrayWithSum0(arr);
let result2 = couuntSubArrayWithSum0Hashmap(arr);
console.log(result);
console.log(result2);


// O(n) approach

function couuntSubArrayWithSum0Hashmap(arr){
    let prefixSum = 0;
    let count = 0;
    let map = new Map();

    map.set(0,1);

    for(let i=0;i<arr.length;i++){
        prefixSum += arr[i];

        if(map.has(prefixSum)){
            count += map.get(prefixSum);
            map.set(prefixSum,map.get(prefixSum)+1);
        }else{
            map.set(prefixSum,1);
        }
        
    }

    return count;
}