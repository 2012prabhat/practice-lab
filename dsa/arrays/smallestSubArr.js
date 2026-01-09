function smallestSubarrayWithSum(arr, target) {
    let start = 0;
    let currentSum = 0;
    let minLength = Infinity;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end]; // expand window

        // shrink window while sum >= target
        while (currentSum >= target) {
            minLength = Math.min(minLength, end - start + 1);
            currentSum -= arr[start];
            start++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

// Example usage
console.log(smallestSubarrayWithSum([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(smallestSubarrayWithSum([1, 4, 4], 4));          // 1
console.log(smallestSubarrayWithSum([1, 1, 1, 1, 1], 11));   // 0
