import { checkGuess } from "../../game-helpers";

export const Guess = ({ word, answer }) => {
  const status = checkGuess(word, answer);

  return (
    <p className="guess">
      {word ? (
        status.map((letter, index) => (
          <span key={index} className={`cell ${letter.status}`}>
            {letter.letter}
          </span>
        ))
      ) : (
        <>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
        </>
      )}
    </p>
  );
};
