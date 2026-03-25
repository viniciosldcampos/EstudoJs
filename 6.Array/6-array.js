console.log("Inviável fazer com muitos usuários, pois demandaria muito mais código.")
const Joana = {
    name: "Joana",
    idade: 39,
    nomedoConjuge: "Leandro",
    id:null,
}

const Pedro = {
    name: "Pedro",
    idade: 34,
    nomedoConjuge: "Fernanda",
    id:null,
}

console.log("---------------")
console.log("Um cadastro com muitos usuários é MUITO MAIS VIÁVEL fazer array colocando as informações dos usuários");
console.log("Array")

const users = [
    { name: "Joana", idade: 39, nomedoConjuge: "Leandro", id:null},
    { name: "Pedro", idade: 34, nomedoConjuge: "Fernanda", id:null}
];

console.log("O Array SEMPRE começa da posição 0");
console.log(users[0]);

console.log("---------------")
console.log("Alterando o valor id do users 0")
users[0].id ="456";
console.log(users[0].id);