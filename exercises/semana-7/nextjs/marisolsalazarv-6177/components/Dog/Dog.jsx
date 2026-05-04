import Card from "@/components/Card";
import React, { useEffect, useState } from "react";

function Dog() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async (res, req) => {
      try {
        const dogs = await fetch("/api/dogs").then((res) => res.json());
        setDogs(dogs);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {dogs.map((dog, index) => (
        <Card index={index} img={dog.img} title={dog.title} />
      ))}
    </>
  );
}

export default Dog;
