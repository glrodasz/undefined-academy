import Head from "next/head"; 
import Card from "@/components/Card";
import { useEffect, useState } from "react";

const Dogs = () => {

  const [dogs, setDogs] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const dogs = await fetch("/api/dogs")
          .then((res) => res.json())
        setDogs(dogs)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData()
  },[])

  return (
    <>
      <Head>
        <title>DogApp | Dog List</title>
        <meta name="keywords" content="dogs" />
      </Head>
      <div className="app">
        
      <h1 className="main-title"> List of 10 random dogs</h1>
        {dogs.slice(0,10).map((dog,index) =>{
          return <Card key={index} title={dog.title} img={dog.img} /> 
        })}
      </div>
    </>
  );
};

export default Dogs;
