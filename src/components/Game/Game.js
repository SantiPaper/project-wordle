import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessInput } from "../GuessInput";
import { Words } from "../Words";
import { useState } from "react";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [words, setWords] = useState([]);

  const addWord = (word) => {
    setWords([...words, word]);
  };

  return (
    <>
      Put a game here!
      <Words words={words} />
      <GuessInput addWord={addWord} />
    </>
  );
}

export default Game;
