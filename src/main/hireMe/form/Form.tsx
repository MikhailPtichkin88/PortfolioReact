import React, {ChangeEvent, useContext, useState} from 'react';
import styles from "./Form.module.scss"
import mail from "../../../common/images/hireMe/mail.svg"
import {Context} from "../../../App";
import {send} from 'emailjs-com';


const Form = () => {

    type SendDataType = {
        from_name: string,
        from_mail: string,
        message: string,
    }

    let langActive = useContext(Context)
    let [toSend, setToSend] = useState<SendDataType>({
        from_name: '',
        from_mail: '',
        message: '',
    })

    type ErrorType = 'none' | 'nameError' | 'mailError' | 'messageError'
    const [error, setError] = useState<ErrorType>('none')

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setError('none' as ErrorType)
        setToSend({...toSend, [e.target.name]: e.target.value});
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (toSend.from_name.trim().length < 2) {
            setError('nameError' as ErrorType)

        } else  if (toSend.from_mail.trim().length < 5 || !toSend.from_mail.includes('@')  || (!toSend.from_mail.includes('.ru') && !toSend.from_mail.includes('.com') && !toSend.from_mail.includes('.org')&& !toSend.from_mail.includes('.ua')&& !toSend.from_mail.includes('.by')&& !toSend.from_mail.includes('.info'))) {
            setError('mailError' as ErrorType)
        } else if (toSend.message.trim().length < 2) {
            setError('messageError' as ErrorType)
        } else {
            send(
                'service_s1qsplq',
                'template_enab9z8',
                toSend,
                'laToi1u-5qqXp8qNK'
            )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                });
        }
    };

    let nameErrorClass = (error === "nameError") ? styles.error : ""
    let nameMailClass = (error === "mailError") ? styles.error : ""
    let messageErrorClass = (error === "messageError") ? styles.error : ""

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.wrapper}>
                <div className={styles.inputBlock}>
                    <span className={styles.nameErrorMsg + " " + nameErrorClass}>{
                        (langActive === 'rus')
                            ? "Некорректно введено имя"
                            : "Incorrect name"
                    }</span>
                    <label className="sr-only" htmlFor="from_name">name input field</label>
                    <input className={`${styles.input} ${styles.nameInput} ${nameErrorClass}`}
                           type="text" name='from_name'
                           id="from_name"
                           value={toSend.from_name}
                           onChange={handleChange}
                           placeholder={
                               (langActive === 'rus')
                                   ? "Ваше имя"
                                   : "Your name"
                           }/>

                    <span className={styles.mailErrorMsg + " " + nameMailClass}>{
                        (langActive === 'rus')
                            ? "Некорректно введен email"
                            : "Incorrect email"
                    }</span>
                    <label className="sr-only" htmlFor="from_mail">mail input field</label>
                    <input className={`${styles.input} ${nameMailClass}`}
                           type="text"
                           name="from_mail"
                           id="from_mail"
                           value={toSend.from_mail}
                           onChange={handleChange}
                           placeholder={
                               (langActive === 'rus')
                                   ? "Ваша почта"
                                   : "Your mail"
                           }/>
                </div>
                <div className={styles.textAreaBlock}>

                   <span className={styles.messageErrorMsg + " " + messageErrorClass}>{
                       (langActive === 'rus')
                           ? "Некорректно введено сообщение"
                           : "Incorrect message"
                   }</span>
                    <label className="sr-only" htmlFor="from_mail">message input field</label>
                    <textarea className={`${styles.input} ${styles.textArea} ${messageErrorClass}`}
                              name="message"
                              id="message"
                              value={toSend.message}
                              onChange={handleChange}
                              placeholder={
                                  (langActive === 'rus')
                                      ? "Текст Вашего сообщения"
                                      : "Your message"
                              }/>
                </div>
            </div>
            <button className={styles.btn} type="submit">{
                (langActive === 'rus')
                    ? "Отправить"
                    : "Send"
            }
                <img className={styles.mailImg} src={mail} alt="mail"/>
            </button>
        </form>
    );
};

export default Form;