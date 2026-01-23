
let names:Array<string> = ["Prabhat","Rajan"];

type DataStore<T> = {
    [key:string]:T
}

const myStore:DataStore<string | boolean> = {};
myStore.isOpen = false;
myStore.ownerName = 'Prabhat Kumar'

function merge<T,U>(a:T,b:U){
    return [a,b];
}

merge< number,string >(123,'test parameter') // both parameter should be of the same type 


function mergeObj(a,b){
    
}