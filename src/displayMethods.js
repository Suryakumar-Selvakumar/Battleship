import { returnAdjCell } from "./helper";

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
    cell.style.cssText = "background-color: white;";
    const cellRow = cell.getAttribute("data-row");
    const cellColumn = cell.getAttribute("data-column");
    const cellHit = cell.getAttribute("hit");
    if (
      typeof playerGameBoard[cellRow][cellColumn] === "object" &&
      playerGameBoard[cellRow][cellColumn] !== null
    ) {
      // Add background:lightblue later
      cell.style.cssText = "background-color:blue;";
      if (cellHit === "true") {
        // Add a fire/blast image later and background: lightred
        cell.style.cssText = "background-color:red;";
      }
    } else if (playerGameBoard[cellRow][cellColumn] === "miss") {
      // Add a dot image later and background lightgrey
      cell.style.cssText = "background-color:grey;";
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

function registerHumanPlay(computerGameBoardObj, dataRow, dataColumn, cell) {
  cell.setAttribute("chosen", true);
  if (computerGameBoardObj.receiveAttack([dataRow, dataColumn])) {
    cell.setAttribute("hit", true);
  }
}

function registerComputerPlay(
  playerGameBoardObj,
  playerVisitedArr,
  playerGrid
) {
  const coordRow = Math.floor(Math.random() * 10),
    coordCol = Math.floor(Math.random() * 10);
  const shipCoord = playerGameBoardObj.shipsFoundArr.shift();
  const adjCoord = returnAdjCell(shipCoord);
  if (
    adjCoord &&
    adjCoord[0] >= 0 &&
    adjCoord[0] <= 9 &&
    adjCoord[1] >= 0 &&
    adjCoord[1] <= 9
  ) {
    if (!playerVisitedArr[adjCoord[0]][adjCoord[1]]) {
      for (const cell of playerGrid.children) {
        const cellRow = cell.getAttribute("data-row");
        const cellColumn = cell.getAttribute("data-column");
        if (adjCoord[0] == cellRow && adjCoord[1] == cellColumn) {
          if (playerGameBoardObj.receiveAttack([adjCoord[0], adjCoord[1]])) {
            cell.setAttribute("hit", true);
          }
        }
      }
      playerVisitedArr[adjCoord[0]][adjCoord[1]] = true;
      return;
    }
  } else if (!playerVisitedArr[coordRow][coordCol]) {
    for (const cell of playerGrid.children) {
      const cellRow = cell.getAttribute("data-row");
      const cellColumn = cell.getAttribute("data-column");
      if (coordRow == cellRow && coordCol == cellColumn) {
        if (playerGameBoardObj.receiveAttack([coordRow, coordCol])) {
          cell.setAttribute("hit", true);
        }
      }
    }
    playerVisitedArr[coordRow][coordCol] = true;
    return;
  }
  registerComputerPlay(playerGameBoardObj, playerVisitedArr, playerGrid);
}

function generateRandomShip(playerGameBoardObj, shipLength) {
  while (true) {
    const newShipDetails = playerGameBoardObj.randomCoords(shipLength);
    if (newShipDetails) {
      playerGameBoardObj.placeShip(
        newShipDetails.shipLength,
        newShipDetails.coord,
        newShipDetails.placement
      );
      break;
    }
  }
}

function populateRandomShips(playerGameBoardObj) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      playerGameBoardObj.board[i][j] = null;
    }
  }
  generateRandomShip(playerGameBoardObj, 4);
  generateRandomShip(playerGameBoardObj, 3);
  generateRandomShip(playerGameBoardObj, 3);
  generateRandomShip(playerGameBoardObj, 2);
  generateRandomShip(playerGameBoardObj, 2);
  generateRandomShip(playerGameBoardObj, 2);
  generateRandomShip(playerGameBoardObj, 1);
  generateRandomShip(playerGameBoardObj, 1);
  generateRandomShip(playerGameBoardObj, 1);
  generateRandomShip(playerGameBoardObj, 1);
}

export {
  displayPlayerBoard,
  populateHumanBoard,
  populateComputerBoard,
  displayComputerBoard,
  registerHumanPlay,
  registerComputerPlay,
  populateRandomShips,
};
