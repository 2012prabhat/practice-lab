function removeDuplicates(arr){
   let j = 1;
   for(let i=1;i<arr.length;i++){

    if(arr[i] !== arr[i-1]){
        arr[j] = arr[i];
        j++;
    }

   }
     return arr.slice(0, j);  
}

let arr = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(arr));

