const btn = document.getElementById('btnCalc');
const contenedor = document.getElementById("contenedor");

function calcuValue(){
let firstValue = document.getElementById("firstValue").value;
let secondValue = document.getElementById("secondValue").value;
let treeValue = document.getElementById("treeValue").value;

// operaciones con los valores



// RENDERIZAR
let input = document.querySelector('input');
if(input.value != ""){

    let card = `
    <div class="card">
    <h2>El resultado es</h2>
    <div class="card-value">
    <p class="valores one">${firstValue}</p>
    <p class="valores two">${secondValue}</p>
    <p class="valores tree">${treeValue}</p>
    </div>
    </div>
    `;
    contenedor.innerHTML += card;
    
    firstValue = " ";
}else{
    let card = `
    <div class="card">
    <h2 class="noValue">Input sin valor</h2>
    </div>
    `;
    contenedor.innerHTML += card;
}
}

btn.addEventListener('click', calcuValue);

