
function isPowerOf2(n){
    if(n==1) return true;
    else if(n<1 || n%2 !== 0){
        return false;
    }
    let result = isPowerOf2(n/2);
    return result;
}

console.log(isPowerOf2(12));