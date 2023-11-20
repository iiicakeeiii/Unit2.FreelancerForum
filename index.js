//Create a state
const state = {
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

const table = document.createElement("table");

function randFreelancer() {
    const rand = Math.floor(Math.random() * state.freelancers.length);
    return state.freelancers[rand];
}

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
function createTbBody() {

    table.createTBody();
    for (let element of state.abc) {
        let row = table.querySelector("tbody").insertRow();
        for (let key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
            //Add price class to price cells
            if (cell.innerText.valueOf() > 0) {
                cell.classList.add("price");
            }

        }
    }
}

function addRandFlRows(){
    const randSelection = Math.floor(Math.random() * state.freelancers.length);

    for (let i = 0; i < randSelection; i++) {
        let row = table.querySelector("tbody").insertRow();
        const randLancer = randFreelancer();
        for (const key in randLancer) {
            let cell = row.insertCell();
            let text = document.createTextNode(randLancer[key]);
            cell.appendChild(text);
            if (cell.innerText.valueOf() > 0) {
                cell.classList.add("price");
            }
        }

    }
}

function getAvgPrice() {
    const tbBody = table.querySelector("tbody");
    const priceVal = tbBody.querySelectorAll("tr .price");
    const sumPrice = () => {
        let total = 0;
        for (let i = 0; i < priceVal.length; i++) {
            total += +priceVal[i].innerText;
        }
        return total;
    };
    const avgPrice = Math.floor(sumPrice() / priceVal.length);
    return avgPrice.toString();
}

function updateAvgPrice(){
    const priceLabel = document.querySelector("#price");
    priceLabel.textContent = getAvgPrice();
    return priceLabel;
}
function clearTable() {
    let tbHead = table.querySelector("thead");
    let tbBody = table.querySelector("tbody");
    while (tbBody.querySelector("tr")) {
        tbBody.querySelector("tr").remove();
    }
    while (tbHead.querySelector("tr")) {
        tbHead.querySelector("tr").remove();
    }
}

function addTable() {
    createTbHeader();
    createTbBody();
    addRandFlRows();
    updateAvgPrice();
    document.querySelector("body").append(table);

}
addTable();
setInterval(() =>{
    clearTable();
    addTable();
},  5000);
