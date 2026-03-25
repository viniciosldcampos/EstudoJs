const aluno = "Mateus";
let nota1 = 5;
let nota2 = 5;
let nota3 = 5;
const quantDenotas = 3;
const mediaDasNotas = ((nota1 + nota2 + nota3) / quantDenotas);

console.log(`A média do aluno ${aluno} foi ${mediaDasNotas}`)

if (mediaDasNotas <= 5) {
    console.log(`${aluno} foi reprovado!`)
} else if (mediaDasNotas > 5 && mediaDasNotas < 7) {
    console.log(`${aluno} está em recuperação!`)
} else {
    console.log(`${aluno} está aprovado!`)
}