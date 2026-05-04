import React from "react";

import Image from "next/image";

import styles from "./card.module.css";

const Card = ({ text, url }) => {
  return (
    <div className={`${styles.card} ${styles.wallet}`}>
      <div className={styles.overlay}></div>
      <div className={styles.circle}>
        <Image
          src={url}
          width={150}
          height={150}
          className={styles.dog}
          alt={`Dog ${text}`}
        />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Card;
