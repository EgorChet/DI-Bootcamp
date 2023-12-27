//Events
// function inform() {
//   alert("I've been clicked !");
// }
// function inform2() {
//   alert("I detect mouse over!");
// }

// const button = document.getElementById("myBtn");

// button.onclick = inform;

// const mouseOverDiv = document.getElementById("mouseOverDiv");

// mouseOverDiv.onmouseover = inform2;

//Exercise

// function insertRow() {
//   const table = document.querySelector("table");
//   const trs = document.querySelectorAll("tr").length;
//   const newRow = document.createElement("tr");
//   const td1 = document.createElement("td");
//   const td2 = document.createElement("td");
//   td1.innerText = `Row${trs + 1} cell1`;
//   td2.innerText = `Row${trs + 1} cell2`;
//   newRow.append(td1, td2);
//   table.append(newRow);
// }
//Add Event Listener

// let btn = document.getElementById("btn");
// let btn1 = document.getElementById("btn1");

// function RespondClick(e) {
//   console.log("Button Clicked");
//   e.target.style.border = "2px dotted yellow";
// }

// function RespondMouseOver(e) {
//   console.log(e);
//   e.target.style.backgroundColor = "salmon";
//   console.log("My mouse is over the btn");
// }

// function RespondMouseOut() {
//   console.log("My mouse is out of the btn");
// }

// btn.addEventListener("click", RespondClick);
// btn.addEventListener("mouseover", RespondMouseOver);
// btn.addEventListener("mouseout", RespondMouseOut);

// btn1.addEventListener("mouseover", RespondMouseOver);
// btn1.addEventListener("mouseout", RespondMouseOut);

// let btn = document.getElementById("btn");
// let div = document.getElementById("div");
// let section = document.getElementById("section");

// btn.addEventListener("click", XRespondClick);
// div.addEventListener("click", YRespondClick);
// section.addEventListener("click", ZRespondClick);

// function XRespondClick(e) {
//   e.target.style.border = "20px dotted yellow";
//   alert("BTN is Clicked");
//   e.stopPropagation();
// }

// function YRespondClick(e) {
//   e.target.style.border = "2px solid blue";
//   alert("DIV is Clicked");
// }

// function ZRespondClick(e) {
//   alert("SECTION is Clicked");
// }

//Forms
// function submitFunc(e) {
//   e.preventDefault();
//   console.log(`Username: ${e.target.elements[0].value}`);
//   console.log(`Password: ${e.target.elements[1].value}`);
// }

// const form = document.forms[0];
// form.addEventListener("submit", submitFunc);

//Settimeout
// function sayHi(name) {
//   alert("Hello " + name);
// }

// let id = setTimeout(sayHi, 3000, "Daniel");

// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   clearTimeout(id);
// });
// setTimeout(function () {
//   alert("Hello");
// }, 3000);

//Exercise1
const div = document.querySelector("div");
// console.log(div);

// setTimeout(function () {
//   div.style.display = "block";
// }, 5000);
// let intervalId = setInterval(function () {
//   if (div.style.display == "none") {
//     div.style.display = "block";
//   } else {
//     div.style.display = "none";
//   }
// }, 1000);

// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   clearInterval(intervalId);
// });

// let num = 10;
// let id = setInterval(function () {
//   if (num == -1) {
//     clearInterval(id);
//     div.innerText = `Times Up!!!!`;
//   } else {
//     div.innerText = `Time left: ${num}`;
//     num--;
//   }
// }, 1000);

//Animation
const child = document.getElementById("child");

let pos = 0;
let id = setInterval(function () {
  if (pos != 400) {
    pos++;
    child.style.left = pos + "px";
    child.style.top = pos + "px";
  } else {
    clearInterval(id);
  }
}, 10);
