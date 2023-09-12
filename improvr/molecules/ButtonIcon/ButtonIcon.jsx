import PropTypes from "prop-types";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";

const ButtonIcon = ({ children, type, icon, onClick }) => {
  return (
    <Button type={type} onClick={onClick}>
      <Icon name={icon} />
      {children}{" "}
    </Button>
  );
};

ButtonIcon.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
};

export default ButtonIcon;
