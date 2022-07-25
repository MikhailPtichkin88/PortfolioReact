import React, {useContext} from 'react';
import styles from './HireMe.module.scss'
import {SocialItem} from "../../common/components/socialItem/SocialItem";
import sprite from '../../common/images/hireMe/hireMeSprite.svg'
import tel from '../../common/images/hireMe/telephone.svg';
import Form from "./form/Form";
import {Context} from "../../App";

const HireMe = () => {
    let langActive = useContext(Context)
    return (
        <section className={styles.section} id='hire'>
            <div className="container">
                <h2 className={styles.title + ' title'}>
                    {
                        (langActive === 'rus')
                            ? "Рассматриваю варианты удаленной работы"
                            : "I'm considering options for remote work"
                    }
                   </h2>

                <ul className={styles.socialMenu}>
                    <SocialItem itemClass={styles.socialItem} link="mailto:mikhailptichkin1988@gmail.com"
                                svgClass={styles.svg} svgPic={`${sprite}#gmail`}/>
                    <SocialItem itemClass={styles.socialItem} link="https://wa.me/+79266655382" svgClass={styles.svg}
                                svgPic={`${sprite}#whatsapp`}/>
                    <SocialItem itemClass={styles.socialItem} link="https://t.me/MikePt5" svgClass={styles.svg}
                                svgPic={`${sprite}#telegram`}/>
                    <SocialItem itemClass={styles.socialItem} link="https://www.linkedin.com/in/milkhail-ptichkin/"
                                svgClass={styles.svg} svgPic={`${sprite}#linkedin`}/>
                    <SocialItem itemClass={styles.socialItem} link="tel:+79266655382"
                                svgClass={styles.svg} svgPic={`${sprite}#telephone`}/>
                </ul>

                <Form/>
            </div>
        </section>
    );
};

export default HireMe;