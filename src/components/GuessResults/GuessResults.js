import React from "react";
import Guess from "../Guess/Guess";

function GuessResults({ guessList, emptyList }) {
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
