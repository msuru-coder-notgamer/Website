//Player 1 variable
let p1Chose;

//Player 2 variable
let p2Chose;

//The actual game code, detects the winning player by checking what was written
function play(p1Chose,
 p2Chose) {
 if (p1Chose === "rock" &&
  p2Chose === "rock") {
  return "Player 1 chose rock, player 2 chose rock so TIE";
 }
 if (p1Chose === "paper" &&
  p2Chose === "paper") {
  return "Player 1 chose paper, player 2 chose paper so TIE";
 }
 if (p1Chose === "scissors" &&
  p2Chose === "scissors") {
  return "Player 1 chose scissors, player 2 chose scissors so TIE";
 }
 if (p1Chose === "rock" &&
  p2Chose === "paper") {
  return "Player 1 chose rock, player 2 chose paper so winner is Player 2";
 }
 if (p1Chose === "paper" &&
  p2Chose === "rock") {
  return "Player 1 chose paper, player 2 chose rock so winner is Player 1";
 }
 if (p1Chose === "scissors" &&
  p2Chose === "paper") {
  return "Player 1 chose scissors, player 2 chose paper so winner is Player 1";
 }
 if (p1Chose === "paper" &&
  p2Chose === "scissors") {
  return "Player 1 chose paper, player 2 chose scissors so winner is Player 2";
 }
 if (p1Chose === "scissors" &&
  p2Chose === "rock") {
  return "Player 1 chose scissors, player 2 chose rock, so winner is Player 2";
 }
 if (p1Chose === "rock" &&
  p2Chose === "scissors") {
  return "Player 1 chose rock, player 2 chose scissors so winner is Player 1";
 }

}
 //Finds the div element with the id 'game'
 const printHere = document.getElementById("game");

//For the buttons to work
function rock1() {
 p1Chose = "rock";
}

function paper1() {
 p1Chose = "paper";
}

function scissors1() {
 p1Chose = "scissors";
}

function rock2() {
 p2Chose = "rock";
 play(p1Chose, p2Chose);
 printHere.innerHTML = play(p1Chose, p2Chose);
 pics();
}

function paper2() {
 p2Chose = "paper";
 play(p1Chose, p2Chose);
 printHere.innerHTML = play(p1Chose, p2Chose);
 pics();
}

function scissors2() {
 p2Chose = "scissors";
 play(p1Chose, p2Chose);
 printHere.innerHTML = play(p1Chose, p2Chose);
 pics();
}