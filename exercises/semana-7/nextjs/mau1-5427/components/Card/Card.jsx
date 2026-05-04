import React from "react";
import styles from "@/components/Card/Card.module.css"

export default function Card(props) {
  return (
    <>
      <div className={styles.card}>
        <img src={props.src} className={styles["card-image"]}/>
        <p className={styles["card-tag"]}>{props.breed}</p>
      </div>
    </>
  )
}