// 1. Naming

// without objects
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMaker = "X";
const playerTwoMaker = "O";

// with objects
const playerOne = {
  name: "tim",
  marker: "X",
};

const playerTwo = {
  name: "jenn",
  marker: "O",
};

// 2. Grouping related data together
function gameOver(winningPlayer) {
    console.log("congratulations!");
    console.log('${winningPlayer.name} (${winningPlayer.marker}) is the winner!');
}