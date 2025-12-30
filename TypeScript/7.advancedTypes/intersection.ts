type FileData = {
    path:string,
    content:string
}

type DatabaseData = {
    connectionUrl:string,
    credentials:string
}

type Status = {
    isOpen:boolean,
    errorMessage?:string
}

type AccessedFileData = FileData & Status;
type AccessedDatabaseData = Status & DatabaseData;


interface FileData1{
    path:string,
    content:string
}

interface DatabaseData1{
    connectionUrl:string,
    credentials:string
}

interface Status1{
    isOpen:boolean,
    errorMessage?:string
}

interface AccessedFileDataInterface extends FileData1, Status1{

}




 