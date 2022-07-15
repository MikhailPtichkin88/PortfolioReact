import React from 'react';
import styles from './About.module.scss'
import photoWebp from '../../common/images/photo.webp';
import photoJpg from '../../common/images/photo.jpg';
import LanguageChange from "../../header/navigation/language/LanguageChange";
import pdf from '../../common/pdf/print.pdf';

const About = () => {
    return (
        <section id='about'>
            <div className={styles.wrapper}>
                <div className="container">
                    <div className={styles.inner}>
                        <h1 className={styles.name}>
                            Птичкин Михаил
                        </h1>

                        <div className={styles.info}>
                            <span>Frontend developer</span>
                            Россия, Москва
                            <a className={styles.pdfLink} target = "_blank" href={pdf}>
                                распечатать PDF
                            </a>
                        </div>

                        <LanguageChange active={true}/>
                    </div>
                    <div className={styles.photoContainer}>
                        <picture>
                            <source className={styles.photo} srcSet={photoWebp} type="image/webp"/>
                            <img className={styles.photo} src={photoJpg} alt="My photo"/>
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;