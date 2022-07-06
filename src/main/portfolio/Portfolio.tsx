import React from 'react';
import Project from "./project/Project";
import Masonry from 'react-masonry-css'
import styles from './Portfolio.module.scss'
import fresh from '../../common/images/projects/Fresh.jpg'
import desire from '../../common/images/projects/desire.jpg'

const Portfolio = () => {
    return (
        <section className={styles.section} id="portfolio">
            <div className="container">
                <h2 className={styles.title+' title'}>Портфолио</h2>
                <Masonry
                    breakpointCols={4}
                    className={styles.masonry}
                    columnClassName={styles.masonryCols}>

                    <Project img={fresh} title="Fresh" descr="Multi page internet shop site" stack="SCSS,GULP,JQUERY" height='220px'/>
                    <Project img={desire} title="Desire" descr="Multi page internet shop site" stack="SCSS,GULP,JQUERY" height='280px'/>
                    <Project img={desire} title="Desire" descr="Multi page internet shop site" stack="SCSS,GULP,JQUERY" height='240px'/>
                    <Project img={desire} title="Desire" descr="Multi page internet shop site" stack="SCSS,GULP,JQUERY" height='280px'/>
                    <Project img={desire} title="Desire" descr="Multi page internet shop site" stack="SCSS,GULP,JQUERY" height='340px'/>
                    <Project img={desire} title="Desire" descr="Multi page internet shop site" stack="SCSS,GULP,JQUERY" height='280px'/>
                    <Project img={desire} title="Desire" descr="Multi page internet shop site" stack="SCSS,GULP,JQUERY" height='320px'/>
                    <Project img={desire} title="Desire" descr="Multi page internet shop site" stack="SCSS,GULP,JQUERY" height='280px'/>
                </Masonry>
            </div>
        </section>
    );
};

export default Portfolio;