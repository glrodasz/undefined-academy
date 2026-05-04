import Image from "next/image";
import styles from '../styles/Home.module.css'
export function Card ({title, img}) {
    return (
        <div className={`${styles.card} `}>
            <h2>{`Breed: ${title}`}</h2>
            <Image src={img} alt={`A ${title} dog `} width={200} height={250} priority />
        </div>
    )
}