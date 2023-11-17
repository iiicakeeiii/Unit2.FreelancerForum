const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const abc = [
    { name: "Carol", price: 70, occupation: "programmer" },
    { name: "Bob", price: 50, occupation: "teacher" },
    { name: "Alice", price: 30, occupation: "writer" },
]

//Html Development
const body = document.querySelector("body");
const p = document.querySelector("p");
p.style.fontSize = "1.25rem";
const sumPrice = abc.reduce((acc, currentValue) =>  acc + currentValue.price,0);
const avgPrice = sumPrice / abc.length;
const priceLabel = document.querySelector("#price");

priceLabel.textContent = avgPrice.toString();

const table = document.createElement("table");
table.createTHead()
table.style.width = "100px";
table.style.border = "1px solid black";

//Create Table Header
let tHead = table.createTHead();
let row = tHead.insertRow();
for (let key of Object.keys(abc[0])) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
}

//Generate Table Rows with details
for (let element of abc) {
    let row = table.insertRow();
    for (let key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
    }
}

for (let element of freelancers) {
    let row = table.insertRow();
    for (let key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
    }
}

//Add table to HTML
body.append(table);
