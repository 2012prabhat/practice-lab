function isParaValid(str) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let ch of str) {
    if (["(", "{", "["].includes(ch)) {
      stack.push(ch);
    } else if ([")", "}", "]"].includes(ch)) {
      if (stack.length === 0) {
        return false;
      }
      let topElem = stack.pop();
      if (map[topElem] !== ch) {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false;
}

let str = "(){}{[]}{{{}}}";
console.log(validParan(str));

function validParan(str) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for(let ch of str){
    if(['(','{','['].includes(ch)){
        stack.push(ch);
    }else if([')','}',']'].includes(ch)){
        if(stack.length===0){
            return false
        }
        let topElem = stack.pop();
        if(map[topElem] !== ch){
            return false;
        }
    }
  }
  if(stack.length===0){
    return true
  }else{
    return false
  }
}
