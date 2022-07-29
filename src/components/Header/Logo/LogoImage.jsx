import React from "react";
import styles from './LogoImage.module.css';
import { ReactComponent as Logo } from './../../images/icon/logo.svg'
const LogoImage = () => {
    return (
        <div className={styles.logoimg}>
            <Logo className={styles.sidebarLogo} />
        </div>
    )
}
export default LogoImage;