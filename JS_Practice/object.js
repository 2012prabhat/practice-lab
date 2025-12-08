// Ways to create an object 
// 1
const testObj = {}

// Using function
const newObj2 = new Object();
newObj2.name = 'Prabhat';

newObj2.gender = 'Male';
console.log(newObj2);

function Employee(name,designation,gender,mobile){
       this.name = name;
       this.designation = designation;
       this.gender = gender;
       this.mobile = mobile;
}

const employee1 = new Employee('Prabhat','Web Developer','Male','9711393310');
console.log(employee1);

const emp1KeysArr = Object.keys(employee1);
console.log(`employee 1 keys list`);
console.log(emp1KeysArr)

const emp1ValuesArr = Object.values(employee1);
console.log(`employee 1 values list`);
console.log(emp1ValuesArr)

const emp1EnteriesArr = Object.entries(employee1);
console.log(`employee 1 entries list`);
console.log(emp1EnteriesArr);


const employee = {
    name:'Prabhat',
    gender:'Male',
    age:27,
    get full(){
        console.log(`Hi I am ${this.name} and my gender is ${this.gender} and my age is ${this.age}`)
    },

    set full(val){
        [name,gender,age] = val.split(" ");
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
}

employee.full
employee.full = "Test fe 56"
employee.full


