// Javascript Errors and Error Handling

"use strict";
const makeError = () => {
  let i = 1;

  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error("Odd Number!");
      }
    } catch (error) {
      console.error(error.stack);
    } finally {
      // it will execute every time in the code
      console.log("...finally");
      i++;
    }
  }
};

makeError();
