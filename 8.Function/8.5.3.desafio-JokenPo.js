/* Selecionar as pontuações*/
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');


/* A pontuação inicial - Com referência ao HTML*/
let humanScoreNumber = 0;
let machineScoreNumber = 0;

/* Criando ENUM para não ficar repetindo código */
const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

/* Função para identificar ESCOLHA DO USUÁRIO em um dos botões */
const clickHuman = (humanChoice) => {
    playGame(humanChoice, clickMachine());
}

/* Função para identificar ESCOLHA ALEATÓRIA E AUTOMÁTICA DO JOGADOR2*/
/* Math.floor(Math.random() * 3)

Math.random() - Apresenta um numero aleatório (decimal) entre 0 a 1.
x 3 significa que o valor decimal aleatório será apresentado entre 0 e 2.
Sendo:
(0 - Pedra) 
(1 - Papel) 
(2 - Tesoura) 

O resultado da multiplicação pode dar um valor decimal como, por exemplo: 1.3. Portanto, o Math.floor serve para arredondar o valor para baixo. 
*/

const clickMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomChoices = Math.floor(Math.random() * 3)
    console.log(randomChoices);
    
    return choices[randomChoices];
}

/* Função executar o jogo ENTRE A ESCOLHA DO HUMANO X ESCOLHA DA MAQUINA */
const playGame = (human, machine) => {
    console.log('Humano: ' + human + ' ' + 'Máquina: ' + machine);
    
    /* Condição para verificar quem ganhou */
    if(human === machine) {
        result.innerHTML = 'Deu empate';
    } else if (
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) || 
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) || 
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) {
            
            humanScoreNumber++;
            humanScore.innerHTML = humanScoreNumber;
            result.innerHTML = 'Você ganhou';
    } else {
            machineScoreNumber++;
            machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = 'O JOGADOR 2 ganhou';
    }
}

