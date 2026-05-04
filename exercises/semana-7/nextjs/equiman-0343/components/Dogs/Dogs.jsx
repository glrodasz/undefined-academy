import { useState, useEffect } from "react"
import Image from 'next/image'
import styles from '@/components/Dogs/Dogs.module.css'

const Dogs = () => {
    const [dogs, setDogs] = useState([])
    useEffect(() => {
        const getDogs = async () => {
            const result = await fetch('/api/dogs')
                .then((response) => response.json())
            setDogs(result)
        }
    getDogs()
    }, [])

    return (
        <>
            <h1>Dogs Breads</h1>

            <div className={styles.grid}>

            {
                dogs.map((dog) => {
                    const key = Object.keys(dog)[0]

                    return (
                        <>
                            <div className={styles.card} key={key}>
                                <h2>{ key }</h2>

                                <Image
                                    className={styles.logo}
                                    src={dog[key]}
                                    alt={key}
                                    width={235}
                                    height={235}
                                />
                            </div>
                        </>
                    )
                })
                }
            </div>

        </>
    )
}
export default Dogs