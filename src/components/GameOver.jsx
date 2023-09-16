import React, { useContext } from "react";
import { AppContext } from "../App";

export const GameOver = () => {
  const { gameOver, correctWord, currAttempt } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>{gameOver.gussedWord ? "You Correctyly guessed" : "You Failed"}</h3>
      <h1>Correct: {correctWord}</h1>
      {gameOver.gussedWord && (
        <h3>You guessed in {currAttempt.attempts} attempts</h3>
      )}
    </div>
  );
};
