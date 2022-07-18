import React from 'react';
import styles from './Skill.module.scss'

type SkillPropsType={
    title:string
    img:string

}

const Skill = (props:SkillPropsType) => {

    return (
        <div className={styles.skillBlock} >
            <div>
                <svg className={styles.img}>
                    <use xlinkHref={props.img}></use>
                </svg>
            </div>
            <div className={styles.subtitle}>{props.title}</div>
        </div>
    );
};

export default Skill;