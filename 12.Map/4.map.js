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
const list = [
    { name: 'João Silva', vip: true },
    { name: 'Maria Oliveira', vip: true },
    { name: 'Carlos Souza', vip: true },
    { name: 'Ana Pereira', vip: true },
    { name: 'Pedro Santos', vip: true },
    { name: 'Fernanda Costa', vip: false },
    { name: 'Lucas Almeida', vip: false },
    { name: 'Juliana Ribeiro', vip: false },
    { name: 'Rafael Martins', vip: false },
    { name: 'Camila Rocha', vip: false }
]

/* Função usada para identificar se o usuário terá uma pulseira vip ou não, criando um novo OBJETO adicionando uma nova informação que é a cor do bracelete.*/
/* ? é o mesmo que perguntar se uma condição é VERDADEIRA do IF*/
/* : é o mesmo que a condição ELSE */

const newList = list.map((user) => {
    return {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }
})

console.log(newList);