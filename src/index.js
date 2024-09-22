import { Player } from "./player";
import "./style.css";

const mainContent = document.querySelector(".main-content");

const human = new Player("human");
const computer = new Player("computer");

const humanBoard = document.querySelector(".player-grid");
const computerBoard = document.querySelector(".computer-grid");

for(let i = 0; i < human.gameBoard.board.length; i++) {
    for(let j = 0; j < human.gameBoard.board[0].length; j++) {
        const div = document.createElement("div");
        div.classList.add("grid-cell")
        humanBoard.appendChild(div);
    }
}

for(let i = 0; i < computer.gameBoard.board.length; i++) {
    for(let j = 0; j < computer.gameBoard.board[0].length; j++) {
        const div = document.createElement("div");
        div.classList.add("grid-cell")
        computerBoard.appendChild(div);
    }
}
