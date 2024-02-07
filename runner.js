let gameCount = 0;
let playerWin = 0;
let computerWin = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  const choice = choices[randomIndex];
  const choice_display = `Computer chose ${choice}`;
  let div = document.createElement('div');
  div.textContent = choice_display;
  document.querySelector('#gameplay-info').appendChild(div)
  return choice;
}

function winOrLoseString(computerSelection, playerSelection) {
  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "Rock":
          return "Tie! Rock ties Rock";
        case "Paper":
          return "You Lose! Paper beats Rock!";
        case "Scissors":
          return "You Win! Rock beats Scissors!";
      }
      break;
    case "paper":
      switch (computerSelection) {
        case "Rock":
          return "You Win! Paper beats Rock!";
        case "Paper":
          return "Tie! Paper ties Paper";
        case "Scissors":
          return "You Lose! Scissors beats Paper!";
      }
      break;
    case "scissors":
      switch (computerSelection) {
        case "Rock":
          return "You Lose! Rock beats Scissors!";
        case "Paper":
          return "You Win! Scissors beats Paper!";
        case "Scissors":
          return "Tie! Scissors ties Scissors";
      }
      break;
    default:
      return "Invalid Input.";
  }
}

function playRound(computerSelection, playerSelection) {
  return winOrLoseString(computerSelection, playerSelection);
}

function game(outcome) {
  if (outcome.includes("Win")) {
    playerWin++;
    const scoreElement = document.querySelector('#score-player');
    scoreElement.textContent = `Player Score: ${playerWin}`
  }
  if (outcome.includes("Lose")) {
    computerWin++;
    const scoreElement = document.querySelector('#score-computer');
    scoreElement.textContent = `Computer Score: ${computerWin}`
  }
  if (computerWin === 5 || playerWin === 5) {
    winScript(outcome)
    return outcome;
  } else {
    return outcome;
  }
}

function winScript(outcome){
  let selectionContainer = document.querySelector('#selection-container')
  let result = document.querySelector('#result')
  selectionContainer.style.visibility = 'hidden';
  result.textContent = outcome.includes("Win") ? "You won the game!" : "You lost! Try again!"; 
  document.querySelector('#play-again').style.visibility = 'visible';
}

const gameplayInfo = document.querySelector('#gameplay-info')
const buttons = document.querySelectorAll("li button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    gameplayInfo.innerHTML = '';
    let player_choice_div = document.createElement('div');
    player_choice_div.textContent = `You chose ${button.id}`;
    gameplayInfo.appendChild(player_choice_div);
    const outcome = playRound(getComputerChoice(), button.id);
    const div = document.createElement('div');
    div.textContent = game(outcome);
    gameplayInfo.appendChild(div);
  });
});

const playAgainButton = document.querySelector('#play-again')

playAgainButton.addEventListener('click', () => window.location.reload())


