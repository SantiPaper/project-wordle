import { useState } from "react";

export const GuessInput = () => {
  const [word, setWord] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (word.length === 5) {
      console.log(word);
      setWord("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        title="Palabra de 5 letras"
        pattern="[A-Za-z]{5}"
        value={word}
        onChange={(ev) => setWord(ev.target.value.toUpperCase())}
      />
    </form>
  );
};
