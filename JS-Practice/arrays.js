const myArray = ["A", "B", "C", "D", "E", "F"];

// adding elements to the array
// myArray[0] = "name";
// myArray[1] = 1000;
// myArray[2] = true;

// console.log(myArray);

// adding the elements backside of the array
// myArray.push("aniket");

// shift is use to remove the first element
// returns the first element that is removed
// console.log(myArray.shift());

// unshift is use to add the element at first position
// console.log(myArray.unshift("jadav"));
// console.log(myArray.length);

// for delete the particular element from the array
// delete myArray[2];

// or we can simply delete the elements by splice method
// myArray.splice(1, 1); // for replacing the element add the third parameter which holds the value which has to be replaced  myArray.splice(1,1,42)
// in this first parameter defines the position of the element 2nd parameter defines the number of elements to be replaced or removed and 3rd parameter holds the value that is going to be replaced .

console.log(myArray);

// Methods in Array

// slice :- it returns the new array that is divide into section
const newArrays = myArray.slice(2, 5);
console.log(newArrays);

// reverse :-
console.log(myArray.reverse());

// join :- add all the elements from the array to convert it into string
const newString = newArrays.join();
console.log(newString);

// split :- returns new array with the split on the value
const newArr = newString.split(",");
console.log(newArr);

// concat :- combine the array2 with array 1
const myNewArray = newArr.concat(myArray);
console.log(myNewArray);

// spreadoperator :- it is use to combine the 2 arrays
const newArray = [...myArray, ...newArr];
console.log(newArray);

// multi-dimensional arrays

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golfball", "tennisball"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[0]);
console.log(clothesShelfB[1]);

const equipDepart = [equipShelfA, equipShelfB];
const clothesDepart = [clothesShelfA, clothesShelfB];

// console.log(equipDepart);
console.log(equipDepart[0][1]);
console.log(clothesDepart[1][1]);

const sportsStore = [equipDepart, clothesDepart];
// console.log(sportsStore);
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][1]);
