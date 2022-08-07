import React, {useState}from "react";
import styles from './Video.module.css';
import SectionTitle from "../../SectionTitle/SectionTitle";
import VideoPlayer from "./VideoPlayer";
import VideoButton from "./VideoButton";

const Video = (props) => {
    const [view,playVideo] =useState('stop')
    return (
        <div className={styles.videoContent}>
            <SectionTitle name="Video" />
            <div ClassName={styles.VideoPlayer}>

                <VideoPlayer view = {view}
                 VideoPlayerVideoStart={props.state.VideoList.start}
                 VideoPlayerVideoStop={props.state.VideoList.stop}/>
                 <VideoButton playVideo={playVideo}name="start"/>
                 <VideoButton playVideo={playVideo}name="stop"/>

            </div>
        </div>
    )
}
export default Video;