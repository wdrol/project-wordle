import React from "react";

function GuessInput({ addGuess }) {
  const [text, setText] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (text.length !== 5) {
      alert("Guess must be 5 characters long.");
    } else {
      addGuess(text);
      setText("");
    }
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input">Enter guess (5 letters, A to Z only):</label>
      <input
        id="guess-input"
        type="text"
        value={text}
        maxLength="5"
        pattern="[A-Za-z]{5}"
        onChange={(event) => {
          setText(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
