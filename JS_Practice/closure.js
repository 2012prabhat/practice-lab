// closure is a mechanism by which inner function can remember the variables of its outer function even the outer function completely executed

function outerFunction(){
    let count = 0;
    function innerFunction(){
        count++;
        console.log(count)
    }

    return innerFunction;
}


const counter = outerFunction();
counter()
counter()
counter()