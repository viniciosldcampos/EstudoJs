let i = 0;

console.log('Primeiro verifica e depois faz a ação');
console.log('Executa esse código ANTES do loop while');
while (i < 30) {
    i++;
    console.log(`${i}  Is true`);
}

console.log('Executa esse código DEPOIS do loop while SOMENTE SE TERMINAR O LOOP WHILE ACIMA');
console.log('-------------');

do {
    i++;
    console.log(`${i}  Is true`);
    console.log('Executa primeiro a ação e depois VERIFICA SE A CONDIÇÃO É VERDADEIRA');
} while (i < 40);