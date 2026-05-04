import Link from 'next/link'
import styles from "../styles/Home.module.css"
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>DogApp | Home</title>
      <meta name='keywords' content='dogs'/>
    </Head>
      <div> 
       <h1 className={styles.title}>Homepage</h1> 
       <p className={styles.text}>Welcome to the homepage of the DogApp.</p>
       <p>Here you can find a lot of dogs breeds.</p>
      <br/>
       <Link href="/dogs"> 
        <span className={styles.btn}>See Dogs listing here</span>
       </Link>
   
      </div>
    </>
  )
}
