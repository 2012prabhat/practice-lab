function test(a){
    return function test1(b){
        console.log(a+b);
    }
}

test(1)(2);