export const Card = ({ title, children }) => {
  // JavaScript
  return (
    <div className="post">
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
};
