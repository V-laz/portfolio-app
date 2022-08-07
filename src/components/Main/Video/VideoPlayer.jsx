import React from "react";
import styles from './Video.module.css';
import VideoImg from './../../videos/videoExempl.mp4';



const VideoPlayer = () => {
 
    return (
        <video src={VideoImg} type="video/mp4" className={styles.videoPlayer} controls ></video>     
    )
}

export default VideoPlayer;