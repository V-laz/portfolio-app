import React from "react";
import styles from './PortfolioButton.module.css';

const PortfolioButton = (props) => {
    return (
 
            <div className={styles.portfolioButton}>
                <button onClic="changeImage">{props.name}</button>

            </div>          
        
    )
}
export default PortfolioButton ;