// export enum Role {
//     ADMIN,
//     USER,
// }

/* @sc-ignore
"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
*/

//https://www.typescriptlang.org/play?#code/KYOwrgtgBASg9gG2FA3gKCpqBBAIgWQEkA5AGgywFUBlAURnIF80g

/*
export enum Role{
    ADMIN="ADMIN",
    USER="USER"
}

export var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USER"] = "USER";
})(Role || (Role = {}));

function getRole(role:Role){
    switch (role) {
        case Role.ADMIN:
            console.log("ADMIN");
            
            return role
    }
}
//event it's same we till get error
getRole("ADMIN")

// also same value with different enum name will not work
*/

// runtime cause and also unpreaditble syntax you get after compile

// will not run it's cosider 0 so it's false case
// if(Role.Admin){
//     console.log("admin");
    
// }

//coming to part of uninon which is string literal

/* @sc-ignore
type role = "Admin" | "User"

const AdminArr:"Admin"[] = [];

function mutatedArray(item:"Admin"){
    AdminArr.push(item);
}

mutatedArray("User")
here you lose dot access like Role.Admin 
also we don't iterate enum
*/

// Advanced way

//what if i tell there is another strong way to use enum
// 1. array uninon Iterator
// 2. Object uninon Iterator

// 1. array uninon

/* @sc-ignore
const UserRoles = ["Admin", "User","Staff"] as const;  // as const is Object.freeze but it's on nested level as well

type UserRole = typeof UserRoles[number];

function getRole(role:UserRole){
    switch (role) {
        case UserRoles[0]:
            console.log("Admin");
            
            return role

            case UserRoles[1]:
            console.log("USER");
            
            return role

            case UserRoles[2]:
            console.log("STAFF");
            
            return role
    
        default:
            break;
    }
}

getRole(UserRoles[0]) 
getRole("Staff")

*/

//  2. Object uninon Iterator

/* @sc-ignore
const USER_ROLE={
    ADMIN:0,
    USER:1,
    STAFF:2,
} as const 

type TUserRole = typeof USER_ROLE[keyof typeof USER_ROLE];

function getRole(role:TUserRole){
    switch (role) {
        case USER_ROLE.ADMIN:
            console.log("Admin");
            
            return role

            case USER_ROLE.USER:
            console.log("USER");
            
            return role

            case USER_ROLE.STAFF:
            console.log("STAFF");
            
            return role
    
        default:
            break;
    }
}

getRole(USER_ROLE.ADMIN) 
getRole(0)

*/