import React from 'react';
import styles from './Nav.module.scss';
import BurgerMenuBtn from "./burger/BurgerMenuBtn";
import LanguageChange from "./language/LanguageChange";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Nav = () => {
    return (
        <nav className={styles.menu}>
            <BurgerMenuBtn/>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <AnchorLink href="#about" className={styles.navLink+ ' '+styles.active} offset='100'>
                        Обо мне
                    </AnchorLink>
                </li>
                <li className={styles.navItem}>
                    <AnchorLink href="#experience" className={styles.navLink}>
                        Опыт
                    </AnchorLink>
                </li>
                <li className={styles.navItem}>
                    <AnchorLink href="#skills" className={styles.navLink}>
                        Навыки
                    </AnchorLink>
                </li>
                <li className={styles.navItem}>
                    <AnchorLink href="#portfolio" className={styles.navLink} offset='-25'>
                        Портфолио
                    </AnchorLink>
                </li>
                <li className={styles.navItem}>
                    <AnchorLink href="#hire" className={styles.navLink} offset='-50'>
                        Контакты
                    </AnchorLink>
                </li>
            </ul>
          <LanguageChange active={false}/>
        </nav>
    );
};

export default Nav;