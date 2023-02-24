import { GameCards } from "./GameCards";

describe("Game cards tests", () => {
  const gameCards = new GameCards();

  test("should generate deck", () => {
    gameCards.generateDeck();
    expect(gameCards.cardNumber).toHaveLength(52);
  });

  test("should shuffle cards", () => {
    gameCards.shuffleCards();
    expect(gameCards.cardNumber).toHaveLength(52);
  });

  test("should discribute cards", () => {
    gameCards.discributeCards();
    expect(gameCards.playerOneCards).toHaveLength(26);
    expect(gameCards.playerTwoCards).toHaveLength(26);
  });

  test("should compare all cards", () => {
    gameCards.compareAllCards();
    expect(gameCards.playerOneWinCount + gameCards.playerTwoWinCount).toBe(26);
  });

  test("should find winner if one won", () => {
    gameCards.playerOneWinCount = 1;
    gameCards.playerTwoWinCount = 0;
    gameCards.findWinner();
  });

  test("should find winner if two won", () => {
    gameCards.playerOneWinCount = 0;
    gameCards.playerTwoWinCount = 1;
    gameCards.findWinner();
  });

  test("should find winner if tie", () => {
    gameCards.playerOneWinCount = 0;
    gameCards.playerTwoWinCount = 0;
    gameCards.findWinner();
  });

  test("should reset game", () => {
    gameCards.resetgame();
    expect(gameCards.playerOneCards).toHaveLength(0);
    expect(gameCards.playerTwoCards).toHaveLength(0);
    expect(gameCards.playerOneWinCount).toBe(0);
    expect(gameCards.playerTwoWinCount).toBe(0);
  });

  test("should play game", () => {
    gameCards.playGame();
    expect(gameCards.playerOneCards).toHaveLength(0);
    expect(gameCards.playerTwoCards).toHaveLength(0);
    expect(gameCards.playerOneWinCount + gameCards.playerTwoWinCount).toBe(0);
  });
});
