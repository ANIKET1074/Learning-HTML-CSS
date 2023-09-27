// String

let myname = "Aniket";

let list = "aniket jenil";

// methods in string
console.log("Methods in String");
console.log(typeof myname);
console.log(typeof list);
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());
console.log(myname.charAt(3));
console.log(myname.indexOf("n"));
console.log(myname.length);
console.log(myname.slice(1, 4));
console.log(list.split(" "));

// Number

let num = 3;
let num1 = 3.142514;

console.log("Methods in Number");
console.log(typeof num);
console.log(typeof num1);
console.log(Number.isInteger(num));
console.log(Math.floor(num1));
console.log(Math.ceil(num1));
console.log(Math.floor(Math.random() * 4 + 1)); // generates the random number between 0 - 4
console.log(Math.floor(Math.random() * 6 + 1)); // generates the random number between 0 - 4
console.log(Math.PI);
console.log(Math.round(num1));
console.log(Math.sqrt(4));
console.log(Math.pow(2, 4));
console.log(Math.min(2, 5, 11));

// The global isNaN() function tells that whether the number is Nan or not ..

// Boolean
let bool = true;

console.log(typeof bool);
console.log(Number(bool));
console.log(Number("aniket"));

// undefined
let undef = undefined;

console.log(typeof undef);
