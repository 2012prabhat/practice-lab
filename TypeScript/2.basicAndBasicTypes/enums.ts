// enum Role {
//   Admin,
//   User,
//   Guest
// }

// let myRole: Role = Role.Admin;
// console.log(myRole);

let userRole : 'user' | 'guest' | 'superAdmin' | 'admin' = 'admin';
console.log(userRole)


type Roles = 'user' | 'guest' | 'superAdmin' | 'admin';

let myUserRole:Roles;

myUserRole = 'user'
console.log(myUserRole)