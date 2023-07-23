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


let rounds = 0
function playRound (userChoice) {
    playerSelection = userChoice;
    console.log(playerSelection);
    computerSelection = getComputerChoice().toLowerCase();
    console.log(computerSelection)
    if (playerSelection == computerSelection) {
        rounds += 1
        return
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock") 
    ) {
        rounds += 1
        const score = computerScore += 1 
        scoreToDom(score);
    } else if ( 
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") 
    ){
        rounds += 1
        const score = playerScore += 1
        scoreToDom(score);
    }
} 



function scoreToDom() {
    const runningScoreContainer = document.getElementById('runningScoreContainer');
    const scoreMessage = document.createElement('p');
    scoreMessage.textContent = "Your score: " + playerScore + "Computer score: " + computerScore;
    runningScoreContainer.appendChild(scoreMessage);
}

function game() {
    //compare scores with conditional statments to determine winner
    if (playerScore == computerScore) {
        const message = "It's a tie!! " + "Your score: " + playerScore + " Computer score: "+ computerScore
        resultsToDom(message);
    } else if (playerScore > computerScore) {
        const message = "You win!! " + "Your score: " + playerScore + " Computer score: "+ computerScore
        resultsToDom(message);
    } else {
        const message = "Computer wins!! " + "Your score: " + playerScore + " Computer score: "+ computerScore
        resultsToDom(message);
    }
}

function resultsToDom(message) {
    const resultsContainer = document.getElementById('resultsContainer');
    const resultsMessage = document.createElement('p');
    resultsMessage.textContent = message;
    resultsContainer.appendChild(resultsMessage);
}




//Event listeners for buttons
const buttons = document.querySelectorAll('.choicesContainer button');

//Function to handle button click
const buttonGroupPressed = (e) => {
    const button = e.target;
    const userChoice = button.id;
    playRound(userChoice);
}
//iterate through node list and attach listener for each button 
buttons.forEach(button => {
    button.addEventListener('click', buttonGroupPressed);
});



/*function handleButtonClick(event) { 
    const button = event.target;
    const userChoice = document.getElementById("button").value;
     //Call playRound function with user choice
     playRound(userChoice);
}
*/



