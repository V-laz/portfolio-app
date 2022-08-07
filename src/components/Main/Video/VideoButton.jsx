import React, {useState}from "react";
import styles from './Video.module.css';
import { ReactComponent as Logo } from './../../images/icon/PlayHover.svg'
const VideoButton = ({name,  playVideo}) => {
   
    return (


                <Logo className={styles.sidebarLogo} type="button" onClick={(() => playVideo(name))}/>

    )
}
export default VideoButton;