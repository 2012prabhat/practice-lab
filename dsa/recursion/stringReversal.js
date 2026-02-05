function stringReversal(str){
    if(str==""){
        return '';
    }

    let revStr = str[str.length-1] + stringReversal(str.slice(0,str.length-1))
    return revStr;
}

let str = 'Hello Prabhat';
console.log(stringReversal(str));