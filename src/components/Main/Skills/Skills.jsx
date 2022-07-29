import React from "react";
import styles from './Skills.module.css';
import SectionTitle from "../../SectionTitle/SectionTitle";



const Skills = () => {
    
    return (
        <div className={styles.skillsContent}>
            
                <SectionTitle name='Skills'/>
                <div className={styles.skillsItem}>
                    <div className={styles.Item}>
                        <a>1</a>
                        <p>wwe</p>
                        <p>klgbhhjsr</p>
                    </div>
                    <div className={styles.Item}>1</div>
                    <div className={styles.Item}>1</div>
                    <div className={styles.Item}>1</div>

                </div>

        </div>
    )
}
export default Skills;