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



function playRound (playerSelection, computerSelection) {
    let playerchoice = window.prompt("Choose Rock, Paper, or Scissors", );
    computerSelection = getComputerChoice().toLowerCase();
    /* playerSelection = playerchoice.toLowercase(); */ 
    const computerScore = 0
    const playerScore = 0
    if (playerSelection == computerSelection) {
        return "You tie!" 
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1
        return "You lose! Paper beats rock" 
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1
        return "You win! Rock beats scissors"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1
        return "You win! Paper beats rock"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1
        return "You lose! Scissors beats paper"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1
        return "You lose! Rock beats scissors"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1
        return "You win! Scissors beats paper"
    }
} 



function game () {
    for (i = 0; i < 6; i++); {
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


console.log(game())

