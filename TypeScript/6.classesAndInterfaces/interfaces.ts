interface Authenticatable{
    email:string;
    password:string;
    login():void;
    logout():void;
}


interface AuthenticatableAdmin extends Authenticatable{
    role:'admin' | 'superAdmin';
}

let user:Authenticatable

user = {
    email:'2012prabhat@gmail.com',
    password:'testpassword',
    login(){
        return 'User is logged in'
    },
    logout(){

    }
}


class AuthenticatableUser implements Authenticatable{
    constructor(public email:string, public password:string){

    }
    login(){

    }
    logout(){

    }
}


function authenticate(user:Authenticatable){
    user.login()
}

authenticate(user)