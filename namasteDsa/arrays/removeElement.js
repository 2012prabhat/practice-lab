function removeElement(arr,target){
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== target){
            arr[count] = arr[i];
            count++;
        }
    }
    return count;
}



let arr = [1,2,3,2,3,4,5,3,4,5,3];
let target = 3;
console.log(removeElement(arr,target));