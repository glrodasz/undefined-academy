export const getServerSideProps = async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/10');
    const data = await response.json();

    const posts = data.message.map((image, index) => ({
      id: index,
      image,
      name: image.split('/')[4],
    }));

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        posts: [],
      },
    };
  }
}

