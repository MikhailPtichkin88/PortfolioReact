import React from 'react';
import styles from './Project.module.scss'

type ProjectPropsType = {
    img: string
    title: string
    descr?: string
    stack?: string
    link: string
    gitHubLink:string
    height?: string
    link2?:string
    gitHubLink2?:string
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={styles.projectBlock}>
            <div className={styles.imgBlock}
                 style={{backgroundImage: `url(${props.img})`, minHeight: `${props.height}`}}>
                <div className={styles.stackInfo}>
                    <p className={styles.stack}><span>Technologies:</span> {props.stack}</p>
                    <div className={styles.linksBlock}>
                        <a href={props.link} className={styles.link}>
                            Demo
                        </a>
                        {
                            props.link2 && <a href={props.link2} className={styles.link}>
                                Code
                            </a>
                        }
                        <a href={props.gitHubLink} className={styles.link}>
                            Code
                        </a>
                        {
                            props.gitHubLink2 &&   <a href={props.gitHubLink2} className={styles.link}>
                                Code
                            </a>
                        }
                    </div>
                </div>
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.descr}>{props.descr}</p>

            </div>

        </div>
    );
};

export default Project;