

function testFun(){
    console.log(this)
}

// testFun()

const user = {
  name: "Prabhat",
  greet(name) {
    console.log(this.name);
  }
};

user.greet("Prabhat Kumar"); //


class CreateUser{
    constructor(name,userType){
        this.name = name;
        this.userType = userType;
    }

   greet(name,userType){
        console.log(`Hello i am ${this.name} and my user type is ${this.userType}`);
    }
    
}

const newUser = new CreateUser("Prabhat Kumar",'Admin');
console.log(newUser.name);

newUser.greet()