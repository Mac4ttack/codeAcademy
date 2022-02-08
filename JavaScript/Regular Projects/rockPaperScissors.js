
//checks user choice for valid selection, converts to lowercase
const getUserChoice = userChoice => userChoice.toLowerCase() === ('rock' || 'paper' || 'scissors') ? userChoice.toLowerCase() : console.log(`invalid choice`);

//generates random number 0-2 and assigns choice to computer
const getComputerChoice = () => {
  ranNum = Math.floor(Math.random() * 3)
  switch (ranNum) {
    case 0: 
      return "rock";
    case 1: 
      return "paper";
    case 2: 
      return "scissors";

  }
}

//determines winner based on game logic
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The game was a tie.'
  } else if (userChoice=== 'rock' && computerChoice === 'paper') {
    return 'The Computer won.'
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    return 'The Computer won.'
  } else if (userChoice=== 'scissors' && computerChoice === 'rock') {
    return 'The Computer won.'
  } else 'The User won.'
}


//calls getComputerChoice, getUserChoice, and determineWinner to play a game and output result to console
//edit userChoice in this block to change choice
function playGame(){
  userChoice = getUserChoice('RocK');
  computerChoice = getComputerChoice();
  
  console.log(`The player chose: ${userChoice}`)
  console.log(`The computer chose: ${computerChoice}`)
  console.log(determineWinner(userChoice,computerChoice))
}

playGame();
