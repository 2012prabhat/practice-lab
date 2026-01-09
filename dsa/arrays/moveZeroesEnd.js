function moveZeroesEnd(arr){
   let insertPos = 0;
   for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
        [arr[i],arr[insertPos]] = [arr[insertPos],arr[i]];
        insertPos++;
    }
   }
   return arr
}

function moveZeroesStart(arr){
   let insertPos = arr.length-1;
   for(let i=arr.length-1;i>=0;i--){
    if(arr[i]!==0){
        [arr[i],arr[insertPos]] = [arr[insertPos],arr[i]];
        insertPos--;
    }
   }
   return arr
}


let myArr = [1,2,3,4,0,0,5,6,0,12];
let myArr2 = [1,2,3,4,0,0,5,6,0,12];
let result1 = moveZeroesEnd(myArr);
let result2 = moveZeroesStart(myArr2);
console.log(result1);
console.log(result2);