import React from "react";
import styles from './Video.module.css';
import VideoImg from './../../videos/videoExempl.mp4';



const VideoPlayer = ({ play, VideoPlayerVideoStop }) => {

    return (
        <>
            {play ? <video src={VideoImg} type="video/mp4" className={styles.videoPlayer} autoPlay controls={play} ></video> : <img src={'src/images/spring/photo6.avif'} className={styles.videoPlayer} />}
        </>
    )
}

export default VideoPlayer;