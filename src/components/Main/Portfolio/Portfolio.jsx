import React from "react";
import styles from './Portfolio.module.css';
import SectionTitle from "../../SectionTitle/SectionTitle";
import PortfolioButton from "./PortfolioButton/PortfolioButton";
import PortfolioImages from "./PortfolioImages";

const Portfolio = (props) => {

    return (
        <div className={styles.portfolioContent}>
            <SectionTitle name="Portfolio" />
            <div className={styles.ButtonSection}>
                <PortfolioButton  name="Winter" />
                <PortfolioButton  name="Spring" />
                <PortfolioButton  name="Summer" />
                <PortfolioButton  name="Autumn" />
            </div>
            <PortfolioImages PortfolioFoto={props.state.PortfolioFoto} />
        </div>
    );
}
export default Portfolio;