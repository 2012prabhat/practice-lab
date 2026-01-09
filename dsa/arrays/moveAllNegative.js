function moveAllNegativeLeft(arr){
    let left = 0;
    let right = arr.length-1;
    while(left<=right){
        if(arr[left]<0 && arr[right]<0){
            left++;
        }else if(arr[left]>0 && arr[right]<0){
            [arr[left],arr[right]] = [arr[right],arr[left]];
            left++;
            right--;
        }
        else if(arr[left]>0 && arr[right]>0){
            right--;
        }else {
            left++;
            right--;
        }
    }

    console.log(arr);
}

let arr = [1,2,3,-10,12,2,-4,2,4,5,-1]
moveAllNegativeLeft(arr)