import React from 'react';
import styles from './Project.module.scss'

type ProjectPropsType={
    img:string
    title:string
    descr?:string
    stack?:string
    link?:string
}

const Project = (props:ProjectPropsType) => {
    return (
        <div className={styles.projectBlock} style={{backgroundImage:`url(${props.img})`}}>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.stack}>{props.stack}</p>
            <p className={styles.descr}>{props.descr}</p>
            <a href={props.link} className={styles.link}>
              Смотреть
            </a>
        </div>
    );
};

export default Project;