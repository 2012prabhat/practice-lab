function flattenArr(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    if (Array.isArray(elem)) {
      let flatRes = flattenArr(elem);
      for (let j = 0; j < flatRes.length; j++) {
        result.push(flatRes[j]);
      }
    } else {
      result.push(elem);
    }
  }
  return result;
}




function flattenArrNLevels(arr,n){
    let result = [];
    for(let i=0;i<arr.length;i++){
        let elem = arr[i];
        if(Array.isArray(elem) && n>0){
            let flatArr = flattenArrNLevels(elem,n-1);
            result.push(...flatArr)
        }else{
            result.push(elem);
        }
    }
    return result;
}

let arr = [1, 2, 3, [4, 5, 6], [5, 6, [7, 8, 9, [10, 11]]]];
let completeFlat = flattenArr(arr);
let flatTillN = flattenArrNLevels(1)
console.log('Complete Flat Arr', completeFlat);
console.log('Flat Till N', flatTillN);


