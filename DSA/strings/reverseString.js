function reverseString(str){
    let newStr = str.split("");
    let start = 0;
    let end = newStr.length-1;
    while(start<end){
        [newStr[start],newStr[end]] = [newStr[end],newStr[start]];
        start++;
        end--;
    }
    return newStr.join('');
}



const str = "Prabhat";
const result = reverseString(str);
console.log(result);