var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user1 = new User('Prabhat', 28);
user1.name = "Test Username";
console.log(user1);
