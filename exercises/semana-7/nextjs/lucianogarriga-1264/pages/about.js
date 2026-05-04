import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>DogApp | About</title>
        <meta name="keywords" content="dogs" />
      </Head>
      <div>
        <h1 className="main-title">About</h1>
        <p>In this section you can learn more about us.</p> 
        <p>This project has been developed by Luciano.</p>
      </div>
    </>
  );
};

export default About;
