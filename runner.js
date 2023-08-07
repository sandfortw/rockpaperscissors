function getComputerChoice(){
  const choices = ["Rock", "Paper", "Scissors"]
  const randomIndex = Math.floor(Math.random() * 3)
  return choices [randomIndex]
};

function normalizeString(string) {
  return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);
}

function winOrLoseString(computerSelection, playerSelection){
  switch(playerSelection) {
    case "Rock":
      switch(computerSelection) {
        case "Rock":
          return "Tie! Rock ties Rock";
        case "Paper":
          return "You Lose! Paper beats Rock!";
        case "Scissors":
          return "You Win! Rock beats Scissors!";
      };
      break;
    case "Paper":
      switch(computerSelection) {
        case "Rock":
          return "You Win! Paper beats Rock!";
        case "Paper":
          return "Tie! Paper ties Paper";
        case "Scissors":
          return "You Lose! Scissors beats Paper!";
      };
      break;
    case "Scissors":
      switch(computerSelection) {
        case "Rock":
          return "You Lose! Rock beats Scissors!";
        case "Paper":
          return "You Win! Scissors beats Paper!";
        case "Scissors":
          return "Tie! Scissors ties Scissors";
      };
      break;
    default: 
      return "Invalid Input."
  }
}

function playGame(computerSelection, playerSelection){
  playerSelection = normalizeString(playerSelection); 
  return winOrLoseString(computerSelection, playerSelection) 
};

console.log(playGame(getComputerChoice(), getComputerChoice()))