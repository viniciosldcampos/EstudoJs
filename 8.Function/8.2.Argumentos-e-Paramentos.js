/* A variável name só pode ser usada dentro da função */
function sayMyName(name) {
    console.log(` O nome é: ${name}`);
}

sayMyName('Carlos')
sayMyName('Maria')
sayMyName('Luana')
console.log('-----')


/* É possível colocar um valor padrão na variável(Parametro), no caso abaixo seria 'Paulo'. Porque se por acaso o a função sayMyName() for chamada sem valor, o valor padrão será colocado. */
function sayMyName2(name = 'Paulo') {
    console.log(` O nome é: ${name}`);
}
sayMyName2()
sayMyName2('Joana')
console.log('-----')


/* As variáveis(Parametro) number1 e number2 */
function soma(number1 = 3 , number2 = 5) {
    console.log(` A soma do numero 1 e 2 é: ${number1 + number2}`);
}

soma();
soma(1,9);
console.log('-----')


/* As variáveis(Parametro) number1 e number2 */
const definedNumber = 70;

function subtracao(number3 = definedNumber, number4 = 5) {
    console.log(` A subtração do numero 1 e 2 é: ${number3 - number4}`);
}

subtracao();
subtracao(12,9);

 