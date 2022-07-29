import React from "react";
import styles from './SectionTitle.module.css';


const SectionTitle = (props) => {
    
    return (

                <div className={styles.sectionTitle}>
                    <span>{props.name}<br/></span>
                </div>

    )
}
export default SectionTitle;