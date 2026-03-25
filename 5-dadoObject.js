const name = "Vinicios";
const age = 26;
let adress = "Rua Exemplo, 45695, Jd.Passos, NovaCity, 45698-784, São Paulo, Brasil"

const Pessoa = {
  name: "Vinicios",
  age: 30,
  adress: {
    street: "Rua Exemplo",
    number: 45695,
    district: "Jd.Passos",
    city: "NovaCity", 
    cep: "45698-784",
    state:"São Paulo",
    country: "Brasil"
  }
}

console.log(Pessoa);
console.log(Pessoa.name);
console.log(Pessoa.adress);
console.log(Pessoa.adress.country);

console.log("-----------------");
console.log("Mudando o valor dentro do objeto");
Pessoa.adress.number = 1963;
console.log(Pessoa.adress.number);

