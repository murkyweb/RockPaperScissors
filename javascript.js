let playerScore = 0;
let computerScore = 0;
let winner = '';

function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function declareWinner() {
    return winner = (
        playerScore === 5 ? 'Player' :
        computerScore === 5 ? 'Computer' :
        null
    );
}

function playRound (playerSelection, computerSelection) {
    computerSelection = computerPlay();

    if (playerSelection === 'rock' && computerSelection === 'Scissors' || 
        playerSelection === 'paper' && computerSelection === 'Rock' ||
        playerSelection === 'scissors' && computerSelection === 'Paper') {
            playerScore += 1;
            lowerSide.setAttribute('style', 'border: 2px solid green;')
    } else if (playerSelection === 'rock' && computerSelection === 'Paper' ||
        playerSelection === 'paper' && computerSelection === 'Scissors' ||
        playerSelection === 'scissors' && computerSelection === 'Rock') {
            computerScore += 1;
            lowerSide.setAttribute('style', 'border: 2px solid red;')
        } else {
            lowerSide.setAttribute('style', 'border: 2px solid yellow;')
        }
}

const buttons = document.querySelectorAll('button');
const result = document.querySelector('.roundResult');
const finalResult = document.querySelector('.finalResult');
const lowerSide = document.querySelector('.lower-side');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
        result.textContent = `The score is ${playerScore} : ${computerScore}.`;
        declareWinner();
        if (winner) {
            finalResult.textContent = `${winner} wins!`;
            playerScore = 0;
            computerScore = 0;
        } else {
           finalResult.textContent = ''; 
        }
    });
});

