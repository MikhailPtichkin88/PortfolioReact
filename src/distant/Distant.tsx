import React from 'react';
import styles from './Distant.module.css';
import styleContainer from '../common/styles/Container.module.css';

const Distant = () => {
    return (
        <section className={styles.distantBlock}>
            <div className={styleContainer.containerColumn + ' ' + styles.container}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Рассматриваю варианты удаленной работы</h2>
                    <button className={styles.btn}>Нанять меня</button>
                </div>
            </div>

        </section>
    );
};

export default Distant;