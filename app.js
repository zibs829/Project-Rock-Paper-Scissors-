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
    computerSelection = getComputerChoice().toLowerCase();
    if (playerSelection == computerSelection) {
        rounds += 1
        score = 0 
        scoreToDom(score);
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

function gameResults() {
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


//In the game function 
function game(userChoice, count) {

    //if count of clicks is less than 5 then input user choice into playRound()
    if (count < 5) {
        playRound(userChoice);
    } 
    //if clickcount is equal to 5 then call gameResults() 
    else if (count = 5) {
        playRound(userChoice);
        gameResults();
    }
    /*else {
        const response = confirm("Would you like to play again?")
        if (response == True) {
            //delete data and restart game 
        } else {
            return; 
        } 
    } */
}

let startCount = 0; 
function handleButtonClick() {
//Event listeners for buttons
const buttons = document.querySelectorAll('.choicesContainer button');
//Function to handle button click
const buttonGroupPressed = (e) => {
    //increment count by one every time button is clicked
    let count = ++startCount; 
    console.log(count);
    const button = e.target;
    const userChoice = button.id;
    //call the game function to start the game with userchoice
    game(userChoice, count);
}
//iterate through node list and attach listener for each button 
buttons.forEach(button => {
    button.addEventListener('click', buttonGroupPressed);
});
}

handleButtonClick();



//If user clicks on the button again,  restart game, delete data stored in resultsContainer and running Score container 



