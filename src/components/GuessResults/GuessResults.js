import React from "react";

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((x) => (
        <p className="guess" key={x.id}>
          {x.guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
