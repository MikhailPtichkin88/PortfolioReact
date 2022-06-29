import React from 'react';
import styles from './Skills.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import html from '../common/images/html5.svg';
import js from '../common/images/JS.svg';
import react from '../common/images/react.svg';


const Skills = () => {
    let descr = 'Подробное описание навыка'
    return (
        <section className={styles.skillsBlock}>
            <div className={stylesContainer.containerColumn}>
                <h2 className={styles.title}>Мои скиллы</h2>
                <div className={styles.skills}>
                    <Skill style={html} title="HTML&CSS" descr={descr}/>
                    <Skill style={js} title="JS" descr={descr}/>
                    <Skill style={react} title="React" descr={descr}/>
                </div>
            </div>
        </section>
    );
};

export default Skills;