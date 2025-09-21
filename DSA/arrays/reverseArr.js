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

console.log(reverseArr([1,2,3,4,5,5,6,7]))