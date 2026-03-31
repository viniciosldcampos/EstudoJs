let Number1 = 32;
let Number2 = 4;

/* Comparação de valores IGUAIS (==)*/
if (Number1 == Number2) {
    console.log('Valores são iguais!')
} else {
    console.log('Valores NÃO são iguais!')
}
console.log(Number1 == Number2);


console.log('-------------');
/* Alterando o valor da variável number2 */
Number2 = "32";

/* Comparação de valores e TIPO IGUAIS (===)*/
if (Number1 === Number2) {
    console.log('Valores são iguais!')
} else {
    console.log('Valores NÃO são iguais!')
}
console.log(Number1 === Number2);


console.log('-------------');
/* Alterando o valor da variável number2 */
Number2 = 32;

/* Comparação de valores IGUAIS (==)*/
if (Number1 == Number2) {
    console.log('Valores são iguais!')
} else {
    console.log('Valores NÃO são iguais!')
}
console.log(Number1 == Number2);


console.log('-------------');
/* Alterando o valor da variável number2 */
Number2 = 6;

/* Comparação de valores DIFERENTE (!=)*/
if (Number1 != Number2) {
    console.log('Valores são DIFERENTE!')
} else {
    console.log('Valores são iguais!')
}
console.log(Number1 != Number2);


console.log('-------------');
/* Alterando o valor da variável number2 */
Number2 = "32";
/* Comparação de valores e TIPOS DIFERENTE (!==)*/
if (Number1 !== Number2) {
    console.log('Valores são DIFERENTE!')
} else {
    console.log('Valores são iguais!')
}
console.log(Number1 !== Number2);


console.log('-------------');
/* Comparação de valores (>)*/
/* Alterando o valor da variável number2 */
Number2 = 3;
if (Number1 > Number2) {
    console.log(`${Number1} é maior do que ${Number2}`)
    console.log(Number1 > Number2);
}


console.log('-------------');
/* Comparação de valores (<)*/
Number2 = 3;
if (Number1 < Number2) {
    console.log(`${Number1} é menor do que ${Number2}`)
} else { 
    console.log(`${Number1} NÃO é menor do que ${Number2}`)
}
console.log(Number1 < Number2);


console.log('-------------');
/* Comparação de valores (>=)*/
Number2 = 32;
if (Number1 >= Number2) {
    console.log(`${Number1} é maior ou igual ao ${Number2}`)
}
console.log(Number1 >= Number2);


console.log('-------------');
/* Comparação de valores (<=)*/
Number2 = 32;
if (Number1 <= Number2) {
    console.log(`${Number1} é menor ou igual ao ${Number2}`)
}
console.log(Number1 <= Number2);