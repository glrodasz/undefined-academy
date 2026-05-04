import Link from "next/link";
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return(
        <nav className={styles.header}>
            <div>
            <h1>DogApp</h1>
            </div>
            <div className={styles.navigation}>
                <Link href="/">Home</Link> 
                <Link href="/about">About</Link> 
                <Link href="/dogs">Dogs</Link> 
            </div>
        </nav>
    )
}

export default Navbar;