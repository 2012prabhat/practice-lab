/*
Problem: Pair Sum in Sorted Array (Brute Force)

Given a sorted array of integers `nums` and a target integer `target`, 
find the indices of two numbers such that they add up to the target.

Brute Force: Check all possible pairs using nested loops.
Time Complexity: O(n²)
*/

function pairSumSorted(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]; // return the indices
            }
        }
    }
    return [];
}

// Test cases
console.log(pairSumSorted([1, 2, 3, 4, 6], 6));   // Expected: [1, 3]
console.log(pairSumSorted([2, 7, 11, 15], 9));    // Expected: [0, 1]
console.log(pairSumSorted([1, 3, 5, 8, 12], 13)); // Expected: [0, 4]
