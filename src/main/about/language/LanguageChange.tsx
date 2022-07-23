import React, {useContext,} from 'react';
import styles from './LanguageChange.module.scss';
import {Context, LangType} from "../../../App";

type LanguageChangePropsType = {
    active: boolean
    styles?: string
    changeLang: (lang: LangType) => void
}

const LanguageChange = (props: LanguageChangePropsType) => {

    let langActive = useContext(Context)

    const onClickHandlerRus = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        props.changeLang('rus' as const)
        console.log(langActive)
    }
    const onClickHandlerEng = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        props.changeLang('eng' as const)
        console.log(langActive)
    }

    let activeRus = (langActive === 'rus') ? ` ${styles.active}` : ''
    let activeEng = (langActive === 'eng') ? ` ${styles.active}` : ''
    let style = props.active ? `${styles.lang}` : `${styles.lang} ${styles.remove}`

    return (
        <div className={style}>
            <a className={styles.link + " " + activeRus}
               href="#"
               onClick={onClickHandlerRus}
            >RU</a> |
            <a className={styles.link + " " + activeEng}
               href="#"
               onClick={onClickHandlerEng}
            > ENG</a>
        </div>
    );
};

export default LanguageChange;