// Iterables are iterable objects (like Arrays).
// Iterables can be accessed with simple and efficient code.
// Iterables can be iterated over with for..of loops

const myName = "aniket";

let txtMsg = "";
for (const x of myName) {
  txtMsg += x + ",";
}

console.log(txtMsg);

// Similarly we can iterate over array , object, set, Map
