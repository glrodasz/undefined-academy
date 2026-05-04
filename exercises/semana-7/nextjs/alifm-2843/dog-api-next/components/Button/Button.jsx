import React from 'react'
import styles from "./Button.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaw} from '@fortawesome/free-solid-svg-icons'


const Button = (onClick) => {

    const handleClick = (event) => {
        event.preventDefault();
        window.location.reload(true);
       
        
    };
    
  return (
    <button className={styles.button} onClick={handleClick}
    
        ><FontAwesomeIcon icon={faPaw} className={styles.buttonIcon}/></button>
  )
}

export default Button

