import React, {useContext} from 'react';
import SliderComponent from "./slider/Slider";
import styles from './Experience.module.scss'
import {Context} from "../../App";

const Experience = () => {
    let langActive = useContext(Context)
    return (
        <section className={styles.section} id="experience">
            <div className={styles.wrapper}>
                <div className="container">
                    <h2 className="title">
                        {
                            (langActive === 'rus')
                                ? "Опыт"
                                : "Experience"
                        }
                    </h2>
                    <SliderComponent/>
                </div>
            </div>
        </section>
    );
};

export default Experience;