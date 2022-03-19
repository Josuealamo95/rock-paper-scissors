playerScore = 0
computerScore = 0

gameBtn = document.querySelectorAll('button');

content = document.querySelector('#container');
  playerScoreDisplay = document.createElement('div');
  playerScoreDisplay.textContent = 'Player score is: ' + playerScore;
  content.append(playerScoreDisplay);

  computerScoreDisplay = document.createElement('div');
  computerScoreDisplay.textContent = 'Computer score is: ' + computerScore;
  content.append(computerScoreDisplay);

  roundResultsDisplay = document.createElement('div');
  roundResultsDisplay.textContent = "";
  content.append(roundResultsDisplay);



function computerPlay() {
  let rockPaperScissors = ['rock', 'paper', 'scissors']
  computerSelection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
  return computerSelection
}

function gameRound() {

  //IN CASE OF A TIE
  if (playerSelection === computerSelection) {
    roundResultsDisplay.textContent = "It's a tie!"; 
    
  //IN CASE OF SCISSORS VS PAPER
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore += 1;
    roundResultsDisplay.textContent = "You win this round! Scissors beats Paper!";
    return playerScore

  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore += 1;
    roundResultsDisplay.textContent = "You lose this round! Scissors beats Paper!";
    return computerScore

  //IN CASE OF SCISSORS VS ROCK
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore += 1;
    roundResultsDisplay.textContent = "You lose this round! Rock beats Scissors!";
    return computerScore

  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore += 1;
    roundResultsDisplay.textContent = "You win this round! Rock beats Scissors!"; 
    return playerScore

  //IN CASE OF PAPER VS ROCK
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore += 1;
    roundResultsDisplay.textContent = "You win this round! Paper beats Rock!";
    return playerScore

  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore += 1;
    roundResultsDisplay.textContent = "You lose this round! Paper beats Rock!";
    return computerScore
  } 
}
 function updateScores() {
    playerScoreDisplay.textContent = "Player score is: " + playerScore;
    computerScoreDisplay.textContent = 'Computer score is: ' + computerScore;
 }

function checkGameState() {
  if (playerScore == 5 || computerScore == 5) {
    setTimeout(gameOver, 500);
  }
}

function gameOver() {
  if(playerScore == 5) {
    playerWins = "You beat the computer!";
    alert(playerWins);
    playerScore = 0;
    computerScore = 0;
    roundResultsDisplay.textContent = "";
    return playerWins
  } else if(computerScore == 5) {
    playerLoses = "Game over. The computer wins!";
    alert(playerLoses);
    playerScore = 0;
    computerScore = 0;
    roundResultsDisplay.textContent = "";
    return playerLoses
  }
}

function disableButtons() {
    gameBtn.forEach(button => {
        button.disabled = true
    });
};

function enableButtons() {
    gameBtn.forEach(button => {
        button.disabled = false
    });
};

gameBtn.forEach(button => button.addEventListener('click', ()=> {
  disableButtons();
  playerSelection = button.textContent;
  computerPlay();
  gameRound();
  checkGameState();
  updateScores();
  setTimeout(enableButtons, 500);
}));