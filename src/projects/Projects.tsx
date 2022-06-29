import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import styles from './Projects.module.css';

import picVegetables from '../common/images/projects/Fresh.jpg';
import picFurniture from '../common/images/projects/desire.jpg';
import Project from "./project/Project";


const Projects = () => {
    return (
        <section className={styles.projectsBlock}>
            <div className={styleContainer.containerColumn}>

                <h2 className={styles.title}>Мои работы</h2>

                <div className={styles.projects}>
                    <Project picture={picVegetables} title="Название проекта" descr="Краткое описание"/>
                    <Project picture={picFurniture} title="Название проекта" descr="Краткое описание"/>
                </div>
            </div>
        </section>
    );
};

export default Projects;