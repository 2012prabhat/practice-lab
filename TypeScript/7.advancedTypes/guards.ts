// type FileSource = {type:'file', path:String};

// const fileSource:FileSource = {
//     type:'file',
//     path:'some/path/to/file.csv',
// }

// type DBSource = {type:'db', connectionString:String};

// const dbSource:DBSource = {
//     type:'db',
//     connectionString:'some-connection-url'
// }

// type Source = FileSource | DBSource;

// function loadData(source:Source){
//    if(source.type==='db'){
//     source.connectionString = "test-connection-string"
//    }
//    return;
// }





type FileSource = {
    type:'file',
    path:String
}

type DBSource = {
    type:'db',
    connectionString:String
}

const fileSource:FileSource = {
    type:'file',
    path:'/testing/filepath/file.csv'
}

const dbSource:DBSource = {
    type:'db',
    connectionString:'some-testing-connection-string'
}


type Source = FileSource | DBSource ;

function loadData(source:Source){
    if(source.type === 'file'){
        return source.path;
    }

    if(source.type === 'db'){
        return source.connectionString;
    }
}


console.log(loadData(fileSource));


