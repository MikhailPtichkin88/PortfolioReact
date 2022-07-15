import React from 'react';
import styles from './Footer.module.scss'
import sprite from '../common/images/footer/footerSprite.svg'
import {SocialItem} from "../common/components/socialItem/SocialItem";


const Footer = () => {
    return (
        <footer className={styles.footerBlock}>
            <div className={styles.container + ' container'}>
                <div className={styles.wrapper}>
                    <div className={styles.textBlock}>
                        <h2 className={styles.title}>Птичкин Михаил</h2>
                        <p className={styles.copyright}>©2022 Все права защищены</p>
                    </div>
                    <ul className={styles.social}>
                        <SocialItem itemClass={styles.socialItem} link={'https://github.com/MikhailPtichkin88'} svgClass={styles.svg} svgPic={`${sprite}#github`}/>
                        <SocialItem itemClass={styles.socialItem} link={'https://t.me/MikePt5'} svgClass={styles.svg} svgPic={`${sprite}#telegram`}/>
                        <SocialItem itemClass={styles.socialItem} link={'https://wa.me/+79266655382'} svgClass={styles.svg} svgPic={`${sprite}#whatsapp`}/>
                        <SocialItem itemClass={styles.socialItem} link={'https://www.linkedin.com/in/milkhail-ptichkin/'} svgClass={styles.svg} svgPic={`${sprite}#linkedin`}/>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;