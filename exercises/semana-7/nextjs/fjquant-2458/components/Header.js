import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
        <Link href="/">
          <Image width={150} height={100} src="/dog-face-emoji-clipart-original.svg" alt="imagen perrito" placeholder="empty"/>
        </Link>
        <nav className={styles.navegacion}>
          <Link href="/" >Inicio</Link>
          <Link href="https://dog.ceo/dog-api/" >Api Dog</Link>
          <Link href="https://nextjs.org/" >Next Js</Link>
        </nav>
        </div>
      </div>

    </header>
  )
}

export default Header