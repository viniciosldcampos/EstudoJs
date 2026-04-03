/*
REDUCE

- Retorna um valor (Pode ser um novo array, um objeto, string, number, etc)

- Aceita 4 parametros:
    - Acumulador (OBRIGATÓRIO)
    - Valor atual (OBRIGATÓRIO)
    - index (opcional)
    - Array completo (opcional)

*/

const list = [1, 2, 3, 4, 5, 6, 7];

/*O valor 0 no final é o ponto de partida da operação, a soma começa no valor 0 e depois vai somando os valores do array*/
const sum = list.reduce((acumulador, valorAtual) => {
    console.log('Acumulador: ' + acumulador)
    console.log('Valor Atual: ' + valorAtual)
    console.log('-------------')
    return acumulador + valorAtual
    
}, 0);

console.log(sum)


console.log('---------------')
console.log('2° exercício')

const cart = [
    { productName: 'Mouse', quantity: 1, unityprice: 100},
    { productName: 'Table', quantity: 1, unityprice: 200},
    { productName: 'keyboard', quantity: 2, unityprice: 300},
    { productName: 'Monitor', quantity: 2, unityprice: 400},
    { productName: 'CPU', quantity: 3, unityprice: 500}
]

const totalValue = cart.reduce( (accumulate, valueAtual) => {
    const result = valueAtual.unityprice * valueAtual.quantity
    console.log('Accumulate: ' + accumulate)
    console.log('Value: ', valueAtual)
    return accumulate + result
}, 0)

console.log(totalValue);
