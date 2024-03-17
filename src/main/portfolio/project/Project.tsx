import styles from "./Project.module.scss";
import sprite from "../../../common/images/skills/skillsSprite.svg";
import {TStackType} from "../types";

type ProjectPropsType = {
  img: string;
  title: string;
  descr?: string;
  stack: TStackType[];
  link: string;
  gitHubLink: string;
  height?: string;
  link2?: string;
  gitHubLink2?: string;
};

const Project = (props: ProjectPropsType) => {
  return (
    <div className={styles.projectBlock}>
      <div
        className={styles.imgBlock}
        style={{
          backgroundImage: `url(${props.img})`,
          minHeight: `${props.height}`,
        }}
      >
        <div className={styles.stackInfo}>
          <div className={styles.stackBlock}>
            {props?.stack.map((el, index) => {
              return (
                <svg className={styles.stackImg} key={index}>
                  <use xlinkHref={`${sprite}#${el}`}></use>
                </svg>
              );
            })}
          </div>

          <div className={styles.linksBlock}>
            <a
              href={props.link}
              target="_blank"
              className={styles.link}
              rel="noreferrer"
            >
              Demo
            </a>
            {props.link2 && (
              <a
                href={props.link2}
                target="_blank"
                className={styles.link}
                rel="noreferrer"
              >
                Demo
              </a>
            )}
            <a
              href={props.gitHubLink}
              target="_blank"
              className={styles.link}
              rel="noreferrer"
            >
              Code
            </a>
            {props.gitHubLink2 && (
              <a
                href={props.gitHubLink2}
                target="_blank"
                className={styles.link}
                rel="noreferrer"
              >
                Code
              </a>
            )}
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
