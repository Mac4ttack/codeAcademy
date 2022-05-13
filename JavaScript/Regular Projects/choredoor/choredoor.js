const startButton = document.getElementById('start');
let currentlyPlaying = true;
//Variables of each door
const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
//Door state variables
const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
let numClosedDoors = 3;
const openDoor = botDoorPath;
let openDoor1;
let openDoor2;
let openDoor3;

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if(choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
};
//On click functions for each door
doorImage1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(door1);
  }
};
doorImage2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(door2);
  }
};
doorImage3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(door3);
  }
};
//Button functionality
startButton.onclick = () => {
  if(!currentlyPlaying) {
    startRound();
  }
};
const startRound = () => {
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;

  randomChoreDoorGenerator();
};
//Game win logic
const gameOver = (status) => {
  if(status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
};
const isBot = (door) => {
  if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};
const isClicked = (door) => {
  if(door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
};
const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0) {
    gameOver('win');
  } else if(isBot(door)) {
    gameOver();
  }
};

startRound();