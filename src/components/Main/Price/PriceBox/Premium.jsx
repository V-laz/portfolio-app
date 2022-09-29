import React from "react";
import styles from './PriceBox.module.css';
import PriceButton from "./PriceButton";

const Premium = () => {
    return (
        <div className={styles.priceList}>

            <a className={styles.priseType}>Premium</a>
            <a className={styles.price}>700$</a>
            <a className={styles.priceInfo}>
                One or two locations <br />
                200 photos in color<br />
                20 photos in retouch<br />
                Readliness 1-2 weeks<br />
                Make up, visage</a>
                <PriceButton/>


        </div>
    )
}
export default Premium;