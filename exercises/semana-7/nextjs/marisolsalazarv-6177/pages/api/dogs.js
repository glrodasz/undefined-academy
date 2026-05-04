export default async function handler(req, res) {
  try {
    const limit = 12;
    const URL = await fetch(`https://dog.ceo/api/breeds/image/random/${limit}`);
    const data = await URL.json();
    const imgDogs = data.message;
    const dogs = imgDogs.map((image) => {
      const pattern = /breeds\/(.*?)\//;
      const match = image.match(pattern);
      const breed = match[1].split("-").reverse().join(" ");
      return {
        title: breed,
        img: image,
      };
    });

    res.status(200).json(dogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
