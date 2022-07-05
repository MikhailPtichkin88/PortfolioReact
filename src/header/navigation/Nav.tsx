import React from 'react';
import styles from './Nav.module.scss';
import BurgerMenuBtn from "./burger/BurgerMenuBtn";
import LanguageChange from "./language/LanguageChange";


const Nav = () => {
    return (
        <nav className={styles.menu}>
            <BurgerMenuBtn/>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <a href="#" className={styles.navLink}>
                        Обо мне
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="#" className={styles.navLink}>
                        Опыт
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="#" className={styles.navLink}>
                        Навыки
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="#" className={styles.navLink}>
                        Портфолио
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="#" className={styles.navLink}>
                        Контакты
                    </a>
                </li>
            </ul>
          <LanguageChange active={false}/>
        </nav>
    );
};

export default Nav;