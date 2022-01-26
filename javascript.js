function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper or Scissors?", '');
    computerSelection = computerPlay();
    if (playerSelection.toLowerCase() === 'rock') {
        switch (computerSelection) {
            case 'Rock':
                result = 'Tie';
                break;
            case 'Paper':
                result = 'You Lose!';
                break;
            case 'Scissors':
                result = 'You Win!';
        }
        return result;
    }
    else if (playerSelection.toLowerCase() === 'paper') {
        switch (computerSelection) {
            case 'Rock':
                result = 'You Win!';
                break;
            case 'Paper':
                result = 'Tie';
                break;
            case 'Scissors':
                result = 'You Lose!';
        }
        return result;
    }
    else if (playerSelection.toLowerCase() === 'scissors') {
        switch (computerSelection) {
            case 'Rock':
                result = 'You Lose!';
                break;
            case 'Paper':
                result = 'You Win!';
                break;
            case 'Scissors':
                result = 'Tie';
        }
        return result;
    }
    return result;
}

function game() {
    let winner = '';
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound();
        if (result === 'You Win!') {
            playerScore += 1;
            console.log(result);
            console.log(playerScore);
            console.log(computerScore);
        } 
        else if (result === 'You Lose!') {
            computerScore += 1;
            console.log(result);
            console.log(playerScore);
            console.log(computerScore);
        } else {
            playerScore += 1;
            computerScore += 1;
            console.log(result);
            console.log(playerScore);
            console.log(computerScore);
        }
    }
    if (playerScore > computerScore) {
        winner = 'Player Wins!';
    }
    else if (playerScore < computerScore) {
        winner = 'Computer Wins!';
    } else {
        winner = 'Tie';
    }
    return winner;
}

