//  we can declare variable with 3 types

// var, let, const

// var instantiates function scoped variables
// let and const instantiates block scoped variables

// Helpful tips
// Avoid using var stick with let and const
// use const unless you need to reassign value .
// use let if you know you will reassign value .

// global scope
var x = 1;
let y = 2; // we can change the value of let variable in the definate scope
const z = 3; // once const variable is declared it cannot be changed further

// local scope
{
  let y = 4;
}

function myfunc() {
  const z = 6;
}

console.log(y);
