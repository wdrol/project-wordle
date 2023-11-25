import React from "react";

import { WORDS } from "../../data";
import { sample } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// Log answer in the console for debugging.
console.info({ answer });

function Game() {
  const [win, setWin] = React.useState(false);
  const [lose, setlose] = React.useState(false);
  const [guessList, setGuessList] = React.useState([]);

  function getLetters(text) {
    let a = [];

    results = checkGuess(text, answer);

    results.map((x) =>
      a.push({ id: Math.random(), letter: x.letter, status: x.status })
    );

    return a;
  }

  function getEmptyList() {
    const emptyList = [];

    for (let i = 0; i < NUM_OF_GUESSES_ALLOWED - guessList.length; i++) {
      emptyList.push(formatGuessItem("     "));
    }

    return emptyList;
  }

  function formatGuessItem(text) {
    return { id: Math.random(), letters: getLetters(text) };
  }

  function addGuess(text) {
    const item = formatGuessItem(text);

    setGuessList([...guessList, item]);

    const correct = item.letters.filter((x) => x.status === "correct");

    if (correct.length === item.letters.length) {
      setWin(true);
    } else if (guessList.length > NUM_OF_GUESSES_ALLOWED - 2) {
      setlose(true);
    }
  }

  return (
    <>
      <GuessResults guessList={guessList} emptyList={getEmptyList()} />

      {win && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> You got it in
            <strong> {guessList.length} guesses</strong>.
          </p>
        </div>
      )}

      {lose && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}

      {!win && !lose && <GuessInput addGuess={addGuess} />}
    </>
  );
}

export default Game;
