localStorage.setItem("theme1", "dark"); // Esse método vai gravra (chave, valor)
localStorage.setItem("theme2", "ambar"); // Esse método vai gravra (chave, valor)

const theme = localStorage.getItem("theme1"); // Esse lê
const x = localStorage.getItem("nu");

console.log(localStorage.length);

console.log(theme)
console.log(x)

localStorage.removeItem("tema") // Cadastrado antes como tema, usamos esse método para apagar ele da application

localStorage.clear(); // Esse apaga tudo do localStorage

localStorage.setItem("age", 20)

const tasks = ["estudar", "revisar"];

localStorage.setItem("tasks", tasks)

console.log(localStorage.getItem("tasks")); // Forma um de recuperar as informações
// e jogar no console

const recuperar = localStorage.getItem("tasks");// Forma dois de recuperar as informações
console.log(recuperar)// e jogar no console

// JSON Javascript Object Notation, é um formato leve, beseado em texto, 
// utilizado para comunicação entre sistemas.

// JSON conjunto estruturado de {}, [], 
// Ponto Chave -> CHAVE, VALOR

localStorage.setItem("tasks1", JSON.stringify(tasks));

const list_tasks = JSON.parse(localStorage.getItem("tasks1"));

// [{ ... }, { .. }, { ..., {[ ... ]}}]

const y = localStorage.getItem("error"); //null

// y.push() erroooooooo (quebraria o código)
const z = y === null ? [] : JSON.parse(y); // aceitavel mas não IDEAL (Pesquisar sobre)

