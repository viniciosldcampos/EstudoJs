/* FOR
1° INICIALIZAÇÃO - Criar uma variável e colocar um valor inicial pra ela.

2° CONDIÇÃO - Enquanto a condição for true, o laço continuará iterando.

3° EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o nosso laço se repetir.

for ([INICIALIZAÇÃO]; [CONDIÇÃO]; [EXPRESSÃO FINAL]) {
    CODIGO AQUI
}

*/

for(let i = 0; i < 15; i++) {
    console.log(i);
}


/* 2° exemplo:*/
const users = ['Maria', 'João', 'José', 'Benedito','Mariana', 'Alessandra', 'Josefa', 'Pedro', 'Paulo', 'Julia', 'Carolina']

/* .length - Mostra a quantidade de valores dentro do array*/
/* users[i] mostrará todos os valores do array. */
for(let i = 0; i < users.length; i++) {
    console.log(users[i]);
}