function reverseArr(arr){
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        [arr[left],arr[right]] = [arr[right],arr[left]];
        left++;
        right--;
    }
    return arr;
}

let myArr = [110, 656, 78, 0, -100, 56, 74];
let result = reverseArr(myArr);
console.log(result);