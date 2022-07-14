import React from 'react';
import styles from "./Form.module.scss"
import mail from "../../../common/images/hireMe/mail.svg"

const Form = () => {
    return (
        <form className={styles.form}>
            <div className={styles.wrapper}>
                <div className={styles.inputBlock}>
                    <label className={styles.nameLabel} htmlFor="name"></label>
                    <input className={styles.input + ' ' + styles.nameInput} type="text" name="name" id="name"
                           placeholder="Ваше имя"/>

                    <label className={styles.telLabel} htmlFor="tel"></label>
                    <input className={styles.input + ' ' + styles.telInput} type="number" name="tel" id="tel"
                           placeholder="Ваш номер телефона"/>
                </div>
                <div className={styles.textAreaBlock}>
                    <label className={styles.textLabel} htmlFor="text"></label>
                    <textarea className={styles.input + ' ' + styles.textArea} name="text" id="text"
                              placeholder="Текст Вашего сообщения"/>
                </div>
            </div>
            <button className={styles.btn} type="button">Отправить
                <img className={styles.mailImg} src={mail} alt="mail"/>
            </button>
        </form>
    );
};

export default Form;