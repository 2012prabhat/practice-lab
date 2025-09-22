function twoSum(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j] === target){
                return i+" "+j;
            }
        }
    }
}

let arr = [1,2,3,4,6,7,8];
let target = 5;
let result = twoSum(arr,target);
console.log(result);