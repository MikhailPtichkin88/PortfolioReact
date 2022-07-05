import React from 'react';
import styles from './Header.module.scss'
import Nav from "./navigation/Nav";



const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
               <Nav/>
            </div>
        </header>
    );
};

export default Header;