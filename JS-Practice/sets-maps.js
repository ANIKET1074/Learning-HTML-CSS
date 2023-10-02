// A JavaScript Set is a collection of unique values.
const alphabets = new Set(["a", "b", "c"]);

// Adding the value in sets
alphabets.add("d");
alphabets.add("e");

// if try to add equal elements it will only add first elements
// alphabets.add("e");
// alphabets.add("e");

// List all Elements
let text = "";
alphabets.forEach(function (values) {
  text += values;
});

console.log(text);
console.log(alphabets.values());

// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

const items = new Map([
  ["shoes", 100],
  ["socks", 120],
  ["tie", 20],
  ["napkins", 70],
]);

items.set(["gogals", "30"]);

console.log(items.get("shoes"));
console.log(items.size);
console.log(items.has("jam"));
items.delete("napkins");
console.log(items.size);
