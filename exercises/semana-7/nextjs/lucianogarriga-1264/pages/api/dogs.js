export default async function handler(req, res) {

  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all"); 
    const data = await response.json();
    const allBreads = Object.keys(data.message); 

    console.log(allBreads); 

    const dogs = await Promise.all(
      allBreads.map(async (bread) => {
        const res = await fetch(`https://dog.ceo/api/breed/${bread}/images/random`);
        const breadData = await res.json();
        return {
          title: bread.toUpperCase(),
          img: breadData.message,
        }
      })
    )

    res.status(200).json(dogs);

  } catch (err) {
    console.log(err);
  }
}
