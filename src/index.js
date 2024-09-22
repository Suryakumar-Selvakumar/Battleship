import { Player } from "./player";
import "./style.css";
import { displayPlayerBoard, populateGameBoard } from "./displayMethods";

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

populateGameBoard(human.gameBoard);
displayPlayerBoard(humanBoard, human.gameBoard.board);

// populateGameBoard(computer);
