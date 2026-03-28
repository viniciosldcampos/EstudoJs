/* Para chamar o HTML SEMPRE usamos document*/
const input = document.querySelector("#main-input");
const select = document.querySelector("select");
const button = document.querySelector(".main-button");

select.addEventListener("change", function() {
    console.log("Troquei o valor.")
});

function troqueiValor(event) {
    console.log(event)
};

select.addEventListener("change", troqueiValor);
input.addEventListener("keypress", troqueiValor);

/*O mesmo resultado que o select e input */
button.addEventListener("click", function (event) {
    console.log(event)
});




