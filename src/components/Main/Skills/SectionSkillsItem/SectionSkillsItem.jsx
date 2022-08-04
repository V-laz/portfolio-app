import React from "react";
import styles from './SectionSkillsItem.module.css';
const SectionSkillsItem = (props) => {
    return (
        <div className={styles.ItemSvg}>
            {props.name}
        </div>
    )
}
export default SectionSkillsItem;