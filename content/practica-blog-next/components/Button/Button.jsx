import classNames from "classnames/bind";
import styles from "./Button.module.scss";

// CSS modules
// style {
//   button {},
//   "button-primary" {},
//   "button-secondary" {},
// }
// styles["button-${type}"]

// {
//  [styles["button-${type}"]]: type
// }

const cx = classNames.bind(styles);

const Button = ({ children, type = "primary", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cx("button", {
        [`button-${type}`]: type,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
