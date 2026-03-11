var a = 30;
function foo() {
    console.log(a);
    var a = 10;
    console.log(a)
}

foo();
console.log(a)



