import React from "react";
import styles from './Price.module.css';
import SectionTitle from "../../SectionTitle/SectionTitle";
import PriceBox from "./PriceBox/PriceBox";
const Price = () => {
    return (
        <div className={styles.content}>
            <SectionTitle name="Price"/> 
            <PriceBox/>
                      
         </div>
    )
}
export default Price ;