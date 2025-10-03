/*
Problem: Triplet Sum = 0 (3Sum, Easy/Medium)

Given an integer array `nums`, return all the unique triplets [nums[i], nums[j], nums[k]] 
such that:
    - i, j, and k are distinct indices
    - nums[i] + nums[j] + nums[k] == 0

The solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1, 0, 1, 2, -1, -4]
Output: [[-1, -1, 2], [-1, 0, 1]]

Example 2:
Input: nums = [0, 1, 1]
Output: []

Example 3:
Input: nums = [0, 0, 0]
Output: [[0, 0, 0]]
*/

function threeSum(nums){
    console.log(nums);
}

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); 
// Expected: [[-1, -1, 2], [-1, 0, 1]]

console.log(threeSum([0, 1, 1])); 
// Expected: []

console.log(threeSum([0, 0, 0])); 
// Expected: [[0, 0, 0]]
