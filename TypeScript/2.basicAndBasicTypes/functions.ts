function log(message:string):void{
    console.log(message);
}

function logAndThrow(errorMessage:string):never{
    console.log(errorMessage);
    throw new Error(errorMessage);
}


function performJob(cb:(msg:string)=> void){
    cb("job done")
}

performJob(log);

type User = {
    name:string,
    age:number,
    gender:'Male' | 'Female' | 'Other',
    greet:()=>string
}

const user1:User = {
    name:'Prabhat Kumar',
    age:28,
    gender:'Male',
    greet:function(){
        return this.name
    }

}

console.log(user1)

