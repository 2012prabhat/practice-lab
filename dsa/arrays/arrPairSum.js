function pairWithGivenSum(arr,k){
     arr.sort((a, b) => a - b); // sort the array
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        
        if(arr[left]+arr[right]===k){
            return true;
        }else if(arr[left]+arr[right]<k){
            left++;
        }else if(arr[left]+arr[right]>k){
            right--;
        }
    }
    return false;
}


let arr = [2, 7, 11, 15];
let k = 9;
const result = pairWithGivenSum(arr,k);
console.log(result);
