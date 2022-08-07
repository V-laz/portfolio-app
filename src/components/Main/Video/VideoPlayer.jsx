import React from "react";
import styles from './Video.module.css';



const VideoPlayer = ({views,VideoPlayerVideoStop,VideoPlayerVideoStart}) => {
    const VideoImg = views==="stops"?VideoPlayerVideoStop:
    VideoPlayerVideoStart;


    return (
        <video src={VideoImg} type="video/mp4" className={styles.videoPlayer}  ></video>     
    )
}

export default VideoPlayer;