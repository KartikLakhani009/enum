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

// @sonarlint-disable-next-line
// export var Role;
// (function (Role) {
//     Role["ADMIN"] = "ADMIN";
//     Role["USER"] = "USER";
// })(Role || (Role = {}));

function printRole(role:Role){
    switch (role) {
        case Role.ADMIN:
            console.log("ADMIN");
            
            return role
    }
}
//event it's same we till get error
printRole("ADMIN")

// also same value with different enum name will not work
*/

// runtime cause and also unpreaditble syntax you get after compile

// will not run it's cosider 0 so it's false case
// if(Role.Admin){
//     console.log("admin");
    
// }
// https://github.com/typescript-eslint/typescript-eslint/issues/561












//coming to part of uninon way

/*
// @sc-ignore
type role = "Admin" | "User"

const AdminArr:"Admin"[] = [];

function mutatedArray(item:"Admin"){
    AdminArr.push(item);
}

mutatedArray("User")

// https://res.cloudinary.com/practicaldev/image/fetch/s--MHksN0vO--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8bpwl2fg1agqlodxa9ez.jpg

// here you lose dot access like Role.Admin 
// also we don't iterate enum

//https://www.google.com/imgres?imgurl=https%3A%2F%2Fcampedersen.com%2Fstatic%2Fdecision-fa765218f173a06140fcdb76d7e6e875.jpg&tbnid=pERyqT6B4jELXM&vet=12ahUKEwiTluOGo9WCAxWytCcCHfTSCkcQMygBegQIARBL..i&imgrefurl=https%3A%2F%2Fcampedersen.com%2Fenum-vs-string%2F&docid=feMwNVb7vRKnPM&w=500&h=756&itg=1&q=typescript%20enum%20memes&ved=2ahUKEwiTluOGo9WCAxWytCcCHfTSCkcQMygBegQIARBL

*/










// Advanced way

//what if i tell there is another better way to use enum
// 1. array uninon Iterator
// 2. Object uninon Iterator

// 1. array uninon

/*
//  @sc-ignore
const UserRoles = ["Admin", "User","Staff"] as const;  // as const is Object.freeze but it's on nested level as well

type UserRole = typeof UserRoles[number];

function printRole(role:UserRole){
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

printRole(UserRoles[0]) 
printRole("Staff")
// printRole("developer")
*/


//  2. Object uninon Iterator

/* @sc-ignore
const USER_ROLE={
    ADMIN:0,
    USER:1,
    STAFF:2,
} as const 


above thing we may use in javascript as well by this approach

type TUserRole = typeof USER_ROLE[keyof typeof USER_ROLE];

function printRole(role:TUserRole){
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

printRole(USER_ROLE.ADMIN) 
printRole(0)

*/

















// 2. point of rust pattern mathing

/*
export const USER_ROLE={
    ADMIN:0,
    USER:1,
    STAFF:2,
} as const 

export type TUserRole = typeof USER_ROLE[keyof typeof USER_ROLE];

// below code is in your file 
const roleFunction:Record<TUserRole,() => void> ={
    [USER_ROLE.ADMIN]:()=>console.log("ADMIN func called"),
    [USER_ROLE.USER]:()=>console.log("USER func called"),
    [USER_ROLE.STAFF]:()=>console.log("STAFF func called"),
    // 3:()=>console.log("3 func called"),
}

function printRole(role:TUserRole){
   roleFunction[role]();
}

printRole(2)
*/