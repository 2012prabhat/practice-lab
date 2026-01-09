function arrIsSorted(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            return false;
        }
    }
    return true;
}

let arr = [1,2,3,44,2,55,64,78,80];
let result = arrIsSorted(arr);
console.log(result);


