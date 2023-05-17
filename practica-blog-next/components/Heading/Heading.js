import React from "react";
import classNames from "classnames/bind";

import styles from "./Heading.module.scss";

const cx = classNames.bind(styles);

const Heading = ({ children }) => {
  return <h2 className={`${cx("heading", "heading-sm")} font-bold`}>{children}</h2>;
};

export default Heading;
