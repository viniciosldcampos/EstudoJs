const companies = [
    {name: 'Samsung', marketValue: 50, foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, foundedOn: 1975},
    {name: 'Intel', marketValue: 117, foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, foundedOn: 2006},
    {name: 'Apple', marketValue: 845, foundedOn: 1976}
]


/* Subtrair 10% do valor de mercado a todas as companhias - MAP*/
const filteredCompanies = companies.map((company) => {
    company.marketValue = company.marketValue * (1 - 0.10);
    return company;
})

/* Filtrar SOMENTE as companhias fundados DEPOIS de 1980 - FILTER*/
.filter(company => company.foundedOn > 1980);

/* Somar o valor de mercado dessas companhias filtradas com os 10% a menos no valor de mercado - REDUCE*/
const valueCompanies = filteredCompanies.reduce((accumulate, company) => accumulate + company.marketValue, 0);


/* Variavel para salvar as companhias filtradas - MAP*/
const companiesNames = filteredCompanies.map(company => company.name);

console.log(`A soma dos valores das empresas ${companiesNames.join(' e ')} é de ${valueCompanies}`);