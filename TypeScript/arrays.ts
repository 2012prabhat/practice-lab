let hobbies = ['Sports', 'Cooking'];

hobbies.push('10'); // we cannot push number in this array 

let users : Array<string | number>;
users = [1,'Max'];
users = ['Test',10];
console.log(users);

let newUser:{
    name:string,
    age:number,
    other:null,
} = {
    name:"Prabhat",
    age:27,
    other:null
}

console.log(newUser);



let testObj:{
    name:string,
    age:any,
    gender:string,
    hobbies:(string|number)[]
}  = {
    name:'Prabhat Kunar',
    age:28,
    gender:'Male',
    hobbies : ['Coding','Gym',1]
}

console.log(testObj)