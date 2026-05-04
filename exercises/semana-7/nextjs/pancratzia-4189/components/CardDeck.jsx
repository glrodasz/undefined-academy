import React from "react";
import Card from "@/components/Card";
import { useState, useEffect } from "react";


export default function CardDeck() {

  const [dogs, setDogs] = useState([]);
  useEffect(() => {

    const getDogs = async () => {
      const result = await fetch('/api/dogs')
      .then(res => res.json());
      setDogs(result);
    }
    getDogs();
    
  }, []);

  return (
    <main className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
       
      {dogs.map((dog, index) => (
          <Card key={index} title={dog.name} image={dog.image} id={index} />
        ))}
        
      </div>
    </main>
  );
}
