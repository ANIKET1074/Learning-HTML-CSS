// DOM - Document Object Model

const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view1");
console.log(view2);

const elements = document.getElementsByClassName("element");
console.log(elements);

const divs = document.querySelectorAll(".element");
console.log(divs);

const sameDivs = document.querySelectorAll("div");
console.log(sameDivs);

const sameDiv = document.getElementsByTagName("div");
console.log(sameDiv);

const evenDivs = document.querySelectorAll("div:nth-of-type(2n)");
// console.log(evenDivs);

for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "darkblue";
  //   evenDivs[i].style.width = "150px";
  //   evenDivs[i].style.height = "150px";
}

const header = document.querySelector("header");
header.innerHTML = `<h1>Hello Guys</h1><p>This is the text</p>`;

header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
