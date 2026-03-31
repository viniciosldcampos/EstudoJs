const julia = {
    nome: 'Julia',
    age: 27,
    number: 2
}

const text = 'abcd';

/*Identifica o tipo */
console.log(typeof julia, typeof text)


/*Deleta a valor de idade */
delete julia.age
console.log(julia)
