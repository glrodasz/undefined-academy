const calculateReadTime = (text) => {
  const WORDS_PER_MINUTE = 200;
  const time = Math.ceil(text.split(" ")?.length / WORDS_PER_MINUTE);

  return `${time} min`;
};

export default async function handler(req, res) {
  const { posts } = await fetch("https://dummyjson.com/posts").then(
    (data) => data.json()
  );

  const mappedPosts = posts.map((post) => ({
    unsplashId: "JSQkuSalhH4",
    unsplashAlt: "Imagen de un post",
    tags: post.tags,
    title: post.title,
    extract: post.body,
    author: "JSON Placeholder",
    readTime: calculateReadTime(post.body),
    date: "2023-05-04",
  }));

  res.status(200).json(mappedPosts);
}
