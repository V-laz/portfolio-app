import React from "react";
import styles from './Video.module.css';
import { ReactComponent as Logo } from './../../images/icon/PlayHover.svg'
const VideoButton = ({ setPlay }) => {

    return (
        <Logo className={styles.sidebarLogo} type="button" onClick={(() => setPlay(true))} />

    )
}
export default VideoButton;