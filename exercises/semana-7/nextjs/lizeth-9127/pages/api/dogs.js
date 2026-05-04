const getUrlList = async () => {
  const BASE_URL = "https://dog.ceo/api/breeds/image/random/"
  const NUMBER_OF_BREEDS = "15"
  const { message } = await fetch(`${BASE_URL}${NUMBER_OF_BREEDS}`).then( data => data.json())
  return message
}

const getBreedName = url => {
  const regExp = /breeds\/([a-z-]+)\//
  return url.match(regExp)[1].split("-").reverse().join(" ") }

const getDuplicatedBreeds = breedsList => [ ...new Set( breedsList.filter((breed, index) => breedsList.indexOf(breed) !== index) ) ]

const deleteDups = ( dups, dogsArray ) => {
  if( dups.length >= 1){ dups.map( dup => { dogsArray.splice(dogsArray.findIndex( dog => { return dog.breed === dup } ),1) } ) }
}

const spliceDogs = dogs => {
  while( dogs.length > 10 ){
    dogs.splice(0,1) } }

export default async function handler(request, response) {
  try {
    const urlList = await getUrlList()
    const dogs = urlList.map( url => {  return { breed: getBreedName(url), url: url } } )
    const breedsList = dogs.map( dog => { return dog.breed })
    const dups = getDuplicatedBreeds(breedsList)
    deleteDups(dups,dogs)
    spliceDogs(dogs)

    response.status(200).json(dogs)
  } catch (error) {
    console.error(error)
    response.status(500).json({ error: "Fetch failed" })
  }
}
