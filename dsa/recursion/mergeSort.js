function mergeSort(arr){
    // 1. base case
    if(arr.length<=1){
        return arr;
    }

    //2. Divide
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    //3 conquer
    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);

    //4 merge
    let result = merge(leftSorted,rightSorted);
    return result;
}

function merge(arr1,arr2){
    let result = [];
    let i = 0;
    let j = 0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }


    while(i<arr1.length){
        result.push(arr1[i]);
        i++;
    }

    while(j<arr2.length){
        result.push(arr2[j])
        j++;
    }
    return result;
}


console.log(mergeSort([12,10,23,43,54,12,43]));