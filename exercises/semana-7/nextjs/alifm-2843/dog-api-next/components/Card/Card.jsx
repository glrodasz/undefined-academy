
import styles from "./Card.module.scss";

const Card = ({
    breedName,
    breedImage,
    isExtended = false,
  
    //${isExtended ? styles.extended : ""}`
    
}) => {
  return (
    
    <div className={styles.cardContent}>
        <section >
            <h3 className={styles.breedNameTitle}>{breedName}</h3>
        </section>
        <section >
            <img className={styles.breedImage} src={breedImage} alt={`A ${breedName} dog`} />
        </section>
    </div>
   
  )
}

export default Card