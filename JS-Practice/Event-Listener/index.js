// Javascript Event Listener

const view = document.getElementById("view2");

const div = document.querySelector("div");

const h2 = div.querySelector("h2");

// Syntax : addEventListener(event, function, useCapture)

const doSomething = () => {
  alert("Do Something!!");
};

// h2.addEventListener("click", doSomething, false); // 3rd parameter determines that default value

h2.addEventListener("click", (event) => {
  console.log(event.target);
  event.target.textContent = "You Clicked";
});
