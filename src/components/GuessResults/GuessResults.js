import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guessList, formatGuessItem }) {
  const emptyList = [];

  for (let i = 0; i < NUM_OF_GUESSES_ALLOWED - guessList.length; i++) {
    emptyList.push(formatGuessItem("     "));
  }

  return (
    <div className="guess-results">
      {guessList.map((item) => (
        <Guess key={item.id} item={item} />
      ))}
      {emptyList.map((item) => (
        <Guess key={item.id} item={item} />
      ))}
    </div>
  );
}

export default GuessResults;
