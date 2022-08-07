import React, {useState}from "react";
import styles from './Video.module.css';
import SectionTitle from "../../SectionTitle/SectionTitle";
import VideoPlayer from "./VideoPlayer";
import VideoButton from "./VideoButton";

const Video = (props) => {
    const [views,playVideo] =useState('stops')
    return (
        <div className={styles.videoContent}>
            <SectionTitle name="Video" />
            <div ClassName={styles.VideoPlayer}>

                <VideoPlayer view = {views}
                 VideoPlayerVideoStart={props.state.VideoList.start}
                 VideoPlayerVideoStop={props.state.VideoList.stop}/>
                 <VideoButton playVideo={playVideo}name="starts"/>
                 <VideoButton playVideo={playVideo}name="stops"/>

            </div>
        </div>
    )
}
export default Video;