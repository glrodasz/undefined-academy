import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ children, type = "primary", className = "", onClick }) => {
  const typeClass = type ? `type-${type}` : "";

  return (
    <button className={`button ${className} ${typeClass}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  className: PropTypes.string,
};

export default Button;
