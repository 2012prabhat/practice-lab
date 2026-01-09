function secondLargest(arr) {
  let max = -Infinity;
  let secLarge = max;
  arr.forEach((elem) => {
    if(elem > max){
        secLarge = max;
        max = elem;
    }

    if(elem < max && elem > secLarge){
        secLarge = elem;
    }
  });
  return secLarge;
}

let myArr = [110, 656, 78, 0, -100, 56, 74];
let result = secondLargest(myArr);
console.log(result);
