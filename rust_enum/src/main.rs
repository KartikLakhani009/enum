mod modal;

use modal::role::ROLES;

fn print_role(role: ROLES) {
    // switch(role){
    //     case ROLES::ADMIN:{
    //      println!("Admin")
    //         break;
    //     }
    // }
    match role {
        ROLES::ADMIN => println!("Admin"),
        ROLES::USER => println!("User"),
        ROLES::STAFF => println!("Staff"),
        // ROLES::MARKETING => println!("MARKETING"),
    }
}

fn is_admin(role: ROLES) {
    match role {
        ROLES::ADMIN => {
            println!("Admin")
        }
        _ => {
            println!("Not Admin")
        }
    }
}

fn main() {
    print_role(ROLES::ADMIN);
    is_admin(ROLES::STAFF);
}
