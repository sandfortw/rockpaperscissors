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
  document.querySelector('body').appendChild(div)
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
    if (playerWin > computerWin) {
      return outcome + "\n" + "You won the game!";
    } else {
      return outcome + "\n" + "You lost! Try again!";
    }
  } else {
    return outcome;
  }
}

const body = document.querySelector('body')
const buttons = document.querySelectorAll("li button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let player_choice_div = document.createElement('div');
    player_choice_div.textContent = `You chose ${button.id}`;
    document.querySelector('body').appendChild(player_choice_div);
    const outcome = playRound(getComputerChoice(), button.id);
    const div = document.createElement('div');
    div.textContent = game(outcome);
    body.appendChild(div);
  });
});
