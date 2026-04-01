const myName = 'José';
const users = ['João','Maria', 'Fernanda'];

for (const letter of myName) {
    console.log(letter);
}

for (const name of users) {
    console.log(name);
}


/* 2° exemplo:*/
    const p = document.querySelector('p');
    const input = document.querySelector('input')

    const contacts = [
        { name: "João Silva", telefone: "(11) 91234-5678" },
        { name: "Maria Oliveira", telefone: "(21) 99876-5432" },
        { name: "Carlos Souza", telefone: "(31) 98765-4321" },
        { name: "Ana Pereira", telefone: "(41) 97654-3210" },
        { name: "Pedro Santos", telefone: "(51) 96543-2109" },
        { name: "Fernanda Costa", telefone: "(61) 95432-1098" },
        { name: "Lucas Almeida", telefone: "(71) 94321-0987" },
        { name: "Juliana Ribeiro", telefone: "(81) 93210-9876" },
        { name: "Rafael Martins", telefone: "(85) 92109-8765" },
        { name: "Camila Rocha", telefone: "(19) 91098-7654" }
    ]

    function search() {
        for(const contact of contacts) {
            
            if(input.value.toLowerCase() === contact.name.toLowerCase()) {
                p.innerHTML = `Contato encontrado! Nome: ${contact.name} Tel: ${contact.telefone}`; 
            
                break;
            } else {
                p.innerHTML = 'Contato NÃO ENCONTRADO!';
            }
        }
    }