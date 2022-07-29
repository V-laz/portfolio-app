import React from "react";
import styles from './Header.module.css';
import LogoImage from './Logo/LogoImage';
import Navbar from './Navbar/NavBar';
import Languagechange from './Languagechange/Languagechange';
const Header = () => {
    return (
        <header className={styles.appHeader}> 
            <LogoImage />           
            <Navbar/>
            <Languagechange />
        </header>
    )
}
export default Header;