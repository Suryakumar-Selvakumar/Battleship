import { Player } from "./player";
import "./style.css";
import {
  displayComputerBoard,
  displayPlayerBoard,
  populateComputerBoard,
  populateHumanBoard,
  populateRandomShips,
  registerComputerPlay,
  registerHumanPlay,
  resetGameBoards,
} from "./displayMethods";
import winner from "./icons/winner.svg";

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
    div.setAttribute("chosen", false);
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
    div.setAttribute("chosen", false);
    computerBoard.appendChild(div);
  }
}

populateHumanBoard(human.gameBoard);
displayPlayerBoard(humanBoard, human.gameBoard.board);
populateComputerBoard(computer.gameBoard);

const playerVictory = document.querySelector("#player-victory");
const computerVictory = document.querySelector("#computer-victory");
computerVictory.src = winner;
playerVictory.src = winner;

const randomize = document.getElementById("randomize");
randomize.addEventListener("click", () => {
  populateRandomShips(human.gameBoard, human);
  displayPlayerBoard(humanBoard, human.gameBoard.board);
  populateRandomShips(computer.gameBoard, computer);
});

const home = document.querySelector(".home");
const playBtn = document.getElementById("play");
const computerSide = document.querySelector(".computer-side");

playBtn.addEventListener("click", () => {
  home.style.cssText = "display: none;";
  computerSide.style.cssText = "display: grid;";
  displayComputerBoard(computerBoard, computer.gameBoard.board);
});

const playAgain = document.getElementById("play-again");
playAgain.addEventListener("click", () => {
  playAgain.style.cssText = "visibility: hidden;";
  computerSide.style.cssText = "display: none;";
  home.style.cssText = "display: flex;";
  playerVictory.style.cssText = "visibility: hidden;";
  computerVictory.style.cssText = "visibility: hidden;";
  resetGameBoards(human, humanBoard, computer, computerBoard);
});

computerBoard.addEventListener("click", (event) => {
  if (event.target.tagName === "DIV") {
    let dataChosen = event.target.getAttribute("chosen");
    if (dataChosen === "false") {
      if (!human.gameBoard.isAllSunk() && !computer.gameBoard.isAllSunk()) {
        const dataRow = event.target.getAttribute("data-row");
        const dataColumn = event.target.getAttribute("data-column");

        registerHumanPlay(
          computer.gameBoard,
          dataRow,
          dataColumn,
          event.target
        );
        displayComputerBoard(computerBoard, computer.gameBoard.board);
        registerComputerPlay(human.gameBoard, human.visitedArr, humanBoard);
        displayPlayerBoard(humanBoard, human.gameBoard.board);
        if (human.gameBoard.isAllSunk()) {
          computerVictory.style.cssText = "visibility: visible;";
          playAgain.style.cssText = "visibility: visible;";
        } else if (computer.gameBoard.isAllSunk()) {
          playerVictory.style.cssText = "visibility: visible;";
          playAgain.style.cssText = "visibility: visible;";
        }
      }
    }
  }
});
