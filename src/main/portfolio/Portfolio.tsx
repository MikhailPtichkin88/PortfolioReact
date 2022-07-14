import React from 'react';
import Project from "./project/Project";
import Masonry from 'react-masonry-css'
import styles from './Portfolio.module.scss'
import fresh from '../../common/images/projects/Fresh.jpg'
import desire from '../../common/images/projects/desire.jpg'
import todo from '../../common/images/projects/todolist.jpg'
import social from '../../common/images/projects/social.jpg'
import pulse from '../../common/images/projects/pulse.jpg'
import paprika from '../../common/images/projects/paprika.jpg'
import mavic from '../../common/images/projects/mavic.jpg'
import counter from '../../common/images/projects/counter.jpg'




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
                    <Project img={todo} title="ToDo list" descr="React organizer app" stack="React, Redux, react-redux" height='280px'/>
                    <Project img={desire} title="Desire" descr="Multi page internet shop site" stack="SCSS,GULP,JQUERY" height='240px'/>
                    <Project img={paprika} title="Healthy food" descr="Calories calculator" stack="native JS without plugins" height='280px'/>
                    <Project img={social} title="Friends" descr="SocialItem network" stack="React, Redux, restApi" height='340px'/>
                    <Project img={mavic} title="Mavic" descr="Page scroll site with animation" stack="SCSS,GULP,JS" height='280px'/>
                    <Project img={counter} title="Counter" descr="Counter React app" stack="React, Redux, react-redux" height='320px'/>
                    <Project img={pulse} title="Pulse" descr="Fitness band internet shop site" stack="SCSS,GULP,JQUERY" height='280px'/>
                </Masonry>
            </div>
        </section>
    );
};

export default Portfolio;