
let playerScore = 0
let computerScore = 0

function getComputerChoice () {
    const computerchoice = Math.floor(Math.random() * 3)
    if (computerchoice == 0) {
        return "Rock"
    } else if (computerchoice == 1) {
        return "Paper"
    } else {
        return "Scissors"
    } 
}


function getPlayerChoice() {
    let playerchoice = window.prompt("Choose Rock, Paper, or Scissors", );
    playerSelection = playerchoice.toLowerCase();
    if (
        (playerSelection == "rock") ||
        (playerSelection == "paper") ||
        (playerSelection == "scissors")
    ) {
        return playerSelection
    } else { 
        return window.prompt("Oops! That is not an option choose Rock, Paper, or Scissors." )
    }
}

function playRound () {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice().toLowerCase();
    if (playerSelection == computerSelection) {
        return
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock") 
    ) {
        computerScore += 1 
    } else if ( 
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") 
    ){
        playerScore += 1
    }
} 

let playRounds = 0
function game() {
    while(playRounds < 5) {
        playRound()
        playRounds++

    }
    if (playerScore == computerScore) {
        return console.log("It's a tie!! " + "Your score: " + playerScore + " Computer score: "+ computerScore)
    } else if (playerScore > computerScore) {
        return console.log("You win! " + "Your score: " + playerScore + " Computer score: "+ computerScore)
    } else {
        return console.log("You lose! " + "Your score: " + playerScore + " Computer score: "+ computerScore)
    }
} 

game()


