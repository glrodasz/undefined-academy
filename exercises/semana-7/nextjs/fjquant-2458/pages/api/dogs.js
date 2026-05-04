
export default async function handler(req, res) {
    try {
  
      const response = await fetch("https://dog.ceo/api/breeds/list/all"); 
      const data = await response.json();
      const allDogs = Object.keys(data.message); 
    
      const dogs = await Promise.all(
        allDogs.map(async (bread) => {
          const res = await fetch(`https://dog.ceo/api/breed/${bread}/images/random`);
          const breadIma = await res.json();
          return {
            title: bread.toUpperCase(),
            img: breadIma.message,
          }
        })
      )
  
      res.status(200).json(dogs);
  
    } catch (error) {
      console.log(error);
   }
  }