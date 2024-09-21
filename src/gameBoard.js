import { Ship } from "./ship";

export class Gameboard {
  constructor() {
    this.board = [
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ];
  }

  placeShip(shipLength, coord, placement) {
    for (let i = 0; i < shipLength; i++) {
      if (placement === "left") {
        if (
          this.board[coord[0]][coord[1] - i] === null &&
          this.board[coord[0]][coord[1] - i] !== undefined
        )
          this.board[coord[0]][coord[1] - i] = new Ship(shipLength, placement);
      } else if (placement === "right") {
        if (
          this.board[coord[0]][coord[1] + i] === null &&
          this.board[coord[0]][coord[1] + i] !== undefined
        )
          this.board[coord[0]][coord[1] + i] = new Ship(shipLength, placement);
      } else if (placement === "top") {
        if (
          this.board[coord[0] - i][coord[1]] === null &&
          this.board[coord[0] - i][coord[1]] !== undefined
        )
          this.board[coord[0] - i][coord[1]] = new Ship(shipLength, placement);
      } else if (placement === "bottom") {
        if (
          this.board[coord[0] - i][coord[1]] === null &&
          this.board[coord[0] - i][coord[1]] !== undefined
        )
          this.board[coord[0] + i][coord[1]] = new Ship(shipLength, placement);
      }
    }
  }
}
