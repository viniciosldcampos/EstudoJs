/* Representa a mesma coisa que o if e else */
/* if (?)*/
/* else(:) */
/* somente com if(&&) */

const salary = 5000;

if(salary < 3000) {
    console.log('O colaborador é Junior!');
} else {
    console.log('O colaborador é Senior!');
}

console.log('-----------')
console.log('O mesmo código usando Ternário (usando apenas para trechos pequenos de código)');
salary < 3000 ? console.log('O colaborador é Junior!') : console.log('O colaborador é Senior!');


console.log('-----------')
console.log('O mesmo código usando Ternário (usando apenas para trechos pequenos de código)');
/* somente com um if(&&) */
salary <= 5000 && console.log('O colaborador é Junior!');
console.log('-----------')


console.log('O mesmo código usando Ternário (usando apenas para trechos pequenos de código)');
/* somente com um if(&&) */
salary < 3000 ? console.log('O colaborador é Junior!') : salary >= 3000 && salary < 10000 ? console.log('O colaborador é Senior!') : console.log('O colaborador é Diretor!');