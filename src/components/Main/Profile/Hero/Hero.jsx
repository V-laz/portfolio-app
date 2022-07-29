import React from "react";
import styles from './Hero.module.css';
const Hero = () => {
    return (
        <div className={styles.HeroContent}>
            <div className={styles.HeroName}>Alexa Rise</div>
            <div className={styles.hetoText}>
                Save sincere emotions, romantic feelings
                and happy moments of life together with
                professional photographer Alexa Rise
            </div>
            <button className={styles.HeroButton}>Hire me</button>
        </div>
    )
}
export default Hero;