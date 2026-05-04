import classNames from "classnames";
import styles from "./Link.module.scss";

// FIXME: font-bold is not be taking
const Link = ({ children, href = "#", isActive }) => {
  return (
    <a
      href={href}
      className={classNames(
        styles["text-button"],
        styles["text-button-md"],
        "font-bold",
        {
          "is-active": isActive,
        }
      )}
    >
      {children}
    </a>
  );
};

export default Link;
