import React from "react";
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.item}>
        <a href="/skills" className={navData => navData.isActive ? styles.active : styles.item}>Skills </a>
      </div>
      <div className={styles.item}>
        <a href="/portfolio" className={navData => navData.isActive ? styles.active : styles.item}>Portfolio </a>
      </div>
      <div className={styles.item}>
        <a href="/video" className={navData => navData.isActive ? styles.active : styles.item}>Video</a>
      </div>
      <div className={styles.item}>
        <a href="/contact" className={navData => navData.isActive ? styles.active : styles.item}>Contact</a>
      </div>
      <div className={styles.item}>
        <a href="/picture" className={navData => navData.isActive ? styles.active : styles.item}>Picture</a>
      </div>
    </nav>
  )
}
export default Navbar;