
function printMyName(name,age){
    console.log(name,age)
}

function printMyName2(...args){
    let test = args
    console.log(test)
}

function printMyName3(){
    console.log(this.name)
}

printMyName.call({},"Prabhat",27)

printMyName2.apply({},["Prabhat",27])

const newFunc = printMyName3.bind({name:'Prabhat'})

newFunc()


