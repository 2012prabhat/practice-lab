
function factorial(n){
    if(n==1){
        return 1;
    }
    let fact = n * factorial(n-1);
    return fact;
}

let result = factorial(5);
console.log(result);