function largestElem(arr){
    let max = -Infinity;
    arr.forEach(elem => {
        max = elem > max ? elem : max ;
    });
    return max;
}

let myArr = [110,656,78,0,-100,56,74]
let result = largestElem(myArr)
console.log(result);