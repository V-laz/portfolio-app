import React from "react";
import styles from './Portfolio.module.css';


const PortfolioImages = ({ view,
    PortfolioFotoWinter,
    PortfolioFotoSpring,
    PortfolioFotoSummer,
    PortfolioFotoAutumn }) => {

    const Season = view==='winter'? PortfolioFotoWinter:
    view==='summer'? PortfolioFotoSummer:
    view==='spring'? PortfolioFotoSpring:
    PortfolioFotoAutumn ;
    return (
        <div className={styles.portfolioImg}>
            {Season.map((img) =>
                <img key={img.src} src={img.src} alt="image" className={styles.image} />)}
        </div>
    );
}

export default PortfolioImages;