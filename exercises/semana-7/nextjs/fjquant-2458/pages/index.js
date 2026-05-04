import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/card";
import styles from "../styles/Home.module.css"

const Dogs = () => {

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dogs = await fetch("/api/dogs")
          .then((res) => res.json())
        setDogs(dogs)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Layout pagina='inicio'>
        <div>
          <h1 className={styles.Title}> 10 random dogs Images</h1>
            <div className={styles.container}>
              {dogs.slice(0, 10).map((dog, index) => {
                return <Card key={index} title={dog.title} img={dog.img} />
              })}</div>
       </div>
      </Layout>
    </>
  );
};

export default Dogs;

