const ROLES = require("./role");

function printRole(role) {
  switch (role) {
    case ROLES.ADMIN:
      console.log("Admin");
      break;

    case ROLES.USER:
      console.log("User");
      break;

    case ROLES.STAFF:
      console.log("Staff");
      break;
  }
}

function isAdmin(role) {
  switch (role) {
    case ROLES.ADMIN:
      console.log("Admin");
      break;

    default:
      console.log("Not a Admin");
      break;
  }
}

printRole(ROLES.STAFF);
isAdmin(ROLES.USER);
printRole(ROLES.MARKETING);
