
function add(a,b){
    for(let i=0;i<1000000000;i++){}
    return a+b;
}


function memoize(fn){
    return function(...args){
        const cache = {};
        const key = JSON.stringify(args);
        if(cache[key]){
            return cache[key]
        }

        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}

const result = memoize(add);
console.log(result(3,5))
console.log(result(3,5))