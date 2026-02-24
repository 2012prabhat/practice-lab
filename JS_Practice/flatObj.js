const obj1 = {
    'key1': 'value1',
    'key2': 'value2',
    'key3': {
        key4: 'value4',
        key5: 'value5',
        key6: {
            key7: 'value7',
            key8: 'value8'
        }
    },
    "key9": 'value9',
    "key10": 'value10'
}

function flatNestedObj(obj) {
    let flatObj = {};

    for (let key in obj) {
        if (obj[key] !== null && typeof obj[key] === "object") {
            flatObj[key] = undefined;
            let newObject = flatNestedObj(obj[key]);
            Object.assign(flatObj, newObject);
        } else {
            flatObj[key] = obj[key];
        }
    }

    return flatObj;
}

console.log(flatNestedObj2(obj1));


function flatNestedObj2(obj) {
    let flatObj = {};

    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj)) {
            flatObj[key] = undefined;
            let newObj = flatNestedObj(obj[key]);
            Object.assign(flatObj,newObj);
        } else {
            flatObj[key] = obj[key];
        }
    }
    return flatObj
}




