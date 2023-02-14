// created array of boxes from html box div
let boxes = Array.from(document.getElementsByClassName("box"));
// created empty array of 9 length of checking empty or fill position in boxes
let spaces = Array(9).fill(null);
const playerDetails = {
  oText: "O",
  xText: "X",
};
const startGame = (currentPlayer) => {
  boxes.forEach((box) => box.addEventListener("click", boxClicked));
  function boxClicked(e) {
    const id = e.target.id;
    let playerText = document.getElementById("playerText");
    if (!spaces[id]) {
      spaces[id] = currentPlayer;
      e.target.innerText = currentPlayer;
      if (playerHasWon()) {
        playerText.innerHTML = `${currentPlayer} has won!`;
        return;
      }
      currentPlayer =
        currentPlayer == playerDetails.xText
          ? playerDetails.oText
          : playerDetails.xText;
    }
  }
};
// game logic for winning
function playerHasWon() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const condition of winningCombos) {
    let [a, b, c] = condition;
    if (spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]) {
      return true;
    }
  }
  return false;
}
// restart button operations
const restartBtn = document.getElementById("restartBtn");
restartBtn.addEventListener("click", restart);
function restart() {
  spaces.fill(null);
  boxes.forEach((box) => {
    box.innerText = "";
  });
  playerText.innerHTML = "Tic Tac Toe";
}
// main
startGame(playerDetails.xText);
