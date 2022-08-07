import React from "react";
import styles from './Video.module.css';



const VideoPlayer = ({view,VideoListStop,VideolistStart}) => {
    const VideoImg = view==="stops"?VideoListStop:
    VideolistStart;


    return (
        <video src={VideoImg} type="video/mp4" className={styles.videoPlayer}  ></video>     
    )
}

export default VideoPlayer;