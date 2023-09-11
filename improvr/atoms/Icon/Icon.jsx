import PropTypes from "prop-types";
import "./Icon.css";

const iconMap = {
  arrowDown: "🔽",
  grammar: "📖",
  translate: "🔤",
  close: "❌",
  copy: "📋",
};

const Icon = ({ className, name }) => (
  <span className={`icon ${className}`}>{iconMap[name]}</span>
);

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(iconMap)).isRequired,
};

export default Icon;
