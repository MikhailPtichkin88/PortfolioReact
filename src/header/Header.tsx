import React from 'react';
import styles from './Header.module.css'
import Nav from "../nav/Nav";
import styleContainer from "../common/styles/Container.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styleContainer.containerLine}>
                <Nav/>
            </div>
        </header>
    );
};

export default Header;