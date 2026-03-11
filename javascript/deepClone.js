const personObj = {
  name: "Prabhat Kumar",
  age: 27,
  gender: "male",
  address: {
    city: "Delhi",
    pincode: 110094,
  },
  greet: function () {
    console.log(`Hi I am ${this.name} from person object`);
  },
};

// console.log(personObj.greet());

let copy = { ...personObj };
// console.log(copy.name = "changed")
// let copyPersonObj = JSON.stringify(personObj); // deep copy without functions

// let clone = structuredClone(personObj);
// console.log(clone);

function deepClone(value) {
  // 1. If value is null or not an object → return as is (primitive types)
  if (value === null || typeof value !== "object") {
    return value;
  }

  //2 Handle Arrays

  if (Array.isArray(value)) {
    const newArr = [];
    for (let item of value) {
      newArr.push(deepClone(item));
    }
    return newArr;
  }

  //handle objects
  
  const newObj = {};
  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      newObj[key] = deepClone(value[key]);
    }
  }
  return newObj;
}

const deepCopy = deepClone(personObj);
console.log(deepCopy);
