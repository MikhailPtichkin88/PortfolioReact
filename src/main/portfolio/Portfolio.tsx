import React, {useContext} from 'react';
import Project from "./project/Project";
import Masonry from 'react-masonry-css'
import styles from './Portfolio.module.scss'
import fresh from '../../common/images/projects/Fresh.jpg'
import desire from '../../common/images/projects/desire.jpg'
import todo from '../../common/images/projects/todolist.jpg'
import quiz from '../../common/images/projects/quiz.jpg'
import social from '../../common/images/projects/social.jpg'
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
                    <ScrollAnimation animateIn={c.animate__fadeInUp} animateOnce={true} duration={1.8}>
                        <Project img={quiz} title="Cards quiz" descr="Team project, educational app" stack="React, Redux, Typescript, restApi, Axios, Formik, React Router"
                                 height='240px'
                                 link={'https://mikhailptichkin88.github.io/cards'}
                                 gitHubLink={'https://github.com/MikhailPtichkin88/cards'}/>
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
                    <ScrollAnimation animateIn={c.animate__fadeInUp} animateOnce={true}>
                        <Project img={fresh} title="Fresh" descr="Multi page internet shop site" stack="SCSS,GULP,JQUERY"
                                 height='320px'
                                 link={'https://mikhailptichkin88.github.io/Fresh/'}
                                 gitHubLink={'https://github.com/MikhailPtichkin88/Fresh'}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={c.animate__fadeInUp} animateOnce={true} duration={2}>
                    <Project img={story} title="Storybook" descr="Custom components showcase" stack="React, Typescript, Storybook"
                             height='280px'
                             link={'https://mikhail-ptichkin.info/storybook/'}
                             gitHubLink={'https://github.com/MikhailPtichkin88/HomeworkReact/tree/master/src/p2-homeworks'}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={c.animate__fadeInUp} animateOnce={true} duration={2.2}>
                    <Project img={counter} title="Test apps" descr="Pre-employment test assignments" stack="React, Redux, Typescript, RestAPI,  unit tests, redux-thunk, MUI"
                             height='320px'
                             link={'https://MikhailPtichkin88.github.io/filterEvents'}
                             gitHubLink={'https://github.com/MikhailPtichkin88/filterEvents'}
                             link2={'https://github.com/MikhailPtichkin88/Contacts'}
                             gitHubLink2={'https://github.com/MikhailPtichkin88/Counter'}
                    />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={c.animate__fadeInUp} animateOnce={true} duration={2.4}>
                    <Project img={social} title="Social Network" descr="React Class Components study project" stack="React, Redux, Typescript, RestApi, Axios, redux-thunk"
                             height='280px'
                             link={'https://github.com/MikhailPtichkin88/social-network'}
                             gitHubLink={'https://github.com/MikhailPtichkin88/social-network'}/>
                    </ScrollAnimation>
                </Masonry>
            </div>
        </section>
    );
};

export default Portfolio;