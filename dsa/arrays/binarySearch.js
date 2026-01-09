function binarySearch(arr,target){
    let idx = -1;
    let start = 0;
    let end = arr.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]===target){
            return mid;
        }else if(arr[mid]<target){
            start = mid+1;
        }else if(arr[mid]>target){
            end = mid-1;
        }
    }
    return idx;
}

let arr = [1,2,3,44,55,64,78,80];
let k = 64;
let result = binarySearch(arr,k);
console.log(result);


