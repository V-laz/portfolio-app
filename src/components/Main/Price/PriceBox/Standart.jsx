import React from "react";
import styles from './PriceBox.module.css';
import PriceButton from "./PriceButton";

const Standart = () => {
    return (
        <div className={styles.priceList}>

            <a className={styles.priseType}>Standart</a>
            <a className={styles.price}>500$</a>
            <a className={styles.priceInfo}>
                One location <br />
                120 photos in color<br />
                12 photos in retouch<br />
                Readliness 2-3 weeks<br />
                Make up, visage</a>
                <PriceButton/>


        </div>
    )
}
export default Standart;