function productExceptSelf(arr) {
    let n = arr.length;
    let output = new Array(n).fill(1);

    // product from left side 
    let leftProd = 1;
    for(let i=0;i<n;i++){
        output[i] = leftProd;
        leftProd = leftProd * arr[i];
    }

    // product from right side 
    let rightProd = 1;
    for(let i = n-1;i>=0;i--){
        output[i] = output[i]*rightProd;
        rightProd = rightProd * arr[i];
    }

    return output;
}

// Example usage:
let arr = [1, 2, 3];
let result = productExceptSelf(arr);
console.log(result);



