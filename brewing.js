window.onload = function () {
    document.getElementById('add_grain').onclick = addGrain;
    document.getElementById("calculate").onclick = calculateSG;

const add_grain = document.getElementById("add_grain");
const calculate = document.getElementById("calculate");
const table = document.getElementById("malt_bill");
const specific_gravity = document.getElementById("specific_gravity");


function addGrain () {
    const tr = document.createElement("tr");
    const classNames = ['amount', 'name', 'yield'];
    for (const name of classNames){
        const td = document.createElement("td");
        const input = document.createElement("input");
        input.setAttribute("type", name == 'name' ? 'text' : 'number');
        input.setAttribute("class", name);
        td.appendChild(input);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
function calculateSG () {
    const amounts = document.querySelectorAll(".amount");
    const yields = document.querySelectorAll(".yield");
    let sum = 0;
    for(const i in amounts){
        if(amounts[i].value){
            sum += amounts[i].value * yields[i].value;
        }
    }
        const result = Math.round(sum / 5.5) /1000 + 1;
        specific_gravity.innerHTML = result;
}
}