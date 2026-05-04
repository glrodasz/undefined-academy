import { NextResponse } from "next/server";

const DEFAULT_LIST_SIZE = 10;
const BASE_DOGS_URL = "https://dog.ceo/api";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const limit = searchParams.get("limit");
  const page = searchParams.get("page");
  const random = searchParams.get("random");

  const filteredList = await getFilteredBreedList(
    await getAllBreeds(),
    page,
    limit,
    random
  );

  return new NextResponse(JSON.stringify(await getBreedImages(filteredList)), {
    status: 200,
  });
};

export const POST = async (request) => {
  const body = await request.json();
  const newPost = new Post(body);
  console.log(newPost);
  return new NextResponse("Dog has been created", { status: 201 });
};

async function getAllBreeds() {
  const list = await fetch(`${BASE_DOGS_URL}/breeds/list/all`)
    .then((result) => result.json())
    .then((data) => data.message)
    .then((breedList) => Object.getOwnPropertyNames(breedList));
  return list;
}

async function getFilteredBreedList(
  list,
  page = 1,
  pageSize = DEFAULT_LIST_SIZE,
  isRandomRequired
) {
  return isRandomRequired != null
    ? list.sort(() => Math.random() - Math.random()).slice(0, pageSize)
    : list.slice(page * pageSize - pageSize, page * pageSize);
}

async function getBreedImages(breedList) {
  const breedImagesList = breedList.map(async (breed) => {
    return await fetch(`${BASE_DOGS_URL}/breed/${breed}/images/random`)
      .then((result) => result.json())
      .then((data) => ({ name: breed, url: data.message }));
  });
  return await Promise.all(breedImagesList);
}
