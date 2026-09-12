const add = document.querySelector("#add")
add.addEventListener("click", () => {
    valor += 1
    console.log(valor);
    result.textContent = `Cliquei: ${valor}`;
});


const result = document.querySelector("#result")

const del = document.querySelector("#del")
del.addEventListener("click", () => {
    if (valor > 0) {
    valor -= 1
    console.log(valor);
    result.textContent = `Cliquei: ${valor}`;
    }
});

let valor = 0;

// ----------------------------------------------------

