import React from "react";
import styles from "../styles/Card.module.css";

export default function Card({ title, image, idx }) {
  return (
    <div className="col">
      <div className="card h-100 bg-dark">
        <div className={styles.imgContainer} >
          <img className="card-img-top" src={image} alt="Card image cap" />
        </div>
        <div className="card-body">
          <h5 className="card-title text-uppercase text-center text-light">{title}</h5>
        </div>
      </div>
    </div>
  );
}
