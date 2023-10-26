// Fetch API requires a discussion of..
// Callbacks, Promises, Thenables, and  Async/Await

// Promises

// 3 states : Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve, reject) => {
  const error = false;

  if (!error) {
    resolve("Yes! resolved the promise! ");
  } else {
    reject("No! rejected the promise! ");
  }
});

// console.log(myPromise);

// myPromise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const myNextPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("myNextPromise resolved");
//   }, 3000);
// });

// myNextPromise.then((value) => {
//   console.log(value);
// });

// myPromise.then((value) => {
//   console.log(value);
// });

// const users = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach((user) => {
//       console.log(user);
//     });
//   });

// console.log(users);

const myUsers = {
  userList: [],
};

const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  //   console.log(jsonUserData);
  return jsonUserData;
};

const anotherFunc = async () => {
  const data = await myCoolFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
};

anotherFunc();
// this prints the empty array as it executes before anotherFunc() and it is not await
console.log(myUsers.userList);

const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();

  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });

  console.log(userEmailArray);

  //   return userEmailArray
};

// Here first we fetch the data using api
// await for the response and then convert it into json
// now we create the email array by using map function

getAllUserEmails();

// this will not give result it shows promise pending
// as log is not async it execute first and waiting for the result to fetch..
// console.log(getAllUserEmails);
