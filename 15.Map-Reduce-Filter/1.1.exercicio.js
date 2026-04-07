const companies = [
    {name: 'Samsung', marketValue: 50, foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, foundedOn: 1975},
    {name: 'Intel', marketValue: 117, foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, foundedOn: 2006},
    {name: 'Apple', marketValue: 845, foundedOn: 1976}
]


/* Adicionar 10% do valor de mercado a todas as companhias - MAP*/
const atualValueOldCompanies = companies.map((company) => {
    company.marketValue = company.marketValue + company.marketValue / 10;
    
    return company;

})
/* Filtrar SOMENTE as companhias fundados antes de 1990 - FILTER*/
.filter(company => company.foundedOn < 1990)
/* Somar o valor de mercado dessas companhias filtradas com os 10% a mais no valor de mercado - REDUCE*/
.reduce((accumulate, company) => accumulate + company.marketValue, 0)

console.log(atualValueOldCompanies);