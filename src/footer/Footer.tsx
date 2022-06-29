import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import styles from './Footer.module.css'
import sprite from '../common/images/sprite.svg'


const Footer = () => {
    return (
        <footer className={styles.footerBlock}>
            <div className={styleContainer.containerColumn+' '+styles.container}>
                <h2 className={styles.title}>Птичкин Михаил</h2>

                <ul className={styles.social}>
                    <li className={styles.socialItem}>
                        <a className={styles.socialLink} href="#">
                            <svg className={styles.socialImg}>
                                <use xlinkHref={`${sprite}#facebook`}></use>
                            </svg>
                        </a>
                    </li>
                    <li className={styles.socialItem}>
                        <a className={styles.socialLink} href="#">
                            <svg className={styles.socialImg}>
                                <use xlinkHref={`${sprite}#instagram`}></use>
                            </svg>
                        </a>
                    </li>
                    <li className={styles.socialItem}>
                        <a className={styles.socialLink} href="#">
                            <svg className={styles.socialImg}>
                                <use xlinkHref={`${sprite}#telegram`}></use>
                            </svg>
                        </a>
                    </li>
                    <li className={styles.socialItem}>
                        <a className={styles.socialLink} href="#">
                            <svg className={styles.socialImg}>
                                <use xlinkHref={`${sprite}#youtube`}></use>
                            </svg>
                        </a>
                    </li>
                </ul>
                <div className={styles.copyright}>©2022 Все права защищены</div>
            </div>
        </footer>
    );
};

export default Footer;