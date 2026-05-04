import PropTypes from "prop-types";
import "./Textarea.css";

const Textarea = ({ children, onChange }) => {
  return (
    <textarea
      className="textarea"
      onChange={(event) => onChange(event.currentTarget.value)}
    >
      {children}
    </textarea>
  );
};

Textarea.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Textarea;
