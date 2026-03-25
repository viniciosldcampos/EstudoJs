const name = "Vinicios";
const age = 26;
let adress = "Rua Exemplo, 45695, Jd.Passos, NovaCity, 45698-784, São Paulo, Brasil"

const Pessoa = {
  name: "Vinicios",
  age: 30,
  StateCivil: null,
}

console.log("O null é quando o programador decidi anular o numero");
console.log(Pessoa.StateCivil);

console.log("-----------------");

console.log("O undefined é quando o programador comete um ERRO tentando procurar o valor, mas não existe tipo a valor adress.");
console.log(Pessoa.adress);


