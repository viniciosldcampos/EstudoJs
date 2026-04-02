/* Functions

function padrão -> function() {}

arrow function -> () => {}
Não é necessário escrever function igual a função padrão. Além disso, é usado o sinal "=>" para criar, o que lembra uma flecha, chamada arrowfunction.

- Se a arrowfunction tiver apenas uma linha de código não é necessário usar o return.
- Se a arrowfunction tiver apenas um PARAMETRO como o exemplo abaixo (name) não é necessário o uso de parenteses ().

*/

/* 1° exemplo SEM ARROW-FUNCTION */
function sayMyName(name) {
    return `Seu nome é ${name}`
}

/* 2° exemplo COM ARROW-FUNCTION */
const sayMyName2 = (name2) => `O SEU nome é ${name2}`

console.log(sayMyName('Geovanna'));
console.log(sayMyName2('José'));


/* 3° exemplo COM ARROW-FUNCTION apenas um PARAMETRO SEM O USO DE PARENTESES ()*/
const sayMyName3 = name3 => `O SEU nome é ${name3}`

console.log('------------');
console.log(sayMyName('Leandro'));
console.log(sayMyName2('Paula'));
