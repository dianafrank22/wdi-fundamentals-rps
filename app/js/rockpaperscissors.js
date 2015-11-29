////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = "Tie!";
    } 
    else if ((playerMove = 'rock') && (computerMove = 'scissors')) {
        winner = 'player';
    } else if ((playerMove = 'rock') && (computerMove = 'paper')) {
        winner = 'computer';
    } else if ((playerMove = 'scissors') && (computerMove = 'rock')) {
        winner = 'computer';
    } else if ((playerMove = 'scissors') && (computerMove = 'paper')) {
        winner = 'player';
    } else if ((playerMove = 'paper') && (computerMove = 'scissors')) {
        winner = 'computer';
    } else ((playerMove = 'paper') && (computerMove = 'rock')) {
        winner = 'player';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins <5 && computerWins <5){
        var playerChoice = getPlayerMove();
        var computerChoice = getComputerMove();
        var fivePlayer = getWinner(playerChoice, computerChoice);

            if (fivePlayer = 'player'){
                playerWins++;
                console.log ('Player chose' + playerMove + 'while computer chose' + computerMove);
                console.log ('The score is currenly' + playerWins + 'to' + computerWins + '\n');
            } 
            else if (fivePlayer === 'computer'){
                computerWins++;
                console.log ('Player chose' + playerMove + 'while computer chose' + computerMove);
                console.log ('The score is currenly' + playerWins + 'to' + computerWins + '\n');
            }
        }
     return [playerWins, computerWins];
}
playToFive();
