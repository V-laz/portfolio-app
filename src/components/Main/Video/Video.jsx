import React, { useState } from "react";
import styles from './Video.module.css';
import SectionTitle from "../../SectionTitle/SectionTitle";
import VideoPlayer from "./VideoPlayer";
import VideoButton from "./VideoButton";

const Video = (props) => {
    const [play, setPlay] = useState(false)
    return (
        <div className={styles.videoContent}>
            <SectionTitle name="Video" />
            <div ClassName={styles.VideoPlayer}>

                <VideoPlayer play={play}
                    setPlay={setPlay}
 />
                {!play && <VideoButton setPlay={setPlay} play={play} />}

            </div>
        </div>
    )
}
export default Video;