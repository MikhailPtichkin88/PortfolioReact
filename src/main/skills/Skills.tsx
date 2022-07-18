import React from 'react';
import Skill from "./skill/Skill";
import styles from './Skills.module.scss'
import sprite from '../../common/images/skills/skillsSprite.svg'
import c from './animate.module.scss'
import ScrollAnimation from 'react-animate-on-scroll';
import click from '../../common/images/skills/click.png'

const Skills = () => {

    return (
        <section className={styles.section} id="skills">
            <div className="container">
                <h2 className={styles.title + ' title'}>Навыки</h2>
                <div className={styles.subtitle}>В работе использую:</div>
                <div className={styles.wrapper}>
                    <ScrollAnimation animateIn={c.animate__fadeInUp} animateOnce={true}>
                        <Skill title='HTML5+CSS3' img={`${sprite}#html`}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={c.animate__fadeInUp} duration={1.2} animateOnce={true}>
                        <Skill title='SCSS' img={`${sprite}#sass`}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={c.animate__fadeInUp} duration={1.4} animateOnce={true}>
                        <Skill title='JavaScript' img={`${sprite}#js`}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={c.animate__fadeInUp} duration={1.6} animateOnce={true}>
                        <Skill title='TypeScript' img={`${sprite}#ts`}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={c.animate__fadeInUp} duration={1.8} animateOnce={true}>
                        <Skill title='React' img={`${sprite}#react`}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={c.animate__fadeInUp} duration={2} animateOnce={true}>
                        <Skill title='Redux' img={`${sprite}#redux`}/>
                    </ScrollAnimation>
                    <ScrollAnimation className={styles.click} animateIn={c.animate__fadeInUp} duration={2.2} animateOnce={true}>
                        <a href="https://github.com/MikhailPtichkin88">
                            <Skill title='Git' img={`${sprite}#git`}/>
                        </a>
                        <img src={click} className={styles.imgClick}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={c.animate__fadeInUp} duration={2.4} animateOnce={true}>
                        <Skill title='Gulp' img={`${sprite}#gulp(1)`}/>
                    </ScrollAnimation>
                    <ScrollAnimation  animateIn={c.animate__fadeInUp} duration={2.6}
                                     animateOnce={true}>
                        <Skill title='JQuery' img={`${sprite}#jquery`}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={c.animate__fadeInUp} duration={2.8} animateOnce={true}>
                        <Skill title='Figma' img={`${sprite}#figma`}/>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
};

export default Skills;