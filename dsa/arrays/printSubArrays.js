function printSubarrays(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let subArr = [];
            for(let k=i;k<=j;k++){
                subArr.push(arr[k]);
            }
            console.log(subArr)
        }
    }
}

// Example usage:
let arr = [1, 2, 3];
printSubarrays(arr);
