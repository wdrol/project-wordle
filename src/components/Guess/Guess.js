import React from "react";

function Guess({ item }) {
  return (
    <p className="guess">
      {item.letters.map((x) => (
        <span className={`cell ${x.status}`} key={x.id}>
          {x.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
