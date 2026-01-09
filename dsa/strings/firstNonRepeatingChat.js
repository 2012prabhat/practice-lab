function firstNonRepeatingChar(str){
    const mp = new Map();
    for(let i=0;i<str.length;i++){
        let mpVal = mp.get(str[i]) || 0;
        mpVal += 1;
        mp.set(str[i],mpVal);
    }


    for(let [elem,value] of mp){
        if(value===1){
            return elem;
        }
    }
}

let str = "aabbccde";
let result = firstNonRepeatingChar(str);
console.log(result);

