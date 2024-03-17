import React from "react";
import styles from "./Skill.module.scss";

type SkillPropsType = {
  title: string;
  img: string;
  isImg?: boolean;
};

const Skill = ({title, img, isImg = false}: SkillPropsType) => {
  return (
    <div className={styles.skillBlock}>
      <div>
        {isImg ? (
          <img width={70} height={70} src={img} alt="technology tool" />
        ) : (
          <svg className={styles.img}>
            <use xlinkHref={img}></use>
          </svg>
        )}
      </div>
      <div className={styles.subtitle}>{title}</div>
    </div>
  );
};

export default Skill;
