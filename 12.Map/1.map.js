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


/* Array original */
const number = [1, 2, 3, 4, 5, 6, 7];


/* Array MAP */
const double = number.map((item, index, arrayOriginal) => {
    console.log(item + ' -> item')
    console.log(index + ' -> index')
    console.log(arrayOriginal + ' -> array original')
    console.log('-------------------')
    const newItem = item * 2;
    return newItem;
});

console.log(number);
console.log('-------------------')
console.log(double);