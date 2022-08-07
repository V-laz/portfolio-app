import React from "react";
import styles from './Video.module.css';
import VideoImg from './../../videos/videoExempl.mp4';



const VideoPlayer = ({ play }) => {

    return (
        <>
            {play ? <video src={VideoImg} type="video/mp4" className={styles.videoPlayer} autoPlay controls={play} ></video> : <img src="/" />}
        </>
    )
}

export default VideoPlayer;