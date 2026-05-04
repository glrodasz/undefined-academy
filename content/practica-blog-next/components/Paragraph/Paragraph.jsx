import classNames from "classnames";
import styles from "./Paragraph.module.scss";

const Paragraph = ({
  as: Component = "span",
  children,
  size = "sm",
  weight = "regular",
  isHelpText,
}) => {
  return (
    <Component
      className={classNames("paragraph", {
        [styles[`paragraph-${size}`]]: size,
        [styles[`font-${weight}`]]: weight,
        [styles["is-help-text"]]: isHelpText,
      })}
    >
      {children}
    </Component>
  );
};

export default Paragraph;
