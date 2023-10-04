// creating the student class using "class" keyword
class student {
  // creating the constructor of the given class
  // it is use to initialize the object property
  // If you do not define a constructor method, JavaScript will add an empty constructor method.
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  //   creating methods in class
  //   similarly we can pass the parameter inside the method
  getAge() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myStdt = new student("Aniket", 2002);
console.log(myStdt.name);
console.log(myStdt.year);

console.log("Your age is " + myStdt.getAge());
