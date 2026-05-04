import React from 'react';
import {getServerSideProps} from '@/pages/api/dog';
import styles from '@/styles/Home.module.css';

const Home = ({ posts }) => {
  return (
    <div>
      <h1 className={styles.title}>Posts</h1>
      <div className = {styles.container}>
        {posts.map((post) => (
          <div key={post.id}>
            <img src={post.image} alt={post.name} />
            <p>{post.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export { getServerSideProps };
export default Home;
