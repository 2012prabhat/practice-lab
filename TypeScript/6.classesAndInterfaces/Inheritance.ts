class User{
    public firstName:string;
    public lastName:string;
    public age:number;

    constructor(firstName:string,lastName:string,age:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return this.firstName + " " + this.lastName;
    }
    set fullName(name:string){
        this.firstName = name.split(' ')[0];
        this.lastName = name.split(' ')[1];
       
    }

    static greet(){
        return console.log('Hello!')
    }
}

User.greet() // static method can be called by class not instance
const user1 = new User('Prabhat','Kumar',28);
user1.fullName = 'Prabhat test'
console.log(user1.fullName)


class Employee extends User{
    constructor(public jobTitle:string){
        super();
    }

    work(){
        console.log(this.firstName)  
    }

}

const employee1 = new Employee("Prabhat Kumar");
console.log(employee1.firstName);