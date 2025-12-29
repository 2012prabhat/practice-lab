let arr = [1,2,[3,4],[5,[6,7]]];

function flatArr(arr,result=[]){
    for(let elem of arr){
        if(Array.isArray(elem)){
            result = flatArr(elem,result)
        }else{
            result.push(elem);
        }
    }
    return result;
}

let result = flatArr(arr)
console.log(result)