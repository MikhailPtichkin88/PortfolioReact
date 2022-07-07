import React from 'react';
import styles from './Skill.module.scss'

type SkillPropsType={
    title:string
    img:string
    place?:string
}

const Skill = (props:SkillPropsType) => {
    return (
        <div className={styles.skillBlock} style={{gridColumnStart:`${props.place ? props.place : ''}`}}>
            <div>
                <img className={styles.img} src={props.img} alt="HTML5"/>
            </div>
            <div className={styles.subtitle}>{props.title}</div>
        </div>
    );
};

export default Skill;