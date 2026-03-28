/* Para chamar o HTML SEMPRE usamos document*/

console.log("Situação 1");

const querySelectorInput = document.querySelector("input");
querySelectorInput.placeholder ="Texto alterado";


console.log("Situação 2");
/* Situação 2*/
querySelectorInput.value = 1235;
console.log(querySelectorInput.value);


console.log("Situação 3");
/* Situação 3*/
const querySelectorImg = document.querySelector("img");
console.log(querySelectorImg.src);


