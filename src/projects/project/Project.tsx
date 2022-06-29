import React from 'react';
import styles from './Project.module.css'

type ProjectPropsType={
    picture:string
    title:string
    descr:string
}


const Project = (props:ProjectPropsType) => {
    return (
        <div className={styles.project}>
            <div style={{backgroundImage:`url(${props.picture})`}}
                className={styles.picture}>
                <button className={styles.button}>Смотреть</button>
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.descr}>{props.descr}</p>
            </div>
        </div>
    );
};

export default Project;