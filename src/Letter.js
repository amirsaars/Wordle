import React, { useContext, useEffect } from "react";
import { boardDefault } from "./Words";
import { AppContext } from "./App";

export const Letter = ({ letterPos, attemptVal }) => {
  const letter = boardDefault[attemptVal][letterPos];
  const { correctWord, currAttempt, setDisabledLetters } =
    useContext(AppContext);

  const correct = correctWord[letterPos] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);
  console.log(currAttempt.attempt, attemptVal);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};
