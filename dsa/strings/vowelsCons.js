function countVowelsAndConsonants(str) {
  let vowelsArr = ["a", "e", "i", "o", "u"];
  let vowCount = 0;
  let consCount = 0;
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode < 97 || charCode > 122) continue;
    if (vowelsArr.includes(str[i])) {
      vowCount++;
    } else {
      consCount++;
    }
  }
  return { vowels: vowCount, consonant: consCount };
}

let str = "Prabhat 123!!!";
let result = countVowelsAndConsonants(str);
console.log(result);
