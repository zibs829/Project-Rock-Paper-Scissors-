
/* game () pseuodocode- play 5 rounds and keep score and return winner at the end of the 5 rounds 
create variable to store computer score
create variable to store player score
create variable to store number of rounds
create a for loop that runs function playRound until round reaches 0
if player wins then +=1 to playerscore 
if computer wins then +=1 to computerscore
if playerscore = computerscore return "It's a tie"
if playerscore > computerscore return "You win!"
else "You lose!" */

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

let playerScore = 0
let computerScore = 0

function playRound (playerSelection, computerSelection) {
    playerSelection = window.prompt("Choose Rock, Paper, or Scissors", );
    computerSelection = getComputerChoice().toLowerCase();
    /* playerSelection = playerchoice.toLowercase(); */
    if (playerSelection == computerSelection) {
        return "You tie!" 
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock") 
    ) {
        computerScore +=1 
    } else if ( 
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") 
    ){
        playerScore +=1
    }
console.log(playerScore)
console.log(computerScore)
} 

function game() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
}

game()





/*function game () {
    int n = 5;
    for (int i = 1; i <= n; i++) {
        playRound () 
    }
if (playerScore == computerScore) {
    return "It's a tie!!"
} else if (playerScore > computerScore) {
    return "You win!"
} else {
    return "You lose!"
}
}
*/


/* else if (playerSelection == "rock" && computerSelection == "scissors") {
    return playerScore += 1
    "You win! Rock beats scissors" 
} else if (playerSelection == "paper" && computerSelection == "rock") {
    return playerScore += 1
   "You win! Paper beats rock"
} else if (playerSelection == "paper" && computerSelection == "scissors") {
    return computerScore += 1
    "You lose! Scissors beats paper" 
} else if (playerSelection == "scissors" && computerSelection == "rock") {
    return computerScore += 1
    "You lose! Rock beats scissors" 
} else if (playerSelection == "scissors" && computerSelection == "paper") {
    return playerScore += 1
    "You win! Scissors beats paper" */
