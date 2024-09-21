/* eslint-disable no-undef */
import { Gameboard } from "../gameBoard";
import { Ship } from "../ship";

describe("Gameboard", () => {
  const gameBoard = new Gameboard();
  it("exists", () => {
    expect(Gameboard).toBeDefined();
  });

  it("board exists", () => {
    expect(gameBoard.board).toBeDefined();
  });

  it("placeShip() function exists", () => {
    expect(gameBoard.placeShip).toBeDefined();
  });

  it("allows to place ships at [0,0] coordinates on the board", () => {
    gameBoard.placeShip(2, [0, 0], "left");
    expect(gameBoard.board[0][0]).toEqual(expect.any(Ship));
    expect(gameBoard.board[0][0]).toHaveProperty("length");
    expect(gameBoard.board[0][0]).toHaveProperty("hits");
    expect(gameBoard.board[0][0]).toHaveProperty("sunk");
    expect(gameBoard.board[0][0]).toHaveProperty("placement");
  });

  it("allows to place ship objects at [9,9] coordinates on the board", () => {
    gameBoard.placeShip(3, [9, 9], "left");
    expect(gameBoard.board[9][9]).toEqual(expect.any(Ship));
    expect(gameBoard.board[9][9]).toHaveProperty("length");
    expect(gameBoard.board[9][9]).toHaveProperty("hits");
    expect(gameBoard.board[9][9]).toHaveProperty("sunk");
    expect(gameBoard.board[9][9]).toHaveProperty("placement");
  });

  it("places ship objects at adjacent coordinates based on its length", () => {
    gameBoard.placeShip(3, [1, 0], "right");
    expect(gameBoard.board[9][9]).toMatchObject({});
  });
});
