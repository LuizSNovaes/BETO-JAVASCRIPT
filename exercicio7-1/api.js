// Trabalho: API -> Conjunto de regras e protocolos que devem ser seguidos
// Fetch -> async await, promise
// GET, POST (REQ HTTP)
//

const URL = "https://jsonplaceholder.typicode.com/posts/";

async function getData() {
    try {
        const resposta = await fetch(URL);
        
        if(!resposta.ok) {
            throw new Error("Erro HTTP" + resposta.status);
        }

        const dados = await resposta.json();
        
        console.log(dados);
    } catch (erro) {
        console.log("Algo deu errado:", erro);
    }
}
// getAll() => [], getPostId(id) {}

function render() {
    // Criar os elementos e listar eles em uma página
    console.log("x");
}

getData();



// Faz uma requisição depois todos os dados no localstorage

// Criar uma pagina para isso tudo, emplementar o filter

// https://jsonplaceholder.typicode.com/ usar esse aqui

// Tem que usar o map, filter e reduce, combinando um com o outro