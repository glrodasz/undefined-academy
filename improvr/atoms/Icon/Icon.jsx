import PropTypes from "prop-types";
import "./Icon.css";

const iconMap = {
  arrowDown: "🔽",
  grammar: "📖",
  translate: "🔤",
  close: "❌",
  copy: "📋",
};

const Icon = ({ className, name, onClick }) => (
  <span
    className={`icon ${className} ${onClick ? "is-clickable" : ""}`}
    onClick={onClick}
  >
    {iconMap[name]}
  </span>
);

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(iconMap)).isRequired,
  onClick: PropTypes.func,
};

export default Icon;
