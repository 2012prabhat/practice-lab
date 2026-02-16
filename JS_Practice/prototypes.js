function User(name,age){
    this.name = name;
    this.age = age;
}

User.prototype.getAge = function(){
    return `My name is ${this.name} and my age is ${this.age}`
}
const user1 = new User('Prabhat',28);

// console.log(user1.getAge());



class Student{
    constructor(name, age, department){
        this.name = name;
        this.age = age;
        this.department = department;
    }

    introduce(){
        return `Hi am ${this.name} and I am ${this.age} old and my department is ${this.department} `;
    }
}

const student1 = new Student('Prabhat Kumar',28,'Computer Science');


let testArr = [1,2,3,4,5,6]
Array.prototype.secondLast = function () {
  return this[this.length - 2];
};
console.log(testArr.secondLast());
// console.log(student1.introduce())