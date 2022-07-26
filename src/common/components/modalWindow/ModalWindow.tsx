import React, {useContext, useEffect} from 'react';
import styles from './ModalWindow.module.scss'
import {Context} from "../../../App";
import sprite from '../../images/modalWindow/sprite.svg'

type ModalWindowPropsType = {
    isSuccess: boolean
    callback: () => void
}

const ModalWindow = (props: ModalWindowPropsType) => {

    let langActive = useContext(Context)

    useEffect(()=>{
        document.body.style.overflowY = "hidden"
        return ()=>{
            document.body.style.overflowY = "initial"
        }
    },[])

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.upperBlock}>
                    <svg className={styles.img}>
                        <use xlinkHref={props.isSuccess
                            ? `${sprite}#success`
                            : `${sprite}#error`
                        }></use>
                    </svg>
                    {
                        props.isSuccess
                            ? <><h3 className={styles.title}>{(langActive === 'rus')
                                ? "Спасибо!"
                                : "Thank You!"}</h3>
                                <p className={styles.message}>{(langActive === 'rus')
                                ? "Я свяжусь с вами в ближайшее время"
                                : "I will contact you ASAP."}</p>
                            </>
                            : <><h3 className={styles.title}>{(langActive === 'rus')
                                ? "Что-то пошло не так :("
                                : "Something went wrong :("}</h3>
                                <p className={styles.message}>{(langActive === 'rus')
                                    ? "Попробуйте еще раз"
                                    : "Please, try again later"}</p>
                            </>
                    }

                </div>
                <div className={styles.bottomBlock}>
                    <button onClick={props.callback} className={styles.btn}>ok</button>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;