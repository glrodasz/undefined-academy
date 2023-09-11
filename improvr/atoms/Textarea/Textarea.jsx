import PropTypes from "prop-types";
import "./Textarea.css"

const Textarea = ({ children }) => {
  return <textarea className="textarea">{children}</textarea>;
};

Textarea.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Textarea;
