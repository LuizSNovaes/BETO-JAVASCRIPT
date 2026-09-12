const erro = document.querySelector("#msg");

erro.style.display = "block";

erro.style.backgroundColor = "blue";

// Criar elemento 

const novoLi = document.createElement("li");
novoLi.innerText = "Luiz";

const ul = document.querySelector(".novo")
ul.append(novoLi)

const botao = document.querySelector("#enviar")
botao.addEventListener("click", () => {
    console.log("oi, cliquei no botão");
});