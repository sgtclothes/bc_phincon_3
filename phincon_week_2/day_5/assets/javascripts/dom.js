const list = document.getElementById("list");
console.log(list);

const classList = document.getElementsByClassName("list");
console.log(classList);

const nameList = document.getElementsByName("list");
console.log(nameList);

const queryList = document.querySelector(".list");
console.log(queryList);

const queryAllList = document.querySelectorAll(".list");
console.log(queryAllList);

const tagList = document.getElementsByTagName("li");
console.log(tagList);

const firstUlList = document.querySelectorAll("#list li");
console.log(firstUlList);

const btn = document.getElementById("btn");
console.log(btn);
btn.textContent = "Click Me!";
btn.style.backgroundColor = "blue";
btn.style.color = "white";
btn.textContent = "Klik Saya!";

const div = document.createElement("div");
div.textContent = "Hello World";
// div.innerHTML = "<h1>Hello World</h1>";
console.log(div);

const body = document.getElementById("body");

body.append(div);

/**
 * Buatkan list nama hewan sebanyak 10 di #listThree menggunakan DOM Javascript
 */

const animals = ["Kucing", "Kelinci", "Kambing", "Kuda", "Sapi", "Kerbau", "Monyet", "Gajah", "Harimau", "Ular"];
const ul = document.getElementById("listThree");
for (let i of animals) {
    const stringHTML = `<li>${i}</li>`;
    ul.innerHTML += stringHTML;
}

btn.addEventListener("click", () => {
    ul.innerHTML += `<li>Kucing</li>`;
});
