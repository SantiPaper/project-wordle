export const Words = ({ words }) => {
  return (
    <div className="guess-results">
      {words.map((e) => (
        <p key={e.id}>{e.word}</p>
      ))}
    </div>
  );
};
