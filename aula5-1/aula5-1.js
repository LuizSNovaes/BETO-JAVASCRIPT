const textItem = document.querySelector("#item")
const ulResult = document.querySelector("#result")
const add = document.querySelector("#add")

const addItem = () => {
    const item = textItem.value;

    if (item === "") return

    const novo = document.createElement("li");
    novo.textContent = item;

    const remover = document.createElement("span");
    remover.textContent = " x";
    remover.style.cursor = "pointer";
    remover.style.color = "red";

    remover.addEventListener('click', () =>{
        novo.remove();
    })


    novo.appendChild(remover);


    ulResult.append(novo);

    textItem.value = "";
}



add.addEventListener("click", addItem);

textItem.addEventListener('keydown', (event)=> {
    if (event.key === "Enter") addItem();
});