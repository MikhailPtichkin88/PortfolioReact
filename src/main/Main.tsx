import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import styles from './Main.module.css'

const Main = () => {

    return (
        <section className={styles.mainBlock}>
            <div className={styleContainer.containerLine}>
                <div className={styles.text}>
                    <span>Привет!</span>
                    <h1>Меня зовут Птичкин Михаил</h1>
                    <span>Я front-end разработчик</span>
                </div>

                <div className={styles.photo}></div>
            </div>

        </section>
    );
};

export default Main;