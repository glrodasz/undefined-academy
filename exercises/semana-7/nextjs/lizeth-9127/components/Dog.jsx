import styles from '@/components/Dog.module.css'

const Dog = ( { breed, url } ) => {
    return (
    <>
    <div className={styles.container}>
    <h1 className={styles.breed}>{ breed }</h1>
<img className={styles.dogpicture} src={ url } alt={`A cute ${breed}'s picture`} width={200} height={200}/>
    </div>
    </> )
}

export default Dog