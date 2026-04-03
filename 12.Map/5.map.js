/* 
MAP - Mapeia o array.
Semelhante ao forEach.

- Cria um novo array, a partir do array (original), sem alterar nada no array original.

Cria um novo array, com a mesma quantidade de itens do array original.

- Aceita 3 parametros:
- itens do array
- index
- array completo

O novo array só será criado com o que tiver na frente do return.

*/

/* Objeto Lista */
const students = [
    { name: 'João Silva', testGrade: 7 },
    { name: 'Maria Oliveira', testGrade: 7 },
    { name: 'Carlos Souza', testGrade: 7 },
    { name: 'Ana Pereira', testGrade: 7 },
    { name: 'Pedro Santos', testGrade: 7 },
    { name: 'Fernanda Costa', testGrade: 4 },
    { name: 'Lucas Almeida', testGrade: 4 },
    { name: 'Juliana Ribeiro', testGrade: 4 },
    { name: 'Rafael Martins', testGrade: 4 },
    { name: 'Camila Rocha', testGrade: 4 }
]

/* Função usada para verificar se o usuário foi aprovado ou não, criando um novo OBJETO adicionando uma nova informação que é a promoção.*/
/* ? é o mesmo que perguntar se uma condição é VERDADEIRA do IF*/
/* : é o mesmo que a condição ELSE */


const newStudents = students.map((student) => {
    return {
        name: student.name,
        studentStatus: student.testGrade >= 5 ? 'Promovido' : 'Reprovado'
    }
})

console.log(newStudents);