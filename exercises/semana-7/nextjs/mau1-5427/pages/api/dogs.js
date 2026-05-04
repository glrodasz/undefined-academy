// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// get 10 random dog links from the API
const getDogsLink = async () => {
  const links = await fetch("https://dog.ceo/api/breeds/image/random/10")
        .then(data => data.json());
  return links;
}

/* extract the breed of each link
  ej: "https://images.dog.ceo/breeds/ -> {bulldog-boston} <- /n02096585_4321.jpg"
*/
const getDogsBreed = async (links) => {
  const rawBreedArray = links.map((link) => {
    return link.split("/")[4];
  });
  const breed = rawBreedArray.map((raw) => {
    return raw.split("-").reverse().join(" ");
  })
  return breed;
}

// Create a subarray for each dog that contains its image and breed
const joinImgAndBreed = async (links, breed) => {
  const joined = links.map((link, i) => {
    return [link, breed[i]]
  })
  return joined
}

const handler = async (req, res) => {
    try {
      let dogLinks = await getDogsLink();
      let dogBreeds = await getDogsBreed(dogLinks.message);
      let imgAndBreed = await joinImgAndBreed(dogLinks.message, dogBreeds);

      return res.status(200).json(imgAndBreed);
    } catch (e) {
      console.log(e);
    }
}

export default handler;
