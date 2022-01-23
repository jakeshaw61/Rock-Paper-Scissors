const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.choice');
let userChoice;
let computerChoice;
let result;
let pScore = 0;
let cScore = 0;

const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

// Event listeners 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    generateComputerChoice();
    getResult();
    updateScore();
    console.log(possibleChoice);
    console.log(userChoice);
}));

// Generates the computers choice.

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1) {
      computerChoice = 'rock';
    }
    if (randomNumber === 2) {
      computerChoice = 'scissors';
    }
    if (randomNumber === 3) {
      computerChoice = 'paper';
    }
  }

// Upadates the scoreboard.

  const updateScore = () => {
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };
  
  // Gets the result and compares user to computer choice.

  function getResult() {
    if (computerChoice === userChoice) {
      result = 'Its a draw!';
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
      result = 'Computer chose rock, you win!';
      pScore++;
      
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
      result = 'Computer chose rock, you lost!';
      cScore++;
      
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
      result = 'Computer chose paper, you win!';
      pScore++;
      
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
      result = 'Computer chose paper, you lose!';
      cScore++;
      
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
      result = 'Computer chose scissors, you win!';
      pScore++;
      
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
      result = 'Computer chose scissors, you lose!';
      cScore++;
      
    }
    resultDisplay.innerHTML = result;
  }
