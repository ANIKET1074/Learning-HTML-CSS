// Web Storage API
// Not a part of DOM - refers to the window API
// Available to JS via the global variable - window

// We do not have to type window , it is implied

// e.g

// window.alert("ok !!")  or alert("Ok !!") both are same

const myObject = {
  name: "Aniket",
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};

const myArray = ["eat", "sleep", "code"];

// myObject.logName();

// In localStorage or Session Storage the data is only store in String type so we need to convert that
sessionStorage.setItem("mySessionStorage", JSON.stringify(myObject));

// Similarly we can do with the array it stores array in String type
// sessionStorage.setItem("mySessionStorage", JSON.stringify(myArray));

const sessionStorageData = JSON.parse(
  sessionStorage.getItem("mySessionStorage")
);

const localStorageData = localStorage.getItem("name");

// removing the items from the localstorage
localStorage.removeItem("1");

// it clears all the local storage values
// localStorage.clear()

// we accessing the localStorage key at given position
// localStorage.key(index)

// returns the number of element present in the local storage
// localStorage.length

console.log("value of session storage : " + sessionStorageData);
console.log("value of local storage : " + localStorageData);

// if we are accessing the items that are not present in the localstorage then it returns the null value
console.log("value of local storage : " + localStorage.getItem("1"));

// Similarly we can do with the localStorage instead of session write local storage
// localstorage store the value even though we close the website or turn off the system
// while sessionStorage store the value for the session period when user is login or website is open
