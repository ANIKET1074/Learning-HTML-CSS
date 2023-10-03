// "use strict"; Defines that JavaScript code should be executed in "strict mode".
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.

// "use strict";
x = 5;

// Declared inside a function, it has local scope (only the code inside the function is in strict mode):

function fnc() {
  "use strict";
  y = 5; // this will cause an error
}

// The this keyword in functions behaves differently in strict mode.

// The this keyword refers to the object that called the function.

// If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):

("use strict");
function myFunction() {
  alert(this); // will alert "undefined"
}
myFunction();
