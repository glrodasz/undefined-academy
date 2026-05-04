export const fetchDogsBreeds = async () => {
  const dogsBreedsFetchURL = await fetch("https://dog.ceo/api/breeds/list/all");
  const jsonDogsBreedsFetchURL = await dogsBreedsFetchURL.json();
  const dogsBreed = Object.keys(jsonDogsBreedsFetchURL.message);

  return dogsBreed;
};

export const fetchDogsImages = async (breed) => {
  const dogsBreedsImagesFetchURL = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  const jsonDogsBreedsImagesFetchURL = await dogsBreedsImagesFetchURL.json();

  return {
    name: breed,
    image: jsonDogsBreedsImagesFetchURL.message,
  };
};

export default async function getDogs() {
  const dogsBreeds = await fetchDogsBreeds();
  const dogs = [];

  while (dogs.length < 10) {
    const breed = dogsBreeds[Math.floor(Math.random() * dogsBreeds.length)];

    if (!dogs.find((dog) => dog.name === breed)) {
      dogs.push(await fetchDogsImages(breed));
    }
  }

  return Promise.all(dogs);
}
