/*
Array's

*/

const numbersArray = [1, 2, 3];

/*- push -> Adiciona mais um item ao array.*/
numbersArray.push(4);
console.log(numbersArray)
console.log('----------')

/*- lenght -> Mostra a quantidade de itens dentro do array.*/
console.log(numbersArray.length);
console.log('----------')

/*- sort -> Organiza o array*/
const frutas = ['limão', 'abóbora', 'caqui'];
console.log(frutas.sort());
console.log('----------')

/* - delete -> Deleta um item de uma posição o array.*/
delete frutas[0]
console.log(frutas.length);
console.log(frutas);
console.log('----------')

/* */
const users = [
    {name: 'Nico', credit: 600},
    {name: 'Maria', credit: 900},
    {name: 'Joana', credit: 300},
    {name: 'Vanessa', credit: 200},
];

/* - every -> Testa se TODOS os elementos do array passam em uma condição.*/
const isTrueEvery = users.every(user => user.credit > 100)
console.log(isTrueEvery);
console.log('----------')

/* - some -> Testa se PELO MENOS UM dos elementos do array passar em uma condição.*/
const isTrueSome = users.some(user => user.credit > 100)
console.log(isTrueSome);
console.log('----------')


/* - fill -> Preenche posições do array como desejarmos.*/
const numbersFill = [1, 2, 3, 4];
numbersFill.fill('Santos', 1, 3);
console.log(numbersFill);
console.log('----------')

/* - find -> Usamos esse método quando queremos encontrar algum elemento dentro do array. */
const creditPerson = [
    {name: 'Leandro', credit: 600},
    {name: 'Mariana', credit: 900},
    {name: 'Osvaldo', credit: 300},
    {name: 'Tânia', credit: 200},
];

const findCreditPerson = creditPerson.find( user => user.name === 'Mariana');
console.log(findCreditPerson);
console.log('----------')

/* - findIndex -> Faz o mesmo que o find, mas retorna o índice do elemento encontrado, se ele não encontrar, o resultado será -1 e isso pode ser usado para if dizendo que o valor não foi encontrado. */
const findIndexCreditPerson = creditPerson.findIndex( user => user.name === 'Mariana');
console.log(findIndexCreditPerson);
console.log('----------')


/* - concat() -> */
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
console.log('----------')

/* - join -> junta todos os elementos de um array e pode colocar um separador entre os elementos do array. */
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join(' - '));
console.log('----------')

/* - pop -> Vai remover sempre o ULTIMO elemento de um array. */
const arrayPopShift = ['Leste', 1, 2, 'Oeste'];
console.log(arrayPopShift.pop());
console.log(arrayPopShift);
console.log('----------')


/* - shift -> Vai remover sempre o PRIMEIRO elemento de um array. */
console.log(arrayPopShift.shift());
console.log(arrayPopShift);
console.log('----------')

/* - slice(fatiar) retorna um novo array apenas com as informações escolhidas. */
/*  1) Posição do array da qual vamos começar a pegar as informações para criar o novo array
2) Posição final do array que vamos pegar os dados
*/
const alunos = ["João", "Maria", "Pedro", "Michele", "Fernando"];

const arrayAlunos = alunos.slice();
const arrayAlunosAtualizado = alunos.slice(2, 4);

console.log(arrayAlunos);
console.log(arrayAlunosAtualizado);
console.log('----------')


/* - splice -> Faz a mesma coisa que o slice, porém, ele altera o array original */
/*  1) Posição do array da qual vamos começar a tirar as informações 
	2) Quantos elementos eu quero retirar a partir da posição inicial 
	3) Item que você quer adicionar
*/

const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'];
const monthsAtualizados = months.splice(3, 4,'set');

console.log(monthsAtualizados);
console.log(months);
console.log('----------')


/* - includes -> Determina se um array contém um determinado elemento. */
const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));


