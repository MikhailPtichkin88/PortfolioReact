import React from 'react';
import styles from './Nav.module.css'


const Nav = () => {
    return (
        <div className={styles.nav}>
            <a className={styles.link} href="">Главная</a>
            <a className={styles.link} href="">Скиллы</a>
            <a className={styles.link} href="">Работы</a>
            <a className={styles.link} href="">Контакты</a>
        </div>
    );
};

export default Nav;