import React, {useContext, useEffect, useState} from 'react';
import styles from './Nav.module.scss';
import BurgerMenuBtn from "./burger/BurgerMenuBtn";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {SocialItem} from "../../common/components/socialItem/SocialItem";
import sprite from "../../common/images/footer/footerSprite.svg";
import NavButtonUp from "./navButtonUp/NavButtonUp";
import {Context} from "../../App";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [aside, setAside] = useState(false)
    const [asideAdaptive, setAsideAdaptive] = useState(false)
    const toggleBurgerMenuHandler = (isOpen: boolean) => setIsOpen(isOpen)
    const onClickLinkHandler = () => setIsOpen(false)
    const active = isOpen ? ` ${styles.active}` : ""
    const asideClass = aside ? ` ${styles.aside}` : ""

    const checkScrollPosition = () => {

        if (window.scrollY > 500) setAside(true)
        if (window.scrollY < 300)
            setAside(false)
        setAsideAdaptive(false)
        if (window.innerWidth < 576) setAside(false)
        if (window.innerWidth < 576 && window.scrollY > 500) setAsideAdaptive(true)
    }

    let langActive = useContext(Context)

    useEffect(() => {
        window.addEventListener('scroll', onClickLinkHandler, {once: true});
        window.addEventListener('scroll', checkScrollPosition)
        return () => {
            window.removeEventListener('scroll', onClickLinkHandler,)
            window.removeEventListener('scroll', checkScrollPosition,)
        }
    })


    return (
        <nav className={styles.menu}>
            <BurgerMenuBtn isOpen={isOpen} setIsOpen={toggleBurgerMenuHandler}/>
            <ul className={styles.navList + active + asideClass} onScroll={() => setIsOpen(false)}>
                <li className={styles.navItem}>
                    <AnchorLink onClick={onClickLinkHandler} href="#about"
                                className={styles.navLink + ' ' + styles.active} offset='100'>
                        {
                            (langActive === 'rus')
                                ? "Обо мне"
                                : "About me"
                        }
                    </AnchorLink>
                </li>
                <li className={styles.navItem}>
                    <AnchorLink onClick={onClickLinkHandler} href="#experience"offset='20' className={styles.navLink}>
                        {
                            (langActive === 'rus')
                                ? "Опыт"
                                : "Experience"
                        }
                    </AnchorLink>
                </li>
                <li className={styles.navItem}>
                    <AnchorLink onClick={onClickLinkHandler} href="#skills" offset='40' className={styles.navLink}>
                        {
                            (langActive === 'rus')
                                ? "Навыки"
                                : "Skills"
                        }
                    </AnchorLink>
                </li>
                <li className={styles.navItem}>
                    <AnchorLink onClick={onClickLinkHandler} href="#portfolio" className={styles.navLink} offset='10'>
                        {
                            (langActive === 'rus')
                                ? "Портфолио"
                                : "Portfolio"
                        }
                    </AnchorLink>
                </li>
                <li className={styles.navItem}>
                    <AnchorLink onClick={onClickLinkHandler} href="#hire" className={styles.navLink} offset='-50'>
                        {
                            (langActive === 'rus')
                                ? "Контакты"
                                : "Contacts"
                        }
                    </AnchorLink>
                </li>
                <li className={styles.socialAside + active}>
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
            <NavButtonUp visible={asideAdaptive}/>
        </nav>
    );
};

export default Nav;