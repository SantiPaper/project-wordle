export const Banner = ({ status, children }) => {
  return (
    <div className={`banner ${status}`}>
      <p>{children}</p>
    </div>
  );
};
