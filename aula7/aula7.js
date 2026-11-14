const produtos = [
    {
        nome: "Notebook",
        preco: 3500.00,
        categorias: ["Eletrônicos", "Informática"],
        estoque: 10
    },
    {
        nome: "Smartphone",
        preco: 2200.00,
        categorias: ["Eletrônicos", "Celulares"],
        estoque: 15
    },
    {
        nome: "Mouse Gamer",
        preco: 150.00,
        categorias: ["Informática", "Periféricos"],
        estoque: 30
    },
    {
        nome: "Teclado Mecânico",
        preco: 280.00,
        categorias: ["Informática", "Periféricos"],
        estoque: 20
    },
    {
        nome: "Monitor",
        preco: 1200.00,
        categorias: ["Eletrônicos", "Informática"],
        estoque: 8
    },
    {
        nome: "Headset",
        preco: 350.00,
        categorias: ["Áudio", "Periféricos"],
        estoque: 12
    },
    {
        nome: "Webcam",
        preco: 180.00,
        categorias: ["Informática", "Acessórios"],
        estoque: 25
    },
    {
        nome: "Impressora",
        preco: 900.00,
        categorias: ["Eletrônicos", "Escritório"],
        estoque: 5
    }
];

// Exibir todos os produtos
console.log(produtos);

// Acessar o nome do primeiro produto
console.log(produtos[0].nome);

// Acessar o preço do segundo produto
console.log(produtos[1].preco);

// Acessar as categorias do terceiro produto
console.log(produtos[2].categorias);

// Acessar o estoque do quarto produto
console.log(produtos[3].estoque);

// ------------------------------------------------

const nums = [3, 7, 2]

const dobros = []


for (const n of nums){
    dobros.push(n * 2)
};

console.log(dobros);

// -----------------------------------------

dobros = nums.map(n => n * 2); // map retorna um novo vetor

produtos.forEach(p => {
    console.log(`${p.nome} custa ${p.preco}`);
});

const r = [2, 3, 4].forEach(n => n * 2); // undefined

const listas = produtos.map((p) => p.nome);

const comDescontos = produtos.map(p => ({
    nome: p.nome,
    preco: (p.preco * 0.9).toFixed(2),  
}));

console.log(comDescontos);

localStorage.setItem("produtos", JSON.stringify(produtos));

const x = [2, 3, 5].map(n => {n * 2}) // [undefined, undefined, undefined]

// BETO: CONSTANTE

// Beto: Classe

// Nada é escrito por a caso dentro da programação

// {} Blocos de código para sair só sai com algum tipo de retorno {return}, {console.log}

// --------------------------------------------------------------------------------------

// [] <- retorno do map

// operadores relacional >, <, >=, <= etc...

const y = [2, 3, 4, 5, 6, 7, 8].filter(n => n > 5); // filter -> retorna uma nova lista apenas com elementos true or false

// const y = [2, 3, 4, 5, 6, 7, 8].filter(n => map(p => p * 2));

const notas = [8, 5, 9, 6]

const soma = notas.reduce((acc, n) => acc + n, );

// -------------------------------------------

const totalEstoque = produtos
    .filter(p => p.estoque > 5)
    .reduce((total, p) => total + p.estoque, 0);

console.log(totalEstoque);

console.log(totalEstoque); // 120