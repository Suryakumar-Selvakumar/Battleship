/* eslint-disable no-undef */
import { Gameboard } from "../gameBoard";
import { Ship } from "../ship";

describe("Gameboard", () => {
  const gameBoard = new Gameboard();
  it.each([Gameboard, gameBoard.board, gameBoard.placeShip])(
    "%# exists",
    () => {
      expect(Gameboard).toBeDefined();
    }
  );

  it("places ship(3, [0, 9],'left') objects at adj. coordinates", () => {
    gameBoard.placeShip(3, [0, 9], "left");
    expect(gameBoard.board[0][8]).toEqual(expect.any(Ship));
    expect(gameBoard.board[0][7]).toEqual(expect.any(Ship));
  });

  it("places ship(4, [6, 7], 'left') objects at adj. coordinates", () => {
    gameBoard.placeShip(4, [6, 7], "left");
    expect(gameBoard.board[6][6]).toEqual(expect.any(Ship));
    expect(gameBoard.board[6][5]).toEqual(expect.any(Ship));
    expect(gameBoard.board[6][4]).toEqual(expect.any(Ship));
  });

  it("places ship(3, [1, 0], 'right') objects at adj. coordinates", () => {
    gameBoard.placeShip(3, [1, 0], "right");
    expect(gameBoard.board[1][1]).toEqual(expect.any(Ship));
    expect(gameBoard.board[1][2]).toEqual(expect.any(Ship));
  });

  it("places ship(2, [3, 0], 'right') objects at adj. coordinates", () => {
    gameBoard.placeShip(2, [3, 0], "right");
    expect(gameBoard.board[3][1]).toEqual(expect.any(Ship));
  });

  it("places ship(4, [5, 5], 'top') objects at adj. coordinates", () => {
    gameBoard.placeShip(4, [5, 5], "top");
    expect(gameBoard.board[4][5]).toEqual(expect.any(Ship));
    expect(gameBoard.board[3][5]).toEqual(expect.any(Ship));
    expect(gameBoard.board[2][5]).toEqual(expect.any(Ship));
    // expect(gameBoard.placeShip()).toBe(1)
  });

  it("places ship(2, [9, 0], 'top') objects at adj. coordinates", () => {
    gameBoard.placeShip(2, [9, 0], "top");
    expect(gameBoard.board[8][0]).toEqual(expect.any(Ship));
  });

  it("places ship(3, [5, 9], 'bottom') objects at adj. coordinates", () => {
    gameBoard.placeShip(3, [5, 9], "bottom");
    expect(gameBoard.board[6][9]).toEqual(expect.any(Ship));
    expect(gameBoard.board[7][9]).toEqual(expect.any(Ship));
  });

  it("places ship(2, [7, 3], 'right') objects at adj. coordinates", () => {
    gameBoard.placeShip(2, [7, 3], "bottom");
    expect(gameBoard.board[8][3]).toEqual(expect.any(Ship));
  });

  it("refuses to place ships when adj. coordinates aren't available", () => {
    gameBoard.placeShip(2, [0, 0], "left");
    expect(gameBoard.board[0][0]).toEqual(expect.any(Ship));
  });

  it("refuses to place ships when adj. coordinates aren't available", () => {
    gameBoard.placeShip(2, [9, 9], "right");
    expect(gameBoard.board[0][0]).toEqual(expect.any(Ship));
  });
});
