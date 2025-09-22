function twoSum(arr, target) {
    let myMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];

        if (myMap.has(complement)) {
            return [myMap.get(complement), i]; // complement found
        }

        myMap.set(arr[i], i); // add current element after check
    }

    return []; // if no solution found
}

let arr = [1, 2, 3, 4, 6, 7, 8];
let target = 5;
console.log(twoSum(arr, target)); // [0, 3]
