import React from "react";
import styles from './Profile.module.css';
import Hero from "./Hero/Hero";
import BacgraundImage from "../../BackgroundImage/BacgraundImage";
const Profile = () => {
    return (
        <div className={styles.content}>
            <BacgraundImage/>
            <Hero />
        </div>
    )
}
export default Profile;