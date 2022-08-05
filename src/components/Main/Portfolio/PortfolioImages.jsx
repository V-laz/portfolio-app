import React from "react";
import styles from './Portfolio.module.css';
import { SeasonName } from "../../redux/store";

const PortfolioImages=(props) => {

  let Season=props.PortfolioFoto.winter;
    return (
        <div className={styles.portfolioImg}>
            {Season.map((img) =>
                <img key={img.src} src={img.src} alt="image" className={styles.image} />)}
        </div>
    );
}

export default PortfolioImages;