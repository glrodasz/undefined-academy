export default async (req, res) => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    const allBreeds = Object.keys(data.message);
    
    const randomBreeds = [];
    
    while (randomBreeds.length < 10) {
      const randomIndex = Math.floor(Math.random() * allBreeds.length);
      const breed = allBreeds[randomIndex];
      
      if (!randomBreeds.includes(breed)) {
        randomBreeds.push(breed);
      }
    }
    
    const dogs = await Promise.all(
      randomBreeds.map(async (breed) => {
        const breedResponse = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const breedData = await breedResponse.json();
        return {
          name: breed,
          image: breedData.message,
        };
      })
    );
    
    res.status(200).json(dogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las razas de perros.' });
  }
};

