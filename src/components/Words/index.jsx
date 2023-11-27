import { Guess } from "../Guess";

export const Words = ({ words, answer }) => {
  const newWords = words.filter((word) => word !== null);
  const notWords = words.filter((word) => word === null);

  return (
    <div className="guess-results">
      {newWords.map((word) => (
        <Guess key={word.id} word={word.word} answer={answer} />
      ))}
      {notWords.map((el, index) => (
        <Guess key={index} word={el} />
      ))}
    </div>
  );
};
