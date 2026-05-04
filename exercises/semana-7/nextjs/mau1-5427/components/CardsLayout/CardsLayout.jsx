// import React from "react";
import { useState, useEffect } from "react";
import styles from "./CardsLayout.module.css";
import Card from "@/components/Card";

export default function CardsLayout() {
  const [dogCards, setDogCards] = useState([]);
  
  useEffect(() => {
    const getDogs = async () => {
      const response = await fetch("/api/dogs")
      const dogs = await response.json();
      console.log(dogs)
      setDogCards(dogs)
    }
    getDogs();
  }, [])

  return (
    <>
      <h1 className={styles["title"]}>The Dog API</h1>
      <div className={styles["cards-layout"]}>
        {
          dogCards.map((dog, i) => {
            return <Card src={dog[0]} breed={dog[1]} key={i}></Card>
          })
        }
      </div>
    </>
  )
}