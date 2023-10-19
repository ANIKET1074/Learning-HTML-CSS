const student = {
  firstname: "Aniket",
  lastname: "jadav",
  stream: "CE",
  city: "Navsari",
  mobile: 4856898867,
  hello: function () {
    return "Hello!!!";
  },
};

// console.log(student);
// console.log(student["lastname"]);
// console.log(student.firstname);

// This keyword

// it refers to the owner of the function
// we can write inside the function i.e. this.firstname
// syntax :- this.methodname

// we can access object methods
// objectname.methodName();

// e.g.
// console.log(student.firstname);

// In this we are accessing the object properties from another object called Inheritance
const student1 = Object.create(student);
// console.log(student1.city);
// console.log(student1.hello());

student1.grade = 9.8;
// console.log(student1);

// console.log(Object.keys(student));
// console.log(Object.values(student));

// Iterating over the object
for (let stdt in student) {
  //   console.log(`On ${stdt}, it's ${student[stdt]}`);
}

// It is use to verifies the property exist in object
console.log(student1.hasOwnProperty("grade"));

// Destructuring the object
// const { firstname: myName, stream: myStream } = student;
// console.log(myName);
// console.log(myStream);

// Or simply destructure same by the key name in the object
const { firstname, lastname } = student;
// console.log(firstname);

// In this we pass the object in the function which destructure the object and returns only the firstname key in the object
function nameStd({ firstname }) {
  return `${firstname} is Good Student!`;
}

console.log(nameStd(student));
