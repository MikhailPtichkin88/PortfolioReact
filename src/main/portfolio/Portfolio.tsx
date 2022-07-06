import React from 'react';
import Project from "./project/Project";
import styles from './Portfolio.module.scss'
import fresh from '../../common/images/projects/Fresh.jpg'
import desire from '../../common/images/projects/desire.jpg'

const Portfolio = () => {
    return (
        <section className={styles.section} id="portfolio">
            <div className="container">
                <h2 className={styles.title+' title'}>Портфолио</h2>
                <div className={styles.wrapper}>

                   <Project img={fresh} title="Fresh" descr="Multi page internet shop site" stack="SCSS,GULP,JQUERY"/>
                    <Project img={desire} title="Desire" descr="Multi page internet shop site" stack="SCSS,GULP,JQUERY"/>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;