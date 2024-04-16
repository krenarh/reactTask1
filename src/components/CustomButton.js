import React from "react";
import styles from'./cityTemperature.module.css';


export default function CustomButton({title, onSelect}){
    return(
        <button className={styles.transparentButton} onClick={onSelect}>{title}</button>
        )
        
}