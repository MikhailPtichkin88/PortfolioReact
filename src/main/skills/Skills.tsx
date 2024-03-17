import React, {useContext} from "react";
import Skill from "./skill/Skill";
import styles from "./Skills.module.scss";
import sprite from "../../common/images/skills/skillsSprite.svg";
import effector from "../../common/images/skills/effector.png";
import tailwind from "../../common/images/skills/tailwind.png";
import styled from "../../common/images/skills/styled-components.png";
import c from "./animate.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import {Context} from "../../App";

const Skills = () => {
  let langActive = useContext(Context);
  return (
    <section className={styles.section} id="skills">
      <div className="container">
        <h2 className={styles.title + " title"}>
          {langActive === "rus" ? "Навыки" : "Skills"}
        </h2>
        <div className={styles.subtitle}>
          {langActive === "rus" ? "В работе использую:" : "Using now:"}
        </div>
        <div className={styles.wrapper}>
          <ScrollAnimation
            animateIn={c.animate__fadeInUp}
            duration={1.8}
            animateOnce={true}
          >
            <Skill title="React" img={`${sprite}#react`} />
          </ScrollAnimation>

          <ScrollAnimation
            animateIn={c.animate__fadeInUp}
            duration={2}
            animateOnce={true}
          >
            <Skill title="Redux Toolkit" img={`${sprite}#redux`} />
          </ScrollAnimation>

          <ScrollAnimation
            animateIn={c.animate__fadeInUp}
            duration={1.6}
            animateOnce={true}
          >
            <Skill title="TypeScript" img={`${sprite}#ts`} />
          </ScrollAnimation>

          <ScrollAnimation
            animateIn={c.animate__fadeInUp}
            duration={2}
            animateOnce={true}
          >
            <Skill title="Next js" img={`${sprite}#next`} />
          </ScrollAnimation>

          <ScrollAnimation
            animateIn={c.animate__fadeInUp}
            duration={1.4}
            animateOnce={true}
          >
            <Skill title="Effector" img={effector} isImg />
          </ScrollAnimation>

          <ScrollAnimation
            animateIn={c.animate__fadeInUp}
            duration={1.4}
            animateOnce={true}
          >
            <Skill title="Nodejs" img={`${sprite}#nodejs`} />
          </ScrollAnimation>

          <ScrollAnimation
            animateIn={c.animate__fadeInUp}
            duration={1.4}
            animateOnce={true}
          >
            <Skill title="JavaScript" img={`${sprite}#js`} />
          </ScrollAnimation>

          <ScrollAnimation
            animateIn={c.animate__fadeInUp}
            duration={1.4}
            animateOnce={true}
          >
            <Skill title="Express" img={`${sprite}#express`} />
          </ScrollAnimation>

          <ScrollAnimation
            animateIn={c.animate__fadeInUp}
            duration={1.4}
            animateOnce={true}
          >
            <Skill title="Mongo DB" img={`${sprite}#mongodb`} />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn={c.animate__fadeInUp}
            duration={1.4}
            animateOnce={true}
          >
            <Skill title="postgreSQL" img={`${sprite}#postgresql`} />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn={c.animate__fadeInUp}
            duration={1.4}
            animateOnce={true}
          >
            <Skill title="Jest" img={`${sprite}#jest`} />
          </ScrollAnimation>

          <ScrollAnimation
            animateIn={c.animate__fadeInUp}
            duration={1.4}
            animateOnce={true}
          >
            <Skill title="webpack" img={`${sprite}#webpack`} />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn={c.animate__fadeInUp}
            duration={1.4}
            animateOnce={true}
          >
            <Skill title="HTML5+CSS3" img={`${sprite}#html`} />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn={c.animate__fadeInUp}
            duration={1.2}
            animateOnce={true}
          >
            <Skill title="SCSS" img={`${sprite}#sass`} />
          </ScrollAnimation>

          <ScrollAnimation
            animateIn={c.animate__fadeInUp}
            duration={1.4}
            animateOnce={true}
          >
            <Skill title="Styled comp-ts" img={styled} isImg />
          </ScrollAnimation>
          <ScrollAnimation
            className={styles.click}
            animateIn={c.animate__fadeInUp}
            duration={2.2}
            animateOnce={true}
          >
            <a href="https://github.com/MikhailPtichkin88">
              <Skill title="Git" img={`${sprite}#git`} />
            </a>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Skills;
