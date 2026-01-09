function removeDuplicates(str){
    str = str.toLowerCase();
    const mp = new Map();
    for(let i=0;i<str.length;i++){
        mp.set(str[i],true);
    }
    let result = ""
    for([keys,value] of mp){
        result +=keys;
    }
    return result;
}


function removeDuplicateUsingSet(str){
    const set = new Set(str);
    return [...set].join("");
}


let str = 'prabhat';
let result = removeDuplicates(str);
let resultSet = removeDuplicateUsingSet(str);
console.log(result);
console.log(resultSet);

