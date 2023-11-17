//Create a state
const state = {
    average: 10,
    abc : [
        { name: "Carol", price: 70, occupation: "programmer" },
        { name: "Bob", price: 50, occupation: "teacher" },
        { name: "Alice", price: 30, occupation: "writer" },
    ],
    freelancers : [
        { name: "Dr. Slice", price: 25, occupation: "gardener" },
        { name: "Dr. Pressure", price: 51, occupation: "programmer" },
        { name: "Prof. Possibility", price: 43, occupation: "teacher" },
        { name: "Prof. Prism", price: 81, occupation: "teacher" },
        { name: "Dr. Impulse", price: 43, occupation: "teacher" },
        { name: "Prof. Spark", price: 76, occupation: "programmer" },
        { name: "Dr. Wire", price: 47, occupation: "teacher" },
        { name: "Prof. Goose", price: 72, occupation: "driver" },
    ]
}
//Html Development
const body = document.querySelector("body");
const p = document.querySelector("p");
p.style.fontSize = "1.25rem";
function randFreelancer() {
    const rand = Math.floor(Math.random() * state.freelancers.length);
    return state.freelancers[rand];
}
function getAvgPrice() {
    const sumPrice = state.abc.reduce((acc, currentValue) =>  acc + currentValue.price,0);
    const avgPrice = sumPrice / state.abc.length;
    return avgPrice.toString();
}

function updateAvgPrice(){
    const priceLabel = document.querySelector("#price");
    priceLabel.textContent = getAvgPrice();
    return priceLabel;
}

// function clearTable() {
//     while (table.rows.length) {
//         table.
//     }
// }
const table = document.createElement("table");

//Create Table Header
function createTbHeader() {
    let tHead = table.createTHead();
    let row = tHead.insertRow();
    for (let key of Object.keys(state.abc[0])) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

//Generate Table Rows with details
function addRows() {
    for (let element of state.abc) {
        let row = table.insertRow();
        for (let key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

function addRandFlRows(){
    let row = table.insertRow();
    let randLancer = randFreelancer();
    for (let key in randLancer) {
        let cell = row.insertCell();
        let text = document.createTextNode(randLancer[key]);
        cell.appendChild(text);
    }
}
function render() {
    createTbHeader();
    addRows();
    addRandFlRows();
    updateAvgPrice();
    body.append(table);
}
render();
//Add table to HTML
