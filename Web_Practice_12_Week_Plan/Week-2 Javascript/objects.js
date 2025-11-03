let testObj = {
    name:"Prabhat",
    age:26,
    gender:"Male",
    details:function(){
        console.log(`Hi i am ${this.name} and my age is ${this.age}`)
    }
}

console.log(testObj.details());

let keys = Object.keys(testObj);
let values = Object.values(testObj);
console.log(keys);
console.log(values);

