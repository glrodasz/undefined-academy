// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const URL_BREED_LIST = "https://dog.ceo/api/breeds/list/all"

async function handler(req, res) {
  const breedList = await getBreedList();
  const breedListFiltered = await filterBreedList(breedList);
  const breedImagesList = await getBreedImages(breedListFiltered);
  res.status(200).json(breedImagesList);
}

async function getBreedList(){
  const breedList = await fetch(URL_BREED_LIST)
  .then(result=>result.json())
  .then(data=>data.message)
  
  return breedList;
}

async function filterBreedList(list){
  const breedList = await Object.keys(list).map((key) => {
    if (list[key].length === 0) {
      return [key]
    }else{
      const randomSubBreed = getRandomNumber(list[key].length);
      return [key, list[key][randomSubBreed]];
    }
  })
  .sort(() => Math.random() - 0.5)
  .slice(0, 12);

  return breedList;
}

function getRandomNumber(max){
  return Math.floor(Math.random() * max);
}

async function getBreedImages(breeds){
  const breedImagesList = breeds.map(async (breed)=>{
    let breedLink, breedName;
    if(breed.length > 1){
      breedLink = breed[0] + "/" + breed[1]
      breedName = breed[1] + " " + breed[0]
    }else{
      breedLink = breed[0]
      breedName = breed[0]
    }

    return await fetch(`https://dog.ceo/api/breed/${breedLink}/images/random`)
    .then(result=>result.json())
    .then(data=>[breedName, data.message]);
  })
  
  const result = await Promise.all( breedImagesList );
  return result;
}

export default handler;