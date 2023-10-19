// JSON is a format for storing and transporting data.
// {
// 	"students":[
// 		{"name":"Aniket", "year":2002},
// 		{"name":"Aniket", "year":2002},
// 		{"name":"Aniket", "year":2002},
// 	]
// }

// Converting the json text to js object
let text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

//   Converts the json object to string
const sendJSON = JSON.stringify(text);
console.log(sendJSON);

// convert the string to the json object
const obj = JSON.parse(text);
console.log(obj);
