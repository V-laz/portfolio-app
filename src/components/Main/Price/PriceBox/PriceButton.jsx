import React from "react";
import Standart from "./Standart";
import Premium from "./Premium";
import Gold from "./Gold";
import styles from './PriceBox.module.css';

const PriceButton = () => {
    return (
        <div className={styles.priceButton}>
          
            <button className={styles.orderShooting}>Order shooting</button>
            

          

         </div>
    )
}
export default PriceButton ;