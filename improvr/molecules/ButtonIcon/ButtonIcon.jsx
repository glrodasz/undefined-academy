import PropTypes from "prop-types";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";

const ButtonIcon = ({ children, type, icon }) => {
  return (
    <div className="button-icon">
      <Button type={type}>
        <Icon name={icon} />
        {children}{" "}
      </Button>
    </div>
  );
};

ButtonIcon.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
};

export default ButtonIcon;
