import React, {useEffect, useState} from 'react';
import styles from './Nav.module.scss';
import BurgerMenuBtn from "./burger/BurgerMenuBtn";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {SocialItem} from "../../common/components/socialItem/SocialItem";
import sprite from "../../common/images/footer/footerSprite.svg";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleBurgerMenuHandler = (isOpen: boolean) => setIsOpen(isOpen)
    const onClickLinkHandler = () => setIsOpen(false)
    const active = isOpen ? ` ${styles.active}` : ""

    useEffect(() => {
        window.addEventListener('scroll', onClickLinkHandler, {once: true});
        return () => {
            window.removeEventListener('scroll', onClickLinkHandler,)
        }
    })

    return (
        <nav className={styles.menu}>
            <BurgerMenuBtn isOpen={isOpen} setIsOpen={toggleBurgerMenuHandler}/>
            <ul className={styles.navList + active} onScroll={() => setIsOpen(false)}>
                <li className={styles.navItem}>
                    <AnchorLink onClick={onClickLinkHandler} href="#about"
                                className={styles.navLink + ' ' + styles.active} offset='100'>
                        Обо мне
                    </AnchorLink>
                </li>
                <li className={styles.navItem}>
                    <AnchorLink onClick={onClickLinkHandler} href="#experience" className={styles.navLink}>
                        Опыт
                    </AnchorLink>
                </li>
                <li className={styles.navItem}>
                    <AnchorLink onClick={onClickLinkHandler} href="#skills" className={styles.navLink}>
                        Навыки
                    </AnchorLink>
                </li>
                <li className={styles.navItem}>
                    <AnchorLink onClick={onClickLinkHandler} href="#portfolio" className={styles.navLink} offset='-25'>
                        Портфолио
                    </AnchorLink>
                </li>
                <li className={styles.navItem}>
                    <AnchorLink onClick={onClickLinkHandler} href="#hire" className={styles.navLink} offset='-50'>
                        Контакты
                    </AnchorLink>
                </li>
                <li>
                    <ul className={styles.socialAside + active}>
                        <SocialItem itemClass={styles.socialItem} link={'https://github.com/MikhailPtichkin88'}
                                    svgClass={styles.svg} svgPic={`${sprite}#github`}/>
                        <SocialItem itemClass={styles.socialItem} link={'https://t.me/MikePt5'} svgClass={styles.svg}
                                    svgPic={`${sprite}#telegram`}/>
                        <SocialItem itemClass={styles.socialItem} link={'https://t.me/MikePt5styles.svg'}
                                    svgClass={styles.svg} svgPic={`${sprite}#whatsapp`}/>
                        <SocialItem itemClass={styles.socialItem}
                                    link={'https://www.linkedin.com/in/milkhail-ptichkin/'} svgClass={styles.svg}
                                    svgPic={`${sprite}#linkedin`}/>
                    </ul>
                </li>
            </ul>

        </nav>
    );
};

export default Nav;