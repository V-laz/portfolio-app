import React from "react";
import styles from './PortfolioButton.module.css';



const PortfolioButton = (props) => {
        
    let setViev =()=>{
        alert(props.name)
    }

    return (

        <div className={styles.portfolioButton}>
            <button onClick={setViev} type={props.name}> {props.name} </button>

        </div>
        

    )
}

export default PortfolioButton;