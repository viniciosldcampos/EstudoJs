/* Para chamar o HTML SEMPRE usamos document*/

console.log("Trás UM ELEMENTO e o PRIMEIRO que encontrar");
const querySelectorP = document.querySelector("p");
console.log(querySelectorP);


console.log("Pode ser usado para encontrar uma CLASSE TAMBÉM para isso usamos o (.) ");
const querySelectorParagraph = document.querySelector(".paragraph");
console.log(querySelectorParagraph);

console.log("Pode ser usado para encontrar um ID TAMBÉM para isso usamos o (#) ");
const querySelectorInput = document.querySelector("#main-input");
console.log(querySelectorInput);

console.log("Pode ser usado para encontrar uma TAG(QUALQUER) COM CLASSE TAMBÉM para isso usamos o (button.nome-da-classe) ");
const querySelectorButton = document.querySelector("button.main-button");
console.log(querySelectorButton);


