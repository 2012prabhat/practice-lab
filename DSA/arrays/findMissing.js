function missingNum(arr,n){
    let sum = 0;
    for(elem of arr){
        sum += elem;
    }

    let realSum = (n * (n+1))/2;
    return realSum - sum;
}

let n = 5;
let arr = [1, 2, 4, 5];
console.log(missingNum(arr,n));
