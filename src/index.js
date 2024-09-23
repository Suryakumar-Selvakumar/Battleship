import { Player } from "./player";
import "./style.css";
import {
  displayComputerBoard,
  displayPlayerBoard,
  populateComputerBoard,
  populateHumanBoard,
  registerHumanPlay,
} from "./displayMethods";

const human = new Player("human");
const computer = new Player("computer");

const humanBoard = document.querySelector(".player-grid");
const computerBoard = document.querySelector(".computer-grid");

for (let i = 0; i < human.gameBoard.board.length; i++) {
  for (let j = 0; j < human.gameBoard.board[0].length; j++) {
    const div = document.createElement("div");
    div.classList.add("grid-cell");
    div.setAttribute("data-row", i);
    div.setAttribute("data-column", j);
    div.setAttribute("hit", false);
    humanBoard.appendChild(div);
  }
}

for (let i = 0; i < computer.gameBoard.board.length; i++) {
  for (let j = 0; j < computer.gameBoard.board[0].length; j++) {
    const div = document.createElement("div");
    div.classList.add("grid-cell");
    div.setAttribute("data-row", i);
    div.setAttribute("data-column", j);
    div.setAttribute("hit", false);
    computerBoard.appendChild(div);
  }
}

populateHumanBoard(human.gameBoard);
displayPlayerBoard(humanBoard, human.gameBoard.board);

populateComputerBoard(computer.gameBoard);
// displayComputerBoard(computerBoard, computer.gameBoard.board);

const displayPara = document.querySelector("#display-para");

computerBoard.addEventListener("click", (event) => {
  if (event.target.tagName === "DIV") {
    if (!human.gameBoard.isAllSunk() && !computer.gameBoard.isAllSunk()) {
      const dataRow = event.target.getAttribute("data-row");
      const dataColumn = event.target.getAttribute("data-column");
      // let dataHit = event.target.getAttribute("hit");
      registerHumanPlay(computer.gameBoard, dataRow, dataColumn, event.target);
      displayComputerBoard(computerBoard, computer.gameBoard.board);
    } else {
      if (human.gameBoard.isAllSunk()) {
        displayPara.textContent = "Computer wins the game";
      } else if (computer.gameBoard.isAllSunk()) {
        displayPara.textContent = "Player wins the game";
      }
    }
  }
});
