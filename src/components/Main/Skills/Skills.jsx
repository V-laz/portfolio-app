import React from "react";
import styles from './Skills.module.css';
import SectionTitle from "../../SectionTitle/SectionTitle";
import SectionSkillsItem from "./SectionSkillsItem/SectionSkillsItem";
import { VideoSvg } from '../../SvgComponent/VideoSvg';
import { ImageSvg } from "../../SvgComponent/Image";
import { CameraSvg } from '../../SvgComponent/CameraSvg';
import { MicSvg } from '../../SvgComponent/MicSvg';
const Skills = () => {
    return (
        <div className={styles.skillsContent}>
            <SectionTitle name='Skills' />
            <div className={styles.skillsItem}>
                <div className={styles.Item}>
                    <SectionSkillsItem name={<CameraSvg />} />
                    <h2>Digital photography</h2>
                    <h4>High-quality photos in the studio and on the nature</h4>
                </div>
                <div className={styles.Item}>
                    <SectionSkillsItem name={<VideoSvg />} />
                    <h2>Video shooting</h2>
                    <h4>Capture your moments so that they always stay with you</h4>
                </div>
                <div className={styles.Item}>
                    <SectionSkillsItem name={<ImageSvg />} />
                    <h2>Retouch</h2>
                    <h4>I strive to make photography surpass reality</h4>
                </div>
                <div className={styles.Item}>
                    <SectionSkillsItem name={<MicSvg />} />
                    <h2>Audio</h2>
                    <h4>Professional sounds recording for video, advertising, portfolio</h4>
                </div>
            </div>
        </div>
    )
}
export default Skills;