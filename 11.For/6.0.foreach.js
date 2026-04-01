    const users = [
        { name: "João Silva", age: 30, telefone: "(11) 91234-5678" },
        { name: "Maria Oliveira", age: 36, telefone: "(21) 99876-5432" },
        { name: "Carlos Souza", age: 39, telefone: "(31) 98765-4321" },
        { name: "Ana Pereira", age: 34, telefone: "(41) 97654-3210" }
    ]

    console.log('Para o foreach funcionar o item é o unico parametro obrigatório. O index e o array vai depender da necessidade.')
users.forEach(item => {
    console.log(item);
    console.log('----');
});

users.forEach((item, index) => {
    console.log(index);
    console.log(item);
    console.log('----');
});

users.forEach((item, index, array) => {
    console.log(index);
    console.log(item);
    console.log(array);
    console.log('----');
});

users.forEach((item) => {
    console.log(`Nome: ${item.name}, Idade: ${item.age} e Telefone: ${item.telefone}`);
    console.log('----');
});

users.forEach((item, index) => {
    console.log(`${index + 1}) Nome: ${item.name}, Idade: ${item.age} e Telefone: ${item.telefone}`);
    console.log('----');
});

