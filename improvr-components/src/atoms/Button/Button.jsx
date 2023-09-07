import "./Button.css";

const Button = ({ children, type }) => {
  const typeClass = type ? `type-${type}` : "";

  return <button className={`button ${typeClass}`}>{children}</button>;
};

export default Button;
