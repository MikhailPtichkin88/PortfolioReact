import React from 'react';
import styles from "./BurgerMenuBtn.module.scss";

const BurgerMenuBtn = () => {
    return (
        <button className={styles.btn}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </button>
    );
};

export default BurgerMenuBtn;