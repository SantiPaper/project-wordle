import React from "react";
import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessInput } from "../GuessInput";
import { Words } from "../Words";
import { Banner } from "../Banner";
import { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [words, setWords] = useState(
    new Array(NUM_OF_GUESSES_ALLOWED).fill(null)
  );

  const [status, setStatus] = useState("sad");
  const filteredWords = words.filter((word) => word !== null);
  const numOfGuesses = filteredWords.length;
  const isFinish =
    filteredWords.find((word) => word.word === answer) ||
    numOfGuesses === NUM_OF_GUESSES_ALLOWED;

  const addWord = (word) => {
    if (word.word === answer) {
      setStatus("happy");
    }
    const index = words.indexOf(null);
    const newArr = [...words];
    newArr.splice(index, 1, word);
    setWords(newArr);
  };

  return (
    <>
      Put a game here!
      <Words words={words} answer={answer} />
      <GuessInput addWord={addWord} isFinish={isFinish} />
      {isFinish ? (
        <Banner status={status}>
          {status === "happy" ? (
            <>
              <strong>Congratulations!</strong> Got it in
              <strong>
                {" "}
                {numOfGuesses} {numOfGuesses === 1 ? "guess" : "guesses"}
              </strong>
            </>
          ) : (
            <>
              Sorry, the correct answer is <strong>{answer}</strong>
            </>
          )}
        </Banner>
      ) : null}
    </>
  );
}

export default Game;
