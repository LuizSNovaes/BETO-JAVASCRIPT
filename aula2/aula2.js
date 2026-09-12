const idade = 18;

const status = idade >= 18 ? "maior" : "menor";

console.log(status)

//-----------------------------------

const dia = new Date() .getDay();

switch (dia) {
    case 0:
    case 6:
        console.log("Fim de semana");
        break;
    case 5:
        console.log("Sexta!");
        break;
    default:
        console.log("Dia útil");
}

//------------------------------------

for (let i = 1; i <= 5; i++) {
    console.log("Volta", + i);
}

//------------------------------------

let x = 10;
do {
    console.log(x);
    x--;
} while (x > 15);

//------------------------------------

const notas = [8, 5, 9, 6];

for (const nota of notas) {
    console.log(nota);
}

for (const letra of "LUIZ") {
    console.log(letra);
}

//-------------------------------------

for (let i = 1; i <= 10; i++) {
    n = 9 
    let calculo = n * i
    console.log(n + " x " + i + " = " + calculo)
}

//-------------------------------------

