import React from "react";
import styles from './PriceBox.module.css';
import PriceButton from "./PriceButton";

const Gold = () => {
    return (
        <div className={styles.priceList}>
          
            <a className={styles.priseType}>Gold</a>
            <a className={styles.price}>1000$</a>
            <a className={styles.priceInfo}>
                Three locations or more <br/>
            300 photos in color<br/>
            50 photos in retouch<br/>
            Readliness 1 week<br/>
             Make up, visage, hairstyle</a>
             <PriceButton/>
          

         </div>
    )
}
export default Gold ;