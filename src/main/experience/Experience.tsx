import React from 'react';
import SliderComponent from "./slider/Slider";
import styles from './Experience.module.scss'
const Experience = () => {
    return (
        <section className={styles.section} id="experience">
            <div className={styles.wrapper}>
                <div className="container">
                    <h2 className="title">
                        Опыт
                    </h2>
                    <SliderComponent/>
                </div>
            </div>
        </section>
    );
};

export default Experience;