import { get } from "@/utils/http";
import { randomizeList } from "@/utils/list";

const MAX_BREEDS = 10;
const SUCCESS_STATUS = "fulfilled";
const DOG_API = "https://dog.ceo/api";

const getAllBreeds = async () => {
  const { message } = await get(`${DOG_API}/breeds/list`);
  return message;
};

const getBreedImage = async (breed) => {
  const { message } = await get(`${DOG_API}/breed/${breed}/images/random`);
  return message;
};

const formatData = async (breed) => {
  const image = await getBreedImage(breed);
  return { breed, image };
};

const getFormatBreeds = async (breeds) => {
  const promises = breeds.map((breed) => formatData(breed));
  const resolvedPromises = await Promise.allSettled(promises);
  const successPromises = resolvedPromises
    .filter(({ status }) => status === SUCCESS_STATUS)
    .map(({ value }) => value);
  return successPromises;
};

export default async function handler(_, res) {
  try {
    const allBreeds = await getAllBreeds();
    const randomizedBreeds = randomizeList(allBreeds).slice(0, MAX_BREEDS);
    const breeds = await getFormatBreeds(randomizedBreeds);
    res.status(200).json({ breeds });
  } catch (error) {
    res.status(500).json("Se ha presentado un error");
  }
}
