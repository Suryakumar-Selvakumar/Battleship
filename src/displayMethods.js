function populateHumanBoard(playerGameBoard) {
  playerGameBoard.placeShip(4, [5, 5], "top");
  playerGameBoard.placeShip(3, [0, 9], "left");
  playerGameBoard.placeShip(3, [8, 2], "right");
  playerGameBoard.placeShip(2, [1, 1], "bottom");
  playerGameBoard.placeShip(2, [7, 8], "top");
  playerGameBoard.placeShip(2, [6, 1], "right");
  playerGameBoard.placeShip(1, [9, 9], "left");
  playerGameBoard.placeShip(1, [9, 0], "right");
  playerGameBoard.placeShip(1, [2, 8], "left");
  playerGameBoard.placeShip(1, [4, 2], "left");
}

function populateComputerBoard(computerGameBoard) {
  computerGameBoard.placeShip(4, [0, 0], "bottom");
  computerGameBoard.placeShip(3, [2, 9], "left");
  computerGameBoard.placeShip(3, [3, 4], "bottom");
  computerGameBoard.placeShip(2, [7, 1], "right");
  computerGameBoard.placeShip(2, [8, 6], "right");
  computerGameBoard.placeShip(2, [6, 8], "top");
  computerGameBoard.placeShip(1, [1, 5], "left");
  computerGameBoard.placeShip(1, [9, 2], "left");
  computerGameBoard.placeShip(1, [2, 2], "left");
  computerGameBoard.placeShip(1, [4, 6], "left");
}

function displayPlayerBoard(playerGrid, playerGameBoard) {
  for (const cell of playerGrid.children) {
    const cellRow = cell.getAttribute("data-row");
    const cellColumn = cell.getAttribute("data-column");
    const cellHit = cell.getAttribute("hit");
    if (
      typeof playerGameBoard[cellRow][cellColumn] === "object" &&
      playerGameBoard[cellRow][cellColumn] !== null
    ) {
      // Add code to display the ship image and background:lightblue
      cell.style.cssText = "background-color:blue;";
    } else if (playerGameBoard[cellRow][cellColumn] === "miss") {
      // Add a dot image later and background lightgrey
      cell.style.cssText = "background-color:grey;";
    }
    if (cellHit === true) {
      // Add a fire/blast image later and background: lightred
      cell.textContent = "X";
    }
    if (
      playerGameBoard[cellRow][cellColumn] !== null &&
      typeof playerGameBoard[cellRow][cellColumn] === "object" &&
      playerGameBoard[cellRow][cellColumn].isSunk()
    ) {
      // Make background dark red and add ship with X mark SVG
      cell.style.cssText = "background-color: darkred";
    }
  }
}

function displayComputerBoard(computerGrid, computerGameBoard) {
  for (const cell of computerGrid.children) {
    const cellRow = cell.getAttribute("data-row");
    const cellColumn = cell.getAttribute("data-column");
    const cellHit = cell.getAttribute("hit");
    console.log(cellHit);
    if (
      typeof computerGameBoard[cellRow][cellColumn] === "object" &&
      computerGameBoard[cellRow][cellColumn] !== null &&
      cellHit === "true"
    ) {
      // Add a fire/blast image later and background: lightred
      cell.style.cssText = "background-color:red;";
    } else if (computerGameBoard[cellRow][cellColumn] === "miss") {
      // Add a dot image later and background lightgrey
      cell.style.cssText = "background-color:grey;";
    }
    if (
      computerGameBoard[cellRow][cellColumn] !== null &&
      typeof computerGameBoard[cellRow][cellColumn] === "object" &&
      computerGameBoard[cellRow][cellColumn].isSunk()
    ) {
      // Make background dark red and add ship with X mark SVG
      cell.style.cssText = "background-color: darkred";
    }
  }
}

function registerHumanPlay(computerGameBoard, dataRow, dataColumn, cell) {
  if (computerGameBoard.receiveAttack([dataRow, dataColumn])) {
    cell.setAttribute("hit", true);
  }
}

export {
  displayPlayerBoard,
  populateHumanBoard,
  populateComputerBoard,
  displayComputerBoard,
  registerHumanPlay,
};