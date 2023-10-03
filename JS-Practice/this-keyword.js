// This keyword refers to the  object .
// In strict mode this keyword is undefined
// In an event, this refers to the element that received the event.

// object method binding
const student = {
  firstName: "Aniket",
  lastName: "Jadav",
  department: "CSE",
  graduationYear: 2024,

  fulldetail: function () {
    return (
      this.firstName +
      " " +
      this.lastName +
      ".Is studying in " +
      this.department
    );
  },
};
console.log(student.fulldetail());

// Explicit Function Binding
// The call() and apply() methods are predefined JavaScript methods.

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
};

// Return "John Doe":
console.log(person1.fullName.call(person2));

// let names = person.fullName.bind(person2);
// console.log(names);
