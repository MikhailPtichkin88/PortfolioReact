import React, {useContext} from 'react';
import Project from "./project/Project";
import Masonry from 'react-masonry-css'
import styles from './Portfolio.module.scss'
import fresh from '../../common/images/projects/Fresh.jpg'
import desire from '../../common/images/projects/desire.jpg'
import todo from '../../common/images/projects/todolist.jpg'
import quiz from '../../common/images/projects/quiz.jpg'
import pulse from '../../common/images/projects/pulse.jpg'
import paprika from '../../common/images/projects/paprika.jpg'
import story from '../../common/images/projects/storybook.jpg'
import counter from '../../common/images/projects/counter.jpg'
import c from "../skills/animate.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import {Context} from "../../App";


const Portfolio = () => {
    let langActive = useContext(Context)

    const breakpointColumnsObj = {
        default: 4,
        991: 3,
        768: 2,
        480: 1,
    };

    return (
        <section className={styles.section} id="portfolio">
            <div className={styles.container + ' container'}>
                <h2 className={styles.title + ' title'}>
                    {
                        (langActive === 'rus')
                            ? "Портфолио"
                            : "Portfolio"
                    }
                    </h2>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={styles.masonry}
                    columnClassName={styles.masonryCols}>
                    <ScrollAnimation animateIn={c.animate__fadeInUp} animateOnce={true}>
                    <Project img={fresh} title="Fresh" descr="Multi page internet shop site" stack="SCSS,GULP,JQUERY"
                             height='220px'
                             link={'https://mikhailptichkin88.github.io/Fresh/'}
                             gitHubLink={'https://github.com/MikhailPtichkin88/Fresh'}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={c.animate__fadeInUp} animateOnce={true} duration={1.2}>
                    <Project img={todo} title="ToDo list" descr="React organizer app" stack="React, Redux Toolkit, Typescript, unit tests, react-redux"
                             height='280px'
                             link={'https://mikhailptichkin88.github.io/todolist/'}
                             gitHubLink={'https://github.com/MikhailPtichkin88/TodoList'}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={c.animate__fadeInUp} animateOnce={true} duration={1.4}>
                    <Project img={desire} title="Desire" descr="Multi page internet shop site" stack="SCSS,GULP,JQUERY"
                             height='240px'
                             link={'https://mikhailptichkin88.github.io/desire-furniture/'}
                             gitHubLink={'https://github.com/MikhailPtichkin88/Desire-furniture'}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={c.animate__fadeInUp} animateOnce={true} duration={1.6}>
                    <Project img={paprika} title="Healthy food" descr="Calories calculator"
                             stack="native JS without plugins" height='280px'
                             link={'https://mikhailptichkin88.github.io/food/'}
                             gitHubLink={'https://github.com/MikhailPtichkin88/Food'}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={c.animate__fadeInUp} animateOnce={true} duration={1.8}>
                    <Project img={quiz} title="Cards quiz" descr="Team project, educational app" stack="React, Redux, Typescript, restApi, Axios, Formik, React Router"
                             height='340px'
                             link={'https://mikhailptichkin88.github.io/cards'}
                             gitHubLink={'https://github.com/MikhailPtichkin88/cards'}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={c.animate__fadeInUp} animateOnce={true} duration={2}>
                    <Project img={story} title="Storybook" descr="Custom components showcase" stack="React, Typescript, Storybook"
                             height='280px'
                             link={'https://mikhail-ptichkin.info/storybook/'}
                             gitHubLink={'https://github.com/MikhailPtichkin88/HomeworkReact/tree/master/src/p2-homeworks'}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={c.animate__fadeInUp} animateOnce={true} duration={2.2}>
                    <Project img={counter} title="Counter" descr="Counter React app" stack="React, Redux, Typescript, react-redux"
                             height='320px'
                             link={'https://mikhailptichkin88.github.io/Counter/'}
                             gitHubLink={'https://github.com/MikhailPtichkin88/Counter'}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={c.animate__fadeInUp} animateOnce={true} duration={2.4}>
                    <Project img={pulse} title="Pulse" descr="Fitness band internet shop site" stack="SCSS,GULP,JQUERY"
                             height='280px'
                             link={'https://mikhailptichkin88.github.io/pulse/'}
                             gitHubLink={'https://github.com/MikhailPtichkin88/Pulse'}/>
                    </ScrollAnimation>
                </Masonry>
            </div>
        </section>
    );
};

export default Portfolio;