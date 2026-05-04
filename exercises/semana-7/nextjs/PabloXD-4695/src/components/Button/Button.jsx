import React from "react";

import Link from "next/link";

import styles from "./button.module.css";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default Button;
