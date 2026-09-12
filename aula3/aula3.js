const notas = [8, 5, 9, 6 ];

notas[0]
notas[3]
notas.length
notas[notas.length - 1]

notas[1] = 7;
notas[4] = 10;

console.log(notas)

// ----------------------------------

const fila = ["Ana", "Beto"];

fila.push("Cida");
fila.pop();
fila.unshift("Dan");
fila.shift();

fila.indexOf("Beto");
fila.includes("Ana");
fila.join(" - ");

// ---------------------------------------

const fila1 = ["Luiz", "Jardel"];

fila1.push("Júlia");
fila1.unshift("Gabriel");
fila1.unshift("Cláudio");
fila1.pop();
fila1.push("Pedro");

console.log(fila1)

// ----------------------------------------

const aluno = {
    nome: "Luiz",
    idade: 18,
    notas: [8, 9],
    matriculado: true
};

const aluno1 = {
    nome: "Jardel",
    idade: 19,
    notas: [9, 8],
    matriculado: true
};

aluno.nome
aluno["idade"]
aluno.notas[1]
aluno.curso = "TADS";

aluno1.nome
aluno1["idade"]
aluno1.notas[1]
aluno1.curso = "TADS";

console.log(aluno)
console.log(aluno1)

// ------------------------------------------
// Manipulação dinâmica de elementos (DOM)

const titulo = document.querySelector("#titulo");
console.log(titulo);
const item = document.querySelector(".item");
console.log(item);
const ul = document.querySelector("ul");
console.log(ul);
const li = document.querySelector("li");
console.log(li);

// ----------------------------------------------------

const x = document.querySelector("#beto");

console.log(x);

const y = document.querySelectorAll(".b");

console.log(y);

const Z = document.querySelectorAll(".item");

console.log(Z);

// ------------------------------------------------------

const a = document.getElementById("beto");

console.log(a);

// ---------------------------------------------------------

const titulo1 = document.querySelector("#titulo1");

titulo1.textContent = "NovaTurma";
console.log(titulo1.textContent);

const caixa = document.querySelector(".caixa");
caixa.innerHTML = "<strong>Olá</strong>";