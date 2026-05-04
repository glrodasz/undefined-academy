
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDog} from '@fortawesome/free-solid-svg-icons'

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <FontAwesomeIcon className={styles.headerIcon} icon={faDog} /> 
    <h1>Dog breeds on NextJs</h1>
    </div>
  )
}

export default Header