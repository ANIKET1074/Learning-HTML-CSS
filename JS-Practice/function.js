//  Functions

// Functions declaration Syntax

function getUserName(email) {
  return email.slice(0, email.indexOf("@"));
}

console.log(getUserName("userName@gmail.com"));

// Functions provides reusable code

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("anIKet"));
