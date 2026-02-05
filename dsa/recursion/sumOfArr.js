function sumOfArr(arr){
    if(arr.length===0){
        return 0;
    }
    let lastElem = arr.pop();
    let sum =  lastElem + sumOfArr(arr);
    return sum; 
}

function sumOfArr2(arr,index=0){
    if(index === arr.length) return 0;
    let sum = arr[index] + sumOfArr2(arr,index+1);
    return sum;
}


let arr = [1,2,3,4,5];
let result = sumOfArr2(arr);
console.log(result);