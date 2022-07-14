import React from 'react';
import styles from './HireMe.module.scss'
import {SocialItem} from "../../common/components/socialItem/SocialItem";
import sprite from '../../common/images/hireMe/hireMeSprite.svg'
import phone from '../../common/images/hireMe/phone.svg'
import Form from "./form/Form";

const HireMe = () => {
    return (
        <section className={styles.section} id='hire'>
            <div className="container">
                <h2 className={styles.title + ' title'}>Рассматриваю варианты удаленной работы</h2>
                <a className={styles.telBtn} href="tel:+79266655382">нанять меня
                    <img src={phone} className={styles.telImg} alt="telephone picture"/>
                </a>
                <ul className={styles.socialMenu}>
                    <SocialItem itemClass={styles.socialItem} link="mailto:mikhailptichkin1988@gmail.com"
                                svgClass={styles.svg} svgPic={`${sprite}#gmail`}/>
                    <SocialItem itemClass={styles.socialItem} link="https://wa.me/+79266655382" svgClass={styles.svg}
                                svgPic={`${sprite}#whatsapp`}/>
                    <SocialItem itemClass={styles.socialItem} link="https://t.me/MikePt5" svgClass={styles.svg}
                                svgPic={`${sprite}#telegram`}/>
                    <SocialItem itemClass={styles.socialItem} link="https://www.linkedin.com/in/milkhail-ptichkin/"
                                svgClass={styles.svg} svgPic={`${sprite}#linkedin`}/>
                </ul>

                <Form/>
            </div>
        </section>
    );
};

export default HireMe;