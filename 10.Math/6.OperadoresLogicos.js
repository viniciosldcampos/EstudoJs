/*&& -> E (Exigente)*/
/*1° condição: true && 2° condição: true = Resultado TRUE */
console.log(true && true && true);

/*1° condição: true && 2° condição: true = Resultado FALSE*/
console.log(true && true && false);

/*1° condição: False && 2° condição: False = Resultado FALSE*/
console.log(false && false && false);

console.log('------------');


/* || -> OU (Tanto Faz) */
/*1° condição: true || 2° condição: true = Resultado TRUE*/ 
console.log(true || true || true);
/*1° condição: true || 2° condição: false = Resultado TRUE*/
console.log(true || true || false);
/*1° condição: False || 2° condição: False = Resultado FALSE*/
console.log(false || false || false);

console.log('------------');

/* ! -> NEGAÇÃO */
/*!true = false*/
console.log(!true);

/*!false = true*/
console.log(!false);

const digitarSenha = true;
const digitarToken = true;
const numeroDaConta = false;


/*! Inverte o resultado da condição abaixo*/
if( ! (digitarSenha && digitarToken && numeroDaConta) ) {
    console.log('Logado com SUCESSO!')
} else {
    console.log('FALHOU!')
}