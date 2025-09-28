/*
Problem: Two Sum (Easy)

Given an array of integers `nums` and an integer `target`, return the indices 
of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.

Input: 
- nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9

Input:
- nums = [3, 2, 4], target = 6
Output: [1, 2]

Input:
- nums = [3, 3], target = 6
Output: [0, 1]
*/



// brute force approach O(n2);
function twoSum1(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(i!==j && nums[i]+nums[j] === target){
                return [i,j];
            }
        }
    }
    return [];
}

// optimal approach O(n)
function twoSum(nums, target){
    const map = new Map();
    for(let i=0;i<nums.length;i++){
        let complement = target-nums[i];
        if(map.has(complement)){
            return [map.get(complement),i]
        }
          map.set(nums[i],i)
    }
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9));  // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6));       // Expected: [1, 2]
console.log(twoSum([3, 3], 6));          // Expected: [0, 1]
