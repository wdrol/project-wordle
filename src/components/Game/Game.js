import React from "react";

import { WORDS } from "../../data";
import { sample } from "../../utils";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function getLetters(text) {
    let a = [];

    text.split("").map((x) => a.push({ id: Math.random(), letter: x }));

    return a;
  }

  function formatGuessItem(text) {
    return { id: Math.random(), letters: getLetters(text) };
  }

  function addGuess(text) {
    if (guessList.length > NUM_OF_GUESSES_ALLOWED - 1) return;

    setGuessList([...guessList, formatGuessItem(text)]);
  }

  return (
    <>
      <GuessResults guessList={guessList} formatGuessItem={formatGuessItem} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
