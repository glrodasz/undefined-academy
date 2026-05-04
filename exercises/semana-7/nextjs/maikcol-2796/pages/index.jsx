import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Card } from '@/components/Card'
import styles from '@/styles/Home.module.css'

export default function Home() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dogs = await fetch("/api/dogs").then((res) => res.json())
        setDogs(dogs)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Head>
        <title>Random dogs</title>
        <meta name="description" content="Random dog cards" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Random dogs</h1>
        <div className={styles.grid}>
          {dogs.map((dog, index) => {
            return <Card key={index} title={dog.title} img={dog.img} />
          })}
        </div>
      </main>
    </>
  )
}
