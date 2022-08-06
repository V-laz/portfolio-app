import React, { useState } from "react";
import styles from './Portfolio.module.css';
import SectionTitle from "../../SectionTitle/SectionTitle";
import PortfolioButton from "./PortfolioButton/PortfolioButton";
import PortfolioImages from "./PortfolioImages";

const Portfolio = (props) => {
    const [view,setView] =useState('summer')

    return (
        <div className={styles.portfolioContent}>
            <SectionTitle name="Portfolio" />
            <div className={styles.ButtonSection}>
                <PortfolioButton setView={setView} bottonName="Winter" name="winter" />
                <PortfolioButton setView={setView} bottonName="Spring" name="spring" />
                <PortfolioButton setView={setView} bottonName="Summer" name="summer" />
                <PortfolioButton setView={setView} bottonName="Autumn" name="autumn"/>
            </div>
            <PortfolioImages view = {view}
                PortfolioFotoWinter={props.state.PortfolioFoto.winter}
                PortfolioFotoSummer={props.state.PortfolioFoto.summer}
                PortfolioFotoSpring={props.state.PortfolioFoto.spring}
                PortfolioFotoAutumn={props.state.PortfolioFoto.autumn}
                />
        </div>
    );
}
export default Portfolio;