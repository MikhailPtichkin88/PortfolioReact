import React from 'react';
import styles from './Skill.module.css'

type SkillType = {
    title: string
    style: string
    descr: string
}


const Skill = (props: SkillType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}
                 style={{backgroundImage: `url(${props.style})`}}></div>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.descr}>{props.descr}</p>
        </div>
    );
};

export default Skill;