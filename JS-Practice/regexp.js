const txt = "This is the regular expression file";
const find = txt.search(/expression/i);

const result = txt.replace(/file/i, "tutorial");

console.log(result);
console.log(find);

// Regular expression modifier

// i - performs case insensitive matching
// g - perform a global match
// m - find multiline matching

// metacharacter
// \d - digit , \s - find a whitespace character , \b - find the match word at the beginning of a word
