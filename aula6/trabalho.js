localStorage.clear();

const CHAVE = "tasks";

function load(){
    const text = localStorage.getItem(CHAVE); //null -- push ERRO
    if (text === null) return []; // retornar lista vazia [] -- push OK
    return JSON.parse(text); // [andar, pegar, bater, correr] -- push OK

    // ?? NULLISH operator
}

function save(tasks){
localStorage.setItem(CHAVE, JSON.stringify(tasks))
}

let minha_lista = load(); // []
save(["andar"]);

const usuario_digitou = "comer"
minha_lista = load(); // ["comer"]

// adicionar COMER à minha lista, e depois salvar no LS (localStorage)

minha_lista.push(usuario_digitou); // Adiciona o novo item ao array atual

save(minha_lista); // Salva a lista atualizada de volta no localStorage

// add action to button
// get text
// create element
// add styles ( se colocar o estilo no li não precisa fazer nada)
// add event listner (para remover) -> usem a func || splice ||
// add append