import React from 'react';
import styles from './LanguageChange.module.scss';

type LanguageChangePropsType={
    active:boolean
    styles?:string
}

const LanguageChange = (props:LanguageChangePropsType) => {
    let style = props.active ? `${styles.lang}` : `${styles.lang} ${styles.remove}`
    return (
        <div className={style}>
            <a className={styles.link+" "+styles.link_active} href="index.html">RU
            </a> | <a className={styles.link} href="indexEng.html"> ENG</a>
        </div>
    );
};

export default LanguageChange;