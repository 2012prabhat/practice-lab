var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        set: function (name) {
            this.firstName = name.split(' ')[0];
            this.lastName = name.split(' ')[1];
        },
        enumerable: false,
        configurable: true
    });
    User.greet = function () {
        return console.log('Hello!');
    };
    return User;
}());
User.greet(); // static method can be called by class not instance
var user1 = new User('Prabhat', 'Kumar', 28);
user1.fullName = 'Prabhat test';
console.log(user1.fullName);
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(jobTitle) {
        var _this = _super.call(this) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    Employee.prototype.work = function () {
        console.log(this.firstName);
    };
    return Employee;
}(User));
var employee1 = new Employee("Prabhat Kumar");
console.log(employee1.firstName);
