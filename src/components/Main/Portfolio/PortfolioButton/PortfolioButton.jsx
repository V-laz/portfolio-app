import React from "react";
import styles from './PortfolioButton.module.css';



const PortfolioButton = ({ name, setView, bottonName }) => {


    return (

        <div className={styles.portfolioButton}>
            <button onClick={(() => setView(name))} type={name}> {bottonName} </button>

        </div>


    )
}

export default PortfolioButton;