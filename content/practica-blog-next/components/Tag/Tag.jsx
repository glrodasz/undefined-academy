import classNames from "classnames";
import styles from "./Tag.module.scss";

const Tag = ({ children, type = "primary", link = "#" }) => {
  return (
    <span
      className={classNames(styles.tag, {
        [styles[`tag-${type}`]]: type,
      })}
    >
      <a href={link}>{children}</a>
    </span>
  );
};

export default Tag;
