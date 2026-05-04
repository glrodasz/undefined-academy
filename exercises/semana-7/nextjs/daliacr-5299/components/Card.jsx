import Image from "next/image"
import styles from '@/styles/Home.module.css'
export function Card({title,img}){
    return(
        <div className={`${styles.card}` }>
            <Image className={`${styles.img}` } src={img} alt={` ${title} ` } width={200} height={250} priority />
            <p className={`${styles.titledog}` }>{`Raza: ${title}`}</p>
        </div>
    )
}