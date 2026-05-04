import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import styles from "./DogCard.module.css";

const DogCard = ({ src, breed }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={src} alt={`${breed} image`} sizes="200px" fill />
      </div>
      <p className={styles.caption}>{breed}</p>
    </div>
  );
};

DogCard.propTypes = {
  src: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
};

export default DogCard;
