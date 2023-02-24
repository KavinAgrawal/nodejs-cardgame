import { GameCards } from "./GameCards";
import * as readline from "readline";

const gameCards = new GameCards();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const playGame = () => {
  rl.question("Enter 1 to play game, 2 to exit: ", (answer) => {
    if (answer === "1") {
      gameCards.playGame();
      playGame();
    } else if (answer === "2") {
      rl.close();
    } else {
      console.log("Invalid input");
      playGame();
    }
  });
};

playGame();
