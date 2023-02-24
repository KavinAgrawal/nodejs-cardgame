export class GameCards {
  public cardNumber: number[] = [];
  public playerOneCards: number[] = [];
  public playerTwoCards: number[] = [];
  public playerOneWinCount = 0;
  public playerTwoWinCount = 0;

  generateDeck() {
    this.cardNumber = [...Array(53).keys()];
    this.cardNumber.shift();
    console.log(
      "Deck of Cards in top to bottom order:",
      this.cardNumber.join(" "),
      "\n"
    );
  }

  shuffleCards() {
    for (let i = 0; i < 52; i++) {
      const j = Math.floor(Math.random() * 52);
      const temp = this.cardNumber[i];
      this.cardNumber[i] = this.cardNumber[j];
      this.cardNumber[j] = temp;
    }
    console.log(
      "Deck of Cards after shuffling in top to bottom order:",
      this.cardNumber.join(" "),
      "\n"
    );
  }

  discributeCards() {
    for (let i = 0; i < 52; i++) {
      if (i % 2 == 0) {
        this.playerOneCards.push(this.cardNumber[i]);
      } else {
        this.playerTwoCards.push(this.cardNumber[i]);
      }
    }
    console.log("Cards Distributed to Players\n");
    console.log(
      "Player 1 Cards in top to bottom order:",
      this.playerOneCards.join(" "),
      "\n"
    );
    console.log(
      "Player 2 Cards in top to bottom order:",
      this.playerTwoCards.join(" "),
      "\n"
    );
  }

  compareCards(playerOneCard, playerTwoCard) {
    console.log("Player 1 draws:", playerOneCard);
    console.log("Player 2 draws:", playerTwoCard);
    if (playerOneCard > playerTwoCard) {
      console.log("Player 1 wins the round\n");
      this.playerOneWinCount++;
    } else {
      console.log("Player 2 wins the round\n");
      this.playerTwoWinCount++;
    }
  }

  compareAllCards() {
    while (this.playerOneCards.length > 0 && this.playerTwoCards.length > 0) {
      this.compareCards(this.playerOneCards[0], this.playerTwoCards[0]);
      this.playerOneCards.shift();
      this.playerTwoCards.shift();
    }
  }

  findWinner() {
    console.log("Player 1 won", this.playerOneWinCount, "rounds");
    console.log("Player 2 won", this.playerTwoWinCount, "rounds");
    if (this.playerOneWinCount > this.playerTwoWinCount) {
      console.log("Player 1 wins the game\n");
    } else if (this.playerOneWinCount < this.playerTwoWinCount) {
      console.log("Player 2 wins the game\n");
    } else {
      console.log("The game is a tie\n");
    }
  }

  resetgame() {
    this.playerOneCards = [];
    this.playerTwoCards = [];
    this.playerOneWinCount = 0;
    this.playerTwoWinCount = 0;
  }

  playGame() {
    this.generateDeck();
    this.shuffleCards();
    this.discributeCards();
    this.compareAllCards();
    this.findWinner();
    this.resetgame();
  }
}
