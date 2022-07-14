import React from 'react';
import Skill from "./skill/Skill";
import styles from './Skills.module.scss'
import sprite from '../../common/images/skills/skillsSprite.svg'


const Skills = () => {
    return (
        <section className={styles.section} id="skills">
            <div className="container">
                <h2 className={styles.title+' title'}>Навыки</h2>
                <div className={styles.subtitle}>В работе использую:</div>
                <div className={styles.wrapper}>
                  <Skill title='HTML5+CSS3' img={`${sprite}#html`}/>
                  <Skill title='SCSS' img={`${sprite}#sass`}/>
                  <Skill title='JavaScript' img={`${sprite}#js`}/>
                  <Skill title='TypeScript' img={`${sprite}#ts`}/>
                  <Skill title='React' img={`${sprite}#react`}/>
                  <Skill title='Redux' img={`${sprite}#redux`}/>
                  <Skill title='Git' img={`${sprite}#git`}/>
                  <Skill title='Gulp' img={`${sprite}#gulp(1)`}/>
                  <Skill title='JQuery' img={`${sprite}#jquery`} place='2'/>
                  <Skill title='Figma' img={`${sprite}#figma`}/>
                </div>
            </div>
        </section>
    );
};

export default Skills;