import React from "react";
import styles from './Video.module.css';



const VideoPlayer = ({state,view,VideoList}) => {
    const VideoList = view===stop?VideoListStop:
    VideolistStart;


    return (
        <video src={state.VideoList.start} type="video/mp4" className={styles.videoPlayer}  ></video>     
    )
}

export default VideoPlayer;