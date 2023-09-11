import PropTypes from "prop-types";
import Icon from "../../atoms/Icon";

import "./IconLabel.css";

const IconLabel = ({ children, icon }) => {
  return (
    <div className="icon-label">
      <Icon name={icon} />
      <span className="icon-label-text">{children}</span>
    </div>
  );
};

IconLabel.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
};

export default IconLabel;
