function subtracaoConsoleLog(number3 = definedNumber, number4 = 5) {
    console.log(` ${number3 - number4}`);
}

const resultSubtracao = subtracaoConsoleLog(12,9);
console.log('-------------');
console.log(`CONSOLE.LOG NÃO GUARDA o resultado. Portanto, o resultado dessa operação é: ${resultSubtracao}`);
console.log('-------------');


/* Usando o return*/
function subtracaoReturn(number30 = definedNumber, number40 = 5) {
    const result = number30 - number40;
    /* O return SEMPRE tem que ser a ultima coisa da função*/
    return result;
}

const resultSubtracao2 = subtracaoReturn(12,9);
console.log(` O resultado da subtração 2 é: ${resultSubtracao2}`);
console.log('-------------');

/* Todos os produtos acima de R$30,00 tem desconto de 10%.*/
console.log('3° exercício');
/* Cada valor da array é chamado de productValue.*/
const cart = [300, 244, 5, 9, 26, 33, 250]
let total = 0
let discount = 0

/* Função que Calcula o desconto */
function discountValue(productValue, discount) {
    return (productValue * discount) / 100;
}

/* Soma os valores da lista e verifica o desconto */
cart.forEach (productValue => {
    total += productValue;
    if (productValue > 30) {
        discount += discountValue(productValue, 10)
    }
});

console.log(`Valor Total: ${total.toFixed(2)} - Valor do Desconto: R$ ${discount.toFixed(2)} - Valor a pagar: R$ ${total.toFixed(2) - discount.toFixed(2)}`);