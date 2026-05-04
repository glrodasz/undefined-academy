const apiUrl = process.env.API_URL || "https://dummyjson.com";

const calculateExtract = (text) => {
  const MAX_EXTRACT_LENGTH = 50;
  const extract = text.split(" ").slice(0, MAX_EXTRACT_LENGTH).join(" ");

  return `${extract} (...)`;
};

const calculateTags = (text) => {
  const MAX_TAGS_LENGTH = 4;
  return text.slice(0, MAX_TAGS_LENGTH);
};

const calculateReadTime = (text) => {
  const WORDS_PER_MINUTE = 200;
  const time = Math.ceil(text.split(" ")?.length / WORDS_PER_MINUTE);

  return `${time} min`;
};

export default async function handler(req, res) {
  const { posts } = await fetch(`${apiUrl}/posts`).then((data) => data.json());

  const mappedPosts = posts.map((post) => ({
    unsplashId: "JSQkuSalhH4",
    unsplashAlt: "Imagen de un post",
    tags: calculateTags(post.tags),
    title: post.title,
    extract: calculateExtract(post.body),
    author: post.author,
    readTime: calculateReadTime(post.body),
    date: post.date,
  }));

  res.status(200).json(mappedPosts);
}
