/* Para chamar o HTML SEMPRE usamos document*/

console.log("Situação 1 - Pega APENAS O TEXTO");
const querySelectorP = document.querySelector(".paragraph");
// querySelectorP.textContent = "Esse é o novo conteúdo" - Válido apenas para situação 1.
console.log(querySelectorP.textContent); /* RETORNA APENAS O TEXTO */


console.log("Situação 2 - RETORNA TEXTO E PROPRIEDADES CSS");
/* Situação 2*/
console.log(querySelectorP.innerText); /* RETORNA O TEXTO e PROPRIEDADES APLICADAS NO CSS*/


console.log("Situação 3 - RETORNA TODO O CONTEUDO E AS TAGS HTML");
/* Situação 3*/
querySelectorP.innerHTML = "Texto novo <b>ALTERADO</b>"
console.log(querySelectorP.innerHTML); /* RETORNA TUDO DO CONTEÚDO E TAGS HTML sendo possível adicionar HTML também*/


