const CHAVE = "tasks";


function load(){
    const text = localStorage.getItem(CHAVE);
    if (text === null) return [];
    return JSON.parse(text);

    // ?? NULLISH operator
}