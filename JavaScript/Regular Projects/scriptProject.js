let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// generates 0-9 random number
function generateTarget() {
  return Math.floor(Math.random()*9);
}

//compares random number to a human input to declare winner, tie goes to human
function compareGuesses(hGuess,targetNum,compGuess) {
  const hdiff = Math.abs(hGuess - targetNum);
  const cdiff = Math.abs(compGuess - targetNum);
  if (cdiff <= hdiff) {
    return true;
  } else {
    return false;
  }
}

//updates score of human and computer
function updateScore(winner){
  if (winner === 'human') {
    humanScore += 1
  } else {
    computerScore += 1
  }
}


//updates round counter
function advanceRound() {
  currentRoundNumber +=1;
}