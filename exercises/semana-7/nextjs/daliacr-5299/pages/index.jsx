import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/Card';
const inter = Inter({ subsets: ['latin'] })
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
        <title>My Dogs</title>
        <meta name="description" content="My Dogs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main>
        <h1 className={styles.title}>Razas de perros</h1>
        <div className={styles.main}>
            {dogs.map((dog,index)=>{
                return <Card key={index} title={dog.title} img={dog.img} />
            })}
        </div>
    </main>
    </>
  )
}

