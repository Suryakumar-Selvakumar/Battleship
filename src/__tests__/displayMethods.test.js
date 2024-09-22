import { populateGameBoard } from "../displayMethods";
import { Ship } from "../ship";
import { Gameboard } from "../gameBoard";

describe("Display Method", () => {
  it("populateGameBoard works", () => {
    const gameBoard = new Gameboard();
    populateGameBoard(gameBoard);
    expect(gameBoard.board[5][5]).toEqual(expect.any(Ship));
    expect(gameBoard.board[0][9]).toEqual(expect.any(Ship));
    expect(gameBoard.board[8][2]).toEqual(expect.any(Ship));
    expect(gameBoard.board[1][1]).toEqual(expect.any(Ship));
    expect(gameBoard.board[7][8]).toEqual(expect.any(Ship));
    expect(gameBoard.board[6][1]).toEqual(expect.any(Ship));
    expect(gameBoard.board[9][9]).toEqual(expect.any(Ship));
    expect(gameBoard.board[9][0]).toEqual(expect.any(Ship));
    expect(gameBoard.board[2][8]).toEqual(expect.any(Ship));
    expect(gameBoard.board[4][2]).toEqual(expect.any(Ship));
  });
});
