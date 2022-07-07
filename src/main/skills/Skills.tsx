import React from 'react';
import Skill from "./skill/Skill";
import styles from './Skills.module.scss'
import html from '../../common/images/skills/html.svg';
import sass from '../../common/images/skills/sass.svg';
import ts from '../../common/images/skills/ts.svg';
import js from '../../common/images/skills/js.svg';
import react from '../../common/images/skills/react.svg';
import git from '../../common/images/skills/git.svg';
import gulp from '../../common/images/skills/gulp(1).svg';
import figma from '../../common/images/skills/figma.svg';
import redux from '../../common/images/skills/redux.svg'
import jquery from '../../common/images/skills/jquery.svg'



const Skills = () => {
    return (
        <section className={styles.section} id="skills">
            <div className="container">
                <h2 className={styles.title+' title'}>Навыки</h2>
                <div className={styles.subtitle}>В работе использую:</div>
                <div className={styles.wrapper}>
                  <Skill title='HTML5+CSS3' img={html}/>
                  <Skill title='SCSS' img={sass}/>
                  <Skill title='JavaScript' img={js}/>
                  <Skill title='TypeScript' img={ts}/>
                  <Skill title='React' img={react}/>
                  <Skill title='Redux' img={redux}/>
                  <Skill title='Git' img={git}/>
                  <Skill title='Gulp' img={gulp}/>
                  <Skill title='JQuery' img={jquery} place='2'/>
                  <Skill title='Figma' img={figma}/>
                </div>
            </div>
        </section>
    );
};

export default Skills;