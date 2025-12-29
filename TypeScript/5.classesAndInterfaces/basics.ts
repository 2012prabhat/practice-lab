class User{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
}


const user1 = new User('Prabhat',28);
console.log(user1)