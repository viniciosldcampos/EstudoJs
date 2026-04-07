const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');
const buttonMapAll = document.querySelector('.map-all');
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')



/* Formatação dos valores dos produtos em moeda.*/
function formatCurrency(value) {
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}


function showAll(productsArray) {
    /* Usado para não acumular as informações das funções*/
    let myLi = ''

/* For each - Usado para mostrar todos os produtos listados */
    productsArray.forEach(product => {
        myLi += `
            <li class="product_price">
                <img src=${product.src}>
                <p>${product.name}</p>
                <p>${formatCurrency(product.price)}</p>
            </li>
        `
    })

    /* Colocando a li dentro da ul do HTML */
    list.innerHTML = myLi;
}


/* A função responsável por aplicar 10% de desconto nos preços dos produtos. */
function mapAllItems() {
    
    const newPrices = menuOptions.map((product) => ({
        
        /* Isso se chama Spread Operator - Ou seja, todos os outros itens da lista (menuOptions) permanece com os mesmo valores só muda o price colocado abaixo. */
        ...product,
        price: product.price * (1 - 0.10),
    }))
    
    showAll(newPrices)
}


/* A função responsável por somar todos os preços dos produtos. */
function sumAllItems() {
    const totalValue = menuOptions.reduce( (acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
        <li class="product_price">
            <p>O valor total dos produtos é R$ ${formatCurrency(totalValue)} reais.</p>
        </li>
    `
}


/* Quando o botão Filtrar for clicado a função será executada filtrando os produtos veganos. */
function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)
    showAll(filterJustVegan)
}


/* Quando o botão for clicado a função será executada. */
buttonShowAll.addEventListener('click', () => showAll(menuOptions));
buttonMapAll.addEventListener('click', mapAllItems);
sumAll.addEventListener('click', sumAllItems);
filterAll.addEventListener('click', filterAllItems);
