// Javascript Event Listener

// const view = document.getElementById("view2");

// const div = document.querySelector("div");

// const h2 = div.querySelector("h2");

// Syntax : addEventListener(event, function, useCapture)
// Here the 3rd parameter indicates that whether the event occur is in capture phase or bubbling phase
// capture phase :-  html , body , a notifies in descending order  => if true then this phase
// bubbling phase :- a, body, html => if false then this phase

const doSomething = () => {
  alert("Do Something!!");
};

// h2.addEventListener("click", doSomething, false); // 3rd parameter determines that default value

// h2.addEventListener("click", (event) => {
//   console.log(event.target);
//   event.target.textContent = "You Clicked";
// });

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readystate : complete");
    initApp();
  }
});

const initApp = () => {
  const view = document.getElementById("view2");
  const div = document.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener(
    "click",
    (event) => {
      console.log(event.target);
      //   event.target.style.backgroundColor = "white";
      //   event.target.style.color = "black";
      //   view.style.backgroundColor = "white";
      //   view.style.color = "black";

      //   or we have another property called .add() or .remove() class
      view.classList.toggle("purple");
      view.classList.toggle("black");
    },
    false
  );

  div.addEventListener(
    "click",
    (event) => {
      //   event.target.style.backgroundColor = "cyan";
      div.style.backgroundColor = "cyan";
    },
    false
  );

  h2.addEventListener(
    "click",
    (event) => {
      // it indicates that the event will stop propogating further
      //   event.stopPropagation();
      //   event.target.style.color = "purple";
      //   h2.style.color = "purple";
    },
    false
  );
};
