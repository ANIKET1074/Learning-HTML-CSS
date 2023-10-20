// DOM - Document Object Model

const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view1");
console.log(view2);

const elements = document.getElementsByClassName(".element");
console.log(elements);

const div = document.querySelector("#view2");
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

console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);

// using this we can insert or remove the elements

// 1) removing the element
// while(view1.lastChild){
// 	view1.lastChild.remove();
// }

// 2) Inserting the new elements
const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.backgroundColor = "#000";
  newDiv.style.color = "#fff";
  newDiv.style.height = "5rem";
  newDiv.style.width = "5rem";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.append(newDiv);
};

// createDivs(div, 13);

for (let i = 13; i < 19; i++) {
  createDivs(div, i);
}
