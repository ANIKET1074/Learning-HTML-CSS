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

// getAllUserEmails();

// this will not give result it shows promise pending
// as log is not async it execute first and waiting for the result to fetch..
// console.log(getAllUserEmails);

// 2nd Parameter of fetch that is an object

const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      //   Accept: "text/plain",
    },
  });

  const jsonJokeData = await response.json();
  //   const textJokeData = await response.text();

  console.log(jsonJokeData);
  //   console.log(textJokeData);
};

getDadJoke();

// Post the data in the API

const jokeObject = {
  id: "WSKe2ojiNe",
  joke: "I used to hate facial hair, but then it grew on me.",
};

const postData = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  });

  const jokeResponse = await response.json();

  console.log(jokeResponse.headers);
};

// postData(jokeObject);

// request the joke through parameters

// const requestJoke = async (firstName, lastName) => {
//   const response = await fetch(
//     `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
//   );

//   const jsonResponse = await response.json();

//   console.log(jsonResponse.value.joke);
// };

// requestJoke("Bruce", "Lee");

// abstract into Functions

// maybe from the form

const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"],
  };

  return requestObj;
};

const buildRequestUrl = (requestData) => {
  return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;

  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

// Procedural "workflow" function

const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finished!");
};

processJokeRequest();
