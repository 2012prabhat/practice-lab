let input = '';
const didProvideInput = input || false;
const didProvideInput2 = input ?? false; 

console.log(didProvideInput2) // it will give empty string
console.log(didProvideInput)
