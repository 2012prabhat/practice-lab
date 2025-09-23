function isPalindrome(str){
    str = str.toLowerCase();
    let start = 0;
    let end = str.length-1;
    while(start<end){
        if(str[start] != str[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
 
}


const str = "Hi I am Prabhst nitin";
const result = isPalindrome(str);
console.log(result);
