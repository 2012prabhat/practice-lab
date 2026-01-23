type DataStore = {
    [props:string]:number | boolean
}

const store:DataStore = {

}

store.id = 1;
store.isOpen = false;

const roles = ['admin','user','tester'] as const;
console.log(roles)



const dataEnteries = {
    id:1,
    price:100
} satisfies Record<string, number>


dataEnteries.test
