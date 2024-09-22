import { Gameboard } from "./gameBoard";

export class Player {
  constructor(type) {
    this.type = type;
    this.gameBoard = new Gameboard();
  }
}
