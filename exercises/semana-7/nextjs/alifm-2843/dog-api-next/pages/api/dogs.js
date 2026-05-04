export default async function handler(req, res) {
    try {
  
      const response = await fetch("https://dog.ceo/api/breeds/list/all"); 
      const data = await response.json();
      const allDogs = Object.keys(data.message); 
    
      const dogs = await Promise.all(
        allDogs.map(async (breed) => {
          const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
          const breedImage = await res.json();
          return {
            breedName: breed.toUpperCase(),
            breedImage: breedImage.message,
          }
        })
      )
  
      res.status(200).json(dogs);
  
    } catch (error) {
       res.json(error);
    res.status(405).end();
   }
  }