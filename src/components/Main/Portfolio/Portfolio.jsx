import React from "react";
import styles from './Portfolio.module.css';
import SectionTitle from "../../SectionTitle/SectionTitle";
import PortfolioButton from "./PortfolioButton/PortfolioButton";



function Portfolio(props) {
    



    return (
        <div className={styles.portfolioContent}>
            <SectionTitle name="Portfolio" />
            <div className={styles.ButtonSection}>
                <PortfolioButton name="Winter" />
                <PortfolioButton name="Spring" />
                <PortfolioButton name="Summer" />
                <PortfolioButton name="Autumn" />
            </div>
            
            <div className={styles.portfolioImg}>
            {props.state.PortfolioFoto.map((img) =>
             <img key={img.src} src={img.src} alt="image" className={styles.image}/>)}
             
            </div>
            
            

        </div>
    );
}
export default Portfolio ;