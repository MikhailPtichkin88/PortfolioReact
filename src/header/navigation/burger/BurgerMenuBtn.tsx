import React from 'react';
import styles from "./BurgerMenuBtn.module.scss";

type BurgerMenuPropsType = {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}
const BurgerMenuBtn = (props: BurgerMenuPropsType) => {
    const onClickHandler = () => {
        props.setIsOpen(!props.isOpen)
    }
    const active = props.isOpen ? ` ${styles.active}` : ""
    return (
        <button className={styles.btn + active} onClick={onClickHandler}>
            <span className={styles.line + active}></span>
            <span className={styles.line + active}></span>
            <span className={styles.line + active}></span>
        </button>
    );
};

export default BurgerMenuBtn;