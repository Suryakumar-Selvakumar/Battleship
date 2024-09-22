import { Ship } from "./ship";
import { randomize } from "./helper";
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
    const coordRow = coord[0],
      coordCol = coord[1];
    for (let i = 0; i < shipLength; i++) {
      if (placement === "left") {
        this.board[coordRow][coordCol - i] = new Ship(shipLength, placement);
      } else if (placement === "right") {
        this.board[coordRow][coordCol + i] = new Ship(shipLength, placement);
      } else if (placement === "top") {
        this.board[coordRow - i][coordCol] = new Ship(shipLength, placement);
      } else if (placement === "bottom") {
        this.board[coordRow + i][coordCol] = new Ship(shipLength, placement);
      }
    }
  }

  randomCoords(shipLength) {
    const choices = ["left", "right", "top", "bottom"];
    let coordRow = Math.floor(Math.random() * 9),
      choice = Math.floor(Math.random() * 4),
      coordCol = Math.floor(Math.random() * 9),
      countUndefCheck = 0,
      countNullCheck = 0,
      placement = choices[choice];
    for (let i = 0; i < shipLength; i++) {
      if (placement === "left" && coordCol - i >= 0) {
        countUndefCheck++;
      } else if (placement === "right" && coordCol + i <= 9) {
        countUndefCheck++;
      } else if (placement === "top" && coordRow - i >= 0) {
        countUndefCheck++;
      } else if (placement === "bottom" && coordRow + i <= 9) {
        countUndefCheck++;
      }
    }

    for (let i = 0; i < shipLength; i++) {
      if (countUndefCheck === shipLength) {
        if (
          placement === "left" &&
          this.board[coordRow][coordCol - i] === null
        ) {
          countNullCheck++;
        } else if (
          placement === "right" &&
          this.board[coordRow][coordCol + i] === null
        ) {
          countNullCheck++;
        } else if (
          placement === "top" &&
          this.board[coordRow - i][coordCol] === null
        ) {
          countNullCheck++;
        } else if (
          placement === "bottom" &&
          this.board[coordRow + i][coordCol] === null
        ) {
          countNullCheck++;
        }
      }
    }

    if (countNullCheck === shipLength) {
      return {
        coord: [coordRow, coordCol],
        placement: placement,
        shipLength: shipLength,
      };
    } else {
      placement = randomize(placement);
      this.randomCoords(shipLength);
    }
  }
}
