"use client";

import React from "react";
import { useState } from "react";
import useSWR from "swr";

import Card from "../Card/Card";

import styles from "./container.module.css";

const DEFAULT_ITEM_PER_PAGE = 10;
const DEFAULT_FIRST_PAGE = 1;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Container = () => {
  //Pagination is curently working in backend side,
  //Planning to implement in the frontend side too
  const [itemPerPage, setItemOerPage] = useState(DEFAULT_ITEM_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(DEFAULT_FIRST_PAGE);

  const { data, mutate, error, isLoading } = useSWR(
    `http://localhost:3000/api/dogs?limit=${itemPerPage}&page=${currentPage}&random`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a dog breed</h1>
      <div className={styles.items}>
        {data.map((dog, key) => (
          <Card url={dog.url} text={dog.name} key={key}></Card>
        ))}
      </div>
    </div>
  );
};

export default Container;
