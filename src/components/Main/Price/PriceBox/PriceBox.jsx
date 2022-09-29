import React from "react";
import Standart from "./Standart";
import Premium from "./Premium";
import Gold from "./Gold";
import styles from './PriceBox.module.css';

const PriceBox = () => {
    return (
        <div className={styles.priceContent}>
          
            <Standart/>
            <Premium/>
            <Gold/>
            

          

         </div>
    )
}
export default PriceBox ;