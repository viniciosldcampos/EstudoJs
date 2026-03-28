/* Para chamar o HTML SEMPRE usamos document*/

console.log("Trás TODOS OS ELEMENTOS que encontrar");
const querySelectorAllP = document.querySelectorAll("p");
console.log(querySelectorAllP);


console.log("Pode ser usado para encontrar TODOS DA MESMA CLASSE TAMBÉM para isso usamos o (.) ");
const querySelectorAllParagraph = document.querySelectorAll(".paragraph");
console.log(querySelectorAllParagraph);

console.log("Pode ser usado para encontrar TODOS DA MESMA TAG(QUALQUER) COM CLASSE TAMBÉM para isso usamos o (button.nome-da-classe) ");
const querySelectorButtonAll = document.querySelectorAll("button.main-button");
console.log(querySelectorButtonAll);


