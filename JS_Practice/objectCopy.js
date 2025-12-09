const myDetails = {
    name:'Prahat Kumar',
    gender:'Male',
    age:27,
    address:{
        city:"delhi",
        state:'delhi'
    },
    // getFullDetail(){
    //     console.log(`Hi i am ${this.name}, ${this.gender} ,${this.address.city}`)
    // }
}

const shallowCopy = {...myDetails}; // itr create shallowCopy
myDetails.name = 'Changed'
myDetails.address.city = 'Changed'// it will still change in copied object
// console.log(shallowCopy.getFullDetail())


// const deepCopy = structuredClone(myDetails);
// console.log(deepCopy)

const deep = structuredClone(myDetails);  
console.log(deep) // Best way

console.log(myDetails.hasOwnProperty("name"))
