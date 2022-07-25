import React, {useContext} from 'react';
import styles from './Footer.module.scss'
import sprite from '../common/images/footer/footerSprite.svg'
import {SocialItem} from "../common/components/socialItem/SocialItem";
import {Context} from "../App";


const Footer = () => {
    let langActive = useContext(Context)
    return (
        <footer className={styles.footerBlock}>
            <div className={styles.container + ' container'}>
                <div className={styles.wrapper}>
                    <div className={styles.textBlock}>
                        <h2 className={styles.title}> {
                            (langActive === 'rus')
                                ? "Птичкин Михаил"
                                : "Ptichkin Mikhail"
                        }</h2>
                        <p className={styles.copyright}> {
                            (langActive === 'rus')
                                ? "©2022 Все права защищены"
                                : "©2022 All rights reserved"
                        }</p>
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