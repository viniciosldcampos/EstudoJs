/*
FILTER

- Cria um novo array, a partir do array percorrido (ORIGINAL)
- Cria um novo array APENAS com elementos FILTRADOS
- Aceita 3 parâmetros:
    - item do array (OBRIGATÓRIO)
    - index (opcional)
    - array completo (opcional)

    return true -> Item atual passa pro novo array.
    return false -> Item atual NÃO passa pro novo array.

*/

const list = [100, 100, 100, 100, 100, 2000, 2000, 2000, 2000 ];


/* Montando uma lista com os numeros que são maiores do que 500*/
const newList = list.filter( number =>{
    if(number > 500) return true
    else return false
})

console.log(newList);