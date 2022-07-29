import React from "react";
import imageBacground from './../images/foto/bg.png';
import styles from './BacgraundImage.module.css';

const BacgraundImage =()=> {
    return (
        <img src={imageBacground} alt="background" className={styles.imagesBackground} />
    )
}
export default BacgraundImage;