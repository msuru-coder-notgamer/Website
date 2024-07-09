//Creates a function that adds 2 pictures onto the screen, depending on what the 2 players chose, this function will be run when player 2 chooses
function pics() {
  //Finds the div element with the id 'game'
  const printHere = document.getElementById("game");
 if (p1Chose ===
  "rock"
 ) {
  printHere.innerHTML +=
   '<img style="height: 100px; width: 100px;" src="https://img.freepik.com/premium-vector/boulder-stone-fragments-heavy-solid-bowlder-big-rough-rock-formation-geology-drawing-mountain-rubble-pieces-realistic-hand-drawn-vector-illustration-isolated-white-background_198278-17169.jpg">';
  
 }
 if (p1Chose ===
  "paper"
 ) {
  printHere.innerHTML +=
   '<img style="height: 100px; width: 100px;" src="https://www.dick-blick.com/items/102/40/10240-1009-1-2ww-m.jpg">';
 }
 if (p1Chose === "scissors") {
  printHere.innerHTML +=
   '<img style="height: 100px; width: 100px;" src="https://img.freepik.com/premium-vector/scissors-sewing-embroidery-symbol-hand-drawn_599395-495.jpg">';
 }
 if (p2Chose ===
  "rock"
 ) {
  printHere.innerHTML +=
   '<br><img style="height: 100px; width: 100px;" src="https://img.freepik.com/premium-vector/boulder-stone-fragments-heavy-solid-bowlder-big-rough-rock-formation-geology-drawing-mountain-rubble-pieces-realistic-hand-drawn-vector-illustration-isolated-white-background_198278-17169.jpg">';
 }
 if (p2Chose ===
  "paper"
 ) {
  printHere.innerHTML +=
   '<img style="height: 100px; width: 100px;" src="https://www.dick-blick.com/items/102/40/10240-1009-1-2ww-m.jpg">';
 }
 if (p2Chose === "scissors") {
   printHere.innerHTML +=
   '<img style="height: 100px; width: 100px;" src="https://img.freepik.com/premium-vector/scissors-sewing-embroidery-symbol-hand-drawn_599395-495.jpg">';
 }
}