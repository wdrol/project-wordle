import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function formatGuessItem(text) {
    return { id: Math.random(), guess: text };
  }

  function addGuess(text) {
    setGuessList([...guessList, formatGuessItem(text)]);
  }

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
