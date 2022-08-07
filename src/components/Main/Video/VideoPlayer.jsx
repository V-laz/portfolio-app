import React from "react";
import styles from './Video.module.css';
import VideoImg from './../../videos/videoExempl.mp4';
import imgFon from './../../images/foto/videoPlayer.png';



const VideoPlayer = ({ play, setPlay }) => {

    return (
        <>
            {play ? <video onClick={(() => setPlay(!play))} src={VideoImg}
             type="video/mp4" className={styles.videoPlayer} autoPlay controls={play} >

             </video> : <img src={imgFon} alt="fon" className={styles.videoPlayer} />}
        </>
    )
}

export default VideoPlayer;