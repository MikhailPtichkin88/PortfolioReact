import React, {useContext} from "react";
import Project from "./project/Project";
import Masonry from "react-masonry-css";
import styles from "./Portfolio.module.scss";

import desire from "../../common/images/projects/desire.jpeg";
import todo from "../../common/images/projects/todolist.jpg";
import quiz from "../../common/images/projects/quiz.jpg";
import c from "../skills/animate.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import secretSantaImg from "../../common/images/projects/secretSanta.png";
import articleAppImg from "../../common/images/projects/articleApp.png";
import internetShopImg from "../../common/images/projects/internetShop.webp";
import {Context} from "../../App";
import sprite from "../../common/images/footer/footerSprite.svg";

const Portfolio = () => {
  let langActive = useContext(Context);

  const breakpointColumnsObj = {
    default: 3,
    991: 3,
    768: 2,
    480: 1,
  };
  const secretSantaDescr =
    langActive === "rus"
      ? "Продакшн фулстек приложение для проведения Тайного Санты"
      : "A full-stack application enabling anonymous selection of gift givers for Secret Santa sessions";

  const articleAppDescr =
    langActive === "rus"
      ? "Приложение для работы со статьями об IT с архитектурой FSD, сторибуком и тестами разных уровней"
      : "Articles app with Feature Sliced Design architecture, storybook and tests covering";

  const electronicsDescr =
    langActive === "rus"
      ? "Бэкенд приложение для интернет магазина электроники на базе postgreSQL"
      : "Backend for electronics internet shop with postgreSQL date base";

  const freshDescr =
    langActive === "rus"
      ? "Многостраничные сайты интернет-магазинов дизайна интерьеров и доставки продуктов"
      : "Multi page internet sites";

  const quizDescr =
    langActive === "rus"
      ? "Командный проект для изучения английского языка"
      : "Team project app for learning english language";

  const todoDescr =
    langActive === "rus"
      ? "Классическое приложение-органайзер"
      : "React organizer app";
  const githubLinkDescr =
    langActive === "rus"
      ? "Больше проектов в моем репозитории "
      : "More project in my Github repository";
  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.container + " container"}>
        <h2 className={styles.title + " title"}>
          {langActive === "rus" ? "Портфолио" : "Portfolio"}
        </h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.masonry}
          columnClassName={styles.masonryCols}
        >
          <ScrollAnimation
            animateIn={c.animate__fadeInUp}
            animateOnce={true}
            duration={1.8}
          >
            <Project
              img={secretSantaImg}
              title="Secret Santa"
              descr={secretSantaDescr}
              stack={["express", "mongodb", "react", "redux", "ts"]}
              height="240px"
              link={"https://ptichkinproject.ru"}
              gitHubLink={"https://github.com/MikhailPtichkin88/secretSanta"}
            />
          </ScrollAnimation>

          <ScrollAnimation
            animateIn={c.animate__fadeInUp}
            animateOnce={true}
            duration={1.8}
          >
            <Project
              img={articleAppImg}
              title="IT Articles"
              descr={articleAppDescr}
              stack={["react", "redux", "ts", "jest", "webpack"]}
              height="240px"
              link={"https://chic-queijadas-51c5e4.netlify.app/"}
              gitHubLink={
                "https://github.com/MikhailPtichkin88/UlbiTV_frontend"
              }
            />
          </ScrollAnimation>

          <ScrollAnimation
            animateIn={c.animate__fadeInUp}
            animateOnce={true}
            duration={1.8}
          >
            <Project
              img={quiz}
              title="Cards quiz"
              descr={quizDescr}
              stack={["react", "redux", "ts"]}
              height="240px"
              link={"https://mikhailptichkin88.github.io/cards"}
              gitHubLink={"https://github.com/MikhailPtichkin88/cards"}
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn={c.animate__fadeInUp} animateOnce={true}>
            <Project
              img={desire}
              title="Fresh & Desire"
              descr={freshDescr}
              stack={["html", "js", "sass", "gulp"]}
              height="320px"
              link={"https://mikhailptichkin88.github.io/Fresh/"}
              link2={"https://mikhailptichkin88.github.io/desire-furniture/"}
              gitHubLink2={
                "https://github.com/MikhailPtichkin88/Desire-furniture"
              }
              gitHubLink={"https://github.com/MikhailPtichkin88/Fresh"}
            />
          </ScrollAnimation>

          <ScrollAnimation
            animateIn={c.animate__fadeInUp}
            animateOnce={true}
            duration={1.8}
          >
            <Project
              img={internetShopImg}
              title="Electronics"
              descr={electronicsDescr}
              stack={["nodejs", "postgresql", "express"]}
              height="240px"
              link={"https://server-bay-eight.vercel.app/"}
              gitHubLink={"https://github.com/MikhailPtichkin88/server"}
            />
          </ScrollAnimation>

          <ScrollAnimation
            animateIn={c.animate__fadeInUp}
            animateOnce={true}
            duration={1.2}
          >
            <Project
              img={todo}
              title="ToDo list"
              descr={todoDescr}
              stack={["react", "redux", "ts"]}
              height="280px"
              link={"https://mikhailptichkin88.github.io/todolist/"}
              gitHubLink={"https://github.com/MikhailPtichkin88/TodoList"}
            />
          </ScrollAnimation>
        </Masonry>
        <div className={styles.githubWrapper}>
          <a
            href="https://github.com/MikhailPtichkin88?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className={styles.githubLink}
          >
            {githubLinkDescr}
            <svg width={30} height={30}>
              <use xlinkHref={`${sprite}#github`}></use>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
