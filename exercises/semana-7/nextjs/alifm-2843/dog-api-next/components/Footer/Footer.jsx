import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShieldDog} from '@fortawesome/free-solid-svg-icons'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
         <FontAwesomeIcon icon={faShieldDog} className={styles.footerIcon}/>
    <p className='footer-paragraph'>Info gotten from:</p> <a href='https://dog.ceo/dog-api/'>Dog API</a> 
    
   
    </div>
  )
}

export default Footer