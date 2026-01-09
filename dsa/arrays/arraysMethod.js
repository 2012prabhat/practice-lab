
let arr = [1,2,3,4,5];

let newArr = arr.slice(1,3); // it will not affect the current arr ;

arr.splice(1,3,34,34.12,12,32)
console.log(arr);
// console.log(newArr)


arr.push(6); // it will add in the last
arr.unshift(2); // it will add element in the begining

arr.pop(); // it will remove element from last 
arr.shift(); // it will remove elemnet from first 


for(elem in arr){
        console.log(arr[elem]) // it wil idx in elem
}

console.log("by for of loop ------------------")
for(elem of arr){
    console.log(elem) // it will give element in elem 
}

console.log("by for each loop ------------------")
arr.forEach((elem,idx)=>{
    console.log(elem+" "+idx)
})

console.log("by map ------------------")

let newArr1 = arr.map((elem)=>{
    return elem*2
})
console.log(newArr1)